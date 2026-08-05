import type { Metadata } from "next";

import { site } from "@/content/site";

export const siteUrl = `https://${site.domain}`;

const title = `${site.name} — ${site.role}`;

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s — ${site.brand}`,
  },
  description: site.description,
  keywords: [
    "Desenvolvedor Full Stack",
    "Java",
    "Spring Boot",
    "Power BI",
    "Portfólio",
    "FIAP",
    "Análise e Desenvolvimento de Sistemas",
  ],
  authors: [{ name: site.name, url: siteUrl }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    title,
    description: site.description,
    siteName: site.brand,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};
