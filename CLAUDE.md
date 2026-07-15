# CLAUDE.md — Maxifi Digital

## What this project is
AEO consultancy website for Maxifi Digital.
Stack: Astro 4 + Tailwind CSS + MDX. Deploy target: Netlify.
Live domain: maxifidigital.com (canonical: **md-visibility-website.netlify.app**)
Products: Visibility Snapshot (free tool), Visibility Engine, Conference AEO. Executive AI Visibility: free Baseline (1 exec, 3 prompts) → monitored programme SGD 500/mo + SGD 1,000 onboarding (SGD 200 trial to 31 Aug 2026), Stripe checkout in the /exec tool.

## Design reference
The authoritative design reference is **`maxifi_homepage_preview__4_.html`**.
Every page must match its aesthetic: refined, editorial, tight, weight-500.
Do NOT use the premium Fraunces serif version (`maxifi_digital_final_premium.html`) — that file is superseded.

---

## TYPOGRAPHY (v4.1 — rem token scale, CRITICAL)

### Font system (locked, v4.1)

Two families only, loaded from Google Fonts in `src/styles/globals.css` — weights 400 and 500 only (600/800 are no longer loaded):

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=IBM+Plex+Mono:wght@400;500&display=swap');
```

- **Inter** (400, 500) — every headline, body paragraph, nav link, CTA, form input, footer line
- **IBM Plex Mono** (400, 500) — all numeric data, eyebrows, form labels, dashboard meta tags, citation labels, source attributions

No serif. No other monospace. Reference via `--font-sans` and `--font-mono` — never hardcode family stacks.

### Type scale (rem tokens, 16px root — NOTHING renders below 12px)

Reference the tokens; never write a raw `font-size` value in a component or page.

| Token | Size | Role |
|---|---|---|
| `--text-display` | 3rem / 48px | Hero H1 only (2.5rem / 40px ≤640px via the token itself) |
| `--text-h1` | 2.25rem / 36px | Page H1s |
| `--text-h2` | 1.75rem / 28px | Section H2s |
| `--text-h3` | 1.3125rem / 21px | Card H3s |
| `--text-lede` | 1.125rem / 18px | Ledes / intros under headings |
| `--text-body` | 1rem / 16px | Body text, form inputs (16px also stops iOS zoom) |
| `--text-small` | 0.875rem / 14px | Small body, buttons, nav links |
| `--text-caption` | 0.8125rem / 13px | Mono meta / stats |
| `--text-micro` | 0.75rem / 12px | Mono eyebrows / labels / caps. **FLOOR — nothing below this.** |

Stat numerals may keep a bespoke size ≥ 2rem (mono), expressed via tokens/calc — never a raw px value.

### Font weight rule (v4.1)

**Only 400 and 500 exist.** All headings 500, all body 400. Never 600/700/800 — the v3 HeroLoop `ec-ct-cta` weight-700 exception is removed.

### Tracking (only these three tokens + -0.02em on display/h1)

```
--track-tight: -0.015em   /* headings */
--track-0:      0         /* body */
--track-caps:   0.1em     /* eyebrows, caps labels */
```
Display/H1-scale headings may use `-0.02em` literal.

### Enforcement greps (must all return zero before any preview)

```
grep -rEn 'font-size:\s*[0-9]' src/components src/pages   # tokens only
grep -rEn 'font-weight:\s*(300|600|700|800)' src
grep -rEn 'letter-spacing:\s*(0\.0[2-9]|0\.1[1-9]|0\.15)' src
grep -rn  'padding: *[0-9]*px 22px' src                    # dead 22px gutter
```

---

## COLOUR PALETTE (v4.1 — use ONLY these values)

### Primary
```
--navy: #042C53       /* primary text, hero background, primary buttons on light */
--navy-deep: #031F3D  /* darkest, footer background, hover states on navy */
--navy-soft: #0C447C  /* mid-navy, case visual backgrounds, secondary surfaces */
```

### Amber (brand accent)
```
--amber: #BA7517       /* accent details, featured borders */
--amber-deep: #854F0B  /* v4 NEW — primary CTA resting bg (5.87:1 with --amber-light ✓AA); hover #6B3F09 */
--amber-ink: #8A5410   /* v4 NEW — eyebrows/caps on cream (5.90:1 ✓AA) */
--amber-light: #FAEEDA /* CTA text on amber backgrounds, light accent surfaces */
--amber-mid: #EF9F27   /* eyebrow accent on NAVY backgrounds only, hover highlights */
--amber-pale: #FAC775  /* metric values on navy, dark-background accent */
```

### Brown (for amber-light backgrounds)
```
--brown-deep: #412402  /* dark text on amber-light/cream backgrounds */
--brown-mid: #633806   /* secondary text on amber-light backgrounds */
```

### Neutrals
```
--cream: #FAF8F3       /* default page background */
--cream-deep: #F1EFE8  /* alternate section background */
--ink: #1a1a1a         /* darkest body text */
--muted: #5F5E5A       /* gray secondary text */
--mute-soft: #6E6D68   /* v4 CHANGED from #888780 — footer/helper text now 4.89:1 ✓AA */
--line: rgba(4,44,83,0.08) /* dividers, card borders */
```

### Blues (for navy backgrounds only)
```
--blue-text: #E6F1FB   /* primary text on navy */
--blue-soft: #B5D4F4   /* lede text on navy */
--blue-mid: #85B7EB    /* small caps / labels on navy */
```

### Functional
```
--signal: #1D9E75      /* success, check marks */
--danger: #DC2626      /* error, alert states (use sparingly) */
```

**Rules:**
- Never invent hex values. If a colour need arises that isn't covered, propose adding to this list.
- Eyebrows/caps on cream or light backgrounds: `--amber-ink`. On navy: `--amber-mid`.
- Primary CTA background: `--amber-deep` (hover `#6B3F09`) — never raw `--amber` for button fills.

