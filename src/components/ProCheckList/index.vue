<template>
  <div class="com-check-list-wrapper"></div>
</template>

<script lang="ts" setup>
const props = defineProps({
  data: {
    type: Array,
    required: true,
    default: () => [],
  },
  checkedList: {
    type: Array,
    required: false,
    default: () => [],
  },
  disabledList: {
    type: Array,
    required: false,
    default: () => [],
  },
});
</script>

<style></style>
