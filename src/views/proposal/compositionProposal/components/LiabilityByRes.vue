<!--
 * @Author: wangyuanli
 * @Date: 2022-08-21 15:00:00
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-09-13 00:37:17
 * @Description: 组合计划书按险种展示
-->
<template>
  <div class="container">
    <div v-for="(item, i) in props.info?.liabilityByTopTypeVOList" :key="i">
      <div v-for="j in item.proposalRiskLiabilityVOList" :key="j.liabilityId">
        <div class="common-title">
          <div class="title">
            <img src="@/assets/images/compositionProposal/title.png" class="ig" /> {{ j.liabilityName }}
          </div>
        </div>
        <div class="product-detail">
          <van-cell v-for="(val, k) in item.proposalRiskLiabilityVOList" :key="k">
            {{ val.liabilityName }}
          </van-cell>
        </div>
      </div>

      <div class="line2"></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  info: {
    type: Object,
    default: () => {},
  },
});
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
    .common-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 34px;
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
      :deep(.price) {
        font-size: 28px;
        font-weight: 400;
        color: $zaui-price;
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
  .content {
    display: flex;
    padding: 74px 0 50px 0;

    .bx {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      flex: 1;
      .txt {
        font-size: 26px;
        font-weight: 500;
        color: #343434;
        margin-top: 14px;
      }
      .wechat {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 104px;
        height: 104px;
        background: #00bc70;
        border-radius: 50%;
        img {
          width: 54px;
          height: 44px;
        }
      }
      .friend {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 104px;
        height: 104px;
        background: #f2f7f8;
        border-radius: 50%;
        img {
          width: 48px;
          height: 48px;
        }
      }
    }
  }
  .footer-btn {
    width: 100%;
    height: 150px;
    background: #ffffff;
    border: 1px solid #efeff4;
    margin-left: -30px;
    margin-right: -30px;
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
    z-index: 99999999; // echart 覆盖了footer，提高层级
    .btn {
      width: 335px;
      height: 90px;
      border-radius: 8px;
    }
  }
}
</style>
