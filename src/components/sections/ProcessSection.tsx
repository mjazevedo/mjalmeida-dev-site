import { PROCESS_INTRO, PROCESS_STEPS } from "@/content/process";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "./SectionHeading";

export function ProcessSection() {
  return (
    <section
      id="processo"
      aria-labelledby="processo-titulo"
      className="scroll-mt-20 border-t border-border"
    >
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow="// 05 — processo" title="Como eu trabalho, do início ao deploy" />
          <p className="-mt-6 mb-14 max-w-2xl text-lg leading-relaxed text-muted">
            {PROCESS_INTRO}
          </p>
        </Reveal>

        <ol className="relative space-y-6 border-l border-border pl-6 sm:pl-10">
          {/* Pipeline rail */}
          <span
            aria-hidden="true"
            className="absolute -left-px top-0 h-full w-px bg-gradient-to-b from-primary via-cyan to-violet opacity-60"
          />

          {PROCESS_STEPS.map((step, index) => (
            <li key={step.title} className="relative">
              {/* Pipeline node */}
              <span
                aria-hidden="true"
                className="absolute -left-[31px] top-7 h-3 w-3 rounded-full border-2 border-cyan bg-background sm:-left-[47px]"
              />

              <Reveal delay={0.05}>
                <div className="rounded-xl border border-border bg-surface/60 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-cyan/40 sm:p-7">
                  <div className="mb-4 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <span className="font-mono text-sm text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                  </div>

                  <p className="mb-5 text-sm leading-relaxed text-muted sm:text-base">
                    {step.objective}
                  </p>

                  <dl className="grid gap-4 text-sm sm:grid-cols-3">
                    <div>
                      <dt className="mb-1.5 font-mono text-xs uppercase tracking-wider text-cyan">
                        Entregáveis
                      </dt>
                      <dd>
                        <ul className="list-disc space-y-1 pl-4 text-muted">
                          {step.deliverables.map((deliverable) => (
                            <li key={deliverable}>{deliverable}</li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                    <div>
                      <dt className="mb-1.5 font-mono text-xs uppercase tracking-wider text-cyan">
                        Sua participação
                      </dt>
                      <dd className="text-muted">{step.clientParticipation}</dd>
                    </div>
                    <div>
                      <dt className="mb-1.5 font-mono text-xs uppercase tracking-wider text-cyan">
                        Resultado
                      </dt>
                      <dd className="text-muted">{step.result}</dd>
                    </div>
                  </dl>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
