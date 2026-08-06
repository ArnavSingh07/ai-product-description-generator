export default function SectionTitle({
  badge,
  title,
  highlight,
  subtitle,
}) {
  return (
    <div className="text-center mb-16">
      {badge && (
        <p className="text-indigo-600 font-semibold uppercase tracking-widest">
          {badge}
        </p>
      )}

      <h2 className="text-4xl font-bold mt-3">
        {title}
        {highlight && (
          <span className="text-indigo-600">
            {" "}
            {highlight}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="mt-5 max-w-2xl mx-auto text-gray-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}