# Deployment Pipeline

## Environments

| Env | Purpose |
| --- | --- |
| Local | `npm run dev` |
| Preview | Vercel PR previews |
| Production | Vercel production + Cloudflare DNS |

## Pipeline

1. Push to `main` / open PR
2. GitHub Actions: `npm ci` → `lint` → `build`
3. Vercel builds app from Git
4. Cloudflare proxies apex + www
5. Supabase stays origin-of-truth for data

## Required secrets

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `OPENAI_API_KEY`
- `RESEND_API_KEY`

## Release checklist

- [ ] Migration applied
- [ ] Env vars set in Vercel
- [ ] OG image present at `/public/og/default.jpg`
- [ ] PWA icons at `/public/icons`
- [ ] Contact + newsletter smoke tested
- [ ] Lighthouse pass on Home / About / Contact
- [ ] robots/sitemap verified

## Offline / PWA

Manifest is generated at `/manifest.webmanifest`. Add a service worker (Serwist/Workbench) in a follow-up for richer offline caching of the knowledge shell.
