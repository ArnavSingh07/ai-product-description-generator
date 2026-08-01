import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AIFeature({ darkMode, setDarkMode }) {
  const [productName, setProductName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [weight, setWeight] = useState("");
  const [tone, setTone] = useState("Premium");

  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generateDescription = async () => {
    if (!productName || !ingredients || !weight || !tone) {
      setError("⚠️ Please fill all the fields.");
      return;
    }

    setLoading(true);
    setError("");
    setResult("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/ai/generate`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            productName,
            ingredients,
            weight,
            tone,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        setResult(data.description);
      } else {
        setError(data.message || "Failed to generate description.");
      }
    } catch (err) {
      console.error(err);
      setError("❌ Unable to connect to the backend.");
    } finally {
      setLoading(false);
    }
  };

  const saveProduct = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/products`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            productName,
            ingredients,
            weight,
            tone,
            description: result,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("✅ Product saved successfully!");

        setProductName("");
        setIngredients("");
        setWeight("");
        setTone("Premium");
        setResult("");
      } else {
        alert(data.message || "Failed to save product.");
      }
    } catch (error) {
      console.error(error);
      alert("❌ Server Error");
    }
  };

  return (
    <>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main className="max-w-4xl mx-auto p-6 min-h-screen">
        <h1 className="text-4xl font-bold text-center mb-2">
          🤖 AI Product Description Generator
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Generate professional AI-powered product descriptions using Gemini AI.
        </p>

        <div className="bg-white shadow-lg rounded-xl p-6 space-y-5">
          <input
            type="text"
            placeholder="Product Name"
            className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Ingredients"
            className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />

          <input
            type="text"
            placeholder="Weight (Example: 500g)"
            className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />

          <select
            className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={tone}
            onChange={(e) => setTone(e.target.value)}
          >
            <option value="Premium">Premium</option>
            <option value="Traditional">Traditional</option>
            <option value="Health Focused">Health Focused</option>
            <option value="Modern">Modern</option>
            <option value="Luxury">Luxury</option>
          </select>

          <button
            onClick={generateDescription}
            disabled={loading}
            className={`w-full py-3 rounded-lg text-white font-semibold transition ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Generating..." : "✨ Generate Description"}
          </button>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 p-4 rounded-lg">
              {error}
            </div>
          )}

          <div className="border rounded-xl p-5 min-h-[220px] bg-gray-50 shadow-sm whitespace-pre-wrap leading-8">
            {loading ? (
              <div className="flex flex-col items-center justify-center h-full">
                <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-600"></div>

                <p className="mt-4 text-blue-600 font-semibold">
                  🤖 Gemini AI is generating your description...
                </p>
              </div>
            ) : result ? (
              <>
                <h2 className="text-xl font-bold mb-4 text-green-700">
                  ✅ Generated Description
                </h2>

                <p>{result}</p>

                <button
                  onClick={saveProduct}
                  className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
                >
                  💾 Save Product
                </button>
              </>
            ) : (
              <div className="text-gray-500 text-center mt-12">
                AI generated description will appear here...
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}