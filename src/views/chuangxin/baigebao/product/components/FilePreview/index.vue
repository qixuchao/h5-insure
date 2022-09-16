<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-09-15 17:44:21
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-09-15 21:33:45
 * @FilePath: /zat-planet-h5-cloud-insure/src/views/chuangxin/baigebao/product/components/FIlePreview/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <ProPopup
    v-model:show="isShow"
    :height="80"
    class="file-preview-popup-wrap"
    :closeable="false"
    @close="emits('update:show', false)"
  >
    <ProTab
      v-model:active="currentActiveIndex"
      :list="
        contentList.map((item, index) => ({
          title: item.attachmentName,
          slotName: `guarantee-${index}`,
        }))
      "
      class="tab"
    ></ProTab>
    <div class="list">
      <div class="item">
        <ProFilePreview :content="contentList[currentActiveIndex].attachmentUri" type="pdf"></ProFilePreview>
      </div>
    </div>
    <div class="footer">
      <VanButton type="primary" block round @click="agreeMent">我已逐页阅读并确认完全符合健康告知内容</VanButton>
    </div>
  </ProPopup>
</template>

<script lang="ts" setup name="filePreview">
import { withDefaults } from 'vue';
import themeVars from '../../../theme';

const props = withDefaults(defineProps<{ show: boolean; activeIndex: number; contentList: any[] }>(), {
  show: true,
  contentList: () => [],
  activeIndex: 0,
});

const emits = defineEmits(['update:show', 'submit']);
const isShow = ref<boolean>(props.show);
const currentActiveIndex = ref<number>(props.activeIndex);

const agreeMent = () => {
  emits('update:show', false);
  emits('submit');
};

watch(
  () => props,
  () => {
    isShow.value = props.show;
  },
  {
    deep: true,
    immediate: true,
  },
);
</script>

<style lang="scss">
.file-preview-popup-wrap {
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
