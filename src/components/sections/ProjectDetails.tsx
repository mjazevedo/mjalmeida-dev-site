"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { Project } from "@/content/projects";
import { Badge } from "@/components/ui/Badge";

interface ProjectDetailsProps {
  project: Project | null;
  onClose: () => void;
}

function DetailBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="mb-2 font-mono text-xs uppercase tracking-[0.15em] text-cyan">
        {title}
      </h4>
      <div className="text-sm leading-relaxed text-muted">{children}</div>
    </div>
  );
}

export function ProjectDetails({ project, onClose }: ProjectDetailsProps) {
  const reduceMotion = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) return;

    panelRef.current?.focus();
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [project, onClose]);

  const motionProps = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 32 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 32 },
        transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] as const },
      };

  return (
    <AnimatePresence>
      {project && (
        <div
          className="fixed inset-0 z-[90] flex items-end justify-center p-4 sm:items-center"
          role="presentation"
          onClick={onClose}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          />
          <motion.div
            ref={panelRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-details-title"
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-surface p-6 shadow-2xl outline-none sm:p-8"
            {...motionProps}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar detalhes do projeto"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-cyan/60 hover:text-foreground"
            >
              <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M2 2l10 10M12 2L2 12" />
              </svg>
            </button>

            <p className="mb-2 font-mono text-xs uppercase tracking-[0.15em] text-violet">
              {project.category}
            </p>
            <h3
              id="project-details-title"
              className="mb-4 pr-10 font-display text-2xl font-bold text-foreground"
            >
              {project.title}
            </h3>

            {project.isPlaceholder && (
              <p className="mb-6 inline-flex rounded-md border border-violet/40 bg-violet/10 px-3 py-1.5 font-mono text-xs text-violet">
                Estudo de caso em elaboração
              </p>
            )}

            <div className="space-y-6">
              <DetailBlock title="Problema">{project.problem}</DetailBlock>
              <DetailBlock title="Contexto">{project.context}</DetailBlock>
              <DetailBlock title="Solução">{project.solution}</DetailBlock>

              <DetailBlock title="Decisões arquiteturais">
                <ul className="list-disc space-y-1.5 pl-5">
                  {project.architectureDecisions.map((decision) => (
                    <li key={decision}>{decision}</li>
                  ))}
                </ul>
              </DetailBlock>

              <DetailBlock title="Tecnologias">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </DetailBlock>

              <DetailBlock title="Desafios">{project.challenges}</DetailBlock>
              <DetailBlock title="Resultado">{project.result}</DetailBlock>
            </div>

            <a
              href="#contato"
              onClick={onClose}
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 font-display text-sm font-semibold text-white transition-colors hover:bg-cyan hover:text-background"
            >
              Quero um projeto assim
            </a>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
