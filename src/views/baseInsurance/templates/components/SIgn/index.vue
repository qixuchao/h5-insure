<!--
 * @Author: za-qixuchao qixuchao@zhongan.com
 * @Date: 2022-11-28 11:26:50
 * @LastEditors: kevin.liang
 * @LastEditTime: 2022-12-04 01:01:13
 * @FilePath: /zat-planet-h5-cloud-insure/src/views/baseInsurance/templates/components/SIgn/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="sign-wrap">
    <img v-if="signString" class="previewSign" :src="signString" alt="" />
    <van-button type="primary" round size="small" @click="openSign">{{
      signString ? '重新签名' : '点击签字'
    }}</van-button>
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
        <ProSign ref="signRef" placeholder="请在此处签名"></ProSign>
        <div class="operate-bar">
          <span><van-icon name="info" color="#ffaf22" /> 请投保人正楷签署您的签名:</span>
          <div class="btns">
            <van-button type="default" class="btn" @click="goBack">返回</van-button>
            <van-button type="default" class="btn" @click="rewrite">重写</van-button>
            <van-button type="primary" class="btn" :disabled="!signString" @click="confirm">确定签字</van-button>
          </div>
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
    modelValue: string;
  }>(),
  {
    option: {},
    modelValue: '',
  },
);

const isShowSign = ref<boolean>(false);
const signRef = ref<Ref>();
const emits = defineEmits(['update:modelValue']);

const signString = computed(() => {
  let str = '';
  if (signRef.value) {
    str = signRef.value.save();
  }
  return str;
});

const openSign = () => {
  isShowSign.value = true;
};

const goBack = () => {
  isShowSign.value = false;
};
const rewrite = () => {
  signRef.value?.clear?.();
};
const confirm = () => {
  emits('update:modelValue', signString.value);
  isShowSign.value = false;
};
</script>

<style lang="scss" scope>
.popup-body {
  width: 100%;
  height: 100%;
}

.previewSign {
  width: 100px;
  height: 100px;
}
.sign-container-wrap {
  width: 100%;
  padding-left: 150px;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  overflow: hidden;

  .operate-bar {
    position: absolute;
    width: 100vh;
    display: flex;
    margin: 20px;
    align-items: center;
    transform: rotateZ(90deg);
    padding-left: 100px;
    justify-content: space-between;
    align-items: center;
    transform: rotateZ(90deg) translate3d(95vh, 660px, 0px);
    padding: 20px;
    transform-origin: right;
    .btn {
      width: 240px;
      margin-right: 20px;
    }
  }

  .com-sign-wrapper {
    width: 100%;
    height: 100%;
    .placeholder {
      transform: rotateZ(90deg);
    }
  }
}
</style>
