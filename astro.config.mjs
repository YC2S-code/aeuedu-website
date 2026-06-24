// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkRehype: { allowDangerousHtml: true },
  },
  i18n: {
    defaultLocale: 'zh',
    locales: ['en', 'zh'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
