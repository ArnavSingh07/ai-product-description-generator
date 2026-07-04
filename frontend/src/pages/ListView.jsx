import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/ui/Loader";
import Toast from "../components/ui/Toast";

export default function ListView({ darkMode, setDarkMode }) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

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

    if (!newName || newName.trim() === "") {
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5000/api/products/${product._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
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
        setProducts(
          products.map((p) =>
            p._id === product._id ? data.product : p
          )
        );

        alert("✅ Product updated successfully!");
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("❌ Failed to update product.");
    }
  };

  const deleteProduct = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) {
      return;
    }

    try {
      const res = await fetch(
        `http://localhost:5000/api/products/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!res.ok) {
        throw new Error("Delete failed");
      }

      setProducts(products.filter((product) => product._id !== id));

      alert("✅ Product deleted successfully!");
    } catch (err) {
      alert("❌ Failed to delete product.");
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
        <h1 className="text-3xl font-bold mb-6">
          Saved Descriptions
        </h1>

        <input
          type="text"
          placeholder="Search descriptions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-full mb-6"
        />

        {loading && <Loader />}

        {error && <Toast message={error} />}

        <div className="space-y-4">
          {filteredProducts.length === 0 && !loading && (
            <p>No products found.</p>
          )}

          {filteredProducts.map((product) => (
            <div
              key={product._id}
              className="border rounded-lg p-4 shadow"
            >
              <h2 className="font-bold text-xl">
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

              <p className="mt-2">
                <strong>Description:</strong>{" "}
                {product.description || "No description available"}
              </p>

              <div className="mt-4 flex gap-3">
                <button
                  onClick={() => editProduct(product)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteProduct(product._id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                >
                  Delete
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