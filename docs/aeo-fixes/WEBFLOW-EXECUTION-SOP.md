# Main Domain (maxifidigital.com / Webflow) — Execution SOP

> ⚠️ **SUPERSEDED — 2026-06-23.** These notes assume `maxifidigital.com` is a **Webflow** site. It is not: the main domain now runs on this **Astro + Netlify** repo (`limleanne-maxifi/dashboard`). This file is kept only as a historical record of the pre-migration site — **do not follow the Webflow steps for the live site.** Apply equivalent changes in the Astro/Netlify codebase instead.
_Self-contained. Manual paste in Webflow Designer — not a code repo. Do in this order._

> Webflow navigation reused below:
> **Per-page head:** Pages panel → page's gear (Settings) → Custom Code → "Inside `<head>` tag" → paste → Save → **Publish**.
> **Site-wide:** Site Settings → Custom Code (head/footer) or → SEO (robots.txt).
> Paste JSON-LD only into Custom Code / Embed elements — **never Rich Text** (it converts `"`→ smart quotes and breaks JSON). Use a separate `<script>` per object.

---

## PRIORITY 0 — Fix the GSC parse error on the homepage (do first)
1. https://search.google.com/test/rich-results → enter `https://maxifidigital.com/` → run.
2. Note the failing line in the JSON-LD. Most likely cause on Webflow: **smart/curly quotes** (`"` `"`) or a **trailing comma**.
3. Copy the offending `<script>` block into https://jsonlint.com, fix (straight quotes only, no trailing commas, escape internal `"` as `\"`).
4. Paste the corrected block back via **Custom Code / Embed**, not Rich Text. Publish.
5. Re-run Rich Results Test → then in GSC click **Validate Fix**.
**Prevention:** edit JSON-LD in a plain-text editor; one `<script>` per schema; validate before every publish.

---

## STEP 1 — robots.txt (Site Settings → SEO → Custom robots.txt)
Paste, Save, Publish. Verify at `https://maxifidigital.com/robots.txt`.
```
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: CCBot
Allow: /

User-agent: cohere-ai
Allow: /

User-agent: meta-externalagent
Allow: /

User-agent: Applebot
Allow: /

User-agent: Applebot-Extended
Allow: /

Sitemap: https://maxifidigital.com/sitemap.xml
```
Also enable **Auto-generate sitemap** in the same SEO tab.

---

## STEP 2 — /llms.txt  ⚠ Webflow limitation
Webflow will **not** serve a raw `/llms.txt` (`text/plain`) at root. Options:
- **A (recommended):** serve it from the DNS/edge layer — a **Cloudflare Worker** (or Netlify proxy) that returns the markdown below at `https://maxifidigital.com/llms.txt` with `Content-Type: text/plain`.
- **B:** host the file on a static host you control and 301 `maxifidigital.com/llms.txt` → it.
- **C (weak):** a Webflow page at `/llms` — works as a URL but not as a true root `.txt`. Use only if A/B aren't available.

