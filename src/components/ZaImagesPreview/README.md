## 通用图片预览组件

### ZaImagesPreview

- **props 数据** model

images: string[]; // 图片 URL 列表
current: number; // 当前要预览的序号 默认 1
imageStyle: CSSProperties; // 图片样式 默认不传

```html
<template>
  <ZaImagesPreview :images="images" />
</template>
<script lang="ts" setup>
  const images = ref([
    {
      pictureUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      pictureUrl: 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
    },
    {
      pictureUrl: 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
    },
    {
      pictureUrl: 'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
    },
    {
      pictureUrl: 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
    },
    {
      pictureUrl: 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
    },
  ]);
</script>
```
