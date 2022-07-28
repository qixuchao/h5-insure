<!--
 * new page
 * @author: liyang
 * @since: 2022-07-19
 * index.vue
-->
<template>
  <div class="com-health-notice">
    <!-- <Question /> -->
    <!-- <Document /> -->
    <!-- <InsuranceNotice /> -->
    <Enclosure url="https://ppwic-test.oss-cn-shenzhen.aliyuncs.com/huataiPDF/gaozhishu.pdf" />
  </div>
</template>

<script setup lang="ts">
import Question from './components/question.vue'; // 问卷类型
import Document from './components/document.vue'; // 文本类型
import InsuranceNotice from './components/InsuranceNotice.vue'; // 告知类型

import Enclosure from './components/file.vue'; // 文件类型 PDF或图片
</script>

<style scoped lang="scss"></style>
