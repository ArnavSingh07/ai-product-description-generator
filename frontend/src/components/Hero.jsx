import { Link } from "react-router-dom";
import { Sparkles, Wand2, CheckCircle, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-violet-100">
      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT SIDE */}
        <div>

          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-6">
            <Sparkles size={16} />
            AI Powered Content Generation
          </span>

          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
            Create Amazing
            <span className="text-indigo-600"> Product Content </span>
            in Seconds.
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Generate professional product descriptions, SEO titles,
            keywords, marketplace listings and marketing copy using
            Generative AI.
          </p>

          <div className="mt-8 space-y-3">

            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-500" size={20} />
              SEO Optimized Descriptions
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-500" size={20} />
              AI Generated Keywords
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-500" size={20} />
              Amazon & Shopify Ready
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-500" size={20} />
              Save & Manage Products
            </div>

          </div>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              to="/aifeature"
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold flex items-center gap-2 transition"
            >
              Start Generating
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/about"
              className="px-6 py-3 rounded-xl border border-gray-300 hover:border-indigo-500 hover:text-indigo-600 transition"
            >
              Learn More
            </Link>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="flex justify-center">

          <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md border">

            <div className="flex items-center gap-2 mb-6">

              <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white">
                <Wand2 size={20} />
              </div>

              <div>
                <h3 className="font-bold">
                  AI Generated Content
                </h3>

                <p className="text-sm text-gray-500">
                  Generated in 2.3 seconds
                </p>
              </div>

            </div>

            <div className="space-y-5">

              <div>

                <h4 className="text-sm font-semibold text-gray-500">
                  Product
                </h4>

                <p className="font-bold text-lg">
                  Organic Ragi Cookies
                </p>

              </div>

              <div>

                <h4 className="text-sm font-semibold text-gray-500">
                  SEO Score
                </h4>

                <div className="w-full bg-gray-200 rounded-full h-3 mt-2">

                  <div className="bg-green-500 h-3 rounded-full w-[92%]"></div>

                </div>

                <p className="text-green-600 font-semibold mt-2">
                  92 / 100
                </p>

              </div>

              <div>

                <h4 className="text-sm font-semibold text-gray-500 mb-2">
                  Keywords
                </h4>

                <div className="flex flex-wrap gap-2">

                  {["Organic","Healthy","Millets","Snacks"].map((tag)=>(
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm"
                    >
                      {tag}
                    </span>
                  ))}

                </div>

              </div>

              <div>

                <h4 className="text-sm font-semibold text-gray-500 mb-2">
                  Description Preview
                </h4>

                <p className="text-gray-600 leading-7 text-sm">
                  Delicious organic ragi cookies made from premium millets,
                  rich in fiber and perfect for healthy snacking...
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}