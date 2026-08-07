export interface Service {
  id: string;
  title: string;
  description: string;
  technologies: readonly string[];
  benefit: string;
  indicatedFor: string;
}

export const SERVICES: readonly Service[] = [
  {
    id: "apis-backend",
    title: "APIs e back-end",
    description:
      "Desenvolvimento de APIs REST, serviços em .NET, regras de negócio, autenticação, autorização, integrações e processamento de dados.",
    technologies: ["C#", ".NET", "ASP.NET Core", "Entity Framework Core", "SQL Server", "JWT", "OpenAPI"],
    benefit:
      "Contratos de API estáveis e regras de negócio centralizadas, prontas para atender web, mobile e parceiros.",
    indicatedFor:
      "Quando o sistema precisa expor dados e operações com segurança para outros sistemas, times ou clientes.",
  },
  {
    id: "arquitetura-modernizacao",
    title: "Arquitetura e modernização",
    description:
      "Organização de aplicações, revisão arquitetural, refatoração de sistemas legados e aplicação de Clean Code, DDD e arquitetura limpa.",
    technologies: ["Arquitetura Limpa", "DDD", "Clean Code", "SOLID", "Testes automatizados"],
    benefit:
      "Um sistema que volta a ser compreensível e seguro de modificar, sem precisar reescrever tudo do zero.",
    indicatedFor:
      "Quando o sistema atual funciona, mas cada alteração ficou lenta, arriscada ou dependente de poucas pessoas.",
  },
  {
    id: "aplicacoes-web",
    title: "Aplicações web",
    description:
      "Construção de aplicações empresariais responsivas, acessíveis e integradas a APIs e serviços externos.",
    technologies: ["Razor Pages", "Blazor", "React", "Next.js", "Tailwind CSS"],
    benefit:
      "Interfaces profissionais que funcionam bem em qualquer dispositivo e se integram ao restante do ecossistema.",
    indicatedFor:
      "Quando a empresa precisa de um portal, painel ou sistema web com qualidade de produto, não de protótipo.",
  },
  {
    id: "integracao-sistemas",
    title: "Integração entre sistemas",
    description:
      "Integração entre APIs, bancos de dados, ERPs, CRMs, serviços de nuvem e plataformas corporativas.",
    technologies: ["APIs REST", "Dynamics 365", "Power Platform", "Azure", "SQL Server"],
    benefit:
      "Fim do retrabalho manual entre sistemas: dados fluindo com consistência, rastreabilidade e tratamento de falhas.",
    indicatedFor:
      "Quando informações precisam circular entre plataformas que hoje não conversam — ou conversam mal.",
  },
  {
    id: "automacao-processos",
    title: "Automação de processos",
    description:
      "Criação de fluxos, rotinas, integrações e automações para reduzir atividades manuais e melhorar a confiabilidade operacional.",
    technologies: ["Power Automate", "Azure Functions", "Workers .NET", "Agendamentos e filas"],
    benefit:
      "Menos tarefas repetitivas, menos erro humano e processos que rodam sozinhos com registro do que aconteceu.",
    indicatedFor:
      "Quando o time perde horas em rotinas manuais que um software faria em segundos, com log e auditoria.",
  },
  {
    id: "seguranca-observabilidade",
    title: "Segurança e observabilidade",
    description:
      "Revisão de autenticação, autorização, logs, auditoria, tratamento de erros, rastreabilidade e práticas alinhadas ao OWASP.",
    technologies: ["OWASP", "OAuth 2.0 / JWT", "Logging estruturado", "Auditoria", "Monitoramento"],
    benefit:
      "Visibilidade real sobre o comportamento do sistema e redução concreta da superfície de ataque.",
    indicatedFor:
      "Quando o sistema lida com dados sensíveis, exige conformidade, ou ninguém sabe o que acontece quando algo falha.",
  },
] as const;
