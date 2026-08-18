"use client";

import { useSyncExternalStore } from "react";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { useReducedMotion } from "motion/react";
import { StaticGradientFallback } from "./static-gradient-fallback";

const GradientScene = dynamic(
  () => import("./gradient-scene").then((mod) => mod.GradientScene),
  { ssr: false, loading: () => <StaticGradientFallback /> },
);

function subscribeNoop() {
  return () => {};
}

function getClientSnapshot() {
  return true;
}

function getServerSnapshot() {
  return false;
}

export function WebglBackground() {
  const { resolvedTheme } = useTheme();
  const shouldReduceMotion = useReducedMotion();
  // Servidor não sabe o tema, então sempre renderiza null (`getServerSnapshot`).
  // No cliente, o React troca pra `getClientSnapshot` logo após a hidratação,
  // sem disparar o erro de "hydration mismatch" — é o padrão recomendado pelo
  // próprio React pra esse tipo de valor client-only, e não esbarra na regra
  // de lint `react-hooks/set-state-in-effect` (não usa useState+useEffect).
  const isMounted = useSyncExternalStore(
    subscribeNoop,
    getClientSnapshot,
    getServerSnapshot,
  );

  if (!isMounted || resolvedTheme !== "dark") return null;

  return (
    // Primeira convenção de z-index do projeto: fundo fixo atrás de tudo.
    // Nenhuma seção/main/footer pinta um bg-* opaco próprio, então isso
    // aparece atrás do conteúdo inteiro sem precisar mexer em mais nada.
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      {shouldReduceMotion ? <StaticGradientFallback /> : <GradientScene />}
    </div>
  );
}
