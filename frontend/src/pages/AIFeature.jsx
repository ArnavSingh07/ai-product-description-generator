import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AIFeature({
  darkMode,
  setDarkMode,
}) {
  const [productName, setProductName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [weight, setWeight] = useState("");
  const [tone, setTone] = useState("Premium");
  const [result, setResult] = useState("");

  const generateDescription = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/products", {
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
      });

      const data = await response.json();

      if (data.success) {
        setResult(
          data.product.description ||
            "✅ Product saved successfully in MongoDB!"
        );

        // Clear form
        setProductName("");
        setIngredients("");
        setWeight("");
        setTone("Premium");
      } else {
        setResult(data.message);
      }
    } catch (error) {
      setResult("❌ Error connecting to backend.");
    }
  };

  return (
    <>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main className="max-w-4xl mx-auto p-6 min-h-screen">

        <h1 className="text-3xl font-bold mb-6">
          AI Product Description Generator
        </h1>

        <div className="space-y-4">

          <input
            type="text"
            placeholder="Product Name"
            className="border p-3 rounded w-full"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Ingredients"
            className="border p-3 rounded w-full"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />

          <input
            type="text"
            placeholder="Weight"
            className="border p-3 rounded w-full"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />

          <select
            className="border p-3 rounded w-full"
            value={tone}
            onChange={(e) => setTone(e.target.value)}
          >
            <option>Premium</option>
            <option>Traditional</option>
            <option>Health Focused</option>
          </select>

          <button
            onClick={generateDescription}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Generate Description
          </button>

          <div className="border rounded-lg p-4 min-h-[150px] whitespace-pre-wrap">
            {result || "Generated Output will appear here..."}
          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}