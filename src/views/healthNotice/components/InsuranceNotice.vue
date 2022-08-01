<!--
 * new page
 * @author: liyang
 * @since: 2022-07-19
 * document.vue
-->
<template>
  <ZaPageWrap class="com-document">
    <div class="title">{{ props.currentPageInfo[0]?.questionnaireName }}</div>
    <div v-dompurify-html="props.currentPageInfo[0]?.content" class="content"></div>
    <div class="footer-button">
      <van-button type="primary" @click="handleClickHasDone">了解并继续</van-button>
    </div>
  </ZaPageWrap>
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

const handleClickHasDone = () => {
  emits('onSubmitCurrentStatus', 1);
};
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
    margin-bottom: 200px;
  }
}
</style>
