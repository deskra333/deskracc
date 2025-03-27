import { useRouter } from "next/router";

export default function CreatorPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <main className="p-4">
      <h1 className="text-xl font-bold">創作者：{id}</h1>
      <p className="text-sm mt-2">這是創作者的公開頁面</p>
    </main>
  );
}
