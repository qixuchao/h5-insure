<!--
 * new page
 * @author: liyang
 * @since: 2022-07-19
 * index.vue
-->
<template>
  <ZaPageWrap class="page-question-notice">
    <ProCard title="投保人">
      <van-cell title="《投保人问卷》" is-link value="去完成" />
      <van-cell title="《健康告知书》" is-link value="去完成" />
      <van-cell title="《投保须知》" is-link value="去完成" />
      <van-cell title="《投保须知》" is-link value="去完成" />
      <van-cell title="《免责条款》" is-link value="去完成" />
    </ProCard>
    <ProCard title="被保人">
      <van-cell title="《被保人问卷》" is-link value="去完成" />
      <van-cell title="《健康告知书》" is-link value="去完成" />
      <van-cell title="《被保人声明》" is-link value="去完成" />
    </ProCard>
    <div class="footer-button">
      <van-button plain type="primary">分享</van-button>
      <van-button type="primary">下一步</van-button>
    </div>
  </ZaPageWrap>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.page-question-notice {
  background: #f2f5fc;
  .van-cell {
    display: flex;
    align-items: center;
    :deep(.van-cell__title) {
      font-size: 30px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #393d46;
      line-height: 42px;
    }
    :deep(.van-cell__value) {
      font-size: 30px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #99a9c0;

      line-height: 42px;
    }
    .active {
      color: #0d6efe;
    }
  }
}
</style>
