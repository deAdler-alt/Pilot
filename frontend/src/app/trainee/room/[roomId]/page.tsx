import { Mic, SendHorizontal } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Props = { params: Promise<{ roomId: string }> };

export default async function TraineeRoomPage({ params }: Props) {
  const { roomId } = await params;

  return (
    <div className="flex flex-1 flex-col gap-0 lg:flex-row lg:min-h-0">
      <section className="flex w-full flex-col border-b border-border bg-surface lg:w-[min(440px,38vw)] lg:border-b-0 lg:border-r">
        <div className="border-b border-border px-5 py-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-default-subtle">
            Kontekst scenariusza
          </p>
          <h2 className="mt-1 text-xl font-semibold text-default">Obsługa szlifierki kątowej</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            <Badge tone="neutral">Pokój: {roomId}</Badge>
            <Badge tone="brand">Moduł: mechanika</Badge>
          </div>
        </div>
        <Card className="m-4 flex-1 rounded-2xl border-border shadow-none lg:m-5">
          <CardHeader className="border-b border-border py-4">
            <CardTitle className="text-base">Cel kroku</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-5 text-sm leading-relaxed text-default-muted">
            <p>
              Przed uruchomieniem narzędzia musisz ocenić stanowisko, środki ochrony indywidualnej
              oraz zachowanie kolegów w strefie pracy. Odpowiedz głosowo lub pisemnie — system
              oceni zgodność z procedurą i użyje RAG na dokumentach organizacji.
            </p>
            <div className="rounded-xl border border-dashed border-border-strong bg-surface-muted/60 p-4 text-default">
              <p className="text-xs font-semibold uppercase tracking-wide text-default-subtle">
                Podpowiedź
              </p>
              <p className="mt-2 text-sm text-default-muted">
                Wskaż minimum trzy elementy kontrolne zanim poprosisz o start maszyny.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="flex min-h-[50vh] flex-1 flex-col bg-surface-muted lg:min-h-0">
        <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-4 py-5 sm:px-6 lg:px-8">
          {[
            {
              role: "System",
              text: "Scenariusz rozpoczęty. Opisz, co robisz jako pierwsze po wejściu do strefy pracy.",
            },
            {
              role: "Ty",
              text: "Zatrzymuję się przy linii bezpieczeństwa, sprawdzam czy szlifierka jest wyłączona i czy tarcza nie jest uszkodzona.",
            },
            {
              role: "AI",
              text: "Dobra praktyka: weryfikacja wyłączenia i stanu tarczy. Dodaj proszę, czy stosujesz ochronę wzroku i słuchu przed dalszymi krokami.",
            },
          ].map((m, i) => (
            <div
              key={i}
              className={`flex max-w-[85%] flex-col gap-1 rounded-2xl border px-4 py-3 text-sm leading-relaxed shadow-xs sm:max-w-[75%] sm:text-base ${
                m.role === "Ty"
                  ? "ml-auto border-brand/25 bg-brand-muted text-default"
                  : "mr-auto border-border bg-surface text-default"
              }`}
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-default-subtle">
                {m.role}
              </span>
              <p>{m.text}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-border bg-surface p-4 sm:p-5">
          <div className="mx-auto flex max-w-4xl flex-col gap-3 sm:flex-row sm:items-end">
            <div className="flex flex-1 flex-col gap-2">
              <label htmlFor="msg" className="sr-only">
                Wiadomość do trenera AI
              </label>
              <textarea
                id="msg"
                rows={2}
                readOnly
                placeholder="Napisz odpowiedź lub użyj mikrofonu…"
                className="min-h-[3.5rem] w-full resize-none rounded-2xl border border-border bg-surface-muted px-4 py-3 text-base text-default outline-none ring-brand-muted placeholder:text-default-subtle focus:border-brand focus:ring-2"
              />
            </div>
            <div className="flex shrink-0 gap-3">
              <Button
                type="button"
                variant="secondary"
                size="xl"
                className="min-w-[3.5rem] px-0"
                aria-label="Wejście głosowe"
              >
                <Mic className="size-6" aria-hidden />
              </Button>
              <Button type="button" variant="primary" size="xl" className="min-w-[8.5rem] gap-2">
                Wyślij
                <SendHorizontal className="size-5" aria-hidden />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
