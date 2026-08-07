import {
  PROFICIENCY_COLORS,
  PROFICIENCY_LABELS,
  TECH_CATEGORIES,
  type Proficiency,
} from "@/content/technologies";
import { Reveal } from "@/components/motion/Reveal";
import { InteractiveCard } from "@/components/ui/InteractiveCard";
import { SectionHeading } from "./SectionHeading";

const PROFICIENCY_ORDER: readonly Proficiency[] = [
  "uso-profissional",
  "experiencia-pratica",
  "estudo-continuo",
  "experimentacao",
];

function ProficiencyDot({ proficiency }: { proficiency: Proficiency }) {
  return (
    <span
      aria-hidden="true"
      className={`mt-[3px] h-1.5 w-1.5 shrink-0 rounded-full ${PROFICIENCY_COLORS[proficiency]}`}
    />
  );
}

export function TechnologiesSection() {
  return (
    <section
      id="tecnologias"
      aria-labelledby="tecnologias-titulo"
      className="scroll-mt-20 border-t border-border"
    >
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow="// 04 — tecnologias" title="O ecossistema com que eu trabalho" />
          <p className="-mt-6 mb-8 max-w-2xl text-lg leading-relaxed text-muted">
            Tecnologias organizadas por área de atuação. Em vez de barras de
            porcentagem, cada item indica o tipo de experiência — porque
            domínio real não cabe em um número.
          </p>

          <ul className="mb-12 flex flex-wrap gap-x-6 gap-y-2" aria-label="Legenda de classificação">
            {PROFICIENCY_ORDER.map((proficiency) => (
              <li
                key={proficiency}
                className="flex items-center gap-2 font-mono text-xs text-muted"
              >
                <span
                  aria-hidden="true"
                  className={`h-1.5 w-1.5 rounded-full ${PROFICIENCY_COLORS[proficiency]}`}
                />
                {PROFICIENCY_LABELS[proficiency]}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TECH_CATEGORIES.map((category, index) => (
            <Reveal key={category.id} delay={(index % 3) * 0.08} className="h-full">
              <InteractiveCard className="h-full">
                <h3 className="mb-4 flex items-baseline gap-3 font-display text-base font-semibold text-foreground">
                  <span className="font-mono text-xs text-primary" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {category.title}
                </h3>
                <ul className="space-y-2.5">
                  {category.items.map((item) => (
                    <li key={item.name} className="flex items-start gap-2.5 text-sm">
                      <ProficiencyDot proficiency={item.proficiency} />
                      <span className="text-foreground">{item.name}</span>
                      <span className="ml-auto pl-3 text-right font-mono text-[11px] leading-5 text-muted/70">
                        {PROFICIENCY_LABELS[item.proficiency]}
                      </span>
                    </li>
                  ))}
                </ul>
              </InteractiveCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
