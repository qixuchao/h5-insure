<template>
  <ProFieldV2 v-if="!isView" class="com-pro-sms-code" type="digit" v-bind="$attrs" :is-view="isView">
    <template #extra>
      <van-button class="extra-button" size="small" plain type="primary" @click="onSendSmsCode">{{
        smsText
      }}</van-button>
    </template>
  </ProFieldV2>
</template>

<script lang="ts" setup>
import { Toast } from 'vant';
import { useCountDown } from '@vant/use';
import { VAN_PRO_FORM_KEY } from '../utils';
import ProFieldV2 from './ProFieldV2.vue';

const props = defineProps({
  time: {
    type: Number,
    default: 60,
  },
  smsText: {
    type: String,
    default: '验证码',
  },
  relatedName: {
    type: String,
    default: 'mobile',
  },
  isView: {
    type: Boolean,
    default: false,
  },
  sendSMSCode: {
    type: Function,
    default: (callback) => {
      typeof callback === 'function' && callback();
    },
  },
});

const { formState, formRef } = inject(VAN_PRO_FORM_KEY) || {};

const state = reactive({
  isCountdowning: false,
});

const { current, start, reset } = useCountDown({
  // 倒计时 24 小时
  time: props.time * 1000,
  onFinish() {
    state.isCountdowning = false;
  },
});

// 发送验证码
const onSendSmsCode = () => {
  if (!state.isCountdowning) {
    formRef.value
      .validate(props.relatedName)
      .then(() => {
        props.sendSMSCode({ mobile: formState.formData[props.relatedName] }, () => {
          state.isCountdowning = true;
          Toast({
            message: '短信发送成功，请查收',
          });
          reset();
          start();
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }
};

// 倒计时文本
const smsText = computed(() => {
  const { seconds } = current.value || {};
  if (seconds === 0) {
    return props.smsText;
  }
  return state.isCountdowning ? `${seconds}s` : props.smsText;
});
</script>

<style lang="scss" scoped>
.com-pro-sms-code {
  .extra-button {
    display: inline-block;
    border: 0;
    width: 100px;
    padding: 0;
    text-align: right;
    align-self: center;
    :deep(.van-button__content) {
      justify-content: flex-end;
      border-left: 1px solid $zaui-line;
    }
    :deep(.van-button__text) {
      font-size: var(--van-cell-font-size);
      display: inline-block;
      margin-bottom: 4px;
    }
  }
}
</style>
