import {
  Sparkles,
  Image,
  Search,
  Database,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI Content Generation",
    description:
      "Generate high-quality product descriptions, titles, and marketing content in seconds using Generative AI.",
  },
  {
    icon: Image,
    title: "Image-Based Generation",
    description:
      "Upload product images and let AI understand the product before creating compelling descriptions.",
  },
  {
    icon: Search,
    title: "SEO Optimized",
    description:
      "Generate SEO-friendly titles, keywords, and meta descriptions to improve product visibility.",
  },
  {
    icon: Database,
    title: "Product Management",
    description:
      "Save, edit, search, and manage all generated product content from one dashboard.",
  },
];

export default function FeatureSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-indigo-600 font-semibold">
            FEATURES
          </span>

          <h2 className="text-4xl font-bold mt-3">
            Everything You Need to Create
            <span className="text-indigo-600">
              {" "}
              Amazing Product Content
            </span>
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            ProductPilot AI helps businesses create professional
            e-commerce content with AI in just a few clicks.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="rounded-2xl border p-8 hover:shadow-xl transition duration-300 hover:-translate-y-2"
              >

                <div className="w-14 h-14 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 mb-6">
                  <Icon size={28} />
                </div>

                <h3 className="font-bold text-xl mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}