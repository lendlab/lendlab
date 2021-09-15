import path from "path";

import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

export default defineConfig({
  plugins: [reactRefresh()],
  publicDir: "assets",
  server: {
    watch: {
      usePolling: true,
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "/src"),
      "@ui": path.resolve(__dirname, "src/ui"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@modules": path.resolve(__dirname, "src/modules"),
      "@icons": path.resolve(__dirname, "src/icons"),
    },
  },
});
