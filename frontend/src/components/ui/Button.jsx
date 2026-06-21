/**
 * Button Component
 * @param {string} text - Button text
 * @param {function} onClick - Click handler
 */

export default function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    >
      {text}
    </button>
  );
}