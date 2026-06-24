// @ts-check
import { defineConfig } from 'astro/config';
import rehypeRaw from 'rehype-raw';

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkRehype: { allowDangerousHtml: true },
    rehypePlugins: [rehypeRaw],
  },
  i18n: {
    defaultLocale: 'zh',
    locales: ['en', 'zh'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
