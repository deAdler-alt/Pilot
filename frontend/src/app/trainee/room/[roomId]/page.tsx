type Props = { params: Promise<{ roomId: string }> };

export default async function TraineeRoomPage({ params }: Props) {
  const { roomId } = await params;
  return (
    <main className="flex flex-1 flex-col gap-4 p-6 lg:flex-row">
      <section className="flex flex-1 flex-col rounded-xl border border-zinc-200 bg-white p-6 shadow-sm lg:max-w-md">
        <h2 className="text-xl font-medium">Scenariusz</h2>
        <p className="mt-2 text-zinc-600">
          Pokój: <code className="rounded bg-zinc-100 px-1">{roomId}</code>
        </p>
      </section>
      <section className="flex flex-[2] flex-col rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-medium">Czat z trenerem AI</h2>
        <p className="mt-4 text-zinc-600">
          Tutaj pojawi się wątek rozmowy i pole głosowe/tekstowe (MVP).
        </p>
      </section>
    </main>
  );
}
