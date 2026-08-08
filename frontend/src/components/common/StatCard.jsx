import { motion } from "framer-motion";

const colorVariants = {
  indigo: {
    bg: "bg-indigo-100",
    text: "text-indigo-600",
  },
  emerald: {
    bg: "bg-emerald-100",
    text: "text-emerald-600",
  },
  blue: {
    bg: "bg-blue-100",
    text: "text-blue-600",
  },
  violet: {
    bg: "bg-violet-100",
    text: "text-violet-600",
  },
};

export default function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
  color = "indigo",
}) {
  const selectedColor = colorVariants[color] || colorVariants.indigo;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>

          <h3 className="text-3xl font-bold mt-2 text-gray-900">
            {value}
          </h3>

          {subtitle && (
            <p className="text-sm text-green-600 mt-2">
              {subtitle}
            </p>
          )}
        </div>

        {Icon && (
          <div
            className={`w-14 h-14 rounded-xl flex items-center justify-center ${selectedColor.bg}`}
          >
            <Icon
              size={28}
              className={selectedColor.text}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
}