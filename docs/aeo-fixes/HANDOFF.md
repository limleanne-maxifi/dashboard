# Repo Handoff — maxifi-digital (limleanne-maxifi/dashboard)
_Last updated: 2026-06-16 · reflects main branch after PR #61 merge_

## What this repo is
Astro 4 + Tailwind CSS + MDX → deployed on Netlify. Serves `maxifidigital.com`. Read `CLAUDE.md` before touching anything — it governs every design, font, colour, spacing, and mobile-breakpoint decision.

## Branch state
`main` is clean and current. PR #61 was merged 2026-06-16 — this was the GSC parse-error fix and schema coverage pass.

## Current schema inventory (as of last build — all 46 blocks valid)
| Page | Schema types present |
|---|---|
| `/` | Organization, WebSite |
| `/aeo` | Organization, WebSite, BreadcrumbList, FAQPage, Article |
| `/conference-aeo` | Organization, WebSite, BreadcrumbList, Service |
| `/contact` | Organization, WebSite, BreadcrumbList, ContactPage |
| `/about` | Organization, WebSite, BreadcrumbList |
| `/visibility-snapshot` | Organization, WebSite, BreadcrumbList, Service, FAQPage |
| `/work` | Organization, WebSite, BreadcrumbList, Service ×2 |
| `/work/airspaceworld` | Organization, WebSite, BreadcrumbList, Article, Event |
| `/insights/aeo-vs-seo` | Organization, WebSite, BreadcrumbList, Article |
| `/insights` | Organization, WebSite, BreadcrumbList |

Organization + WebSite + BreadcrumbList come from `BaseLayout.astro` via `JSON.stringify` (always valid, can't regress). Page-specific blocks are raw inline JSON in the `<Fragment slot="head">` — these must be valid JSON (no trailing commas, straight quotes only).

## What was fixed in PR #61
1. **GSC parse error (root cause):** 8 hand-written inline JSON-LD blocks wrapped JSON in a JSX template literal (`is:inline>{`` ` ``…`` ` ``}`) — Astro's `is:inline` emits raw, so the backtick/brace wrapper leaked into the HTML. Stripped it; all 46 blocks now parse.
2. **Event schema** added to `/work/airspaceworld` (dates 2026-05-26→28, FIL Lisbon, CANSO, hub URL).
3. **Twitter Card tags** added to `BaseLayout.astro` (5 tags, driven by same props as OG).
4. **`public/robots.txt`** updated: added `ChatGPT-User`, `Google-Extended`, `Claude-Web`, `Applebot-Extended`.
5. `docs/aeo-fixes/` kit committed (audit docs, CANSO prompts, reference schema/config/copy).

## Schema gaps still open (ranked)
| Gap | File to touch | Priority |
|---|---|---|
| Homepage `/` has no FAQPage | `src/pages/index.astro` — only add if visible Q&A is present on-page | High |
| `/about` has no Person schema for Lim Le-Anne | `src/pages/about.astro` | Medium |
| `/insights` hub has no BreadcrumbList showing sub-articles | `src/pages/insights/index.astro` | Low |
| `/conference-aeo` Service schema has no FAQPage | `src/pages/conference-aeo.astro` | Low |

**Rule:** never add schema type without matching visible on-page content — Google will penalise unbacked schema.

## Critical CLAUDE.md rules (don't skip)
- Mobile `@media` breakpoints must live in `src/styles/globals.css` with `!important` — NOT in page-level `<style>` tags (Astro scoped styles don't compile `@media` reliably).
- Watch for malformed `</style>` closing tags — a missing `>` silently strips the whole stylesheet.
- Locked sections in `index.astro`: Hero (Section 2), Visibility Snapshot Hero (Section 3), Sample Snapshot (Section 4) — do not alter without explicit instruction.
- HeroLoop (`src/components/HeroLoop.astro`) is locked — timer logic, dimensions, engine chrome.
- Node version: 22 (set in `netlify.toml`).

## External surfaces not in this repo
| Surface | Where | Status |
|---|---|---|
| `aswhub.maxifidigital.com` | Separate Netlify/static repo | 7 fixes outstanding — see `docs/aeo-fixes/aswhub-fixes/NEW-CHAT-KICKOFF-PROMPT.md` |
| GSC Validate Fix | Google Search Console | Needs clicking after deploy |

## Post-deploy checklist (do after next deploy)
- [ ] `curl https://maxifidigital.com/llms.txt` returns the file
- [ ] Rich Results Test on `/` and `/aeo` → zero errors
- [ ] GSC: open flagged structured-data issue → click **Validate Fix**
- [ ] Twitter card: post any page URL in X draft or use https://cards-dev.twitter.com/validator

## Key files
```
src/layouts/BaseLayout.astro        ← global head, OG, Twitter, org/website/breadcrumb schema
src/styles/globals.css              ← CSS vars, Google Fonts import, all mobile breakpoints
public/robots.txt                   ← AI crawler allowlist
public/llms.txt                     ← AI-readable entity description
src/pages/index.astro               ← homepage (sections 2-4 locked)
src/components/HeroLoop.astro       ← locked 5-engine animation
docs/aeo-fixes/                     ← audit kit, CANSO prompts, reference schemas
```
