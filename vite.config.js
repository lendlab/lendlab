import path from "path";

import {defineConfig} from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

export default defineConfig({
  plugins: [reactRefresh()],
  publicDir: "assets",
  alias: [
    {
      find: "~",
      replacement: path.resolve(path.resolve(__dirname), "src"),
    },
  ],
  server: {
    watch: {
      usePolling: true,
    },
  },
});
