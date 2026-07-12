import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ darkMode, setDarkMode }) {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    alert("Logged out successfully!");

    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-700">
          AI Product Description Generator
        </h1>

        <div className="flex items-center gap-6">

          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          {!token ? (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          ) : (
            <>
              <Link to="/dashboard">Dashboard</Link>

              <Link to="/listview">Products</Link>

              <Link to="/aifeature">AI Feature</Link>

              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
              >
                Logout
              </button>
            </>
          )}

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