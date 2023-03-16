<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-12 10:50:33
 * @LastEditors: kevin.liang
 * @LastEditTime: 2023-03-15 20:16:08
 * @FilePath: /zat-planet-h5-cloud-insure/src/components/ProPopup/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <Popup
    v-model:show="isShow"
    v-bind="$attrs"
    position="bottom"
    :style="{ height: height > 100 ? `${height}px` : `${height}%` }"
    round
    :closeable="closeable"
    class="com-pro-popup"
    @close="emits('close')"
  >
    <div class="pop-container">
      <div v-if="title" class="header">
        {{ title }}
      </div>
      <div class="body">
        <slot> </slot>
      </div>
      <div v-if="showFooter" class="footer">
        <VanButton type="primary" block @click="handleSubmit">确定</VanButton>
      </div>
    </div>
  </Popup>
</template>

<script lang="ts" setup>
import { Popup } from 'vant';

const emits = defineEmits(['update:show', 'submit', 'close']);

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  showFooter: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: '',
  },
  height: {
    type: Number,
    default: 85,
  },
  closeable: {
    type: Boolean,
    default: true,
  },
});

const instance = getCurrentInstance();

const isShow = ref(props.show);

const handleSubmit = () => {
  emits('submit');
};

watch(
  () => props.show,
  (newVal) => {
    isShow.value = newVal;
    instance?.update();
  },
);

watch(isShow, (val) => {
  emits('update:show', val);
});
</script>
<style lang="scss" scope>
.com-pro-popup {
  .pop-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    .header {
      width: 100%;
      flex: 0 0 104px;
      font-size: 34px;
      font-weight: 600;
      color: #393d46;
      text-align: center;
      line-height: 104px;
      border-bottom: 1px solid $zaui-line;
    }
    .body {
      height: 100%;
    }
    .footer {
      flex: 0 0 104px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
