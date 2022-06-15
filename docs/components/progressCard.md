## 介绍

- 代码目录： /src/components/ZaprogressCard/index.tsx
- 功能：
  > 通用卡片进度条组件，支持 两种传值 80/40%或者数字（number 或 string），有百分比展示百分比 超出 100%按照 100%进度展示；只有数字不展示百分比

## 截图

![](/images/ZaProgress.png)

## 参数解析

| 参数名         | 参数类型         | 是否必传 | 默认值                      | 描述       |
| -------------- | ---------------- | -------- | --------------------------- | ---------- |
| title          | string           | 否       | 无                          | 卡片标题   |
| unit           | string           | 否       | 次                          | 标题后单位 |
| quantification | number 或 string | 否       | ''                          |            |
| color          | string           | 是       | rgb 形式，例如：0, 175, 255 | 进度条宽度 |

## 使用

```html
<template>
  <ZaProgressCard
    :title="title"
    :unit="unit"
    :quantification="quantification"
    :color="progressColor"
    :strokewidth="strokewidth"
  />
</template>
<script lang="ts" setup>
  const title = ref('需求分析');
  const unit = ref('次');
  const quantification = ref('85/82%');
  const progressColor = ref('0, 175, 255');
  const strokewidth = ref('4');
</script>
```
