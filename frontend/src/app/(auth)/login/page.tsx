import {
  ArrowRight,
  LayoutDashboard,
  MonitorSmartphone,
  Shield,
} from "lucide-react";
import Link from "next/link";

import { ButtonLink } from "@/components/ui/button-link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  return (
    <div className="flex min-h-full flex-1">
      <section
        className="relative hidden w-[42%] min-w-[320px] flex-col justify-between overflow-hidden bg-shell p-10 text-white lg:flex xl:p-14"
        aria-label="Informacje o produkcie"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(13,148,136,0.45), transparent 45%), radial-gradient(circle at 80% 0%, rgba(148,163,184,0.25), transparent 40%)",
          }}
        />
        <div className="relative">
          <div className="flex size-14 items-center justify-center rounded-2xl bg-white/10 text-xl font-bold ring-1 ring-white/15">
            BH
          </div>
          <h1 className="mt-10 text-4xl font-semibold tracking-tight xl:text-5xl">
            BHPilot
          </h1>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-shell-muted">
            Scenariuszowe szkolenia i egzaminy BHP z natychmiastową informacją zwrotną od AI —
            zaprojektowane pod pracę na stanowisku i dużym ekranie.
          </p>
        </div>
        <ul className="relative space-y-4 text-sm text-shell-muted">
          <li className="flex items-start gap-3">
            <MonitorSmartphone className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden />
            <span>Interfejs pod AiO i dotyk — duże cele, czytelna hierarchia.</span>
          </li>
          <li className="flex items-start gap-3">
            <LayoutDashboard className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden />
            <span>Panele trenera i administratora z pełną widocznością procesu.</span>
          </li>
          <li className="flex items-start gap-3">
            <Shield className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden />
            <span>Dane organizacji, RAG na dokumentach wewnętrznych, audyt działań.</span>
          </li>
        </ul>
      </section>

      <main className="flex flex-1 flex-col justify-center px-6 py-12 sm:px-10 lg:px-16">
        <div className="mx-auto w-full max-w-md space-y-10">
          <div className="lg:hidden">
            <div className="flex size-12 items-center justify-center rounded-xl bg-brand text-lg font-bold text-white shadow-sm">
              BH
            </div>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-default">
              Zaloguj się
            </h2>
            <p className="mt-2 text-default-muted">
              Dostęp do aplikacji BHPilot w sieci organizacji.
            </p>
          </div>

          <div className="hidden lg:block">
            <h2 className="text-3xl font-semibold tracking-tight text-default">
              Zaloguj się
            </h2>
            <p className="mt-2 text-default-muted">
              Użyj konta organizacyjnego. Integracja z backendem — w kolejnym kroku.
            </p>
          </div>

          <Card className="overflow-hidden shadow-card">
            <CardHeader className="border-b border-border bg-surface-muted/60">
              <CardTitle>Dane logowania</CardTitle>
              <CardDescription>
                Pola są przygotowane pod integrację z API — na razie demonstracja UI.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5 pt-6">
              <div>
                <Label htmlFor="email">Adres e-mail</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="username"
                  placeholder="jan.kowalski@firma.pl"
                  disabled
                />
              </div>
              <div>
                <Label htmlFor="password">Hasło</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="••••••••"
                  disabled
                />
              </div>
              <button
                type="button"
                disabled
                className="flex w-full min-h-12 cursor-not-allowed items-center justify-center gap-2 rounded-xl bg-default/10 text-sm font-semibold text-default-muted"
              >
                Zaloguj
                <ArrowRight className="size-4 opacity-50" aria-hidden />
              </button>
            </CardContent>
          </Card>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-default-subtle">
              Szybki podgląd paneli (MVP)
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              <ButtonLink href="/trainee/room/demo" variant="primary" size="lg" className="w-full">
                Kursant
              </ButtonLink>
              <ButtonLink href="/trainer/dashboard" variant="secondary" size="lg" className="w-full">
                Trener
              </ButtonLink>
              <ButtonLink href="/admin/api-keys" variant="secondary" size="lg" className="w-full">
                Admin
              </ButtonLink>
            </div>
          </div>

          <p className="text-center text-xs text-default-subtle">
            Potrzebujesz dostępu?{" "}
            <Link href="/login" className="font-medium text-brand hover:text-brand-hover">
              Skontaktuj się z administratorem IT
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
