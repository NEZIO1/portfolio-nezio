import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { ProjectImage } from "@/components/sections/project-image";
import type { Project } from "@/content/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="pt-0">
      <div className="bg-surface relative aspect-video w-full">
        <ProjectImage src={project.image} alt={project.name} />
      </div>
      <CardHeader>
        <h3
          data-slot="card-title"
          className="font-heading text-base leading-normal font-medium"
        >
          {project.name}
        </h3>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <Badge key={tech} variant="secondary">
            {tech}
          </Badge>
        ))}
      </CardContent>
    </Card>
  );
}
