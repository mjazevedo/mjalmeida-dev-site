export interface Project {
  id: string;
  title: string;
  category: string;
  summary: string;
  problem: string;
  context: string;
  solution: string;
  technologies: readonly string[];
  architectureDecisions: readonly string[];
  challenges: string;
  result: string;
  status: "em-elaboracao" | "publicado";
  /**
   * Conteúdo ainda em redação. Enquanto true, a interface exibe o selo
   * "Estudo de caso em elaboração". Nenhum cliente, métrica ou resultado
   * é inventado — campos sem dados reais ficam com texto genérico.
   */
  isPlaceholder: boolean;
}

const EM_ELABORACAO =
  "Estudo de caso em elaboração. Os detalhes completos serão publicados quando a documentação do projeto for revisada.";

export const PROJECTS: readonly Project[] = [
  {
    id: "plataforma-empresarial-servicos",
    title: "Plataforma empresarial do setor de serviços",
    category: "Sistema empresarial",
    summary:
      "Sistema web corporativo com APIs em .NET, autenticação por perfil e integração com banco relacional.",
    problem:
      "Processos internos distribuídos entre planilhas e sistemas desconectados, com retrabalho e pouca rastreabilidade.",
    context: "Ambiente corporativo com múltiplos perfis de usuário e regras de negócio específicas do setor.",
    solution:
      "API REST em ASP.NET Core com camadas bem definidas, autenticação JWT, autorização por perfil e aplicação web integrada.",
    technologies: ["C#", "ASP.NET Core", "Entity Framework Core", "SQL Server", "JWT"],
    architectureDecisions: [
      "Arquitetura em camadas separando domínio, aplicação e infraestrutura",
      "Contratos de API documentados com OpenAPI",
      "Logging estruturado para rastreabilidade das operações",
    ],
    challenges: EM_ELABORACAO,
    result: EM_ELABORACAO,
    status: "em-elaboracao",
    isPlaceholder: true,
  },
  {
    id: "portal-de-eventos",
    title: "Portal de eventos",
    category: "Aplicação web",
    summary:
      "Portal público para divulgação e gestão de eventos, com área administrativa e cadastro de participantes.",
    problem:
      "Divulgação e inscrição de eventos feitas por canais manuais, sem controle centralizado de participantes.",
    context: "Projeto web com acesso público e área restrita para organizadores.",
    solution:
      "Aplicação web com renderização no servidor para SEO, área administrativa protegida e persistência relacional.",
    technologies: ["ASP.NET Core", "Razor Pages", "SQL Server", "Tailwind CSS"],
    architectureDecisions: [
      "Renderização no servidor para indexação e performance inicial",
      "Separação entre área pública e administrativa com autorização distinta",
      "Validação de entrada no cliente e no servidor",
    ],
    challenges: EM_ELABORACAO,
    result: EM_ELABORACAO,
    status: "em-elaboracao",
    isPlaceholder: true,
  },
  {
    id: "integracao-crm-banco-relacional",
    title: "Integração entre CRM e banco relacional",
    category: "Integração",
    summary:
      "Sincronização de dados entre Dynamics 365 CRM e banco SQL Server, com tratamento de falhas e auditoria.",
    problem:
      "Dados duplicados e divergentes entre o CRM e o banco relacional, atualizados manualmente.",
    context: "Ambiente corporativo utilizando Dynamics 365 e SQL Server como sistemas de registro.",
    solution:
      "Rotinas de integração com mapeamento explícito de entidades, registro de cada sincronização e tratamento de conflitos.",
    technologies: ["Dynamics 365", "Power Platform", "C#", ".NET", "SQL Server"],
    architectureDecisions: [
      "Mapeamento de entidades isolado da lógica de transporte",
      "Auditoria de cada operação de sincronização",
      "Reprocessamento seguro em caso de falha",
    ],
    challenges: EM_ELABORACAO,
    result: EM_ELABORACAO,
    status: "em-elaboracao",
    isPlaceholder: true,
  },
  {
    id: "modulo-de-auditoria",
    title: "Módulo de auditoria",
    category: "Segurança e rastreabilidade",
    summary:
      "Registro estruturado de ações sensíveis do sistema: quem fez, o quê, quando e com qual resultado.",
    problem:
      "Ausência de trilha de auditoria confiável para operações críticas, dificultando investigações e conformidade.",
    context: "Sistema corporativo com requisitos de rastreabilidade e controle de acesso.",
    solution:
      "Módulo transversal de auditoria com logs estruturados, correlação de operações e consulta filtrada.",
    technologies: ["C#", "ASP.NET Core", "SQL Server", "Logging estruturado", "OWASP"],
    architectureDecisions: [
      "Auditoria como preocupação transversal, sem acoplar às regras de negócio",
      "Registros imutáveis com carimbo de data/hora e identidade do autor",
      "Consulta paginada e filtrada para investigação",
    ],
    challenges: EM_ELABORACAO,
    result: EM_ELABORACAO,
    status: "em-elaboracao",
    isPlaceholder: true,
  },
  {
    id: "gestao-documental-ocr",
    title: "Sistema corporativo de gestão documental com OCR",
    category: "Automação",
    summary:
      "Digitalização, extração de texto via OCR e organização de documentos com busca e controle de acesso.",
    problem:
      "Documentos físicos e digitalizados sem indexação, com localização lenta e dependência de conhecimento individual.",
    context: "Volume recorrente de documentos que precisam ser localizados e consultados com rapidez.",
    solution:
      "Pipeline de ingestão com OCR, indexação do conteúdo extraído e interface de busca com permissões por perfil.",
    technologies: ["C#", ".NET", "OCR", "SQL Server", "Azure"],
    architectureDecisions: [
      "Pipeline de processamento assíncrono para arquivos grandes",
      "Conteúdo extraído versionado junto ao documento original",
      "Controle de acesso por perfil na busca e na visualização",
    ],
    challenges: EM_ELABORACAO,
    result: EM_ELABORACAO,
    status: "em-elaboracao",
    isPlaceholder: true,
  },
  {
    id: "plataforma-de-nutricao",
    title: "Plataforma de nutrição",
    category: "Aplicação web",
    summary:
      "Plataforma web para acompanhamento nutricional, com planos, registros e área do paciente.",
    problem:
      "Acompanhamento feito por mensagens e documentos soltos, sem histórico estruturado do paciente.",
    context: "Projeto web com dois perfis: profissional e paciente.",
    solution:
      "Aplicação web com API dedicada, modelagem do domínio de planos e registros, e autenticação separada por perfil.",
    technologies: ["ASP.NET Core", "React", "SQL Server", "JWT"],
    architectureDecisions: [
      "Domínio modelado com regras explícitas de plano e acompanhamento",
      "API desacoplada da interface para permitir evolução futura",
      "Dados sensíveis com acesso restrito por perfil",
    ],
    challenges: EM_ELABORACAO,
    result: EM_ELABORACAO,
    status: "em-elaboracao",
    isPlaceholder: true,
  },
] as const;
