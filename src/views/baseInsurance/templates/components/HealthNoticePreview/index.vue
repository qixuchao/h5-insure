<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-09-15 17:44:21
 * @LastEditors: zhaopu
 * @LastEditTime: 2023-01-09 19:15:55
 * @FilePath: /zat-planet-h5-cloud-insure/src/views/chuangxin/baigebao/product/components/FIlePreview/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <ProPopup
    v-model:show="isShow"
    :height="80"
    class="health-notice-preview-popup-wrap"
    :closeable="false"
    @close="onClosePopup()"
  >
    <van-config-provider :theme-vars="themeVars" class="custom-provider">
      <!-- <ProTab
        v-if="isShow"
        v-model:active="currentActiveIndex"
        :list="
          contentList.map((item, index) => ({
            title: item.attachmentName,
            slotName: `guarantee-${index}`,
          }))
        "
        class="tab"
      ></ProTab> -->
      <div class="tip">
        <div class="content">
          <span>
            <span class="important-text">重要</span>
            请确认被保险人是否存在下列问题，请如实告知，否则将对您的理赔权益或合同效力产生影响
          </span>
        </div>
      </div>
      <div class="title">{{ contentList[0].attachmentName }}</div>
      <div class="list">
        <div class="item">
          <ProFilePreview :key="attachmentUri" :content="attachmentUri" :type="attachmentType"></ProFilePreview>
        </div>
      </div>
      <div class="footer">
        <VanButton block round class="left" @click="onConfirmHealth('N')">部分为是</VanButton>
        <VanButton type="primary" plain block round @click="onConfirmHealth('allFalse')">以上全否</VanButton>
      </div>
    </van-config-provider>
  </ProPopup>
</template>

<script lang="ts" setup name="filePreview">
import { withDefaults } from 'vue';
import { useTheme } from '@/views/baseInsurance/theme';

const props = withDefaults(defineProps<{ show: boolean; activeIndex: number; contentList: any[] }>(), {
  show: true,
  contentList: () => [],
  activeIndex: 0,
});

const themeVars = useTheme();
const emits = defineEmits(['update:show', 'onConfirmHealth', 'onCloseHealthByMask']);
const isShow = ref<boolean>(props.show);
const currentActiveIndex = ref<number>(props.activeIndex);

const attachmentUri = computed(() => {
  return props.contentList[currentActiveIndex.value]?.attachmentUri;
});

const attachmentType = computed(() => {
  return props.contentList[currentActiveIndex.value]?.attachmentType;
});

const isCoverClose = ref<boolean>(true);

const onConfirmHealth = (flag: string) => {
  if (flag === 'allFalse') {
    isCoverClose.value = false;
    emits('update:show', false);
  }
  emits('onConfirmHealth', flag);
};

const onClosePopup = () => {
  if (isCoverClose.value) {
    emits('onCloseHealthByMask');
  }
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
</script>

<style lang="scss">
.health-notice-preview-popup-wrap {
  .custom-provider {
    height: 100%;
  }
  .tab {
    height: 106px;
    // position: absolute;
    // top: 0;
    width: 100%;

    .van-tab {
      padding: 0 $zaui-card-border;
    }

    .van-tabs__line {
      background: $primary-color;
    }
  }
  .tip {
    margin: 0px 32px 40px;
    padding-top: 40px;
    .content {
      padding: 32px;
      background: #fff8f3;
      border-radius: 20px;
      display: flex;
      align-items: center;

      span {
        display: inline-block;
        font-size: 28px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #333333;
        line-height: 40px;
      }
    }

    .important-text {
      height: 40px;
      padding: 0px 8px;
      border-radius: 8px;
      margin-top: -6px;
      font-size: 20px !important;
      font-family: PingFangSC-Medium, PingFang SC;
      background: var(--van-linear-bg) !important;
      color: #ffffff !important;
      line-height: 40px !important;
    }
  }

  .title {
    text-align: center;
    height: 56px;
    font-size: 40px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #333333;
    line-height: 56px;
  }
  .list {
    height: calc(100% - 420px);
    overflow-y: scroll;
  }
  .footer {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    bottom: 0;
    background-color: #ffffff;
    z-index: 1;
    padding: 16px 20px;
    .van-button--primary {
      background: $primary-color;
      border-color: $primary-color;
      font-size: 24px;
    }

    .van-button--plain.van-button--primary {
      color: $primary-color;
      background-color: #ffffff;
      margin-left: 30px;
    }

    .left {
      width: 50% !important;
    }
  }
}
</style>
