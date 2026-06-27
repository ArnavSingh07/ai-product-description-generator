import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 text-center">
      <h1 className="text-5xl font-bold mb-4">
        AI Product Description Generator
      </h1>

      <p className="text-lg text-gray-600 mb-8">
        Generate professional product descriptions for food processing MSMEs using AI.
      </p>

      <Link
        to="/aifeature"
        className="bg-green-600 text-white px-6 py-3 rounded"
      >
        Get Started
      </Link>
    </section>
  );
}