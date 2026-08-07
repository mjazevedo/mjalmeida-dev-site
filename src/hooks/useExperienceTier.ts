"use client";

import { useSyncExternalStore } from "react";

export type ExperienceTier = "full" | "reduced" | "static";

function supportsWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      canvas.getContext("webgl2") ?? canvas.getContext("webgl"),
    );
  } catch {
    return false;
  }
}

let cachedTier: ExperienceTier | null = null;

function detectTier(): ExperienceTier {
  if (cachedTier !== null) return cachedTier;

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (reducedMotion || !supportsWebGL()) {
    cachedTier = "static";
  } else {
    const cores = navigator.hardwareConcurrency ?? 4;
    cachedTier = cores < 4 || window.innerWidth < 768 ? "reduced" : "full";
  }

  return cachedTier;
}

function subscribe(): () => void {
  return () => {};
}

/**
 * Progressive enhancement: the server snapshot is always "static", so SSR and
 * hydration match; the real capability tier is detected on the client right
 * after hydration. The tier never changes afterwards (a resize or settings
 * change takes effect on the next page load).
 */
export function useExperienceTier(): ExperienceTier {
  return useSyncExternalStore(subscribe, detectTier, () => "static");
}
