# Architecture

## Purpose

Executive digital headquarters (not a portfolio) for **Dr. Masud Sadiq Chaudhary**, optimised for authority, consulting demand, speaking invitations, institutional partnerships, and long-term knowledge publishing.

## System map

```text
┌─────────────────────────────────────────────────────────────┐
│ Cloudflare (DNS, WAF, CDN cache)                            │
└────────────────────────────┬────────────────────────────────┘
                             ▼
┌─────────────────────────────────────────────────────────────┐
│ Vercel — Next.js App Router                                 │
│  Marketing routes · MDX · SEO · PWA · API routes            │
└───────────────┬─────────────────────────────┬───────────────┘
                ▼                             ▼
     ┌──────────────────┐           ┌────────────────────┐
     │ Supabase         │           │ External services  │
     │ Postgres + Auth  │           │ OpenAI · Resend    │
     │ Storage · Vector │           │ Analytics          │
     └──────────────────┘           └────────────────────┘
```

## Folder structure

```text
src/
  app/                 # App Router pages + API
  components/
    ai/                # Knowledge assistant
    forms/             # Contact + newsletter
    home/              # Home composition
    layout/            # Header, footer, theme
    motion/            # Animation primitives
    pages/             # Shared page shells
    providers/         # Theme provider
    ui/                # Design-system primitives
  content/             # Typed content sources (v1 local CMS)
  lib/                 # Site config, SEO, utils
supabase/migrations/   # Canonical database schema
docs/                  # Architecture & delivery docs
.github/workflows/     # CI
```

## Routing model

- Marketing surface under `/` (Home → Contact + initiative pages)
- Knowledge surface: `/publications`, `/articles`, `/research`, `/knowledge`
- Operations surface: `/admin` (noindex)
- API surface: `/api/contact`, `/api/newsletter`, `/api/chat`, `/api/search`
- Feeds: `/sitemap.xml`, `/robots.txt`, `/feed.xml`, `/manifest.webmanifest`

## Data strategy (v1 → v2)

| Concern | v1 (shipped) | v2 (production) |
| --- | --- | --- |
| Content | Typed TS modules in `src/content` | Supabase + MDX store |
| Contact | Validated API + console log | Supabase + Resend |
| Newsletter | Validated API | Supabase audience + Resend |
| Search | Lexical API | Hybrid lexical + pgvector |
| AI | Corpus-aware stub | RAG over `document_chunks` |
| Auth | Admin UI stub | Supabase Auth + RLS |

## Component hierarchy

```text
RootLayout
├── ThemeProvider
├── SiteHeader
├── main
│   ├── Home composition / PageHero pages
│   └── Feature modules (assistant, forms)
└── SiteFooter
```

## Animation library

- `FadeIn` — viewport entrance
- `Stagger` / `StaggerItem` — list choreography
- Motion policy: 2–3 intentional motions per primary surface; no ornamental noise

## CMS architecture

Editors manage articles, publications, media, events, case studies, partners via Admin console → Supabase tables with `content_status`. Public site reads `published` rows only.

## Auth

- Supabase Auth for staff (`profiles.role`: owner/editor/analyst/viewer)
- RLS denies public writes except contact + newsletter inserts
- `/admin` remains noindex

## Observability & SEO

- JSON-LD Person schema on all pages via root layout
- Canonical URLs, OG/Twitter cards, dynamic sitemap, RSS
- Security headers in `next.config.ts`
