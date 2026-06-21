import { Link } from "react-router-dom";

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="font-bold text-xl">
          AI Product Generator
        </h1>

        <div className="space-x-4 flex items-center">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/components">Components</Link>
          <Link to="/listview">List View</Link>
          <Link to="/aifeature">AI Feature</Link>

          <button
  onClick={() => {
    console.log("clicked");
    setDarkMode(!darkMode);
  }}
  className="bg-white text-black px-2 py-1 rounded"
>
  {darkMode ? "☀ Light" : "🌙 Dark"}
</button>
        </div>
      </div>
    </nav>
  );
}