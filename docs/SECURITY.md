# Security — coves7.com

## Overview

Coves7 is a static HTML affiliate review site. It has no backend, no user authentication, and no server-side processing. The security surface is limited but must be managed carefully given affiliate link integrity and user trust.

## Content Security Policy (CSP)

Apply CSP via `<meta http-equiv="Content-Security-Policy">` in the `<head>` of each HTML page.

Recommended policy:
```html
<meta http-equiv="Content-Security-Policy"
  content="default-src 'self';
           script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com;
           style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
           font-src 'self' https://fonts.gstatic.com;
           img-src 'self' data: https:;
           connect-src 'self' https://www.google-analytics.com;
           object-src 'none';
           frame-src 'none';">
```

Adjust `script-src` and `connect-src` based on the analytics and affiliate network scripts actually loaded.

## HTTPS Enforcement

HTTPS is enforced automatically by GitHub Pages. The "Enforce HTTPS" setting must be enabled in repository Settings → Pages.

- HTTP requests automatically redirect to HTTPS
- TLS certificates are provisioned by Let's Encrypt via GitHub Pages

## Secrets and API Keys

The following must never be committed to this repository:

- Analytics property IDs (use environment-specific includes or publicly safe client IDs only)
- Affiliate network secret tokens or webhook credentials
- Email service API keys
- Any `.env` files

`.gitignore` must include:
```
.env
.env.*
*.key
*.pem
secrets/
```

## Affiliate Link Integrity

- All affiliate links must use `rel="noopener noreferrer sponsored"` per Google Webmaster Guidelines
- Affiliate tracking parameters must not contain secret tokens
- Cloaked affiliate links (via redirects) must be served from a secure, HTTPS endpoint

## Third-Party Scripts

- Minimize third-party scripts loaded on each page
- Use Subresource Integrity (SRI) for any CDN-loaded scripts:
  ```html
  <script src="https://cdn.example.com/lib.js"
          integrity="sha384-..." crossorigin="anonymous"></script>
  ```
- Regularly audit loaded scripts for unexpected additions

## .gitignore Requirements

The repository `.gitignore` must exclude:
- `.env` and `.env.*`
- `node_modules/`
- `*.log`
- OS files (`.DS_Store`, `Thumbs.db`)
- Editor files (`.vscode/settings.json` if containing personal tokens)

## Reporting Security Issues

Contact the repository owner privately via GitHub. Do not post security vulnerabilities in public issues or discussions.
