<!--
 * @Author: zhaopu
 * @Date: 2022-11-28 16:57:00
 * @LastEditors: zhaopu
 * @LastEditTime: 2022-11-28 17:22:20
 * @Description:
-->
<template>
  <div class="file-preview">
    <ProFilePreview :content="fileInfo.fileUri" :type="fileInfo.fileType" :forbid-click="true" />
  </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();

const fileInfo = computed(() => {
  const { fileType, fileUri } = route.query || {};

  return {
    fileType,
    fileUri,
  };
});
</script>

<style lang="scss" scoped>
.file-preview {
  width: 100%;
  height: 100%;
  background: #ffffff;
}
</style>
