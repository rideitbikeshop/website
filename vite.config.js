import { defineConfig } from "vite";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig(({ command }) => ({
  base: command === "build" ? "/website/" : "/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(rootDir, "index.html"),
        en: resolve(rootDir, "en/index.html"),
      },
    },
  },
}));
