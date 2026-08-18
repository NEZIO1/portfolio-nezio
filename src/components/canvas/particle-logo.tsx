"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { useReducedMotion } from "motion/react";

const GLYPH = "N";
const SAMPLE_STEP = 6;
const PUFF_SIZE = 22;
const SPRING_STRENGTH = 0.04;
const FRICTION = 0.85;
const REPEL_RADIUS = 60;
const REPEL_STRENGTH = 2.5;

interface Particle {
  x: number;
  y: number;
  homeX: number;
  homeY: number;
  vx: number;
  vy: number;
}

// Renderiza a letra num canvas invisível só pra ler quais pixels pertencem
// ao glifo (alpha > 0) e usar essas coordenadas como "casa" de cada partícula.
function sampleGlyphPositions(width: number, height: number) {
  const offscreen = document.createElement("canvas");
  offscreen.width = width;
  offscreen.height = height;
  const ctx = offscreen.getContext("2d");
  if (!ctx) return [];

  const fontSize = Math.min(width, height) * 0.6;
  ctx.font = `bold ${fontSize}px sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "#fff";
  ctx.fillText(GLYPH, width / 2, height / 2 + fontSize * 0.05);

  const { data } = ctx.getImageData(0, 0, width, height);
  const positions: Array<{ x: number; y: number }> = [];

  for (let y = 0; y < height; y += SAMPLE_STEP) {
    for (let x = 0; x < width; x += SAMPLE_STEP) {
      const alpha = data[(y * width + x) * 4 + 3];
      if (alpha > 128) positions.push({ x, y });
    }
  }

  return positions;
}

// Sprite de "nuvem" (gradiente radial suave) desenhada uma única vez e
// reaproveitada via drawImage em toda partícula — bem mais barato do que
// criar um gradiente novo por partícula a cada frame.
function createPuffSprite() {
  const size = 64;
  const sprite = document.createElement("canvas");
  sprite.width = size;
  sprite.height = size;
  const ctx = sprite.getContext("2d");
  if (!ctx) return sprite;

  const gradient = ctx.createRadialGradient(
    size / 2,
    size / 2,
    0,
    size / 2,
    size / 2,
    size / 2,
  );
  gradient.addColorStop(0, "rgba(124, 58, 237, 0.22)");
  gradient.addColorStop(0.5, "rgba(124, 58, 237, 0.1)");
  gradient.addColorStop(1, "rgba(124, 58, 237, 0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);

  return sprite;
}

function subscribeNoop() {
  return () => {};
}

function getClientSnapshot() {
  return true;
}

function getServerSnapshot() {
  return false;
}

export function ParticleLogo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const shouldReduceMotion = useReducedMotion();
  // Servidor não sabe se o cliente monta canvas, então sempre renderiza null
  // (`getServerSnapshot`) e troca pra `getClientSnapshot` logo após a
  // hidratação — mesmo padrão usado nos outros efeitos client-only do site.
  const isMounted = useSyncExternalStore(
    subscribeNoop,
    getClientSnapshot,
    getServerSnapshot,
  );

  useEffect(() => {
    if (!isMounted) return;

    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !parent || !ctx) return;

    const puffSprite = createPuffSprite();

    const resize = () => {
      const { width, height } = parent.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      particlesRef.current = sampleGlyphPositions(width, height).map(
        ({ x, y }) => ({ x, y, homeX: x, homeY: y, vx: 0, vy: 0 }),
      );
    };

    resize();
    window.addEventListener("resize", resize);

    const handlePointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = event.clientX - rect.left;
      mouseRef.current.y = event.clientY - rect.top;
    };

    const handlePointerLeave = () => {
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    };

    parent.addEventListener("pointermove", handlePointerMove);
    parent.addEventListener("pointerleave", handlePointerLeave);

    const drawStatic = () => {
      const { width, height } = parent.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);
      for (const particle of particlesRef.current) {
        ctx.drawImage(
          puffSprite,
          particle.x - PUFF_SIZE / 2,
          particle.y - PUFF_SIZE / 2,
          PUFF_SIZE,
          PUFF_SIZE,
        );
      }
    };

    if (shouldReduceMotion) {
      drawStatic();
      return () => {
        window.removeEventListener("resize", resize);
        parent.removeEventListener("pointermove", handlePointerMove);
        parent.removeEventListener("pointerleave", handlePointerLeave);
      };
    }

    let frameId: number;
    const tick = () => {
      const { width, height } = parent.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);

      for (const particle of particlesRef.current) {
        const dx = particle.x - mouseRef.current.x;
        const dy = particle.y - mouseRef.current.y;
        const dist = Math.hypot(dx, dy);

        if (dist < REPEL_RADIUS) {
          const force = (1 - dist / REPEL_RADIUS) * REPEL_STRENGTH;
          particle.vx += (dx / (dist || 1)) * force;
          particle.vy += (dy / (dist || 1)) * force;
        }

        particle.vx += (particle.homeX - particle.x) * SPRING_STRENGTH;
        particle.vy += (particle.homeY - particle.y) * SPRING_STRENGTH;
        particle.vx *= FRICTION;
        particle.vy *= FRICTION;
        particle.x += particle.vx;
        particle.y += particle.vy;

        ctx.drawImage(
          puffSprite,
          particle.x - PUFF_SIZE / 2,
          particle.y - PUFF_SIZE / 2,
          PUFF_SIZE,
          PUFF_SIZE,
        );
      }

      frameId = requestAnimationFrame(tick);
    };
    frameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      parent.removeEventListener("pointermove", handlePointerMove);
      parent.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [isMounted, shouldReduceMotion]);

  if (!isMounted) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10"
    />
  );
}
