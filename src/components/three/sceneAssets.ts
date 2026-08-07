import * as THREE from "three";

/**
 * Procedurally generated radial-gradient texture: soft round dots for
 * particles and glow sprites, avoiding any texture file downloads.
 * Client-only (uses canvas) — the scene never renders on the server.
 */
export function createSoftCircleTexture(): THREE.Texture {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;

  const context = canvas.getContext("2d");
  if (!context) return new THREE.Texture();

  const gradient = context.createRadialGradient(
    size / 2, size / 2, 0,
    size / 2, size / 2, size / 2,
  );
  gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
  gradient.addColorStop(0.35, "rgba(255, 255, 255, 0.55)");
  gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

  context.fillStyle = gradient;
  context.fillRect(0, 0, size, size);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

/**
 * Fresnel rim shader for the system core: dark body with an electric
 * rim that brightens at grazing angles, giving the core a volumetric
 * feel without post-processing.
 */
export const CORE_VERTEX_SHADER = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vViewDir;

  void main() {
    vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
    vNormal = normalize(normalMatrix * normal);
    vViewDir = normalize(-viewPosition.xyz);
    gl_Position = projectionMatrix * viewPosition;
  }
`;

export const CORE_FRAGMENT_SHADER = /* glsl */ `
  uniform vec3 uColorBase;
  uniform vec3 uColorRim;
  uniform float uIntensity;

  varying vec3 vNormal;
  varying vec3 vViewDir;

  void main() {
    float fresnel = pow(1.0 - abs(dot(normalize(vNormal), normalize(vViewDir))), 2.2);
    vec3 color = mix(uColorBase, uColorRim, fresnel * uIntensity);
    gl_FragColor = vec4(color, 1.0);
  }
`;
