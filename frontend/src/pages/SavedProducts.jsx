import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductModal from "../components/products/ProductModal";
import EditProductModal from "../components/products/EditProductModal";

export default function SavedProducts({ darkMode, setDarkMode }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [editingProduct, setEditingProduct] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  // =============================
  // Fetch Products
  // =============================
  const fetchProducts = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/products`
      );

      const data = await response.json();

      setProducts(data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load products.");
    } finally {
      setLoading(false);
    }
  };

  // =============================
  // Search Products
  // =============================
  const searchProducts = async (query) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/products/search?q=${query}`
      );

      const data = await response.json();

      setProducts(data);
    } catch (error) {
      console.error(error);
      toast.error("Search failed.");
    }
  };

  // =============================
  // Delete Product
  // =============================
  const deleteProduct = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this product permanently?"
    );

    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/products/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (response.ok) {
        setProducts((prev) =>
          prev.filter((item) => item._id !== id)
        );

        toast.success("Product deleted successfully!");
      } else {
        toast.error(data.message || "Delete failed.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Server Error");
    }
  };

  // =============================
  // Update Product
  // =============================
  const updateProduct = async (updatedData) => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/products/${editingProduct._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(updatedData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setProducts((prev) =>
          prev.map((product) =>
            product._id === editingProduct._id
              ? data.product
              : product
          )
        );

        toast.success("Product updated successfully!");

        setShowEditModal(false);
        setEditingProduct(null);
      } else {
        toast.error(data.message || "Update failed.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Server Error");
    }
  };

  return (
    <>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main className="min-h-screen bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-col md:flex-row justify-between items-center mb-8">

            <div>
              <h1 className="text-4xl font-bold">
                Saved Products
              </h1>

              <p className="text-gray-500 mt-2">
                Manage your AI-generated products
              </p>
            </div>

            <input
              type="text"
              placeholder="🔍 Search Product..."
              value={search}
              onChange={(e) => {
                const value = e.target.value;

                setSearch(value);

                if (value.trim() === "") {
                  fetchProducts();
                } else {
                  searchProducts(value);
                }
              }}
              className="mt-5 md:mt-0 w-full md:w-80 px-4 py-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none"
            />

          </div>

          {loading ? (

            <div className="text-center py-20">

              <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto"></div>

              <p className="mt-5 text-lg">
                Loading Products...
              </p>

            </div>

          ) : products.length === 0 ? (

            <div className="bg-white rounded-2xl shadow p-12 text-center">

              <h2 className="text-2xl font-bold">
                No Products Found
              </h2>

              <p className="text-gray-500 mt-2">
                Generate and save your first AI product.
              </p>

            </div>

          ) : (

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {products.map((product) => (

                <div
                  key={product._id}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 border"
                >

                  <h2 className="text-2xl font-bold mb-3">
                    {product.productName}
                  </h2>

                  <p className="text-gray-600 line-clamp-4 leading-7 mb-5">
                    {product.description}
                  </p>

                  <div className="space-y-2 mb-6">

                    <p>
                      <strong>Weight:</strong> {product.weight}
                    </p>

                    <p>
                      <strong>Tone:</strong> {product.tone}
                    </p>

                  </div>

                  <div className="grid grid-cols-3 gap-3">

                    <button
                      onClick={() => {
                        setSelectedProduct(product);
                        setShowModal(true);
                      }}
                      className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
                    >
                      View
                    </button>

                    <button
                      onClick={() => {
                        setEditingProduct(product);
                        setShowEditModal(true);
                      }}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteProduct(product._id)}
                      className="bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg"
                    >
                      Delete
                    </button>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>
      </main>

      {showModal && (
        <ProductModal
          product={selectedProduct}
          onClose={() => {
            setShowModal(false);
            setSelectedProduct(null);
          }}
        />
      )}

      {showEditModal && (
        <EditProductModal
          product={editingProduct}
          onClose={() => {
            setShowEditModal(false);
            setEditingProduct(null);
          }}
          onUpdate={updateProduct}
        />
      )}

      <Footer />
    </>
  );
}