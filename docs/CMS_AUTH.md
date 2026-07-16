# CMS & Authentication

## CMS model

Content types map 1:1 to Supabase tables:

- `articles` — MDX blog / commentary
- `publications` — research / policy / whitepapers
- `media_assets` — press & library files in Storage
- `events` — conference timeline
- `case_studies` — outcome narratives
- `partners` — network directory
- `document_chunks` — embeddings for AI/search

Status enum: `draft → review → scheduled → published → archived`.

## Admin panel modules

Located at `/admin` (noindex):

1. Blog CMS
2. Media Library
3. Contact Inbox
4. Newsletter
5. Publications
6. Analytics Dashboard

v1 ships UI scaffolding. Wire CRUD against Supabase after Auth is enabled.

## Authentication

1. Supabase Auth (email magic link or SSO later)
2. `profiles` row with role claims
3. Middleware guard for `/admin/*`
4. RLS policies for staff write / public read published

## Newsletter system

`POST /api/newsletter` → validate email → upsert `newsletter_subscribers` → optional Resend audience sync.

## Contact management

`POST /api/contact` → validate payload → insert `contact_enquiries` → email ops via Resend.

## AI assistant

`POST /api/chat` currently returns corpus-aware stub answers from local publications. Production path:

1. Chunk publications into `document_chunks`
2. Embed with OpenAI
3. Retrieve top-k via pgvector
4. Answer with citations + refusal rules for non-corpus questions
