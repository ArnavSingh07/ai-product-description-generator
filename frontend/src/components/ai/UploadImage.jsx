import { useEffect, useState } from "react";
import {
  Upload,
  X,
  Image as ImageIcon,
  Loader2,
} from "lucide-react";
import toast from "react-hot-toast";

export default function UploadImage({
  image,
  setImage,
  setProductName,
  setIngredients,
  setWeight,
  imageLoading,
  setImageLoading,
  clearResult,
}) {
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (!image) {
      setPreview(null);
      return;
    }

    const objectUrl = URL.createObjectURL(image);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [image]);

  const handleChange = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    // Validation
    if (!file.type.startsWith("image/")) {
      toast.error("Please upload a valid image.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image must be less than 5MB.");
      return;
    }

    clearResult();

    setImage(file);

    const formData = new FormData();
    formData.append("image", file);

    try {
      setImageLoading(true);

      toast.loading("Analyzing product image...", {
        id: "analyze",
      });

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/ai/analyze-image`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      setProductName(data.data.productName || "");
      setIngredients(data.data.ingredients || "");
      setWeight(data.data.weight || "");

      toast.success(
        "Product detected successfully!",
        {
          id: "analyze",
        }
      );
    } catch (err) {
      console.error(err);

      toast.error(
        err.message || "Unable to analyze image.",
        {
          id: "analyze",
        }
      );

      setImage(null);
    } finally {
      setImageLoading(false);
    }
  };

  const removeImage = () => {
    setImage(null);

    setProductName("");
    setIngredients("");
    setWeight("");

    clearResult();

    toast.success("Image removed.");
  };

  return (
    <div className="bg-white rounded-2xl border shadow-sm p-6">

      <div className="flex items-center gap-3 mb-5">
        <ImageIcon
          className="text-indigo-600"
          size={24}
        />

        <h2 className="text-xl font-bold">
          Product Image
        </h2>
      </div>

      {!image ? (
        <label className="border-2 border-dashed border-indigo-300 rounded-2xl h-60 flex flex-col justify-center items-center cursor-pointer hover:bg-indigo-50 transition">

          {imageLoading ? (
            <>
              <Loader2
                className="animate-spin text-indigo-600"
                size={46}
              />

              <p className="mt-4 font-semibold">
                AI is analyzing image...
              </p>

              <p className="text-sm text-gray-500 mt-2">
                Please wait...
              </p>
            </>
          ) : (
            <>
              <Upload
                size={46}
                className="text-indigo-600"
              />

              <p className="mt-4 font-semibold">
                Upload Product Image
              </p>

              <p className="text-sm text-gray-500">
                JPG, PNG, WEBP (Max 5MB)
              </p>
            </>
          )}

          <input
            hidden
            type="file"
            accept="image/*"
            disabled={imageLoading}
            onChange={handleChange}
          />

        </label>
      ) : (
        <div className="relative">

          <img
            src={preview}
            alt="Preview"
            className="rounded-2xl w-full h-64 object-cover"
          />

          <button
            onClick={removeImage}
            disabled={imageLoading}
            className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 transition"
          >
            <X size={18} />
          </button>

          <div className="mt-4 bg-gray-50 rounded-xl p-4">

            <p className="font-semibold">
              {image.name}
            </p>

            <p className="text-sm text-gray-500">
              {(image.size / 1024 / 1024).toFixed(2)} MB
            </p>

          </div>

          {imageLoading && (
            <div className="mt-4 rounded-xl bg-indigo-50 border border-indigo-200 p-4 flex items-center gap-3">

              <Loader2
                className="animate-spin text-indigo-600"
                size={22}
              />

              <span className="text-indigo-700 font-medium">
                AI is analyzing your product...
              </span>

            </div>
          )}

        </div>
      )}

    </div>
  );
}