import {
  ABOUT_BIO,
  ABOUT_FAVORITE_TECHS,
  ABOUT_STUDY_TOPICS,
  ABOUT_TIMELINE,
  ABOUT_TITLE,
  ABOUT_VALUES,
} from "@/content/about";
import { siteConfig } from "@/config/site";
import { Reveal } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "./SectionHeading";

function AvatarPlaceholder() {
  return (
    <div className="relative">
      {/* Substitua por <Image> com a sua foto quando disponível */}
      <div
        role="img"
        aria-label="Espaço reservado para foto profissional de Matheus Azevedo"
        className="flex aspect-[4/5] w-full items-center justify-center rounded-2xl border border-border bg-surface/60"
      >
        <span className="flex h-24 w-24 items-center justify-center rounded-2xl border border-primary/50 bg-surface-raised font-mono text-3xl font-bold text-foreground">
          MA
        </span>
      </div>
      <div
        aria-hidden="true"
        className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-2xl border border-primary/20"
      />
    </div>
  );
}

export function AboutSection() {
  return (
    <section
      id="sobre"
      aria-labelledby="sobre-titulo"
      className="scroll-mt-20 border-t border-border"
    >
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow="// 01 — sobre" title={ABOUT_TITLE} />
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
          {/* Coluna lateral: avatar + fatos rápidos */}
          <Reveal className="space-y-8">
            <AvatarPlaceholder />

            <div>
              <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-cyan">
                Tecnologias favoritas
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {ABOUT_FAVORITE_TECHS.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-cyan">
                Estudando agora
              </h3>
              <ul className="space-y-2 text-sm text-muted">
                {ABOUT_STUDY_TOPICS.map((topic) => (
                  <li key={topic} className="flex items-start gap-2.5">
                    <span aria-hidden="true" className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-violet" />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-3">
              <a
                href={siteConfig.links.github}
                className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-cyan/60 hover:text-foreground"
              >
                GitHub
              </a>
              <a
                href={siteConfig.links.linkedin}
                className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-cyan/60 hover:text-foreground"
              >
                LinkedIn
              </a>
            </div>
          </Reveal>

          {/* Coluna principal: bio, valores, linha do tempo */}
          <div className="space-y-12">
            <Reveal delay={0.1}>
              <div className="space-y-4">
                {ABOUT_BIO.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)} className="leading-relaxed text-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.15em] text-cyan">
                Valores
              </h3>
              <ul className="grid gap-4 sm:grid-cols-2">
                {ABOUT_VALUES.map((value) => (
                  <li
                    key={value.title}
                    className="rounded-xl border border-border bg-surface/60 p-5"
                  >
                    <h4 className="mb-1.5 font-display text-sm font-semibold text-foreground">
                      {value.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-muted">{value.description}</p>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.2}>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.15em] text-cyan">
                Trajetória resumida
              </h3>
              <ol className="relative space-y-6 border-l border-border pl-6">
                {ABOUT_TIMELINE.map((item) => (
                  <li key={item.stage} className="relative">
                    <span
                      aria-hidden="true"
                      className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-violet bg-background"
                    />
                    <h4 className="font-display text-sm font-semibold text-foreground">
                      {item.stage}
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
