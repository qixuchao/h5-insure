<!--
 * @Author: za-yuxiaowei yuxiaowei@zhongan.io
 * @Date: 2022-07-12 10:50:33
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-07-12 13:52:02
 * @FilePath: /zat-planet-h5-cloud-insure/src/components/ProPreviewPDF/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <ProPopup class="com-preview-pdf" :show="true" title="pdf预览" @closed="handleClosed">
    <ProTab :list="pdfList" sticky offset-top="10%" class="tabs" :active="activeIndex">
      <template v-for="(item, index) in list" #[`pdf${index}`] :key="index">
        <iframe class="iframe" :src="item.url" />
      </template>
    </ProTab>
  </ProPopup>
</template>

<script lang="ts" setup>
import ProTab from '@/components/ProTab/index.vue';
import ProPopup from '@/components/ProPopup/index.vue';

const props = defineProps({
  list: {
    type: Array as () => Array<{ title: string; url: string }>,
    default: () => [],
  },
  active: {
    type: Number,
    default: 0,
  },
});

const activeIndex = ref(props.active);
const emits = defineEmits(['closed']);

const pdfList = computed(() => {
  return props.list.map((item, index) => ({ title: item.title, slotName: `pdf${index}`, url: item.url }));
});

const handleClosed = () => {
  emits('closed');
};
</script>

<style lang="scss" scoped>
.com-preview-pdf {
  .tabs {
    height: 100%;
    display: flex;
    flex-direction: column;
    :deep(.van-tabs__content) {
      flex: 1;
      height: 0;
      .van-tab__panel {
        height: 100%;
      }
    }
  }
  .iframe {
    width: 100%;
    border: 0;
    height: 100%;
  }
}
</style>
