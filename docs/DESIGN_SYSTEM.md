# Design System

## Brand personality

Professional · Visionary · Trustworthy · Global · Data-driven · Authoritative · Approachable · Innovative · Modern · Minimal · Elegant

## Visual direction

Deep navy authority + warm ivory atmospheric field + restrained bronze-gold accent. Editorial serif for identity; precise geometric sans for interface.

Avoid: purple gradients, terracotta-cream clichés, broadsheet density, glow-heavy dark UI, pill-stat clusters.

## Tokens

| Token | Light | Role |
| --- | --- | --- |
| `brand-navy` | `#0A1628` | Permanent brand / footer / dark hero |
| `brand-ivory` | `#F3EEE4` | Permanent ivory on navy surfaces |
| `background` | `#F7F4EE` | Page field |
| `surface` | `#FFFDFA` | Elevated panels |
| `foreground` | `#0A1628` | Primary text |
| `muted` | `#5D6978` | Secondary text |
| `gold` | `#B8956C` | Accent, eyebrows, focus |
| `border` | `rgba(10,22,40,.10)` | Hairline structure |

Dark mode remaps interactive `navy`/`ivory` text tokens while preserving `brand-*` for permanent brand blocks.

## Typography

- Display: **Instrument Serif** (`font-display`) — brand, hero, section titles
- Sans: **Manrope** — UI, body, navigation
- Tracking: tight on display; wide uppercase for eyebrows (`0.18em–0.22em`)

## Spacing & radius

- Section padding: `py-20 / sm:py-28`
- Container: `max-w-6xl` with responsive gutters
- Radius language: `rounded-2xl` / `rounded-3xl` / `rounded-full` buttons

## Components

- `Button` — primary / secondary / ghost / gold
- `PageHero` — page identity block (one job)
- `SectionHeading` — section identity
- `ContentGrid` — knowledge/initiative tiles
- `FadeIn` / `Stagger` — motion primitives

## Motion principles

1. Enter once on scroll with ease-out cubic
2. Stagger lists lightly (≈80ms)
3. Prefer opacity/transform only
4. No continuous decorative loops on marketing pages

## Accessibility

- Focus rings on interactive controls
- AA+ contrast targets on body text
- Reduced-motion can be added via `prefers-reduced-motion` media queries in a follow-up
- Semantic landmarks: header/main/footer/nav
