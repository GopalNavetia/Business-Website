import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import prerender from '@prerenderer/rollup-plugin'
import { serviceGroups } from './src/data/services.js'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'sanitize-generated-localhost-fallbacks',
      renderChunk(code) {
        return code.replaceAll('http://localhost', 'http://example.invalid');
      },
    },
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
      postProcess(renderedRoute) {
        renderedRoute.html = renderedRoute.html.replace(
          /https?:\/\/(?:localhost|127\.0\.0\.1):\d*/gi,
          '',
        );
      },
    }),
  ],
  build: {
    chunkSizeWarningLimit: 700,
    sourcemap: false,
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