import { useState } from "react";
import toast from "react-hot-toast";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import AIHeader from "../components/ai/AIHeader";
import AIInputPanel from "../components/ai/AIInputPanel";
import AIOutputPanel from "../components/ai/AIOutputPanel";
import AISettings from "../components/ai/AISettings";
import AIActions from "../components/ai/AIActions";
import UploadImage from "../components/ai/UploadImage";

export default function AIFeature({ darkMode, setDarkMode }) {
  const [productName, setProductName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [weight, setWeight] = useState("");
  const [tone, setTone] = useState("Premium");

  const [selectedImage, setSelectedImage] = useState(null);

  const [result, setResult] = useState(null);

  const [loading, setLoading] = useState(false);

  const [imageLoading, setImageLoading] = useState(false);

  const [error, setError] = useState("");

  const clearResult = () => {
    setResult(null);
    setError("");
  };

  const generateDescription = async () => {
    if (!productName || !ingredients || !weight || !tone) {
      setError("⚠️ Please fill all the fields.");
      toast.error("Please fill all the fields.");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/ai/generate`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            productName,
            ingredients,
            weight,
            tone,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        setResult(data.data);
        toast.success("Description generated successfully!");
      } else {
        setError(data.message);
        toast.error(data.message || "Generation failed.");
      }
    } catch (err) {
      console.error(err);
      setError("Unable to connect to backend.");
      toast.error("Unable to connect to backend.");
    } finally {
      setLoading(false);
    }
  };

  const saveProduct = async () => {
    if (!result) {
      toast.error("Generate a product first.");
      return;
    }

    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/products`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            productName,
            ingredients,
            weight,
            tone,

            title: result.title,
            description: result.description,
            features: result.features,
            seoKeywords: result.seoKeywords,
            metaDescription: result.metaDescription,
            marketingCaption: result.marketingCaption,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success("Product saved successfully!");

        setProductName("");
        setIngredients("");
        setWeight("");
        setTone("Premium");

        setSelectedImage(null);
        setResult(null);
      } else {
        toast.error(data.message || "Unable to save product.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Server Error");
    }
  };

  return (
    <>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main className="min-h-screen bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto px-6">

          <AIHeader />

          {error && (
            <div className="mb-6 rounded-xl bg-red-100 border border-red-300 p-4 text-red-700">
              {error}
            </div>
          )}

          <div className="grid lg:grid-cols-2 gap-8">

            {/* LEFT PANEL */}
            <div className="space-y-6">

              <UploadImage
                image={selectedImage}
                setImage={setSelectedImage}
                setProductName={setProductName}
                setIngredients={setIngredients}
                setWeight={setWeight}
                imageLoading={imageLoading}
                setImageLoading={setImageLoading}
                clearResult={clearResult}
              />

              <AIInputPanel
                productName={productName}
                setProductName={setProductName}
                ingredients={ingredients}
                setIngredients={setIngredients}
                weight={weight}
                setWeight={setWeight}
                generateDescription={generateDescription}
                loading={loading || imageLoading}
              />

              <AISettings
                tone={tone}
                setTone={setTone}
              />

            </div>

            {/* RIGHT PANEL */}
            <div className="space-y-6">

              <AIOutputPanel
                result={result}
              />

              <AIActions
                saveProduct={saveProduct}
                result={result}
              />

            </div>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}