import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: {
        quality: 50,
      },
      jpeg: {
        quality: 50,
      },
      jpg: {
        quality: 50,
      },
    }),
  ],
})
