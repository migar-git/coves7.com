# Architecture Analysis — coves7.com

**Audit Date:** 2026-03-29

## Directory Structure Overview

```
coves7.com/
├── index.html                           # Homepage — review site hub
├── ai-tools.html                        # AI tools category page
├── trading-platforms.html               # Trading platforms category
├── saas-tools.html                      # SaaS tools category
├── automation-software.html             # Automation software category
├── best-ai-tools-business-2026.html     # Individual review article
├── notion-vs-monday-vs-clickup.html     # Comparison review
├── top-crypto-trading-bots-compared.html # Crypto bots review
├── about.html
├── privacy-policy.html / privacy.html   # Duplicate? (investigate)
├── disclosure.html / affiliate-disclosure.html # Duplicate? (investigate)
├── sitemap.xml
├── robots.txt
├── CNAME
├── update_dns.sh                        # DNS management script
├── css/                                 # Separated styles
├── js/                                  # Separated scripts
├── docs/
└── AGENT.md / AGENTS.md / MEMORY.md / PORTFOLIO.md
```

## Patterns Observed

**Strengths:**
- Broadest content coverage of any site in the portfolio.
- Proper CSS/JS separation.
- sitemap.xml and robots.txt present.
- Affiliate disclosure present (FTC compliance awareness).
- Schema.org WebSite markup in index.html.
- Category-based URL structure is SEO-friendly.

**Anti-Patterns:**
- Possible duplicate pages: `privacy-policy.html` AND `privacy.html`; `disclosure.html` AND `affiliate-disclosure.html`. Duplicate pages split SEO equity and confuse users.
- `update_dns.sh` in a web repo is an operational concern that belongs in DNTUIT5 or a dedicated ops repo.
- No visible image directory — review articles without images have poor CTR and engagement.
- Article URLs use dates (2026) — will appear stale in 2027; consider evergreen URL patterns.

## Recommendations

1. Investigate and consolidate duplicate pages (privacy, disclosure).
2. Move `update_dns.sh` to DNTUIT5 or node2.
3. Add `images/` directory and include screenshots/logos in review articles.
4. Use canonical tags on any duplicate pages temporarily during consolidation.
5. Add structured data (Schema.org Review, Product) to individual review articles.
6. Add GitHub Actions CI for HTML validation and automated deploy.
