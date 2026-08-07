"use client";

import { useState } from "react";
import { PROJECTS, type Project } from "@/content/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectDetails } from "./ProjectDetails";

export function ProjectShowcase() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <li key={project.id} className="h-full">
            <ProjectCard project={project} onSelect={setSelected} />
          </li>
        ))}
      </ul>
      <ProjectDetails project={selected} onClose={() => setSelected(null)} />
    </>
  );
}
