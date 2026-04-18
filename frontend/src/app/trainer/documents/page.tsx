import { FileUp } from "lucide-react";

import { PageHeader } from "@/components/shell/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const files = [
  { name: "Instrukcja BHP — warsztat.pdf", size: "2,4 MB", state: "Zindeksowano" as const },
  { name: "Procedury chemiczne.docx", size: "890 KB", state: "W kolejce" as const },
  { name: "Ryzyko zawodowe — magazyn.pdf", size: "1,1 MB", state: "Błąd OCR" as const },
];

export default function TrainerDocumentsPage() {
  return (
    <>
      <PageHeader
        title="Dokumenty BHP"
        description="Przesyłaj PDF i Word. Backend wykona chunkowanie, embeddingi i zapisze wektory w Postgresie."
        actions={
          <Button type="button" variant="primary" size="lg">
            <FileUp className="size-5" aria-hidden />
            Prześlij plik
          </Button>
        }
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Biblioteka</CardTitle>
            <CardDescription>Status przetwarzania i wersje użyte w RAG.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {files.map((f) => (
              <div
                key={f.name}
                className="flex flex-col gap-3 rounded-xl border border-border p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="min-w-0">
                  <p className="font-medium text-default">{f.name}</p>
                  <p className="mt-1 text-sm text-default-muted">{f.size}</p>
                </div>
                <Badge
                  tone={
                    f.state === "Zindeksowano"
                      ? "success"
                      : f.state === "W kolejce"
                        ? "neutral"
                        : "warning"
                  }
                >
                  {f.state}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Zasady uploadu</CardTitle>
            <CardDescription>Polityka dla środowiska produkcyjnego.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-default-muted">
            <ul className="list-disc space-y-2 pl-5">
              <li>Maks. rozmiar pliku zależny od konfiguracji serwera.</li>
              <li>Dokumenty widoczne tylko w ramach tenanta / organizacji.</li>
              <li>Wersjonowanie i ponowne indeksowanie — z poziomu wiersza pliku.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
