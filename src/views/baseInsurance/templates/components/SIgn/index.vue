<!--
 * @Author: za-qixuchao qixuchao@zhongan.com
 * @Date: 2022-11-28 11:26:50
 * @LastEditors: za-qixuchao qixuchao@zhongan.com
 * @LastEditTime: 2022-11-30 18:55:05
 * @FilePath: /zat-planet-h5-cloud-insure/src/views/baseInsurance/templates/components/SIgn/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="sign-wrap">
    <img src="" alt="" />
    <van-button type="primary" @click="openSign">点击签字</van-button>
  </div>
  <van-popup
    v-model:show="isShowSign"
    position="bottom"
    :style="{
      height: '100%',
    }"
  >
    <div class="popup-body">
      <div class="sign-container">
        <ProSign ref="signRef" :option="option"></ProSign>
        <div class="operate-bar">
          <span>请投保人正楷签署您的签名: 高富友</span>
          <van-button @click="goBack">返回</van-button>
          <van-button @click="rewrite">重写</van-button>
          <van-button @click="confirm">确定签字</van-button>
        </div>
      </div>
    </div>
  </van-popup>
</template>
<script lang="ts" setup name="sign">
import { withDefaults, Ref } from 'vue';

const props = withDefaults(
  defineProps<{
    option: any;
  }>(),
  {
    option: {},
  },
);

const isShowSign = ref<boolean>(false);
const signRef = ref<Ref>();

const openSign = () => {
  isShowSign.value = true;
};

const goBack = () => {
  isShowSign.value = false;
};
const rewrite = () => {
  signRef.value?.clear?.();
};
const confirm = () => {};
</script>

<style lang="scss" scope>
.popup-body {
  width: 100vw;
  height: 100vh;
}
.sign-container {
  transform: rotateZ(90deg);
  transform-origin: center;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  :deep(.com-sign-wrap) {
    width: 100%;
    .canvas {
      transform: rotateZ(-90deg);
    }
  }
}
</style>
