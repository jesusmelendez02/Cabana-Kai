// @ts-check
import { defineConfig } from "astro/config";
import path from "path"; //
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@components": path.resolve("./src/components"),
        "@ui": path.resolve("./src/components/ui"),
        "@images": path.resolve("./src/assets/images"),
        "@icons": path.resolve("./src/assets/icons"),
        "@styles": path.resolve("./src/styles"),
      },
    },
  },
});
