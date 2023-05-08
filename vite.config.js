import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import path from "path";

export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    outDir: "../dist", // la carpeta donde se va a generar la compilación
    emptyOutDir: true, // limpiar la carpeta antes de generar la compilación
  },
  server: {
    port: 3000, // el puerto en el que se va a ejecutar el servidor de desarrollo
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
