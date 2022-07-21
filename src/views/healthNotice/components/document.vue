<!--
 * new page
 * @author: liyang
 * @since: 2022-07-19
 * document.vue
-->
<template>
  <ZaPageWrap class="com-document">
    <div class="title">投保人需确认被保险人是否存在以下情况？</div>
    <div class="content">
      <div v-for="(i, idx) of mockTempData" :key="idx">
        <p>{{ idx + 1 }}. 【{{ i.title }}】</p>
        <p v-for="(child, childIxd) of i.content" :key="childIxd">
          <span v-if="i.content.length > 1">（{{ childIxd + 1 }}）</span>
          {{ child }}
        </p>
      </div>
    </div>
    <div class="footer-button">
      <van-button plain type="primary">部分为是</van-button>
      <van-button type="primary">以上皆否</van-button>
    </div>
  </ZaPageWrap>
</template>

<script setup lang="ts">
import { mockTempData } from './mockData';
</script>

<style scoped lang="scss">
.com-document {
  padding: 0 40px;
  .title {
    font-size: 32px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #393d46;
    line-height: 45px;
    margin: 40px 0;
  }
  .content {
    font-size: 28px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #393d46;
    line-height: 48px;
    margin-bottom: 200px;
  }
}
</style>
