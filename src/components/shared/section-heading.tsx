import { cn } from "@/lib/utils";

export function SectionHeading({
  id,
  eyebrow,
  title,
  className,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-10", className)}>
      <p className="text-primary font-mono text-sm font-medium">{eyebrow}</p>
      <h2
        id={id}
        className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
      >
        {title}
      </h2>
    </div>
  );
}
