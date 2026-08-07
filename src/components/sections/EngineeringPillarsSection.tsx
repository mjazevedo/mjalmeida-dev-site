import {
  ENGINEERING_PILLARS,
  PILLARS_INTRO,
  PILLARS_TITLE,
} from "@/content/pillars";
import { Reveal } from "@/components/motion/Reveal";

export function EngineeringPillarsSection() {
  return (
    <section
      id="engenharia"
      aria-labelledby="engenharia-titulo"
      className="border-t border-border bg-surface/30"
    >
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Reveal>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-cyan">
            {"// qualidade de engenharia"}
          </p>
          <h2
            id="engenharia-titulo"
            className="max-w-3xl font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            {PILLARS_TITLE}
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            {PILLARS_INTRO}
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {ENGINEERING_PILLARS.map((pillar, index) => (
            <li key={pillar.title}>
              <Reveal delay={(index % 4) * 0.06}>
                <div className="border-l-2 border-primary/40 pl-4">
                  <h3 className="mb-2 font-display text-base font-semibold text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {pillar.practice}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
