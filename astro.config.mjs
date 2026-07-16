// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://maxifidigital.com',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    mdx(),
    // /visibility-value/demo is a private, noindexed demo route — keep it
    // out of the sitemap.
    sitemap({ filter: (page) => !page.includes('/visibility-value/demo') }),
  ],
});