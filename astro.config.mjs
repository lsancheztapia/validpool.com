// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  site: 'https://validpool.com',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [partytown({
    config: {
      forward: ["dataLayer.push"], // <--- CRITICAL: Forward the dataLayer
    },
  })]
});