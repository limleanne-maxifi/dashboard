# ASW Hub — Replace SVG OG Image with 1200×630 PNG

**Problem:** The ASW Hub (`aswhub.maxifidigital.com`) uses an SVG as its Open Graph / Twitter image. Social platforms and many AI/link unfurlers do **not** render SVG OG images — they require a raster format (PNG or JPG) at 1200×630.

## Fix

### 1. Produce a 1200×630 PNG from the existing SVG
Use any one of these (run locally where the SVG lives, e.g. `~/aswhub`):

```bash
# Option A — rsvg-convert (librsvg)
rsvg-convert -w 1200 -h 630 og-image.svg -o og-image.png

# Option B — Inkscape
inkscape og-image.svg --export-type=png --export-width=1200 --export-height=630 -o og-image.png

# Option C — ImageMagick (set density for crisp output)
convert -density 144 -background none og-image.svg -resize 1200x630 -flatten og-image.png
```

Confirm the result is exactly 1200×630 and under ~1 MB:
```bash
identify og-image.png    # should report 1200x630
```

Place `og-image.png` in the site's static/public directory (same place the SVG lives, e.g. `/public/` or site root) so it deploys to `https://aswhub.maxifidigital.com/og-image.png`.

### 2. Update the meta tags in the site `<head>`
Replace the SVG references with the PNG. Exact tags to change:

```html
<!-- REMOVE / REPLACE these -->
<meta property="og:image" content="https://aswhub.maxifidigital.com/og-image.svg">
<meta name="twitter:image" content="https://aswhub.maxifidigital.com/og-image.svg">

<!-- WITH these -->
<meta property="og:image" content="https://aswhub.maxifidigital.com/og-image.png">
<meta property="og:image:type" content="image/png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="https://aswhub.maxifidigital.com/og-image.png">
```

### 3. Validate
- Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/ (enter the hub URL, click "Scrape Again")
- X/Twitter: post the URL in a private draft or use a card validator to confirm the large image renders.
