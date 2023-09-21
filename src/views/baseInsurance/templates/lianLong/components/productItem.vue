<template>
  <div class="com-product-item">
    <div class="content-wrap">
      <div class="product-image">
        <van-image :src="productInfo.image" />
        <div class="company-name">{{ productInfo.insurerName?.slice(0, 6) }}</div>
        <div
          v-if="productInfo.label"
          :class="{
            tag: true,
            news: productInfo.label === '新品',
            push: productInfo.label === '推荐',
          }"
        >
          {{ productInfo.label }}
        </div>
      </div>
      <div class="product-info">
        <p class="title">{{ productInfo.productFullName }}</p>
        <p class="description">{{ productInfo.desc }}</p>
        <p class="price-item">
          <span class="price">{{ productInfo.price }}</span>
          <span>{{ productInfo.amountUnit }}</span>
        </p>
      </div>
      <slot name="checkedProduct"> </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue';

interface Props {
  productInfo: any;
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
  padding: $zaui-card-border 0;
  position: relative;
  &:after {
    content: ' ';
    position: absolute;
    width: 100%;
    height: 1px;
    border-bottom: 1px solid $zaui-line;
    transform: scaleY(0.5);
    z-index: 1;
    bottom: 0;
  }

  .content-wrap {
    display: flex;
    .product-image {
      position: relative;
      border-radius: 12px;
      overflow: hidden;
      width: 160px;
      height: 160px;
      .van-image {
        width: 100%;
        height: 100%;
        :deep(.van-image__img) {
          border-radius: 12px 12px 0 0;
        }
      }
    }

    .company-name {
      height: 44px;
      line-height: 44px;
      text-align: center;
      width: 100%;
      background: #f2f5fc;
      position: absolute;
      bottom: 0;
      left: 0;
      font-size: 28px;
      color: #515865;
      overflow: hidden;
      border-bottom-left-radius: 12px;
      border-bottom-right-radius: 12px;
    }
    .tag {
      position: absolute;
      right: -6px;
      top: 8px;
      height: 30px;
      line-height: 30px;
      background: linear-gradient(270deg, #ff7c29 0%, #ffa800 100%);
      border-radius: 6px 6px 0px 6px;
      color: #fff;
      padding: 0 8px;
      font-size: 24px;
      font-weight: 500;
      &.news {
        background: linear-gradient(270deg, #ed4829 0%, #ff6a44 100%);
      }
      &.push {
        background: linear-gradient(270deg, #2b78ff 0%, #2ba2ff 100%);
      }
      &::after {
        width: 0;
        height: 0;
        right: 0;
        content: ' ';
        position: absolute;
        top: 30px;
        border-top: 3px solid #4a2408;
        border-left: 3px solid #4a2408;
        border-bottom: 3px solid transparent;
        border-right: 3px solid transparent;
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
      .price-item {
        color: var(--van-primary-color);
        font-size: 28px;
        .price {
          font-size: 34px;
          font-weight: bold;
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
