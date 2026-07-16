# Maxifi Digital — Page Copy

All copy for `index.astro` (homepage), reflecting the live site as of May 2026. Pull from here verbatim. British English throughout.

> **Note:** Per CLAUDE.md v3.1, the homepage hero is locked. Treat this doc as the authoritative record of what's shipped; do not edit without an explicit instruction.

---

## §1 · Meta

- **Title:** Maxifi Digital | AI Visibility for Expert-Led Brands
- **Description:** Maxifi Digital helps expert-led brands become the answer AI cites. Free AI Visibility Scorecard across ChatGPT, Claude, Gemini, Perplexity and Google AI.

---

## §2 · Nav (4 links)

- **Logo:** Maxifi Digital
- **Links (4, in order):**
  - Check Your Visibility → `/visibility-snapshot`
  - Understand AEO → `/aeo`
  - Build AI Authority → `/work`
  - Turn Events into Authority → `/conference-aeo`
- **CTA button:** "Get the Report" → `https://visibilityview.netlify.app/` (external, new tab)

---

## §3 · Hero (locked)

**Eyebrow:** AI VISIBILITY FOR EXPERT-LED BRANDS

**Did You Know stat card (left, above hero body):**
- Label: #didyouknow
- Value (rotates): e.g. "25% decline in traditional search by 2026" (Gartner)
- Source: e.g. "Gartner"

**H1:**
> Your buyers are no longer only searching Google
> *They are asking AI:*

**Buyer query list (below H1):**
- "Who are the best providers?"
- "Which solution should we shortlist?"
- "Who has credible expertise in this space?"
- "What companies should we compare?"

**Lede:**
> If AI cannot understand why your company is worth citing, your competitors become easier to recommend. Maxifi Digital turns your expertise, content and proof into structured authority assets that AI engines can find, understand and cite.

**CTAs:**
- Primary: "Get my AI Visibility Snapshot" → `https://visibilityview.netlify.app/`
- Ghost: "See how it works - Airspace World case study" → `https://aswhub.maxifidigital.com/`

**Right column:** `HeroLoop` component (animated 5-engine query simulator). No scorecard form on the homepage hero.

---

## §4 · Sample Snapshot (clickable proof)

**Eyebrow:** SEE A REAL ONE

**H2:** This is what your AI Visibility Snapshot looks like.

**Sub:** Real client. Real scores. Real fixes. Pick your industry to see both the form and the report.

**Tabs:** Commercial Aviation · Aerospace Manufacturing · Space Exploration · MRO

**Form card (left of duo):**
- Header label: AI VISIBILITY SNAPSHOT
- Sector chip: (e.g.) COMMERCIAL AVIATION
- Field 1: YOUR WEBSITE / placeholder `yourcompany.com`
- Field 2: YOUR AVIATION SPECIALISM / placeholder `e.g. CNS/ATM, airport ops, MRO`
- Field 3: A BUYER QUESTION YOU SHOULD WIN / placeholder `e.g. Who are the leading CNS/ATM providers in Europe?`
- Submit: "Get my AI Visibility Snapshot →" → `https://visibilityview.netlify.app/`

**Report card (right of duo, also clickable to external tool):** mock report visualisation per industry.

---

## §5 · Problem (The Shift)

**Eyebrow:** THE SHIFT

**H2:** Most expert content is invisible to AI — at the exact moment buyers are asking better questions.

**Card 01**
- Title: Buyers ask AI first
- Body: 67% of B2B buyers prefer a rep-free experience. ChatGPT is the new shortlist builder.

**Card 02**
- Title: AI cites structure
- Body: Retrieval rewards entity-rich, answer-formatted content. Most expert content is none of these.

**Card 03**
- Title: Absence costs trust
- Body: Every uncited answer is a competitor's earned trust moment. Every generic citation is yours, lost.

---

## §6 · SEO vs AEO

**Eyebrow:** CATEGORY

**H2:** SEO got you ranked. AEO gets you cited.

**SEO column:** Ranks your page · Targets keywords · Optimises for clicks · Lives on Google · Output: traffic

**AEO column:** Cites your answer · Targets buyer questions · Optimises for retrieval · Lives across 5 AI engines · Output: authority

---

## §7 · Offer Ladder

**Eyebrow:** THE OFFER LADDER

**H2:** Three ways to work with Maxifi.

**Card 1 — Snapshot** (Start here)
- Features: The 3 highest-leverage fixes · Where AI cites you today · Top competitors named · 5 buyer questions tested
- CTA: "Run my Visibility Snapshot →" → `https://visibilityview.netlify.app/`

**Card 2 — Sprint** (featured, Done with you)
- Features: Answer-ready assets shipped · Schema + Q&A layer built · Citation lift in 30 days · Senior strategist embedded
- CTA: "Scope my Sprint"

