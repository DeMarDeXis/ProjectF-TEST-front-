import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
  },
  server:{
    host: true,
    port: 5173,
    strictPort: true,
    watch: {
      usePolling: true,
      interval: 1000
    },
    proxy:{
      '/api': {
        // target: 'http://backend_dev:8080', // para local
        target: process.env.VITE_API_URL, // para dev/prod
        // target: process.env.VITE_API_URL || 'http://hoooooosttttt:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
    }
    }
  },
})