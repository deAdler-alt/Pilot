import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-8 p-8">
      <div className="text-center">
        <h1 className="text-3xl font-semibold tracking-tight">BHPilot</h1>
        <p className="mt-2 text-lg text-zinc-600">Logowanie (szkic)</p>
      </div>
      <nav className="flex flex-wrap justify-center gap-4">
        <Link
          className="rounded-lg bg-zinc-900 px-6 py-3 text-base font-medium text-white min-h-12 min-w-[10rem] flex items-center justify-center"
          href="/trainee/room/demo"
        >
          Panel kursanta
        </Link>
        <Link
          className="rounded-lg border border-zinc-300 bg-white px-6 py-3 text-base font-medium min-h-12 min-w-[10rem] flex items-center justify-center"
          href="/trainer/dashboard"
        >
          Panel trenera
        </Link>
        <Link
          className="rounded-lg border border-zinc-300 bg-white px-6 py-3 text-base font-medium min-h-12 min-w-[10rem] flex items-center justify-center"
          href="/admin/api-keys"
        >
          Administrator
        </Link>
      </nav>
    </main>
  );
}
