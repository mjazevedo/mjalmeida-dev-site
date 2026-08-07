import { siteConfig } from "@/config/site";

function isRealUrl(url: string): boolean {
  return url.startsWith("http");
}

/**
 * Structured data (schema.org). `sameAs` only includes real URLs —
 * placeholder links ("#") are filtered out until configured.
 */
export function JsonLd() {
  const socialUrls = [siteConfig.links.github, siteConfig.links.linkedin].filter(
    isRealUrl,
  );

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#person`,
        name: siteConfig.name,
        jobTitle: "Desenvolvedor de Software",
        description: siteConfig.description,
        url: siteConfig.url,
        knowsAbout: [
          "C#",
          ".NET",
          "ASP.NET Core",
          "APIs REST",
          "Arquitetura de software",
          "SQL Server",
          "Azure",
          "Dynamics 365",
          "Segurança de aplicações",
        ],
        ...(socialUrls.length > 0 && { sameAs: socialUrls }),
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.url}/#service`,
        name: `${siteConfig.name} — ${siteConfig.role}`,
        description: siteConfig.description,
        url: siteConfig.url,
        areaServed: "BR",
        provider: { "@id": `${siteConfig.url}/#person` },
        serviceType: [
          "Desenvolvimento de APIs",
          "Aplicações web",
          "Integração de sistemas",
          "Arquitetura e modernização de software",
          "Automação de processos",
          "Segurança e observabilidade",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        name: siteConfig.name,
        url: siteConfig.url,
        inLanguage: "pt-BR",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // Conteúdo gerado estaticamente a partir de dados do próprio site — sem input externo.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
