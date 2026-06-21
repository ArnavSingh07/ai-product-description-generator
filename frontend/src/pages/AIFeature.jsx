import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AIFeature({
  darkMode,
  setDarkMode,
}) {
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
          />

          <input
            type="text"
            placeholder="Ingredients"
            className="border p-3 rounded w-full"
          />

          <input
            type="text"
            placeholder="Weight"
            className="border p-3 rounded w-full"
          />

          <select className="border p-3 rounded w-full">
            <option>Premium</option>
            <option>Traditional</option>
            <option>Health Focused</option>
          </select>

          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Generate Description
          </button>

          <div className="border rounded-lg p-4 min-h-[150px]">
            Generated Output will appear here...
          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}