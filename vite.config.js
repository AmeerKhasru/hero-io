import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
//hero-io-by-khasru.netlify.app/,
// https://vite.dev/config/
export default defineConfig({
  
  plugins: [react(), tailwindcss()],
  build: {
    // 1. Increases the limit to 1000kb to reduce warnings
    chunkSizeWarningLimit: 1000, 
    rollupOptions: {
      output: {
        // 2. Separates heavy libraries like Recharts into their own files
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('recharts')) return 'vendor-charts';
            if (id.includes('lucide-react')) return 'vendor-icons';
            return 'vendor';
          }
        },
      },
    },
  },
})