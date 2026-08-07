import { siteConfig } from "@/config/site";
import { HERO_TAGS } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { SceneCanvas } from "@/components/three/SceneCanvas";

function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      <a
        href={siteConfig.links.github}
        aria-label="GitHub de Matheus Azevedo"
        className="text-muted transition-colors hover:text-foreground"
      >
        <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.95.11-.74.4-1.25.72-1.53-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.78 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.26 5.68.41.35.77 1.05.77 2.12v3.15c0 .3.21.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
        </svg>
      </a>
      <a
        href={siteConfig.links.linkedin}
        aria-label="LinkedIn de Matheus Azevedo"
        className="text-muted transition-colors hover:text-foreground"
      >
        <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
        </svg>
      </a>
    </div>
  );
}

export function HeroSection() {
  return (
    <section id="inicio" className="relative flex min-h-svh items-center overflow-hidden">
      {/* 3D scene / static fallback — decorative, content lives in HTML */}
      <div aria-hidden="true" className="absolute inset-0">
        <SceneCanvas />
      </div>

      <div className="pointer-events-none relative z-10 mx-auto w-full max-w-6xl px-4 pb-24 pt-32 sm:px-6">
        <div className="pointer-events-auto max-w-2xl">
          <Reveal>
            <p className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-sm text-muted backdrop-blur-sm">
              <span className="animate-pulse-dot h-2 w-2 rounded-full bg-success" aria-hidden="true" />
              Disponível para novos projetos
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mb-4 font-mono text-sm text-cyan">
              {siteConfig.name} — {siteConfig.role}
            </p>
            <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Construo sistemas que transformam complexidade em{" "}
              <span className="bg-gradient-to-r from-primary via-cyan to-violet bg-clip-text text-transparent">
                soluções claras
              </span>
              .
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Desenvolvimento de APIs, aplicações web, integrações e
              arquiteturas de software com foco em segurança, organização e
              evolução.
            </p>
            <p className="mt-4 max-w-xl border-l-2 border-primary/50 pl-4 font-mono text-sm leading-relaxed text-muted/80">
              Software bem construído deve resolver o problema de hoje sem
              impedir a evolução de amanhã.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="#projetos">Conheça meus projetos</Button>
              <Button href="#contato" variant="secondary">
                Vamos conversar
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-8 flex flex-wrap items-center gap-2">
              {HERO_TAGS.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
            <div className="mt-8">
              <SocialLinks />
            </div>
          </Reveal>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-8 z-10 flex justify-center">
        <a
          href="#sobre"
          aria-label="Rolar para a próxima seção"
          className="flex flex-col items-center gap-2 text-muted transition-colors hover:text-foreground"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.25em]">Role</span>
          <svg
            aria-hidden="true"
            width="16"
            height="24"
            viewBox="0 0 16 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            <rect x="1" y="1" width="14" height="22" rx="7" />
            <path d="M8 6v4" />
          </svg>
        </a>
      </div>
    </section>
  );
}
