---
tags: [project]
---

## 项目介绍

本项目是 vue3 + vue-router + vite2 + vant3 + pinia + ts 为基础搭建架构。

## 文档

- 🎉 [vue3](https://v3.cn.vuejs.org/) vue3.2 是当前最新版本

- 📦 [vue-router](https://router.vuejs.org/zh/installation.html) 官方路由，最新版本为 vue-router 4.x

- ⚡️ [vite](https://cn.vitejs.dev/guide/) vite2 新一代构建工具，提高开发体验 ~ 就是 快

- 🔥 [vant3](https://youzan.github.io/vant/#/zh-CN/) vant 最新 3.0 版本，搭配 vue3，丝滑无比

- 🍍 [pinia](https://pinia.vuejs.org/introduction.html) pinia 为下一代 vuex 状态管理，支持 vue3 的 composition API 写法，本身支持 ts

- 💪 [typescript](https://www.typescriptlang.org/zh/) typescript，时下最流行的前端语言

## 项目目录

```

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

```
