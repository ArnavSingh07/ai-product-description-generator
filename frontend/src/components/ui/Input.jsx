/**
 * Input Component
 * @param {string} placeholder - Input placeholder
 * @param {string} type - Input type
 */

export default function Input({
  placeholder,
  type = "text",
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="border p-2 rounded w-full"
    />
  );
}