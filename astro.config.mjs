// @ts-check
import { defineConfig } from 'astro/config';
// https://astro.build/config
export default defineConfig({
  site: 'https://www.aeuedu.com',
  i18n: {
    defaultLocale: 'zh',
    locales: ['en', 'zh'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
