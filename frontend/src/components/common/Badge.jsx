export default function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-700">
      {children}
    </span>
  );
}