---

## SPACING, LAYOUT & RADIUS (v4.1)

### Border radius (small — editorial feel; unchanged in v4.1)
- Buttons: 5px · Inputs: 4px · Cards/section wrappers: 8px · Pill/badge: 3-4px
- Never use 12px+ rounded corners (HeroLoop engine input pills keep their brand-fidelity exception).

### Border weight
- Default: 0.5px solid (very subtle) · Featured/active: 2px solid amber · Dividers: 0.5px solid rgba

### Gutter system (v4.1 — kills the old 22px/40px mismatch)
```
--gutter: 56px            /* 40px ≤900px, 28px ≤640px — via :root media queries */
--gutter-page             /* full-bleed sections WITHOUT an inner .wrap: grows past
                             --gutter on wide viewports so the content edge matches
                             the centred 1280px container */
```
Every full-bleed section, nav, hero, page-hero and footer uses `padding-left/right: var(--gutter)` (or `var(--gutter-page)` when the section has no inner max-width wrap). The left page edge must align through nav → hero → sections → footer at every breakpoint.

### Containers & measures
```
--container: 1280px · --container-narrow: 960px · --container-prose: 720px (articles/legal)
--measure-body: 65ch · --measure-lede: 55ch · --measure-tight: 45ch
```
Text columns use the three measures only. No text line exceeds ~65ch or falls below ~45ch; any grid cell whose text column falls below 45ch at a breakpoint stacks instead.

### Section padding
```
--section-pad: 96px       /* 64px ≤900px, 48px ≤640px — via :root media queries */
```
Vertical: `padding: var(--section-pad) 0`. Hero: `padding: 64px var(--gutter) 80px` desktop.

### Buttons (v4.1)
- Primary: bg `var(--amber-deep)` (hover `#6B3F09`), label `--text-small`/500, padding 12px 20px, **min-height 44px**, radius 5px.
- Ghost: same geometry, transparent bg, 0.5px border.
- All tap targets ≥ 44px.

### Forms (v4.1)
- Inputs: `--text-body` (16px — stops iOS zoom), min-height 44px.
- Labels: `--text-caption`, mono, caps, `--track-caps`.

### Card padding
- Standard card: 24-28px · Form card: 32-36px

### Grid gaps
- Card grids (3-column): 16-24px · Two-column compare blocks: 0 (touching)

---

## LAYOUT STRUCTURE

### Container
```css
.wrap { max-width: var(--container); margin: 0 auto; padding: 0 var(--gutter); }
.wrap-narrow { max-width: var(--container-narrow); margin: 0 auto; padding: 0 var(--gutter); }
```

### Hero grid
Two columns: 1.05fr / 1fr. Gap 56-64px. Vertical center alignment.

### Section grids
- Problem cards: 1fr 1fr 1fr, gap 20px
- Offer cards: 1fr 1fr 1fr, gap 20px (featured one gets `border: 2px solid amber`)
- SEO vs AEO: 1fr 1fr, gap 0
- Case study: 1.25fr / 1fr, gap 0
- Newsletter: 1fr 1fr, gap 40px

### Responsive breakpoints
- Tablet: 900px — collapse 3-col grids to 1-col, hero stacks
- Mobile: 640px — all stacks, reduce padding by 30%

