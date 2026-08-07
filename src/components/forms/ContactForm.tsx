"use client";

import { useState, type FormEvent } from "react";
import {
  BUDGET_OPTIONS,
  contactSchema,
  DEADLINE_OPTIONS,
  PROJECT_TYPES,
  type ContactFieldErrors,
} from "@/lib/contact-schema";

type SubmitState = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full rounded-lg border border-border bg-surface/60 px-4 py-2.5 text-sm text-foreground placeholder:text-muted/50 transition-colors focus:border-cyan/60 focus:outline-none";

const errorClasses = "mt-1.5 text-xs text-[#ff8fa3]";

interface FieldProps {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}

function Field({ id, label, error, required, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
        {required && (
          <span aria-hidden="true" className="ml-1 text-cyan">
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <p id={`${id}-erro`} role="alert" className={errorClasses}>
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const [state, setState] = useState<SubmitState>("idle");
  const [errors, setErrors] = useState<ContactFieldErrors>({});
  const [statusMessage, setStatusMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company") || undefined,
      projectType: formData.get("projectType"),
      budget: formData.get("budget") || undefined,
      deadline: formData.get("deadline") || undefined,
      message: formData.get("message"),
      consent: formData.get("consent") === "on",
      website: formData.get("website") || undefined,
    };

    const parsed = contactSchema.safeParse(payload);
    if (!parsed.success) {
      const fieldErrors: ContactFieldErrors = {};
      for (const issue of parsed.error.issues) {
        const field = issue.path[0] as keyof ContactFieldErrors;
        if (!fieldErrors[field]) fieldErrors[field] = issue.message;
      }
      setErrors(fieldErrors);
      setState("error");
      setStatusMessage("Revise os campos destacados antes de enviar.");
      return;
    }

    setErrors({});
    setState("submitting");
    setStatusMessage("Enviando sua mensagem...");

    try {
      const response = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      const result = (await response.json()) as {
        error?: string;
        fieldErrors?: Record<string, string>;
      };

      if (!response.ok) {
        setState("error");
        setStatusMessage(
          result.error ?? "Não foi possível enviar. Tente novamente.",
        );
        if (result.fieldErrors) setErrors(result.fieldErrors);
        return;
      }

      form.reset();
      setState("success");
      setStatusMessage(
        "Mensagem enviada. Retorno em até dois dias úteis — obrigado pelo contato.",
      );
    } catch {
      setState("error");
      setStatusMessage(
        "Falha de conexão. Verifique sua internet e tente novamente.",
      );
    }
  }

  const submitting = state === "submitting";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      {/* Honeypot: invisível para humanos, ignorado por leitores de tela */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Nome" required error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-describedby={errors.name ? "name-erro" : undefined}
            className={inputClasses}
          />
        </Field>

        <Field id="email" label="E-mail" required error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-describedby={errors.email ? "email-erro" : undefined}
            className={inputClasses}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="company" label="Empresa (opcional)" error={errors.company}>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className={inputClasses}
          />
        </Field>

        <Field id="projectType" label="Tipo de projeto" required error={errors.projectType}>
          <select
            id="projectType"
            name="projectType"
            required
            defaultValue=""
            aria-describedby={errors.projectType ? "projectType-erro" : undefined}
            className={inputClasses}
          >
            <option value="" disabled>
              Selecione...
            </option>
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="budget" label="Orçamento estimado (opcional)" error={errors.budget}>
          <select id="budget" name="budget" defaultValue="" className={inputClasses}>
            <option value="">Prefiro não informar</option>
            {BUDGET_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>

        <Field id="deadline" label="Prazo esperado (opcional)" error={errors.deadline}>
          <select id="deadline" name="deadline" defaultValue="" className={inputClasses}>
            <option value="">Ainda não sei</option>
            {DEADLINE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field id="message" label="Mensagem" required error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Conte um pouco sobre o seu projeto, o problema atual e o resultado que você deseja alcançar."
          aria-describedby={errors.message ? "message-erro" : undefined}
          className={`${inputClasses} resize-y`}
        />
      </Field>

      <div>
        <div className="flex items-start gap-3">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            required
            aria-describedby={errors.consent ? "consent-erro" : undefined}
            className="mt-1 h-4 w-4 shrink-0 rounded border-border bg-surface accent-[#4d7cfe]"
          />
          <label htmlFor="consent" className="text-sm leading-relaxed text-muted">
            Autorizo o uso dos dados informados exclusivamente para responder a
            esta mensagem, conforme a LGPD. Nenhum dado será compartilhado com
            terceiros.
          </label>
        </div>
        {errors.consent && (
          <p id="consent-erro" role="alert" className={errorClasses}>
            {errors.consent}
          </p>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-display text-sm font-semibold text-white shadow-[0_0_24px_rgb(77_124_254/0.35)] transition-all duration-200 hover:bg-cyan hover:text-background disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? "Enviando..." : "Enviar mensagem"}
        </button>

        <p
          aria-live="polite"
          role="status"
          className={`text-sm ${
            state === "success"
              ? "text-success"
              : state === "error"
                ? "text-[#ff8fa3]"
                : "text-muted"
          }`}
        >
          {statusMessage}
        </p>
      </div>
    </form>
  );
}
