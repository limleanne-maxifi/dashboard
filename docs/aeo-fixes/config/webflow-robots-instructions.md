# Webflow: Setting a Custom robots.txt

> ⚠️ **SUPERSEDED — 2026-06-23.** These notes assume `maxifidigital.com` is a **Webflow** site. It is not: the main domain now runs on this **Astro + Netlify** repo (`limleanne-maxifi/dashboard`). This file is kept only as a historical record of the pre-migration site — **do not follow the Webflow steps for the live site.** Apply equivalent changes in the Astro/Netlify codebase instead.

Webflow lets you publish a custom `robots.txt` at your root domain.

## Steps
1. Open your Webflow project.
2. Go to **Site Settings** (the site name dropdown, top-left of the Designer, or the project tile menu in the Dashboard) > **Settings**.
3. Open the **SEO** tab.
4. Scroll to the **Custom robots.txt** field.
5. Paste the full contents of `config/robots.txt` into the field.
6. Click **Save Changes**.
7. **Publish** the site (Custom code and SEO settings only go live on publish).

## Verify
- Visit `https://maxifidigital.com/robots.txt` and confirm it shows the AI-crawler allow rules and the `Sitemap:` line.
- Note: the `robots.txt` must be served from the **root domain** (`maxifidigital.com`), which Webflow handles automatically once published.

## Notes
- Webflow serves only one `robots.txt` for the whole site — there is no per-page option.
- The `Sitemap:` directive should point to Webflow's auto-generated sitemap at `https://maxifidigital.com/sitemap.xml` (enable **Auto-generate sitemap** in the same SEO tab if it isn't already on).
