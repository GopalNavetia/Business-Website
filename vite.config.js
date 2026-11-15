import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import prerender from '@prerenderer/rollup-plugin'
import { serviceGroups } from './src/data/services.js'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    prerender({
      routes: [
        '/',
        '/our-work',
        '/services',
        ...serviceGroups.map((group) => `/services/${group.slug}`),
        '/contact',
      ],
      renderer: '@prerenderer/renderer-puppeteer',
      rendererOptions: {
        renderAfterDocumentEvent: 'app-rendered',
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      }, 
    }),
  ],
  build: {
    chunkSizeWarningLimit: 700,
    sourcemap: true,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom') || id.includes('node_modules/react-router')) return 'react'
          if (id.includes('node_modules/gsap')) return 'gsap'
          if (id.includes('node_modules/lucide-react')) return 'lucide'
        },
      },
    },
  },
  server: { host: true },
})