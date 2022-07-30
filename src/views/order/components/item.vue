<template>
  <div class="com-order-item">
    <div class="header">
      <div class="product-name">{{ detail.goodsName }}</div>
      <div class="company-name">{{ detail.companyName }}</div>
      <div class="status">保单生成中</div>
    </div>
    <div class="holder">
      投保人： {{ detail.policyHolder }} {{ dayjs(detail.orderStartDate).format('YYYY-MM-DD HH:mm:ss') }}
    </div>
    <div class="footer">
      <div class="fee">
        保费：<span class="money">￥{{ detail.prem }}</span>
      </div>
      <div class="buttons">
        <div class="button">删除</div>
        <div class="button">去处理</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import dayjs from 'dayjs';
import { OrderItem } from '@/api/modules/order.data';

const props = defineProps({
  detail: {
    type: Object as () => OrderItem,
    default: () => {},
  },
});
</script>

<style lang="scss" scoped>
.com-order-item {
  margin-bottom: 30px;
  background: #fff;
  border-radius: 20px;
  width: 100%;
  padding: 30px 30px 30px 20px;
  .header {
    display: flex;
    align-items: center;
    .product-name {
      flex: 1;
      width: 0;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 30px;
      font-weight: 500;
      color: #393d46;
    }
    .company-name {
      flex: 0 0 110px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      padding: 0 10px;
      background: rgba(13, 110, 254, 0.1);
      border-radius: 8px;
      font-size: 22px;
      color: #0d6efe;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .status {
      flex: 0 0 130px;
      margin-left: 30px;
      font-size: 26px;
      color: #99a9c0;
    }
  }
  .holder {
    font-size: 24px;
    color: #99a9c0;
    line-height: 33px;
    margin-top: 16px;
    padding-bottom: 30px;
    border-bottom: 1px dashed #eeeef4;
  }
  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    .fee {
      font-size: 26px;
      color: #333333;
      .money {
        color: #ff5840;
      }
    }
    .buttons {
      display: flex;
      .button {
        height: 60px;
        line-height: 60px;
        border-radius: 30px;
        border: 1px solid #0d6efe;
        padding: 0 33px;
        min-width: 128px;
        font-size: 28px;
        color: #0d6efe;
        margin-right: 16px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
