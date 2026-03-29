# Copilot Optimization — coves7.com

**Audit Date:** 2026-03-29

## Current Copilot Usefulness Rating: 5 / 10

Most content-rich static site in portfolio; Copilot has the most HTML to reference for style consistency. Separated CSS/JS improves Copilot usefulness vs. aresmaxs.com.

## Opportunities for AI Assistance

| Task | Opportunity |
|------|-------------|
| New review article generation | Agent generates review HTML from product data + template |
| Comparison table generation | Copilot can write a JS comparison table component |
| Affiliate link audit | Agent scans all HTML for affiliate links and UTM completeness |
| Schema.org Review markup | Copilot can add Review schema to all product review pages |
| Sitemap.xml maintenance | Agent regenerates after new article added |
| Category page expansion | Agent adds new product cards to category pages |
| Update detection | Agent monitors affiliate programs for price/feature changes → updates articles |

## What Needs to Be Built for Copilot to Help More

1. **Review article template** (`articles/_template.html`) with affiliate link placeholders.
2. **Product data JSON** (`data/products.json`) — catalog of reviewed products with affiliate URLs, prices, ratings.
3. **`generate_review.py`** — reads product JSON + template → generates article HTML.
4. **`audit_affiliate_links.py`** — scans all HTML for affiliate URLs and verifies UTM parameters.
5. **`.github/copilot-instructions.md`** — describe coves7 as an affiliate review site; tell Copilot about UTM conventions and Schema.org requirements.
