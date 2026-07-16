# Dr. Masud Sadiq Chaudhary — Digital Headquarters

Premium executive platform for global animal health leadership, poultry innovation, veterinary pharmaceuticals, One Health advocacy, and AI-driven agriculture.

## Stack

- Next.js App Router + TypeScript
- Tailwind CSS v4 + custom design tokens
- Framer Motion
- MDX-ready content layer
- Supabase schema (PostgreSQL + pgvector)
- Resend-ready contact/newsletter APIs
- OpenAI-ready knowledge assistant
- Vercel + GitHub Actions CI

## Quick start

```bash
nvm use 20
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Documentation

| Document | Path |
| --- | --- |
| Architecture | `docs/ARCHITECTURE.md` |
| Design system | `docs/DESIGN_SYSTEM.md` |
| Component hierarchy | `docs/COMPONENT_HIERARCHY.md` |
| CMS & auth | `docs/CMS_AUTH.md` |
| SEO | `docs/SEO.md` |
| Deployment | `docs/DEPLOYMENT.md` |
| Testing | `docs/TESTING.md` |
| UX wireframes | `docs/UX_WIREFRAMES.md` |

## Production enablement

1. Apply `supabase/migrations/001_initial_schema.sql`
2. Set env vars from `.env.example`
3. Connect Resend + OpenAI
4. Deploy to Vercel; put Cloudflare in front if desired
5. Replace placeholder biography, media assets, and PDFs

## Scripts

- `npm run dev` — local development
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — ESLint