---

## LOGOMARK & LOGO

### Logomark (the "M" icon)
Two acceptable variants:

**Option A — solid square (preferred for nav, matches preview exactly):**
- 22-32px square
- Background: var(--amber) #BA7517
- Border-radius: 4px
- Content: letter "M" centered, color var(--amber-light) #FAEEDA, weight 500
- Font-size: 12px (in a 22px box) or 14px (in a 32px box)

**Option B — outline SVG (alternative for variations):**
SVG path: `M10 12 L10 38 L18 12 L24 28 L30 12 L36 38`
viewBox `0 0 48 48`, stroke-width 2.4, stroke-linecap round, stroke-linejoin round, fill none, stroke "currentColor"

### Logo files
- `/public/logos/maxifi-logo-black.png` — for light backgrounds (cream, white)
- `/public/logos/maxifi-logo-white.png` — for dark backgrounds (navy)
- Display height: 28-32px, width auto

### Logo wordmark fallback
If logo image unavailable, render "Maxifi Digital" as text:
- font-weight: 500
- font-size: 15px (matches the 13px preview size scaled to production)
- color: var(--navy) on light bg, white on dark bg

---

## NAVIGATION (v4.1 — Three-E structure, Phase 1 URLs)

### Structure
- Sticky on scroll, top: 0, z-index: 50
- Background: `var(--cream)` with `backdrop-filter: blur(8px)`
- Border-bottom: 0.5px solid rgba(0,0,0,0.06)
- Padding: 14px var(--gutter)
- Mobile hamburger breakpoint: **900px**

### Links (between logo and CTA) — locked v4.2, 5 items in this order
| Label | Route (Phase 1 — existing URLs) |
|---|---|
| About | `/about` |
| Why AEO | `/aeo` |
| Executive:AI | `/executive` |
| Event:AI | `/conference-aeo` |
| Enterprise:AI | `/work` |

Route migrations (`/events`, `/enterprise`) are **Phase 2** — after the 1 Aug citation audit. Do not add 301s or rename routes in Phase 1.

Each link: `--text-small`, weight 400, color var(--navy), opacity 0.72 default, 1 on hover/active. Active: weight 500.

### Primary CTA button (top-right) — locked v4.1
- Text: **"Check my visibility →"** → `https://checkyourvisibility.maxifidigital.com/` (external, new tab)
- Background: `var(--amber-deep)`, color `var(--amber-light)`, hover `#6B3F09`
- Padding: 12px 20px, min-height 44px, border-radius 5px, `--text-small`, weight 500, nowrap
- Also rendered in the mobile drawer.

### Footer service labels keep the fuller names: "Executive AI Visibility" → `/executive`, "Enterprise" → `/work`, "Events" → `/conference-aeo` (nav uses the compact `:AI` labels; routes identical).

---

## CTA BUTTONS (apply consistently — v4.1 values)

### Primary
- Background: var(--amber-deep) #854F0B
- Color: var(--amber-light) #FAEEDA
- Padding: 12px 20px, min-height 44px
- Border-radius: 5px
- Font-size: var(--text-small), weight 500
- Hover: background #6B3F09, no transform

### Ghost (on dark/navy backgrounds)
- Background: transparent
- Color: white or var(--blue-text)
- Border: 0.5px solid rgba(255, 255, 255, 0.3)
- Same padding/radius/font as primary
- Hover: border-color rgba(255, 255, 255, 0.6)

### Ghost (on light backgrounds)
- Background: transparent
- Color: var(--navy)
- Border: 0.5px solid rgba(4, 44, 83, 0.22)
- Same padding/radius/font as primary
- Hover: background var(--navy), color white

All tap targets ≥ 44px min-height.

### Universal CTAs across the site (v4.2)
Primary: "Check my visibility →" / "Get my AI Visibility Snapshot" → `https://checkyourvisibility.maxifidigital.com/` (external, new tab)
Executive variant: "Run my Executive Baseline →" → `https://checkyourvisibility.maxifidigital.com/exec` (external, new tab)
Secondary: "Schedule a consultation" → `https://lunacal.ai/maxifidigital`, or "ASW case study" → `https://aswhub.maxifidigital.com/` (external, new tab)

---

## FORMS

### Field structure (v4.1)
1. Label (`--text-caption`, mono, caps, `--track-caps`, color var(--muted), margin-bottom 4px)
2. Input (full width, 0.5px border, 4px radius, `--text-body` 16px font, min-height 44px, cream background)
3. Margin-bottom 10-12px between fields

