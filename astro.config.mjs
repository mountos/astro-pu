// @ts-check
import { defineConfig } from 'astro/config';
import rehypeExternalLinks from './src/plugins/rehype-external-links.mjs';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // IMPORTANT: Replace `https://example.com` with your actual domain.
  site: 'https://example.com',
  integrations: [sitemap()],
  markdown: {
    rehypePlugins: [rehypeExternalLinks],
  },
});
