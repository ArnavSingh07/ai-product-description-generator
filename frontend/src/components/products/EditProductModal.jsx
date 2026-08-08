import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function EditProductModal({
  product,
  onClose,
  onUpdate,
}) {
  const [formData, setFormData] = useState({
    productName: "",
    ingredients: "",
    weight: "",
    tone: "",
  });

  useEffect(() => {
    if (product) {
      setFormData({
        productName: product.productName || "",
        ingredients: product.ingredients || "",
        weight: product.weight || "",
        tone: product.tone || "",
      });
    }
  }, [product]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    onUpdate(formData);
  };

  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-xl p-6">

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            Edit Product
          </h2>

          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <div className="space-y-4">

          <input
            type="text"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            placeholder="Product Name"
            className="w-full border rounded-lg p-3"
          />

          <textarea
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            placeholder="Ingredients"
            rows="4"
            className="w-full border rounded-lg p-3"
          />

          <input
            type="text"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            placeholder="Weight"
            className="w-full border rounded-lg p-3"
          />

          <select
            name="tone"
            value={formData.tone}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            <option>Premium</option>
            <option>Luxury</option>
            <option>Friendly</option>
            <option>Professional</option>
          </select>

          <button
            onClick={handleSubmit}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg"
          >
            Update Product
          </button>

        </div>
      </div>
    </div>
  );
}