import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://manfrominternet.github.io',
  i18n: {
    defaultLocale: 'en',
    base: '/list_motywacyjny',
    locales: ['pl', 'en', 'de', 'ru'],
    routing: {
      prefixDefaultLocale: false
    }
  },

  vite: {
    plugins: [tailwindcss()]
  }
});