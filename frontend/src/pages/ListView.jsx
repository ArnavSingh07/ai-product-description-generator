import { useEffect, useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/ui/Loader";
import Toast from "../components/ui/Toast";

import {
  Search,
  Package,
  Pencil,
  Trash2,
  Download,
  FileText,
  FileJson,
  X,
} from "lucide-react";

import {
  exportPDF,
  exportTXT,
  exportJSON,
} from "../utils/exportProduct";
export default function ListView({
  darkMode,
  setDarkMode,
}) {

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [toastMessage, setToastMessage] =
    useState("");

  const [toastType, setToastType] =
    useState("success");

  const [editingProduct, setEditingProduct] =
    useState(null);

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
const showToast = (
  message,
  type = "success"
) => {
  setToastMessage(message);
  setToastType(type);

  setTimeout(() => {
    setToastMessage("");
  }, 3000);
};
const fetchProducts = async () => {
  try {

    setLoading(true);

    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/products`
    );

    if (!response.ok) {
      throw new Error(
        "Failed to fetch products."
      );
    }

    const data = await response.json();

    setProducts(data);

  } catch (err) {

    console.log(err);

    setError("Unable to load products.");

  } finally {

    setLoading(false);

  }
};
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
const updateProduct = async () => {

  const token = localStorage.getItem("token");

  try {

    const response = await fetch(

      `${import.meta.env.VITE_API_URL}/api/products/${editingProduct._id}`,

      {
        method: "PUT",

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },

        body: JSON.stringify(editForm),
      }
    );

    const data = await response.json();

    if (data.success) {

      setProducts((prev) =>
        prev.map((item) =>
          item._id === editingProduct._id
            ? data.product
            : item
        )
      );

      showToast("Product Updated");

      setEditingProduct(null);

    } else {

      showToast(data.message, "error");

    }

  } catch (err) {

    console.log(err);

    showToast(
      "Unable to update product",
      "error"
    );

  }
};
const deleteProduct = async (id) => {

  if (
    !window.confirm(
      "Delete this product?"
    )
  )
    return;

  const token = localStorage.getItem("token");

  try {

    const response = await fetch(

      `${import.meta.env.VITE_API_URL}/api/products/${id}`,

      {
        method: "DELETE",

        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error();
    }

    setProducts((prev) =>
      prev.filter(
        (item) => item._id !== id
      )
    );

    showToast("Product Deleted");

  } catch {

    showToast(
      "Delete Failed",
      "error"
    );

  }
};
const filteredProducts = useMemo(() => {

  return products.filter((product) =>
    product.productName
      .toLowerCase()
      .includes(search.toLowerCase())
  );

}, [products, search]);

return (
  <>
    <Navbar
      darkMode={darkMode}
      setDarkMode={setDarkMode}
    />

    <main className="min-h-screen bg-gray-50 py-10">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col lg:flex-row justify-between items-center mb-8">

          <div>

            <h1 className="text-4xl font-bold">
              Saved Products
            </h1>

            <p className="text-gray-500 mt-2">
              Manage all your AI generated products.
            </p>

          </div>

          <div className="relative mt-5 lg:mt-0">

            <Search
              size={20}
              className="absolute left-4 top-3 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search product..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="pl-11 pr-4 py-3 rounded-xl border w-80 focus:ring-2 focus:ring-indigo-500 outline-none"
            />

          </div>

        </div>
                {loading ? (

          <div className="flex justify-center py-20">

            <Loader />

          </div>

        ) : (
                    <>
            {filteredProducts.length === 0 ? (

              <div className="bg-white rounded-2xl shadow-md p-16 text-center">

                <Package
                  size={60}
                  className="mx-auto text-gray-300"
                />

                <h2 className="text-2xl font-bold mt-5">

                  No Products Found

                </h2>

                <p className="text-gray-500 mt-2">

                  Generate your first AI product.

                </p>

              </div>

            ) : (
                            <div className="grid lg:grid-cols-2 gap-7">

                {filteredProducts.map((product) => (
                                    <div
                    key={product._id}
                    className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6"
                  >

                    <div className="flex justify-between">

                      <div>

                        <h2 className="text-2xl font-bold">

                          {product.productName}

                        </h2>

                        <p className="text-indigo-600 mt-1">

                          {product.tone}

                        </p>

                      </div>

                      <div className="text-sm text-gray-400">

                        {new Date(
                          product.createdAt
                        ).toLocaleDateString()}

                      </div>

                    </div>

                    <hr className="my-5" />
                                        <h3 className="font-semibold">

                      Description

                    </h3>

                    <p className="text-gray-600 mt-2 line-clamp-4">

                      {product.description}

                    </p>

                    <div className="mt-5">

                      <span className="font-semibold">

                        Weight :

                      </span>{" "}

                      {product.weight}

                    </div>

                    <div className="mt-2">

                      <span className="font-semibold">

                        Ingredients :

                      </span>

                      <p className="text-gray-600 mt-1">

                        {product.ingredients}

                      </p>

                    </div>
                                        <div className="flex flex-wrap gap-3 mt-6">

                      <button
                        onClick={() =>
                          editProduct(product)
                        }
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                      >
                        <Pencil size={18} />
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          deleteProduct(product._id)
                        }
                        className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                      >
                        <Trash2 size={18} />
                        Delete
                      </button>

                      <button
                        onClick={() =>
                          exportPDF(product)
                        }
                        className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
                      >
                        <Download size={18} />
                        PDF
                      </button>

                      <button
                        onClick={() =>
                          exportTXT(product)
                        }
                        className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg"
                      >
                        <FileText size={18} />
                        TXT
                      </button>

                      <button
                        onClick={() =>
                          exportJSON(product)
                        }
                        className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg"
                      >
                        <FileJson size={18} />
                        JSON
                      </button>

                    </div>

                  </div>
                                  ))}

              </div>

            )}

          </>

        )}
                {toastMessage && (
          <Toast
            message={toastMessage}
            type={toastType}
          />
        )}

      </div>

    </main>
          {editingProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-5">

          <div className="bg-white rounded-2xl w-full max-w-2xl shadow-xl">

            <div className="flex justify-between items-center border-b p-6">

              <h2 className="text-2xl font-bold">
                Edit Product
              </h2>

              <button
                onClick={() => setEditingProduct(null)}
              >
                <X size={24} />
              </button>

            </div>

            <div className="p-6 space-y-5">

              <div>

                <label className="font-semibold">
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
                  className="w-full border rounded-lg p-3 mt-2"
                />

              </div>

              <div>

                <label className="font-semibold">
                  Ingredients
                </label>

                <textarea
                  rows={3}
                  value={editForm.ingredients}
                  onChange={(e) =>
                    setEditForm({
                      ...editForm,
                      ingredients: e.target.value,
                    })
                  }
                  className="w-full border rounded-lg p-3 mt-2"
                />

              </div>

              <div>

                <label className="font-semibold">
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
                  className="w-full border rounded-lg p-3 mt-2"
                />

              </div>

              <div>

                <label className="font-semibold">
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
                  className="w-full border rounded-lg p-3 mt-2"
                >
                  <option>Premium</option>
                  <option>Professional</option>
                  <option>Friendly</option>
                  <option>Luxury</option>
                  <option>Minimal</option>
                </select>

              </div>

              <div>

                <label className="font-semibold">
                  Description
                </label>

                <textarea
                  rows={8}
                  value={editForm.description}
                  onChange={(e) =>
                    setEditForm({
                      ...editForm,
                      description: e.target.value,
                    })
                  }
                  className="w-full border rounded-lg p-3 mt-2"
                />

              </div>

            </div>

            <div className="border-t p-6 flex justify-end gap-3">

              <button
                onClick={() => setEditingProduct(null)}
                className="px-6 py-3 rounded-lg border"
              >
                Cancel
              </button>

              <button
                onClick={updateProduct}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg"
              >
                Save Changes
              </button>

            </div>

          </div>

        </div>
      )}

      <Footer />
    </>
  );
}
