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
    fetch("http://localhost:5000/api/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Unable to load products.");
        setLoading(false);
      });
  }, []);

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
          {filteredProducts.map((product) => (
            <div
              key={product.id}
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
              <p className="mt-2 text-gray-700">
  <strong>Description:</strong> {product.description}
</p>

              <button className="mt-3 bg-gray-700 text-white px-3 py-1 rounded">
                View Details
              </button>
            </div>
          ))}
        </div>

      </main>

      <Footer />
    </>
  );
}