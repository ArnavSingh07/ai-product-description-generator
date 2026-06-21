/**
 * Modal Component
 * @param {boolean} isOpen - Controls visibility
 * @param {string} title - Modal title
 */

export default function Modal({
  isOpen,
  title,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-bold mb-4">
          {title}
        </h2>

        <p>This is a modal component.</p>
      </div>
    </div>
  );
}