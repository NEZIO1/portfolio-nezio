import Image from "next/image";

import fotoGuilherme from "@/assets/images/foto-guilherme.jpg";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";
import { SectionContainer } from "@/components/shared/section-container";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section
      id="home"
      className="border-border flex min-h-[calc(100vh-4rem)] items-center border-b"
    >
      <SectionContainer className="grid items-center gap-12 py-20 md:grid-cols-[1fr_auto]">
        <Reveal>
          <p className="text-primary text-sm font-medium">Olá, eu sou</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            {site.name}
          </h1>
          <p className="text-muted-foreground mt-3 text-lg">{site.role}</p>
          <p className="text-muted-foreground mt-6 max-w-xl">
            {site.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <a href={site.heroCtas.viewProjects.href}>
                {site.heroCtas.viewProjects.label}
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={site.heroCtas.contact.href}>
                {site.heroCtas.contact.label}
              </a>
            </Button>
            {site.resumeUrl && (
              <Button asChild variant="secondary">
                <a
                  href={site.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Baixar Currículo
                </a>
              </Button>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="border-border relative size-48 overflow-hidden rounded-full border sm:size-64">
            <Image
              src={fotoGuilherme}
              alt={site.name}
              fill
              sizes="(min-width: 640px) 16rem, 12rem"
              className="object-cover"
              priority
            />
          </div>
        </Reveal>
      </SectionContainer>
    </section>
  );
}
