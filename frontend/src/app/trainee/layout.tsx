export default function TraineeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <header className="border-b border-zinc-200 bg-white px-6 py-4">
        <span className="text-lg font-semibold">BHPilot — kursant</span>
      </header>
      <div className="flex flex-1">{children}</div>
    </div>
  );
}
