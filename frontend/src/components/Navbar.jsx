import { Link } from "react-router-dom";

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-700">
          AI Product Description Generator
        </h1>

        <div className="flex items-center gap-6">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/listview">Products</Link>
          <Link to="/aifeature">AI Feature</Link>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-green-600 text-white px-3 py-1 rounded"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
}