# aquarius-h5

### 开发

只需要执行以下命令就可以在 http://localhost:8080 中看到

```bash
npm run dev
```

### 构建

构建该应用只需要执行以下命令

```bash
npm run build
```

## 开发规范

我们的代码风格都使用： 两个空格缩进 vscode 的 eslint 插件控制。

> 注意代码风格，请按照 eslint 规范写代码。 提交之前修复所有的语法问题

- 基础语法风格：

  - js 中全部使用单引号，html 模板中使用双引号
  - 函数声明时，圆括号后面要留空格
  - 对象写在一行时：{ key: value } -- {} 里面要有一个空格，冒号后面要有一个空格
  - 注释 //后面要空格 ‘// 注释’
  - js 变量不要用 var 直接用 let const

- 命名习惯

  - vue 组件全部帕斯卡(大驼峰)命名 BarFoo 首字母大写
  - views 下面的页面使用小驼峰命名 barFoo
  - page 页面的 name 字段用两个单词大驼峰 UserDetail、AgendaList
  - 函数以动词开头 如：getOrderDetail, setUserName 等
  - 获取数据方法命名 getData （保持全局统一）
  - 常量用全大写字符，两个单词间用下划线连接 如：ORDER_TYPES

  - 样式命名 - 所有 class 用中划线'-'连接，不要使用下划线\_ - 列表尽量以 list 命名 如：order-list, - 列表项用 item 等命名 如：order-item, item - 容器等表是“块”的区域 用 wrap container content main 等命名 - 表位置或局部的 用 top left right bottom header footer side nav menu 等 - 项目中已经有的约定命名： - 简写
    `mb20, mt20, ml10, mr10`: margin-top/bottom/left/right 等
    `tar,tac,tal`: text-align: right/center/left - 常用“块”级命名
    `block-title,block-content`: 在编写 标题+内容 块布局时约定的样式提取 - 其他参考 src/assets/styles/common/base.less
    > 样式规范

  * 几种常见的页面结构样式书写规范

  - 列表页面 ![](/snapshoot/cssrule/cssrule_listpage.png)
  - 列表页 2 ![](/snapshoot/cssrule/cssrule_listpage.png)
  - 表单填写 ![](/snapshoot/cssrule/cssrule_form_content.png)
  - 详情页 ![](/snapshoot/cssrule/cssrule_detailpage.png)

- vue 编程规范：

  - page 页面，使用 setup 语法糖 `<script setup lang="ts">`，尽量不用`setup() {return{}}`方式
  - vue 组件 声明 props 时，defineProps 都采用对象方式，声明每个 prop 的类型，是否必填 或 默认值
  - vue 组件 声明 emit 时，defineEmit 都要把事件定义清楚
  - 每个 vue 文件组件添加 name 属性， 如：orderList.vue 页面 name: 'OrderList' 这样便于在 vue-devtool 中调试识别。
  - 每个 vue 页面 root 的元素的 ProPageWrap 组件 传入 main-class 以 "page-文件名" 如：page-order-list page-order-detail
  - 每个 vue 组件的 root 元素的 class 以 "com-文件名" 如： com-order-item com-side-bar
  - 页面声明过定时器的，一定要记得离开时销毁
  - 声明的 pinia store 变量，要写注释
  - 一些通用逻辑，抽取到 common/composables 目录下，返回可观测数据 ref 或 reactive 类型状态
  - 异步函数调用，尽量用 async/await Promise，少用 cb 方式回调函数
  - 开发业务时，多采用组件化开发，将可共用的部分尽量提取出来放到全局 components 下。 复杂的页面，尽量将页面拆分成组件，放到当前页面目录下 components 下

- 其他

  - 提交 commit 时 message 要写详细 commit -m ' 类型 + 影响的范围 + 摘要 + 具体修改的内容'
    最简单的如下：
  - commit -m 'fix 注册页 修复表单页输入框验证错误问题'
  - commit -m 'feat core 模块 新开发核心企业授信管理页+签发管理页面'
    常用类型 feat: 新开发、fix: 修复 bug、chore: 其他修改

- 新建页面模板
  - 空页面 直接拷贝过去简单修名称和 class 即可 `views/_template + index.vue`

## 其他

