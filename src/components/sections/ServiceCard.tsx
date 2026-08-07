import type { Service } from "@/content/services";
import { Badge } from "@/components/ui/Badge";
import { InteractiveCard } from "@/components/ui/InteractiveCard";
import { ServiceIcon } from "./ServiceIcon";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <InteractiveCard className="flex h-full flex-col">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-primary/40 bg-surface-raised text-cyan transition-colors group-hover:border-cyan/60">
        <ServiceIcon id={service.id} />
      </div>

      <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
        {service.title}
      </h3>
      <p className="text-sm leading-relaxed text-muted">{service.description}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {service.technologies.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>

      <dl className="mt-5 space-y-3 border-t border-border pt-4 text-sm">
        <div>
          <dt className="mb-1 font-mono text-xs uppercase tracking-wider text-cyan">
            Benefício
          </dt>
          <dd className="text-muted">{service.benefit}</dd>
        </div>
        <div>
          <dt className="mb-1 font-mono text-xs uppercase tracking-wider text-cyan">
            Quando é indicado
          </dt>
          <dd className="text-muted">{service.indicatedFor}</dd>
        </div>
      </dl>

      <a
        href="#contato"
        aria-label={`Conversar sobre o serviço de ${service.title}`}
        className="mt-auto inline-flex items-center gap-2 pt-6 font-display text-sm font-semibold text-primary transition-colors hover:text-cyan"
      >
        Conversar sobre este serviço
        <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </a>
    </InteractiveCard>
  );
}
