export const themeData = {
  sidebar: {
    '/': [
      {
        text: '项目介绍',
        children: [
          {
            text: '框架介绍',
            link: '/project/',
          },
          {
            text: '开发规范',
            link: '/project/rule',
          },
          {
            text: '版本迭代',
            link: '/project/version',
          },
          {
            text: '参与人员',
            link: '/project/member',
          },
        ],
      },
      {
        text: '页面',
        children: [
          {
            text: '首页',
            link: '/pages/home',
          },
          {
            text: '客户',
            link: '/pages/custome',
          },
          {
            text: '其他页面',
            link: '/pages/any',
          },
        ],
      },
      {
        text: '通用组件',
        children: [
          {
            text: '组件',
            link: '/components/',
          },
          {
            text: '卡片',
            link: '/components/card',
          },
          {
            text: '进度条',
            link: '/components/progressCard',
          },
        ],
      },
    ],
  },
  author: 'kevin梁',
  nav: [
    {
      text: '首页',
      link: '/',
    },
    {
      text: '页面',
      link: '/pages/home/',
    },
    {
      text: '逢客签APP',
      items: [
        {
          text: '',
          link: 'https://github.com/mqyqingfeng',
        },
        {
          text: '掘金',
          link: 'https://juejin.cn/user/712139234359182/posts',
        },
      ],
    },
  ],
  locales: {
    '/': {
      navbar: [
        {
          text: '项目',
          link: '/project/',
        },
        {
          text: '页面',
          link: '/pages/home/',
        },
        {
          text: '组件',
          link: '/components/',
        },
      ],
      selectLanguageName: '简体中文',
      selectLanguageText: '选择语言',
      selectLanguageAriaLabel: '选择语言',
      editLinkText: '在 GitHub 上编辑此页',
      lastUpdatedText: '上次更新',
      contributorsText: '贡献者',
      tip: '提示',
      warning: '注意',
      danger: '警告',
      notFound: ['这里什么都没有', '我们怎么到这来了？', '这是一个 404 页面', '看起来我们进入了错误的链接'],
      backToHome: '返回首页',
      openInNewWindow: '在新窗口打开',
      toggleDarkMode: '切换夜间模式',
      toggleSidebar: '切换侧边栏',
    },
  },
  navbar: [],
  logo: null,
  darkMode: true,
  repo: null,
  selectLanguageText: 'Languages',
  selectLanguageAriaLabel: 'Select language',
  sidebarDepth: 2,
  editLink: true,
  editLinkText: 'Edit this page',
  lastUpdated: true,
  lastUpdatedText: 'Last Updated',
  contributors: true,
  contributorsText: 'Contributors',
  notFound: [
    "There's nothing here.",
    'How did we get here?',
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links.",
  ],
  backToHome: 'Take me home',
  openInNewWindow: 'open in new window',
  toggleDarkMode: 'toggle dark mode',
  toggleSidebar: 'toggle sidebar',
};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData);
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData);
  });
}
