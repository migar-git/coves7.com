# coves7.com Feature Requests

<!-- REGROUND:reground-20260815-python-fleet:BEGIN -->

## Re-Grounding 2026-08-15 — Autonomous Fleet Pass

> **Run:** `reground-20260815-python-fleet` · **Method:** static forensic recon of all 59 git repos under `C:\Users\mcgac\Python`
> (tree + manifests + compose + git metadata + targeted greps via Windows-MCP; **no code executed this pass**).
> **Execution contract:** [`FRSP.md`](FRSP.md) — the resident self-agent system prompt generated alongside this block.

### Verified identity (2026-08-15)

Static affiliate content site (coves7.com, GitHub Pages, 13 pages: ai-tools, trading-platforms, saas-tools, automation-software categories); CSP meta present; NO CI at review time (no workflows dir).

### Evidence snapshot

| Field | Value |
|---|---|
| Class | Static/managed website |
| Branch @ recon | `main` |
| Last commit observed | 2026-07-27 |
| Stack | Static HTML/CSS/JS (IIFE) |
| Ports/services declared | none declared |
| Test posture | None — no workflows (verified 2026-07-03) |
| LLM posture | Build-time content lanes |
| MCP posture | n/a |
| Dashboard posture | arescore registration |

### Prior-content status

The body below this block is the prior audit register (last authored ~2026-07-03/04, 472 lines). It is preserved verbatim per the fleet data-retention law. Every claim in it is now classified **STALE-UNVERIFIED** until re-proven by the FRSP execution loop — the repo has moved (last commit 2026-07-27).

### Universal mandate assessment (fleet standard M-01..M-10)

| ID | Mandate | Status | Evidence / note |
|---|---|---|---|
| M-01 | Repo self-agent | PARTIAL | AGENT.md/CLAUDE.md governance present fleet-wide; FRSP.md (this pass) is now the executable self-agent contract |
| M-02 | Local-LLM capability (via canonical provider) | N-A/CI-LEVEL | LLM used in CI/build lanes only — correct for this repo class; runtime consumption not required |
| M-03 | Local-LLM management reachable | N-A | Managed centrally by olaman; this repo consumes nothing at runtime |
| M-04 | MCP surface | N-A | n/a |
| M-05 | 3-click dashboard access | PARTIAL | arescore registration; 3-click rule unproven — audit required |
| M-06 | Dedup/consolidate/reuse | OPEN | 1 directive(s) — see FRSP.md §5 |
| M-07 | 100% coverage, all green/clean | UNPROVEN | None — no workflows (verified 2026-07-03) — no verified 100% run on record |
| M-08 | Live operational validation | UNVERIFIED | This pass was static (no code executed); runtime proof owed by FRSP execution |
| M-09 | Traceability & auditability | MINIMAL | Observability signals vary; correlation-ID + decision-record standard mandated |
| M-10 | Total data retention | POLICY-SET | Retention law encoded in FRSP.md §12; archive-never-destroy from this date |

### Deduplication / consolidation directives (repo-specific)

- **DD-01:** Site-kit extraction; affiliate overlap with affiliate-agency planning repo — link them

### Re-grounded gap register (adds to, never replaces, the register below)

- **RG-01:** ADD CI (site-kit) — currently zero gates
- **RG-02:** Affiliate-link integrity checker

### Fleet context this repo must honor

