import { motion } from "framer-motion";

export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}) {
  const variants = {
    primary:
      "bg-indigo-600 hover:bg-indigo-700 text-white",
    secondary:
      "border border-gray-300 hover:border-indigo-600 hover:text-indigo-600",
    success:
      "bg-emerald-500 hover:bg-emerald-600 text-white",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      className={`px-6 py-3 rounded-xl font-semibold transition ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
}