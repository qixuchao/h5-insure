<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-08-08 19:59:47
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-09-13 00:34:51
 * @FilePath: /zat-planet-h5-cloud-insure/src/views/healthNotice/components/InsuranceNotice.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 * new page
 * @author: liyang
 * @since: 2022-07-19
 * document.vue
-->
<template>
  <ProPageWrap>
    <div class="com-document">
      <div class="title">{{ props.currentPageInfo[0]?.title }}</div>
      <div v-dompurify-html="props.currentPageInfo[0]?.content" class="content"></div>
      <div class="footer-button">
        <van-button type="primary" @click="emits('onSubmitCurrentStatus', 1)">了解并继续</van-button>
      </div>
    </div>
  </ProPageWrap>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue';
import { GetCustomerQuestionsDetailResponse } from '@/api/modules/inform.data';

interface Props {
  currentPageInfo: GetCustomerQuestionsDetailResponse[];
}

const props = withDefaults(defineProps<Props>(), {
  currentPageInfo: () => [],
});
const emits = defineEmits<(e: 'onSubmitCurrentStatus', code: number) => void>();
</script>

<style scoped lang="scss">
.com-document {
  padding: 0 40px;

  .title {
    font-size: 32px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #393d46;
    line-height: 45px;
    margin: 40px 0;
  }
  .content {
    font-size: 28px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #393d46;
    line-height: 48px;
    padding-bottom: 200px;
  }
}
</style>