---目录树介绍
src  
├─ api 接口
│ ├─ modules 各个模块的接口
│ ├─ code.ts 公共错误码
│ └─ request.ts 请求封装
├─ assets 资源目录
│ ├─ images 图片
│ └─ svg svg 文件集合（icon 采用 svg）
├─ common 公共文件
| └─ composables 通用逻辑提取成 vue hooks
├─ components 通用组件
├─ router 路由
│ ├─ index.ts 路由对象封装
│ └─ routes.ts 路由列表
├─ store  
│ ├─ app.ts 应用级别 store
│ ├─ index.ts store 实例入口
│ └─ user.ts 用户相关通用状态
├─ styles 样式
│ ├─ themes 主题
│ │ ├─ blue.scss 蓝色
│ │ └─ default.scss 默认-红色
│ ├─ common.scss 通用样式
│ ├─ cover.scss vant 样式覆盖
│ ├─ mixins.scss mixin
│ └─ variables.scss 全局 scss 变量
├─ utils 工具
│ ├─ format.ts 格式化
│ └─ index.ts 工具入口
├─ views 页面
│ ├─ \_template 页面新建时模板（复制粘贴这个）
│ ├─ agenda 日程
│ ├─ businessCard 名片模块
│ ├─ customer 客户模块
│ ├─ home 首页
│ ├─ login 登录（本地开发用）
│ ├─ moment 朋友圈
│ ├─ poster 海报
│ └─ visitors 访客
├─ App.vue 入口
├─ auto-imports.d.ts 自动导入
├─ components.d.ts 使用到的组件申明文件（不要修改）
├─ env.d.ts 全局的 types 申明
├─ main.ts 入口 js
└─ types.ts 全局申明

## vue3 新特性

- ⚡️ [Vue 3](https://github.com/vuejs/vue-next), [Vite 2](https://github.com/vitejs/vite) - 快！
- 💪 [Typescript](https://www.typescriptlang.org/) - 当然！必不可少
- 🎉 [vant3 开箱即用](https://youzan.github.io/vant/#/zh-CN/) - 基于 Vue.js 3 的强大 UI 库
- 🔥 [Axios 配置和封装](https://github.com/axios/axios) - 基于 Promise 的 HTTP 请求库
- 💡 [Vue Router 4](https://router.vuejs.org/zh/) - Vuejs 的官方路由
- 📦 [组件自动按需加载](https://github.com/antfu/unplugin-vue-components) - 自动按需注册组件, 无需 import
- 📥 [API 自动按需加载](https://github.com/antfu/unplugin-auto-import) - 无需手动 import 进行引入
- 🍍 [Pinia 状态管理](https://pinia.esm.dev/) - 你将会喜欢上的 Vue Store
- 😃 [SVG 支持](https://github.com/jpkleemans/vite-svg-loader) - 支持以 组件形式使用 SVG 图片
- 🔑 完整支持的代码风格规范和代码提交规范
- ☁️ 支持零配置部署 Netlify

## 已配置

### UI 框架

- [vant](https://youzan.github.io/vant/#/zh-CN/) - 基于 Vue.js 3 的强大移动端 UI 库

### Icons

- [🔍Icônes](https://icones.netlify.app/) - 使用任意的图标集
  - [unplugin-icons](https://github.com/antfu/unplugin-icons) - 自动按需引入你所需要的图标！

### 插件

- [Vue Router 4](https://router.vuejs.org/zh/) - Vuejs 的官方路由
- [Pinia](https://pinia.esm.dev) - 新一代的 Vue Store 状态管理
- [Axios](https://github.com/axios/axios) - 基于 Promise 的 HTTP 请求库
- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) - 自动按需加载组件
- [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) - 自动按需加载 API
- [vite-plugin-style-import](https://github.com/vbenjs/vite-plugin-style-import) - 自动加载手动引入的 第三方组件库 的样式文件
- [vite-plugin-md](https://github.com/antfu/vite-plugin-md) - Markdown 作为组件，也可以让组件在 Markdown 中使用
  - [markdown-it-prism](https://github.com/jGleitz/markdown-it-prism) - [Prism](https://prismjs.com/) 的语法高亮
  - [prism-theme-vars](https://github.com/antfu/prism-theme-vars) - 利用 CSS 变量自定义 Prism.js 的主题
  - [markdown-it-link-attributes](https://github.com/crookedneighbor/markdown-it-link-attributes) - 统一设置 Markdown 里的超链接跳转方式
- [Vue I18n](https://github.com/intlify/vue-i18n-next) - 国际化
  - [vite-plugin-vue-i18n](https://github.com/intlify/vite-plugin-vue-i18n) - Vue I18n 的 Vite 插件
- [vite-plugin-checker](https://github.com/fi3ework/vite-plugin-checker) - 支持运行时在浏览器抛出 ESLint 和 TS 的错误
- [vite-plugin-fonts](https://github.com/stafyniaksacha/vite-plugin-fonts) - Vite 的字体加载器
- [VueUse](https://github.com/antfu/vueuse) - 实用的 Composition API 工具合集
- [vite-svg-loader](https://github.com/jpkleemans/vite-svg-loader) - 支持以 组件形式使用 SVG 图片

### 编码风格

- [ESLint](https://eslint.org/) 配置为 [Airbnb Style](https://github.com/airbnb/javascript)

### 技术清单

- [TypeScript](https://www.typescriptlang.org/)
- [Netlify](https://www.netlify.com/) - 零配置的部署
- [VS Code 扩展](./.vscode/extensions.json)
  - [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) - Vue 3 IDE 支持
  - [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - 图标内联显示和自动补全
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - 代码质量和规则检查
  - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - 专注于代码格式化、美化代码
  - [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) - 编码风格检查