### Input states
- Default: border `0.5px solid rgba(4,44,83,0.18)`, background `var(--cream)`
- Focus: border-color `var(--amber)`, background `#fff`
- Placeholder: color `rgba(4,44,83,0.4)`

### Submit button
- Full width 100%
- Background: var(--amber)
- Color: var(--amber-light)
- Padding: 9px (compact) or 14px (hero)
- Border-radius: 4-5px
- Font-size: 11-14px depending on context
- Font-weight: 500
- Includes arrow "→" at end of label

### Form attributes (every form)
- `data-netlify="true"`
- `name="..."` (unique per form)
- Hidden field: `<input type="hidden" name="form-name" value="..."/>`
- Honeypot field: `<input name="bot-field" type="text" style="display:none"/>`
- On submit: replace form with thank-you message in place (no redirect)

### Form names in use
- Homepage hero: `visibility-scorecard`
- Standalone tool page: `visibility-snapshot`
- Newsletter: `cited-brief`
- Conference page: `conference-aeo-scope`

---

## PAGES TO BUILD

```
/                        Homepage (use maxifi_homepage_preview__4_.html as reference)
/executive               Executive AI Visibility (free Baseline → SGD monitored programme)
/thanks                  Form-submission thank-you (native fallback target)
/aeo                     AEO education + sales
/visibility-snapshot     Standalone Snapshot page (routes to checkyourvisibility.maxifidigital.com)
/visibility-engine       Engine sales page
/conference-aeo          Conference offer + ASW video
/work                    Case study index
/work/[slug]             Individual case study (first: airspace-world-2026)
/insights                Blog + Cited Brief newsletter hub
/insights/[slug]         Article
/method                  How Maxifi works
/about                   About page
```

### Universal page structure
Every page wraps in `BaseLayout.astro` which includes:
1. `<head>` with title, description, canonical, OG tags
2. Nav (sticky)
3. `<slot />` for page content
4. FinalCTA section (use `FinalCTA.astro` — reused everywhere)
5. Footer

---

## EXTERNAL LINKS (v4.2)

- Visibility Snapshot tool: `https://checkyourvisibility.maxifidigital.com/`
- Executive Baseline tool: `https://checkyourvisibility.maxifidigital.com/exec` (Stripe checkout for monitoring lives inside the tool)
- ASW Hub (live demo): `https://aswhub.maxifidigital.com/`
- Consultation booking: `https://lunacal.ai/maxifidigital`
- All open in new tab with `rel="noopener noreferrer"`
- `visibilityview.netlify.app` is retired — do not link to it

---

## CONTENT & COPY

### Homepage hero — locked copy
- Eyebrow: "AI VISIBILITY · EXPERT-LED BRANDS"
- H1: **"Your buyers are no longer only searching Google"** (no trailing period)
- Lede: "When buyers ask ChatGPT, Perplexity or Google AI about your category, is your brand the answer — or someone else's? We build the visibility layer that makes expert-led brands the source AI cites."
- Primary CTA: "Get my Snapshot" → `/visibility-snapshot`
- Secondary CTA: "ASW case study" → `https://aswhub.maxifidigital.com/` (external, new tab)

### Trust strip (preview reference)
Sector pills (white pills on cream-deep background): CANSO · Aviation bodies · Law firms · Think tanks · Pro services
Prefix label: "Trusted by"

### All other copy
Read from `/docs/copy.md` (to be created). Never invent or paraphrase copy without an explicit instruction.

---

## AEO SELF-REQUIREMENTS (every page)

- Unique `<title>` (60 chars max)
- Unique `<meta name="description">` (155 chars max)
- One `<h1>` per page only
- Canonical URL
- Open Graph: `og:title`, `og:description`, `og:url`, `og:image` (1200×630)
- JSON-LD: `Organization` + `WebSite` on homepage
- JSON-LD: `Article` schema on `/insights/[slug]`
- JSON-LD: `FAQPage` on any page with FAQ section
- JSON-LD: `Product` on `/visibility-engine`
- All images: explicit width, height, descriptive alt text
- Semantic HTML: use `<header>`, `<main>`, `<section>`, `<article>`, `<footer>` correctly

---

## DESIGN RULES — DO

