export default {
  publicDir: "public",
  build: {
    outDir: "dist",
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
};
