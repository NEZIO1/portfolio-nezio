// Quad fullscreen: a câmera ortográfica (ver gradient-plane.tsx) mapeia [-1,1]
// direto pro clip space, então position/uv já vêm prontos do plane [2,2].
export const vertexShader = /* glsl */ `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const fragmentShader = /* glsl */ `
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform vec3 uColorC;

  varying vec2 vUv;

  float random(vec2 st) {
    return fract(sin(dot(st, vec2(12.9898, 78.233))) * 43758.5453123);
  }

  float noise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
  }

  // Fractal Brownian Motion: soma camadas de noise em escalas decrescentes
  // pra sair do visual "pixelado" do noise puro e virar névoa fluindo.
  float fbm(vec2 st) {
    float value = 0.0;
    float amplitude = 0.5;
    for (int i = 0; i < 5; i++) {
      value += amplitude * noise(st);
      st *= 2.0;
      amplitude *= 0.5;
    }
    return value;
  }

  void main() {
    // Corrige o aspect ratio pra o padrão de noise não esticar em telas largas.
    vec2 uv = vUv * 2.0 - 1.0;
    uv.x *= uResolution.x / uResolution.y;

    vec2 drift = vec2(uTime * 0.04, uTime * 0.025);
    float n1 = fbm(uv * 1.1 + drift);
    float n2 = fbm(uv * 1.6 - drift * 1.3 + 4.0);

    // Só realça os picos do noise (em vez de misturar a tela toda) e limita
    // a intensidade máxima: a maior parte da tela fica no fundo escuro, com
    // a "névoa" roxa aparecendo em manchas sutis, não tomando conta de tudo.
    float glowPrimary = smoothstep(0.55, 0.85, n1) * 0.55;
    float glowHover = smoothstep(0.6, 0.95, n2) * 0.35;

    vec3 color = mix(uColorA, uColorB, glowPrimary);
    color = mix(color, uColorC, glowHover);

    gl_FragColor = vec4(color, 1.0);
  }
`;
