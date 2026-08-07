import type { Project } from "@/content/projects";
import { Badge } from "@/components/ui/Badge";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(project)}
      aria-haspopup="dialog"
      className="group flex h-full w-full flex-col rounded-xl border border-border bg-surface/60 p-6 text-left backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan/40 hover:bg-surface-raised hover:shadow-[0_8px_40px_rgb(53_216_255/0.08)]"
    >
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-violet">
        {project.category}
      </p>
      <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
        {project.title}
      </h3>
      <p className="text-sm leading-relaxed text-muted">{project.summary}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.technologies.slice(0, 4).map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>

      <span className="mt-auto inline-flex items-center gap-2 pt-6 font-display text-sm font-semibold text-primary transition-colors group-hover:text-cyan">
        Ver estudo de caso
        <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </span>
    </button>
  );
}
