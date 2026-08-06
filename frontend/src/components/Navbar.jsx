import { Link, NavLink, useNavigate } from "react-router-dom";
import { Sparkles, LayoutDashboard, Package, LogOut } from "lucide-react";

export default function Navbar({ darkMode, setDarkMode }) {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const navClass = ({ isActive }) =>
    `transition-colors ${
      isActive
        ? "text-indigo-600 font-semibold"
        : "text-gray-600 hover:text-indigo-600"
    }`;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white">
            <Sparkles size={20} />
          </div>

          <div>
            <h1 className="text-lg font-bold text-gray-900">
              ProductPilot AI
            </h1>

            <p className="text-xs text-gray-500">
              AI Product Content Studio
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">

          <NavLink to="/" className={navClass}>
            Home
          </NavLink>

          <NavLink to="/about" className={navClass}>
            About
          </NavLink>

          {token && (
            <>
              <NavLink to="/dashboard" className={navClass}>
                Dashboard
              </NavLink>

              <NavLink to="/listview" className={navClass}>
                Products
              </NavLink>

              <NavLink to="/aifeature" className={navClass}>
                Generate
              </NavLink>
            </>
          )}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {!token ? (
            <>
              <Link
                to="/login"
                className="text-gray-700 hover:text-indigo-600 transition"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="px-4 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition"
              >
                Get Started
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-500 text-white hover:bg-red-600 transition"
            >
              <LogOut size={18} />
              Logout
            </button>
          )}
        </div>

      </div>
    </header>
  );
}