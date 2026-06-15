import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="font-bold text-xl">
          AI Product Generator
        </h1>

        <div className="space-x-4">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      </div>
    </nav>
  );
}