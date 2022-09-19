<template>
  <div class="page-waiting">
    <img class="loading" :src="LoadingGif" />
    <div class="tips">
      <p>支付成功，承保中...</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import LoadingGif from '@/assets/images/chuangxin/loading.gif';
</script>

<style lang="scss" scoped>
.page-waiting {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #ffffff;
  z-index: 999;
  padding: 50px 90px;
  .loading {
    width: 100%;
  }

  .tips {
    font-size: 48px;
    font-weight: 500;
    color: $zaui-text;
    line-height: 68px;
    text-align: center;
  }
}
</style>
