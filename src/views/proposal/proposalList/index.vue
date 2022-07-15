<!--
 * new page
 * @author: liyang
 * @since: 2022-07-15
 * index.vue
-->
<template>
  <div class="page-product-list">
    <ProductItem v-for="i in 10" :key="i" :is-hot="i" />
  </div>
</template>

<script setup lang="ts">
import ProductItem from './components/productItem.vue';
</script>

<style scoped lang="scss">
.page-product-list {
  padding: 30px 30px 0;
}
</style>
