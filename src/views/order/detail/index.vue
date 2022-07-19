<template>
  <ProPageWrap>
    <div class="page-order-detail">
      <div class="card">
        <FieldInfo>
          <template #label>
            <div class="header">
              <div class="product-name">横琴臻爱医疗险（感恩版）横琴臻爱医疗险（感恩版）</div>
              <div class="company-name">横琴人寿横琴人寿</div>
            </div>
          </template>
          <template #content>
            <div class="status">待处理</div>
          </template>
        </FieldInfo>
        <FieldInfo label="订单号" content="P100000737709" />
        <FieldInfo label="投保时间" content="2022-01-01 12:00:00" />
        <FieldInfo label="投保人" content="王小明" />
        <FieldInfo label="被保人" content="王小明" />
      </div>
      <div class="card">
        <FieldInfo>
          <template #label>
            <div class="detail">保障信息</div>
          </template>
        </FieldInfo>
        <FieldInfo label="险种名称" content="横琴一号终身重大疾病保险" />
        <FieldInfo label="保障期间" content="终身" />
        <FieldInfo label="交费期间" content="20年" />
        <FieldInfo label="交费方式" content="年交" />
        <FieldInfo label="附加豁免保险费重大疾病保险" content="投保" />
        <FieldInfo label="保障金额" content="¥100,000.00" />
        <FieldInfo label="首期保费" content="¥10,000.00" />
      </div>
      <div class="footer">
        <div class="button cancel">删除</div>
        <div class="button ok">去处理</div>
      </div>
    </div>
  </ProPageWrap>
</template>

<script lang="ts" setup>
import FieldInfo from '../components/fieldInfo.vue';
</script>

<style lang="scss" scoped>
.page-order-detail {
  height: 100%;
  background: #f2f5fc;
  padding: 30px;
  padding-bottom: 180px;
  overflow-y: auto;
  .card {
    background: #fff;
    border-radius: 20px;
    margin-top: 30px;
    &:first-child {
      margin-top: 0;
    }
    .header {
      display: flex;
      flex: 1;
      align-items: center;
      .product-name {
        font-size: 30px;
        font-weight: 600;
        color: #333333;
        flex: 1;
        width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
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
    }
    .status {
      margin-left: 30px;
      font-size: 26px;
      color: #99a9c0;
    }
    .detail {
      font-size: 30px;
      font-weight: 600;
      color: #333333;
      flex: 1;
      display: flex;
      align-items: center;
      &:before {
        content: ' ';
        width: 8px;
        height: 28px;
        border-radius: 4px;
        background: #0d6efe;
        margin-right: 16px;
      }
    }
  }
  .footer {
    position: fixed;
    width: 100%;
    height: 150px;
    bottom: 0;
    left: 0;
    background: #fff;
    display: flex;
    padding: 0 30px;
    justify-content: space-between;
    align-items: center;
    .button {
      width: 335px;
      height: 90px;
      line-height: 90px;
      text-align: center;
      background: #ffffff;
      border-radius: 8px;
      &.cancel {
        border: 1px solid #0d6efe;
        color: #0d6efe;
      }
      &.ok {
        background: #0d6efe;
        color: #fff;
      }
    }
  }
}
</style>
