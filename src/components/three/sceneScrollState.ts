/**
 * Mutable scroll progress for the hero scene: 0 = hero fully visible,
 * 1 = hero scrolled out of the viewport. Written by SceneCanvas on scroll
 * and read by the R3F frame loop — deliberately outside React state so
 * scrolling never triggers re-renders.
 */
export const sceneScroll = { progress: 0 };
