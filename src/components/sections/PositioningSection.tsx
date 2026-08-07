import {
  POSITIONING_ASPECTS,
  POSITIONING_INTRO,
  POSITIONING_TITLE,
} from "@/content/positioning";
import { Reveal } from "@/components/motion/Reveal";
import { InteractiveCard } from "@/components/ui/InteractiveCard";

export function PositioningSection() {
  return (
    <section
      id="posicionamento"
      aria-labelledby="posicionamento-titulo"
      className="border-t border-border"
    >
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Reveal>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-cyan">
            {"// posicionamento"}
          </p>
          <h2
            id="posicionamento-titulo"
            className="max-w-3xl font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            {POSITIONING_TITLE}
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            {POSITIONING_INTRO}
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {POSITIONING_ASPECTS.map((aspect, index) => (
            <li key={aspect.title} className="h-full">
              <Reveal delay={index * 0.06} className="h-full">
                <InteractiveCard className="flex h-full flex-col">
                  <p className="mb-3 font-mono text-xs text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mb-2 font-display text-base font-semibold text-foreground">
                    {aspect.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {aspect.description}
                  </p>
                </InteractiveCard>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
