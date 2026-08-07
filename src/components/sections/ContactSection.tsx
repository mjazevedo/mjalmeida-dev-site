import { siteConfig } from "@/config/site";
import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "@/components/forms/ContactForm";

const CONTACT_CHANNELS = [
  {
    label: "E-mail",
    value: "contato@mjalmeidadev.com.br",
    href: "mailto:contato@mjalmeidadev.com.br",
  },
  { label: "LinkedIn", value: "Perfil profissional", href: siteConfig.links.linkedin },
  { label: "GitHub", value: "Repositórios e código", href: siteConfig.links.github },
] as const;

export function ContactSection() {
  return (
    <section
      id="contato"
      aria-labelledby="contato-titulo"
      className="scroll-mt-20 border-t border-border"
    >
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-cyan">
              {"// 06 — contato"}
            </p>
            <h2
              id="contato-titulo"
              className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              Tem um sistema para{" "}
              <span className="bg-gradient-to-r from-primary via-cyan to-violet bg-clip-text text-transparent">
                construir, organizar ou evoluir
              </span>
              ?
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
              Conte um pouco sobre o seu projeto, o problema atual e o
              resultado que você deseja alcançar. Retorno em até dois dias
              úteis.
            </p>

            <ul className="mt-10 space-y-4">
              {CONTACT_CHANNELS.map((channel) => (
                <li key={channel.label}>
                  <a
                    href={channel.href}
                    className="group flex items-baseline gap-4"
                  >
                    <span className="w-20 shrink-0 font-mono text-xs uppercase tracking-wider text-muted">
                      {channel.label}
                    </span>
                    <span className="text-sm text-foreground underline decoration-border underline-offset-4 transition-colors group-hover:text-cyan group-hover:decoration-cyan/60">
                      {channel.value}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-2xl border border-border bg-surface/40 p-6 backdrop-blur-sm sm:p-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
