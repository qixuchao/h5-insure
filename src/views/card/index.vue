<template>
  <ZaPageWrap main-class="page-card-header" footer-class="myfooter">
    <ZaCard :title="title" :color="color" :showmore="true" :subtitle="subtitle">
      <div>卡片内容slot</div>
    </ZaCard>
  </ZaPageWrap>
</template>

<script lang="ts" setup>
import ZaCard from '@/components/ZaCard';

const title = ref('日程安排');
const color = ref('255, 83, 66');
const subtitle = ref('更多');

const moreInfo = (value: string): void => {
  console.log(value);
};
</script>

<style lang="scss"></style>
