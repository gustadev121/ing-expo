import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import { devtools } from '@tanstack/devtools-vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: process.env.BASE_PATH || "/",
  server: {
    port: 3000,
  },
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    devtools(),
    tailwindcss(),
    tanstackStart(),
    react(),
  ],
});
