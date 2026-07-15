# Maxifi Digital — maxifidigital.com

AEO consultancy website for Maxifi Digital. Astro 4 + Tailwind CSS + MDX, deployed on
Netlify (`md-visibility-website`, custom domain `maxifidigital.com`).

**Read `CLAUDE.md` first** — it is the authoritative project brief: the v4.x design
system (rem type tokens, colour palette, gutter/measure layout system), navigation
structure, page inventory, forms, AEO self-requirements, and the enforcement greps
that must return zero before any preview.

## Commands

```sh
npm install        # install dependencies (Node ≥ 22)
npm run dev        # local dev server
npm run build      # production build to ./dist
npm run preview    # preview the production build
```

## Structure

```text
src/
├── components/          HeroLoop + section components (Nav, Footer, FinalCTA, …)
├── layouts/             BaseLayout (head/meta/schema, Nav, Footer)
├── pages/               one .astro file per route
└── styles/globals.css   design tokens + base classes + mobile breakpoint rules
public/                  static assets (logos, founder photo, llms.txt, robots.txt)
docs/                    approved copy and audit notes
```

Key conventions (details in CLAUDE.md):

- Font sizes only via `--text-*` rem tokens — nothing renders below 12px.
- Weights 400/500 only; letter-spacing via the three `--track-*` tokens.
- Horizontal padding via `--gutter` / `--gutter-page`; the left page edge aligns
  nav → hero → sections → footer at every breakpoint.
- Responsive `@media` overrides live in `globals.css`, not page-level `<style>`
  blocks (Astro compiles scoped media queries unreliably).
