import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

export default defineConfig({
  root: "public",
  plugins: [reactRefresh()],
  build: {
    outDir: "../dist",
  },
  server: {
    proxy: {
      "/socket.io": {
        target: "http://localhost:3000",
        changeOrigin: true,
        ws: true,
      },
    },
  },
});
