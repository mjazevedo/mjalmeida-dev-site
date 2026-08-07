import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonVariant = "primary" | "secondary";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white shadow-[0_0_24px_rgb(77_124_254/0.35)] hover:bg-cyan hover:text-background hover:shadow-[0_0_32px_rgb(53_216_255/0.4)]",
  secondary:
    "border border-border-strong bg-surface/60 text-foreground backdrop-blur-sm hover:border-cyan/60 hover:text-cyan",
};

interface ButtonProps extends ComponentProps<typeof Link> {
  variant?: ButtonVariant;
}

export function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  return (
    <Link
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-display text-sm font-semibold tracking-wide transition-all duration-200 ${variantClasses[variant]} ${className}`}
      {...props}
    />
  );
}
