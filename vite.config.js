import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import { resolve } from "path";

import Vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import ViteFonts from "vite-plugin-fonts";

export default defineConfig({
  resolve: {
    alias: {
      "@src": resolve(__dirname, "src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 1500,
  },
  plugins: [
    Vue(),
    Components({
      resolvers: IconsResolver({
        enabledCollections: ["mdi", "ri"],
      }),
    }),
    Icons(),
    VitePWA({
      manifest: {
        name: "LUV - Content Ownership",
        short_name: "LUV",
        description: "Full ownership of your content via LUV NFTs",
        theme_color: "#212121",
        registerType: "autoUpdate",
        icons: [
          {
            src: "/icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/icons/icon-256x256.png",
            sizes: "256x256",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/icons/icon-384x384.png",
            sizes: "384x384",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
    ViteFonts({
      google: {
        families: ["IBM+Plex+Mono"],
      },
    }),
  ],
});
