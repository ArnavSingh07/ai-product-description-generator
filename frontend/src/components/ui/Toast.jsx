/**
 * Toast Component
 * @param {string} message
 * @param {"success" | "error"} type
 */

export default function Toast({ message, type = "success" }) {
  if (!message) return null;

  return (
    <div
      className={`fixed top-5 right-5 z-50 px-5 py-3 rounded-lg shadow-lg text-white font-medium transition-all duration-300 ${
        type === "success"
          ? "bg-green-600"
          : "bg-red-600"
      }`}
    >
      {message}
    </div>
  );
}