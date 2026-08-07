export interface PositioningAspect {
  title: string;
  description: string;
}

export const POSITIONING_TITLE =
  "Não desenvolvo apenas funcionalidades. Estruturo soluções.";

export const POSITIONING_INTRO =
  "Toda funcionalidade entregue é parte de um sistema maior. Antes de escrever código, cada projeto considera oito frentes que determinam se o software vai durar — ou virar um problema para o próximo time.";

export const POSITIONING_ASPECTS: readonly PositioningAspect[] = [
  {
    title: "Negócio",
    description:
      "O código existe para resolver um problema real. Cada decisão técnica parte da necessidade que motivou o projeto.",
  },
  {
    title: "Experiência do usuário",
    description:
      "Interfaces claras, acessíveis e responsivas — porque sistema bom é o que as pessoas conseguem usar sem treinamento extensivo.",
  },
  {
    title: "Arquitetura",
    description:
      "Camadas bem definidas, responsabilidades separadas e dependências explícitas, para que o sistema cresça sem se desorganizar.",
  },
  {
    title: "Segurança",
    description:
      "Autenticação, autorização, validação de entrada e práticas alinhadas ao OWASP desde a primeira linha — não como etapa final.",
  },
  {
    title: "Integrações",
    description:
      "APIs, bancos de dados, CRMs e serviços de nuvem conversando de forma confiável, com contratos claros e falhas tratadas.",
  },
  {
    title: "Qualidade de código",
    description:
      "Clean Code, SOLID e revisão constante. Código legível hoje é manutenção barata amanhã.",
  },
  {
    title: "Observabilidade",
    description:
      "Logs estruturados, auditoria e rastreabilidade para saber o que acontece no sistema antes que o usuário perceba.",
  },
  {
    title: "Evolução",
    description:
      "Decisões documentadas e estrutura preparada para mudança — o produto de hoje não deve bloquear o de amanhã.",
  },
] as const;
