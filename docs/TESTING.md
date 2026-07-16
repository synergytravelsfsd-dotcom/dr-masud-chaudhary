# Testing Strategy

## Layers

1. **Static** — TypeScript + ESLint in CI
2. **Unit** — utils, metadata builders, search ranking helpers
3. **Integration** — API route validation (Zod) with mock request objects
4. **E2E** — critical paths: Home → Consulting → Contact; Newsletter; Publication detail
5. **A11y** — axe checks on Home, About, Contact
6. **Perf** — Lighthouse CI budgets (LCP, CLS, INP)

## Suggested toolchain (next increment)

- Vitest for unit/integration
- Playwright for E2E
- `@axe-core/playwright` for accessibility
- Lighthouse CI GitHub Action

## Priority smoke checklist (manual for v1)

- [ ] All primary nav destinations resolve
- [ ] Theme toggle persists
- [ ] Contact form validates + returns success
- [ ] Newsletter form validates + returns success
- [ ] `/api/search?q=poultry` returns results
- [ ] Knowledge assistant responds
- [ ] `/sitemap.xml` and `/feed.xml` render
- [ ] `/admin` is `noindex`
