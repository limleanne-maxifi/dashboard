# Maxifi Digital — AI Readability & Structured-Data Fixes

> ⚠️ **SUPERSEDED — 2026-06-23.** These notes assume `maxifidigital.com` is a **Webflow** site. It is not: the main domain now runs on this **Astro + Netlify** repo (`limleanne-maxifi/dashboard`). This file is kept only as a historical record of the pre-migration site — **do not follow the Webflow steps for the live site.** Apply equivalent changes in the Astro/Netlify codebase instead.

This package fixes all 19 AI-readability and structured-data issues for `maxifidigital.com` and the `aswhub.maxifidigital.com` case-study hub. Every JSON-LD file is validated JSON (straight quotes, no trailing commas) and wrapped in `<script type="application/ld+json">` where it ships in a page head.

**Company facts used throughout:** Maxifi Digital, Singapore only (no London), founded by Lim Le-Anne. Primary contact: hello@maxifidigital.com. Booking: https://lunacal.ai/maxifidigital.

## Issue summary

| # | Issue | File | Apply at |
|---|---|---|---|
| 1 | Organization schema (all pages) | `schema/organization.json` | Webflow (every page head) |
| 2 | FAQPage — homepage | `schema/faqpage-homepage.json` | Webflow (homepage head) |
| 3 | FAQPage — /aeo | `schema/faqpage-aeo.json` | Webflow (/aeo head) |
| 4 | Service schemas (×3) | `schema/services.json` | Webflow (homepage head) |
| 5 | Article schema — /aeo | `schema/article-aeo.json` | Webflow (/aeo head) |
| 6 | BreadcrumbList (×5) | `schema/breadcrumbs.json` | Webflow (each page head) |
| 7 | Event schema — ASW Hub | `schema/event-aswhub.json` | ASW Hub head |
| 8 | GSC parse-error fix guide | `schema/README-gsc-fix.md` | Webflow homepage |
| 9 | Webflow embed placement map | `schema/webflow-embed-instructions.md` | Reference |
| 10 | llms.txt | `config/llms.txt` | Root of maxifidigital.com (`/llms.txt`) |
| 11 | robots.txt (AI crawlers allowed) | `config/robots.txt` | Webflow SEO settings |
| 12 | Webflow robots.txt how-to | `config/webflow-robots-instructions.md` | Reference |
| 13 | /about page copy | `pages/about.html` | Webflow (new page) |
| 14 | /contact page copy + ContactPoint | `pages/contact.html` | Webflow (new page) |
| 15 | Twitter card meta tags (×5) | `pages/twitter-meta-tags.html` | Webflow (each page head) |
| 16 | Three article briefs | `content-briefs/three-articles.md` | Content team |
| 17 | ASW OG image (SVG→PNG) | `aswhub-fixes/og-image-fix.md` | ASW Hub |
| 18 | ASW post-event tense updates | `aswhub-fixes/post-event-tense-updates.md` | ASW Hub |
| 19 | ASW dead-links audit | `aswhub-fixes/dead-links-audit.md` | ASW Hub |

## Priority order
1. **GSC parse error first** (`schema/README-gsc-fix.md`) — it's breaking structured data on the homepage right now.
2. **Schema** — paste all JSON-LD per `schema/webflow-embed-instructions.md`.
3. **Config** — publish `robots.txt` and `llms.txt`.
4. **Pages** — add /about, /contact, and Twitter meta tags.
5. **ASW Hub fixes** — OG image, tense updates, dead links.
6. **Content briefs** — hand to the content team.

## Validation checklist
- [ ] Run https://search.google.com/test/rich-results on every URL **after each schema paste** — zero errors.
- [ ] Homepage GSC issue: click **Validate Fix** after re-test passes.
- [ ] `https://maxifidigital.com/llms.txt` returns the markdown file.
- [ ] `https://maxifidigital.com/robots.txt` shows AI-crawler allow rules + Sitemap line.
- [ ] `og-default.png` resolves and is 1200×630; ASW Hub `og-image.png` resolves and is 1200×630.
- [ ] Facebook Sharing Debugger + X card validator render large image for all pages.
- [ ] All ASW Hub footer `/services/` links return 200 (not 404).
- [ ] No smart/curly quotes in any published JSON-LD block.

## Constraints honoured
- Singapore only — no London / second office.
- Founder is **Lim Le-Anne**.
- Primary email **hello@maxifidigital.com** everywhere.
- All copy answer-first.
- No fabricated clients, metrics, or results — `[INSERT]` marks where real data is needed.
