---
title: "Coves7 — Product Requirements Document"
version: "1.0"
status: "Active"
owner: "migar"
last-updated: "2026-04-07"
---

# Coves7 — PRD

> **Version 1.0** | Active | Updated 2026-04-07

## 1. Vision & Problem Statement

Coves7 (coves7.com) is an independent content and affiliate review site covering AI tools, trading platforms, SaaS software, and automation solutions. The site's value proposition is "independent, unbiased" reviews backed by hands-on testing — a trust-based editorial positioning designed to earn affiliate commissions and ad revenue from readers making purchasing decisions.

**Problem:** The market is flooded with AI tool "reviews" that are thinly veiled promotions. Decision-makers (entrepreneurs, business owners, traders) need credible comparisons to cut through the noise.

**Audience:** Entrepreneurs and business owners evaluating AI/SaaS tools; active traders researching platforms; automation-minded operators comparing workflow tools; tech-savvy professionals who want data-driven buying guides.

## 2. Goals & Success Metrics

| Goal | KPI | Target | Measurement Method |
|---|---|---|---|
| Grow organic search traffic | Monthly organic sessions | +25% MoM | GA4 acquisition |
| Generate affiliate revenue | Affiliate link click-throughs | 500+/month | Affiliate dashboard |
| Establish topical authority | Pages indexed with top-10 rankings | 5+ articles | Google Search Console |
| Reader engagement | Avg. pages per session | ≥ 2.0 | GA4 |
| Content freshness | New article or update per week | 1/week | Editorial calendar |

## 3. User Personas

| Persona | Role | Pain Points | What Success Looks Like |
|---|---|---|---|
| Tool Researcher | SMB owner / entrepreneur | Too many options; afraid of wasting money on wrong tool | Reads comparison article; clicks affiliate link to purchase |
| Trader | Active retail trader | Hard to evaluate platform quality before committing | Reads platform review; uses referral link to sign up |
| Automator | Ops / no-code builder | Unclear which automation tool fits their stack | Reads automation-software.html; picks a tool with confidence |
| Content Marketeer | Digital marketer | Needs AI writing/SEO tools but overwhelmed by choice | Reads ai-tools.html; converts via affiliate |

## 4. Functional Requirements

### 4.1 Content

- FR-001: Homepage MUST present site identity, featured categories (AI Tools, Trading, SaaS, Automation), and featured review cards.
- FR-002: Each category page (ai-tools.html, trading-platforms.html, saas-tools.html, automation-software.html) MUST contain structured review listings with tool names, ratings, pros/cons, and affiliate CTAs.
- FR-003: "Best of" list articles (e.g., best-ai-tools-business-2026.html) MUST include comparison tables with clear winner recommendations.
- FR-004: Affiliate disclosure MUST appear on every page with affiliate links, per FTC guidelines.
- FR-005: About page MUST explain editorial independence and review methodology.
- FR-006: Privacy policy and disclosure pages MUST be present and current.

### 4.2 Conversion & Monetization

- FR-007: Affiliate CTAs MUST use tracking links (not direct vendor links) to enable commission attribution.
- FR-008: "Best Pick" or recommended tool MUST be visually highlighted in each category.
- FR-009: Internal linking MUST connect related articles to extend session depth.
- FR-010: Email capture MUST be present (newsletter or deal alerts) to build owned audience.

### 4.3 SEO

- FR-011: Each article page MUST have unique title, meta description, canonical URL, and relevant schema markup (Article or Review).
- FR-012: Site MUST maintain a valid sitemap.xml and robots.txt.
- FR-013: "Best AI Tools 2026" style evergreen content MUST be dated and updated annually.

## 5. Non-Functional Requirements

| Category | Requirement | Target | Priority |
|---|---|---|---|
| Performance | LCP | < 2.5s | P0 |
| Performance | CLS | < 0.1 | P0 |
| SEO | Core Web Vitals | All green | P0 |
| SEO | Structured data (Article/Review schema) | Valid on all review pages | P1 |
| Compliance | FTC affiliate disclosure | Visible on all monetized pages | P0 |
| Accessibility | WCAG AA | Pass | P1 |

## 6. Constraints

- Static HTML — no CMS, no server-side rendering.
- Affiliate tracking handled by third-party programs (e.g., Impact, ShareASale, direct vendor programs).
- Content updates require manual HTML edits or static site generation.
- Domain: coves7.com (CNAME managed separately).

## 7. Out of Scope

- User accounts or saved reviews.
- Dynamic price comparison (no API integrations).
- Video reviews / YouTube embeds (unless added later).
- Comments section.

## 8. Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Google algorithm changes penalize thin content | Medium | High | Focus on depth, original testing data, E-E-A-T signals |
| Affiliate programs terminate or change rates | Medium | Medium | Diversify across 3+ affiliate programs per category |
| FTC non-compliance | Low | High | Audit disclosure placement on every monetized page |
| Content goes stale (AI tool landscape changes fast) | High | Medium | Schedule quarterly content audits; add "last updated" dates |
| Perceived bias undermines trust | Medium | High | Maintain transparent methodology; note affiliate relationships clearly |

## 9. Document Index

| Document | Path | Status |
|---|---|---|
| Architecture | /docs/ARCHITECTURE.md | Active |
| PRD (this file) | /docs/PRD.md | Active |
| Affiliate Disclosure | /affiliate-disclosure.html | Active |
| Privacy Policy | /privacy-policy.html | Active |
| Sitemap | /sitemap.xml | Active |
