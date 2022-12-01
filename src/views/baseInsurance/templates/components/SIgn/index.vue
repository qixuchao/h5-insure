<!--
 * @Author: za-qixuchao qixuchao@zhongan.com
 * @Date: 2022-11-28 11:26:50
 * @LastEditors: za-qixuchao qixuchao@zhongan.com
 * @LastEditTime: 2022-12-01 21:19:51
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
      <div class="sign-container-wrap">
        <ProSign ref="signRef" :option="option"></ProSign>
        <div class="operate-bar">
          <span>请投保人正楷签署您的签名:</span>
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
  width: 100%;
  height: 100%;
}
.sign-container-wrap {
  width: 100%;
  padding-left: 150px;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;

  .operate-bar {
    position: absolute;
    transform: rotateZ(90deg);
  }

  .com-sign-wrap {
    width: 100%;
    height: 100%;
    .placeholder {
      transform: rotateZ(90deg);
    }
  }
}
</style>
