# Kickoff prompt — paste into a new Claude Code chat opened on the ASW HUB repo

> Open the new session on the **ASW Hub repository** (the Netlify static site that serves `aswhub.maxifidigital.com` — e.g. `limleanne-maxifi/<asw-hub-repo>`). The main domain `maxifidigital.com` is a separate Astro + Netlify site with its own repo (`limleanne-maxifi/dashboard`) — do not look for it here.

---

We are fixing AI-readability and structured-data issues on the Airspace World 2026 hub at **aswhub.maxifidigital.com** (this repo, deployed on Netlify). Work on a new branch and open a draft PR when done.

**Fixed facts — do not deviate:**
- Company: Maxifi Digital, **Singapore only** (no London / no second office). Founder: **Lim Le-Anne**. Primary contact: **hello@maxifidigital.com**. Booking: https://lunacal.ai/maxifidigital.
- Event: **Airspace World 2026**, 26–28 May 2026, **Feira Internacional de Lisboa (FIL), Lisbon, Portugal**, organised by **CANSO**. Today is past the event — it has **concluded**.
- Canonical hub URL (locked): **https://aswhub.maxifidigital.com/** (the subdomain, not maxifidigital.com/asw-hub).
- Do not fabricate clients, metrics, speakers, or session details. Use `[INSERT]` where real data is needed and list those gaps in the PR description.

**Tasks (commit incrementally, validate each):**

1. **Bot accessibility (do first).** Confirm nothing blocks AI crawlers — no Netlify Basic-Auth / password protection, no bot-fight rule, no critical content trapped in `<canvas>`/SVG-only/client-only JS. Ensure `robots.txt` exists at site root and explicitly `Allow: /` for: `*`, `GPTBot`, `ChatGPT-User`, `ClaudeBot`, `anthropic-ai`, `PerplexityBot`, `Google-Extended`, `CCBot`, `cohere-ai`, `meta-externalagent`, `Applebot`. End with `Sitemap: https://aswhub.maxifidigital.com/sitemap.xml`. Confirm/produce that sitemap.

2. **Canonical.** Ensure every page has `<link rel="canonical" href="https://aswhub.maxifidigital.com/...">` and all `og:url`, JSON-LD `url`/`@id`, and internal links resolve to the subdomain.

3. **Post-event tense.** Convert all future/upcoming copy to past tense (e.g. "sessions to attend" → "key sessions from ASW 2026"; "join us" → "Maxifi Digital was at"; "will take place" → "took place"; remove countdowns/registration CTAs). Add a banner at the top of the homepage: **"Airspace World 2026 has concluded. This hub preserves all session and speaker content as a permanent reference."**

4. **OG image → 1200×630 PNG.** Replace any SVG OG image with a 1200×630 PNG generated from the existing art (rsvg-convert / Inkscape / ImageMagick). Update head tags: `og:image` (PNG URL), `og:image:type` image/png, `og:image:width` 1200, `og:image:height` 630, `twitter:card` summary_large_image, `twitter:image` (PNG URL).

5. **Event JSON-LD** in the homepage `<head>`:
```html
<script type="application/ld+json">
{ "@context":"https://schema.org","@type":"Event","name":"Airspace World 2026",
  "startDate":"2026-05-26","endDate":"2026-05-28",
  "eventStatus":"https://schema.org/EventScheduled",
  "eventAttendanceMode":"https://schema.org/OfflineEventAttendanceMode",
  "location":{"@type":"Place","name":"Feira Internacional de Lisboa","address":{"@type":"PostalAddress","addressLocality":"Lisbon","addressCountry":"PT"}},
  "organizer":{"@type":"Organization","name":"CANSO","url":"https://canso.org/"},
  "description":"Airspace World 2026 was the global air traffic management event, held 26-28 May 2026 at FIL Lisbon, organised by CANSO. This hub preserves the session and speaker content as a permanent AI-citable reference.",
  "url":"https://aswhub.maxifidigital.com/" }
</script>
```

6. **FAQPage JSON-LD** on the citation-report / FAQ page. Convert the existing on-page Q&A into a `FAQPage` schema block (one `Question`/`acceptedAnswer` per real Q&A already on the page — do not invent answers). Each finding on the report page should be a real `<h2>`/`<h3>` question with an answer-first text block beneath it.

7. **Dead footer links.** The footer's four `/services/*` links (aeo-audit, conference-sprint, ai-knowledge-hub-build, aeo-content-system) likely 404 on the main domain. Repoint to existing pages: AEO Audit → https://maxifidigital.com/visibility-snapshot ; Conference Sprint → https://maxifidigital.com/conference-aeo ; AI Knowledge Hub Build → https://maxifidigital.com/work ; AEO Content System → https://maxifidigital.com/aeo. (Verify each with a status check first.)

8. **`/llms.txt`** at site root: markdown describing the hub (what it is, the event, that content is a permanent reference, Maxifi Digital as author/curator with hello@maxifidigital.com, Singapore), with the canonical URL.

**Validation before PR:**
- All JSON-LD passes the Rich Results Test (https://search.google.com/test/rich-results) with zero errors; straight quotes only, no trailing commas.
- `curl -A "GPTBot"`, `ClaudeBot`, `PerplexityBot` against the deploy preview all return 200.
- `/robots.txt`, `/sitemap.xml`, `/llms.txt` resolve.
- OG PNG is exactly 1200×630 and resolves.

Open a **draft PR** summarising each task, listing any `[INSERT]` gaps, and noting which items still need real event content.
