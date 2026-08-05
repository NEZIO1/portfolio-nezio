import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/shared/brand-icons";
import { Reveal } from "@/components/shared/reveal";
import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { contact } from "@/content/contact";

const iconMap = { Github: GithubIcon, Linkedin: LinkedinIcon, Mail } as const;

export function Contact() {
  return (
    <section id="contato" className="py-20">
      <SectionContainer className="text-center">
        <Reveal>
          <SectionHeading eyebrow="// Contato" title="Vamos conversar?" />
        </Reveal>

        <Reveal delay={0.1} className="text-muted-foreground mx-auto max-w-lg">
          <p>
            Estou disponível para oportunidades de estágio, trainee ou vaga
            júnior. Envie um e-mail ou me encontre nas redes abaixo.
          </p>
        </Reveal>

        <Reveal
          delay={0.15}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          <Button asChild>
            <a href={`mailto:${contact.email}`}>
              <Mail className="size-4" />
              {contact.email}
            </a>
          </Button>
          {contact.socials.map((social) => {
            const Icon = iconMap[social.icon as keyof typeof iconMap];
            return (
              <Button key={social.href} asChild variant="outline">
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  {Icon && <Icon className="size-4" />}
                  {social.label}
                </a>
              </Button>
            );
          })}
        </Reveal>
      </SectionContainer>
    </section>
  );
}
