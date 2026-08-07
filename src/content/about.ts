/**
 * Conteúdo biográfico. Os textos abaixo foram redigidos a partir do perfil
 * profissional do brief — revise e ajuste com a sua trajetória real antes
 * de publicar. A linha do tempo não contém datas nem empresas por decisão
 * deliberada: preencha quando quiser torná-la factual.
 */
export const ABOUT_TITLE = "Tecnologia com estrutura, propósito e evolução.";

export const ABOUT_BIO: readonly string[] = [
  "Sou desenvolvedor de software com foco em sistemas empresariais — o tipo de sistema que precisa funcionar todos os dias, lidar com regras de negócio reais e continuar compreensível anos depois de escrito.",
  "O que me atrai em sistemas complexos é justamente a organização deles: entender como as partes se conectam, onde a complexidade é necessária e onde ela é acidente. Por isso a arquitetura nunca é uma etapa separada do meu trabalho — ela aparece em cada API, cada integração e cada refatoração.",
  "Trabalho principalmente no ecossistema .NET, construindo APIs, aplicações web, integrações e automações. Acredito que boa tecnologia é a que resolve o problema de forma sustentável: segura, documentada e preparada para a próxima evolução — não a que impressiona numa demonstração.",
] as const;

export const ABOUT_VALUES: readonly { title: string; description: string }[] = [
  {
    title: "Clareza antes de código",
    description: "Entender o problema de verdade antes de propor qualquer solução técnica.",
  },
  {
    title: "Organização sustentável",
    description: "Estrutura que permite ao sistema evoluir sem virar um labirinto.",
  },
  {
    title: "Aprendizado contínuo",
    description: "Estudo constante de arquitetura, segurança e engenharia — com aplicação prática.",
  },
  {
    title: "Tecnologia com propósito",
    description: "A ferramenta certa para o problema certo, nunca o contrário.",
  },
] as const;

export const ABOUT_TIMELINE: readonly { stage: string; description: string }[] = [
  {
    stage: "Fundamentos",
    description: "Base sólida em desenvolvimento de software, bancos de dados relacionais e programação orientada a objetos.",
  },
  {
    stage: "Ecossistema .NET",
    description: "Atuação profissional com C#, ASP.NET Core, APIs REST, Razor Pages, Blazor e SQL Server.",
  },
  {
    stage: "Plataformas corporativas",
    description: "Integrações com Dynamics 365 CRM, Power Platform e serviços de nuvem Azure.",
  },
  {
    stage: "Arquitetura e modernização",
    description: "Foco em arquitetura limpa, DDD, segurança (OWASP), observabilidade e modernização de sistemas legados.",
  },
] as const;

export const ABOUT_FAVORITE_TECHS: readonly string[] = [
  "C#",
  ".NET",
  "ASP.NET Core",
  "SQL Server",
  "Azure",
  "Dynamics 365",
] as const;

export const ABOUT_STUDY_TOPICS: readonly string[] = [
  "Arquitetura de software e DDD",
  "Segurança de aplicações (OWASP)",
  "Observabilidade e logging estruturado",
  "Engenharia de front-end e WebGL",
] as const;
