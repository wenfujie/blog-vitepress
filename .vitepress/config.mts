import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: 'blog-vitepress',
  title: 'blog',
  description: 'note,demo',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Css', link: '/css/ScrollStyle' },
      { text: 'Animation', link: '/animation/' }
    ],

    sidebar: {
      '/css/': [
        {
          text: 'Css',
          items: [
            { text: '覆盖滚动条样式', link: '/css/ScrollStyle' },
            { text: '文字描边', link: '/css/TextStroke' }
          ]
        }
      ],
      '/animation/': [
        {
          text: 'Animation',
          items: [{ text: '基础', link: '/animation/' }]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
