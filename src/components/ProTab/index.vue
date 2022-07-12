<template>
  <Tabs
    v-model:active="activeIndex"
    :offset-top="offsetTop"
    :shrink="shrink"
    :sticky="sticky"
    :animated="animated"
    @click-tab="handleClickTab"
  >
    <Tab v-for="(item, index) in list" :key="index" :title="item.title" :disabled="item.disabled">
      <slot :name="item.slotName" />
    </Tab>
  </Tabs>
</template>

<script lang="ts" setup>
import { defineProps, watch } from 'vue';
import { Tabs, Tab } from 'vant';

const props = defineProps({
  list: {
    type: Array as () => Array<{ title: string; disabled?: boolean; slotName: string }>,
    default: () => [],
  },
  shrink: { type: Boolean, default: false }, // 是否收缩布局
  sticky: { type: Boolean, default: false }, // 是否粘性布局
  animated: { type: Boolean, default: false }, // 是否滑动切换
  offsetTop: { type: [Number, String], default: 0 },
  active: { type: Number, default: 0 },
});

const activeIndex = ref(props.active);

watch(
  () => props.active,
  (val) => {
    activeIndex.value = val;
  },
);

const handleClickTab = () => {};
</script>

<style lang="scss" scoped></style>
