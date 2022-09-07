<!--
 * new page
 * @author: liyang
 * @since: 2022-08-05
 * demo.vue
-->
<template>
  <div class="container">
    <ProFilePreview type="picture" :content="fileContent">
      <template #title>
        <!-- <div class="title">标题</div> -->
      </template>
      <template #footer-btn>
        <div class="footer-button">
          <van-button type="primary">了解并继续</van-button>
        </div>
      </template>
    </ProFilePreview>
  </div>
</template>

<script setup lang="ts">
// type = picture、pdf、richText
const fileContent = ref(
  'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/20220805161514385dd71e0a2b90a420eb46c654890fc5b67/wecom-temp-459b63632080ea2afdab795e3a1195d9.png?Expires=1660292114&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=d28WE7hADK16%2FRG%2BA4KA4BK4Vq8%3D',
);
// 'https://zatech-aquarius-v2-private-test.oss-cn-hangzhou.aliyuncs.com/planetOssFile/20220805155700747410a463c03734433b33a398ea9b4b036/vue3%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86Pinia.pdf?Expires=1660291021&OSSAccessKeyId=LTAI5t9uBW78vZ4sm5i3oQ5C&Signature=9VlzAH%2Funj2kjD%2F4j8FYiBe7TaU%3D',
// '<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>本次寄快递的计费规则是否清晰？</p>\n</body>\n</html>',
</script>

<style scoped lang="scss"></style>
