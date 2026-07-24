import { useEffect, useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/ui/Loader";
import Toast from "../components/ui/Toast";

export default function Dashboard({ darkMode, setDarkMode }) {
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

 const filteredProducts = useMemo(() => {
  return products.filter((product) =>
    product.productName
      .toLowerCase()
      .includes(search.toLowerCase())
  );
}, [products, search]);

  // 🔴 TEMPORARY: Test Error Boundary
  //throw new Error("Test Error Boundary");

  return (
    <>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main
        className={`max-w-6xl mx-auto p-6 min-h-screen ${
          darkMode
            ? "bg-gray-900 text-white"
            : "bg-white text-black"
        }`}
      >
        <h1 className="text-3xl font-bold mb-2">
          Dashboard
        </h1>

        <p className="mb-6">
          Manage and view your AI-generated product descriptions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
  <div className="bg-blue-600 text-white rounded-xl p-5 shadow">
    <h3 className="text-lg font-semibold">Total Products</h3>
    <p className="text-3xl font-bold mt-2">{products.length}</p>
  </div>

  <div className="bg-green-600 text-white rounded-xl p-5 shadow">
    <h3 className="text-lg font-semibold">Search Results</h3>
    <p className="text-3xl font-bold mt-2">{filteredProducts.length}</p>
  </div>

  <div className="bg-purple-600 text-white rounded-xl p-5 shadow">
    <h3 className="text-lg font-semibold">Status</h3>
    <p className="text-xl font-bold mt-2">
      {loading ? "Loading..." : "Ready"}
    </p>
  </div>
</div>

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 mb-6 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {loading && <Loader />}

        {error && <Toast message={error} />}

        {!loading && filteredProducts.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16 border rounded-xl bg-gray-50 shadow-sm">
  <div className="text-6xl mb-4">📦</div>

  <h2 className="text-2xl font-bold text-gray-700 mb-2">
    No Products Yet
  </h2>

  <p className="text-gray-500 text-center max-w-md">
    Create your first AI-generated product description using the AI Feature page.
  </p>
</div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product._id}
             className={`border rounded-xl p-5 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
  darkMode
    ? "bg-gray-800 text-white"
    : "bg-white text-black"
}`}
            >
              <h2 className="text-xl font-bold mb-3">
                {product.productName}
              </h2>

              <p>
                <strong>Ingredients:</strong> {product.ingredients}
              </p>

              <p>
                <strong>Weight:</strong> {product.weight}
              </p>

              <p>
                <strong>Tone:</strong> {product.tone}
              </p>

              <p className="mt-3">
                <strong>Description:</strong>
              </p>

              <p className="text-sm mt-2">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}