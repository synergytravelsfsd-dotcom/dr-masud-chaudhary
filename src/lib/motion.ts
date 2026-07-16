/** Animation presets for consistent motion language. */
export const motionPresets = {
  fadeUp: {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 },
  },
  easeOut: [0.22, 1, 0.36, 1] as const,
  duration: 0.6,
  stagger: 0.08,
};
