# Deployment — coves7.com

## Platform

Hosted on **GitHub Pages** with custom domain **coves7.com**.

## DNS Configuration

| Record Type | Host | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | migar-git.github.io |

Verify DNS:
```bash
dig coves7.com A +short
```

## Deploy Process

```bash
git add <changed-files>
git commit -m "feat/fix/content: describe your change"
git push origin main
```

GitHub Pages rebuilds automatically within ~60 seconds.

## Verifying Deployment

1. Open https://coves7.com in a private browser window
2. Hard-refresh (Ctrl+Shift+R) to bypass cache
3. Confirm changed content appears and affiliate links work

## Rollback

```bash
# Revert last commit
git revert HEAD
git push origin main

# Revert specific commit
git revert <commit-sha>
git push origin main
```

Prefer `git revert` over force-push to preserve history.

## Environment Variables

None required. This is a fully static site.

- Affiliate tracking parameters are embedded in link URLs (not secret)
- Analytics IDs (GA4 measurement IDs) are safe in client-side HTML

## Pre-Deploy Checklist

- [ ] All pages render correctly in Chrome, Firefox, Safari
- [ ] Mobile layout correct at 375px
- [ ] All affiliate links open correctly with tracking parameters
- [ ] Affiliate disclosure visible on pages with affiliate links
- [ ] sitemap.xml updated if pages added or removed
- [ ] No console errors in browser DevTools
- [ ] Lighthouse Performance ≥ 90

## Post-Deploy Checklist

- [ ] coves7.com and www.coves7.com both resolve over HTTPS
- [ ] Spot-check affiliate links are functional (not 404)
- [ ] Analytics recording sessions (if configured)
