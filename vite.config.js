import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  esbuild: {
    minify: true,
  },
  server: {
    open: true, // Auto-opens browser when running dev server
    port: 3000, // Ensures consistent port usage
  },
})
