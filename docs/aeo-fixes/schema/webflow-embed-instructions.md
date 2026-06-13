# Webflow: Where to Paste Each JSON-LD Block

JSON-LD belongs in the page `<head>`. In Webflow:

**Per-page head code:** Open the page in the Designer > click the page name gear / **Pages panel > Page Settings (gear icon)** > scroll to **Custom Code** > **Inside `<head>` tag** > paste the relevant `<script type="application/ld+json">` blocks > **Save** > **Publish**.

> Each schema file in this folder already includes the `<script type="application/ld+json">...</script>` wrapper, except `breadcrumbs.json` (a keyed object — wrap the per-page object in a `<script type="application/ld+json">` tag and remove the `_script_wrapper` helper key before pasting).

Use a **separate `<script>` tag per schema object** so a single error can't break the rest.

## What goes on each page

### Every page (all 5)
- `organization.json`
- That page's breadcrumb from `breadcrumbs.json`

### Homepage `/`
- organization.json
- breadcrumb for `/`
- `faqpage-homepage.json`
- `services.json`

### `/aeo`
- organization.json
- breadcrumb for `/aeo`
- `faqpage-aeo.json`
- `article-aeo.json`

### `/work`
- organization.json
- breadcrumb for `/work`

### `/visibility-snapshot`
- organization.json
- breadcrumb for `/visibility-snapshot`

### `/conference-aeo`
- organization.json
- breadcrumb for `/conference-aeo`

## ASW Hub (separate site, not Webflow)
- `event-aswhub.json` goes in the `<head>` of `aswhub.maxifidigital.com` (Netlify/static — edit the HTML template head directly).

## After pasting
Run https://search.google.com/test/rich-results on each published URL and confirm every schema type is detected with zero errors.
