import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import prerender from '@prerenderer/rollup-plugin'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    prerender({
      routes: ['/', '/our-work', '/services', '/contact'],
      renderer: '@prerenderer/renderer-puppeteer',
      rendererOptions: {
        renderAfterDocumentEvent: 'app-rendered',
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      }, 
    }),
  ],
  server: { host: true },
})