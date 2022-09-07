<template><h2 id="开发规范" tabindex="-1"><a class="header-anchor" href="#开发规范" aria-hidden="true">#</a> 开发规范</h2>
<p>我们的代码风格都使用： 两个空格缩进 vscode 的 eslint 插件控制。</p>
<blockquote>
<p>注意代码风格，请按照 eslint 规范写代码。 提交之前修复所有的语法问题</p>
</blockquote>
<ul>
<li>
<p>基础语法风格：</p>
<ul>
<li>js 中全部使用单引号，html 模板中使用双引号</li>
<li>函数声明时，圆括号后面要留空格</li>
<li>对象写在一行时：{ key: value } -- {} 里面要有一个空格，冒号后面要有一个空格</li>
<li>注释 //后面要空格 ‘// 注释’</li>
<li>js 变量不要用 var 直接用 let const</li>
</ul>
</li>
<li>
<p>命名习惯</p>
<ul>
<li>
<p>vue 组件全部帕斯卡(大驼峰)命名 BarFoo 首字母大写</p>
</li>
<li>
<p>views 下面的页面使用小驼峰命名 barFoo</p>
</li>
<li>
<p>page 页面的 name 字段用两个单词大驼峰 UserDetail、AgendaList</p>
</li>
<li>
<p>函数以动词开头 如：getOrderDetail, setUserName 等</p>
</li>
<li>
<p>获取数据方法命名 getData （保持全局统一）</p>
</li>
<li>
<p>常量用全大写字符，两个单词间用下划线连接 如：ORDER_TYPES</p>
</li>
<li>
<p>样式命名 - 所有 class 用中划线'-'连接，不要使用下划线_ - 列表尽量以 list 命名 如：order-list, - 列表项用 item 等命名 如：order-item, item - 容器等表是“块”的区域 用 wrap container content main 等命名 - 表位置或局部的 用 top left right bottom header footer side nav menu 等 - 项目中已经有的约定命名： - 简写
<code>mb20, mt20, ml10, mr10</code>: margin-top/bottom/left/right 等
<code>tar,tac,tal</code>: text-align: right/center/left - 常用“块”级命名
<code>block-title,block-content</code>: 在编写 标题+内容 块布局时约定的样式提取 - 其他参考 src/assets/styles/common/base.less</p>
<blockquote>
<p>样式规范</p>
</blockquote>
</li>
</ul>
</li>
<li>
<p>vue 编程规范：</p>
<ul>
<li>page 页面，使用 setup 语法糖 <code>&lt;script setup lang=&quot;ts&quot;&gt;</code>，尽量不用<code>setup() {return{}}</code>方式</li>
<li>vue 组件 声明 props 时，defineProps 都采用对象方式，声明每个 prop 的类型，是否必填 或 默认值</li>
<li>vue 组件 声明 emit 时，defineEmit 都要把事件定义清楚</li>
<li>每个 vue 文件组件添加 name 属性， 如：orderList.vue 页面 name: 'OrderList' 这样便于在 vue-devtool 中调试识别。</li>
<li>每个 vue 页面 root 的元素的 ProPageWrap 组件 传入 main-class 以 &quot;page-文件名&quot; 如：page-order-list page-order-detail</li>
<li>每个 vue 组件的 root 元素的 class 以 &quot;com-文件名&quot; 如： com-order-item com-side-bar</li>
<li>页面声明过定时器的，一定要记得离开时销毁</li>
<li>声明的 pinia store 变量，要写注释</li>
<li>一些通用逻辑，抽取到 hooks 目录下，返回可观测数据 ref 或 reactive 类型状态</li>
<li>异步函数调用，尽量用 async/await Promise，少用 cb 方式回调函数</li>
<li>开发业务时，多采用组件化开发，将可共用的部分尽量提取出来放到全局 components 下。 复杂的页面，尽量将页面拆分成组件，放到当前页面目录下 components 下</li>
</ul>
</li>
<li>
<p>其他</p>
<ul>
<li>提交 commit 时 message 要写详细 commit -m ' 类型 + 影响的范围 + 摘要 + 具体修改的内容'
最简单的如下：</li>
<li>commit -m 'fix 注册页 修复表单页输入框验证错误问题'</li>
<li>commit -m 'feat core 模块 新开发核心企业授信管理页+签发管理页面'
常用类型 feat: 新开发、fix: 修复 bug、chore: 其他修改</li>
</ul>
</li>
<li>
<p>新建页面模板</p>
<ul>
<li>空页面 直接拷贝过去简单修名称和 class 即可 <code>views/_template + index.vue</code></li>
</ul>
</li>
</ul>
</template>
