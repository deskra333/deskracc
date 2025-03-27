export default function ArticleCard({ title, summary }) {
  return (
    <div className="border p-4 rounded-xl mt-2">
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm">{summary}</p>
    </div>
  );
}
