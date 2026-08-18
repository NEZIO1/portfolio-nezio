"use client";

import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { GradientPlane } from "./gradient-plane";

export function GradientScene() {
  // Pausa o loop de render do R3F quando a aba não está visível, pra não
  // gastar GPU/bateria à toa em segundo plano.
  const [frameloop, setFrameloop] = useState<"always" | "never">("always");

  useEffect(() => {
    function handleVisibilityChange() {
      setFrameloop(document.hidden ? "never" : "always");
    }
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  return (
    <Canvas
      orthographic
      // left/right/top/bottom = -1..1 casam exatamente com o plane [2,2]
      // (ver gradient-plane.tsx), então ele preenche a tela inteira sem
      // precisar recalcular geometria a cada resize.
      camera={{
        left: -1,
        right: 1,
        top: 1,
        bottom: -1,
        near: 0,
        far: 1,
        position: [0, 0, 1],
      }}
      dpr={[1, 2]}
      gl={{ antialias: false, alpha: false }}
      frameloop={frameloop}
    >
      <GradientPlane />
    </Canvas>
  );
}
