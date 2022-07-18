<!--
 * new page
 * @author: liyang
 * @since: 2022-07-15
 * productItem.vue
-->
<template>
  <div class="com-product-item">
    <div class="content-wrap">
      <div class="product-image">
        <van-image :src="ProductImage" />
        <p class="insure-name">横琴人寿</p>
        <span class="is-top new">热销</span>
      </div>
      <div class="product-info">
        <p class="title">慧泽达尔文6号重疾险慧泽达尔文6号重疾险</p>
        <p class="description">保证续保20年，增值服务多，医疗服务优</p>
        <p class="tags">
          <span class="tag">高性价比之选</span>
          <span class="tag">家庭保障</span>
        </p>
      </div>
      <div class="check-button">
        <van-checkbox v-model="checked" shape="square"></van-checkbox>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductImage from '@/views/proposal/proposalList/components/test.png';

const state = reactive({
  checked: false,
});

const { checked } = toRefs(state);
</script>

<style scoped lang="scss">
@import '@/styles/mixins.scss';
.com-product-item {
  padding: 30px 0;
  border-bottom: 1px solid #eeeff4;
  .content-wrap {
    display: flex;
    .product-image {
      position: relative;
      .van-image {
        width: 160px;
        height: 160px;
        border-radius: 12px 12px 0 0;
      }
      .insure-name {
        width: 160px;
        height: 44px;
        background: #f2f5fc;
        font-size: 22px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #515865;
        line-height: 44px;
        text-align: center;
        position: absolute;
        bottom: 5px;
        left: 0;
        border-radius: 0 0 12px 12px;
      }
      .is-top {
        width: 51px;
        height: 30px;
        position: absolute;
        top: 8px;
        right: -2px;
        border-radius: 6px 6px 0px 6px;
        font-size: 22px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #ffffff;
        line-height: 30px;
        text-align: center;
      }
      .new {
        background: linear-gradient(270deg, #ff7c29 0%, #ffa800 100%);
      }
      .hot {
        background: linear-gradient(90deg, #ff6a45 0%, #ed4829 100%);
      }
    }
    .product-info {
      margin: 0 24px;
      max-width: 440px;
      .title {
        font-size: 28px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #393d46;
        line-height: 40px;
        @include oneline-ellipsis;
      }
      .description {
        font-size: 24px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #99a9c0;
        line-height: 33px;
        margin: 6px 0 12px;
        @include oneline-ellipsis;
      }
      .tags {
        .tag {
          display: inline-block;
          padding: 5px 12px;
          font-size: 22px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #0d6efe;
          line-height: 30px;
          background: rgba(13, 110, 254, 0.1);
          border-radius: 8px;
          &:not(:first-child) {
            margin-left: 12px;
          }
        }
      }
    }
    .check-button {
      display: flex;
      justify-content: center;
      align-items: center;
      .van-checkbox {
        border-radius: 4px;
        border-color: #99a9c0;
      }
    }
  }
}
</style>
