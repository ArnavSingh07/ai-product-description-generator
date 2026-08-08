import { X, Download } from "lucide-react";
import exportPDF from "../../utils/exportPDF";

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">

      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto">

        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">

          <div>
            <h2 className="text-3xl font-bold">
              {product.title || product.productName}
            </h2>

            <p className="text-gray-500 mt-1">
              {product.productName}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <X size={24} />
          </button>

        </div>

        {/* Body */}

        <div className="p-6 space-y-8">

          {/* Description */}

          <div>

            <h3 className="text-xl font-semibold mb-3">
              📝 Product Description
            </h3>

            <p className="text-gray-700 leading-8">
              {product.description}
            </p>

          </div>

          {/* Features */}

          <div>

            <h3 className="text-xl font-semibold mb-3">
              ⭐ Features
            </h3>

            {product.features?.length ? (

              <ul className="list-disc ml-6 space-y-2">

                {product.features.map((feature, index) => (

                  <li key={index}>
                    {feature}
                  </li>

                ))}

              </ul>

            ) : (

              <p>No features available.</p>

            )}

          </div>

          {/* SEO */}

          <div>

            <h3 className="text-xl font-semibold mb-3">
              🔍 SEO Keywords
            </h3>

            <div className="flex flex-wrap gap-2">

              {product.seoKeywords?.map((keyword, index) => (

                <span
                  key={index}
                  className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full"
                >
                  {keyword}
                </span>

              ))}

            </div>

          </div>

          {/* Meta */}

          <div>

            <h3 className="text-xl font-semibold mb-3">
              📄 Meta Description
            </h3>

            <p className="text-gray-700">
              {product.metaDescription}
            </p>

          </div>

          {/* Marketing */}

          <div>

            <h3 className="text-xl font-semibold mb-3">
              📢 Marketing Caption
            </h3>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-xl p-4">

              {product.marketingCaption}

            </div>

          </div>

          {/* Product Info */}

          <div className="grid md:grid-cols-2 gap-5">

            <div className="bg-gray-100 rounded-xl p-4">

              <h4 className="font-semibold mb-2">
                Weight
              </h4>

              <p>{product.weight}</p>

            </div>

            <div className="bg-gray-100 rounded-xl p-4">

              <h4 className="font-semibold mb-2">
                Tone
              </h4>

              <p>{product.tone}</p>

            </div>

          </div>

          {/* Buttons */}

          <div className="grid md:grid-cols-2 gap-4 pt-4">

            <button
              onClick={() => exportPDF(product)}
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl transition"
            >
              <Download size={20} />
              Download PDF
            </button>

            <button
              onClick={onClose}
              className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl transition"
            >
              Close
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}