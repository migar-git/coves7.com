# Test Strategy — coves7.com

## Overview

Coves7 is a static HTML/CSS/JS affiliate review site with no backend. Testing focuses on frontend quality, performance, accessibility, content integrity, and affiliate link health.

## Test Categories

### 1. Lighthouse Audits (Primary Quality Gate)

**Targets:**

| Category | Minimum Score |
|---|---|
| Performance | ≥ 90 |
| Accessibility | ≥ 90 |
| Best Practices | ≥ 90 |
| SEO | ≥ 95 |

```bash
npx lighthouse https://coves7.com --output html --output-path ./lighthouse-report.html
```

Run on desktop and mobile presets.

### 2. Accessibility Testing

- Run axe DevTools browser extension on each page
- Verify all images have meaningful `alt` text
- Confirm keyboard navigation works for all links and interactive elements
- Check color contrast (minimum 4.5:1 for normal text)
- Verify affiliate disclosure is accessible and readable

### 3. Link Checking

Check for broken links before and after content updates:

```bash
npx linkinator https://coves7.com --recurse --skip "^(?!https://coves7.com)"
```

Focus areas:
- All affiliate links resolve (return 200 or expected redirect)
- Internal navigation links work
- CTA buttons open affiliate destinations correctly

### 4. Affiliate Link Integrity

Before pushing content changes:
- Manually click each affiliate CTA to verify correct destination
- Verify tracking parameters are present in affiliate URLs
- Confirm `rel="noopener noreferrer sponsored"` is on all external affiliate links
- Check affiliate links open in the expected context (new tab or same page)

### 5. Cross-Browser Testing

Test on: Chrome (latest), Firefox (latest), Safari (latest), Edge (latest).

Focus: CSS grid layouts, animation performance, responsive behavior.

### 6. Mobile/Responsive Testing

| Breakpoint | Device |
|---|---|
| 375px | iPhone SE |
| 390px | iPhone 14 |
| 768px | iPad portrait |
| 1280px | Desktop |
| 1920px | Large desktop |

### 7. SEO Checks

- `<title>` unique and descriptive on every page
- `<meta name="description">` present on every page
- Canonical URLs set correctly
- sitemap.xml lists all pages
- robots.txt not blocking indexable content
- Open Graph tags for social sharing

### 8. Visual Regression (for Major Redesigns)

```bash
npx playwright screenshot https://coves7.com --full-page --output before.png
# Make changes
npx playwright screenshot https://coves7.com --full-page --output after.png
```

## Test Schedule

| Trigger | Tests |
|---|---|
| Before every push to `main` | Browser smoke test, spot-check affiliate links |
| New article added | Link check, SEO meta check, mobile layout |
| Major CSS/layout change | Cross-browser, visual regression, Lighthouse |
| Monthly | Full Lighthouse audit, full link check |
