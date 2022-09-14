<template>
  <Tabs
    ref="tabsRef"
    :offset-top="offsetTop"
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
import { ref } from 'vue';
import { Tabs, Tab } from 'vant';
import type { TabsInstance } from 'vant';

const tabsRef = ref<TabsInstance>();

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

const handleClickTab = (e) => {
  tabsRef.value?.scrollTo(e.name);
};
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
