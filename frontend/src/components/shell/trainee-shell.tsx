import Link from "next/link";

import { Badge } from "@/components/ui/badge";

type Props = {
  title: string;
  status?: string;
  children: React.ReactNode;
  /** Pasek pomocniczy nad treścią (np. postęp). */
  toolbar?: React.ReactNode;
};

export function TraineeShell({ title, status = "Sesja aktywna", children, toolbar }: Props) {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-surface-muted">
      <header className="sticky top-0 z-10 border-b border-border bg-surface shadow-xs">
        <div className="mx-auto flex h-16 max-w-[1920px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
          <div className="flex min-w-0 items-center gap-4">
            <div
              className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand text-lg font-bold text-white shadow-sm"
              aria-hidden
            >
              BH
            </div>
            <div className="min-w-0">
              <p className="truncate text-xs font-semibold uppercase tracking-wider text-default-subtle">
                BHPilot
              </p>
              <p className="truncate text-lg font-semibold text-default">{title}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Badge tone="success">{status}</Badge>
            <Link
              href="/login"
              className="rounded-xl border border-border bg-surface-muted px-4 py-2.5 text-sm font-medium text-default-muted transition-colors hover:border-border-strong hover:text-default min-h-11 inline-flex items-center justify-center"
            >
              Zakończ
            </Link>
          </div>
        </div>
      </header>
      {toolbar ? (
        <div className="border-b border-border bg-surface px-4 py-3 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-[1920px]">{toolbar}</div>
        </div>
      ) : null}
      <div className="flex flex-1 flex-col">{children}</div>
    </div>
  );
}
