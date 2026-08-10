import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";
import { checkRateLimit } from "@/lib/rate-limit";

const RESEND_ENDPOINT = "https://api.resend.com/emails";

function buildEmailText(data: {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  budget?: string;
  deadline?: string;
  message: string;
}): string {
  return [
    `Nome: ${data.name}`,
    `E-mail: ${data.email}`,
    `Empresa: ${data.company || "—"}`,
    `Tipo de projeto: ${data.projectType}`,
    `Orçamento: ${data.budget || "—"}`,
    `Prazo: ${data.deadline || "—"}`,
    "",
    "Mensagem:",
    data.message,
  ].join("\n");
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Muitas tentativas. Aguarde alguns minutos e tente novamente." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Requisição inválida." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const field = issue.path[0];
      if (typeof field === "string" && !(field in fieldErrors)) {
        fieldErrors[field] = issue.message;
      }
    }
    return NextResponse.json(
      { error: "Revise os campos destacados.", fieldErrors },
      { status: 400 },
    );
  }

  const data = parsed.data;

  // Honeypot preenchido: finge sucesso e descarta silenciosamente.
  if (data.website) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;

  if (!apiKey || !contactEmail) {
    // Nunca expõe detalhes ao cliente; apenas registra no servidor.
    console.warn(
      "[contato] RESEND_API_KEY ou CONTACT_EMAIL não configurados. Mensagem descartada.",
    );
    if (process.env.NODE_ENV === "production") {
      return NextResponse.json(
        {
          error:
            "O envio de mensagens está temporariamente indisponível. Tente pelos outros canais de contato.",
        },
        { status: 503 },
      );
    }
    // Em desenvolvimento, aceita sem entregar para permitir testar o fluxo.
    return NextResponse.json({ ok: true, delivered: false });
  }

  const response = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Portfolio <contato@mjalmeidadev.com.br>",
      to: [contactEmail],
      reply_to: data.email,
      subject: `[Portfólio] ${data.projectType} — ${data.name}`,
      text: buildEmailText(data),
    }),
  });

  if (!response.ok) {
    console.error(`[contato] falha no provedor de e-mail: ${response.status}`);
    return NextResponse.json(
      { error: "Não foi possível enviar agora. Tente novamente em instantes." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, delivered: true });
}
