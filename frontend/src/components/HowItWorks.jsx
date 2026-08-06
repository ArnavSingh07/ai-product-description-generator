import { Upload, BrainCircuit, Download } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload or Enter Details",
    description:
      "Upload a product image or enter product information to begin content generation.",
  },
  {
    icon: BrainCircuit,
    title: "AI Generates Content",
    description:
      "Our AI creates optimized product descriptions, SEO keywords and marketing content instantly.",
  },
  {
    icon: Download,
    title: "Save & Export",
    description:
      "Save your generated content, edit it anytime, or export it for your e-commerce store.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-indigo-600 font-semibold">
            HOW IT WORKS
          </span>

          <h2 className="text-4xl font-bold mt-3">
            Generate Product Content in
            <span className="text-indigo-600"> 3 Simple Steps</span>
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-10">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow hover:shadow-xl transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-600 mb-6">
                  <Icon size={30} />
                </div>

                <h3 className="text-xl font-bold mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {step.description}
                </p>

                <div className="mt-8 text-5xl font-bold text-gray-200">
                  0{index + 1}
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}