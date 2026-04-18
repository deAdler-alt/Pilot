import { PageHeader } from "@/components/shell/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminMaintenancePage() {
  return (
    <>
      <PageHeader
        title="Konserwacja systemu"
        description="Operacje destrukcyjne wymagają dodatkowej autoryzacji i rejestru audytu — UI przygotowane pod role superadmin."
        actions={<Badge tone="danger">Ryzyko utraty danych</Badge>}
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="border-warning/40 ring-1 ring-warning/20">
          <CardHeader>
            <CardTitle>Reset bazy (dev)</CardTitle>
            <CardDescription>
              Usuwa dane aplikacyjne — dostępne tylko w kontrolowanych środowiskach.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-default-muted">
              Przed uruchomieniem wykonaj snapshot wolumenu Postgres (`docker compose`).
            </p>
            <Button type="button" variant="danger" size="lg" disabled>
              Uruchom reset
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Status usług</CardTitle>
            <CardDescription>Healthchecki API, workerów Celery i kolejki ingest.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {["API Django", "Postgres + pgvector", "Broker Redis"].map((name, i) => (
              <div
                key={name}
                className="flex items-center justify-between rounded-xl border border-border px-4 py-3"
              >
                <span className="font-medium text-default">{name}</span>
                <Badge tone={i === 0 ? "success" : "neutral"}>
                  {i === 0 ? "OK" : "Nie skonfigurowano"}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
