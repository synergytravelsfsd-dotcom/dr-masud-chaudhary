# Component Hierarchy

```text
app/layout.tsx
└── ThemeProvider
    ├── SiteHeader
    │   ├── BrandLink
    │   ├── DesktopNav (mega submenu)
    │   ├── ThemeToggle
    │   ├── SearchEntry
    │   └── MobileNav
    ├── <main>
    │   ├── Home
    │   │   ├── HomeHero
    │   │   ├── HomeRoles
    │   │   ├── HomeLeadership
    │   │   ├── HomeExpertise
    │   │   ├── HomeTimeline
    │   │   ├── HomeInsights
    │   │   ├── HomeImpact
    │   │   └── HomeCTA
    │   ├── PageHero pages
    │   │   └── ContentGrid | specialised modules
    │   ├── KnowledgeAssistant
    │   ├── ContactForm
    │   └── NewsletterForm
    └── SiteFooter

ui/
├── button.tsx
└── layout-primitives.tsx (Container, Section, Eyebrow, SectionHeading, PageHero)

motion/
└── fade-in.tsx

forms/
├── contact-form.tsx
└── newsletter-form.tsx

ai/
└── knowledge-assistant.tsx
```
