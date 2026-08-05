import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/shared/reveal";
import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { skills } from "@/content/skills";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="border-border border-b py-20"
    >
      <SectionContainer>
        <Reveal>
          <SectionHeading
            id="skills-heading"
            eyebrow="// Skills"
            title="Skills"
          />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, index) => (
            <Reveal key={group.category} delay={index * 0.05}>
              <Card>
                <CardHeader>
                  <h3
                    data-slot="card-title"
                    className="font-heading text-base leading-normal font-medium"
                  >
                    {group.category}
                  </h3>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
