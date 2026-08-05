import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

export function SectionContainer({
  children,
  className,
  as: Component = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}) {
  return (
    <Component className={cn("mx-auto max-w-6xl px-6", className)}>
      {children}
    </Component>
  );
}
