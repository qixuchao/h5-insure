export const siteData = {
  "base": "/",
  "lang": "en-US",
  "title": "活动量H5 文档",
  "description": "活动量H5 开发官方文档",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "type": "image/png",
        "sizes": "16x16",
        "href": "/favicon.png"
      }
    ],
    [
      "meta",
      {
        "name": "application-name",
        "content": "VuePress"
      }
    ],
    [
      "meta",
      {
        "name": "apple-mobile-web-app-title",
        "content": "VuePress"
      }
    ],
    [
      "meta",
      {
        "name": "apple-mobile-web-app-status-bar-style",
        "content": "black"
      }
    ],
    [
      "meta",
      {
        "name": "msapplication-TileColor",
        "content": "#3eaf7c"
      }
    ],
    [
      "meta",
      {
        "name": "theme-color",
        "content": "#3eaf7c"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
