<template>
  <div class="com-list">
    <van-index-bar>
      <van-index-anchor index="A" class="index-bar-title" />
      <van-cell>
        <div class="cell-item">
          <div class="cell-item-left">
            <img :src="isman ? manImg : womanImg" alt="" class="sexImg" />
            <div class="name-div">你得的</div>
            <div class="tag-out"><div class="tag-text">需求分析</div></div>
            <div class="weixinImg-out"><img :src="weixinImg" alt="" class="weixinImg" /></div>
          </div>
          <div class="cell-item-right">关联</div>
        </div>
      </van-cell>

      <van-index-anchor index="B" />
      <van-cell>222222222</van-cell>
      <van-cell title="文本" />
      <van-cell title="文本" />
    </van-index-bar>
  </div>
</template>

<script lang="ts" setup>
import { englishTitle } from './index';
</script>

<style lang="scss" scoped>
.com-list {
  .index-bar-title {
    height: 58px;
    background: #f5f5f5;
  }
  .cell-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px 20px 0;
    .cell-item-left {
      display: flex;
      align-items: center;
      .sexImg {
        width: 22px;
        height: 24px;
        margin-right: 12px;
      }
      .name-div {
        height: 42px;
        font-size: $zaui-font-size-lg;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #343434;
        line-height: 42px;
        margin-right: 10px;
      }
      .tag-out {
        height: 40px;
        background: rgba(255, 43, 31, 0.08);
        border-radius: 8px;
        padding: 5px 12px;
        margin-right: 10px;
        .tag-text {
          height: 30px;
          font-size: $zaui-font-size-sm;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: $primary-color;
          line-height: 30px;
        }
      }
      .weixinImg-out {
        width: 60px;
        height: 40px;
        background: #e7ffec;
        border-radius: 8px;
        padding: 6px 13px;
        .weixinImg {
          width: 34px;
          height: 28px;
        }
      }
    }
    .cell-item-right {
      height: 40px;
      font-size: $zaui-font-size-md;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: $primary-color;
      line-height: 40px;
    }
  }
}
</style>
