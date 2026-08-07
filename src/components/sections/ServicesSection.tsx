import { SERVICES } from "@/content/services";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "./SectionHeading";
import { ServiceCard } from "./ServiceCard";

export function ServicesSection() {
  return (
    <section
      id="servicos"
      aria-labelledby="servicos-titulo"
      className="scroll-mt-20 border-t border-border"
    >
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow="// 02 — serviços" title="O que eu posso construir com você" />
          <p className="-mt-6 mb-12 max-w-2xl text-lg leading-relaxed text-muted">
            Seis frentes de atuação, todas com o mesmo princípio: software
            organizado, seguro e preparado para evoluir. Cada serviço indica
            as tecnologias envolvidas e a situação em que ele faz sentido.
          </p>
        </Reveal>

        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <li key={service.id} className="h-full">
              <Reveal delay={(index % 3) * 0.08} className="h-full">
                <ServiceCard service={service} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
