# Contributing to coves7.com

## Local Development

```bash
python -m http.server 8080
# or
npx serve .
```

## Adding a Review or Comparison Article

1. Create the HTML file in the root (slug-based naming, e.g. `best-vpns-2026.html`).
2. Update `index.html` to add the article card.
3. Update `sitemap.xml` with the new URL.
4. Add appropriate affiliate disclosure per FTC requirements.

## Affiliate Compliance

- Every page with affiliate links must include a visible disclosure (e.g. link to `affiliate-disclosure.html`).
- Use `rel="nofollow sponsored"` on affiliate links.
- Keep `disclosure.html` and `affiliate-disclosure.html` accurate and up to date.

## Deployment

Push to `main`. See root `DEPLOYMENT.md` for the full deploy process.

## Standards

- All external links: `rel="noopener noreferrer"` (add `nofollow sponsored` for affiliate links).
- Do not fabricate reviews or star ratings.
- Do not commit tracking pixel tokens or affiliate secret keys.
