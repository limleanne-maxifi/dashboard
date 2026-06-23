# Fixing the Google Search Console JSON-LD Parse Error

> ⚠️ **SUPERSEDED — 2026-06-23.** These notes assume `maxifidigital.com` is a **Webflow** site. It is not: the main domain now runs on this **Astro + Netlify** repo (`limleanne-maxifi/dashboard`). This file is kept only as a historical record of the pre-migration site — **do not follow the Webflow steps for the live site.** Apply equivalent changes in the Astro/Netlify codebase instead.

**Error reported:** `Parsing error: Missing '}' or object member name` inside a `<script type="application/ld+json">` block on the homepage.

This means one of the JSON-LD blocks on `https://maxifidigital.com/` is not valid JSON. Follow these steps to locate and fix it.

## Step 1 — Reproduce with the Rich Results Test
1. Open the Google Rich Results Test: https://search.google.com/test/rich-results
2. Enter `https://maxifidigital.com/` and run the live test.
3. In the results, expand the detected items and any errors. The tool reports the **line number** within the rendered JSON-LD that fails to parse.

## Step 2 — Identify the failing line
- Use the line number from the Rich Results Test (or GSC) to find the exact character in the JSON-LD block.
- View the page source (`Ctrl/Cmd+U`) and locate each `<script type="application/ld+json">` block to map the reported line to the right block.

## Step 3 — Check the common causes
The "Missing '}' or object member name" error is almost always one of these:
- **Trailing comma** before a closing `}` or `]` (e.g. `"url": "...",}`). JSON does not allow trailing commas.
- **Curly / smart quotes.** Webflow's Rich Text and some editors silently convert straight quotes `"` into smart quotes `"` `"`. JSON requires straight double quotes only. This is the single most common cause in Webflow.
- **Unescaped quotes inside a string** (e.g. a string containing `"` that isn't written as `\"`).
- **Missing comma between two properties** (e.g. `"a": 1 "b": 2`).
- **Apostrophes auto-converted** to `'` `'` inside text values.

## Step 4 — Validate and repair
1. Copy the failing `<script>` block's JSON (everything between the tags, not the tags themselves) into https://jsonlint.com.
2. Click Validate. JSONLint points to the exact line/character.
3. Fix the issue: remove trailing commas, replace all smart quotes with straight `"`, escape internal quotes as `\"`.
4. Paste the corrected JSON back into Webflow using an **Embed element** (Add panel > Components > Embed) or **Page Settings > Custom Code**, NOT a Rich Text block. Rich Text re-introduces smart quotes.
5. Publish.

## Step 5 — Confirm the fix
1. Re-run the Rich Results Test on `https://maxifidigital.com/`.
2. Confirm zero parse errors and that the expected schema types are detected.
3. In Google Search Console, open the flagged issue and click **Validate Fix** to start Google's re-crawl validation.

## Prevention
- Always author and edit JSON-LD in a **plain-text editor**, never in Webflow Rich Text.
- **Validate before every publish** with jsonlint.com or the Rich Results Test.
- Use a **separate `<script type="application/ld+json">` tag per schema object** so one broken block can't break the others and is easier to isolate.
- Paste JSON-LD only into Webflow **Embed** elements or **Custom Code** head sections.
