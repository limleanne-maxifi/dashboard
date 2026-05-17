# CLAUDE.md — Maxifi Digital

## What this project is
AEO consultancy website for Maxifi Digital.
Stack: Astro 4 + Tailwind CSS + MDX. Deploy target: Netlify.
Live domain: maxifidigital.com

## Brand colours (use ONLY these — no other hex values)
--navy: #042C53
--navy-deep: #031F3D
--navy-soft: #0C447C
--amber: #BA7517
--amber-light: #FAEEDA
--amber-mid: #EF9F27
--cream: #FAF8F3
--cream-deep: #F1EFE8
--ink: #1a1a1a
--muted: #5F5E5A
--line: rgba(4,44,83,0.08)
--signal: #1D9E75

## Typography
- Headings (h1, h2, h3): Fraunces, weight 400 or 500, letter-spacing -0.025em
- Body: Inter, weight 400 or 500
- Labels/eyebrows/mono: JetBrains Mono, weight 400 or 500
- Load all three from Google Fonts in BaseLayout.astro

## Logomark
SVG path: M10 12 L10 38 L18 12 L24 28 L30 12 L36 38
stroke-width: 2.4, stroke-linecap: round, stroke-linejoin: round
viewBox: 0 0 48 48
Use stroke="currentColor" so it inherits colour from parent

## Logo files
- Light backgrounds: /public/logos/maxifi-logo-black.png height 32px
- Dark backgrounds: /public/logos/maxifi-logo-white.png height 32px

## Navigation (every page)
Links: AEO | Visibility Engine | Conference AEO | Work | Insights
Primary CTA button: "Check My AI Visibility →" → links to /visibility-snapshot
Sticky on scroll, backdrop-blur background

## CTAs (apply consistently)
Primary (amber): "Check My AI Visibility" → /visibility-snapshot
Secondary (ghost): "See a Live Example →" → https://aswhub.maxifidigital.com/
Every page must end with a FinalCTA section before the footer

## External links
Snapshot tool: https://visibilityview.netlify.app/
ASW Hub: https://aswhub.maxifidigital.com/

## Pages to build
/ — homepage
/aeo — AEO education + sales
/visibility-snapshot — standalone snapshot tool page (embeds visibilityview.netlify.app)
/visibility-engine — engine sales page
/conference-aeo — conference offer + video
/work — case study index
/work/[slug] — individual case study
/insights — blog + Cited Brief newsletter hub
/insights/[slug] — article
/method — how Maxifi works
/about — about page

## AEO requirements (every page)
- Unique <title> (60 chars max) and <meta description> (155 chars max)
- One h1 per page only
- Canonical URL
- OG image, og:title, og:description
- JSON-LD: Organization + WebSite on homepage
- JSON-LD: Article schema on /insights/[slug]
- JSON-LD: FAQPage on any page with FAQ section
- JSON-LD: Product on /visibility-engine
- All images: explicit width, height, descriptive alt text

## Forms
- Use Netlify Forms (data-netlify="true")
- Every form needs: name attribute, honeypot field, hidden form-name field
- On submit: replace form with thank-you message (no page redirect)
- Snapshot form hidden fields: source-page, utm_source, utm_campaign
- Newsletter form fields: email (required), role (optional)

## Design rules
- No animation libraries — CSS transitions only (0.2s ease)
- No component libraries (no shadcn, no headlessui)
- Tailwind utility classes only — no CSS modules
- No client-side JS unless inside an Astro island (client:load or client:visible)
- No lorem ipsum — use copy from /docs/copy.md
- Sections use max-width 1240px centered wrapper
- Section padding: 100px 0 on desktop, 60px 0 on mobile

## Do not
- Do not hardcode hex colours — use CSS variables
- Do not use <div> where a semantic element fits
- Do not skip alt text on any image
- Do not add tracking scripts without explicit instruction
