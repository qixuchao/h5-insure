<template>
  <ProPageWrap>
    <div class="page-consult-success">
      <div class="success"></div>
      <div class="code-card">
        <img class="code" :src="qrCode" alt="QR Code" />
      </div>
    </div>
  </ProPageWrap>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';

const route = useRoute();

/** 页面query参数类型 */
interface QueryData {
  url: string;
  [key: string]: any;
}

const { url = '' } = route.query as QueryData;

const qrCode = ref(url);
</script>

<style lang="scss" scoped>
.page-consult-success {
  background-image: url('@/assets/images/consult/bg.png');
  background-size: cover;
  height: 100%;
  width: 100%;
  position: relative;
  .success {
    background-image: url('@/assets/images/consult/img_success.png');
    background-size: cover;
    width: 485px;
    height: 335px;
    position: absolute;
    left: 135px;
    top: 113px;
  }
  .code-card {
    background-image: url('@/assets/images/consult/img_code.png');
    background-size: cover;
    width: 750px;
    height: 780px;
    position: absolute;
    top: 524px;
    .code {
      width: 396px;
      height: 380px;
      position: absolute;
      left: 173px;
      top: 240px;
    }
  }
}
</style>
