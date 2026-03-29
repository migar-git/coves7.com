# Agent Readiness — coves7.com

**Audit Date:** 2026-03-29

## Current Agent Readiness: Low-Medium (32 / 100)

Best-positioned static site for agent automation due to content volume and structured category system, but lacks the data infrastructure and pipeline tooling for autonomous content operations.

## What's Working

- AGENT.md schema v1.0 present.
- Category-based URL structure is conducive to agent-driven content expansion.
- Multiple affiliate categories map to distinct research domains (AI tools, trading, SaaS, automation).
- sitemap.xml and robots.txt present — agents can update these.

## What Needs to Be Built for Agent Automation

| Component | Priority | Description |
|-----------|----------|-------------|
| `data/products.json` | Critical | Catalog of reviewed products with affiliate URLs, pricing, ratings — the foundation for all automation |
| `generate_review.py` | High | Agent reads product data → renders review HTML |
| `audit_affiliate_links.py` | High | Agent validates UTM tracking on all articles |
| GitHub Actions workflow | High | CI validates HTML; deploys automatically |
| Analytics API integration | High | Agent reads click/conversion data for arescore KPIs |
| Price change monitor | Medium | Agent monitors affiliate programs for price changes → updates articles |
| `generate_sitemap.py` | Medium | Regenerates sitemap.xml after new content |

## For Static Site Agents — Recommended Next Steps

coves7.com has the clearest agent value proposition in the portfolio:

1. **Build `data/products.json`** — this is the master catalog. Every reviewed product has an entry with affiliate URL, commission rate, pricing, pros/cons. Agents read from this; articles are generated from it.
2. **Build `generate_review.py`** — with product data + template, Oracle (n2) can research a new tool and Ares (node2) can generate and publish a review in one agent cycle.
3. **Connect analytics to arescore KPIs** — once tracking is in place, the swarm can optimize content strategy based on actual conversion data.
4. This is the monetization engine. All content pipeline investment should prioritize coves7.com first.
