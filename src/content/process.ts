export interface ProcessStep {
  title: string;
  objective: string;
  deliverables: readonly string[];
  clientParticipation: string;
  result: string;
}

export const PROCESS_INTRO =
  "Um pipeline claro do primeiro contato à evolução contínua. Cada etapa tem objetivo, entregáveis e um papel definido para você — sem caixa-preta.";

export const PROCESS_STEPS: readonly ProcessStep[] = [
  {
    title: "Compreensão do problema",
    objective:
      "Entender o que precisa ser resolvido antes de falar em tecnologia: dor atual, impacto no negócio e resultado esperado.",
    deliverables: ["Resumo do problema e dos objetivos", "Critérios de sucesso combinados"],
    clientParticipation: "Conversa inicial e acesso às pessoas que vivem o problema no dia a dia.",
    result: "Certeza de que estamos resolvendo o problema certo.",
  },
  {
    title: "Levantamento de requisitos",
    objective:
      "Transformar a necessidade em requisitos claros: funcionalidades, regras de negócio, restrições e prioridades.",
    deliverables: ["Lista de requisitos priorizada", "Mapa de usuários e permissões"],
    clientParticipation: "Validação dos requisitos e definição de prioridades com quem decide.",
    result: "Escopo compreendido por todos, sem ambiguidade.",
  },
  {
    title: "Análise do sistema existente",
    objective:
      "Quando já existe um sistema, mapear o que funciona, o que trava a evolução e o que pode ser aproveitado.",
    deliverables: ["Diagnóstico técnico do sistema atual", "Riscos e pontos de atenção"],
    clientParticipation: "Acesso ao ambiente, ao código e às pessoas que mantêm o sistema hoje.",
    result: "Decisão informada entre evoluir, modernizar ou reconstruir.",
  },
  {
    title: "Definição da arquitetura",
    objective:
      "Desenhar a estrutura da solução: camadas, integrações, dados, segurança e limites de cada componente.",
    deliverables: ["Desenho da arquitetura", "Decisões técnicas registradas e justificadas"],
    clientParticipation: "Validação das decisões que afetam custo, prazo e operação.",
    result: "Um plano técnico que resiste à implementação — e ao futuro.",
  },
  {
    title: "Planejamento da implementação",
    objective:
      "Quebrar a arquitetura em entregas incrementais, ordenadas por valor e risco.",
    deliverables: ["Plano de entregas por etapas", "Estimativas e marcos de acompanhamento"],
    clientParticipation: "Acordo sobre ordem de entrega e datas de validação.",
    result: "Previsibilidade: você sabe o que recebe, e quando.",
  },
  {
    title: "Desenvolvimento incremental",
    objective:
      "Construir em ciclos curtos, com código revisado e funcionalidade utilizável a cada entrega.",
    deliverables: ["Incrementos funcionais do sistema", "Demonstrações periódicas do progresso"],
    clientParticipation: "Feedback nas demonstrações e resposta rápida a dúvidas de negócio.",
    result: "Progresso visível e corrigível desde cedo — não só no final.",
  },
  {
    title: "Testes e validação",
    objective:
      "Garantir que as regras mais críticas funcionam e que o sistema se comporta bem fora do caminho feliz.",
    deliverables: ["Testes automatizados das regras críticas", "Relatório de validação com você"],
    clientParticipation: "Teste de aceitação com usuários reais do processo.",
    result: "Confiança para colocar o sistema em produção.",
  },
  {
    title: "Documentação",
    objective:
      "Registrar o que foi construído, por que foi decidido assim e como operar e evoluir o sistema.",
    deliverables: ["Documentação técnica e de APIs", "Guia de operação e manutenção"],
    clientParticipation: "Indicação de quem vai operar e manter, para direcionar o conteúdo.",
    result: "O conhecimento fica no projeto — não só na cabeça de alguém.",
  },
  {
    title: "Implantação",
    objective:
      "Publicar o sistema com segurança: ambiente configurado, dados migrados e plano de contingência.",
    deliverables: ["Sistema em produção", "Plano de rollback e checklist de implantação"],
    clientParticipation: "Validação final e janela combinada para a publicação.",
    result: "Entrega em produção sem sustos.",
  },
  {
    title: "Acompanhamento e evolução",
    objective:
      "Monitorar o sistema em uso real, corrigir o que aparecer e planejar os próximos passos.",
    deliverables: ["Monitoramento e logs acompanhados", "Backlog de evolução priorizado"],
    clientParticipation: "Retorno sobre o uso real e novas necessidades que surgirem.",
    result: "Um sistema que continua útil — e melhorando — depois da entrega.",
  },
] as const;
