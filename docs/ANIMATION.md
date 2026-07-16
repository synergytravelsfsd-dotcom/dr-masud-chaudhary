# Animation Library

Shared motion language for the executive headquarters.

## Primitives (`src/components/motion/fade-in.tsx`)

| Component | Use |
| --- | --- |
| `FadeIn` | Single block entrance on scroll |
| `Stagger` | Parent orchestrator for lists |
| `StaggerItem` | Child item in staggered lists |

## Presets (`src/lib/motion.ts`)

- Distance: `y: 18`
- Duration: `0.6s`
- Easing: `[0.22, 1, 0.36, 1]`
- Stagger: `80ms`

## Where motion appears (current)

1. Home hero sequential reveal
2. Leadership / role / case-study grids
3. Career timeline cascade

## Deferred

- React Three Fiber atmospheric mesh (subtle only; load behind idle callback)
- Cursor-following gold accent on hero (performance-gated)
- Shared layout transitions between knowledge routes
