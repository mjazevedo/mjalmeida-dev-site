"use client";

import { useEffect, useState } from "react";
import { NAV_ITEMS } from "@/lib/constants";
import { MobileMenu } from "./MobileMenu";

function useActiveSection(): string {
  const [active, setActive] = useState<string>("inicio");

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.id),
    ).filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return active;
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#inicio"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/50 bg-surface font-mono text-sm font-bold text-foreground transition-colors hover:border-cyan"
          aria-label="Matheus Azevedo — voltar ao início"
        >
          MA
        </a>

        <nav aria-label="Navegação principal" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  aria-current={activeSection === item.id ? "true" : undefined}
                  className={`rounded-md px-3 py-2 text-sm transition-colors ${
                    activeSection === item.id
                      ? "text-cyan"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contato"
            className="hidden rounded-lg bg-primary px-4 py-2 font-display text-sm font-semibold text-white transition-colors hover:bg-cyan hover:text-background md:inline-flex"
          >
            Vamos conversar
          </a>
          <MobileMenu activeSection={activeSection} />
        </div>
      </div>
    </header>
  );
}
