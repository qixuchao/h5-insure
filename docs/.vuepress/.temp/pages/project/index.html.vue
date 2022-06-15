<template><h2 id="项目介绍" tabindex="-1"><a class="header-anchor" href="#项目介绍" aria-hidden="true">#</a> 项目介绍</h2>
<p>本项目是 vue3 + vue-router + vite2 + vant3 + pinia + ts 为基础搭建架构。</p>
<h2 id="文档" tabindex="-1"><a class="header-anchor" href="#文档" aria-hidden="true">#</a> 文档</h2>
<ul>
<li>
<p>🎉 <a href="https://v3.cn.vuejs.org/" target="_blank" rel="noopener noreferrer">vue3<ExternalLinkIcon/></a> vue3.2 是当前最新版本</p>
</li>
<li>
<p>📦 <a href="https://router.vuejs.org/zh/installation.html" target="_blank" rel="noopener noreferrer">vue-router<ExternalLinkIcon/></a> 官方路由，最新版本为 vue-router 4.x</p>
</li>
<li>
<p>⚡️ <a href="https://cn.vitejs.dev/guide/" target="_blank" rel="noopener noreferrer">vite<ExternalLinkIcon/></a> vite2 新一代构建工具，提高开发体验 ~ 就是 快</p>
</li>
<li>
<p>🔥 <a href="https://youzan.github.io/vant/#/zh-CN/" target="_blank" rel="noopener noreferrer">vant3<ExternalLinkIcon/></a> vant 最新 3.0 版本，搭配 vue3，丝滑无比</p>
</li>
<li>
<p>🍍 <a href="https://pinia.vuejs.org/introduction.html" target="_blank" rel="noopener noreferrer">pinia<ExternalLinkIcon/></a> pinia 为下一代 vuex 状态管理，支持 vue3 的 composition API 写法，本身支持 ts</p>
</li>
<li>
<p>💪 <a href="https://www.typescriptlang.org/zh/" target="_blank" rel="noopener noreferrer">typescript<ExternalLinkIcon/></a> typescript，时下最流行的前端语言</p>
</li>
</ul>
<h2 id="项目目录" tabindex="-1"><a class="header-anchor" href="#项目目录" aria-hidden="true">#</a> 项目目录</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
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

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div></template>
