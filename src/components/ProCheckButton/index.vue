<template>
  <div :class="{ 'com-check-btn': true, activied, disabled }">
    <slot>
      {{ label }}
    </slot>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  label: {
    type: String,
    default: '',
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  activied: {
    type: Boolean,
    default: false,
  },
});
</script>
<style lang="scss" scoped>
.com-check-btn {
  min-width: 140px;
  height: 60px;
  background-color: #f6f7fc;
  padding: 0 16px;
  border-radius: 8px;
  font-size: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #393d46;
  font-weight: 400;
  margin: 0 0 16px 16px;
  &.activied {
    border: 1px solid $primary-color;
    color: $primary-color;
    background-color: rgba(13, 110, 254, 0.1);
  }
  &.disabled {
    background-color: #8fbbfc;
  }
}
</style>
