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

  const editProduct = async (product) => {
    const newName = prompt("Enter Product Name", product.productName);

    if (!newName || newName.trim() === "") return;

    const token = localStorage.getItem("token");

    try {
      const response = await fetch(
        `http://localhost:5000/api/products/${product._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            productName: newName,
            ingredients: product.ingredients,
            weight: product.weight,
            tone: product.tone,
            description: product.description,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
       setProducts((prevProducts) =>
  prevProducts.map((p) =>
    p._id === product._id ? data.product : p
  )
);

        showToast("✅ Product updated successfully!", "success");
      } else {
        showToast(data.message || "Update failed.", "error");
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

      showToast("✅ Product deleted successfully!", "success");
    } catch (err) {
      console.error(err);
      showToast("❌ Failed to delete product.", "error");
    }
  };

  const filteredProducts = products.filter((product) =>
    product.productName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main className="max-w-6xl mx-auto p-6 min-h-screen">

        <Toast
          message={toastMessage}
          type={toastType}
        />

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

              <p className="mt-3">
                <strong>Description:</strong><br />
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
                  Delete>
                </button>
              </div>
            </div>
          ))}

        </div>

      </main>

      <Footer />
    </>
  );
}