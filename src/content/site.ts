import type { SiteConfig } from "./types";

export const site: SiteConfig = {
  name: "Guilherme Augusto Nézio",
  brand: "Nézio",
  role: "Desenvolvedor Full Stack | Java | Power BI",
  domain: "nezio.dev",
  description:
    "Transformando ideias em soluções digitais através de desenvolvimento web, aplicações modernas e análise de dados. Estudante de Análise e Desenvolvimento de Sistemas pela FIAP, focado em Java, Spring Boot, Full Stack e Business Intelligence.",
  availability: "Disponível para oportunidades",
  heroCtas: {
    viewProjects: { label: "Ver Projetos", href: "#projetos" },
    contact: { label: "Entrar em Contato", href: "#contato" },
  },
  // resumeUrl fica indefinido até o usuário fornecer o PDF em public/cv/.
};
