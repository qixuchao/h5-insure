<template>
  <div class="com-field-info">
    <div class="label">
      {{ label }}
    </div>
    <slot v-if="!!slots.label" name="label" />
    <div class="content">
      {{ content }}
    </div>
    <slot v-if="!!slots.content" name="content" />
  </div>
</template>

<script lang="ts" setup>
import { defineProps, useSlots } from 'vue';

const slots = useSlots();
const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  content: {
    type: String,
    default: '',
  },
});
</script>

<style lang="scss" scoped>
.com-field-info {
  height: 106px;
  line-height: 106px;
  display: flex;
  justify-content: space-between;
  font-size: 30px;
  color: #393d46;
  margin: 0 30px;
  border-bottom: 1px solid #eeeff4;
  &:last-child {
    border-bottom: none;
  }
  .label {
  }
  .content {
  }
}
</style>