Content to serve:
```
# Maxifi Digital

> Maxifi Digital is a Singapore-based Answer Engine Optimisation (AEO) consultancy that makes expert-led brands the source AI engines cite. We help companies in aviation, professional services, law, and think tanks get retrieved, understood, and quoted by name across ChatGPT, Claude, Perplexity, Gemini, and Copilot. Founded by Lim Le-Anne.

## Services
- [Visibility Snapshot](https://maxifidigital.com/visibility-snapshot) — A free AEO audit that maps your citation share across five AI engines and 25–50 buyer questions, scores you against your sector median, and identifies the three highest-leverage fixes.
- [Visibility Engine](https://maxifidigital.com/work) — An ongoing AEO programme that turns your expertise into structured, citable authority through a continuous Snapshot → Sprint → Monitor loop.
- [Conference AEO Sprint](https://maxifidigital.com/conference-aeo) — Converts event sessions, panels, and speakers into permanent AI citation assets so engines keep citing your brand long after the event ends.

## Key Concepts
- AEO (Answer Engine Optimisation): becoming a source AI engines retrieve, understand, and quote by name. Unlike SEO, which ranks pages in a list, AEO optimises for inclusion in AI-generated answers. It competes for citation share, not clicks.
- Citation share: the proportion of relevant AI answers in your category that name your brand, measured across engines and buyer questions and benchmarked to your sector median.
- Visibility Engine: Maxifi Digital's ongoing programme that grows citation share month over month via a continuous Snapshot → Sprint → Monitor loop.
- Conference AEO: capturing the expertise generated at conferences and structuring it so AI engines cite it permanently.

## Case Study
- Airspace World 2026 hub — a permanent, AI-citable reference preserving session and speaker content from Airspace World 2026 (global ATM event, 26–28 May 2026, FIL Lisbon, organised by CANSO). https://aswhub.maxifidigital.com/

## Contact
- Email: hello@maxifidigital.com
- Location: Singapore (60 Paya Lebar Road, #07-54, Paya Lebar Square, Singapore 409051)
- Booking: https://lunacal.ai/maxifidigital

## Founder
Lim Le-Anne is the founder of Maxifi Digital. Drawing from a background in communications, PR and marketing strategy, she built Maxifi Digital after observing that AI engines cannot cite expertise that isn't structured for retrieval.
```

---

