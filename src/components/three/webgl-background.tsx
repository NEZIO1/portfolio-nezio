"use client";

import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { useReducedMotion } from "motion/react";
import { StaticGradientFallback } from "./static-gradient-fallback";

const GradientScene = dynamic(
  () => import("./gradient-scene").then((mod) => mod.GradientScene),
  { ssr: false, loading: () => <StaticGradientFallback /> },
);

export function WebglBackground() {
  const { resolvedTheme } = useTheme();
  const shouldReduceMotion = useReducedMotion();

  // `resolvedTheme` vem undefined até o next-themes resolver no cliente —
  // nesse meio-tempo (e no tema claro) simplesmente não renderiza nada; o
  // fundo sólido normal de globals.css já cobre esse caso.
  if (resolvedTheme !== "dark") return null;

  return (
    // Primeira convenção de z-index do projeto: fundo fixo atrás de tudo.
    // Nenhuma seção/main/footer pinta um bg-* opaco próprio, então isso
    // aparece atrás do conteúdo inteiro sem precisar mexer em mais nada.
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      {shouldReduceMotion ? <StaticGradientFallback /> : <GradientScene />}
    </div>
  );
}
