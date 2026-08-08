import Button from "../common/Button";

export default function AIInputPanel({
  productName,
  setProductName,
  ingredients,
  setIngredients,
  weight,
  setWeight,
  generateDescription,
  loading,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border p-6">

      <h2 className="text-xl font-bold mb-6">
        Product Information
      </h2>

      <div className="space-y-5">

        <input
          className="w-full border rounded-xl p-3"
          placeholder="Product Name"
          value={productName}
          onChange={(e)=>setProductName(e.target.value)}
        />

        <input
          className="w-full border rounded-xl p-3"
          placeholder="Ingredients"
          value={ingredients}
          onChange={(e)=>setIngredients(e.target.value)}
        />

        <input
          className="w-full border rounded-xl p-3"
          placeholder="Weight"
          value={weight}
          onChange={(e)=>setWeight(e.target.value)}
        />

        <Button
          onClick={generateDescription}
          className="w-full"
        >
          {loading ? "Generating..." : "✨ Generate"}
        </Button>

      </div>

    </div>
  );
}