import { Award } from "lucide-react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Reveal } from "@/components/shared/reveal";
import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { certificates } from "@/content/certificates";

export function Certificates() {
  return (
    <section id="certificados" className="border-border border-b py-20">
      <SectionContainer>
        <Reveal>
          <SectionHeading eyebrow="// Certificados" title="Certificados" />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certificates.map((cert, index) => {
            const meta = [cert.institution, cert.year]
              .filter(Boolean)
              .join(" · ");

            return (
              <Reveal key={cert.name} delay={index * 0.05} className="h-full">
                <Card className="h-full">
                  <CardHeader>
                    <Award className="text-primary size-8" aria-hidden />
                    <CardTitle className="mt-3">{cert.name}</CardTitle>
                    {meta && <CardDescription>{meta}</CardDescription>}
                  </CardHeader>
                  {cert.fileUrl && (
                    <CardContent>
                      <a
                        href={cert.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary text-sm hover:underline"
                      >
                        Ver certificado
                      </a>
                    </CardContent>
                  )}
                </Card>
              </Reveal>
            );
          })}
        </div>
      </SectionContainer>
    </section>
  );
}
