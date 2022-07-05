## 通用卡片容器。

### 何时使用

-最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。

- **props 数据** model

title 卡片标题
color 必须 16 进制 rgb,例如：255, 83, 66
showmore 是否展示卡片右侧更多文字
subtitle 卡片右侧文字 默认更多

## 代码演示

```html
<template>
  <ZaCard title="售后指标" color="255, 83, 66" :showmore="false" subtitle="更多"> {{slot}} </ZaCard>
</template>
<script lang="ts" setup></script>
```
