// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import robotsTxt from "astro-robots-txt";

import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  site: "https://site-azzams.vercel.app/",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap(), react(), robotsTxt(), playformCompress()],
  server: {
    host: true,
  },
});
