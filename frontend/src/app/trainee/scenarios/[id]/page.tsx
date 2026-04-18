type Props = { params: Promise<{ id: string }> };

export default async function ScenarioPage({ params }: Props) {
  const { id } = await params;
  return (
    <main className="flex flex-1 flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold">Scenariusz</h1>
      <p className="text-zinc-600">
        Identyfikator: <code className="rounded bg-zinc-100 px-1">{id}</code>
      </p>
    </main>
  );
}