## STEP 3 — Organization schema on EVERY page
Paste into the head of all 5 pages (/, /aeo, /work, /visibility-snapshot, /conference-aeo). For site-wide, you may instead place it once in **Site Settings → Custom Code → Head**.
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://maxifidigital.com/#organization",
  "name": "Maxifi Digital",
  "url": "https://maxifidigital.com/",
  "logo": { "@type": "ImageObject", "url": "https://maxifidigital.com/logos/maxifi-logo-black.png" },
  "description": "Maxifi Digital is a Singapore-based Answer Engine Optimisation (AEO) consultancy that makes expert-led brands the source AI engines cite.",
  "founder": { "@type": "Person", "name": "Lim Le-Anne" },
  "address": { "@type": "PostalAddress", "streetAddress": "60 Paya Lebar Road, #07-54, Paya Lebar Square", "addressLocality": "Singapore", "postalCode": "409051", "addressCountry": "SG" },
  "contactPoint": { "@type": "ContactPoint", "email": "hello@maxifidigital.com", "contactType": "customer support" },
  "sameAs": [ "https://www.linkedin.com/company/maxifi-digital/" ],
  "knowsAbout": [ "Answer Engine Optimisation", "AI Search Visibility", "Generative Engine Optimisation", "AEO Strategy", "Conference AEO" ]
}
</script>
```

---

## STEP 4 — Per-page breadcrumb (one per page head)
**/ (home):**
```html
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://maxifidigital.com/"}]}
</script>
```
**/aeo:**
```html
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://maxifidigital.com/"},{"@type":"ListItem","position":2,"name":"Understand AEO","item":"https://maxifidigital.com/aeo"}]}
</script>
```
**/work:**
```html
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://maxifidigital.com/"},{"@type":"ListItem","position":2,"name":"Work","item":"https://maxifidigital.com/work"}]}
</script>
```
**/visibility-snapshot:**
```html
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://maxifidigital.com/"},{"@type":"ListItem","position":2,"name":"Visibility Snapshot","item":"https://maxifidigital.com/visibility-snapshot"}]}
</script>
```
**/conference-aeo:**
```html
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://maxifidigital.com/"},{"@type":"ListItem","position":2,"name":"Conference AEO","item":"https://maxifidigital.com/conference-aeo"}]}
</script>
```

---

## STEP 5 — Homepage `/` adds: FAQPage + Services
```html
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
{"@type":"Question","name":"What is Answer Engine Optimisation (AEO)?","acceptedAnswer":{"@type":"Answer","text":"AEO is the discipline of becoming a source AI engines retrieve, understand, and quote by name. Unlike SEO which ranks pages in a list, AEO optimises for inclusion in AI-generated answers across ChatGPT, Claude, Perplexity, Gemini, and Copilot."}},
{"@type":"Question","name":"How is AEO different from SEO?","acceptedAnswer":{"@type":"Answer","text":"SEO ranks pages in a search results list. AEO gets you cited in synthesised AI answers where there is no list. SEO competes for clicks; AEO competes for citation share."}},
{"@type":"Question","name":"What does the Visibility Snapshot show?","acceptedAnswer":{"@type":"Answer","text":"A free audit that maps your citation share across five AI engines and 25 to 50 buyer questions, scores you against your sector median, and identifies the three highest-leverage fixes."}}
]}
</script>
<script type="application/ld+json">
[
{"@context":"https://schema.org","@type":"Service","name":"Visibility Snapshot","provider":{"@type":"Organization","@id":"https://maxifidigital.com/#organization","name":"Maxifi Digital"},"description":"The Visibility Snapshot is a free AEO audit that maps your citation share across five AI engines and 25 to 50 buyer questions. It scores you against your sector median and surfaces the three highest-leverage fixes.","url":"https://maxifidigital.com/visibility-snapshot","areaServed":["Singapore","Global"]},
{"@context":"https://schema.org","@type":"Service","name":"Visibility Engine","provider":{"@type":"Organization","@id":"https://maxifidigital.com/#organization","name":"Maxifi Digital"},"description":"The Visibility Engine is an ongoing AEO programme that turns your expertise into structured, citable authority across AI engines. It runs a continuous Snapshot, Sprint, and Monitor loop so your citation share grows month over month.","url":"https://maxifidigital.com/work","areaServed":["Singapore","Global"]},
{"@context":"https://schema.org","@type":"Service","name":"Conference AEO Sprint","provider":{"@type":"Organization","@id":"https://maxifidigital.com/#organization","name":"Maxifi Digital"},"description":"The Conference AEO Sprint converts the expertise from your event sessions, panels, and speakers into permanent AI citation assets. It captures conference content and structures it so AI engines cite your brand long after the event ends.","url":"https://maxifidigital.com/conference-aeo","areaServed":["Singapore","Global"]}
]
</script>
```

---

## STEP 6 — /aeo adds: FAQPage + Article
```html
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
{"@type":"Question","name":"What is AEO?","acceptedAnswer":{"@type":"Answer","text":"AEO (Answer Engine Optimisation) is the practice of structuring your expertise so AI engines can retrieve, understand, and cite it by name. It optimises for inclusion in the synthesised answer an AI gives, not for a ranked position in a blue-link list."}},
{"@type":"Question","name":"How do AI citations compound?","acceptedAnswer":{"@type":"Answer","text":"Each time an AI engine cites your brand, it reinforces the association between your name and your category in future answers. Citations compound because models and the sources they draw on increasingly treat already-cited entities as authoritative, widening your lead over time."}},
{"@type":"Question","name":"What engines does AEO target?","acceptedAnswer":{"@type":"Answer","text":"AEO targets the five engines buyers now use to screen vendors: ChatGPT, Claude, Perplexity, Gemini, and Copilot."}},
{"@type":"Question","name":"What does AEO do for pipeline?","acceptedAnswer":{"@type":"Answer","text":"AEO puts you on the AI-generated shortlist before a buyer ever visits your site, builds authority by getting you cited as the named source, and compresses the sales cycle because prospects arrive already convinced of your expertise."}},
{"@type":"Question","name":"How is AEO different from SEO?","acceptedAnswer":{"@type":"Answer","text":"SEO is about ranking a page in a list of results. AEO is about retrieval and citation inside an AI-generated answer where no list exists. One competes for the click; the other competes to be the quoted source."}}
]}
</script>
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"Article","headline":"SEO got you ranked. AEO gets you cited.","description":"Answer Engine Optimisation makes your brand the source AI engines retrieve, understand, and quote by name. Learn how AEO differs from SEO and why citation share is the new visibility metric.","author":{"@type":"Person","name":"Lim Le-Anne"},"publisher":{"@type":"Organization","@id":"https://maxifidigital.com/#organization","name":"Maxifi Digital","logo":{"@type":"ImageObject","url":"https://maxifidigital.com/logos/maxifi-logo-black.png"}},"datePublished":"2026-01-15","dateModified":"2026-05-01","url":"https://maxifidigital.com/aeo","image":"https://maxifidigital.com/og-default.png","mainEntityOfPage":{"@type":"WebPage","@id":"https://maxifidigital.com/aeo"}}
</script>
```
_/work, /visibility-snapshot, /conference-aeo: Organization + their breadcrumb only (Steps 3–4)._

---

## STEP 7 — Twitter card tags (per-page head)
Add the matching block to each page (image = `https://maxifidigital.com/og-default.png`).

