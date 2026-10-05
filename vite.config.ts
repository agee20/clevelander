import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        menu: path.resolve(__dirname, 'menu.html'),
        drinks: path.resolve(__dirname, 'drinks.html'),
        parties: path.resolve(__dirname, 'private-parties.html'),
        events: path.resolve(__dirname, 'events.html'),
        gallery: path.resolve(__dirname, 'gallery.html'),
        accessibility: path.resolve(__dirname, 'accessibility.html'),
        menusLegacy: path.resolve(__dirname, 'menus.html'),
        libationLegacy: path.resolve(__dirname, 'libation.html'),
        partiesLegacy: path.resolve(__dirname, 'parties.html'),
        specialsLegacy: path.resolve(__dirname, 'specials_events.html'),
        accessibilityLegacy: path.resolve(__dirname, 'web_accessibility_statement.html'),
      },
    },
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
    hmr: process.env.DISABLE_HMR !== 'true',
    watch: process.env.DISABLE_HMR === 'true' ? null : {},
  },
});
