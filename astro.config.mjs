// @ts-check
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://moritzstoetter.github.io/",
  integrations: [tailwind()],
  i18n: {
    defaultLocale: "de",
    locales: ["de", "en"],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: 'everforest-light',
        dark: 'everforest-dark',
      },
      wrap: true,
      transformers: [],
    },
  },
});