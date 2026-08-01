import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Signup({ darkMode, setDarkMode }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            password: formData.password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Registration Successful!");
        navigate("/login");
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Server Error");
      console.error(error);
    }
  };

  return (
    <>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main className="max-w-md mx-auto p-6 my-10">
        <div className="bg-white shadow-lg rounded-xl p-6 border">
          <h1 className="text-3xl font-bold text-center mb-2">
            Create Account
          </h1>

          <p className="text-center text-gray-600 mb-6">
            Register to save and manage AI-generated product descriptions.
          </p>

          <form onSubmit={handleSignup} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              required
            />

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

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              required
            />

            <button
              type="submit"
              className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700"
            >
              Create Account
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </>
  );
}