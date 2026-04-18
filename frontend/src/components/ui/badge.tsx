import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export type BadgeTone = "neutral" | "brand" | "success" | "warning" | "danger";

const tones: Record<BadgeTone, string> = {
  neutral: "bg-surface-muted text-default-muted ring-1 ring-border",
  brand: "bg-brand-muted text-brand-foreground ring-1 ring-brand/20",
  success: "bg-success-muted text-success-foreground ring-1 ring-success/25",
  warning: "bg-warning-muted text-warning-foreground ring-1 ring-warning/30",
  danger: "bg-red-50 text-red-800 ring-1 ring-red-200",
};

export function Badge({
  className,
  tone = "neutral",
  ...props
}: HTMLAttributes<HTMLSpanElement> & { tone?: BadgeTone }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}
