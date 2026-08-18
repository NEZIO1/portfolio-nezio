import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function SectionContainer({
  children,
  className,
  as: Component = "div",
}: {
  children: ReactNode;
  className?: string;
  // União fixa (em vez de `ElementType` genérico) porque os tipos globais
  // do @react-three/fiber colidem com JSX polimórfico baseado em ElementType.
  as?: "div" | "section";
}) {
  return (
    <Component className={cn("mx-auto max-w-6xl px-6", className)}>
      {children}
    </Component>
  );
}
