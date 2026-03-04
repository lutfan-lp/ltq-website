import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Chunk splitting agar load lebih cepat
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          'motion': ['framer-motion'],
          'ui': ['lucide-react', 'react-intersection-observer'],
        },
      },
    },
    // Target modern browsers
    target: 'es2015',
    // Minify CSS
    cssMinify: true,
  },
  // Pastikan semua path relatif benar saat deploy
  base: '/',
})