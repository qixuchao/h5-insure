<template>
  <Tabs
    v-model:active="activeIndex"
    :offset-top="offsetTop"
    :shrink="shrink"
    :sticky="sticky"
    :scrollspy="scrollspy"
    :line-height="4"
    :line-width="28"
    :class="['pro-tab', { smallGap }]"
    @click-tab="handleClickTab"
  >
    <Tab v-for="(item, index) in list" :key="index" :title="item.title" :disabled="item.disabled">
      <slot v-if="item.slotName" :name="item.slotName" />
    </Tab>
  </Tabs>
</template>

<script lang="ts" setup>
import { defineEmits } from 'vue';
import { Tabs, Tab } from 'vant';

const emits = defineEmits(['update:active']);

const props = defineProps({
  list: {
    type: Array as () => Array<{ title: string; disabled?: boolean; slotName?: string }>,
    default: () => [],
  },
  sticky: { type: Boolean, default: false }, // 是否粘性布局
  offsetTop: { type: [Number, String], default: 0 },
  active: { type: Number, default: 0 },
  scrollspy: { type: Boolean, default: false },
  smallGap: { type: Boolean, default: false },
});

const activeIndex = ref(props.active);

watch(activeIndex, (val) => {
  emits('update:active', val);
});

const handleClickTab = () => {};

const shrink = computed(() => {
  return props.list.length >= 5;
});
</script>

<style lang="scss" scoped>
.pro-tab {
  :deep(.van-tabs__nav--shrink) {
    .van-tab {
      margin-right: 60px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  &.smallGap {
    :deep(.van-tabs__nav--shrink) {
      .van-tab {
        margin-right: 45px;
      }
    }
  }
  :deep(.van-tab--active) {
    color: $zaui-primary-text;
  }
  :deep(.van-tab) {
    color: $zaui-text;
  }
}
</style>
