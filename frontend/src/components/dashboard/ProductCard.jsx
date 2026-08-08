export default function ProductCard({ product, darkMode }) {
  return (
    <div
      className={`rounded-2xl border p-6 shadow-sm hover:shadow-xl transition-all duration-300 ${
        darkMode
          ? "bg-gray-800 border-gray-700 text-white"
          : "bg-white border-gray-200"
      }`}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">
          {product.productName}
        </h2>

        <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 text-xs font-semibold">
          {product.tone}
        </span>
      </div>

      <div className="space-y-2 text-sm">
        <p>
          <strong>Ingredients:</strong> {product.ingredients}
        </p>

        <p>
          <strong>Weight:</strong> {product.weight}
        </p>
      </div>

      <div className="mt-5">
        <h3 className="font-semibold mb-2">
          AI Description
        </h3>

        <p
          className={`text-sm leading-7 ${
            darkMode
              ? "text-gray-300"
              : "text-gray-600"
          }`}
        >
          {product.description}
        </p>
      </div>
    </div>
  );
}