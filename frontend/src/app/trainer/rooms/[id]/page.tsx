import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { PageHeader } from "@/components/shell/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ButtonLink } from "@/components/ui/button-link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type Props = { params: Promise<{ id: string }> };

export default async function TrainerRoomDetailPage({ params }: Props) {
  const { id } = await params;

  return (
    <>
      <nav className="flex flex-wrap items-center gap-2 text-sm text-default-muted">
        <Link href="/trainer/rooms" className="hover:text-default">
          Pokoje
        </Link>
        <ChevronRight className="size-4 opacity-60" aria-hidden />
        <span className="font-medium text-default">Szczegóły</span>
      </nav>

      <PageHeader
        title={`Pokój „${id}”`}
        description="Ustawienia pokoju, przypisane ścieżki, uczestnicy i historia sesji."
        actions={
          <>
            <Button type="button" variant="secondary" size="lg">
              Archiwizuj
            </Button>
            <Button type="button" variant="primary" size="lg">
              Zapisz zmiany
            </Button>
          </>
        }
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Metadane</CardTitle>
            <CardDescription>Identyfikatory i polityka dostępu.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-surface-muted/50 p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-default-subtle">
                Publiczny identyfikator
              </p>
              <p className="mt-2 font-mono text-lg font-semibold text-default">{id}</p>
            </div>
            <div className="rounded-xl border border-border bg-surface-muted/50 p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-default-subtle">
                Status
              </p>
              <div className="mt-2">
                <Badge tone="success">Aktywny</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Ścieżki i dokumenty</CardTitle>
            <CardDescription>Powiązania z modułami RAG (placeholder).</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-default-muted">
            <p>
              Tutaj pojawi się lista przypisanych ścieżek szkoleniowych oraz powiązanych zbiorów
              dokumentów z embeddingami w <span className="font-mono text-default">pgvector</span>.
            </p>
            <ButtonLink
              href="/trainer/documents"
              variant="ghost"
              size="md"
              className="w-fit px-0 text-brand hover:text-brand-hover"
            >
              Przejdź do dokumentów
            </ButtonLink>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
