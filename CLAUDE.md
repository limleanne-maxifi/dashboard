# CLAUDE.md — Maxifi Digital

## What this project is
AEO consultancy website for Maxifi Digital.
Stack: Astro 4 + Tailwind CSS + MDX. Deploy target: Netlify.
Live domain: maxifidigital.com (currently deployed to visibility-website.netlify.app)

## Design reference
The authoritative design reference is **`maxifi_homepage_preview__4_.html`**.
Every page must match its aesthetic: refined, editorial, tight, weight-500.
Do NOT use the premium Fraunces serif version (`maxifi_digital_final_premium.html`) — that file is superseded.

---

## TYPOGRAPHY (CRITICAL — exact match required)

### Font family
**System sans-serif stack only. Do NOT use Fraunces, Georgia, or any serif font.**

Primary stack:
```
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
             "Helvetica Neue", Helvetica, Arial, "Inter", sans-serif;
```

Optional: import Inter from Google Fonts (weights 400, 500) for cross-device consistency. If used, place it first in the stack. Do not import any other font.

### Font weight rule
**All headings use weight 500. All body uses weight 400.** Never use 600 or 700.

| Element | Weight |
|---|---|
| H1, H2, H3, all headings | 500 |
| Section eyebrows | 500 |
| CTA buttons | 500 |
| Form labels | 400 |
| Body text | 400 |
| Nav links | 400 |
| Logo wordmark | 500 |
| Footer text | 400 |

### Font sizes (production scale)

These scale up the preview proportions to readable production sizes while keeping the editorial tightness:

| Element | Size | Weight | Line height | Letter-spacing |
|---|---|---|---|---|
| Hero H1 | 48px | 500 | 1.18 | -0.02em |
| Section H2 | 32px | 500 | 1.25 | -0.015em |
| Card H3 | 18px | 500 | 1.3 | -0.01em |
| Hero lede | 17px | 400 | 1.6 | 0 |
| Body text | 15-16px | 400 | 1.6 | 0 |
| Small body | 13-14px | 400 | 1.5 | 0 |
| Section eyebrow | 12px | 500 | 1.3 | 0.12em |
| Form label | 12px | 400 | 1.3 | 0 |
| Form input | 14px | 400 | 1.4 | 0 |
| Primary CTA | 14px | 500 | 1 | 0 |
| Nav link | 14px | 400 | 1 | 0 |
| Nav CTA button | 13px | 500 | 1 | 0 |
| Logo wordmark | 15px | 500 | 1 | 0 |
| Footer text | 12px | 400 | 1.5 | 0 |
| Trust-strip pill | 12px | 500 | 1 | 0 |
| Eyebrow caps | 12px | 500 | 1 | 0.12em + uppercase |

### Letter-spacing rule
- Headings: slight negative (-0.01em to -0.02em)
- Eyebrows / labels / caps: positive (0.1em to 0.12em)
- Body text: 0 (none)

---

## COLOUR PALETTE (locked — use ONLY these values)

### Primary
```
--navy: #042C53       /* primary text, hero background, primary buttons on light */
--navy-deep: #031F3D  /* darkest, footer background, hover states on navy */
--navy-soft: #0C447C  /* mid-navy, case visual backgrounds, secondary surfaces */
```

### Amber (brand accent)
```
--amber: #BA7517       /* primary CTA background, accent details */
--amber-light: #FAEEDA /* CTA text on amber background, light accent surfaces */
--amber-mid: #EF9F27   /* eyebrow accent, hover highlights */
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
--mute-soft: #888780   /* footer text, helper text */
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

**Rule: never invent hex values. If a colour need arises that isn't covered, propose adding to this list.**

---

## SPACING & RADIUS

### Border radius (small — editorial feel)
- Buttons: 5px
- Inputs: 4px
- Cards: 8px
- Section wrappers: 8px
- Pill / badge: 3-4px
- Logo mark (M): 4px
- Featured offer outline: same as base (8px), but with 2px border

**Never use 12px+ rounded corners. Keep it tight.**

### Border weight
- Default: 0.5px solid (very subtle)
- Featured/active states: 2px solid amber
- Dividers between content: 0.5px solid rgba

### Section padding (production scale)
- Section padding (vertical): 80px desktop, 48px tablet, 32px mobile
- Section padding (horizontal): handled by `.wrap` container
- Hero padding: 90px top, 100px bottom (more breathing room than other sections)
- Container max-width: 1280px
- Container horizontal padding: 40px desktop, 24px mobile

### Card padding
- Standard card: 24-28px
- Form card: 32-36px
- Hero form card: 36-40px (slightly larger for emphasis)

### Grid gaps
- Card grids (3-column): 20-24px
- Hero columns: 56-64px
- Two-column compare blocks: 0 (touching, no gap)

---

## LAYOUT STRUCTURE

### Container
```css
.wrap { max-width: 1280px; margin: 0 auto; padding: 0 40px; }
.wrap-narrow { max-width: 960px; margin: 0 auto; padding: 0 40px; }
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

