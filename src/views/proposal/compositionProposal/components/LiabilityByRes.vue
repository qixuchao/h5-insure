<!--
 * @Author: wangyuanli
 * @Date: 2022-08-21 15:00:00
 * @LastEditors: za-qixuchao qixuchao@zhongan.com
 * @LastEditTime: 2022-11-10 20:28:00
 * @Description: 组合计划书按险种展示
-->
<template>
  <div class="container">
    <div v-for="(item, i) in props.info?.liabilityByTopTypeVOList" :key="i" style="margin-bottom: 20px">
      <div>
        <div class="common-title">
          <div class="title">
            <img src="@/assets/images/compositionProposal/title.png" class="ig" /> {{ item.liabilityTopTypeName }}
          </div>
        </div>
        <div class="product-detail">
          <van-collapse v-model="activeList" :is-link="false" :border="false" size="middle">
            <van-collapse-item
              v-for="(val, k) in Object.keys(item.proposalRiskLiabilityVOMap)"
              :key="k + i"
              :title="val"
              :name="k + i"
              :border="false"
              value-class="price"
            >
              <ProCell
                v-for="liability in item.proposalRiskLiabilityVOMap[val]"
                :key="liability.liabilityId"
                :title="liability.liabilityName"
                :content="liability.liabilityIndemnityContent || ''"
                :border="false"
              ></ProCell>
            </van-collapse-item>
          </van-collapse>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import ProField from '@/components/ProField/index.vue';
import Capsule from './SelectCapsule.vue';

const props = defineProps({
  info: {
    type: Object,
    default: () => {},
  },
});
const activeList = ref<string[]>([]);
</script>

<style lang="scss" scoped>
.page-composition-proposal {
  padding: 0 30px 30px 30px;
  background-color: #3486ff;
  margin-bottom: 150px;
  .head-bg {
    background-image: url('@/assets/images/compositionProposal/head.png');
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0 -30px;
    height: 242px;
    padding: 52px 278px 0 40px;
    font-size: 42px;
    font-weight: 600;
    color: #ffffff;
  }
  .line {
    margin: 0 -20px;
    padding-bottom: 30px;
    border-bottom: 1px solid $zaui-line;
  }
  .line2 {
    padding-bottom: 30px;
    border-bottom: 1px solid $zaui-line;
  }
  .container {
    widows: 100%;
    background: #ffffff;
    border-radius: 16px;
    margin-bottom: 20px;
    padding: 0 20px 30px 20px;

    .lia-header {
      min-height: 106px;
      width: 100%;
      border-radius: 16px 16px 0 0;
      display: flex;
      .info-detail {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .p1 {
          font-size: 32px;
          font-weight: 600;
          color: #333333;
        }
      }
    }
    .common-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 30px;
      font-weight: 500;
      color: #333333;
      .title {
        font-size: 30px;
        font-weight: 600;
        color: #393d46;
        display: flex;
        align-items: center;
        font-weight: 600;
        .ig {
          width: 18px;
          height: 29px;
          margin-right: 16px;
        }
      }
    }
    .product-detail {
      background-color: #f6f6fa;
      border-radius: 8px;

      :deep(.right-part) {
        color: $zaui-price;
      }

      :deep(.van-collapse-item__content) {
        background-color: #f6f6fa;
        border-radius: 8px;
      }
      :deep(.van-cell) {
        background-color: #f6f6fa;
        padding: 20px 30px 20px 20px;
        min-height: 20px;
        font-size: 28px;
        font-weight: 400;
        color: #393d46;
        border-radius: 8px;
      }
      :deep(.van-cell__title) {
        margin-top: 14px;
      }
      :deep(.price) {
        font-size: 28px;
        font-weight: 400;
        color: $zaui-price;
        margin-top: 14px;
      }
    }
    .poiner {
      width: 14px;
      height: 14px;
      display: inline-block;
      background: $zaui-brand;
      border-radius: 50%;
    }

    .switch-btn {
      font-size: $zaui-base-size;
      width: 20px;
      padding: 20px;
      word-wrap: break-word;
      box-sizing: content-box;
      background: $zaui-button-primary;
      color: $zaui-button-primary-highlight-text;
      position: fixed;
      z-index: 9;
      right: 0;
      top: 30%;
    }
  }
}
</style>
