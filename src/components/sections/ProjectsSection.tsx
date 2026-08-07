import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "./SectionHeading";
import { ProjectShowcase } from "./ProjectShowcase";

export function ProjectsSection() {
  return (
    <section
      id="projetos"
      aria-labelledby="projetos-titulo"
      className="scroll-mt-20 border-t border-border"
    >
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow="// 03 — projetos" title="Projetos e estudos de caso" />
          <p className="-mt-6 mb-12 max-w-2xl text-lg leading-relaxed text-muted">
            Projetos corporativos apresentados sem expor clientes, dados
            sensíveis ou propriedade intelectual. Os estudos de caso estão
            sendo documentados e serão detalhados progressivamente.
          </p>
        </Reveal>

        <ProjectShowcase />
      </div>
    </section>
  );
}
