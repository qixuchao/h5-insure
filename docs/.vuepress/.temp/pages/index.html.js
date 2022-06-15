export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "sidebar": "auto",
    "heroImage": "/logo.png",
    "actions": [
      {
        "text": "开始",
        "link": "/project/",
        "type": "primary"
      },
      {
        "text": "公共组件",
        "link": "/components/",
        "type": "secondary"
      }
    ],
    "features": [
      {
        "title": "Simplicity First",
        "details": "Minimal setup with markdown-centered project structure helps you focus on writing."
      },
      {
        "title": "Vue-Powered",
        "details": "Enjoy the dev experience of Vue, use Vue components in markdown, and develop custom themes with Vue."
      },
      {
        "title": "Performant",
        "details": "VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded."
      },
      {
        "title": "Themes",
        "details": "Providing a default theme out of the box. You can also choose a community theme or create your own one."
      },
      {
        "title": "Plugins",
        "details": "Flexible plugin API, allowing plugins to provide lots of plug-and-play features for your site."
      },
      {
        "title": "Bundlers",
        "details": "Default bundler is Vite, while Webpack is also supported. Choose the one you like!"
      }
    ],
    "footer": "MIT Licensed | Copyright © 2022-present 众安科技&中意保险"
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1649384582000,
    "contributors": [
      {
        "name": "liangxiaojun",
        "email": "353030799@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
