"use client";

import dynamic from "next/dynamic";
import { Component, useRef, type ReactNode } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useExperienceTier } from "@/hooks/useExperienceTier";
import { SceneFallback } from "./SceneFallback";
import { sceneScroll } from "./sceneScrollState";

const ArchitectureScene = dynamic(
  () => import("./ArchitectureScene").then((mod) => mod.ArchitectureScene),
  { ssr: false, loading: () => <SceneFallback /> },
);

interface BoundaryProps {
  children: ReactNode;
}

interface BoundaryState {
  hasError: boolean;
}

class SceneErrorBoundary extends Component<BoundaryProps, BoundaryState> {
  state: BoundaryState = { hasError: false };

  static getDerivedStateFromError(): BoundaryState {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) return <SceneFallback />;
    return this.props.children;
  }
}

export function SceneCanvas() {
  const tier = useExperienceTier();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    sceneScroll.progress = value;
  });

  // Fade + slight zoom as the hero leaves the viewport (GPU-composited,
  // no React re-render). Static tier never animates.
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <motion.div
      ref={containerRef}
      className="absolute inset-0"
      style={tier === "static" ? undefined : { opacity, scale }}
    >
      {tier === "static" ? (
        <SceneFallback />
      ) : (
        <SceneErrorBoundary>
          <ArchitectureScene tier={tier} />
        </SceneErrorBoundary>
      )}
    </motion.div>
  );
}
