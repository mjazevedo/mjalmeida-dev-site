export const NAV_ITEMS = [
  { id: "inicio", label: "Início", href: "#inicio" },
  { id: "sobre", label: "Sobre", href: "#sobre" },
  { id: "servicos", label: "Serviços", href: "#servicos" },
  { id: "projetos", label: "Projetos", href: "#projetos" },
  { id: "tecnologias", label: "Tecnologias", href: "#tecnologias" },
  { id: "processo", label: "Processo", href: "#processo" },
  { id: "contato", label: "Contato", href: "#contato" },
] as const;

export type NavItem = (typeof NAV_ITEMS)[number];

export const HERO_TAGS = ["C#", ".NET", "ASP.NET Core", "Azure", "SQL Server"] as const;
