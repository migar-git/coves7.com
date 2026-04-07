# Contributing to coves7.com

Thank you for contributing to Coves7, the independent affiliate review site.

## Local Development

No build step required. Open `index.html` in a browser or serve locally:

```bash
# Python
python -m http.server 8080
# Node.js
npx serve .
```

Open http://localhost:8080 in your browser.

## Repository Structure

```
/
├── index.html                    # Homepage
├── css/                          # Stylesheets
├── js/                           # JavaScript files
├── *.html                        # Review articles and pages
├── CNAME                         # Custom domain: coves7.com
├── robots.txt / sitemap.xml      # SEO files
├── .gitignore                    # Excludes .env and secrets
└── docs/                         # Project documentation
```

## Branch Naming

| Purpose | Pattern | Example |
|---|---|---|
| New review article | `feat/<tool-name>-review` | `feat/notion-review` |
| Bug fix | `fix/<description>` | `fix/mobile-layout` |
| Content update | `content/<description>` | `content/update-pricing` |
| Documentation | `docs/<description>` | `docs/runbook-update` |

## Pull Request Process

1. Branch from `main`
2. Make focused, atomic changes
3. Test in browser at 375px, 768px, and 1280px widths
4. Verify Lighthouse scores do not regress below 90 Performance / 90 Accessibility
5. Confirm all affiliate links use correct tracking parameters and `rel="noopener noreferrer sponsored"`
6. Open PR with description of what changed and why
7. Request review before merging

## Content Standards

- Reviews must be factual and based on genuine product evaluation
- Disclose affiliate relationships clearly (affiliate disclosure page or inline statement)
- Do not fabricate ratings, reviews, or performance claims
- Use `rel="sponsored"` on all affiliate links per Google guidelines

## Security

- Never commit `.env` files or API tokens
- No affiliate network secret tokens in client-side code
- See `docs/SECURITY.md` for full policy

## Deployment

Push to `main` triggers automatic GitHub Pages deployment. See `docs/DEPLOYMENT.md` for full deploy and rollback procedures.