**Card 3 — Engine** (Recurring)
- Features: Quarterly Snapshots · Weekly citation monitoring · Content shipped quarterly · Monthly strategy review
- CTA: "See the Engine" → `/work`

---

## §8 · Case Study (CANSO · Airspace World 2026)

**Eyebrow:** FEATURED CASE

**H2:** How one industry event became an AI-searchable authority system.

**Case eyebrow:** CANSO · AIRSPACE WORLD 2026

**Case title:** From PDF graveyard to citation engine.

**Case body:** We turned a 3-day aviation conference into a structured AI Knowledge Hub. Sessions, speakers and themes became answer-ready assets that keep earning citations long after the room empties.

**Metrics:**
- 47 — Q&A pairs
- 92% — Schema coverage
- 3× — Citation growth

**Score widget (right panel):**
- Label: AEO VISIBILITY SCORE
- Score: 78 / 100

*Note: no CTAs in this section on live. ASW Hub linked from hero ghost CTA.*

---

## §9 · Newsletter (The Cited Brief)

**Eyebrow:** NEWSLETTER · WEEKLY

**Title:** The Cited Brief

**Body:** One Friday email. One buyer question AI is getting wrong, one move to fix it, one example from the field. 4-minute read.

**Form fields:**
1. Placeholder: `your@work-email.com` (email, required)
2. Placeholder: `Role: Head of Marketing` (text)

**Submit:** Subscribe

---

## §10 · Stats Trust Strip

**Eyebrow:** THE AEO SHIFT, IN NUMBERS

**H2:** Why this matters now.

**Stats grid:** rendered from the `stats-strip` block in `index.astro`.

---

## §11 · Final CTA

**H2:** Find out what AI says about your business — in 5 minutes.

**CTAs:**
- Primary: "Run my Visibility Snapshot →" → `https://visibilityview.netlify.app/`
- Ghost: "Book a Snapshot" → `https://visibilityview.netlify.app/`

---

## §12 · Footer

**Tagline:** The visibility layer for expert-led brands in the AI search era.

**Services column** (all active links):
- Visibility Snapshot → `/visibility-snapshot`
- Executive AI Visibility → `/executive`
- Enterprise → `/work`
- Events → `/conference-aeo`
- Aviation Event AEO → `/aeo-aviation-events`
- AEO Strategy → `/aeo`

**Resources column:**
- Insights *(disabled / placeholder)*
- Revenue at Risk → `/revenue-at-risk`
- ASW Hub ↗ → `https://aswhub.maxifidigital.com/` (external)

**Company column:**
- Method *(disabled / placeholder)*
- About → `/about`
- Contact → `/about#contact` (GET IN TOUCH section; never `mailto:` — fails silently without a mail client)

**Bottom bar:**
- Left: © 2026 Maxifi Digital
- Right: Singapore · Working globally

---

## Routes summary

| Route | Source | Purpose |
|---|---|---|
| `/` | `src/pages/index.astro` | Homepage |
| `/visibility-snapshot` | `src/pages/visibility-snapshot.astro` | Free Snapshot landing |
| `/aeo` | `src/pages/aeo.astro` | Understand AEO |
| `/aeo-aviation-events` | `src/pages/aeo-aviation-events.astro` | AEO for aviation & aerospace events (B8 capture) |
| `/executive` | `src/pages/executive.astro` | Executive AI Visibility |
| `/work` | `src/pages/work/index.astro` | Build AI Authority (Visibility Engine product) |
| `/work/airspaceworld` | `src/pages/work/airspaceworld.astro` | CANSO · Airspace World case study |
| `/conference-aeo` | `src/pages/conference-aeo.astro` | Conference AEO sprint |
| `/revenue-at-risk` | `src/pages/revenue-at-risk.astro` | Revenue at risk · the MAXIFI model (B10 capture) |
| `/visibility-value` | `src/pages/visibility-value/index.astro` | Visibility Value Model hub — captioned explainer + interactive calculator |
| `/visibility-value/demo` | `src/pages/visibility-value/demo.astro` | Private customisable demo links (noindex, excluded from sitemap; `?build=1` opens the link builder) |
| `/insights` | `src/pages/insights/index.astro` | Insights hub |
| `/insights/aeo-vs-seo` | `src/pages/insights/aeo-vs-seo.astro` | Article: AEO vs SEO |
| `/about` | `src/pages/about.astro` | About + founder entity + GET IN TOUCH (`#contact`) |
| `/contact` | `src/pages/contact.astro` | Contact details page |
| `/thanks` | `src/pages/thanks.astro` | Form-submission thank-you |
| `/privacy-policy` | `src/pages/privacy-policy.astro` | Legal |
| `/terms-of-service` | `src/pages/terms-of-service.astro` | Legal |

**Removed:** `/visibility-engine` (content moved to `/work`), `/method` (never built). The old case-studies index at `/work` was replaced by the Build AI Authority page.
