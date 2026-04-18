import { Plus, Search } from "lucide-react";

import { PageHeader } from "@/components/shell/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const rooms = [
  { name: "Warsztat mechaniczny A", code: "WM-A", users: 12, state: "Aktywny" as const },
  { name: "Laboratorium chemiczne", code: "LAB-01", users: 6, state: "Aktywny" as const },
  { name: "Magazyn — strefa V", code: "MZ-V", users: 0, state: "Wstrzymany" as const },
];

export default function TrainerRoomsPage() {
  return (
    <>
      <PageHeader
        title="Pokoje szkoleniowe"
        description="Twórz izolowane przestrzenie dla grup, przypisuj ścieżki i monitoruj postępy."
        actions={
          <>
            <Button type="button" variant="secondary" size="lg">
              Importuj listę
            </Button>
            <Button type="button" variant="primary" size="lg">
              <Plus className="size-5" aria-hidden />
              Nowy pokój
            </Button>
          </>
        }
      />

      <Card>
        <CardContent className="flex flex-col gap-4 border-b border-border py-4 sm:flex-row sm:items-center">
          <div className="relative min-w-[240px] flex-1">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-default-subtle"
              aria-hidden
            />
            <Input className="pl-11" placeholder="Szukaj po nazwie lub kodzie…" disabled />
          </div>
          <Badge tone="neutral">Łącznie: {rooms.length}</Badge>
        </CardContent>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="border-b border-border bg-surface-muted/50 text-xs font-semibold uppercase tracking-wide text-default-subtle">
                <tr>
                  <th className="px-6 py-3">Nazwa</th>
                  <th className="px-6 py-3">Kod</th>
                  <th className="px-6 py-3 text-right">Kursanci</th>
                  <th className="px-6 py-3 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {rooms.map((r) => (
                  <tr key={r.code} className="hover:bg-surface-muted/40">
                    <td className="px-6 py-4 font-medium text-default">{r.name}</td>
                    <td className="px-6 py-4 font-mono text-default-muted">{r.code}</td>
                    <td className="px-6 py-4 text-right tabular-nums text-default-muted">
                      {r.users}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Badge tone={r.users > 0 ? "success" : "warning"}>{r.state}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
