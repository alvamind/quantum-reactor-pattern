import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Quantum Reactor Pattern',
  description: 'A React Architecture Design Pattern combining atomic design, Recoil, shadcn, and event-driven architecture',
  themeConfig: {
    logo: '/images/quantum-reactor-logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Components', link: '/components/overview' },
      { text: 'State', link: '/state-management/schema' },
      { text: 'Advanced', link: '/advanced/testing' },
      { text: 'Examples', link: '/examples/simple-app' },
      { text: 'API', link: '/api/hooks-reference' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          items: [
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Core Concepts', link: '/guide/core-concepts' },
            { text: 'Installation', link: '/guide/installation' },
            { text: 'Directory Structure', link: '/guide/directory-structure' },
          ]
        }
      ],
      '/components/': [
        {
          text: 'Components',
          items: [
            { text: 'Overview', link: '/components/overview' },
            { text: 'Atoms', link: '/components/atoms' },
            { text: 'Molecules', link: '/components/molecules' },
            { text: 'Organisms', link: '/components/organisms' },
            { text: 'Templates', link: '/components/templates' },
            { text: 'Pages', link: '/components/pages' },
          ]
        }
      ],
      '/state-management/': [
        {
          text: 'State Management',
          items: [
            { text: 'Schema', link: '/state-management/schema' },
            { text: 'Atoms & Selectors', link: '/state-management/atoms-and-selectors' },
            { text: 'Events', link: '/state-management/events' },
            { text: 'Custom Hooks', link: '/state-management/custom-hooks' },
          ]
        }
      ],
      '/advanced/': [
        {
          text: 'Advanced Topics',
          items: [
            { text: 'Testing', link: '/advanced/testing' },
            { text: 'Performance', link: '/advanced/performance' },
            { text: 'Migration Guide', link: '/advanced/migration' },
            { text: 'Comparing to Other Patterns', link: '/advanced/comparison' },
          ]
        }
      ],
      '/examples/': [
        {
          text: 'Example Applications',
          items: [
            { text: 'Simple App', link: '/examples/simple-app' },
            { text: 'Complex App', link: '/examples/complex-app' },
            { text: 'Authentication Flow', link: '/examples/auth-flow' },
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
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourusername/quantum-reactor-pattern' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present'
    }
  }
})
