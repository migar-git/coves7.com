# Security Report — coves7.com

**Audit Date:** 2026-03-29

## Security Concerns

| Issue | Severity | Detail |
|-------|----------|--------|
| `update_dns.sh` in web repo | High | DNS management scripts commonly embed API credentials (Cloudflare API key, etc.). Must be audited immediately. |
| `js/` directory not fully audited | Medium | Could contain hardcoded affiliate network API keys or form handling credentials |
| Duplicate disclosure pages | Low | FTC risk if `disclosure.html` and `affiliate-disclosure.html` have different content |
| Privacy policy accuracy | Low | Must reflect actual data collection practices; if analytics is added later, update privacy policy first |
| No CSP | Medium | External font/script loads without CSP header |

### Critical Security Audit Required

**`update_dns.sh` must be inspected for credentials immediately.** DNS management scripts frequently contain API keys for Cloudflare, Route53, or similar providers. If the repo is public and credentials are present, this is a Critical severity finding.

Run: `grep -i "api\|key\|token\|secret\|password\|auth" /c/Users/migar/DEV/coves7.com/update_dns.sh`

### Secrets Audit

- HTML files: no secrets found.
- `update_dns.sh`: **NOT YET AUDITED** — treat as High severity until confirmed clean.
- `js/` directory: not fully inspected.

## Security Baseline

1. **Audit `update_dns.sh` now** — extract to DNTUIT5 if clean; delete if credentials are present.
2. **Audit `js/` directory** for hardcoded keys.
3. **Confirm HTTPS enforcement** in GitHub Pages.
4. **Add CSP header** once JS is inventoried.
5. **Verify privacy policy** covers any analytics/tracking scripts before adding them.
