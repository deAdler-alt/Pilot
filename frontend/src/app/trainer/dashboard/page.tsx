import { Activity, Users } from "lucide-react";

import { PageHeader } from "@/components/shell/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function TrainerDashboardPage() {
  return (
    <>
      <PageHeader
        title="Pulpit trenera"
        description="Przegląd aktywności pokoi, postępów kursantów i stanu dokumentów RAG."
        actions={
          <Button type="button" size="lg" variant="primary">
            Nowy pokój
          </Button>
        }
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex flex-wrap items-center gap-2">
              <CardTitle>Aktywność dziś</CardTitle>
              <Badge tone="brand">Na żywo</Badge>
            </div>
            <CardDescription>
              Ostatnie zdarzenia z pokoi szkoleniowych — podgląd do podłączenia z API.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              {
                title: "Pokój „Warsztat mechaniczny A”",
                meta: "3 kursantów · średnia poprawność 82%",
                tone: "success" as const,
                label: "Stabilnie",
              },
              {
                title: "Ścieżka „Chemia laboratoryjna”",
                meta: "1 dokument wymaga ponownego embeddingu",
                tone: "warning" as const,
                label: "Uwaga",
              },
              {
                title: "Pokój „Magazyn — V”",
                meta: "Oczekiwanie na start sesji",
                tone: "neutral" as const,
                label: "Oczekuje",
              },
            ].map((row) => (
              <div
                key={row.title}
                className="flex flex-col gap-3 rounded-xl border border-border bg-surface-muted/40 p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="min-w-0">
                  <p className="font-medium text-default">{row.title}</p>
                  <p className="mt-1 text-sm text-default-muted">{row.meta}</p>
                </div>
                <Badge tone={row.tone}>{row.label}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Users className="size-5 text-brand" aria-hidden />
                Zaangażowanie
              </CardTitle>
              <CardDescription>Kursanci aktywni w ostatnich 24 h.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-semibold tracking-tight text-default">128</p>
              <p className="mt-1 text-sm text-default-muted">+12% vs. średnia tygodniowa</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Activity className="size-5 text-brand" aria-hidden />
                Jakość RAG
              </CardTitle>
              <CardDescription>Średni wynik trafności retrieval (placeholder).</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-semibold tracking-tight text-default">0,74</p>
              <p className="mt-1 text-sm text-default-muted">Docelowo: metryki z logów backendu</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
