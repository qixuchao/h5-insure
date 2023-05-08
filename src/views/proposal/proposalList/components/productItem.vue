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
        <van-image :src="productInfo.showConfig?.fileUrl" />
        <p class="insure-name">{{ (productInfo.insurerName || '').substring(0, 6) }}</p>
        <!-- <span class="is-top new">热销</span> -->
      </div>
      <div class="product-info">
        <p class="title">{{ productInfo.showConfig?.title }}</p>
        <p class="description">{{ productInfo.showConfig?.text }}</p>
        <p class="tags">
          <span v-for="(i, idx) of productInfo.showConfig?.tags" :key="idx" class="tag">{{ i }}</span>
        </p>
      </div>
      <slot name="checkedProduct"> </slot>
    </div>
    <ProductTips :error-msg="errorMsg" />
  </div>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue';
import { ProposalItem } from '@/api/modules/proposalList.data';
import ProductTips from './ProductTips.vue';

interface Props {
  productInfo: Partial<ProposalItem>;
  errorMsg: string;
}

const props = withDefaults(defineProps<Props>(), {
  productInfo: () => ({}),
  errorMsg: '',
});

const { productInfo } = toRefs(props);

const state = reactive({
  checked: false,
});

const { checked } = toRefs(state);
</script>

<style scoped lang="scss">
@import '@/styles/mixins.scss';
.com-product-item {
  padding: 30px 0;
  border-bottom: 0.5px $zaui-line;
  .content-wrap {
    display: flex;
    .product-image {
      position: relative;
      border-radius: 12px;
      overflow: hidden;
      .van-image {
        width: 160px;
        height: 160px;
        :deep(.van-image__img) {
          border-radius: 12px 12px 0 0;
        }
      }
      .insure-name {
        width: 160px;
        height: 44px;
        background: $zaui-global-bg;
        font-size: 22px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #515865;
        line-height: 44px;
        text-align: center;
        position: absolute;
        bottom: 0px;
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
      width: 440px;
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
        -webkit-line-clamp: 2;
        line-clamp: 2;
        color: #99a9c0;
        line-height: 33px;
        margin: 6px 0 12px;
        @include moreline-ellipsis;
      }
      .tags {
        .tag {
          display: inline-block;
          padding: 5px 12px;
          font-size: 22px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: $zaui-brand;
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
  .error-msg {
    margin: 0 30px 30px;
    padding: 9px 20px;
    line-height: 32px;
    font-size: 24px;
    color: #ff5840;
    background: rgba(255, 88, 64, 0.1);
    border-radius: 10px;
    .warning-icon {
      margin-right: 10px;
    }
  }
  :deep(.error-msg) {
    margin: 10px 0;
  }
}
</style>
