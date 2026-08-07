export interface EngineeringPillar {
  title: string;
  practice: string;
}

export const PILLARS_TITLE =
  "Código é parte da solução. Engenharia é o que sustenta o produto.";

export const PILLARS_INTRO =
  "Estes pilares não são discurso — aparecem em entregas concretas do dia a dia. Cada um deles se traduz em práticas que você consegue verificar no projeto.";

export const ENGINEERING_PILLARS: readonly EngineeringPillar[] = [
  {
    title: "Clareza",
    practice:
      "Contratos de API bem definidos, nomes que explicam intenção e separação de responsabilidades entre camadas.",
  },
  {
    title: "Segurança",
    practice:
      "Validação de entrada, controle de acesso por perfil e proteção contra as vulnerabilidades do OWASP Top 10 desde o desenvolvimento.",
  },
  {
    title: "Manutenção",
    practice:
      "Código organizado para ser alterado por qualquer pessoa do time — não apenas por quem escreveu.",
  },
  {
    title: "Performance",
    practice:
      "Consultas eficientes, paginação, cache onde faz sentido e medição antes de otimizar.",
  },
  {
    title: "Escalabilidade responsável",
    practice:
      "Estrutura preparada para crescer, sem over-engineering: complexidade só entra quando a necessidade é real.",
  },
  {
    title: "Observabilidade",
    practice:
      "Logs estruturados, rastreabilidade de operações e monitoramento de falhas com contexto suficiente para agir.",
  },
  {
    title: "Testes",
    practice:
      "Testes automatizados nas regras mais críticas do negócio, onde o custo de um erro é maior.",
  },
  {
    title: "Documentação",
    practice:
      "Decisões arquiteturais registradas, APIs documentadas e onboarding que não depende de conversa informal.",
  },
] as const;
