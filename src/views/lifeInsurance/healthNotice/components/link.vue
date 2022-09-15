<!--
 * new page
 * @author: liyang
 * @since: 2022-07-27
 * file.vue
-->
<template>
  <div class="iframe-wrap">
    <iframe :src="props.url" frameborder="0"></iframe>
    <div v-if="props.materialType === 'question'" class="footer-button">
      <van-button plain type="primary" @click="emits('onSubmitCurrentStatus', 2)">部分为是</van-button>
      <van-button type="primary" @click="emits('onSubmitCurrentStatus', 1)">以上皆否</van-button>
    </div>
    <div v-else class="footer-button">
      <van-button type="primary" @click="emits('onSubmitCurrentStatus', 1)">了解并继续</van-button>
    </div>
  </div>
</template>

<script setup lang="ts">
const emits = defineEmits<(e: 'onSubmitCurrentStatus', code: number) => void>();
const props = defineProps({
  materialType: {
    type: String,
    default: '',
  },
  url: {
    type: String,
    default: '',
  },
});
</script>

<style lang="scss" scoped>
.iframe-wrap {
  iframe {
    width: 100%;
    height: 80vh;
  }
}
</style>
