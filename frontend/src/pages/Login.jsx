import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Login() {
  return (
    <>
      <Navbar />

      <main className="max-w-md mx-auto p-6 my-10">
        <div className="bg-white shadow-lg rounded-xl p-6 border">
          <h1 className="text-3xl font-bold text-center mb-2">
            Welcome Back
          </h1>

          <p className="text-center text-gray-600 mb-6">
            Login to access your AI Product Description Generator dashboard.
          </p>

          <form className="space-y-4">
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

            <button
              type="button"
              className="w-full bg-blue-600 text-white p-3 rounded-lg"
            >
              Login
            </button>
          </form>

          <p className="text-center mt-4 text-sm">
            Don't have an account? Sign Up
          </p>

          <p className="text-center text-xs text-gray-500 mt-4">
            Authentication functionality will be integrated in future versions.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}