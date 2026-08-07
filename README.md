# mjalmeida-dev

Portfólio interativo de **Matheus Azevedo** — Desenvolvimento e Arquitetura de Software.
Conceito visual: _"Arquitetura Digital em Movimento"_ — uma cena 3D abstrata de uma
arquitetura de software (núcleo + módulos orbitais + fluxo de dados) com degradação
progressiva em três níveis de experiência.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript estrito
- Tailwind CSS v4 (design tokens em `src/app/globals.css` via `@theme`)
- Three.js + React Three Fiber + drei + postprocessing (bloom, apenas no tier full)
- motion (animações), Zod (validação do formulário)

## Níveis de experiência (degradação progressiva)

Detectados em `src/hooks/useExperienceTier.ts`:

| Tier | Condição | Resultado |
| --- | --- | --- |
| `full` | Desktop com WebGL e CPU razoável | Cena completa: shader fresnel, bloom, parallax, scroll-driven |
| `reduced` | Mobile ou `hardwareConcurrency < 4` | Sem bloom/parallax, menos partículas, dpr menor |
| `static` | `prefers-reduced-motion`, sem WebGL, ou erro no canvas | Somente o fallback SVG estático |

O conteúdo nunca depende do canvas: toda a informação está em HTML indexável.

## Comandos

```bash
npm install
npm run dev     # desenvolvimento
npm run build   # build de produção
npm run start   # servidor de produção
npm run lint    # ESLint
```

## Variáveis de ambiente

Copie `.env.example` para `.env.local`:

- `CONTACT_EMAIL` — e-mail que recebe as mensagens do formulário
- `RESEND_API_KEY` — chave da API do [Resend](https://resend.com)

Sem essas variáveis, o formulário funciona em desenvolvimento (aceita sem entregar)
e retorna erro amigável em produção.

## Estrutura

```text
src/
├── app/                 # rotas, layout, metadata, sitemap, robots, og-image, api/contato
├── components/
│   ├── layout/          # Header, MobileMenu, Footer, SkipLink
│   ├── sections/        # Hero, Sobre, Serviços, Projetos, Tecnologias, Processo, etc.
│   ├── three/           # cena 3D, fallbacks, assets (shaders/texturas), módulos
│   ├── forms/           # ContactForm
│   ├── motion/          # Reveal (respeta prefers-reduced-motion)
│   ├── seo/             # JSON-LD
│   └── ui/              # Button, Badge, InteractiveCard
├── content/             # dados tipados: serviços, projetos, tecnologias, processo, sobre
├── hooks/               # useExperienceTier
└── lib/                 # constantes, schema de contato, rate limit
```

## Conteúdo

Textos e dados ficam em `src/content/*.ts` — edite sem tocar em componentes.
Itens a revisar antes de publicar (placeholders sinalizados):

- `src/config/site.ts` — URL real e links de GitHub/LinkedIn
- `src/content/about.ts` — biografia e trajetória
- `src/content/projects.ts` — estudos de caso (marcados como "em elaboração")
- `src/content/technologies.ts` — classificação de domínio por tecnologia
- `src/components/sections/ContactSection.tsx` — e-mail de contato exibido

## Segurança

- Headers de segurança + CSP em `next.config.ts`
- Formulário: validação Zod no cliente e servidor, honeypot, rate limit por IP,
  e-mail em texto puro, sem exposição de erros internos
- Nenhuma credencial no repositório (use `.env.local`)
