import { z } from "zod";

export const PROJECT_TYPES = [
  "Novo sistema",
  "API",
  "Aplicação web",
  "Integração",
  "Modernização",
  "Arquitetura",
  "Automação",
  "Consultoria técnica",
  "Outro",
] as const;

export const BUDGET_OPTIONS = [
  "Até R$ 10 mil",
  "R$ 10 mil a R$ 30 mil",
  "R$ 30 mil a R$ 80 mil",
  "Acima de R$ 80 mil",
  "Prefiro conversar sobre isso",
] as const;

export const DEADLINE_OPTIONS = [
  "Sem urgência",
  "Próximos 3 meses",
  "De 3 a 6 meses",
  "Urgente",
] as const;

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Informe seu nome.")
    .max(100, "Nome muito longo."),
  email: z.email("Informe um e-mail válido.").max(200),
  company: z.string().trim().max(120, "Nome da empresa muito longo.").optional(),
  projectType: z.enum(PROJECT_TYPES, {
    error: "Selecione o tipo de projeto.",
  }),
  budget: z.enum(BUDGET_OPTIONS).optional(),
  deadline: z.enum(DEADLINE_OPTIONS).optional(),
  message: z
    .string()
    .trim()
    .min(20, "Conte um pouco mais sobre o projeto (mínimo de 20 caracteres).")
    .max(4000, "Mensagem muito longa (máximo de 4000 caracteres)."),
  consent: z.boolean().refine((value) => value, {
    message: "É necessário aceitar o uso dos dados para resposta.",
  }),
  /** Honeypot: deve permanecer vazio. Quem preenche recebe sucesso falso. */
  website: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

export type ContactFieldErrors = Partial<
  Record<keyof ContactInput, string>
>;
