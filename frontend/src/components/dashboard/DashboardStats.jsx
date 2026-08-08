import { Package, Search, Activity } from "lucide-react";
import StatCard from "../common/StatCard";

export default function DashboardStats({
  products,
  filteredProducts,
  loading,
}) {
  return (
    <div className="grid md:grid-cols-3 gap-6 mb-10">
      <StatCard
        title="Products"
        value={products.length}
        subtitle="Saved in database"
        icon={Package}
      />

      <StatCard
        title="Search Results"
        value={filteredProducts.length}
        subtitle="Matching products"
        icon={Search}
        color="emerald"
      />

      <StatCard
        title="Status"
        value={loading ? "..." : "Ready"}
        subtitle="System Status"
        icon={Activity}
        color="violet"
      />
    </div>
  );
}