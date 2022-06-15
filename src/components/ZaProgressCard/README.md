## 通用卡片进度条组件

### ZaProgressCard

- **props 数据** model

title 标题
unit 标题后单位，默认 次
quantification 支持 两种传值 80/40%或者数字（number 或 string）
color rgb 形式，例如：0, 175, 255
strokewidth 进度条宽度

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
