<template>
  <div class="com-row-tabs">
    <van-tabs v-if="tabs.length" v-model:active="active" :class="['tabs', tabs.length > 3 ? 'w80' : '']">
      <van-tab v-for="item in tabs" :key="item" :name="item" :title="item"></van-tab>
    </van-tabs>
    <div v-if="tabs.length > 3" class="more-arrow" @click="show = true">
      <ProSvg name="down-fill" color="red" />
    </div>
  </div>
  <div class="row-data">
    <van-cell-group>
      <van-cell v-for="row in list" :key="row.id" is-link @click="$emit('preview', row)">
        <template #title>
          <div class="file-name">
            <span class="dot"></span>
            <span>{{ row.displayName }}</span>
          </div>
        </template>
      </van-cell>
    </van-cell-group>
  </div>
  <ProPopup :show="show" title="已选类别" @close="show = false">
    <div
      v-for="(tab, index) in tabs"
      :key="index"
      :class="['tab-item', tab == active ? 'active' : '']"
      @click="selectTab(tab)"
    >
      <div>{{ tab }}</div>
    </div>
  </ProPopup>
</template>
<script lang="ts" setup name="Tabs">
import { ref } from 'vue';
import { useVModel } from '@vueuse/core';

const props = defineProps({
  tabs: {
    type: Array<string>,
    default: () => [],
  },
  list: {
    type: Array<{ riskName: string; displayName: string; id: number }>,
    default: () => [],
  },
  active: {
    type: String,
    default: '',
  },
});
const emit = defineEmits(['@update:active', 'preview']);
const active = useVModel(props, 'active', emit);
const show = ref(false);

const selectTab = (tab: string) => {
  active.value = tab;
  show.value = false;
  emit('@update:active', tab);
};
</script>
<style lang="scss" scoped>
.com-row-tabs {
  display: flex;
  // border-bottom: 1px solid var(--zaui-dividing-line);
  // border-top: 1px solid var(--zaui-dividing-line);
  .van-tabs {
    flex: 1;
    &.w80 {
      max-width: calc(100vw - 84px);
    }
  }
  .more-arrow {
    width: 84px;
    background-color: #fff;
    text-align: center;
    height: 88px;
    line-height: 94px;
    z-index: 1;
    box-shadow: -2px 0px 9px -1px rgba(0, 0, 0, 0.25);
  }
}
.row-data .file-name {
  line-height: 48px;
  padding: 15px 0;
  // .dot {
  //   line-height: 48px;
  // }
}
.pop-container {
  .tab-item {
    font-size: var(--zaui-text-lmd);
    color: var(--zaui-text);
    line-height: 106px;
    border-bottom: 2px solid var(--zaui-dividing-line);
    margin: 0 30px;
    &.active {
      color: var(--zaui-brand);
    }
  }
}

:deep(.van-tabs__line) {
  width: 60px;
  z-index: 0;
}
:deep(.van-tab.van-tab--line) {
  min-width: 26%;
}

:deep(.van-tab__text--ellipsis) {
  -webkit-line-clamp: 2;
  text-align: center;
}
</style>
