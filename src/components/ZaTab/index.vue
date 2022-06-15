<!--
 * @Author: LCT
 * @Date: 2022-03-11 11:19:35
 * @LastEditors: Lct
 * @LastEditTime: 2022-03-11 15:41:46
 * @Description:
 
 tablist:[
    {
    slotName: '1', // slot的名字
    title: 'index1', 标题
    disabled:false // 禁用
  },
  {
    slotName: '2',
    title: 'index2',
  },
 ]
-->
<template>
  <div ref="tab" class="com-za-tab" :class="[tabClass || '']">
    <van-sticky>
      <van-tabs
        v-model:active="active"
        :offset-top="offsettop"
        :shrink="shrink"
        :sticky="sticky"
        :animated="animated"
        @click-tab="onClickTab"
      >
        <van-tab
          v-for="(item, index) in tablist"
          :key="index"
          :title-class="{ [activestyle]: index === active }"
          :title="item.title"
          :disabled="item.disabled"
        >
          <slot :name="item.slotName" />
        </van-tab>
      </van-tabs>
    </van-sticky>
  </div>
</template>

<script lang="ts" setup>
import './index.scss';

const props = defineProps({
  tablist: {
    type: Array,
    default: () => [],
  },
  // active样式
  activestyle: {
    type: String,
    default: '',
  },
  tabClass: {
    type: String,
    default: '',
  },
  shrink: { type: Boolean, default: false }, // 是否收缩布局
  sticky: { type: Boolean, default: false }, // 是否粘性布局
  animated: { type: Boolean, default: false }, // 是否滑动切换
  offsettop: { type: Number || String, default: 0 },
});
const active = ref(0);
const tab = ref(null);

const emit = defineEmits(['on-tab-click']);
const onClickTab = (e) => {
  console.log(e);
  emit('on-tab-click', e);
};
</script>
