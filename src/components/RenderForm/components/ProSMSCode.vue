<template>
  <ProFieldV2
    v-if="!$attrs.isView"
    class="com-pro-sms-code"
    type="digit"
    :maxlength="INPUT_MAX_LENGTH.SMS_CODE"
    v-bind="$attrs"
  >
    <template #extra>
      <div class="button-extra">
        <van-button class="sms-code" size="small" plain type="primary" @click="onSendSmsCode">{{ smsText }}</van-button>
      </div>
    </template>
  </ProFieldV2>
</template>

<script lang="ts" setup>
import { Toast } from 'vant';
import { useCountDown } from '@vant/use';
import { VAN_PRO_FORM_KEY, INPUT_MAX_LENGTH } from '../utils';
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
  iscountdowning: false,
});

const { current, start, reset } = useCountDown({
  // 倒计时 24 小时
  time: props.time * 1000,
  onFinish() {
    state.iscountdowning = false;
  },
});

// 发送验证码
const onSendSmsCode = () => {
  if (!state.iscountdowning) {
    formRef.value
      .validate(props.relatedName)
      .then(() => {
        props.sendSMSCode({ mobile: formState.formData[props.relatedName] }, () => {
          state.iscountdowning = true;
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
  return state.iscountdowning ? `${seconds}s` : props.smsText;
});
</script>

<style lang="scss" scoped>
.com-pro-sms-code {
  .sms-code {
    border: 0;
  }
}
</style>
