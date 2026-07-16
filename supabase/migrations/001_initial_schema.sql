-- Digital HQ schema for Dr. Masud Sadiq Chaudhary
-- Target: Supabase PostgreSQL + Storage + Auth + pgvector

create extension if not exists "pgcrypto";
create extension if not exists "vector";

create type public.content_status as enum ('draft', 'review', 'scheduled', 'published', 'archived');
create type public.enquiry_type as enum ('consulting', 'speaking', 'partnership', 'media', 'investor', 'other');
create type public.media_kind as enum ('image', 'video', 'audio', 'pdf', 'document', 'other');

create table public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  full_name text,
  role text check (role in ('owner', 'editor', 'analyst', 'viewer')) default 'viewer',
  created_at timestamptz not null default now()
);

create table public.articles (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  excerpt text,
  body_mdx text,
  cover_path text,
  status public.content_status not null default 'draft',
  published_at timestamptz,
  seo_title text,
  seo_description text,
  tags text[] default '{}',
  author_id uuid references public.profiles (id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.publications (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  type text not null,
  summary text,
  body_mdx text,
  pdf_path text,
  status public.content_status not null default 'draft',
  published_at timestamptz,
  tags text[] default '{}',
  featured boolean default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.media_assets (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  kind public.media_kind not null default 'image',
  storage_path text not null,
  alt_text text,
  credit text,
  tags text[] default '{}',
  created_at timestamptz not null default now()
);

create table public.events (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  location text,
  starts_at timestamptz,
  ends_at timestamptz,
  summary text,
  status public.content_status not null default 'draft',
  created_at timestamptz not null default now()
);

create table public.case_studies (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  sector text,
  region text,
  outcome text,
  summary text,
  body_mdx text,
  status public.content_status not null default 'draft',
  published_at timestamptz,
  created_at timestamptz not null default now()
);

create table public.partners (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  category text,
  country text,
  website text,
  logo_path text,
  featured boolean default false,
  created_at timestamptz not null default now()
);

create table public.contact_enquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  organisation text,
  country text,
  type public.enquiry_type not null default 'other',
  message text not null,
  status text not null default 'new',
  assigned_to uuid references public.profiles (id),
  created_at timestamptz not null default now()
);

create table public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  status text not null default 'active',
  source text default 'website',
  created_at timestamptz not null default now(),
  unsubscribed_at timestamptz
);

create table public.appointment_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  preferred_window text,
  timezone text,
  notes text,
  status text not null default 'requested',
  created_at timestamptz not null default now()
);

create table public.document_chunks (
  id uuid primary key default gen_random_uuid(),
  source_type text not null,
  source_id uuid,
  title text,
  chunk text not null,
  embedding vector(1536),
  metadata jsonb default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index articles_status_idx on public.articles (status, published_at desc);
create index publications_status_idx on public.publications (status, published_at desc);
create index contact_enquiries_created_idx on public.contact_enquiries (created_at desc);
create index document_chunks_embedding_idx on public.document_chunks using ivfflat (embedding vector_cosine_ops) with (lists = 100);

alter table public.articles enable row level security;
alter table public.publications enable row level security;
alter table public.media_assets enable row level security;
alter table public.events enable row level security;
alter table public.case_studies enable row level security;
alter table public.partners enable row level security;
alter table public.contact_enquiries enable row level security;
alter table public.newsletter_subscribers enable row level security;
alter table public.appointment_requests enable row level security;
alter table public.document_chunks enable row level security;
alter table public.profiles enable row level security;

-- Public read for published content; staff write via authenticated roles (refine in app).
create policy "Public read published articles"
  on public.articles for select
  using (status = 'published');

create policy "Public read published publications"
  on public.publications for select
  using (status = 'published');

create policy "Public insert contact"
  on public.contact_enquiries for insert
  with check (true);

create policy "Public insert newsletter"
  on public.newsletter_subscribers for insert
  with check (true);
