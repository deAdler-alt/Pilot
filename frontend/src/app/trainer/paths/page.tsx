import { PageHeader } from "@/components/shell/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function TrainerPathsPage() {
  return (
    <>
      <PageHeader
        title="Ścieżki szkoleniowe"
        description="Buduj sekwencje scenariuszy, progi zaliczenia i powiązania z dokumentami RAG."
        actions={
          <Button type="button" variant="primary" size="lg">
            Nowa ścieżka
          </Button>
        }
      />

      <Card>
        <CardHeader>
          <div className="flex flex-wrap items-center gap-2">
            <CardTitle>Katalog ścieżek</CardTitle>
            <Badge tone="neutral">Wersja robocza UI</Badge>
          </div>
          <CardDescription>
            Kafelki zastąpią się widokiem listy / edytorem grafu po podłączeniu API.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {["Mechanika — podstawy", "Chemia — awaryjne", "Magazyn — VZV"].map((title, i) => (
            <div
              key={title}
              className="flex flex-col rounded-2xl border border-border bg-surface-muted/30 p-5 transition-shadow hover:shadow-card"
            >
              <p className="text-lg font-semibold text-default">{title}</p>
              <p className="mt-2 flex-1 text-sm text-default-muted">
                {i === 0
                  ? "12 scenariuszy · szac. 45 min"
                  : i === 1
                    ? "8 scenariuszy · wymaga aktualizacji dokumentów"
                    : "5 scenariuszy · tryb egzaminacyjny"}
              </p>
              <div className="mt-6 flex items-center justify-between gap-3">
                <Badge tone={i === 1 ? "warning" : "success"}>
                  {i === 1 ? "Do przeglądu" : "Opublikowana"}
                </Badge>
                <Button type="button" variant="secondary" size="md">
                  Otwórz
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </>
  );
}
