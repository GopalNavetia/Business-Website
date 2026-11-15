import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import prerender from '@prerenderer/rollup-plugin'
import { serviceGroups } from './src/data/services.js'

const isVercel = Boolean(process.env.VERCEL)

async function createPrerenderPlugin() {
  const rendererOptions = {
    renderAfterDocumentEvent: 'app-rendered',
    ...(isVercel
      ? {
          headless: true,
          launchOptions: await (async () => {
            const chromiumModule = await import('@sparticuz/chromium')
            const chromium = chromiumModule.default || chromiumModule
            return {
              executablePath: await chromium.executablePath(),
              args: chromium.args,
            }
          })(),
        }
      : {
          args: ['--no-sandbox', '--disable-setuid-sandbox'],
        }),
  }

  const prerenderPlugin = prerender({
    routes: [
      '/',
      '/our-work',
      '/services',
      ...serviceGroups.map((group) => `/services/${group.slug}`),
      '/contact',
    ],
    renderer: '@prerenderer/renderer-puppeteer',
    rendererOptions,
    postProcess(renderedRoute) {
      renderedRoute.html = renderedRoute.html.replace(
        /https?:\/\/(?:localhost|127\.0\.0\.1):\d*/gi,
        '',
      )
    },
  })

  if (!isVercel) return prerenderPlugin

  const generateBundleHook = prerenderPlugin.generateBundle
  const handler = typeof generateBundleHook === 'function'
    ? generateBundleHook
    : generateBundleHook.handler

  return {
    ...prerenderPlugin,
    generateBundle: {
      ...generateBundleHook,
      async handler(output, bundle) {
        let prerenderFailed = false
        try {
          const vercelContext = Object.create(this)
          vercelContext.error = (message) => {
            prerenderFailed = true
            console.warn('PRERENDER FAILED, deploying without prerendered HTML')
            console.warn(message)
          }
          await handler.call(vercelContext, output, bundle)
        } catch (error) {
          if (!prerenderFailed) {
            console.warn('PRERENDER FAILED, deploying without prerendered HTML')
            console.warn(error)
          }
        }
      },
    },
  }
}

export default defineConfig(async () => ({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'sanitize-generated-localhost-fallbacks',
      renderChunk(code) {
        return code.replaceAll('http://localhost', 'http://example.invalid');
      },
    },
    await createPrerenderPlugin(),
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
}))