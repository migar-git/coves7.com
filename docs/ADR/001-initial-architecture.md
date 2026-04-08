# ADR-001: Initial Architecture — Static HTML/CSS/JS on GitHub Pages

**Date:** 2026-02-14
**Status:** Accepted
**Author:** migar

---

## Context

Coves7 is an independent affiliate review site covering AI tools, trading platforms, SaaS, and automation solutions. The primary business model is affiliate commissions from outbound links. The site requires fast page loads (to minimize bounce rate), strong SEO (organic traffic is the core acquisition channel), and minimal operational overhead.

Architecture options evaluated:

1. **Static HTML/CSS/JS on GitHub Pages** — zero hosting cost, CDN-backed, zero maintenance
2. **Next.js on Vercel** — more flexible but adds build complexity for what is essentially a content site
3. **WordPress** — large plugin ecosystem for SEO, but requires server management and security patching
4. **Ghost / Headless CMS** — good for content teams, but adds cost and complexity beyond current needs

## Decision

**Static HTML/CSS/JS hosted on GitHub Pages.**

No server-side processing. No database. All affiliate links are static HTML `<a>` elements.

## Rationale

### Why static HTML (not WordPress or a CMS)?

- **SEO performance:** Static pages achieve sub-1-second FCP without server-side rendering overhead. Page speed is a confirmed Google ranking factor.
- **Zero security surface:** No database, no PHP, no plugin vulnerabilities. Content injection and SQL injection attacks are not applicable.
- **Zero operational cost:** GitHub Pages is free for public repositories.
- **Content editing is Git-native:** For a solo operator, editing HTML directly in a text editor or via GitHub's web editor is faster than configuring a CMS.

### Why GitHub Pages (not Vercel/Netlify)?

- GitHub is already the version control host — Pages adds zero additional configuration
- Free custom domain with automatic HTTPS (Let's Encrypt)
- Fastly CDN backing provides adequate global performance for a content site

### Why not Next.js?

- No dynamic rendering requirements — all content is static at deploy time
- Framework overhead (hydration, bundle size) would reduce Lighthouse scores without providing value
- No team working on this; single-developer simplicity is valued

## Consequences

### Positive
- Excellent Core Web Vitals by default
- No security patching or dependency management overhead
- Deployment is a single `git push`
- Full HTML/CSS control for cinematic design differentiation

### Negative / Trade-offs
- No server-side A/B testing, personalization, or real-time content
- Adding dynamic features (user accounts, search) requires third-party services
- Affiliate tracking is limited to outbound URL parameters (no server-side analytics)

## Future Considerations

If the site requires server-side features (subscription newsletter, user-saved articles, enhanced analytics), the migration path is to Next.js on Vercel with a headless CMS (Contentful or Sanity). Current static HTML pages can be incrementally replaced with Next.js routes without a full rewrite.
