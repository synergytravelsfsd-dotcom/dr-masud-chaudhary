# SEO System

## Target queries

- Dr Masud Sadiq Chaudhary
- Veterinary Expert Pakistan
- Poultry Consultant Pakistan
- Animal Health Consultant
- Veterinary Pharmaceutical Consultant
- One Health Pakistan
- AI Poultry
- Veterinary Speaker
- International Poultry Consultant

## Implemented

- Metadata factory: `src/lib/seo.ts`
- Person JSON-LD in root layout
- Canonical URLs
- Open Graph + Twitter cards
- Dynamic `sitemap.xml`
- `robots.txt` blocking `/admin` + `/api`
- RSS at `/feed.xml`
- Keyword set in `siteConfig`

## Knowledge Graph readiness

Person schema includes:

- name, url, jobTitle, description
- sameAs social profiles
- knowsAbout topical entities
- worksFor organisations (Synergy, Elenco, PVPA)

## Content SEO rules

1. One H1 per page
2. Unique title/description via `buildMetadata`
3. Internal links across expertise, initiatives, publications
4. Downloadable CV/speaker kit as authority assets
5. Publish dated publications with stable slugs

## Future

- Per-article Article JSON-LD
- FAQ schema on consulting/speaking
- hreflang once i18n locales launch
- Search Console + IndexNow on deploy
