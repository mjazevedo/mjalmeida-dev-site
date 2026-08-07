import type { ReactNode } from "react";

interface InteractiveCardProps {
  children: ReactNode;
  className?: string;
}

/**
 * CSS-only interactive card: subtle lift + cyan border glow on hover.
 * No JavaScript required, so it stays cheap and server-renderable.
 */
export function InteractiveCard({ children, className = "" }: InteractiveCardProps) {
  return (
    <div
      className={`group relative rounded-xl border border-border bg-surface/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan/40 hover:bg-surface-raised hover:shadow-[0_8px_40px_rgb(53_216_255/0.08)] ${className}`}
    >
      {children}
    </div>
  );
}
