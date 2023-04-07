<template>
  <ProFieldV2 v-if="!$attrs.isView" class="com-pro-sms-code" type="digit" v-bind="$attrs">
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
      .catch(() => {});
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
    border: 0;
    align-self: center;
    :deep(.van-button__text) {
      font-size: var(--van-cell-font-size);
    }
  }
}
</style>
