import Link from "next/link";

import type { NavItem } from "@/config/navigation";
import { DashboardSidebar } from "./dashboard-sidebar";

type Props = {
  navItems: NavItem[];
  productLabel: string;
  sectionLabel: string;
  children: React.ReactNode;
  /** Opcjonalny badge w pasku (np. środowisko). */
  headerBadge?: React.ReactNode;
  headerActions?: React.ReactNode;
};

export function DashboardShell({
  navItems,
  productLabel,
  sectionLabel,
  children,
  headerBadge,
  headerActions,
}: Props) {
  return (
    <div className="flex min-h-full flex-1">
      <DashboardSidebar
        items={navItems}
        productLabel={productLabel}
        sectionLabel={sectionLabel}
      />
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-10 flex min-h-16 items-center justify-between gap-4 border-b border-border bg-surface/95 px-6 py-3 backdrop-blur supports-[backdrop-filter]:bg-surface/80">
          <div className="flex min-w-0 flex-col">
            <span className="truncate text-xs font-medium uppercase tracking-wide text-default-subtle">
              {productLabel}
            </span>
            <span className="truncate text-lg font-semibold text-default">
              {sectionLabel}
            </span>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            {headerBadge}
            {headerActions}
            <Link
              href="/login"
              className="rounded-lg border border-border bg-surface-muted px-4 py-2.5 text-sm font-medium text-default-muted transition-colors hover:border-border-strong hover:text-default min-h-11 inline-flex items-center justify-center"
            >
              Wyloguj
            </Link>
          </div>
        </header>
        <div className="flex-1 bg-surface-muted">
          <div className="mx-auto flex w-full max-w-[1600px] flex-1 flex-col gap-6 px-6 py-8 lg:px-10">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
