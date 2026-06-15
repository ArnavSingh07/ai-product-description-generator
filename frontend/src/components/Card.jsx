export default function Card({ title, description }) {
  return (
    <div className="border rounded-xl p-6 shadow">
      <h2 className="text-xl font-semibold">
        {title}
      </h2>

      <p className="mt-2 text-gray-600">
        {description}
      </p>
    </div>
  );
}