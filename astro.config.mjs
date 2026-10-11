import { defineConfig } from "astro/config";

export default defineConfig({
  compressHTML: true,
  server: {
    host: "127.0.0.1",
    port: 4321,
  },
});
