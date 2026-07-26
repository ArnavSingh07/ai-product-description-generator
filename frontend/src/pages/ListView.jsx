import { useEffect, useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/ui/Loader";
import Toast from "../components/ui/Toast";

export default function ListView({ darkMode, setDarkMode }) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");

  const [editingProduct, setEditingProduct] = useState(null);

  const [editForm, setEditForm] = useState({
    productName: "",
    ingredients: "",
    weight: "",
    tone: "",
    description: "",
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const showToast = (message, type = "success") => {
    setToastMessage(message);
    setToastType(type);

    setTimeout(() => {
      setToastMessage("");
    }, 3000);
  };

  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/products");

      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await res.json();
      setProducts(data);
    } catch (err) {
      setError("Unable to load products.");
    } finally {
      setLoading(false);
    }
  };

  // Open Edit Modal
  const editProduct = (product) => {
    setEditingProduct(product);

    setEditForm({
      productName: product.productName,
      ingredients: product.ingredients,
      weight: product.weight,
      tone: product.tone,
      description: product.description,
    });
  };

  // Update Product
  const updateProduct = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(
        `http://localhost:5000/api/products/${editingProduct._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
  productName: editForm.productName.trim(),
  ingredients: editForm.ingredients.trim(),
  weight: editForm.weight.trim(),
  tone: editForm.tone.trim(),
  description: editForm.description.trim(),
}),
        }
      );

      const data = await response.json();

      if (data.success) {
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product._id === editingProduct._id
              ? data.product
              : product
          )
        );

        showToast("✅ Product updated successfully!");

        setEditingProduct(null);
      } else {
        showToast(data.message, "error");
      }
    } catch (error) {
      console.error(error);
      showToast("❌ Failed to update product.", "error");
    }
  };

  const deleteProduct = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) {
      return;
    }

    const token = localStorage.getItem("token");

    try {
      const res = await fetch(
        `http://localhost:5000/api/products/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) {
        throw new Error("Delete failed");
      }

      setProducts((prevProducts) =>
        prevProducts.filter((product) => product._id !== id)
      );

      showToast("✅ Product deleted successfully!");
    } catch (err) {
      console.error(err);
      showToast("❌ Failed to delete product.", "error");
    }
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.productName
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [products, search]);

  return(
  <>
  <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

  <main className="max-w-6xl mx-auto p-6 min-h-screen">

    <Toast message={toastMessage} type={toastType} />

    <h1 className="text-3xl font-bold mb-6">
      Saved Descriptions
    </h1>

    <input
      type="text"
      placeholder="Search descriptions..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full border border-gray-300 rounded-lg p-3 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    {loading && <Loader />}

    {error && <Toast message={error} type="error" />}

    <div className="space-y-4">

      {filteredProducts.length === 0 && !loading && (
        <div className="flex flex-col items-center justify-center py-16 border rounded-xl bg-gray-50 shadow-sm">
          <div className="text-6xl mb-4">📦</div>

          <h2 className="text-2xl font-bold text-gray-700 mb-2">
            No Products Found
          </h2>

          <p className="text-gray-500 text-center max-w-md">
            It looks like you haven't saved any AI-generated product descriptions yet.
            Generate your first description using the AI Feature page.
          </p>
        </div>
      )}

      {filteredProducts.map((product) => (
        <div
          key={product._id}
          className="border rounded-xl p-5 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          <h2 className="text-xl font-bold text-gray-800">
            {product.productName}
          </h2>

          <p className="mt-2">
            <strong>Ingredients:</strong> {product.ingredients}
          </p>

          <p>
            <strong>Weight:</strong> {product.weight}
          </p>

          <p>
            <strong>Tone:</strong> {product.tone}
          </p>

          <p className="mt-3 whitespace-pre-wrap">
            <strong>Description:</strong>
            <br />
            {product.description || "No description available"}
          </p>

          <div className="mt-5 flex gap-3">
            <button
              onClick={() => editProduct(product)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition-all duration-300"
            >
              Edit
            </button>

            <button
              onClick={() => deleteProduct(product._id)}
              className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg transition-all duration-300"
            >
              Delete
            </button>
          </div>
        </div>
      ))}

    </div>

    {/* Edit Modal */}
    {editingProduct && (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">

        <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl p-6 relative">
          <button
  onClick={() => setEditingProduct(null)}
  className="absolute top-4 right-4 text-gray-500 hover:text-red-600 text-2xl font-bold"
>
  ×
</button>

          <h2 className="text-2xl font-bold mb-6">
            Edit Product
          </h2>

          <div className="space-y-4">

            <div>
              <label className="block font-semibold mb-1">
                Product Name
              </label>

              <input
                type="text"
                value={editForm.productName}
                onChange={(e) =>
                  setEditForm({
                    ...editForm,
                    productName: e.target.value,
                  })
                }
                className="w-full border rounded-lg p-3"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">
                Ingredients
              </label>

              <textarea
                rows="3"
                value={editForm.ingredients}
                onChange={(e) =>
                  setEditForm({
                    ...editForm,
                    ingredients: e.target.value,
                  })
                }
                className="w-full border rounded-lg p-3"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">
                Weight
              </label>

              <input
                type="text"
                value={editForm.weight}
                onChange={(e) =>
                  setEditForm({
                    ...editForm,
                    weight: e.target.value,
                  })
                }
                className="w-full border rounded-lg p-3"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">
                Tone
              </label>

              <select
                value={editForm.tone}
                onChange={(e) =>
                  setEditForm({
                    ...editForm,
                    tone: e.target.value,
                  })
                }
                className="w-full border rounded-lg p-3"
              >
                <option value="Professional">Professional</option>
                <option value="Friendly">Friendly</option>
                <option value="Premium">Premium</option>
                <option value="Luxury">Luxury</option>
                <option value="Marketing">Marketing</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-1">
                Description
              </label>

              <textarea
                rows="6"
                value={editForm.description}
                onChange={(e) =>
                  setEditForm({
                    ...editForm,
                    description: e.target.value,
                  })
                }
                className="w-full border rounded-lg p-3"
              />
            </div>

          </div>

          <div className="flex justify-end gap-3 mt-6">

            <button
              onClick={() => setEditingProduct(null)}
              className="px-5 py-2 rounded-lg border hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              onClick={updateProduct}
              className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white"
            >
              Update Product
            </button>

          </div>

        </div>

      </div>
    )}

  </main>

  <Footer />
  </>
);
}