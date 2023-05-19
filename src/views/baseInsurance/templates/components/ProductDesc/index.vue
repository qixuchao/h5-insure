<template>
  <div class="product-desc-wrap">
    <div class="product-name">{{ dataSource.title }}</div>
    <p class="product-desc">{{ dataSource.productDesc }}</p>
  </div>
</template>

<script lang="ts" setup name="productDesc">
import { withDefaults } from 'vue';

const props = withDefaults(defineProps<{ dataSource: any }>(), {
  dataSource: () => ({}),
});
</script>
<style lang="scss">
.product-desc-wrap {
  background-color: #ffffff;
  padding: 30px;
  margin-bottom: 20px;
  .product-name {
    font-size: 36px;
    font-weight: 500;
    color: #393d46;
    line-height: 50px;
    margin-bottom: 14px;
  }
  .product-desc {
    font-size: 26px;
    font-weight: 400;
    color: #99a9c0;
    line-height: 37px;
  }
}
</style>
