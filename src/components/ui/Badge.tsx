import type { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-border bg-surface/70 px-2.5 py-1 font-mono text-xs text-muted">
      {children}
    </span>
  );
}
