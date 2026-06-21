import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Dashboard({
  darkMode,
  setDarkMode,
}) {
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
        <h1 className="text-3xl font-bold mb-6">
          Dashboard
        </h1>

        <p className="mb-8">
          Manage and view AI-generated product descriptions.
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          <div
            className={`border rounded-lg p-4 shadow ${
              darkMode
                ? "bg-gray-800 text-white"
                : "bg-white text-black"
            }`}
          >
            <h2 className="font-bold text-lg mb-2">
              Description 1
            </h2>

            <p>
              Premium product description for organic mango pickle.
            </p>
          </div>

          <div
            className={`border rounded-lg p-4 shadow ${
              darkMode
                ? "bg-gray-800 text-white"
                : "bg-white text-black"
            }`}
          >
            <h2 className="font-bold text-lg mb-2">
              Description 2
            </h2>

            <p>
              SEO-friendly description for packaged spices.
            </p>
          </div>

          <div
            className={`border rounded-lg p-4 shadow ${
              darkMode
                ? "bg-gray-800 text-white"
                : "bg-white text-black"
            }`}
          >
            <h2 className="font-bold text-lg mb-2">
              Description 3
            </h2>

            <p>
              Marketplace-ready content for millet snacks.
            </p>
          </div>

        </div>

        <div className="mt-8">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Generate New Description
          </button>
        </div>
      </main>

      <Footer />
    </>
  );
}