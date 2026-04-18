import { PageHeader } from "@/components/shell/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const rows = [
  { t: "14:02:11", q: "Środki ochrony przy szlifowaniu", score: "0,82", tenant: "ACME" },
  { t: "14:01:03", q: "Postępowanie po rozlewie", score: "0,71", tenant: "ACME" },
  { t: "13:58:44", q: "Izolacja stanowiska VZV", score: "0,65", tenant: "Demo" },
];

export default function AdminRagLogsPage() {
  return (
    <>
      <PageHeader
        title="Logi RAG"
        description="Podgląd zapytań embeddingowych, trafień i kontekstu przekazanego do modelu — pod badania i audyt."
        actions={<Badge tone="neutral">Ostatnie 100 zdarzeń (mock)</Badge>}
      />

      <Card>
        <CardHeader>
          <CardTitle>Strumień zdarzeń</CardTitle>
          <CardDescription>Filtrowanie po tenant / pokój / użytkownik — w integracji z API.</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="border-b border-border bg-surface-muted/50 text-xs font-semibold uppercase tracking-wide text-default-subtle">
                <tr>
                  <th className="px-6 py-3">Czas</th>
                  <th className="px-6 py-3">Zapytanie (skrót)</th>
                  <th className="px-6 py-3 text-right">Trafienie</th>
                  <th className="px-6 py-3 text-right">Tenant</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {rows.map((r) => (
                  <tr key={r.t + r.q} className="hover:bg-surface-muted/40">
                    <td className="px-6 py-3 font-mono text-default-muted">{r.t}</td>
                    <td className="px-6 py-3 text-default">{r.q}</td>
                    <td className="px-6 py-3 text-right font-medium tabular-nums text-default">
                      {r.score}
                    </td>
                    <td className="px-6 py-3 text-right">
                      <Badge tone="neutral">{r.tenant}</Badge>
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
