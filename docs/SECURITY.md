# Security — coves7.com

## Overview

Coves7 is a static affiliate review site. There is no user authentication, no database, and no server-side processing. The attack surface is minimal, but the following practices must be maintained.

## Content Security Policy (CSP)

Apply CSP via `<meta http-equiv="Content-Security-Policy">` in all HTML pages.

Recommended policy for an affiliate site with external resources:

```html
<meta http-equiv="Content-Security-Policy"
  content="default-src 'self';
           script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com;
           style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
           font-src 'self' https://fonts.gstatic.com;
           img-src 'self' data: https:;
           connect-src 'self' https://www.google-analytics.com;
           frame-src 'none';
           object-src 'none';">
```

Tighten `'unsafe-inline'` by migrating inline scripts to external files and using nonces where possible.

## HTTPS Enforcement

GitHub Pages automatically enforces HTTPS for custom domains. Verify in repository Settings → Pages → "Enforce HTTPS" is checked.

Never serve this site over HTTP. The CNAME file must be present for the custom domain TLS certificate to be provisioned correctly.

## Secrets and API Keys

The following must never be committed to this repository:

- Analytics API keys or tracking IDs that provide write access
- Affiliate network secret tokens or postback URLs
- Email marketing platform API keys
- Any `.env` file

The `.gitignore` must include:
```
.env
.env.*
*.key
secrets/
```

## Affiliate Link Security

- Use `rel="noopener noreferrer sponsored"` on all affiliate outbound links
- Do not use `target="_blank"` without `rel="noopener noreferrer"` (prevents tab-napping)
- Affiliate tracking parameters should only contain IDs, not secrets

## Subresource Integrity (SRI)

For any CDN-loaded scripts or stylesheets, use SRI hashes:

```html
<script src="https://cdn.example.com/lib.js"
        integrity="sha384-..."
        crossorigin="anonymous"></script>
```

Generate hashes at: https://www.srihash.org/

## Vulnerability Reporting

Report security issues privately to the repository owner via GitHub private email or repository security advisories. Do not post vulnerability details in public issues.

## Legal Compliance

- Affiliate disclosure must be visible on all pages with affiliate links (FTC requirement)
- Privacy policy must accurately describe analytics and tracking in use
- robots.txt must not inadvertently expose sensitive directory paths
