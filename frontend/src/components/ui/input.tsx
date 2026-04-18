import { forwardRef, type InputHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  function Input({ className, type = "text", ...props }, ref) {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          "flex w-full min-h-12 rounded-xl border border-border bg-surface px-4 text-base text-default shadow-xs outline-none transition-[box-shadow,border-color]",
          "placeholder:text-default-subtle",
          "hover:border-border-strong",
          "focus:border-brand focus:ring-2 focus:ring-brand-muted",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        {...props}
      />
    );
  },
);
