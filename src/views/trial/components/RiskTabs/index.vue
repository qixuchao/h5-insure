<template>
  <button :class="active ? 'active-button' : ''">{{ title }}</button>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: () => '',
  },
  active: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
button {
  width: 216px;
  height: 80px;
  // line-height: 80px;
  // text-align: center;
  background: #f6f7fc;
  border-radius: 12px;
  font-size: 28px;
  font-weight: 400;
  color: #393d46;
  border: 0;
  &.active-button {
    color: #f6f7fc;
    background-color: #0d6efe;
    background-image: url('@/assets/images/img-gouxuan.png');
    background-repeat: no-repeat;
    background-size: 40px 40px;
    background-position: 175px 1px;
  }
}
</style>