✅ Use weight 500 for all headings (not 600, not 700)
✅ Use the `--text-*` rem tokens for every font-size (nothing below 12px)
✅ Keep border radius small (4-8px max)
✅ Use 0.5px borders for subtlety (1px only on featured/active states)
✅ Letter-space eyebrows and caps with `--track-caps` (0.1em)
✅ Letter-space headings with `--track-tight` (-0.015em; display/h1 may use -0.02em)
✅ Stick to the locked colour palette (`--amber-ink` for eyebrows on light, `--amber-mid` on navy)
✅ Use `var(--gutter)` for every full-bleed horizontal padding and `var(--section-pad)` for section verticals
✅ Maintain editorial tightness — never blow up font sizes for "marketing impact"
✅ Run the enforcement greps (see TYPOGRAPHY) before any preview

---

## DESIGN RULES — DO NOT

❌ Do not use Fraunces, Georgia, or any serif font
❌ Do not use JetBrains Mono, Courier, or any monospace font other than IBM Plex Mono
❌ Do not use font-weight 600, 700, 800 or 900 — no exceptions (the v3 `HeroLoop.ec-ct-cta` weight-700 exception was removed in v4.1)
❌ Do not use border-radius larger than 8px (no big rounded corners)
   **Exception:** `HeroLoop` engine input pills use 20px (ChatGPT) and 24px (Gemini) to mimic those engines' input bars — brand-fidelity
❌ Do not hardcode hex values — only use the CSS variables defined above
❌ Do not use 2px+ borders except on featured cards
❌ Do not use shadcn, headlessui, or any component library
❌ Do not add animation libraries — CSS transitions only (0.2s ease)
❌ Do not add client-side JS unless inside an Astro island (`client:visible`)
❌ Do not use lorem ipsum — pull copy from `/docs/copy.md`
❌ Do not use emojis in production copy (preview-only)
❌ Do not invent meta descriptions, titles, or H1s — they must be approved

---

## TECHNICAL DECISIONS

### Stack
- Astro 4+ with TypeScript strict mode
- Tailwind CSS via `@astrojs/tailwind` integration (use Tailwind utilities, not custom CSS classes)
- MDX via `@astrojs/mdx` for blog content
- Sitemap via `@astrojs/sitemap`

### CSS approach
- Tailwind utility classes for layout, spacing, sizing
- CSS variables (in `globals.css`) for colours and tokens
- No CSS modules, no styled-components, no SASS

### CRITICAL: Mobile breakpoint rules MUST live in `globals.css`

**Discovered 2026-05-24 after long debugging session.** Page-level scoped `<style>` blocks in `.astro` files do NOT reliably compile their `@media` rules — particularly for responsive grid collapses. Symptoms: mobile layout fails on production while local dev appears correct, and the compiled CSS file is missing the media query entirely.

**Rule of thumb:**
- ✅ Mobile/responsive breakpoint rules → `src/styles/globals.css` with `!important`
- ✅ Static component styles → scoped `<style>` in the `.astro` file
- ❌ Never put `@media (max-width: ...)` rules in page-level `<style>` tags expecting them to override base rules

**Mobile rules currently in `globals.css` (do not move back to page-level):**
```css
@media (max-width: 900px) {
  .wrap-inner { padding: 0 24px !important; }
  .system-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
  .vs-hero__grid { grid-template-columns: 1fr !important; gap: 32px !important; }
  .vs-hero h1 { font-size: 32px !important; }
}
@media (max-width: 640px) {
  .wrap-inner { padding: 0 16px !important; }
  .vs-hero h1 { font-size: 26px !important; }
}
```

### CRITICAL: Netlify Node version

`netlify.toml` must specify `NODE_VERSION = "22"` (or higher). Astro v6+ requires Node ≥22.12.0. Builds fail silently on default Node 20.

### CRITICAL: Watch for malformed closing `</style>` tags

Astro is lenient about malformed HTML in `.astro` files — a missing `>` on `</style>` will compile without error but silently strip the entire stylesheet. Always verify the end of large `.astro` files ends with `</style>` followed by a newline.

### Component patterns
- One component per `.astro` file
- Props typed with TypeScript interface at top of file
- Use Astro's `<slot />` for composition
- Keep components small (under 200 lines preferred)

### Files structure
```
/src/components/ui/         atoms (Button, Eyebrow, Badge, Logomark)
/src/components/sections/   page sections (Nav, Footer, FinalCTA, Hero)
/src/components/forms/      form components (SnapshotForm, NewsletterForm)
/src/layouts/               BaseLayout, ArticleLayout
/src/content/               articles, newsletter-issues, case-studies (MDX)
/src/pages/                 one file per route
/src/styles/                globals.css (CSS variables + Inter import)
/public/                    static assets, logos, video
```

---

## DEPLOYMENT

