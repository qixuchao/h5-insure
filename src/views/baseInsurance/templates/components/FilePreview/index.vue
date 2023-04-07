<template>
  <ProPopup
    v-model:show="isShow"
    class="file-preview-popup-wrap"
    :closeable="false"
    @close="emits('onCloseFilePreviewByMask')"
  >
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
    <div ref="previewRef" class="list">
      <div v-if="attachmentActiveList.length === 1" class="item">
        <AsyncProFilePreview
          :key="attachmentActiveList[0].materialSourceDesc"
          :content="attachmentActiveList[0].materialContent"
          :type="attachmentActiveList[0].materialSource"
          :forbid-click="true"
        />
      </div>
      <div v-else class="attachment-list">
        <div
          v-for="(item, index) in attachmentActiveList"
          :key="index"
          class="attachment-list-item"
          @click="onClickFileItem(item)"
        >
          <div class="attachment-list-item-name">{{ item.materialName }}</div>
          <div class="attachment-list-item-icon">
            <ProSvg name="arrow-right"></ProSvg>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <ProShadowButton
        v-if="showReadBtn"
        :shadow="false"
        :theme-vars="themeVars"
        :disabled="isAgreeBtnDisabled"
        class="right"
        :text="`${beforeReadOverText}(${currentActiveIndex + 1}/${forceReadCount})`"
        @click="agreeForceReadFile"
      >
      </ProShadowButton>
      <ProShadowButton
        v-else
        :disabled="isAgreeBtnDisabled"
        :shadow="false"
        :theme-vars="themeVars"
        :text="props.text"
        @click="agreeMent"
      ></ProShadowButton>
    </div>
  </ProPopup>
</template>

<script lang="ts" setup name="filePreview">
import { withDefaults } from 'vue';
import { useTheme } from '../../../theme';
import { AttachmentVOList } from '@/api/modules/product.data';
import ProShadowButton from '../ProShadowButton/index.vue';
import { openPreviewFilePage } from '@/views/baseInsurance/utils';

const AsyncProFilePreview = defineAsyncComponent(() => import('@/components/ProFilePreview/index.vue'));

interface Props {
  show: boolean;
  contentList: any[];
  activeIndex: number;
  text: string;
  beforeReadOverText?: string;
  forceReadCount?: number;
  isOnlyView: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  show: false,
  contentList: () => [],
  activeIndex: 0,
  text: '',
  beforeReadOverText: '同意，下一条',
  forceReadCount: 0,
  isOnlyView: false,
});

const emits = defineEmits(['update:show', 'submit', 'onCloseFilePreviewByMask']);
const themeVars = useTheme();
const calcuateFlg = ref<boolean>(true);
const isShow = ref<boolean>(props.show);
const formatedContentList = ref<Array<any>>(
  props.contentList.map((e: any, index) => ({ ...e, disabled: true, readDisabled: true })), // disabled: tab禁用， readDisabled: 阅读下一条按钮禁用
);
const currentActiveIndex = ref<number>(props.activeIndex);
const readCount = ref<number>(0);
const previewRef = ref(null);

const attachmentActiveList = computed(() => {
  return formatedContentList.value?.[currentActiveIndex.value]?.attachmentList;
});

// const attachmentUri = computed(() => {
//   return formatedContentList.value?.[currentActiveIndex.value]?.attachmentUri;
// });

const isAgreeBtnDisabled = computed(() => {
  return formatedContentList.value[currentActiveIndex.value]?.readDisabled;
});

const showReadBtn = computed(() => {
  if (currentActiveIndex.value >= props.forceReadCount - 1) {
    return false;
  }
  if (readCount.value >= props.forceReadCount) {
    return false;
  }
  if (readCount.value < props.forceReadCount) {
    if (currentActiveIndex.value === props.forceReadCount - 1) return false;
    return true;
  }
  return false;
  // return formatedContentList.value.slice(0, props.forceReadCount).filter((e) => e.readDisabled).length > 0;
});

const onClickFileItem = (item: AttachmentVOList) => {
  const fileInfo = {
    fileType: item.materialSource,
    fileUri: item.materialContent,
  };
  openPreviewFilePage(fileInfo);
};

const agreeForceReadFile = () => {
  currentActiveIndex.value += 1;
};

const agreeMent = () => {
  if (props.isOnlyView) {
    emits('update:show', false);
    return;
  }
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
    const scrollHeight = el.target?.scrollHeight || el.scrollHeight;
    const scrollTop = el.target?.scrollTop || el.scrollTop;
    const clientHeight = el.target?.clientHeight || el.clientHeight;

    if (Math.floor(scrollHeight - scrollTop - 15) <= clientHeight && calcuateFlg.value) {
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
      if (readCount.value >= props.forceReadCount) {
        formatedContentList.value.forEach((e: any) => {
          e.disabled = false;
          e.readDisabled = false;
        });
      }
      setTimeout(() => {
        calcuateFlg.value = true;
      }, 800);
    }
    nextTick(() => {
      setTimeout(() => {
        const el = document.querySelector('.viewerContainer') || document.querySelector('.com-file-preview .content');
        if (el) {
          el.removeEventListener('scroll', handleScroll);
          handleScroll(el);
          el.addEventListener('scroll', handleScroll);
        }
      }, 2000);
    });
  },
  {
    immediate: true,
  },
);
</script>

<style lang="scss" scope>
.file-preview-popup-wrap {
  .custom-provider {
    height: 100%;
  }
  .tab {
    height: 106px;
    width: 100%;

    .van-tab {
      padding: 10px $zaui-card-border 0px;
    }
    .van-tab__text {
      font-size: 30px !important;
      font-family: PingFangSC-Medium, PingFang SC !important;
      font-weight: 500;
    }
    .van-tab--active {
      .van-tab__text {
        color: $primary-color !important;
      }
    }

    .van-tabs__line {
      background: $primary-color !important;
    }
  }

  .list {
    width: 100%;
    height: calc(100% - 228px);
    overflow-y: scroll;

    .attachment-list {
      margin: 10px 32px 58px;

      .attachment-list-item {
        border-bottom: 1px solid #eeeeee;
        line-height: 45px;
        padding: 32px 0px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .attachment-list-item-name {
          font-size: 32px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #333333;
        }

        .attachment-list-item-icon {
          min-width: 86px;
          text-align: right;

          .svg-icon {
            display: inline-block;
            width: 32px;
            height: 32px;
            font-size: 32px;
          }
        }
      }
    }

    .item {
      height: 100%;

      .com-file-preview {
        .pdf-wapper {
          height: 100%;

          .viewerContainer {
            height: 100%;
            // .pinch-zoom-container {
            //   height: 50% !important;
            // }
          }
        }
      }
    }
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
    padding: 16px 20px;
    .pro-shadow-button {
      width: 100%;
      height: 88px;
    }
    .van-button {
      font-size: 34px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #ffffff;
      line-height: 48px;
    }
  }
}
</style>
