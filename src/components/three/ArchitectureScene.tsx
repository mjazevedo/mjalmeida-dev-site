"use client";

import { useMemo, useRef, useState, type ComponentRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, Line, useCursor } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import * as THREE from "three";
import type { ExperienceTier } from "@/hooks/useExperienceTier";
import { AmbientDust } from "./AmbientDust";
import { MODULES, type ModuleDef } from "./modules";
import { OrbitRings } from "./OrbitRings";
import {
  CORE_FRAGMENT_SHADER,
  CORE_VERTEX_SHADER,
  createSoftCircleTexture,
} from "./sceneAssets";
import { sceneScroll } from "./sceneScrollState";

const CORE_POSITION = new THREE.Vector3(0, 0, 0);

function modulePosition(def: ModuleDef, elapsed: number, scroll: number, target: THREE.Vector3) {
  const angle = def.phase + elapsed * def.speed;
  // Modules drift outward as the visitor scrolls: the architecture "opens up"
  const radius = def.radius * (1 + scroll * 0.35);
  target.set(
    Math.cos(angle) * radius,
    def.y + Math.sin(elapsed * 0.5 + def.phase) * 0.15,
    Math.sin(angle) * radius,
  );
  return target;
}

function navigateToAnchor(anchor: string) {
  const element = document.getElementById(anchor);
  if (!element) return;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  element.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
}

interface SystemProps {
  tier: Exclude<ExperienceTier, "static">;
}

function ArchitectureSystem({ tier }: SystemProps) {
  const [hovered, setHovered] = useState<string | null>(null);
  useCursor(hovered !== null);

  const positions = useMemo(() => MODULES.map(() => new THREE.Vector3()), []);
  const groupRef = useRef<THREE.Group>(null);
  const moduleRefs = useRef<(THREE.Mesh | null)[]>([]);
  const lineRefs = useRef<(ComponentRef<typeof Line> | null)[]>([]);
  const coreRef = useRef<THREE.Mesh>(null);
  const coreMaterialRef = useRef<THREE.ShaderMaterial>(null);
  const coreWireRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Sprite>(null);
  const pointsRef = useRef<THREE.Points>(null);

  const softTexture = useMemo(() => createSoftCircleTexture(), []);

  const coreUniforms = useMemo(
    () => ({
      uColorBase: { value: new THREE.Color("#0b1020") },
      uColorRim: { value: new THREE.Color("#35d8ff") },
      uIntensity: { value: 1 },
    }),
    [],
  );

  const particlesPerConnection = tier === "full" ? 8 : 3;
  const particleCount = MODULES.length * particlesPerConnection;

  const particleGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(particleCount * 3), 3),
    );
    return geometry;
  }, [particleCount]);

  const scratch = useMemo(() => new THREE.Vector3(), []);

  useFrame((state) => {
    const elapsed = state.clock.elapsedTime;
    const scroll = sceneScroll.progress;

    // The whole architecture turns gently as the visitor scrolls away
    if (groupRef.current) {
      groupRef.current.rotation.y = scroll * 1.1;
      groupRef.current.rotation.x = scroll * 0.12;
    }

    // Core: slow rotation + gentle pulse (scale, rim intensity, glow)
    if (coreRef.current) {
      coreRef.current.rotation.y = elapsed * 0.15;
      const pulse = 1 + Math.sin(elapsed * 1.5) * 0.03;
      coreRef.current.scale.setScalar(pulse);
    }
    if (coreMaterialRef.current) {
      coreMaterialRef.current.uniforms.uIntensity.value =
        1.05 + Math.sin(elapsed * 1.5) * 0.3;
    }
    if (glowRef.current) {
      const material = glowRef.current.material;
      material.opacity = 0.24 + Math.sin(elapsed * 1.5) * 0.07;
    }
    if (coreWireRef.current) {
      coreWireRef.current.rotation.y = -elapsed * 0.08;
      coreWireRef.current.rotation.x = elapsed * 0.04;
    }

    // Modules: orbit + bob, hover scale
    MODULES.forEach((def, index) => {
      modulePosition(def, elapsed, scroll, positions[index]);

      const mesh = moduleRefs.current[index];
      if (mesh) {
        mesh.position.copy(positions[index]);
        mesh.rotation.y = elapsed * 0.6 + def.phase;
        const targetScale = hovered === def.id ? 1.5 : 1;
        const current = mesh.scale.x;
        mesh.scale.setScalar(THREE.MathUtils.lerp(current, targetScale, 0.12));
      }

      const line = lineRefs.current[index];
      if (line) {
        const pos = positions[index];
        line.geometry.setPositions([0, 0, 0, pos.x, pos.y, pos.z]);
      }
    });

    // Particles: flow along the connections, core -> module
    const points = pointsRef.current;
    if (points) {
      const attribute = points.geometry.getAttribute("position") as THREE.BufferAttribute;
      for (let i = 0; i < particleCount; i++) {
        const connectionIndex = i % MODULES.length;
        const lane = Math.floor(i / MODULES.length);
        const offset = lane / particlesPerConnection;
        const speed = 0.18 + (connectionIndex % 3) * 0.04;
        const progress = (elapsed * speed + offset) % 1;
        scratch.lerpVectors(CORE_POSITION, positions[connectionIndex], progress);
        attribute.setXYZ(i, scratch.x, scratch.y, scratch.z);
      }
      attribute.needsUpdate = true;
    }
  });

  return (
    <>
      <group ref={groupRef}>
        {/* Core glow: additive sprite faking volumetric light */}
        <sprite ref={glowRef} scale={[4.6, 4.6, 1]}>
          <spriteMaterial
            map={softTexture}
            color="#35d8ff"
            transparent
            opacity={0.26}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </sprite>

        {/* Core: fresnel rim shader */}
        <mesh ref={coreRef}>
          <icosahedronGeometry args={[1, 1]} />
          <shaderMaterial
            ref={coreMaterialRef}
            vertexShader={CORE_VERTEX_SHADER}
            fragmentShader={CORE_FRAGMENT_SHADER}
            uniforms={coreUniforms}
          />
        </mesh>
        <mesh ref={coreWireRef} scale={1.45}>
          <icosahedronGeometry args={[1, 1]} />
          <meshBasicMaterial color="#35d8ff" wireframe transparent opacity={0.22} />
        </mesh>

        {/* Modules */}
      {MODULES.map((def, index) => (
        <mesh
          key={def.id}
          ref={(mesh) => {
            moduleRefs.current[index] = mesh;
          }}
          position={[def.radius, def.y, 0]}
          onPointerOver={(event) => {
            event.stopPropagation();
            setHovered(def.id);
          }}
          onPointerOut={() => setHovered(null)}
          onClick={(event) => {
            event.stopPropagation();
            navigateToAnchor(def.anchor);
          }}
        >
          <octahedronGeometry args={[def.size, 0]} />
          <meshStandardMaterial
            color="#11182b"
            emissive={def.color}
            emissiveIntensity={hovered === def.id ? 1.1 : 0.6}
            roughness={0.35}
            metalness={0.5}
          />
          {hovered === def.id && (
            <Html center distanceFactor={12} className="pointer-events-none select-none">
              <span className="flex flex-col items-center gap-0.5 whitespace-nowrap rounded-md border border-border bg-surface/90 px-2.5 py-1.5 backdrop-blur-sm">
                <span className="font-mono text-xs text-foreground">{def.label}</span>
                <span className="font-mono text-[10px] text-muted">clique para explorar</span>
              </span>
            </Html>
          )}
        </mesh>
      ))}

      {/* Connections */}
      {MODULES.map((def, index) => (
        <Line
          key={def.id}
          ref={(line) => {
            lineRefs.current[index] = line;
          }}
          points={[
            [0, 0, 0],
            [def.radius, def.y, 0],
          ]}
          color={def.color}
          transparent
          opacity={hovered === def.id ? 0.75 : 0.3}
          lineWidth={1}
        />
      ))}

      {/* Data flow particles */}
      <points ref={pointsRef} geometry={particleGeometry}>
        <pointsMaterial
          size={0.09}
          map={softTexture}
          color="#35d8ff"
          transparent
          opacity={0.9}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          sizeAttenuation
        />
      </points>

      {/* Orbit guides */}
      <OrbitRings />
      </group>

      {/* Background depth (outside the scroll-rotated group) */}
      <AmbientDust count={tier === "full" ? 220 : 90} />
    </>
  );
}

