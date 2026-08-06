import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-center py-20 px-10">

          <h2 className="text-4xl font-bold">
            Ready to Create Better Product Content?
          </h2>

          <p className="mt-5 text-lg opacity-90 max-w-2xl mx-auto">
            Start generating AI-powered product descriptions,
            SEO content and marketing copy in seconds.
          </p>

          <Link
            to="/aifeature"
            className="inline-block mt-10 bg-white text-indigo-700 font-semibold px-8 py-4 rounded-xl hover:scale-105 transition"
          >
            Start Generating
          </Link>

        </div>

      </div>
    </section>
  );
}