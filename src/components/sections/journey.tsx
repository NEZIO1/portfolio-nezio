import { Reveal } from "@/components/shared/reveal";
import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { timeline } from "@/content/timeline";

export function Journey() {
  return (
    <section
      id="jornada"
      aria-labelledby="jornada-heading"
      className="border-border border-b py-20"
    >
      <SectionContainer>
        <Reveal>
          <SectionHeading
            id="jornada-heading"
            eyebrow="// Jornada"
            title="Minha jornada"
          />
        </Reveal>

        <div className="border-border max-w-2xl space-y-10 border-l pl-8">
          {timeline.map((item, index) => (
            <Reveal key={index} delay={index * 0.05} className="relative">
              <span className="border-background bg-primary absolute top-1.5 left-[-37px] size-2.5 rounded-full border-2" />
              <p className="text-primary font-mono text-sm font-medium">
                {item.year}
              </p>
              <h3 className="mt-1 font-semibold">{item.title}</h3>
              <p className="text-muted-foreground mt-1">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
