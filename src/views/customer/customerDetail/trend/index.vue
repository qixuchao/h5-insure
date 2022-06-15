<template>
  <div class="trend-list">
    <TrendItem v-for="(item, i) in data" :key="i" :data="item" />
  </div>
</template>

<script lang="ts" setup>
import TrendItem from './item.vue';

const props = defineProps({
  data: {
    type: Object,
    required: false,
    default: () => Object,
  },
});
const { data } = toRefs(props);
</script>

<style lang="scss">
.trend-list {
  padding: 0 30px;
}
</style>
