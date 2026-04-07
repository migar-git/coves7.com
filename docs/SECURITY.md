# Security — coves7.com

## Content Security Policy

Add CSP via `<meta http-equiv="Content-Security-Policy">` in all HTML files.

Recommended for an affiliate site:
- `default-src 'self'`
- `script-src 'self' 'unsafe-inline'` (tighten with nonces when feasible)
- `img-src 'self' data: https:` (affiliate banner images come from external domains)
- `frame-src 'none'`
- `object-src 'none'`

## Affiliate Link Security

- Use `rel="noopener noreferrer nofollow sponsored"` on all affiliate links.
- Do not use URL shorteners that obscure the affiliate destination.
- Rotate or audit affiliate tracking codes periodically.

## Secrets

This is a static site. Do not commit:
- Affiliate network API keys or secret tokens
- Analytics account credentials
- Any `.env` files

## Legal Compliance

- `privacy-policy.html` — update whenever data collection practices change.
- `disclosure.html` and `affiliate-disclosure.html` — must meet FTC endorsement guidelines.

## DNS and Domain

`update_dns.sh` contains DNS management commands. Review before running; ensure it does not contain hardcoded provider credentials.

## Reporting Issues

Contact the repo owner privately for security concerns.
