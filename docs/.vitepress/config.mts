import { defineConfig } from 'vitepress';
import { withPwa } from '@vite-pwa/vitepress';
import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'
import { SitemapStream } from 'sitemap';

const links: { url: string, lastmod: number | undefined }[] = []
// https://vitepress.dev/reference/site-config
export default withPwa(defineConfig({
  title: 'Quantum Reactor Pattern',
  description: 'A React Architecture Design Pattern combining atomic design, Recoil, shadcn, and event-driven architecture',
  base: '/quantum-reactor-pattern/', // Updated base path to match desired GitHub Pages URL
  outDir: '../dist', //  Updated to output to project root dist directory
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    logo: '/images/quantum-reactor-logo.svg',
    // Add search configuration
    search: {
      provider: 'local',
      options: {
        detailedView: true,
        translations: {
          button: {
            buttonText: 'Search Documentation',
            buttonAriaLabel: 'Search documentation'
          },
          modal: {
            noResultsText: 'No results for',
            resetButtonTitle: 'Clear search query',
            footer: {
              selectText: 'to select',
              navigateText: 'to navigate',
              closeText: 'to close'
            }
          }
        }
      }
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/introduction' },  // Updated to point to introduction
      { text: 'Components', link: '/components/overview' },
      { text: 'State', link: '/state-management/schema' },
      { text: 'Examples', link: '/examples/simple-app' },
      { text: 'Advanced', link: '/advanced/testing' },
      { text: 'API', link: '/api/hooks-reference' },
    ],

    // Enable prev/next links at the bottom of pages
    docFooter: {
      prev: 'Previous Page',
      next: 'Next Page'
    },

    // Add outline configuration to show table of contents
    outline: {
      level: 'deep',
      label: 'On this page'
    },

    // Structure sidebar for logical progression
    sidebar: {
      '/guide/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/guide/introduction' }, // Added introduction as first item
            { text: 'Installation', link: '/guide/installation' },
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Core Concepts', link: '/guide/core-concepts' },
            { text: 'Directory Structure', link: '/guide/directory-structure' },
          ]
        },
        {
          text: 'Next Steps',
          items: [
            { text: 'Component Architecture', link: '/components/overview' },
            { text: 'State Management Basics', link: '/state-management/schema' },
          ]
        }
      ],
      '/components/': [
        {
          text: 'Component Architecture',
          items: [
            { text: 'Overview', link: '/components/overview' },
            { text: 'Atoms', link: '/components/atoms' },
            { text: 'Molecules', link: '/components/molecules' },
            { text: 'Organisms', link: '/components/organisms' },
            { text: 'Templates', link: '/components/templates' },
            { text: 'Pages', link: '/components/pages' },
          ]
        },
        {
          text: 'Related Topics',
          items: [
            { text: 'State Management', link: '/state-management/schema' },
            { text: 'Simple Example App', link: '/examples/simple-app' },
          ]
        }
      ],
      '/state-management/': [
        {
          text: 'State Management',
          items: [
            { text: 'Schema Overview', link: '/state-management/schema' },
            { text: 'Atoms & Selectors', link: '/state-management/atoms-and-selectors' },
            { text: 'Events System', link: '/state-management/events' },
            { text: 'Custom Hooks', link: '/state-management/custom-hooks' },
          ]
        },
        {
          text: 'See it in Action',
          items: [
            { text: 'Example Applications', link: '/examples/simple-app' },
          ]
        }
      ],
      '/examples/': [
        {
          text: 'Example Applications',
          items: [
            { text: 'Simple App', link: '/examples/simple-app' },
            { text: 'Authentication Flow', link: '/examples/auth-flow' },
            { text: 'Complex App', link: '/examples/complex-app' },
          ]
        },
        {
          text: 'Advanced Usage',
          items: [
            { text: 'Testing Strategies', link: '/advanced/testing' },
            { text: 'Performance Optimization', link: '/advanced/performance' },
          ]
        }
      ],
      '/advanced/': [
        {
          text: 'Advanced Topics',
          items: [
            { text: 'Testing Strategies', link: '/advanced/testing' },
            { text: 'Performance Optimization', link: '/advanced/performance' },
            { text: 'Migration Guide', link: '/advanced/migration' },
            { text: 'Comparison with Other Patterns', link: '/advanced/comparison' },
            { text: 'AI Development Prompts', link: '/advanced/ai-prompt' },
          ]
        },
        {
          text: 'Developer Reference',
          items: [
            { text: 'API Documentation', link: '/api/hooks-reference' },
          ]
        }
      ],
      '/api/': [
        {
          text: 'API Reference',
          items: [
            { text: 'Hooks Reference', link: '/api/hooks-reference' },
            { text: 'Events Reference', link: '/api/events-reference' },
          ]
        },
        {
          text: 'Implementation Guides',
          items: [
            { text: 'Advanced Topics', link: '/advanced/testing' },
            { text: 'Example Applications', link: '/examples/complex-app' },
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/alvamind/quantum-reactor-pattern' }  // Replace with your repo
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present'
    },
  },
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark'
    },
    // Use dynamic import with ESM syntax
    async config(md) {
      // ESM-compatible import
      const mathjax = await import('markdown-it-mathjax3');
      md.use(mathjax.default);
    }
  },
  head: [
    // Basic Meta Tags
    ['meta', { name: 'author', content: 'Your Name' }],  // Replace with your name/organization
    ['meta', { name: 'keywords', content: 'react, architecture, atomic design, recoil, shadcn, event-driven, state management, vitepress' }], // Add relevant keywords
    ['meta', { name: 'robots', content: 'index, follow' }],

    // Open Graph / Facebook
    ['meta', { property: 'og:title', content: 'Quantum Reactor Pattern' }],
    ['meta', { property: 'og:description', content: 'A React Architecture Design Pattern' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://yourdomain.com/' }], //  REPLACE with your actual URL
    ['meta', { property: 'og:image', content: 'https://yourdomain.com/images/quantum-reactor-logo.svg' }], //  REPLACE with a good social sharing image

    // Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Quantum Reactor Pattern' }],
    ['meta', { name: 'twitter:description', content: 'A React Architecture Design Pattern' }],
    ['meta', { name: 'twitter:image', content: 'https://yourdomain.com/images/quantum-reactor-logo.svg' }], //  REPLACE with your image
    ['meta', { name: 'twitter:creator', content: '@yourtwitterhandle' }], // Replace with your Twitter handle

    // Favicon (place these files in your /public directory)
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/quantum-reactor-pattern/favicon.svg' }],
    ['link', { rel: 'alternate icon', href: '/favicon.ico' }],
    ['link', { rel: 'mask-icon', href: '/favicon.svg', color: '#ffffff' }],

    // Preconnect to fonts (if using Google Fonts, etc.)
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],

    // Add a canonical URL to prevent duplicate content issues
    ['link', { rel: 'canonical', href: 'https://yourdomain.com/' }], // REPLACE with your actual URL
  ],

  // Vite configuration (for build optimization)
  vite: {
    build: {
      minify: 'esbuild', // Or 'terser' - terser is slower but sometimes produces slightly smaller bundles
      rollupOptions: {
        output: {
          // Example of manual chunking (adjust as needed for your project)
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          }
        }
      }
    },
    ssr: {
      noExternal: ['@kobalte/core']
    }
  },
  transformPageData(pageData) {
    // console.log("pageData", pageData);
    links.push({
      // you don't need to include the base
      url: pageData.relativePath.replace(/index\.md$/, '').replace(/\.md$/, '.html'),
      lastmod: pageData.lastUpdated
    })
  },
  buildEnd: async ({ outDir }) => {
    const sitemap = new SitemapStream({
      hostname: 'https://yourdomain.com/' //  REPLACE with your actual URL
    })
    const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))
    sitemap.pipe(writeStream)
    links.forEach((link) => sitemap.write(link))
    sitemap.end()

    // Fixed line:
    await new Promise<void>((resolve) => writeStream.on('finish', () => resolve()))
  },
  pwa: {
    outDir: '../dist', // Updated to match the main outDir path
    registerType: 'autoUpdate',
    devOptions: {
      enabled: true
    },
    workbox: {
      globPatterns: ['**/*.{css,js,html,svg,png,ico,txt,woff2}']
    },
    includeAssets: [
      'favicon.ico',
    ],
    manifest: {
      name: 'Quantum Reactor Pattern',
      short_name: 'QRP',
      description: 'A React Architecture Design Pattern combining atomic design, Recoil, shadcn, and event-driven architecture',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'any maskable'
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    }
  }
}));
