import { cn } from "@/lib/utils";
import { site } from "@/content/site";

export function AvailabilityBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "border-border bg-surface text-muted-foreground inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs",
        className,
      )}
    >
      <span className="relative flex size-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
        <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
      </span>
      {site.availability}
    </span>
  );
}
