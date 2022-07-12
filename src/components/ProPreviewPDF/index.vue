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
import { defineProps, defineEmits } from 'vue';
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
    ::v-deep .van-tabs__content {
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
