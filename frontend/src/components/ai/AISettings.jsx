export default function AISettings({
  tone,
  setTone,
}) {
  return (
    <div className="bg-white rounded-2xl border p-5">

      <h3 className="font-bold mb-4">
        AI Settings
      </h3>

      <select
        value={tone}
        onChange={(e)=>setTone(e.target.value)}
        className="w-full border rounded-xl p-3"
      >
        <option>Premium</option>
        <option>Traditional</option>
        <option>Health Focused</option>
        <option>Luxury</option>
        <option>Modern</option>
      </select>

    </div>
  );
}