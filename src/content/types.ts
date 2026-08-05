export interface CtaLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface SiteConfig {
  name: string;
  brand: string;
  role: string;
  domain: string;
  description: string;
  availability: string;
  heroCtas: {
    viewProjects: CtaLink;
    contact: CtaLink;
  };
  /** Undefined até o usuário fornecer o PDF em public/cv/. */
  resumeUrl?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface AboutContent {
  paragraphs: string[];
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface Project {
  slug: string;
  name: string;
  description: string;
  technologies: string[];
  features?: string[];
  /** Undefined até a imagem real existir em public/img/projects/. */
  image?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Certificate {
  name: string;
  institution?: string;
  year?: string;
  /** Undefined até o arquivo do certificado existir. */
  fileUrl?: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  socials: SocialLink[];
}
