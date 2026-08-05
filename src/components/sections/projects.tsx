import { Reveal } from "@/components/shared/reveal";
import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProjectCard } from "@/components/sections/project-card";
import { projects } from "@/content/projects";

export function Projects() {
  return (
    <section
      id="projetos"
      aria-labelledby="projetos-heading"
      className="border-border border-b py-20"
    >
      <SectionContainer>
        <Reveal>
          <SectionHeading
            id="projetos-heading"
            eyebrow="// Projetos"
            title="Projetos"
          />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.05}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
