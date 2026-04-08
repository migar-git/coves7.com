# Runbook — coves7.com

## Service Overview

- **Site:** https://coves7.com
- **Type:** Static HTML/CSS/JS affiliate review site
- **Hosting:** GitHub Pages (branch: main)
- **Custom Domain:** coves7.com

---

## Routine Operations

### Deploy a Change

```bash
git add <files>
git commit -m "type: description"
git push origin main
```

GitHub Pages publishes within ~60 seconds.

### Verify the Site is Live

```bash
curl -I https://coves7.com
# Expect: HTTP/2 200
```

---

## Incident Procedures

### Site Not Loading

1. Check https://www.githubstatus.com
2. If GitHub Pages is operational: check repository Settings → Pages
3. Confirm source is set to `main` branch, root `/`
4. Check the last commit did not break HTML structure

### Domain Not Resolving

1. Check DNS:
   ```bash
   dig coves7.com A +short
   # Expected: 185.199.108–111.153
   ```
2. Verify DNS A records at registrar
3. Allow up to 48 hours for DNS changes to propagate
4. Verify CNAME file in repo root contains `coves7.com`

### HTTPS Certificate Issue

1. Go to repository Settings → Pages
2. Verify "Enforce HTTPS" is enabled
3. If certificate pending: wait 24 hours after DNS propagation
4. Toggle "Enforce HTTPS" off then on to re-trigger provisioning

### Affiliate Link Returning 404

1. Check the affiliate network dashboard for the broken link
2. Update the link in the HTML file(s)
3. Commit and push the fix

### Rollback a Bad Deployment

```bash
git revert HEAD
git push origin main
# Or for a specific commit:
git revert <bad-commit-sha>
git push origin main
```

---

## Cache Invalidation

- GitHub Pages CDN caching: allow 60–120 seconds after push
- Test with incognito window or `curl -I https://coves7.com`
- Hard-refresh browser: Ctrl+Shift+R

---

## Content Operations

### Add a New Review Article

1. Create `<article-slug>.html` in repo root
2. Add article card to homepage or category listing
3. Add URL to `sitemap.xml`
4. Verify all affiliate links include tracking parameters
5. Push to main

### Update an Affiliate Link

1. Search all HTML files for the old URL
2. Replace with new URL (maintaining tracking parameters)
3. Commit and push

---

## Monitoring

- Recommended: UptimeRobot free monitor on https://coves7.com
- Check Google Search Console monthly for crawl errors
- Periodically audit affiliate links for 404s with linkinator

---

## Contacts

| Role | Contact |
|---|---|
| Site Owner | migar (GitHub) |
| Domain Registrar | Check registrar account for coves7.com |
