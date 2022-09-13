<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-08-05 19:52:52
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-09-13 00:34:48
 * @FilePath: /zat-planet-h5-cloud-insure/src/views/healthNotice/components/document.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 * new page
 * @author: liyang
 * @since: 2022-07-19
 * document.vue
-->
<template>
  <ProPageWrap class="com-document">
    <div class="title">{{ props.currentPageInfo[0]?.title }}</div>
    <div v-dompurify-html="props.currentPageInfo[0]?.content" class="content"></div>
    <div class="footer-button">
      <van-button plain type="primary" @click="emits('onSubmitCurrentStatus', 2)">部分为是</van-button>
      <van-button type="primary" @click="emits('onSubmitCurrentStatus', 1)">以上皆否</van-button>
    </div>
  </ProPageWrap>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue';

interface ItemProps {
  content: object;
  options: string;
  position: number;
  questionType: number;
  questionnaireId: number;
  questionnaireName: string;
  textType: object;
  title: string;
}

interface Props {
  currentPageInfo: ItemProps[];
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
    margin-bottom: 200px;
  }
}
</style>
