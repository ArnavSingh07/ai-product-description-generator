import ProductCard from "./ProductCard";

export default function ProductGrid({
  products,
  darkMode,
}) {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product._id}
          product={product}
          darkMode={darkMode}
        />
      ))}
    </div>
  );
}