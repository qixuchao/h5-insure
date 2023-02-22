# 投保模板组件开发规范

> 本目录下的组件，均是给投保流程中使用，每个组件都可能多个模板使用，且涉及到多人协作，固定下开发协作规范

### 命名规范

- 组件名以页面表示的模块区域命名 如：顶部 banner 图片区域，直接命名为 Banner 组件名尽量简洁易懂
- props 命名： 每个组件接收主要数据的属性，都以 dataSource 来接收数据，这样所有组件在使用的时候有统一的认知，降低理解成本
- 属性命名：
  - 组件内部 bool 类型的判断字段，以 isXxx 命名（loading 除外）
  - 其他属性名可解构接口或 props 中的结构，接口字段特别长的，可用别名。
- 方法名：
  - 处理事件响应的统一 handleXxx 命名
  - 获取数据的以 getXxx
  - 命名 如：getData，handleNameFucus 等等
- 样式： 每个组件要有自己的命名空间 com-template-xxx 来保证每个组件不重名、不覆盖。

### 注意事项

- 错误处理：字段层级特别深的取值， 尽量做一些错误预判处理，哪些可能会没有值的、做循环的(xxList ||[]).map、取 length 判断的。避免出现 js 报错导致页面奔溃。
- 所有组件尽量少用样式。 不要覆盖全局样式（用:deep())。 颜色、边距等熟悉，采用 css 变量**variables.scss**书写。
- 所有组件在<script lang='ts' setup name="组件名大驼峰"> 都加上 name 属性，方便在 devTool 中调试查看
- 组件所有的 props 都提取 interface 来写，且每个属性、方法都必须加注释。
- 所有方法的参数、复杂类型都必须加 ts 类型，尽量消除 any 和 ts 编译警告
- 接口返回的字段非常长或层级非常深时，取值时都采用中间变量去提取，不要一个属性取值写很长很长，影响阅读和查看。（如：state.order.tenantOrderInsuredList[0].certType 太长了）
- 某些组件在第一屏渲染时不需要展示的组件， 引用时，采用动态组件引用

### 示例

- props 定义示例【每个组件必须定义清楚 props，及默认值(防止报错或)】

```vue
<script lang="ts" setup name="ScrollInfo">
import type { TenantProductInsureVO as ProductSaleConfig } from '@/api/modules/product.data';
/**
 * 本组件是产品详情的滚动区域
 * props中 特色、理赔流程、常见问题
 */
const props = withDefaults(
  defineProps<{
    dataSource: Pick<ProductSaleConfig, 'spec' | 'settlementProcessVO' | 'questionList'>;
  }>(),
  {
    dataSource: () => ({
      spec: [], // 特色图片
      settlementProcessVO: {}, // 理赔
      questionList: [], // 问题列表
    }),
  },
);
</script>
```

- 动态组件

```vue
<template>
  <ProLazyComponent>
    <ProTimeline data-source="xxx" />
  </ProLazyComponent>
</template>
<script>
// ProLazyComponent为屏幕可视区懒加载组件
const ProTimeline = defineAsyncComponent(() => import('@/components/ProTimeline/index.vue'));
</script>
```