- Canonical local-LLM provider: **olaman (Ollama gateway/control plane, port 8030) fronting host Ollama at 127.0.0.1:11434**
- Canonical fleet dashboard/command center: **arescore (ClawMedia command center, app/server.js :8889; Arescore hub seed http://127.0.0.1:8890/)**
- Canonical skills SSOT: **agency (SSOT skill registry, 708-skill capability manifest)**
- Known fleet port collisions (resolve via the arescore port registry): 8030: olaman vs dev-analytics api; 8741: freeai backend vs myskills; 8000: mia, lab, peni, myprd backends (+fira internal); 8028: fira frontend vs midas (full list in FRSP.md §1)

<!-- REGROUND:reground-20260815-python-fleet:END -->


## Review Metadata

- **Review date:** 2026-07-03 (system clock during session showed a rollover to 2026-07-04 mid-session; findings unaffected)
- **Repo root path:** `C:\Users\mcgac\Python\coves7.com` (file tools) / `/sessions/epic-tender-pasteur/mnt/Python/coves7.com/` (bash, not used — file tools were sufficient)
- **Languages/frameworks detected:** Static HTML5, CSS3, vanilla JavaScript (ES6, IIFE pattern). No framework, no build tool, no package manager (no `package.json`, `requirements.txt`, or any manifest found).
- **App type determined:** Static marketing/affiliate content website (13 HTML pages), hosted on GitHub Pages with a custom domain (CNAME = `coves7.com`). Evidence: `AGENT.md` explicitly declares `type: static-site`; no server code, no `package.json`/`requirements.txt`/`Cargo.toml`/`go.mod` found anywhere in the tree; `CNAME` + `.nojekyll` + `robots.txt` + `sitemap.xml` at repo root are classic GitHub Pages static-site artifacts; `docs/ADR/001-initial-architecture.md` documents the explicit decision to use "Static HTML/CSS/JS on GitHub Pages" over Next.js/WordPress/Ghost.
- **Review mode:** Blitz — single-session, sampled evidence.
- **Commands/tools actually run:** No shell commands were executed (bash was available but not required). All evidence gathered via Read, Glob, and Grep against the file tree at the path above. Git history was read via `.git/logs/HEAD`, `.git/config`, and `.git/packed-refs` (direct file reads — bash was not attempted since file tools were sufficient and instructions prioritize them).
- **Tests/CI discovered:** None. No `.github/workflows/` directory exists (confirmed via Glob — zero results for `.github/workflows/**` and `.github/**/*` beyond two known files). No test directories, no test framework, no linter/formatter config. Internal docs (`CHANGELOG.md`, `AGENTS.md`, `audit/org_audit_2026-03-29.md`) reference a "swarm-gate CI" / "AGENTS.md swarm assignments and swarm-gate CI workflow" as having been added, but no corresponding workflow file exists on disk — this is a documented-but-unverified/removed claim, excluded from "existing capabilities."
- **Overall confidence:** High for structural/content findings (direct file inspection of all 13 HTML pages, CSS, JS, and 40+ markdown docs). Medium for a few items marked "Needs confirmation" below, where the repo's own audit trail is suggestive but I could not directly verify a runtime behavior (e.g., live GA4 tracking, DNS script credential content — which I deliberately did not open).

## Existing Capabilities Found

- 13 HTML pages: homepage, 4 category pages (ai-tools, trading-platforms, saas-tools, automation-software), 3 long-form review/comparison articles, about page, and 4 legal/duplicate pages (privacy.html, privacy-policy.html, disclosure.html, affiliate-disclosure.html).
- Content-Security-Policy meta tag present on all sampled pages (`default-src 'self'; script-src 'self' 'unsafe-inline'; ... object-src 'none'; base-uri 'self'`) — added per git history commit "fix(security): add .gitignore and CSP meta tags -- 2026-04-07".
- `.gitignore` present, excludes `.env*`, `*.key`, `*.pem`, `*.p12`, `node_modules/`, build artifacts.
- SEO fundamentals: valid `sitemap.xml` (12 URLs), `robots.txt` with sitemap reference and crawl-delay, per-page `<title>`, meta description, canonical URL tag, Open Graph tags, Twitter Card tags on sampled pages.
- Schema.org structured data: `WebSite` markup on homepage; `Review`/`Product`/`AggregateRating`-type JSON-LD confirmed present on all 3 long-form article pages (best-ai-tools-business-2026.html, notion-vs-monday-vs-clickup.html, top-crypto-trading-bots-compared.html).
- Affiliate-link hygiene on the 6 sampled outbound CTA links in article pages: all use `target="_blank" rel="noopener sponsored"` (missing the `noreferrer` token — see FR list).
- FTC-style affiliate disclosure content present (disclosure.html / affiliate-disclosure.html), privacy policy content present (privacy.html / privacy-policy.html), both duplicated under two URLs each.
- CSS/JS properly externalized into `css/style.css` and `js/main.js` (no inline `<style>`/`<script>` blocks of substance found beyond the JSON-LD and CSP meta).
- `js/main.js` implements: scroll-reveal animations via IntersectionObserver, mobile nav toggle, reading-progress bar, table-of-contents highlighting, lazy-load image observer, copy-to-clipboard helper, `prefers-reduced-motion` handling, and active-nav-link detection — reasonably sophisticated vanilla-JS UX layer for a static site.
- Newsletter signup form markup exists on the homepage, but submission is client-side-only (`setTimeout` fake success, no real endpoint — see FR list).
- Extensive non-functional "agency scaffold" documentation layer (AGENT.md, AGENTS.md, MEMORY.md, PORTFOLIO.md, docs/, audit/, agents/, commands/, prompts/, rules/, skills/, codex.md) describing a multi-agent governance model for a larger fleet this repo belongs to. This scaffold is documentation/config only — it does not change the fact that the shipped product is a static site.
- Git history: 13 commits total, clone from `github.com/migar-git/coves7.com`, all commits by the same account across roughly Feb–Jul 2026, no evidence of force-pushes or history rewriting in the visible log.

## Evidence Ledger

| Evidence ID | Area | Evidence Type | File/Path/Command | Finding | Confidence |
|---|---|---|---|---|---|
| E-001 | App type | Manifest | `AGENT.md` | Declares `type: static-site`, `commands: {test: "", lint: "", format: "", build: "", deploy: ""}` — all empty | High |
| E-002 | Build tooling | Glob | `package.json` search (repo root) | No matches — confirms no Node/JS package manifest | High |
| E-003 | CI | Glob | `.github/workflows/**`, `.github/**/*` | Zero matches beyond `copilot-instructions.md` and `PULL_REQUEST_TEMPLATE.md` — no workflow files exist | High |
| E-004 | CI (docs claim vs. reality) | Doc | `CHANGELOG.md` v1.2.0, `AGENTS.md`, `audit/org_audit_2026-03-29.md` | Docs state "swarm-gate CI" / "AGENTS.md swarm assignments and swarm-gate CI workflow" added, but no workflow file found on disk (see E-003) | High |
| E-005 | Secrets hygiene | Glob | `**/*.pem`, `**/*.key`, `**/credentials*`, `**/secrets*`, `**/*.env*` | Zero matches — no secret-like tracked files by name | High |
| E-006 | DNS script | Glob + internal audit | `update_dns.sh` (repo root); `audit/security_report.md`, `audit/architecture_analysis.md`, `audit/technical_debt.md` | File exists at repo root; repo's own `audit/security_report.md` (dated 2026-03-29) flags it "NOT YET AUDITED — treat as High severity until confirmed clean" for embedded DNS/API credentials. File was NOT opened/read per task rules (secret-value handling) — only existence/path noted. | High (existence) / Needs confirmation (content) |
| E-007 | Tests | Glob | `tests/**`, `.pytest_cache/**` | `tests/**` = 0 matches; a stray empty `.pytest_cache/` directory exists with only its own `.gitignore` and `README.md` (pytest cache artifact, not a real test suite) | High |
| E-008 | CSP | Read | `index.html` line 5, `about.html` line 5 | `<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'; ...">` present | High |
| E-009 | Duplicate pages | Grep + Read | `disclosure.html` vs `affiliate-disclosure.html`; `privacy.html` vs `privacy-policy.html` | Distinct `<title>` text confirmed on each (e.g., "Affiliate Disclosure & FTC Compliance \| Coves7" vs "Affiliate Disclosure \| Coves7"); neither pair cross-references the other via canonical tag (0 matches for "canonical" in affiliate-disclosure.html or privacy-policy.html) | High |
| E-010 | Analytics | Grep | `analytics\|gtag\|google-analytics\|GA_MEASUREMENT\|googletagmanager` across all `*.html` | Only match is the literal word "analytics" inside body copy of `saas-tools.html` (a review of "product analytics platforms" as a category, not a tracking script) — no gtag.js, GTM snippet, or measurement ID found anywhere | High |
| E-011 | Analytics vs. privacy-policy claim | Read | `privacy-policy.html` line 63 | Privacy policy text states "Google Analytics helps us understand website traffic..." while no GA script exists anywhere in the codebase (cross-ref E-010) — policy describes tracking that is not implemented | High |
| E-012 | Affiliate link rel attributes | Grep | `rel="noopener` count across `*.html` | 7 occurrences across 4 files; sampled links use `rel="noopener sponsored"` (missing `noreferrer` token) per `docs/SECURITY.md` §"Affiliate Link Security" own stated standard of `rel="noopener noreferrer sponsored"` | High |
| E-013 | UTM/tracking params on affiliate links | Grep | `href="https://chat.openai.com"`, `href="https://claude.ai"`, `href="https://gemini.google.com"`, `href="https://3commas.io"`, `href="https://www.cryptohopper.com"`, `href="https://clickup.com"` | All outbound CTA URLs are bare vendor root domains with zero query string / UTM / affiliate-ID parameters | High |
| E-014 | Images | Grep + Glob | `<img` tag search across all `*.html`; `images/**` glob | Zero `<img>` tags found in any HTML file; `images/**` glob returns no results — site uses emoji glyphs (🤖📈⚙️) as visual placeholders instead of real images/screenshots | High |
| E-015 | Social preview images | Grep | `og:image\|twitter:image` across all `*.html` | Zero matches — OG/Twitter Card tags exist (title, description, card type) but no image variant is set, so social shares will render without a preview image | High |
| E-016 | Newsletter form | Read | `js/main.js` lines 131–162 | Form submit handler validates email client-side, then fakes success via `setTimeout` with no `fetch`/`XMLHttpRequest` call to any backend or ESP (Mailchimp/ConvertKit/etc.) — emails are not actually captured or stored anywhere | High |
| E-017 | Structured data on articles | Grep | `"@type":\s*"Review"\|"@type":\s*"Product"\|AggregateRating` | Found in all 3 article pages — contradicts internal `audit/technical_debt.md` which lists this as "Not confirmed"; verified present, so NOT included as a gap | High |
| E-018 | Dependabot / dependency automation | Glob | `.github/dependabot.yml` | No matches — despite `CHANGELOG.md` v1.2.0 claiming "Dependabot config" was added | High |
| E-019 | Git history | Read | `.git/logs/HEAD` | 13 reflog entries total; single contributor account (email `mcgaccounts@outlook.com`, display names `migar`/`migar-git`/`Michael Gargano`); last content-relevant commit "chore(agency): commit agency_sync CLAUDE.md drift" and "docs(uplift): 2026-07 standards review" — most recent commits are doc/governance-only, not product changes | High |
| E-020 | Sitemap coverage | Read | `sitemap.xml` | Lists 12 of the 13 tracked HTML pages (all except itself); dates all hardcoded to `2026-02-14` regardless of actual last edit | Medium (staleness inferred, not independently timestamp-verified per file) |
| E-021 | robots.txt disallow rules | Read | `robots.txt` | `Disallow: /admin/` and `Disallow: /private/` — neither directory exists in the repo; harmless but suggests boilerplate copy-paste rather than tailored config | Medium |
| E-022 | UPLIFT.md self-assessment | Read | `UPLIFT.md` | Repo's own most recent governance doc (dated 2026-07-03) explicitly classifies this repo as "PARK (keep as-is)... Do-NOT: no feature work, no new deps, no CI beyond a smoke check" | High (as a documented intent — not used as a substitute for code verification, per task rules) |
| E-023 | Lighthouse/a11y/link-check automation | Glob + Grep | `docs/TEST_STRATEGY.md`; no corresponding CI/script files | Test strategy doc prescribes Lighthouse, axe DevTools, linkinator, Playwright visual regression — none of these are wired into any script, package.json, or CI workflow (none exist) | High |
| E-024 | HTML lang/viewport | Grep | `viewport\|lang="en"` in `ai-tools.html` | `<html lang="en">` and responsive viewport meta present — baseline a11y/SEO hygiene met | High |

## Threat Model Summary

STRIDE-brief, scoped to what this repo actually is (a static content site with no auth, no backend, no database):

- **Spoofing:** Minimal surface — no login, no session, no identity to spoof. Residual risk is limited to DNS/domain takeover if `update_dns.sh` (E-006) contains live registrar/DNS-provider credentials that could be used to redirect `coves7.com` to an attacker-controlled host; this has never been confirmed clean per the repo's own 2026-03-29 audit.
- **Tampering:** Content integrity depends entirely on GitHub account security (single contributor, no branch protection artifacts found) and GitHub Pages build fidelity. No Subresource Integrity (SRI) is used for the Google Fonts CSS load permitted by the CSP, so a compromised font CDN response could inject content, though CSP's `style-src` restricts more general script tampering somewhat.
- **Repudiation:** Git history provides a reasonable append-only audit trail (13 commits, consistent author identity) but there is no signed-commit requirement, no CODEOWNERS, and no PR-based review gate observed in the actual git log (direct pushes to main).
- **Information Disclosure:** Low risk — no secrets found in tracked files (E-005). The one open question is `update_dns.sh` (E-006), which the repo's own audit flags as unverified for embedded API keys; if credentials are present, this becomes the single highest-severity issue in the repo. Privacy-policy text also over-discloses (claims GA tracking that doesn't exist — E-011), which is a compliance/trust issue rather than a technical leak.
- **Denial of Service:** Very low — GitHub Pages is a CDN-backed static host; the site has no expensive endpoints, no database, no rate-limitable API surface to exhaust.
- **Elevation of Privilege:** Not applicable in the traditional sense (no auth/roles), but the "agency scaffold" docs (AGENT.md, AGENTS.md) describe an intended multi-agent authority model (`max_auto_level: 1`, human-required gates for `deploy_to_production`/`merge_to_main`/`secret_rotation`) that is aspirational governance text, not an enforced technical control — nothing in the repo (no CI gate, no branch protection file, no pre-commit hook) actually enforces those constraints today.