- Production: Netlify (`md-visibility-website.netlify.app`, custom domain `maxifidigital.com`). Note: `visibility-website.netlify.app` is deprecated; disconnect from GitHub in Netlify dashboard to prevent dual builds.
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 20
- Environment: production env vars in Netlify dashboard

### Netlify configuration (netlify.toml at root)
- 301 redirect www → apex
- Security headers: X-Frame-Options, X-Content-Type-Options, Referrer-Policy
- No iframe/CSP exception needed: `/visibility-snapshot` no longer embeds an external tool (routes to `checkyourvisibility.maxifidigital.com` instead)

---

## DEVELOPMENT WORKFLOW

### Start every Claude Code session with:
```
We're building the Maxifi Digital site.
Read CLAUDE.md for the project brief and design system.
Today's task: [describe what you're building]
```

### Build order
1. Foundation: globals.css, Nav, Footer, BaseLayout, FinalCTA
2. Homepage (uses `maxifi_homepage_preview__4_.html` as design reference)
3. Visibility Snapshot page (iframe embed)
4. Visibility Engine page (with sample Snapshot preview)
5. Conference AEO page (with video)
6. Insights hub + content collections
7. Case study + remaining pages
8. AEO audit + Lighthouse pass
9. Deploy

### When building any new page
- Reference the matching HTML preview file for design
- Use only the colours, fonts, weights, and sizes specified in this file
- Run a check after building: "Compare this Astro page to its HTML reference. List any differences."

---

## HOMEPAGE HERO LAYOUT (locked structure — px font-size tables SUPERSEDED by v4.1 tokens)

> **v4.1 note:** the layout/structure rules below remain locked, but every px font-size in this section is superseded by the `--text-*` token scale (see TYPOGRAPHY). The subgrid height-matching and timer rules still apply.

### Hero section padding
```css
/* Inside index.astro hero <section> */
padding: 18px 22px 40px;   /* top was reduced for above-the-fold density */
```

### Hero grid — CSS subgrid (permanent height-matching solution)
```css
.hero-row {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  grid-template-rows: auto 1fr;   /* row 1 = max(dyk-header, hl-top), row 2 = content */
  column-gap: 18px;
  row-gap: 14px;
}
/* Both left and right columns span both rows and use subgrid */
.hero-left {
  display: grid;
  grid-row: 1 / 3;
  grid-template-rows: subgrid;
  align-content: start;
}
.hl-root {
  display: grid;
  grid-row: 1 / 3;
  grid-template-rows: subgrid;
  align-content: start;
}
```
**Rule: never revert to fixed heights or JS-based syncHeight for the hero columns. Subgrid is the permanent solution.**

### Stat card (#didyouknow) font sizes — locked (+15% from original)
```css
.dyk-label  { font-size: 13px; }   /* was 11px */
.dyk-value  { font-size: 14px; }   /* was 12px */
.dyk-source { font-size: 11.5px; } /* was 10px */
```

### Hero body layout
```css
.hero-body {
  display: flex;
  flex-direction: column;
}
.hero-ctas {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  /* No margin-top: auto — CTAs flow naturally below lede */
}
```

---

## HEROLOOP COMPONENT (locked structure — px font-size values SUPERSEDED by v4.1 tokens)

> **v4.1 note:** structure, timers and animation rules below remain locked; px font-sizes and the `ec-ct-cta` weight-700 are superseded (tokens + weight 500 now).

### Structure overview
```
.hl-root
  .hl-top                    ← subgrid row 1: tabs + header (matches dyk height)
    .subind-header
    .subind-tabs
  .loop-container            ← subgrid row 2: the animated engine area
    .loop-insight            ← PERMANENT fixed line, never inside animated .state
    .loop-states
      .state[data-state="N"] ← position:absolute, flex-column, animated in/out
        .state-header
        .state-body
          .ec-pills
          .ec-window.engine-[name]
            .ec-chrome
            .ec-greeting
            .ec-input-row
            .ec-thinking    ← "Thinking" label + 3-dot pulse
            .ec-answer-area
          .ec-conversion-trigger  ← margin-top:auto, always at bottom
```

### Permanent insight line (locked)
```css
.loop-insight {
  flex-shrink: 0;
  padding: 10px 16px 11px;
  font-size: 13px;
  color: var(--blue-soft);
  line-height: 1.4;
  font-family: var(--font-sans);
  border-bottom: 0.5px solid rgba(255,255,255,0.08);
  background: rgba(255,255,255,0.03);
}
```
Text: **"Aviation & aerospace buyers screen vendors in AI first. Find out if yours is being cited."**
This line is outside `.loop-states` and is always visible regardless of which state is active.

