# Kickoff prompt — new Claude Code chat on the MAIN-DOMAIN repo

> Open the new session on **`limleanne-maxifi/maxifi-digital`** (the Astro 4 + Tailwind + MDX site deployed to Netlify that serves `maxifidigital.com`). Read `CLAUDE.md` first — its design system, colour/type tokens, and the "mobile rules live in globals.css" / "watch malformed `</style>`" warnings are binding.

---

We are fixing AI-readability and structured-data issues on `maxifidigital.com` (this Astro repo, deployed on Netlify). Audit and fix the EXISTING implementation — do not rebuild from scratch. Work on a new branch and open a **draft PR**.

**Fixed facts — do not deviate:**
- Maxifi Digital, **Singapore only** (no London / no second office). Founder: **Lim Le-Anne**. Contact: **hello@maxifidigital.com**. Booking: https://lunacal.ai/maxifidigital.
- Pages: `/`, `/aeo`, `/work`, `/visibility-snapshot`, `/conference-aeo` (+ existing `/about`, `/contact`).
- Do not fabricate clients, metrics, speakers, or results — use `[INSERT]` and list gaps in the PR.
- JSON-LD must be valid JSON: straight quotes only, no trailing commas, `@context` "https://schema.org" in every object.

**Current state (already in repo — verify, don't duplicate):**
- `src/layouts/BaseLayout.astro` already emits Organization + WebSite + conditional Breadcrumb via `JSON.stringify(...)` (these can't be malformed).
- `public/robots.txt` and `public/llms.txt` already exist.
- Hand-written `<script type="application/ld+json">` literals exist in several page files: `aeo.astro`, `contact.astro`, `conference-aeo.astro`, `visibility-snapshot.astro`, `work/index.astro`, `work/airspaceworld.astro`, `insights/aeo-vs-seo.astro`.

**Tasks (commit incrementally, validate each):**

1. **GSC parse error (do first).** GSC reports "Parsing error: Missing '}' or object member name" in a JSON-LD block on the homepage. Because `BaseLayout` builds its schema with `JSON.stringify` (always valid), the culprit is a **hand-written inline JSON-LD literal** rendered on `/` — inspect every raw `<script type="application/ld+json">` string literal that reaches the homepage (BaseLayout-injected page schema, any homepage component, and `index.astro`). Find the invalid one (likely a trailing comma, an unescaped/smart quote, or a missing comma between properties), fix it, and ideally refactor it to a JS object passed through `JSON.stringify` so it can't regress. Validate with a Node `JSON.parse` of the rendered block.

2. **Validate ALL existing JSON-LD across the repo.** Build the site (`npm run build`), extract every `application/ld+json` block from `dist/`, and `JSON.parse` each. Fix any that throw. Confirm Singapore-only, "Lim Le-Anne", and "hello@maxifidigital.com" appear consistently (no London, no alternate founder spelling, no other primary email).

3. **Harden `public/robots.txt`.** Keep existing allows; ADD missing agents `ChatGPT-User`, `Google-Extended`, `Claude-Web`, `Applebot-Extended` (all `Allow: /`). Keep the `Sitemap: https://maxifidigital.com/sitemap.xml` line. Confirm `@astrojs/sitemap` is generating `sitemap-index.xml`/`sitemap-0.xml` and that the referenced path resolves.

4. **`public/llms.txt`.** Verify it ends with a **Case Study** (Airspace World 2026 hub → https://aswhub.maxifidigital.com/), **Contact** (hello@maxifidigital.com, Singapore), and **Founder** (Lim Le-Anne) section. Add any missing. Keep Singapore-only.

5. **FAQPage schema.** Add a `FAQPage` block to the homepage and to `/aeo`, built from the **real on-page Q&A copy** (do not invent answers). Homepage Q&A: "What is Answer Engine Optimisation (AEO)?", "How is AEO different from SEO?", "What does the Visibility Snapshot show?". /aeo Q&A: "What is AEO?", "How do AI citations compound?", "What engines does AEO target?", "What does AEO do for pipeline?", "How is AEO different from SEO?". If the page doesn't yet render these as visible `<h2>/<h3>` + answer text, add them so the schema matches visible content.

6. **Service schema.** Add an array of three `Service` objects on the homepage (or one per service page): Visibility Snapshot (`/visibility-snapshot`), Visibility Engine (`/work`), Conference AEO Sprint (`/conference-aeo`). Each: `provider` ref to `https://maxifidigital.com/#organization`, 2-sentence answer-first `description`, full `url`, `areaServed:["Singapore","Global"]`.

7. **Article schema on `/aeo`.** headline "SEO got you ranked. AEO gets you cited.", author Person "Lim Le-Anne", publisher Organization ref, `datePublished` "2026-01-15", `dateModified` "2026-05-01", description from the page meta, `url` https://maxifidigital.com/aeo, image https://maxifidigital.com/og-default.png. (Reconcile with any existing block in `aeo.astro` — replace, don't stack duplicates.)

8. **Event schema for the ASW case study** on `/work/airspaceworld`: `@type Event` "Airspace World 2026", startDate 2026-05-26, endDate 2026-05-28, eventStatus EventScheduled, eventAttendanceMode OfflineEventAttendanceMode, location Place "Feira Internacional de Lisboa" (Lisbon, PT), organizer Organization "CANSO", url https://aswhub.maxifidigital.com/.

9. **Twitter Card tags.** In `BaseLayout.astro`, add `twitter:card` (summary_large_image), `twitter:title`, `twitter:description`, `twitter:image` — driven by the same per-page `title`/`description`/`ogImage` props already used for Open Graph (default image https://maxifidigital.com/og-default.png). One source of truth; no per-page duplication.

10. **Breadcrumbs.** Confirm each of the 5 pages passes a `breadcrumb` prop so `BaseLayout`'s conditional Breadcrumb renders Home > [page].

**Validation before PR:**
- `npm run build` succeeds; every `application/ld+json` block in `dist/` passes `JSON.parse`.
- Paste homepage + `/aeo` into https://search.google.com/test/rich-results → zero errors; Organization, FAQPage, Service, Article, BreadcrumbList all detected.
- `/robots.txt`, `/llms.txt`, and the sitemap resolve in the build output.
- No smart/curly quotes in any JSON-LD; Singapore-only; "Lim Le-Anne"; "hello@maxifidigital.com" throughout.
- Respect `CLAUDE.md`: do not touch locked hero/HeroLoop sections or move mobile `@media` rules out of `globals.css`; ensure no file ends on a malformed `</style>`.

Open a **draft PR** summarising each task, the GSC fix root cause, and any `[INSERT]` gaps.
