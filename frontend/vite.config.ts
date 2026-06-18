import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
  },
  css: { devSourcemap: true },
  resolve: {
    alias: {
      src: path.resolve(__dirname, "./src"),
    },
  },
});