### Loop container
```css
.loop-container {
  display: flex;
  flex-direction: column;
  min-height: 490px;
  align-self: stretch;
  box-sizing: border-box;
}
.loop-states {
  position: relative;
  flex: 1;
  min-height: 0;
}
.state {
  position: absolute; top: 0; left: 0; right: 0; bottom: 0;
  display: flex;
  flex-direction: column;
}
.state-body {
  padding: 22px 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
}
```

### Engine pills — locked sizes
```css
.ec-pill { font-size: 12px; }           /* desktop — was 10px (+20%) */
@media (max-width: 640px) {
  .ec-pill { font-size: 10px; }         /* mobile — was 8px */
}
```

### Engine chrome URL — locked
```css
.ec-chrome-url {
  font-size: 11px;
  color: rgba(255,255,255,0.85);        /* high contrast — was 0.35 */
}
```

### Thinking indicator — locked
```css
@keyframes think-pulse {
  0%, 80%, 100% { opacity: 0.2; transform: scale(0.7); }
  40%           { opacity: 1;   transform: scale(1);   }
}
.ec-think-dots span { animation: think-pulse 1.2s ease-in-out infinite; }
.ec-think-dots span:nth-child(2) { animation-delay: 0.2s; }
.ec-think-dots span:nth-child(3) { animation-delay: 0.4s; }
```
Visible during thinking phase only (shown while `ec-answer-area` is hidden). Hidden once answer appears.

### Answer area — locked
```css
.ec-answer-area {
  border: 1px solid rgba(255,255,255,0.12);  /* stronger than default */
  border-radius: 6px;
  padding: 12px 14px;
  background: rgba(255,255,255,0.05);         /* base tint */
}
/* Per-engine brand tints (applied via additional class) */
.engine-chatgpt  .ec-answer-area { background: rgba(16,163,127,0.05); }
.engine-perplexity .ec-answer-area { background: rgba(32,120,220,0.05); }
.engine-gemini   .ec-answer-area { background: rgba(66,133,244,0.05); }
.engine-copilot  .ec-answer-area { background: rgba(0,120,212,0.05); }
.engine-claude   .ec-answer-area { background: rgba(205,154,109,0.05); }
```

### Conversion trigger — locked
```css
@keyframes ct-glow {
  0%, 100% { box-shadow: 0 0 6px 1px rgba(186,117,23,0.3); }
  50%       { box-shadow: 0 0 18px 5px rgba(186,117,23,0.65); }
}
.ec-conversion-trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 11px 14px;
  margin-top: auto;
  margin-bottom: 12px;            /* 5px higher than natural floor */
  background: rgba(186,117,23,0.22);
  border: 1px solid rgba(186,117,23,0.6);
  border-radius: 6px;
  text-decoration: none;
  animation: ct-glow 2.2s ease-in-out infinite;
}
.ec-ct-question {
  font-size: 13px;
  font-weight: 500;
  color: #fff;
}
.ec-ct-cta {
  font-size: 12px;
  font-weight: 700;              /* bold — intentional for conversion urgency */
  color: var(--amber-pale);
  white-space: nowrap;
}
```
Copy: question = **"Are AI engines citing you?"**, CTA = **"Check now →"**
Links to: `https://checkyourvisibility.maxifidigital.com/` (external, new tab)

### JS animation rules (locked — prevent stale timer bugs)
Four timer state variables must exist:
```js
let cycleTimer: ReturnType<typeof setInterval> | null = null;
let thinkingTimeout: ReturnType<typeof setTimeout> | null = null;
let answerTimeout: ReturnType<typeof setTimeout> | null = null;
let pauseTimer: ReturnType<typeof setTimeout> | null = null;
```
`stopEngineLoop()` must clear **all four**:
```js
function stopEngineLoop() {
  if (cycleTimer)      { clearInterval(cycleTimer);  cycleTimer = null; }
  if (thinkingTimeout) { clearTimeout(thinkingTimeout); thinkingTimeout = null; }
  if (answerTimeout)   { clearTimeout(answerTimeout);   answerTimeout = null; }
  if (pauseTimer)      { clearTimeout(pauseTimer);      pauseTimer = null; }
}
```
On `mouseleave`: call `setEngine(currentEngine, false)` to reset the in-progress animation **before** restarting the loop. Never restart the loop without resetting first.

### CRITICAL — EC_RESPONSES data
All 20 response strings in the `EC_RESPONSES` object are **fabricated simulations**. They must be replaced with real copied text from live queries in each engine before the site goes to production. Until replaced, this is a reputational risk for an AEO consultancy.

