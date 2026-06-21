import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Signup({
  darkMode,
  setDarkMode,
}) {
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

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-lg p-3"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-lg p-3"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded-lg p-3"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full border rounded-lg p-3"
            />

            <button
              type="button"
              className="w-full bg-green-600 text-white p-3 rounded-lg"
            >
              Create Account
            </button>
          </form>

          <p className="text-center text-xs text-gray-500 mt-4">
            User authentication and database integration will be implemented in future phases.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}