<template>
  <div v-if="fileInfo" class="file-preview">
    <ProFilePreview :content="fileInfo.fileUri" :type="fileInfo.fileType" :forbid-click="true" />
  </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { localStore } from '@/hooks/useStorage';
import { PREVIEW_FILE_KEY } from '../utils';

let fileInfo = null;

try {
  fileInfo = localStore.get(PREVIEW_FILE_KEY) as string;
  console.log('fileInfo', fileInfo);
  localStore.remove(PREVIEW_FILE_KEY);
} catch (error) {
  //
}

const route = useRoute();

// const fileInfo = computed(() => {
//   const { fileType, fileUri } = route.query || {};

//   return {
//     fileType,
//     fileUri,
//   };
// });
</script>

<style lang="scss" scoped>
.file-preview {
  width: 100%;
  height: 100%;
  background: #ffffff;
}
</style>
