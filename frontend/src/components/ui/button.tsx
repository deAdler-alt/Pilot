import { forwardRef, type ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
export type ButtonSize = "md" | "lg" | "xl";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand text-white shadow-sm hover:bg-brand-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:opacity-50",
  secondary:
    "border border-border-strong bg-surface text-default shadow-xs hover:bg-surface-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-muted disabled:opacity-50",
  ghost:
    "text-default-muted hover:bg-surface-muted hover:text-default focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-muted",
  danger:
    "bg-danger text-white shadow-sm hover:bg-danger-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-danger disabled:opacity-50",
};

const sizes: Record<ButtonSize, string> = {
  md: "min-h-11 px-4 py-2 text-sm font-medium gap-2 rounded-lg",
  lg: "min-h-12 px-5 py-2.5 text-base font-medium gap-2 rounded-lg",
  xl: "min-h-14 px-6 py-3 text-base font-semibold gap-2.5 rounded-xl",
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { className, variant = "primary", size = "md", type = "button", ...props },
    ref,
  ) {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          "inline-flex cursor-pointer items-center justify-center whitespace-nowrap transition-colors select-none active:scale-[0.99]",
          variants[variant],
          sizes[size],
          className,
        )}
        {...props}
      />
    );
  },
);
