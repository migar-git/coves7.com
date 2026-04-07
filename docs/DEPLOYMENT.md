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
git commit -m "type: description"
git push origin main
```

GitHub Pages rebuilds automatically within ~60 seconds.

## Verifying Deployment

1. Open https://coves7.com in a private/incognito browser window
2. Hard-refresh (Ctrl+Shift+R) to bypass CDN cache
3. Confirm changed content is visible
4. Verify HTTPS padlock — certificate managed by GitHub Pages

## Rollback

```bash
# Revert the last commit
git revert HEAD
git push origin main

# Revert a specific commit
git revert <commit-sha>
git push origin main
```

Always prefer `git revert` over force-push to preserve commit history.

## Environment Variables

No server-side environment variables required. This is a fully static site.

Affiliate tracking parameters are embedded in HTML link hrefs. Analytics scripts use client-side (public) tracking IDs only.

## Pre-Deploy Checklist

- [ ] Pages render correctly in Chrome, Firefox, Safari at 375px and 1280px
- [ ] All affiliate links resolve and include correct tracking parameters
- [ ] No console errors in browser DevTools
- [ ] sitemap.xml updated if pages added or removed
- [ ] robots.txt reflects correct domain (coves7.com)
- [ ] Lighthouse Performance ≥ 90, Accessibility ≥ 90

## Post-Deploy Checklist

- [ ] coves7.com and www.coves7.com both resolve
- [ ] HTTPS enforced (HTTP redirects to HTTPS)
- [ ] Analytics recording sessions (if configured)
- [ ] Affiliate links tracked in affiliate network dashboard
