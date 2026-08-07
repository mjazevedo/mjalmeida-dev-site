import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { createSoftCircleTexture } from "./sceneAssets";

interface AmbientDustProps {
  count: number;
}

/** Deterministic PRNG — keeps the dust field pure and stable across renders. */
function mulberry32(seed: number): () => number {
  let state = seed;
  return () => {
    state = (state + 0x6d2b79f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Slow-drifting background particles that add depth to the scene.
 * Positions come from a seeded PRNG: pure, stable across renders.
 */
export function AmbientDust({ count }: AmbientDustProps) {
  const pointsRef = useRef<THREE.Points>(null);

  const geometry = useMemo(() => {
    const random = mulberry32(42);
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Spherical shell between radius 6 and 13, avoiding the central system
      const radius = 6 + random() * 7;
      const theta = random() * Math.PI * 2;
      const phi = Math.acos(2 * random() - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.cos(phi) * 0.6;
      positions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
    }
    const bufferGeometry = new THREE.BufferGeometry();
    bufferGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3),
    );
    return bufferGeometry;
  }, [count]);

  const texture = useMemo(() => createSoftCircleTexture(), []);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.018;
    }
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        size={0.05}
        map={texture}
        color="#4d7cfe"
        transparent
        opacity={0.4}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
}
