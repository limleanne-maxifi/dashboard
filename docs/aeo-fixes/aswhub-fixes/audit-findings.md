# ASW Hub — Audit Findings & Review Register
_Chief-of-Staff review · prepared 2026-06-13 · status: live-crawl pending egress access_

## 0. Surface map (verify first)
Search reveals the hub content exists on **two surfaces**:
- `aswhub.maxifidigital.com` — Netlify static subdomain (the "hub")
- `maxifidigital.com/asw-hub` — a page on the main Webflow site, titled _"Airspace World 2026 AEO Hub | ATM, AAM & Future Skies | Maxifi Digital"_

**This is the single most important thing to resolve.** Two live URLs serving the same content split your citation signal and can read as duplicate content — the opposite of what an AEO hub should do. Decide which is canonical and make the other defer to it.

---

## CRITICAL (fix before any CANSO demo)

### C1 — Confirm AI crawlers get HTTP 200, not 403/blocked
An AEO hub that bot-blocks AI crawlers is self-defeating. Verify the live subdomain returns **200** to each AI user-agent (not just browsers):
```bash
for UA in \
  "Mozilla/5.0 ... compatible; GPTBot/1.1; +https://openai.com/gptbot" \
  "Mozilla/5.0 ... ClaudeBot/1.0; +https://anthropic.com/claudebot" \
  "Mozilla/5.0 ... PerplexityBot/1.0; +https://perplexity.ai/bot" \
  "Mozilla/5.0 ... Google-Extended"; do
  echo -n "$UA => "; curl -s -o /dev/null -w "%{http_code}\n" -A "$UA" https://aswhub.maxifidigital.com/
done
```
All must be `200`. Also confirm no Netlify password/Basic-Auth, no Cloudflare bot-fight blocking these agents, and that `robots.txt` on the subdomain explicitly allows them (mirror `config/robots.txt`).

### C2 — One canonical surface — DECISION LOCKED: `aswhub.maxifidigital.com`
Canonical = the **subdomain** `aswhub.maxifidigital.com`. Actions:
1. On the Webflow page `maxifidigital.com/asw-hub`: add `<link rel="canonical" href="https://aswhub.maxifidigital.com/">` in Page Settings > head, **and** set it to 301-redirect to the subdomain (Webflow Site Settings > Publishing > 301 redirects: `/asw-hub` → `https://aswhub.maxifidigital.com/`). Pick redirect over canonical-only if `/asw-hub` has no unique purpose.
2. Every internal/external link and the Event JSON-LD `url` must point to the subdomain.
3. Submit the subdomain in GSC as its own property; request removal/recrawl of the duplicate `/asw-hub` URL.
4. All schema `@id`/`url` and OG `og:url` on the hub resolve to `https://aswhub.maxifidigital.com/...`.

### C3 — Citation report page is structured for retrieval (verify on crawl)
The report page is the proof asset. It must be machine-parseable. Confirm it has:
- Real `<h1>`/`<h2>` headings (not images/canvas text)
- Each finding as a **question → answer** block (eligible for `FAQPage` schema)
- **Verbatim** engine answers shown as quoted text with the engine named and a date
- Named entities spelled out (CANSO, the ANSP, the vendors) — not pronouns
- Source attributions in text, not only in a chart
- No critical content locked inside `<canvas>`, SVG-only, or client-rendered JS that crawlers won't execute

---

## HIGH

### H1 — Post-event tense
Event concluded 28 May 2026; copy still reads future ("new session briefings", etc.). Apply `post-event-tense-updates.md` and add the concluded banner.

### H2 — OG image is SVG
Replace with 1200×630 PNG. Apply `og-image-fix.md`. (Social + many unfurlers won't render SVG.)

### H3 — Event JSON-LD
Add `schema/event-aswhub.json` to the hub `<head>` (`eventStatus`, dates, CANSO organizer, FIL Lisbon location). Pairs with `FAQPage` schema on the report page.

### H4 — Dead `/services/` footer links
Four `/services/*` URLs likely 404. Apply `dead-links-audit.md` (repoint to `/visibility-snapshot`, `/conference-aeo`, `/work`, `/aeo`).

---

## MEDIUM

- **M1 — Subdomain `llms.txt`:** add a hub-specific `/llms.txt` summarising the event, sources, and Maxifi as author/curator.
- **M2 — Sitemap:** confirm the subdomain has its own `sitemap.xml` and that it's referenced in its `robots.txt`.
- **M3 — Meta/title/description:** unique, answer-first, past-tense, ≤60/≤155 chars per page.
- **M4 — Internal linking:** every session/recap/FAQ should link to the relevant Maxifi service page (Conference AEO) so the hub feeds pipeline, not just authority.
- **M5 — Freshness signal:** add `dateModified` and a visible "last updated" so engines treat the recap as current reference, not stale.

---

## What I still need to verify (blocked by egress)
1. Live HTTP status to AI user-agents (C1).
2. Whether the report page content is in real text vs canvas/JS (C3).
3. Exact footer URLs and current tense strings (H1/H4).
4. Whether `aswhub` or `/asw-hub` is currently canonical (C2).

Unblock by adding the host to this environment's egress allowlist, or paste the report-page HTML.
