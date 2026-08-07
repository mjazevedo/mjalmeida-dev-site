"use client";

import { useEffect, useRef, useState } from "react";
import { NAV_ITEMS } from "@/lib/constants";

interface MobileMenuProps {
  activeSection: string;
}

export function MobileMenu({ activeSection }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const firstLink = panelRef.current?.querySelector<HTMLAnchorElement>("a");
    firstLink?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        onClick={() => setOpen((value) => !value)}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface/60 text-foreground transition-colors hover:border-cyan/60"
      >
        <svg
          aria-hidden="true"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          {open ? (
            <>
              <path d="M3 3l12 12" />
              <path d="M15 3L3 15" />
            </>
          ) : (
            <>
              <path d="M2 5h14" />
              <path d="M2 9h14" />
              <path d="M2 13h14" />
            </>
          )}
        </svg>
      </button>

      {open && (
        <div
          id="mobile-menu"
          ref={panelRef}
          className="absolute inset-x-4 top-full mt-2 rounded-xl border border-border bg-surface/95 p-3 shadow-2xl backdrop-blur-md"
        >
          <ul className="flex flex-col">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={activeSection === item.id ? "true" : undefined}
                  className={`block rounded-lg px-4 py-3 font-display text-sm transition-colors ${
                    activeSection === item.id
                      ? "bg-surface-raised text-cyan"
                      : "text-muted hover:bg-surface-raised hover:text-foreground"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