**/ home:**
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Maxifi Digital — Make AI Engines Cite Your Brand">
<meta name="twitter:description" content="Singapore-based AEO consultancy that makes expert-led brands the source ChatGPT, Claude, Perplexity, Gemini, and Copilot cite by name.">
<meta name="twitter:image" content="https://maxifidigital.com/og-default.png">
```
**/aeo:**
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="What is AEO? SEO Got You Ranked. AEO Gets You Cited.">
<meta name="twitter:description" content="Answer Engine Optimisation makes your brand the source AI engines retrieve, understand, and quote by name. Learn how AEO differs from SEO.">
<meta name="twitter:image" content="https://maxifidigital.com/og-default.png">
```
**/work:**
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="The Visibility Engine — Maxifi Digital">
<meta name="twitter:description" content="An ongoing AEO programme that turns your expertise into citable authority and grows your citation share across AI engines month over month.">
<meta name="twitter:image" content="https://maxifidigital.com/og-default.png">
```
**/visibility-snapshot:**
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Free Visibility Snapshot — Are AI Engines Citing You?">
<meta name="twitter:description" content="A free AEO audit mapping your citation share across five AI engines and 25–50 buyer questions, with the three highest-leverage fixes.">
<meta name="twitter:image" content="https://maxifidigital.com/og-default.png">
```
**/conference-aeo:**
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Conference AEO Sprint — Turn Events into AI Citations">
<meta name="twitter:description" content="Convert your conference sessions, panels, and speakers into permanent AI citation assets that keep engines citing your brand after the event.">
<meta name="twitter:image" content="https://maxifidigital.com/og-default.png">
```

---

## STEP 8 — New pages /about and /contact
Create two Webflow pages. Put the body copy in the page; put the JSON-LD in the page's Custom Code head.

**/about** — H1 "About Maxifi Digital", then sections: entity intro · Founder (Lim Le-Anne) · What we do (Visibility Engine: Snapshot→Sprint→Monitor) · Where we work (Singapore, globally) · Contact. _(Full copy in `pages/about.html`.)_

**/contact** — H1 "Contact Maxifi Digital", email hello@maxifidigital.com, booking https://lunacal.ai/maxifidigital, Singapore address. Add this in the page head:
```html
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"Organization","@id":"https://maxifidigital.com/#organization","name":"Maxifi Digital","url":"https://maxifidigital.com/","contactPoint":{"@type":"ContactPoint","email":"hello@maxifidigital.com","contactType":"customer support","areaServed":["SG","Global"],"availableLanguage":"English"},"address":{"@type":"PostalAddress","streetAddress":"60 Paya Lebar Road, #07-54, Paya Lebar Square","addressLocality":"Singapore","postalCode":"409051","addressCountry":"SG"}}
</script>
```

---

## VALIDATION (after publish)
- [ ] Rich Results Test passes on all 5 pages + /about + /contact — zero errors.
- [ ] GSC homepage issue → Validate Fix.
- [ ] `/robots.txt` shows AI-crawler allows + Sitemap line.
- [ ] `/llms.txt` resolves with `text/plain` (via Cloudflare/Netlify per Step 2).
- [ ] og-default.png resolves and is 1200×630; Facebook Debugger + X validator render the large card.
- [ ] No smart/curly quotes in any published JSON-LD.
- [ ] Singapore only · Lim Le-Anne · hello@maxifidigital.com everywhere.
