import Link from "next/link";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

import { type ButtonSize, type ButtonVariant } from "./button";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand text-white shadow-sm hover:bg-brand-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
  secondary:
    "border border-border-strong bg-surface text-default shadow-xs hover:bg-surface-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-muted",
  ghost: "text-default-muted hover:bg-surface-muted hover:text-default",
  danger:
    "bg-danger text-white shadow-sm hover:bg-danger-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-danger",
};

const sizes: Record<ButtonSize, string> = {
  md: "min-h-11 px-4 py-2 text-sm font-medium gap-2 rounded-lg",
  lg: "min-h-12 px-5 py-2.5 text-base font-medium gap-2 rounded-lg",
  xl: "min-h-14 px-6 py-3 text-base font-semibold gap-2.5 rounded-xl",
};

export type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function ButtonLink({
  className,
  variant = "primary",
  size = "lg",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors select-none active:scale-[0.99]",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  );
}
