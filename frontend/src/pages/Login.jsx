import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Login({ darkMode, setDarkMode }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Save JWT token
        localStorage.setItem("token", data.token);

        // Save logged-in user
        localStorage.setItem("user", JSON.stringify(data.user));

        alert("Login Successful!");
        navigate("/dashboard");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Server Error");
    }
  };

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="max-w-md mx-auto p-6 my-10">
        <div className="bg-white shadow-lg rounded-xl p-6 border">
          <h1 className="text-3xl font-bold text-center mb-2">
            Welcome Back
          </h1>

          <p className="text-center text-gray-600 mb-6">
            Login to access your AI Product Description Generator dashboard.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              required
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
            >
              Login
            </button>
          </form>

          <div className="flex items-center my-5">
            <div className="flex-1 border-t"></div>
            <span className="px-3 text-gray-500 text-sm">OR</span>
            <div className="flex-1 border-t"></div>
          </div>

          <button
            type="button"
            onClick={() => {
                window.location.href = `${import.meta.env.VITE_API_URL}/api/auth/google`;
            }}
            className="w-full bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition"
          >
            Sign in with Google
          </button>

          <p className="text-center mt-5 text-sm">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 font-semibold">
              Sign Up
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}