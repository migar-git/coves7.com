# Technical Debt — coves7.com

**Audit Date:** 2026-03-29

## What's Missing vs. What Should Exist

| Should Exist | Current State | Priority |
|-------------|---------------|----------|
| Affiliate link UTM tracking audit | Not confirmed | Critical |
| Analytics integration | Not confirmed | High |
| Duplicate page consolidation | privacy-policy.html + privacy.html | High |
| Duplicate disclosure consolidation | disclosure.html + affiliate-disclosure.html | High |
| `images/` directory with review screenshots | Absent | High |
| Email capture | Absent | High |
| Schema.org Review markup on articles | Not confirmed | Medium |
| GitHub Actions deploy workflow | Manual push | Medium |
| Review article template | Absent | Medium |
| Product data JSON | Absent | Medium |
| Canonical tags during dedup | Absent | Medium |
| `update_dns.sh` moved out of web repo | Present in wrong repo | Low |

## Gap Between Current State and Production-Ready State

**Current state:** Most developed static site in the portfolio content-wise; closest to earning affiliate revenue. Main gaps are tracking infrastructure and content quality.

**Production-ready affiliate review site requires:**
- Every article has affiliate links with UTM tracking.
- Analytics confirms which articles and links generate clicks/conversions.
- Email capture for retargeting visitors.
- Schema.org Review markup for review snippet eligibility in Google.
- Regular content updates to maintain freshness signals.
- Images/screenshots to improve engagement.

**Estimated gap:** 40% of production readiness — the best score in the portfolio. Primary blocker is affiliate link validation.
