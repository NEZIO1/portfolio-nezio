import { Reveal } from "@/components/shared/reveal";
import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { about } from "@/content/about";

export function About() {
  return (
    <section
      id="sobre"
      aria-labelledby="sobre-heading"
      className="border-border border-b py-20"
    >
      <SectionContainer>
        <Reveal>
          <SectionHeading
            id="sobre-heading"
            eyebrow="// Sobre"
            title="Sobre mim"
          />
        </Reveal>
        <Reveal
          delay={0.1}
          className="text-muted-foreground max-w-3xl space-y-4"
        >
          {about.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </Reveal>
      </SectionContainer>
    </section>
  );
}
