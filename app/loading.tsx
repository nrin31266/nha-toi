export default function Loading() {
  return (
    <main className="min-h-screen bg-[#eef7f1] px-4 py-24 md:px-6">
      <div className="mx-auto max-w-6xl space-y-4">
        <div className="h-8 w-52 animate-pulse rounded-xl bg-[#d4e7dc]" />
        <div className="h-20 animate-pulse rounded-2xl bg-[#dcece3]" />
        <div className="grid gap-4 md:grid-cols-3">
          <div className="h-56 animate-pulse rounded-2xl bg-[#dcece3]" />
          <div className="h-56 animate-pulse rounded-2xl bg-[#dcece3]" />
          <div className="h-56 animate-pulse rounded-2xl bg-[#dcece3]" />
        </div>
      </div>
    </main>
  );
}
