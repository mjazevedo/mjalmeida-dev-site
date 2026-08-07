export type Proficiency =
  | "uso-profissional"
  | "experiencia-pratica"
  | "estudo-continuo"
  | "experimentacao";

export const PROFICIENCY_LABELS: Record<Proficiency, string> = {
  "uso-profissional": "Uso profissional",
  "experiencia-pratica": "Experiência prática",
  "estudo-continuo": "Estudo contínuo",
  experimentacao: "Experimentação",
};

/** Cor do indicador por classificação — sempre acompanhada de rótulo textual. */
export const PROFICIENCY_COLORS: Record<Proficiency, string> = {
  "uso-profissional": "bg-cyan",
  "experiencia-pratica": "bg-primary",
  "estudo-continuo": "bg-violet",
  experimentacao: "bg-muted",
};

export interface TechItem {
  name: string;
  proficiency: Proficiency;
}

export interface TechCategory {
  id: string;
  title: string;
  items: readonly TechItem[];
}

export const TECH_CATEGORIES: readonly TechCategory[] = [
  {
    id: "backend",
    title: "Back-end",
    items: [
      { name: "C#", proficiency: "uso-profissional" },
      { name: ".NET", proficiency: "uso-profissional" },
      { name: "ASP.NET Core", proficiency: "uso-profissional" },
      { name: "Entity Framework Core", proficiency: "uso-profissional" },
      { name: "APIs REST", proficiency: "uso-profissional" },
    ],
  },
  {
    id: "frontend",
    title: "Front-end",
    items: [
      { name: "Razor Pages", proficiency: "uso-profissional" },
      { name: "Blazor", proficiency: "experiencia-pratica" },
      { name: "React", proficiency: "experiencia-pratica" },
      { name: "Next.js", proficiency: "experiencia-pratica" },
      { name: "TypeScript", proficiency: "experiencia-pratica" },
      { name: "JavaScript", proficiency: "experiencia-pratica" },
      { name: "Tailwind CSS", proficiency: "experiencia-pratica" },
    ],
  },
  {
    id: "dados",
    title: "Dados",
    items: [
      { name: "SQL Server", proficiency: "uso-profissional" },
      { name: "Modelagem relacional", proficiency: "uso-profissional" },
      { name: "Consultas SQL", proficiency: "uso-profissional" },
      { name: "Integração de dados", proficiency: "experiencia-pratica" },
    ],
  },
  {
    id: "cloud-devops",
    title: "Cloud e DevOps",
    items: [
      { name: "Azure", proficiency: "experiencia-pratica" },
      { name: "Azure DevOps", proficiency: "experiencia-pratica" },
      { name: "Pipelines CI/CD", proficiency: "experiencia-pratica" },
      { name: "Docker", proficiency: "estudo-continuo" },
      { name: "Observabilidade", proficiency: "estudo-continuo" },
    ],
  },
  {
    id: "plataformas",
    title: "Plataformas",
    items: [
      { name: "Dynamics 365", proficiency: "experiencia-pratica" },
      { name: "Power Automate", proficiency: "experiencia-pratica" },
      { name: "Power Platform", proficiency: "experiencia-pratica" },
    ],
  },
  {
    id: "engenharia",
    title: "Engenharia",
    items: [
      { name: "Clean Code", proficiency: "uso-profissional" },
      { name: "SOLID", proficiency: "uso-profissional" },
      { name: "Arquitetura limpa", proficiency: "experiencia-pratica" },
      { name: "DDD", proficiency: "experiencia-pratica" },
      { name: "OWASP", proficiency: "experiencia-pratica" },
      { name: "Testes automatizados", proficiency: "experiencia-pratica" },
      { name: "Documentação técnica", proficiency: "uso-profissional" },
      { name: "Auditoria e logging", proficiency: "uso-profissional" },
    ],
  },
] as const;
