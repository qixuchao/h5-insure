module.exports = {
  title: '活动量H5 文档',
  description: '活动量H5 开发官方文档',
  // head: [
  //   [
  //     'meta',
  //     {
  //       name: 'viewport',
  //       content:
  //         'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
  //     },
  //   ],
  //   ['meta', { name: 'keywords', content: 'vue3项目脚手架' }],
  //   ['link', { rel: 'icon', href: '/favicon.ico' }],
  // ],
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: `/favicon.png`,
      },
    ],
    ['meta', { name: 'application-name', content: 'VuePress' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'VuePress' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#3eaf7c' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],
  // 使用默认主题
  theme: '@vuepress/theme-default',
  themeConfig: {
    sidebar: {
      '/': [
        {
          text: '项目介绍',
          children: [
            { text: '框架介绍', link: '/project/' },
            { text: '开发规范', link: '/project/rule' },
            { text: '版本迭代', link: '/project/version' },
            { text: '参与人员', link: '/project/member' },
          ],
        },
        {
          text: '页面',
          children: [
            { text: '首页', link: '/pages/home' },
            { text: '客户', link: '/pages/custome' },
            { text: '其他页面', link: '/pages/any' },
          ],
        },
        {
          text: '通用组件',
          children: [
            { text: '组件', link: '/components/' },
            { text: '卡片', link: '/components/card' },
          ],
        },
      ],
    },
    author: 'kevin梁',
    nav: [
      { text: '首页', link: '/' },
      { text: '页面', link: '/pages/home/' },
      {
        text: '逢客签APP',
        items: [
          { text: '', link: 'https://github.com/mqyqingfeng' },
          { text: '掘金', link: 'https://juejin.cn/user/712139234359182/posts' }
        ]
      }
    ],
    locales: {
      /**
       * Chinese locale config
       */
      '/': {
        // navbar
        navbar: [{
          text: '项目',
          link: '/project/',
        }, {
          text: '页面',
          link: '/pages/home/',
        }, {
          text: '组件',
          link: '/components/',
        },],
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',

        // page meta
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',

        // custom containers
        tip: '提示',
        warning: '注意',
        danger: '警告',

        // 404 page
        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',

        // a11y
        openInNewWindow: '在新窗口打开',
        toggleDarkMode: '切换夜间模式',
        toggleSidebar: '切换侧边栏',
      },
    },
  },
  // site-level locales config
  // locales: {
  //   '/en': {
  //     lang: 'en-US',
  //     title: 'VuePress',
  //     description: 'Vue-powered Static Site Generator',
  //   },
  //   '/': {
  //     lang: 'zh-CN',
  //     title: 'VuePress',
  //     description: 'Vue 驱动的静态网站生成器',
  //   },
  // },
}
