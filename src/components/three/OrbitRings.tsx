import * as THREE from "three";
import { MODULES } from "./modules";

/**
 * Thin rings tracing each module's orbit, reinforcing the "system map"
 * reading of the scene. Static geometry — no per-frame cost.
 */
export function OrbitRings() {
  return (
    <group>
      {MODULES.map((def) => (
        <mesh
          key={def.id}
          position={[0, def.y, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <ringGeometry args={[def.radius - 0.006, def.radius + 0.006, 128]} />
          <meshBasicMaterial
            color={def.color}
            transparent
            opacity={0.1}
            side={THREE.DoubleSide}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  );
}