## NAVIGATION

### Structure
- Sticky on scroll, top: 0, z-index: 50
- Background: rgba(250, 248, 243, 0.85) with backdrop-filter: blur(12px)
- Border-bottom: 0.5px solid var(--line)
- Padding: 14px 0 (rendered inside `.wrap`)

### Links (between logo and CTA)
- AEO
- Engine
- Work
- Insights

Each link: 14px font, weight 400, color var(--navy), opacity 0.72 default, opacity 1 on hover. Active state: opacity 1 + color var(--amber).

### Primary CTA button (top-right)
- Text: "Get my Scorecard" → links to `#snapshot` (anchor) or `/visibility-snapshot` (page)
- Background: var(--amber)
- Color: var(--amber-light)
- Padding: 7px 13px (or 10px 18px for larger screens)
- Border-radius: 5px
- Font-size: 13px
- Font-weight: 500
- Hover: background #854F0B

---

## CTA BUTTONS (apply consistently)

### Primary
- Background: var(--amber) #BA7517
- Color: var(--amber-light) #FAEEDA
- Padding: 10px 16px (compact) / 14px 22px (hero)
- Border-radius: 5px
- Font-size: 12px (compact) / 14px (hero)
- Font-weight: 500
- Hover: background #854F0B, no transform

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

### Universal CTAs across the site
Primary: "Get my Scorecard" → `#snapshot` (homepage form) or `/visibility-snapshot`
Secondary: "ASW case study" or "See a Live Example →" → `https://aswhub.maxifidigital.com/` (external, new tab)

---

## FORMS

### Field structure
1. Label (12px, weight 400, color var(--muted), margin-bottom 4px)
2. Input (full width, 0.5px border, 4px radius, 7px 9px padding, 11-14px font, cream-deep background)
3. Margin-bottom 9-12px between fields

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
/aeo                     AEO education + sales
/visibility-snapshot     Standalone Snapshot tool (embeds visibilityview.netlify.app)
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

## EXTERNAL LINKS

- Snapshot tool: `https://visibilityview.netlify.app/`
- ASW Hub (live demo): `https://aswhub.maxifidigital.com/`
- Both open in new tab with `rel="noopener noreferrer"`

---

## CONTENT & COPY

### Homepage hero
- Eyebrow: "AI VISIBILITY · EXPERT-LED BRANDS"
- H1: "Your expertise may already be strong. The question is whether AI can find it."
- Lede: "When buyers ask ChatGPT, Perplexity or Google AI about your category, is your brand the answer — or someone else's? We build the visibility layer that makes expert-led brands the source AI cites."
- Primary CTA: "Get my Snapshot"
- Secondary CTA: "ASW case study"

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
✅ Use system sans-serif stack (or Inter as fallback)
✅ Keep border radius small (4-8px max)
✅ Use 0.5px borders for subtlety (1px only on featured/active states)
✅ Letter-space eyebrows and caps positively (0.1-0.12em)
✅ Letter-space headings negatively (-0.01 to -0.02em)
✅ Stick to the locked colour palette
✅ Use the exact preview proportions, scaled to production sizes
✅ Maintain editorial tightness — never blow up font sizes for "marketing impact"

---

## DESIGN RULES — DO NOT

❌ Do not use Fraunces, Georgia, or any serif font
❌ Do not use font-weight 600, 700, 800 or 900
❌ Do not use border-radius larger than 8px (no big rounded corners)
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

- Production: Netlify (`visibility-website.netlify.app`, custom domain `maxifidigital.com`)
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 20
- Environment: production env vars in Netlify dashboard

### Netlify configuration (netlify.toml at root)
- 301 redirect www → apex
- Security headers: X-Frame-Options, X-Content-Type-Options, Referrer-Policy
- Special CSP header for `/visibility-snapshot`: allow `frame-src https://visibilityview.netlify.app`

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

## REVISION HISTORY

- v1: Initial spec with Fraunces serif and weight 600 — SUPERSEDED
- **v2 (current): System sans-serif, weight 500, editorial tight aesthetic, based on `maxifi_homepage_preview__4_.html`**