## AI Governance Summary

Not applicable — no AI/LLM features found in this repo. (The repo's extensive `agents/`, `prompts/`, `rules/`, `skills/`, `codex.md`, and `AGENT.md`/`AGENTS.md` files describe how *external AI coding agents* should behave when modifying this repo — i.e., they are meta-governance for the development process, not an AI/LLM feature shipped to end users of coves7.com. The live site itself contains no AI/LLM API calls, prompt templates, model routing, or inference code of any kind.)

## Competitive Benchmark Matrix

This repo is a static affiliate-content website, not a developer tool, agent platform, or observability product — so the requested developer-tooling comparators (GitHub Copilot coding agent, Claude Code, Cursor, LangGraph/LangSmith, Langfuse, Sentry, Datadog, Backstage, Temporal) are not meaningfully applicable to its product surface. Comparing instead against typical affiliate/content-site best-practice baselines (Wirecutter/NerdWallet-style review sites), which is the honest comparison class for this repo:

| Capability | Industry baseline (affiliate/review sites) | coves7.com status | Evidence |
|---|---|---|---|
| Affiliate link tracking (UTM/sub-IDs) | Standard — every outbound link carries a trackable identifier | Missing — bare vendor URLs, no parameters | E-013 |
| Analytics / conversion tracking | Standard — GA4 or equivalent wired to measure clicks | Missing — no script present despite policy claiming otherwise | E-010, E-011 |
| Email capture / retargeting list | Standard — newsletter or lead magnet feeding a real ESP | Present as UI only — no backend wiring | E-016 |
| Review schema markup (Review/Product/AggregateRating) | Common on top-performing review sites for rich snippets | Present on all 3 article pages | E-017 |
| Social share preview images (OG/Twitter image) | Standard | Missing | E-015 |
| Product/review imagery (screenshots, logos) | Standard — improves CTR and trust | Absent — emoji placeholders only | E-014 |
| CI-gated deploy / automated QA (Lighthouse, link-check) | Common for content sites at this maturity | Prescribed in docs, not implemented | E-003, E-023 |
| Canonical handling for duplicate content | Standard practice | Missing for 2 duplicate page pairs | E-009 |
| CSP / basic security headers | Increasingly common | Present | E-008 |

## Gap Analysis Summary

coves7.com is a well-structured, content-forward static affiliate site with solid SEO fundamentals (sitemap, robots.txt, per-page meta, Schema.org Review markup, CSP) but it is not yet monetization-ready by its own stated business model. The single most consequential gap is that none of the site's outbound "affiliate" links actually carry tracking or affiliate identifiers — meaning the site currently cannot earn commissions even though its entire PRD and value proposition (per `docs/PRD.md`) is affiliate revenue. Closely related, the privacy policy affirmatively claims Google Analytics is in use while no analytics script exists anywhere in the codebase, which is both a false statement of fact to visitors and a signal that conversion data (which links/articles work) is currently unmeasurable. Structural SEO debt (duplicate privacy/disclosure page pairs with no canonical cross-reference) risks diluting search equity. Operational maturity is low but proportionate to a static site: there is no CI/CD pipeline despite docs describing one, no automated link-checking or Lighthouse gating despite a written test strategy prescribing both, and a long-unaudited `update_dns.sh` script represents the one plausible secret-exposure risk that has sat unresolved since a 2026-03-29 internal audit flagged it. None of these gaps require architectural change — this is a content/completeness and automation backlog, not a re-platforming need, and the repo's own July 2026 governance note (`UPLIFT.md`) explicitly classifies it as a dormant "PARK" needing no new feature work — a framing this review's FR list respects by keeping scope to verifiable, low-risk, monetization- and integrity-focused items rather than proposing new architecture.

## Feature Requests

### FR-001

- **Description:** Add trackable affiliate identifiers (UTM parameters and/or affiliate network sub-IDs) to all outbound CTA links across the three review article pages (best-ai-tools-business-2026.html, notion-vs-monday-vs-clickup.html, top-crypto-trading-bots-compared.html). Currently all 6 sampled CTA links point to bare vendor root domains (e.g., `https://chat.openai.com`, `https://claude.ai`, `https://3commas.io`) with zero query parameters.
- **Why It Matters:** The site's entire business model per its own PRD is affiliate commission revenue (`docs/PRD.md` FR-007: "Affiliate CTAs MUST use tracking links... to enable commission attribution"). Without tracking parameters, clicks cannot be attributed to this site by any affiliate network, meaning zero commission is currently possible regardless of traffic volume.
- **Verification Evidence:** Grepped `href="..."` across all article pages and manually inspected the resulting URLs; all 6 outbound product links (ChatGPT, Claude, Gemini, ClickUp, 3Commas, Cryptohopper) are bare domains with no `?utm_`, `?ref=`, `?aff=`, or similar parameter.
- **Evidence IDs:** E-013
- **Priority:** P0
- **Category:** Monetization / Revenue Infrastructure
- **ROI Score:** 9/10 — this is the single highest-leverage fix possible; it directly unblocks the site's only revenue mechanism with no architectural change (revenue/adoption weighted 25%, this scores maximally; near-zero opex cost).
- **Risk Score:** 2/10 — pure content edit to static `<a href>` values, no code logic, no migration, trivially revertible via git.
- **Dependencies:** Requires enrollment/approval in the relevant affiliate programs (OpenAI, Anthropic, Google, ClickUp, 3Commas, Cryptohopper) to obtain valid affiliate IDs — this is a business/legal dependency outside repo scope, not a technical blocker.
- **Competitive Reference:** Standard practice on every commercial affiliate review site (Wirecutter, NerdWallet, etc.) — see Competitive Benchmark Matrix.
- **Security/Privacy Impact:** None — affiliate IDs are public-facing identifiers, not secrets, per the repo's own `docs/DEPLOYMENT.md` ("Affiliate tracking parameters are embedded in link URLs (not secret)").
- **Rollout Readiness:** High — can ship same-day once affiliate IDs are obtained.
- **Validation Gates:**
  - Confirm each affiliate program's ToS-compliant link format before embedding.
  - Spot-check that tracking parameters survive redirects (test click-through end to end).
  - Verify `rel="sponsored"` remains present (already true) so Google treats these as paid links correctly.
- **Acceptance Criteria:**
  - 100% of outbound product CTA links in article/category pages contain a non-empty tracking parameter.
  - A manual click-through on each link resolves to the vendor's site (no 404/broken redirect).
  - `docs/PRD.md` FR-007 can be marked satisfied with a link to this change's commit.

### FR-002

- **Description:** Either remove the Google Analytics claim from `privacy-policy.html` (line 63) or implement actual GA4 (or equivalent) tracking to match what the privacy policy tells visitors is happening.
- **Why It Matters:** The current privacy policy is factually inaccurate — it tells visitors "Google Analytics helps us understand website traffic and user behavior" while no analytics script exists anywhere in the codebase. This is a legal/compliance misstatement (privacy policies must accurately reflect actual data practices, a requirement the repo's own `docs/SECURITY.md` states: "Privacy policy must accurately describe analytics and tracking in use") and it also means the operator currently has zero visibility into which content or affiliate links perform.
- **Verification Evidence:** Grepped `analytics|gtag|google-analytics|GA_MEASUREMENT|googletagmanager` across every HTML file; the only hit is the word "analytics" appearing in unrelated body copy about analytics-category SaaS tools, not a tracking script. Cross-referenced against the explicit GA claim in `privacy-policy.html` line 63.
- **Evidence IDs:** E-010, E-011
- **Priority:** P0
- **Category:** Compliance / Analytics Infrastructure
- **ROI Score:** 8/10 — analytics is the prerequisite for every future content/monetization decision (which articles convert, which links get clicked); also closes a compliance gap (risk 20% weight, trust/UX 15% weight both favor this highly).
- **Risk Score:** 3/10 — adding a GA4 snippet requires a corresponding CSP `script-src`/`connect-src` allowlist update (the current CSP is `script-src 'self' 'unsafe-inline'` with no Google domains permitted), so it must be done carefully to avoid CSP breakage; low blast radius since it's additive.
- **Dependencies:** Requires updating the CSP meta tag on every page to allow `https://www.googletagmanager.com` / `https://www.google-analytics.com` in `script-src` and `connect-src` (the repo's own `docs/SECURITY.md` already documents the target CSP string for this scenario).
- **Competitive Reference:** Baseline expectation for any monetized content site — see Competitive Benchmark Matrix.
- **Security/Privacy Impact:** Adding real GA4 tracking introduces third-party data collection that must be disclosed (already is, prematurely) and should be reflected in a cookie-consent mechanism if serving EU/UK visitors (see FR-011). Alternatively, removing the false claim has zero security/privacy impact and is the lower-risk near-term fix.
- **Rollout Readiness:** High for the "remove false claim" path; Medium for the "implement real GA4" path (needs CSP update + consent consideration).
- **Validation Gates:**
  - If implementing GA4: verify CSP allows the exact GA4 domains and no console CSP-violation errors appear.
  - If implementing GA4: confirm a consent mechanism exists before firing tracking for EU-region visitors (see FR-011).
  - Either path: re-read the full privacy policy after the change to confirm no other stated-but-unimplemented practices remain.
- **Acceptance Criteria:**
  - Privacy policy text matches actual implementation with zero discrepancies.
  - If GA4 added: a live pageview appears in GA4 real-time reports within 5 minutes of deploy.
  - No CSP violation errors appear in browser console on any of the 13 pages post-change.

### FR-003

- **Description:** Consolidate or properly canonicalize the two duplicate page pairs: `privacy.html` + `privacy-policy.html`, and `disclosure.html` + `affiliate-disclosure.html`. Each pair currently has distinct `<title>` tags and neither page in either pair references the other via a `rel="canonical"` link.
- **Why It Matters:** Duplicate content without canonicalization splits search-engine ranking signals between two URLs for the same topic, which the repo's own `audit/architecture_analysis.md` and `audit/technical_debt.md` both independently flagged as a High-priority SEO risk in 2026-03-29 and which remains unresolved as of this review.
- **Verification Evidence:** Read both pages in each pair; confirmed distinct titles ("Affiliate Disclosure & FTC Compliance | Coves7" vs "Affiliate Disclosure | Coves7"; "Privacy Policy | Coves7" appears on both privacy pages but content/structure differs per file). Grepped for "canonical" in `affiliate-disclosure.html` and `privacy-policy.html` — zero matches in either, confirming no cross-referencing.
- **Evidence IDs:** E-009
- **Priority:** P1
- **Category:** SEO / Content Architecture
- **ROI Score:** 6/10 — meaningful SEO hygiene improvement, moderate effort, no direct revenue but protects existing organic-traffic potential (differentiation/trust weighted moderately).
- **Risk Score:** 3/10 — need to verify all internal links point to the surviving canonical URL and add 301-equivalent redirects (GitHub Pages static hosting has no native redirect support, so this requires either a meta-refresh, JS redirect, or `_redirects`/CNAME-level solution).
- **Dependencies:** GitHub Pages does not support server-side redirects natively; a client-side or meta-refresh solution would need to be chosen, or the two files consolidated with one becoming an actual redirect stub.
- **Competitive Reference:** Standard SEO hygiene practice (rel=canonical or single-URL consolidation).
- **Security/Privacy Impact:** None.
- **Rollout Readiness:** Medium — requires deciding which URL is canonical and updating all internal footer/nav links site-wide to match (footer in `index.html` already links to `disclosure.html` and `privacy.html`, suggesting those may already be the intended canonical set).
- **Validation Gates:**
  - Confirm which URL variant is linked from site navigation/footer today (already observed: `index.html` footer links to `disclosure.html` and `privacy.html`, not the `affiliate-` / `-policy` variants).
  - Verify sitemap.xml is updated to remove the non-canonical URL or mark it appropriately.
  - Check Google Search Console (if available) for any existing indexation of the duplicate URLs before removing them.
- **Acceptance Criteria:**
  - Only one URL per topic (privacy, disclosure) is present in `sitemap.xml`.
  - The non-canonical URL either 301-redirects (via chosen mechanism) or contains a `rel="canonical"` pointing to the surviving page.
  - All internal links (nav, footer, cross-page references) point consistently to the canonical URL.

### FR-004

- **Description:** Add `rel="noreferrer"` to the existing `rel="noopener sponsored"` attribute on all outbound affiliate CTA links, matching the repo's own documented security standard.
- **Why It Matters:** The repo's own `docs/SECURITY.md` explicitly states the required pattern is `rel="noopener noreferrer sponsored"` ("Do not use `target="_blank"` without `rel="noopener noreferrer"` (prevents tab-napping)"), but the actual shipped links use only `rel="noopener sponsored"` — missing the `noreferrer` token that prevents the referrer header (and reverse-tabnabbing vector) from leaking to the destination site.
- **Verification Evidence:** Grepped `rel="noopener` across all HTML files (7 matches across 4 files) and inspected each match; all article-page CTA links show `rel="noopener sponsored"` with no `noreferrer` token present.
- **Evidence IDs:** E-012
- **Priority:** P2
- **Category:** Security Hardening
- **ROI Score:** 3/10 — low visibility improvement, but closes a self-documented gap at near-zero cost.
- **Risk Score:** 1/10 — trivial attribute addition to existing anchor tags, no behavior change to page rendering.
- **Dependencies:** None.
- **Competitive Reference:** OWASP guidance on reverse tabnabbing; matches this repo's own stated `docs/SECURITY.md` standard.
- **Security/Privacy Impact:** Positive — reduces referrer leakage to third-party affiliate destinations and closes a (low-severity) reverse-tabnabbing vector, though modern browsers largely mitigate this by default with `noopener` alone.
- **Rollout Readiness:** High.
- **Validation Gates:**
  - Grep-confirm zero remaining `target="_blank"` anchors lacking `noreferrer` after the change.
  - Manually click one affiliate link post-change to confirm destination still loads correctly (no functional regression).
  - Cross-check `docs/SECURITY.md` is either already correct (it is) or updated if the standard changes.
- **Acceptance Criteria:**
  - Every `target="_blank"` anchor site-wide includes both `noopener` and `noreferrer` in its `rel` attribute.
  - Zero functional regressions in outbound link behavior.
  - `docs/CONTRIBUTING.md` PR checklist item ("Confirm all affiliate links use correct tracking parameters and `rel="noopener noreferrer sponsored"`") becomes truthfully satisfiable.

### FR-005

- **Description:** Add `og:image` and `twitter:image` meta tags (pointing to a real image asset) to all pages that currently have Open Graph/Twitter Card tags but no image variant.
- **Why It Matters:** Social shares (Twitter/X, LinkedIn, Facebook, Slack unfurls) of any coves7.com page currently render with no preview image, which measurably reduces click-through rate on shared links — a meaningful gap for a site whose growth model depends on organic reach and shares.
- **Verification Evidence:** Grepped `og:image|twitter:image` across every HTML file — zero matches anywhere in the codebase, despite `og:title`, `og:description`, `og:type`, `og:url`, `twitter:card`, `twitter:title`, `twitter:description` all being present on the homepage.
- **Evidence IDs:** E-015
- **Priority:** P1
- **Category:** SEO / Social Growth
- **ROI Score:** 5/10 — meaningful but incremental improvement to organic/social reach; not blocking revenue directly.
- **Risk Score:** 2/10 — additive meta tag change; only complexity is that it depends on FR-006 (need actual images to reference) or a generated placeholder/OG-card image.
- **Dependencies:** FR-006 (no images directory currently exists) — a dedicated social-card image (1200x630px minimum) should be created before this can be fully completed; a generic branded placeholder could unblock this independently in the interim.
- **Competitive Reference:** Standard practice on all commercial content sites.
- **Security/Privacy Impact:** None.
- **Rollout Readiness:** Medium (blocked on having an actual image asset).
- **Validation Gates:**
  - Validate rendering with Facebook Sharing Debugger and Twitter Card Validator (or equivalent) after adding.
  - Confirm image dimensions meet platform minimums (1200x630 recommended for OG).
  - Confirm image loads over HTTPS from the `coves7.com` domain (CSP `img-src` already permits `'self' data: https:'`, so no CSP change needed).
- **Acceptance Criteria:**
  - Every page's `<head>` includes a valid, resolvable `og:image` and `twitter:image` URL.
  - Social debugger tools render a preview image for at least the homepage and all 3 article pages.
  - No CSP violations introduced.

### FR-006

- **Description:** Create an `images/` directory and add real product screenshots/logos to the review article and category pages, replacing the current emoji-glyph placeholders (🤖📈⚙️) used throughout.
- **Why It Matters:** The repo's own internal audits (`audit/architecture_analysis.md`, `audit/technical_debt.md`) both independently flag the total absence of real imagery as a High-priority gap that reduces reader trust and click-through rate — reviews without visual evidence of the product being reviewed read as less credible and perform worse in both SEO (image search traffic) and conversion.
- **Verification Evidence:** Grepped for `<img` tags across every HTML file (zero matches) and globbed for `images/**` (zero matches) — independently confirms both the internal audit's claim and current state.
- **Evidence IDs:** E-014
- **Priority:** P1
- **Category:** Content Quality / Conversion
- **ROI Score:** 6/10 — direct impact on trust/UX (15% weight) and differentiation (10% weight) for a review site whose entire value prop is "we tested this ourselves."
- **Risk Score:** 2/10 — purely additive content change; only risk is page-weight/performance regression if images aren't optimized (mitigate via WebP/lazy-load, and `js/main.js` already has a lazy-load IntersectionObserver ready to consume `data-src` attributes).
- **Dependencies:** None technical; requires sourcing/creating legitimate screenshots (must not infringe vendor trademarks/copyright without fair-use basis, which is a content/legal consideration, not a code one).
- **Competitive Reference:** Universal practice among performing review sites (Wirecutter, PCMag, etc.).
- **Security/Privacy Impact:** None, provided images are self-hosted (CSP already permits `img-src 'self' data: https:'`).
- **Rollout Readiness:** Medium — needs actual image assets sourced/created first.
- **Validation Gates:**
  - Confirm image licensing/fair-use basis for any vendor screenshots used.
  - Verify images use the existing lazy-load pattern (`data-src` + `js/main.js` IntersectionObserver) to avoid Lighthouse performance regression.
  - Re-run a Lighthouse performance check to confirm score doesn't drop below the 90 threshold documented in `docs/TEST_STRATEGY.md`.
- **Acceptance Criteria:**
  - At least the 3 long-form article pages and 4 category pages include real product imagery (screenshots or official logos).
  - Lighthouse Performance score remains ≥90 per the repo's own documented threshold.
  - No broken image links (404s) after deployment.

### FR-007

- **Description:** Wire the homepage newsletter signup form (`js/main.js` lines 131-162) to an actual email service provider (ESP) endpoint instead of the current client-side-only fake success simulation.
- **Why It Matters:** The form currently validates the email format, shows a fake "✓ Subscribed!" message via `setTimeout`, and discards the input — no email is captured, stored, or sent anywhere. The repo's own `docs/PRD.md` (FR-010) states "Email capture MUST be present... to build owned audience," and internal audits (`audit/technical_debt.md`, `audit/review_overview.md`) both flag "No email capture" as a High-priority gap. The current form is worse than having no form at all, because it actively misleads visitors into believing they successfully subscribed.
- **Verification Evidence:** Read `js/main.js` newsletter handler in full — confirmed the submit handler only calls `setTimeout` twice (to fake a loading state and then a success state) with no `fetch()`, `XMLHttpRequest`, form action URL, or any network call whatsoever.
- **Evidence IDs:** E-016
- **Priority:** P0
- **Category:** Growth / Lead Capture
- **ROI Score:** 7/10 — owned-audience building is a stated strategic goal (`docs/PRD.md`) and currently silently non-functional; fixing it is moderate effort for meaningful compounding value (revenue/adoption 25% weight).
- **Risk Score:** 3/10 — requires selecting and integrating a third-party ESP (Mailchimp, ConvertKit, Buttondown, etc.), which also requires a CSP `connect-src`/`form-action` allowlist update for that provider's API domain.
- **Dependencies:** Requires signing up for an ESP account (business decision, outside repo scope) and updating the CSP to permit the chosen provider's domain.
- **Competitive Reference:** Universal practice on monetized content sites; explicitly required by this repo's own PRD.
- **Security/Privacy Impact:** Introduces a new third-party data flow (visitor email addresses to an ESP) that must be reflected in the privacy policy (which already generically mentions "Newsletter Services" per `privacy-policy.html` line 64, so minimal additional disclosure needed) and should include a clear unsubscribe mechanism per CAN-SPAM/GDPR.
- **Rollout Readiness:** Medium — needs ESP account provisioning before code changes can be completed.
- **Validation Gates:**
  - Confirm chosen ESP's API/embed approach is compatible with a static site (no server-side code) — e.g., ESP-hosted form action or client-side SDK.
  - Update CSP `connect-src`/`form-action` to allow only the specific ESP domain needed.
  - Test end-to-end: submit a real email, confirm it appears in the ESP's subscriber list, confirm double opt-in/confirmation email arrives if applicable.
- **Acceptance Criteria:**
  - Submitting the newsletter form results in a real subscriber record in the connected ESP.
  - Error states (invalid email, network failure) are handled and communicated to the user (not just the happy path).
  - Privacy policy accurately reflects the ESP now in use.

### FR-008

- **Description:** Resolve or formally document the status of `update_dns.sh` at the repo root — either confirm (and document) that it contains no live credentials, or remove/relocate it to a dedicated ops/secrets-management location outside a public-facing web repo.
- **Why It Matters:** This repo's own internal security audit (`audit/security_report.md`, dated 2026-03-29) explicitly flagged this file as "NOT YET AUDITED — treat as High severity until confirmed clean," noting that "DNS management scripts frequently contain API keys for Cloudflare, Route53, or similar providers. If the repo is public and credentials are present, this is a Critical severity finding." As of this review (roughly 3 months later), the file still exists at the repo root and no follow-up resolution documentation was found anywhere in the repo (no note in CHANGELOG.md, security_report.md, or elsewhere indicating it was audited and cleared).
- **Verification Evidence:** Confirmed via Glob that `update_dns.sh` still exists at repo root. Per task rules, the file's contents were deliberately NOT read/printed — only its existence and path are cited as evidence. This FR's own verification step (auditing the file) is exactly the unresolved action item, which is why it remains a gap rather than a confirmed-clean finding.
- **Evidence IDs:** E-006
- **Priority:** P0
- **Category:** Security / Secret Hygiene
- **ROI Score:** 4/10 — this is a risk-mitigation item, not a growth item, so it scores lower on revenue/adoption but the risk weighting (20%) and the fact this repo's remote is a public GitHub repository (`github.com/migar-git/coves7.com`, required for free GitHub Pages) make the downside asymmetric.
- **Risk Score:** 8/10 — if this script does contain live DNS/registrar API credentials in a public repository, this is a Critical-severity exposure (domain hijack potential); the risk score is high specifically because the uncertainty itself is the problem — security/privacy weighted 25% dominates this score.
- **Dependencies:** None technical — this is purely an audit-and-remediate task requiring a human (or a sandboxed agent with explicit secret-scanning tooling) to inspect the file safely and either confirm it's parameter-only (e.g., calls a CLI tool that reads credentials from an already-gitignored `.env`) or rotate any exposed credentials immediately if found.
- **Competitive Reference:** NIST SSDF SP 800-218 (PO.5.1 — secure the components of software) and standard secret-scanning practice (e.g., gitleaks/detect-secrets, neither of which is present in this repo per the grep sweep for those tool names, which returned no results).
- **Security/Privacy Impact:** Potentially severe if credentials are present — could permit unauthorized DNS record changes for `coves7.com`, enabling domain hijacking, phishing redirection, or email interception (per `docs/DEPLOYMENT.md`, email is configured via Office 365 for `hello@coves7.com`, so DNS compromise could also expose email infrastructure).
- **Rollout Readiness:** Low — cannot be resolved via a simple code change; requires a manual, careful audit step first.
- **Validation Gates:**
  - Perform a manual, human-supervised review of the script's contents in a secure context (not via an automated agent that might echo secrets into logs).
  - If credentials are found, rotate them immediately with the DNS/registrar provider before removing the file from history.
  - If the repo history (not just the working tree) contains the credentials in an old commit, use a history-rewriting tool (git filter-repo / BFG) to purge them, understanding this rewrites the public repo's history.
- **Acceptance Criteria:**
  - `update_dns.sh` is confirmed either (a) credential-free and appropriately relocated/documented, or (b) removed from the working tree and history with any exposed credentials rotated.
  - A dated entry is added to `audit/security_report.md` or `CHANGELOG.md` documenting the resolution, closing the loop the 2026-03-29 audit opened.
  - A secret-scanning tool (e.g., gitleaks) is added to a pre-commit hook or CI check to prevent recurrence (ties to FR-010).

### FR-009

- **Description:** Add a minimal CI workflow (e.g., GitHub Actions) that runs on push/PR to at least validate HTML structure and check for broken internal links, replacing the currently fully manual `git push origin main` deploy process.
- **Why It Matters:** Multiple internal docs (`docs/TEST_STRATEGY.md`, `audit/agent_readiness.md`, `audit/copilot_optimization.md`) describe an intended Lighthouse/link-check/accessibility test regimen, and `CHANGELOG.md` even claims a "swarm-gate CI workflow" was added in v1.2.0 — but no `.github/workflows/` directory or any CI configuration exists anywhere in the repo today. Every deploy is currently an unchecked direct push to `main`, meaning a broken HTML tag or a typo'd affiliate link ships straight to production with no automated safety net.
- **Verification Evidence:** Globbed `.github/workflows/**` and `.github/**/*` — found only `copilot-instructions.md` and `PULL_REQUEST_TEMPLATE.md`, zero workflow YAML files. This directly contradicts the CHANGELOG.md claim of a "swarm-gate CI workflow," which either was never actually merged, was later removed, or was added to a different repo than this one.
- **Evidence IDs:** E-003, E-004, E-023
- **Priority:** P1
- **Category:** DevOps / Release Safety
- **ROI Score:** 4/10 — velocity (15% weight) and opex (10% weight) benefit from catching errors pre-deploy, but for a low-frequency-update static site the absolute value is moderate, not transformative.
- **Risk Score:** 3/10 — adding CI is additive and low-blast-radius; the only complexity is choosing a minimal, low-maintenance workflow appropriate for a "PARK" repo per its own `UPLIFT.md` guidance (which explicitly says "no CI beyond a smoke check").
- **Dependencies:** None — GitHub Actions is free for public repos and requires no new infrastructure.
- **Competitive Reference:** DORA's five key metrics (deployment frequency, lead time, change failure rate, time to restore, reliability) all benefit from even minimal automated validation; this repo currently cannot measure change-failure-rate at all since there is no automated gate to fail against.
- **Security/Privacy Impact:** None directly, though a CI step is also the natural place to add secret-scanning (ties to FR-010) and dependency-freshness checks.
- **Rollout Readiness:** High — a basic HTML-lint + link-check workflow can be added in under an hour using off-the-shelf GitHub Actions.
- **Validation Gates:**
  - Confirm the workflow triggers correctly on a test PR before relying on it.
  - Verify the workflow does not block/slow the existing "push to main = auto-deploy" GitHub Pages flow in a way that violates the repo's own `UPLIFT.md` "PARK" guidance (keep it to a smoke check, not a heavyweight gate).
  - Confirm workflow failure states are visible (GitHub PR check status) so they're actually actionable.
- **Acceptance Criteria:**
  - A `.github/workflows/*.yml` file exists and runs successfully on the next push.
  - The workflow catches at least one class of real error (e.g., a deliberately broken `<a href>` in a test branch) before merge.
  - `CHANGELOG.md`'s existing (currently false) CI claim becomes true, or is corrected to remove the inaccurate claim.

### FR-010

- **Description:** Add a secret-scanning tool (e.g., gitleaks or detect-secrets) as a pre-commit hook or lightweight CI step to catch any future accidental credential commits, given this repo has at least one file (`update_dns.sh`, FR-008) whose credential-safety has never been confirmed.
- **Why It Matters:** The repo currently has zero automated secret-detection despite `docs/SECURITY.md` and `.gitignore` both showing security awareness in principle (`.env*`, `*.key`, `*.pem` are gitignored). Gitignoring prevents *new* accidental commits of known-pattern files but does nothing to catch secrets embedded inside otherwise-legitimate files like shell scripts (exactly the `update_dns.sh` scenario) or inline in HTML/JS.
- **Verification Evidence:** Grepped for `gitleaks|detect-secrets` across the entire repo tree — zero matches, confirming no such tooling is configured anywhere.
- **Evidence IDs:** E-006 (the motivating risk), plus the negative-result grep for gitleaks/detect-secrets (not separately ledgered as it's a zero-match confirmation of absence, consistent with the "Threat Model" and FR-008 context)
- **Priority:** P1
- **Category:** Security Tooling
- **ROI Score:** 3/10 — preventative/hygiene value, not growth-facing, but very cheap to add (opex 10% weight favors low-cost preventative tooling).
- **Risk Score:** 2/10 — adding a scanning tool is purely additive and has no functional impact on the shipped site.
- **Dependencies:** Best implemented alongside FR-009 (CI workflow) so it runs automatically rather than relying on manual pre-commit hook installation by a single contributor.
- **Competitive Reference:** NIST SSDF SP 800-218 (PW.7 — review and/or analyze code to identify vulnerabilities, including secrets) and SLSA v1.2 provenance-adjacent hygiene practices for supply-chain integrity.
- **Security/Privacy Impact:** Positive — directly reduces the risk of the exact scenario flagged in FR-008 recurring in the future.
- **Rollout Readiness:** High.
- **Validation Gates:**
  - Run the chosen tool once manually against the full git history first to establish whether any historical secrets already exist (informs urgency of FR-008).
  - Confirm the tool's false-positive rate is manageable for a small repo (tune allowlist/config as needed).
  - Verify it runs automatically on every future commit/PR once wired into CI.
- **Acceptance Criteria:**
  - A secret-scanning configuration file exists in the repo (e.g., `.gitleaks.toml` or equivalent).
  - The tool runs automatically in CI (post FR-009) or as a pre-commit hook.
  - A documented one-time historical scan result is recorded (even if "clean") in `audit/security_report.md`.

### FR-011

- **Description:** Add a cookie-consent / privacy-notice banner mechanism if and when real third-party analytics (FR-002) or newsletter ESP tracking (FR-007) is implemented, to support GDPR/CCPA/ePrivacy compliance for EU/UK visitors.
- **Why It Matters:** `privacy.html` explicitly claims GDPR and CCPA compliance coverage, but currently there is no analytics or ESP tracking active at all (see FR-002), so this requirement is presently moot — however, the moment FR-002 or FR-007 is implemented, a consent mechanism becomes legally necessary for EU/UK visitors under GDPR/ePrivacy Directive rules for non-essential cookies/tracking. This FR is included now so it is planned proactively rather than becoming a compliance gap the moment analytics ships.
- **Verification Evidence:** Read `privacy.html` and `privacy-policy.html` in full — both assert GDPR/CCPA coverage; grepped for `cookie-consent|CookieConsent|gdpr-consent|cookiebot|onetrust` style banner implementations across all HTML/JS — zero matches, confirming no consent mechanism exists in code (consistent with there being no tracking to consent to yet).
- **Evidence IDs:** E-010, E-011 (the absence-of-tracking evidence that makes this currently non-urgent but soon-to-be-required)
- **Priority:** P2
- **Category:** Compliance
- **ROI Score:** 3/10 — purely defensive/compliance value, contingent on FR-002/FR-007 shipping first; no standalone revenue impact.
- **Risk Score:** 4/10 — compliance risk (5% weight in risk formula) is real but currently latent since no tracking is active; complexity is low-to-moderate depending on chosen consent-management platform.
- **Dependencies:** Should ship together with or immediately after FR-002 (analytics) and/or FR-007 (newsletter ESP), not before — implementing a consent banner with nothing to consent to is unnecessary UX friction.
- **Competitive Reference:** Standard practice for any EU/UK-facing commercial site once tracking is active.
- **Security/Privacy Impact:** Directly positive for visitor privacy rights and reduces legal exposure once tracking exists.
- **Rollout Readiness:** Low currently (correctly gated behind FR-002/FR-007); High once those ship.
- **Validation Gates:**
  - Confirm which specific tracking technologies are active before configuring consent categories (must match FR-002/FR-007's final implementation).
  - Verify the banner actually blocks non-essential scripts from firing before consent is given (not just a decorative banner).
  - Test the opt-out/reject path to confirm no tracking scripts fire when declined.
- **Acceptance Criteria:**
  - A consent banner appears for new visitors before any non-essential tracking script executes.
  - Declining consent measurably prevents the analytics/ESP script from loading (verifiable via browser network tab).
  - Privacy policy is updated to describe the consent mechanism itself.

### FR-012

- **Description:** Reconcile the `sitemap.xml` `<lastmod>` dates, which are all hardcoded to `2026-02-14` across all 12 listed URLs regardless of actual content changes, with a process (manual or scripted) that updates `lastmod` when a page's content actually changes.
- **Why It Matters:** Search engines use `lastmod` as a freshness signal; having every single page — including pages that may not have been touched since launch and pages that may have been recently edited — show the identical launch-day date reduces the signal's usefulness and may cause search engines to deprioritize re-crawling pages that have genuinely changed.
- **Verification Evidence:** Read `sitemap.xml` in full — all 12 `<url>` entries show `<lastmod>2026-02-14</lastmod>` verbatim, matching the original deployment date documented in `DEPLOYMENT.md`, despite git history showing content commits after that date (e.g., "Add ClickUp CTA button to comparison article" and "add 11 product CTA buttons" both postdate 2026-02-14 per `.git/logs/HEAD` timestamps).
- **Evidence IDs:** E-020
- **Priority:** P2
- **Category:** SEO Hygiene
- **ROI Score:** 3/10 — minor incremental SEO benefit, cheap to fix.
- **Risk Score:** 1/10 — trivial data-accuracy fix, no functional risk.
- **Dependencies:** None; could be automated via a simple script that reads git file-modification history and regenerates the sitemap (ties conceptually to the `generate_sitemap.py` idea the repo's own `audit/agent_readiness.md` proposes, though that remains unbuilt).
- **Competitive Reference:** Standard SEO best practice (accurate `lastmod` in XML sitemaps per sitemaps.org protocol).
- **Security/Privacy Impact:** None.
- **Rollout Readiness:** High.
- **Validation Gates:**
  - Cross-check each URL's actual last-modified date against `git log -1 --format=%ad -- <file>` before updating.
  - Validate the regenerated sitemap.xml against the sitemaps.org XML schema.
  - Resubmit the updated sitemap to Google Search Console/Bing Webmaster Tools per `DEPLOYMENT.md`'s own "Next Steps" section.
- **Acceptance Criteria:**
  - Each URL's `<lastmod>` accurately reflects that specific page's actual last content-change date.
  - Sitemap validates cleanly against the standard XML sitemap schema.
  - A repeatable process (manual checklist or script) exists so this doesn't drift again.

### FR-013

- **Description:** Remove or repurpose the two `robots.txt` `Disallow` rules (`/admin/` and `/private/`) that reference directories which do not exist anywhere in this repository, or replace them with rules that reflect actual site structure.
- **Why It Matters:** These rules are harmless boilerplate today (disallowing crawl of non-existent paths has no effect), but they indicate the `robots.txt` was copy-pasted from a generic template rather than tailored to this specific static site, and their presence could confuse a future maintainer into believing `/admin/` or `/private/` areas exist or are planned.
- **Verification Evidence:** Read `robots.txt` in full; cross-referenced against the full file tree — no `admin/` or `private/` directory exists anywhere in the repo.
- **Evidence IDs:** E-021
- **Priority:** P2
- **Category:** Configuration Hygiene
- **ROI Score:** 1/10 — cosmetic/hygiene only, no measurable business impact.
- **Risk Score:** 1/10 — trivial text file edit.
- **Dependencies:** None.
- **Competitive Reference:** N/A — minor hygiene item.
- **Security/Privacy Impact:** None (arguably a very mild information-disclosure non-issue, since these rules could theoretically hint at intended-but-unbuilt structure to an attacker, though the risk is negligible for a repo with no actual admin surface).
- **Rollout Readiness:** High.
- **Validation Gates:**
  - Confirm no build/deploy process dynamically creates `/admin/` or `/private/` paths that this static analysis wouldn't see.
  - Re-validate `robots.txt` syntax after edit using Google's robots.txt tester.
- **Acceptance Criteria:**
  - `robots.txt` contains only rules relevant to this site's actual structure.
  - Google Search Console (or the robots.txt tester) shows no syntax errors post-change.

### FR-014

- **Description:** Add a lightweight, low-maintenance automated link-checker (e.g., a scheduled GitHub Action running `linkinator` or equivalent, per the tool already named in the repo's own `docs/TEST_STRATEGY.md`) to periodically verify all internal and outbound affiliate links resolve successfully, rather than relying entirely on the manual "Manually click each affiliate CTA" process currently documented.
- **Why It Matters:** `docs/TEST_STRATEGY.md` and `docs/RUNBOOK.md` both prescribe manual link-checking before every push and monthly full audits, but no automation exists to actually perform or enforce this — for a site whose revenue depends on outbound affiliate links staying live, a silently broken link (vendor renamed a URL, affiliate program ended) could go unnoticed indefinitely between manual checks.
- **Verification Evidence:** Read `docs/TEST_STRATEGY.md` section 3 ("Link Checking") which names `npx linkinator` as the intended tool; confirmed via the same `.github/workflows/**` glob (E-003) that no such automation is actually wired up anywhere.
- **Evidence IDs:** E-023, E-003
- **Priority:** P2
- **Category:** Reliability / Monitoring
- **ROI Score:** 3/10 — protects existing (currently nonexistent, per FR-001) revenue infrastructure once it exists; more valuable after FR-001 ships than before.
- **Risk Score:** 2/10 — additive scheduled check, no impact on production site if implemented as a read-only scheduled job.
- **Dependencies:** Most valuable once FR-001 (actual tracked affiliate links) ships — checking placeholder/untracked links has lower stakes.
- **Competitive Reference:** Standard uptime/link-health monitoring practice; DORA's "time to restore" metric benefits from faster detection of broken revenue-generating links.
- **Security/Privacy Impact:** None.
- **Rollout Readiness:** High (tool is already named/planned in existing docs, just needs wiring into a scheduled workflow).
- **Validation Gates:**
  - Confirm the tool correctly follows redirects for affiliate links (which often 301/302 through tracking domains) without false-flagging them as broken.
  - Set an appropriate check frequency (e.g., weekly) balanced against GitHub Actions minutes usage for a public repo (free tier is generous but not unlimited).
  - Verify failure notifications reach the site owner (e.g., via GitHub issue creation or email).
- **Acceptance Criteria:**
  - A scheduled workflow runs `linkinator` (or equivalent) against the live site on a defined cadence.
  - A deliberately-broken test link is caught by the workflow in a test run.
  - Failures produce an actionable notification (not just a silent log).

### FR-015

- **Description:** Publish a `SECURITY.md` at the conventional GitHub-recognized location (repo root or `.github/SECURITY.md`) so GitHub's native "Report a vulnerability" UI surfaces it, rather than only having security policy content at the non-standard `docs/SECURITY.md` path.
- **Why It Matters:** GitHub specifically looks for `SECURITY.md` in the repo root or `.github/` directory to power its built-in "Security" tab vulnerability-reporting workflow and advisory features. The existing `docs/SECURITY.md` content is good (CSP guidance, affiliate link security, vulnerability reporting instructions) but sits in a location GitHub's tooling does not automatically recognize, meaning a security researcher using GitHub's standard reporting flow would not find it.
- **Verification Evidence:** Confirmed via Glob that `docs/SECURITY.md` exists but no `SECURITY.md` exists at repo root or in `.github/`.
- **Evidence IDs:** (derived directly from the file-tree enumeration in Step 2/discovery; the absence is confirmed by the full `**/*.md` glob result which shows `docs/SECURITY.md` but no root or `.github/` `SECURITY.md`)
- **Priority:** P2
- **Category:** Governance / Repo Hygiene
- **ROI Score:** 2/10 — low direct business value, minor trust/discoverability signal for external security researchers.
- **Risk Score:** 1/10 — trivial file move/duplicate, no functional risk.
- **Dependencies:** None — could simply copy or symlink `docs/SECURITY.md` content to the root.
- **Competitive Reference:** GitHub community-standards / OpenSSF best-practices baseline expectation.
- **Security/Privacy Impact:** Mildly positive — improves the odds a real vulnerability report reaches the maintainer through GitHub's standard UI rather than being missed.
- **Rollout Readiness:** High.
- **Validation Gates:**
  - Confirm GitHub's repository "Security" tab now shows the policy after the file is added in the recognized location.
  - Ensure content stays synchronized if both `docs/SECURITY.md` and the root copy are kept (or remove the docs copy and update any internal links pointing to it, e.g., `CONTRIBUTING.md` line 62 references `docs/SECURITY.md`).
- **Acceptance Criteria:**
  - A `SECURITY.md` exists at repo root or `.github/SECURITY.md`.
  - GitHub's Security tab displays the reporting policy.
  - No broken internal doc cross-references result from the change.

## Prioritized Implementation Roadmap

**Phase 1 — Revenue Unblock (P0, do first):**
FR-001 (affiliate link tracking) and FR-007 (working newsletter capture) are the two items directly blocking the site's stated business model from functioning at all. FR-002 (fix the false analytics claim) should ship alongside these since it's needed to measure whether FR-001/FR-007 are working.

**Phase 2 — Risk Closure (P0, in parallel with Phase 1):**
FR-008 (audit `update_dns.sh`) is the one item with a plausible severe-but-unconfirmed downside and should be resolved independently of the revenue work, ideally by direct human review rather than automation, given it involves reading a file that may contain live credentials.

**Phase 3 — SEO & Trust Hardening (P1):**
FR-003 (duplicate page consolidation), FR-005 (social preview images), FR-006 (real product imagery), and FR-009 (basic CI) round out the site's competitiveness against other affiliate/review sites and protect the organic-traffic acquisition channel the PRD identifies as primary.

**Phase 4 — Hygiene & Compliance Follow-through (P1-P2):**
FR-004 (rel=noreferrer), FR-010 (secret scanning), FR-011 (cookie consent, gated behind Phase 1's analytics work), FR-012 (sitemap lastmod accuracy), FR-013 (robots.txt cleanup), FR-014 (automated link-checking, most valuable after FR-001), and FR-015 (SECURITY.md location) are lower-urgency polish items that can be batched into a single maintenance pass.

## Top 5 Highest-ROI Features

| FR | Title | ROI | Priority | One-line rationale |
|---|---|---|---|---|
| FR-001 | Add affiliate tracking to outbound CTA links | 9/10 | P0 | Directly unblocks the site's only revenue mechanism at near-zero implementation cost |
| FR-002 | Fix false Google Analytics claim / implement real analytics | 8/10 | P0 | Prerequisite for measuring every other monetization decision; closes a compliance misstatement |
| FR-007 | Wire newsletter form to a real ESP | 7/10 | P0 | Currently actively misleads visitors with a fake success state; blocks the PRD's owned-audience goal |
| FR-003 | Consolidate duplicate privacy/disclosure pages | 6/10 | P1 | Protects existing organic-search equity from being split across duplicate URLs |
| FR-006 | Add real product imagery | 6/10 | P1 | Directly improves reader trust and CTR for a review site whose entire pitch is "we tested this ourselves" |

## Validation Plan

Once any FR above is implemented, verify it generically as follows:
1. **Static re-scan:** Re-run the same Grep/Glob queries cited in this report's Evidence Ledger against the changed files to confirm the specific gap no longer matches (e.g., re-grep for `og:image` after FR-005 to confirm it now returns matches).
2. **Live-site spot check:** For anything affecting the deployed site (links, forms, meta tags), load the actual page at `https://coves7.com` in a private browser window post-deploy and manually confirm the behavior (per the existing `docs/DEPLOYMENT.md` verification steps already in this repo).
3. **Third-party validators:** Use free external tools appropriate to the change — Google's Rich Results Test (schema markup), Facebook Sharing Debugger / Twitter Card Validator (social images), W3C Markup Validator (HTML structure), Google Search Console (sitemap/robots.txt).
4. **Documentation reconciliation:** Update the specific internal doc that originally flagged the gap (e.g., `audit/technical_debt.md`, `CHANGELOG.md`) to reflect the change, so future reviews don't re-flag a resolved item — this repo's own audit trail has repeatedly shown drift between what docs claim and what code actually does, so closing that loop explicitly matters here.
5. **No-regression check:** For any change touching the CSP or third-party script loading, check the browser console on all 13 pages for CSP violation errors before considering the change complete.

## Executive Summary

Coves7.com is a clean, well-organized affiliate review website — a collection of 13 static web pages, no server, no database — covering AI tools, trading platforms, and business software. The site looks the part: it has search-engine basics in place, a security header, and legitimate review content. But a close inspection found that its core business function isn't actually working yet: none of the "affiliate" links that are supposed to earn commission actually carry any tracking information, so today the site could not get paid even if it received significant traffic. Its privacy policy also tells visitors that Google Analytics is tracking their visit, when in fact no such tracking exists anywhere on the site — meaning the operator currently has no way to know which pages or links are performing. A newsletter signup box on the homepage shows visitors a fake "subscribed" confirmation without actually saving their email anywhere. Separately, a DNS-management script that has sat in the repository since March 2026 was flagged by the site's own prior internal review as needing an urgent credential check that, as far as this review's evidence shows, was never completed — that one item carries outsized risk relative to everything else found, precisely because it remains unverified. None of these issues require rebuilding the site; they are all fixable within the site's existing simple structure, and the highest-value fix (adding real affiliate tracking) is also one of the cheapest to make.