function CameraRig({ withPointer }: { withPointer: boolean }) {
  useFrame((state, delta) => {
    const { camera, pointer } = state;
    const scroll = sceneScroll.progress;

    // Dolly in as the visitor scrolls: the camera approaches the system
    const targetZ = 9 - scroll * 2.2;
    camera.position.z = THREE.MathUtils.damp(camera.position.z, targetZ, 2.5, delta);

    if (withPointer) {
      const targetX = pointer.x * 0.9;
      const targetY = 1.4 + pointer.y * 0.5;
      camera.position.x = THREE.MathUtils.damp(camera.position.x, targetX, 2.5, delta);
      camera.position.y = THREE.MathUtils.damp(camera.position.y, targetY, 2.5, delta);
    }
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export function ArchitectureScene({ tier }: SystemProps) {
  return (
    <Canvas
      dpr={tier === "full" ? [1, 2] : [1, 1.5]}
      camera={{ position: [0, 1.4, 9], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      className="absolute inset-0"
    >
      <ambientLight intensity={0.25} />
      <pointLight position={[0, 0, 0]} intensity={24} color="#35d8ff" distance={12} />
      <pointLight position={[6, 4, -4]} intensity={16} color="#8c67ff" distance={16} />
      <ArchitectureSystem tier={tier} />
      <CameraRig withPointer={tier === "full"} />
      {/* Post-processing only on capable devices — the fake glow sprite
          already carries the effect on the reduced tier */}
      {tier === "full" && (
        <EffectComposer>
          <Bloom
            intensity={0.55}
            luminanceThreshold={0.25}
            luminanceSmoothing={0.85}
            mipmapBlur
            radius={0.72}
          />
        </EffectComposer>
      )}
    </Canvas>
  );
}