---

## HOMEPAGE SECTIONS — LOCKED (v3.2, 2026-05-23)

The following homepage sections (in `src/pages/index.astro`) are **locked** and must not be altered without explicit instruction:

### Locked sections (before "The Shift"):

**SECTION 2 — Hero** (Main hero with HeroLoop)
- Eyebrow, H1, buyer queries, lede, CTAs
- HeroLoop animated 5-engine simulator on right column
- CSS: `.hero`, `.hero-row`, `.hero-left`, `.hero-body`, `.hero-ctas`, `.hero-h1`, `.hero-queries`, `.lede`, `.dyk-*`
- Layout: subgrid height-matching between left column and HeroLoop
- Do not alter dimensions, spacing, or HeroLoop timer logic

**SECTION 3 — Visibility Snapshot Hero** (Form card funnel)
- Eyebrow: "Free · 5 minutes · No call required"
- H1: "When your market asks AI who to trust, does your company show up?"
- Two AEO context paragraphs
- Right column: white form card with "Free Snapshot" badge, score chip (47/100), 3 form fields
- Form name: `visibility-snapshot` (Netlify Forms)
- CTA routes to `https://checkyourvisibility.maxifidigital.com/` (external, new tab)
- CSS: `.vs-hero`, `.vs-hero__grid`, `.vs-hero__left`, `.vs-form-card`, `.vs-form-badge`, `.vs-scorechip`, `.vs-field`, `.vs-submit`, `.vs-results`
- Do not modify form fields, badge styling, or score chip layout

**SECTION 4 — Sample Snapshot** (Preview of report)
- Eyebrow: "See it before you start"
- H2: "This is what your Snapshot looks like" (with amber italic em text)
- Left column: 2×2 grid of 4 features + CTA
- Right column: mock report card with navy chrome, conic-gradient score ring, engine rows
- CSS: `.vs-sample`, `.vs-sample__panel`, `.vs-sample__copy`, `.vs-sample__grid`, `.vs-sample__cell`, `.vs-report`, `.vs-ring`, `.vs-report__rows`
- Do not alter grid structure, report styling, or feature descriptions

### Sections still available for editing:

Everything after SECTION 4 (starting with **SECTION 5 — "The Shift"** problem frame) remains open for changes without explicit instruction.

---

## REVISION HISTORY

- v1: Initial spec with Fraunces serif and weight 600 — SUPERSEDED
- v2: System sans-serif, weight 500, editorial tight aesthetic — SUPERSEDED
- **v3 (current): Inter (400/500/600) for all text + IBM Plex Mono (400/500) for all numeric data and eyebrows. Imported via Google Fonts. Referenced via `--font-sans` and `--font-mono` CSS variables.**
- **v3.1 (2026-05-21): Nav locked to 5 links + "Get the Report" CTA; Hero subgrid height-matching; HeroLoop thinking indicator + conversion trigger; all animation timers locked.**
- **v3.2 (2026-05-24): Pre-launch audit pass — orphan components/files removed; redirects consolidated; mobile breakpoints standardized.**
- **v3.3 (2026-05-24): Mobile CSS rules relocated to `globals.css` after discovering Astro scoped `<style>` blocks unreliably compile `@media` rules. NODE_VERSION pinned to 22 in `netlify.toml`. Fixed silent `</style>` tag corruption bug.**
- **v4.1 (2026-07-15): Type re-scale to benchmark size, rem tokens, WCAG AA contrast corrections, gutter/measure system, Three-E nav + /executive page with approved SGD pricing (Phase 1). Approved by Le-Anne 15 Jul 2026.**
- **v4.2 (2026-07-15, same branch): Post-review polish approved by Le-Anne — gutters widened to 56/40/28px; `--gutter-page` alignment token for wrap-less full-bleed sections; /about hero left-aligned two-column layout with the three value cards in the right column; founder photo (`/public/founder/le-anne-lim.jpg`) beside the bio at 90% of the bio block height, uncropped, no caption (mobile: full-width natural aspect via globals override); founder photo added to /about Person JSON-LD `image`.**
- **v4.3 (2026-07-15, merged #65): Nav reordered and relabelled — About / Why AEO / Executive:AI / Event:AI / Enterprise:AI (routes unchanged); /about hero lede raised to `--text-lede` (18px); stale `visibilityview.netlify.app` references replaced with `checkyourvisibility.maxifidigital.com` throughout the docs. Approved by Le-Anne 15 Jul 2026.**
