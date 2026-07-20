# Design System

## Brand personality

Professional · Visionary · Trustworthy · Global · Data-driven · Authoritative · Approachable · Innovative · Modern · Minimal · Elegant

## Visual direction

Bright professional blue + cool white field + teal accent. Editorial serif for identity; precise geometric sans for interface. Open, luminous, executive — not dark or heavy.

Avoid: purple gradients, terracotta-cream clichés, broadsheet density, glow-heavy dark UI, pill-stat clusters.

## Tokens

| Token | Light | Role |
| --- | --- | --- |
| `brand-navy` | `#0B5CAB` | Brand blue / hero / footer |
| `brand-ivory` | `#F7FBFF` | Text on brand blue surfaces |
| `background` | `#F4F8FC` | Cool bright page field |
| `surface` | `#FFFFFF` | Elevated panels |
| `foreground` | `#102033` | Primary text |
| `muted` | `#5B6C7E` | Secondary text |
| `gold` | `#0D8A96` | Teal accent (eyebrows, CTAs, focus) |
| `border` | `rgba(16,48,80,.10)` | Hairline structure |

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
