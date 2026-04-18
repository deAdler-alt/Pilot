"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navIcons, type NavItem } from "@/config/navigation";
import { cn } from "@/lib/utils";

type Props = {
  items: NavItem[];
  productLabel: string;
  sectionLabel: string;
};

export function DashboardSidebar({ items, productLabel, sectionLabel }: Props) {
  const pathname = usePathname();

  return (
    <aside className="flex w-72 shrink-0 flex-col border-r border-shell-border bg-shell text-shell-muted">
      <div className="border-b border-shell-border px-5 py-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-shell-muted">
          {productLabel}
        </p>
        <p className="mt-1 text-lg font-semibold tracking-tight text-white">
          {sectionLabel}
        </p>
      </div>
      <nav className="flex flex-1 flex-col gap-0.5 p-3" aria-label="Nawigacja boczna">
        {items.map((item) => {
          const active =
            pathname === item.href || pathname.startsWith(`${item.href}/`);
          const Icon = navIcons[item.icon];
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group flex min-h-12 items-center gap-3 rounded-xl px-3 text-sm font-medium transition-colors",
                active
                  ? "bg-shell-active/25 text-white ring-1 ring-white/10"
                  : "text-shell-muted hover:bg-shell-hover hover:text-white",
              )}
            >
              <span
                className={cn(
                  "flex size-9 shrink-0 items-center justify-center rounded-lg border transition-colors",
                  active
                    ? "border-white/15 bg-white/10 text-white"
                    : "border-transparent bg-white/5 text-shell-muted group-hover:border-white/10 group-hover:text-white",
                )}
              >
                <Icon className="size-[1.125rem]" aria-hidden />
              </span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
      <div className="border-t border-shell-border p-4 text-xs text-shell-muted">
        Wersja rozwojowa · lokalny dostęp
      </div>
    </aside>
  );
}
