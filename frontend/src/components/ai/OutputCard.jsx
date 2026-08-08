import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function OutputCard({
  title,
  content,
  placeholder,
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!content) return;

    try {
      await navigator.clipboard.writeText(content);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 p-6">

      <div className="flex items-center justify-between mb-4">

        <h3 className="text-lg font-semibold text-gray-800">
          {title}
        </h3>

        <button
          onClick={handleCopy}
          disabled={!content}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg transition ${
            content
              ? "bg-indigo-50 text-indigo-600 hover:bg-indigo-100"
              : "bg-gray-100 text-gray-400 cursor-not-allowed"
          }`}
        >
          {copied ? (
            <>
              <Check size={16} />
              <span className="text-sm">Copied</span>
            </>
          ) : (
            <>
              <Copy size={16} />
              <span className="text-sm">Copy</span>
            </>
          )}
        </button>

      </div>

      <div className="min-h-[120px] max-h-[220px] overflow-y-auto whitespace-pre-wrap leading-7 text-gray-700">
        {content || (
          <span className="text-gray-400 italic">
            {placeholder}
          </span>
        )}
      </div>

    </div>
  );
}