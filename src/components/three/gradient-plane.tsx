"use client";

import { useLayoutEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { fragmentShader, vertexShader } from "./gradient-shader";

const COLOR_BACKGROUND = new THREE.Color("#0A0A0A");
const COLOR_PRIMARY = new THREE.Color("#7C3AED");
const COLOR_PRIMARY_HOVER = new THREE.Color("#8B5CF6");

function createMaterial() {
  return new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(1, 1) },
      uColorA: { value: COLOR_BACKGROUND },
      uColorB: { value: COLOR_PRIMARY },
      uColorC: { value: COLOR_PRIMARY_HOVER },
    },
  });
}

export function GradientPlane() {
  const meshRef = useRef<THREE.Mesh>(null);
  // useRef (não useMemo/useState) de propósito: o material precisa ser
  // mutado a cada frame dentro de useFrame, e o lint deste projeto
  // (react-hooks/immutability) trata valores de useMemo como somente-leitura.
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);

  // Atribuir o material aqui (em vez de via prop/JSX lido de materialRef.current)
  // evita o outro lint (react-hooks/refs: "cannot access ref during render").
  // O toggle de tema do site pode desmontar esse componente (só roda em dark
  // mode) e remontar depois — cada montagem cria/descarta seu próprio material.
  useLayoutEffect(() => {
    const material = createMaterial();
    materialRef.current = material;
    if (meshRef.current) meshRef.current.material = material;
    return () => material.dispose();
  }, []);

  useFrame((state, delta) => {
    const material = materialRef.current;
    if (!material) return;
    material.uniforms.uTime.value += delta;
    material.uniforms.uResolution.value.set(
      state.size.width,
      state.size.height,
    );
  });

  return (
    <mesh ref={meshRef} frustumCulled={false}>
      <planeGeometry args={[2, 2]} />
    </mesh>
  );
}
