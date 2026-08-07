import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-10 text-center sm:px-6">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/50 bg-surface font-mono text-sm font-bold">
          MA
        </span>
        <p className="text-sm text-muted">© 2026 {siteConfig.name}</p>
        <p className="font-mono text-xs text-muted/70">{siteConfig.role}</p>
      </div>
    </footer>
  );
}
