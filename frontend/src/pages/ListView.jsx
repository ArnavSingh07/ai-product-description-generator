import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ListView({
  darkMode,
  setDarkMode,
}) {
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
          className="border p-2 rounded w-full mb-6"
        />

        <div className="space-y-4">

          <div className="border rounded-lg p-4 shadow">
            <h2 className="font-bold">
              Organic Mango Pickle
            </h2>

            <button className="mt-3 bg-gray-700 text-white px-3 py-1 rounded">
              View Details
            </button>
          </div>

          <div className="border rounded-lg p-4 shadow">
            <h2 className="font-bold">
              Millet Snacks
            </h2>

            <button className="mt-3 bg-gray-700 text-white px-3 py-1 rounded">
              View Details
            </button>
          </div>

          <div className="border rounded-lg p-4 shadow">
            <h2 className="font-bold">
              Traditional Masala Mix
            </h2>

            <button className="mt-3 bg-gray-700 text-white px-3 py-1 rounded">
              View Details
            </button>
          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}