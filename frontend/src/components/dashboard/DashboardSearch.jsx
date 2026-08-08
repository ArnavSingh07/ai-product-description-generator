export default function DashboardSearch({
  search,
  setSearch,
}) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full rounded-xl border border-gray-300 p-4 focus:ring-2 focus:ring-indigo-500 outline-none"
    />
  );
}