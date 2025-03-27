export default function CreatorCard({ name, description }) {
  return (
    <div className="border p-4 rounded-xl shadow">
      <h3 className="font-bold">{name}</h3>
      <p className="text-xs text-gray-600">{description}</p>
    </div>
  );
}
