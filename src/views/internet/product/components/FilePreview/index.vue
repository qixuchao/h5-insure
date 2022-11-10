<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-09-15 17:44:21
 * @LastEditors: zhaopu
 * @LastEditTime: 2022-11-10 20:41:25
 * @FilePath: /zat-planet-h5-cloud-insure/src/views/chuangxin/baigebao/product/components/FIlePreview/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <ProPopup
    v-model:show="isShow"
    class="file-preview-popup-wrap"
    :closeable="false"
    @close="emits('onCloseFilePreview')"
  >
    <van-config-provider :theme-vars="themeVars" class="custom-provider">
      <ProTab
        v-if="isShow"
        v-model:active="currentActiveIndex"
        :list="
          formatedContentList.map((item, index) => ({
            title: item.attachmentName,
            disabled: index == currentActiveIndex ? false : item.disabled || false,
            slotName: `guarantee-${index}`,
          }))
        "
        class="tab"
      ></ProTab>
      <div ref="previewRef" class="list" @scroll="handleScroll">
        <div class="item">
          <ProFilePreview :key="attachmentUri" :content="attachmentUri" type="pdf" :forbid-click="true" />
        </div>
      </div>
      <div class="footer">
        <VanButton
          v-if="showReadBtn"
          :disabled="isAgreeBtnDisabled"
          type="primary"
          block
          round
          @click="agreeForceReadFile"
          >{{ `${beforeReadOverText}(${currentActiveIndex + 1}/${forceReadCound})` }}</VanButton
        >
        <VanButton v-else :disabled="isAgreeBtnDisabled" type="primary" block round @click="agreeMent">{{
          props.text
        }}</VanButton>
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
  beforeReadOverText: {
    type: String,
    default: '同意，下一条',
  },
  forceReadCound: {
    type: Number,
    default: 0,
  },
});

const emits = defineEmits(['update:show', 'submit', 'onCloseFilePreview']);
const isShow = ref<boolean>(props.show);
const calcuateFlg = ref<boolean>(true);
const formatedContentList = ref<Array<any>>(
  props.contentList.map((e: any, index) => ({ ...e, disabled: true, readDisabled: true })), // disabled: tab禁用， readDisabled: 阅读下一条按钮禁用
);
const currentActiveIndex = ref<number>(props.activeIndex);
const readCount = ref<number>(0);
const previewRef = ref(null);

const attachmentUri = computed(() => {
  return formatedContentList.value?.[currentActiveIndex.value]?.attachmentUri;
});

const isAgreeBtnDisabled = computed(() => {
  return formatedContentList.value[currentActiveIndex.value]?.readDisabled;
});

const showReadBtn = computed(() => {
  if (currentActiveIndex.value >= props.forceReadCound - 1) {
    return false;
  }
  if (readCount.value >= props.forceReadCound) {
    return false;
  }
  if (readCount.value < props.forceReadCound) {
    if (currentActiveIndex.value === props.forceReadCound - 1) return false;
    return true;
  }
  return false;
  // return formatedContentList.value.slice(0, props.forceReadCound).filter((e) => e.readDisabled).length > 0;
});

const agreeForceReadFile = () => {
  currentActiveIndex.value += 1;
};

const agreeMent = () => {
  emits('update:show', false);
  emits('submit');
};

const onClose = () => {
  emits('update:show', false);
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
    // console.log('el.target.scrollHeight', el.target.scrollHeight);
    // console.log('el.target.scrollTop', el.target.scrollTop);
    // console.log('el.target.clientHeight', el.target.clientHeight);
    console.log('calcuateFlg', calcuateFlg.value);
    if (Math.floor(el.target.scrollHeight - el.target.scrollTop - 15) <= el.target.clientHeight && calcuateFlg.value) {
      console.log('111111');
      if (formatedContentList.value[currentActiveIndex.value].readDisabled) {
        formatedContentList.value[currentActiveIndex.value].disabled = false;
        formatedContentList.value[currentActiveIndex.value].readDisabled = false;
        formatedContentList.value[currentActiveIndex.value + 1].disabled = false;
        readCount.value += 1;
      }
    }
  }
};

watch(
  () => currentActiveIndex.value,
  () => {
    calcuateFlg.value = false;
    if (props.show) {
      if (readCount.value >= props.forceReadCound) {
        formatedContentList.value.forEach((e: any) => {
          e.disabled = false;
          e.readDisabled = false;
        });
      }
      if (previewRef.value) {
        previewRef.value.scrollTop = 0;
        setTimeout(() => {
          calcuateFlg.value = true;
        }, 1000);
      }
    }
  },
  {
    immediate: true,
  },
);
</script>

<style lang="scss">
.file-preview-popup-wrap {
  .custom-provider {
    height: 100%;
  }
  .tab {
    height: 106px;
    width: 100%;

    .van-tab {
      padding: 0 $zaui-card-border;
    }

    .van-tabs__line {
      background: $primary-color;
    }
  }
  .list {
    height: calc(100% - 240px);
    overflow-y: scroll;
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
