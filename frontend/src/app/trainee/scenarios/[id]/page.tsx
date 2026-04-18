import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type Props = { params: Promise<{ id: string }> };

export default async function ScenarioPage({ params }: Props) {
  const { id } = await params;

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-6 px-4 py-8 sm:px-6 lg:px-8">
      <nav className="flex flex-wrap items-center gap-2 text-sm text-default-muted">
        <Link href="/trainee/room/demo" className="hover:text-default">
          Stanowisko
        </Link>
        <ChevronRight className="size-4 opacity-60" aria-hidden />
        <span className="font-medium text-default">Scenariusz</span>
      </nav>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-default">
            Scenariusz szkoleniowy
          </h1>
          <p className="mt-2 max-w-2xl text-default-muted">
            Identyfikator:{" "}
            <code className="rounded-lg bg-surface-muted px-2 py-0.5 font-mono text-sm text-default">
              {id}
            </code>
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge tone="brand">Tryb treningowy</Badge>
          <Badge tone="neutral">Czas: ~8 min</Badge>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Instrukcja</CardTitle>
          <CardDescription>
            Po rozpoczęciu przejdziesz do widoku czatu z kontekstem zadania po lewej stronie ekranu.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-default-muted">
            Upewnij się, że mikrofon i głośniki działają poprawnie na stanowisku AiO.
          </p>
          <ButtonLink href={`/trainee/room/${encodeURIComponent(id)}`} variant="primary" size="xl">
            Rozpocznij w pokoju
          </ButtonLink>
        </CardContent>
      </Card>
    </div>
  );
}
