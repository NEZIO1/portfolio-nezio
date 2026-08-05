import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/shared/reveal";
import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { skills } from "@/content/skills";

export function Skills() {
  return (
    <section id="skills" className="border-border border-b py-20">
      <SectionContainer>
        <Reveal>
          <SectionHeading eyebrow="// Skills" title="Skills" />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, index) => (
            <Reveal key={group.category} delay={index * 0.05}>
              <Card>
                <CardHeader>
                  <CardTitle>{group.category}</CardTitle>
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
