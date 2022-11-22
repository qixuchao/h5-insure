<template>
  <h3 style="text-align: center; margin-top: 50px">支付结果</h3>
  <div style="margin-top: 50px">
    <h5>当前页面href</h5>
    <div>{{ href }}</div>
    <h5>当前页面参数</h5>
    <div>{{ query }}</div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';

const query = computed(() => useRoute().query);
const href = ref('');
onMounted(() => {
  console.log('useRoute:', query);
  href.value = window.location.href;
});
</script>

<style lang="scss"></style>
