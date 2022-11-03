<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-09-15 17:44:21
 * @LastEditors: zhaopu
 * @LastEditTime: 2022-11-03 13:44:12
 * @FilePath: /zat-planet-h5-cloud-insure/src/views/chuangxin/baigebao/product/components/FIlePreview/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <ProPopup
    v-model:show="isShow"
    :height="80"
    class="file-preview-popup-wrap"
    :closeable="false"
    @before-close="onBeforeClose"
    @close="emits('update:show', false)"
  >
    <van-config-provider :theme-vars="themeVars">
      <ProTab
        v-if="isShow"
        v-model:active="currentActiveIndex"
        :list="
          formatedContentList.map((item, index) => ({
            title: item.attachmentName,
            disabled: item.disabled || false,
            slotName: `guarantee-${index}`,
          }))
        "
        class="tab"
      ></ProTab>
      <div class="list">
        <div class="item">
          <ProFilePreview
            ref="previewRef"
            :key="attachmentUri"
            :content="attachmentUri"
            type="pdf"
            @scroll="handleScroll"
          ></ProFilePreview>
        </div>
      </div>
      <div class="footer">
        <VanButton type="primary" block round @click="agreeMent">{{ props.text }}</VanButton>
      </div>
    </van-config-provider>
  </ProPopup>
</template>

<script lang="ts" setup name="filePreview">
import { AttachmentVOList } from '@/api/modules/product.data';
import themeVars from '../../../theme';

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  contentList: {
    type: Array,
    default: () => [],
  },
  activeIndex: {
    type: Number,
    default: 0,
  },
  text: {
    type: String,
    default: '',
  },
  forceReadCound: {
    type: Number,
    default: 0,
  },
});

const emits = defineEmits(['update:show', 'submit']);
const isShow = ref<boolean>(props.show);
const formatedContentList = ref<Array<any>>(props.contentList);
console.log('formatedContentList', formatedContentList);
const currentActiveIndex = ref<number>(props.activeIndex);
const previewRef = ref(null);

const attachmentUri = computed(() => {
  return formatedContentList.value[currentActiveIndex.value].attachmentUri;
});

const agreeMent = () => {
  emits('update:show', false);
  emits('submit');
};

watch(
  () => props,
  () => {
    isShow.value = props.show;
    currentActiveIndex.value = props.activeIndex;
  },
  {
    deep: true,
    immediate: true,
  },
);

const handleScroll = (el: any) => {
  if (el) {
    // console.log('====================');
    // console.log('el.target.scrollHeight', el.target.scrollHeight);
    // console.log('el.target.scrollTop', el.target.scrollTop);
    // console.log('el.target.clientHeight', el.target.clientHeight);
    if (Math.floor(el.target.scrollHeight - el.target.scrollTop) === el.target.clientHeight) {
      console.log('1111');
    }
  }
};

watch(
  () => currentActiveIndex.value,
  () => {
    if (previewRef.value) {
      console.log('previewRef.value', previewRef.value.scrollTop);
      setTimeout(() => {
        previewRef.value.scrollTop = 0;
      }, 1000);
    }
  },
  {
    immediate: true,
  },
);

const onBeforeClose = () => {
  console.log('removeEventListener');
  window.removeEventListener('scroll', handleScroll, true);
};

onMounted(() => {
  nextTick(() => {
    if (props.show) {
      window.addEventListener('scroll', handleScroll, true);
    }
  });
});

// onUnmounted(() => {
//   window.removeEventListener('scroll', handleScroll, false);
// });
</script>

<style lang="scss">
.file-preview-popup-wrap {
  overflow-y: auto;
  .tab {
    height: 106px;
    position: absolute;
    top: 0;
    width: 100%;

    .van-tab {
      padding: 0 $zaui-card-border;
    }

    .van-tabs__line {
      background: $primary-color;
    }
  }
  .list {
    height: calc(100% - 212px);
    overflow: auto;
  }
  .footer {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 $zaui-card-border;
    position: absolute;
    width: 100%;
    bottom: 0;
    background-color: #ffffff;
    z-index: 1;
    padding: 20px;
    .van-button {
      background: $primary-color;
      border-color: $primary-color;
      font-size: 24px;
    }
  }
}
</style>
