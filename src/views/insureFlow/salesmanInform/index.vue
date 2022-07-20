<!--
 * new page
 * @author: liyang
 * @since: 2022-07-20
 * index.vue
-->
<template>
  <ZaPageWrap class="page-salesman-inform">
    <ProCard title="告知书">
      <van-cell title="《投保人问卷》" is-link value="去完成" />
    </ProCard>
    <ProCard title="营销员签字" link="重签" :show-divider="false" :show-line="false" @link-click="resetSign">
      <ProSign ref="signRef2" selector="sign2"></ProSign>
    </ProCard>
    <footer class="footer-btn">
      <div class="inform-file">
        <van-checkbox v-model="checked" shape="square"></van-checkbox>
        <p class="tips">您的签名将被用于<span>《营销员告知书》</span>文件</p>
      </div>
      <div class="next-btn">
        <van-button type="primary" block>下一步</van-button>
      </div>
    </footer>
  </ZaPageWrap>
</template>

<script setup lang="ts">
import ProCard from '@/components/ProCard/index.vue';

const signRef2 = ref(null);

const checked = ref<boolean>(false);

const resetSign = () => {
  signRef2.value?.clear();
};
</script>

<style scoped lang="scss">
.page-salesman-inform {
  .van-cell {
    display: flex;
    align-items: center;
    :deep(.van-cell__title) {
      font-size: 30px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: $zaui-aide-text-stress;
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
  .footer-btn {
    width: calc(100% - 60px);
    position: fixed;
    bottom: 0;
    left: 0;
    margin: 0 30px;
    .inform-file {
      display: flex;
      .tips {
        margin-left: 22px;
        font-size: 28px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #393d46;
        line-height: 40px;
        & > span {
          color: $zaui-aide-text-stress;
        }
      }
    }
    .next-btn {
      padding: 30px 0;

      // border-top: 1px solid #eeeff4;
      .van-button {
        border-radius: 8px;
      }
    }
  }
}
</style>
