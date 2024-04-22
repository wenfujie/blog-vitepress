import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // base: 'blog-vitepress',
  title: "blog",
  description: "note,demo",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Css', link: '/css/' },
      { text: 'Animation', link: '/animation/' },
    ],

    sidebar: {
      '/css/': [
        {
          text: 'Css',
          items: [
            { text: '常用 Css', link: '/css/' },
            // { text: 'One', link: '/animation/one' },
          ]
        }
      ],
      '/animation/': [
        {
          text: 'Animation',
          items: [
            { text: '基础', link: '/animation/' },
            // { text: 'One', link: '/animation/one' },
          ]
        }
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
