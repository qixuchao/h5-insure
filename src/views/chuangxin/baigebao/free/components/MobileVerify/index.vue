<template>
  <VanForm ref="formRef" label-width="60">
    <van-cell-group>
      <van-field
        v-model="state.mobile"
        name="mobile"
        label="手机号"
        clearable
        placeholder="请输入手机号"
        :maxlength="FIELD_LENGTH.MOBILE"
        :rules="[{ validator: validatorMobile }]"
      />
      <van-field
        v-model="state.smsCode"
        name="smsCode"
        label="验证码"
        clearable
        placeholder="请输入验证码"
        :maxlength="FIELD_LENGTH.SMS_CODE"
        :rules="[{ validator: validatorCode }]"
      >
        <template #button>
          <div :class="['sms-code', { 'count-down': countDownTimer > 0 }]" @click="onCaptha">{{ smsText }}</div>
        </template>
      </van-field>
    </van-cell-group>
    <div class="submit" @click="onSubmit"></div>
  </VanForm>
</template>

<script lang="ts" setup>
import { FormInstance, Toast } from 'vant';
import { defineProps } from 'vue';
import { sendCode, checkCode } from '@/api/modules/phoneVerify';
import { validateMobile, validateSmsCode } from '@/utils/validator';
import { FIELD_LENGTH } from '../../../utils';

const props = defineProps({
  userInfo: {
    type: Object,
    default: () => {},
  },
});

const emits = defineEmits(['on-verify']);

const formRef = ref<FormInstance>({} as FormInstance);
const isSendSmsCode = ref(false);

const maxCountDown = 30;
const countDownTimer = ref<number>(0);
const smsText = ref<string>('获取验证码');

const state = reactive({
  mobile: props.userInfo?.mobile,
  smsCode: '',
});

const validatorMobile = (value: string) => {
  if (validateMobile(value)) {
    return true;
  }
  return '请输入正确的手机号';
};

const validatorCode = (value: string) => {
  if (validateSmsCode(value)) {
    return true;
  }
  return '请输入正确的验证码';
};

const onCountDown = () => {
  if (countDownTimer.value > 0) return;
  countDownTimer.value = maxCountDown;
  const countInterval = () => {
    smsText.value = `${countDownTimer.value}s`;
    countDownTimer.value -= 1;
  };
  countInterval();
  const timer = setInterval(() => {
    if (countDownTimer.value === 0) {
      smsText.value = '获取验证码';
      countDownTimer.value = 0;
      clearInterval(timer);
    } else {
      countInterval();
    }
  }, 1000);
};

const onCaptha = async () => {
  if (countDownTimer.value > 0) {
    return;
  }
  formRef?.value.validate('mobile').then(async () => {
    const res = await sendCode(state.mobile);
    const { code, data } = res;
    if (code === '10000') {
      isSendSmsCode.value = true;
      Toast({
        message: '短信发送成功，请查收',
      });
      onCountDown();
    }
  });
};

const onCheckCode = async () => {
  // 手机号验证
  const res = await checkCode(state.mobile, state.smsCode);
  const { data } = res;
  if (data) {
    emits('on-verify', state);
  }
};

const onSubmit = async () => {
  formRef?.value.validate().then(async () => {
    onCheckCode();
  });
};

watch(
  () => state,
  () => {
    if (validateMobile(state.mobile) && validateSmsCode(state.smsCode)) {
      if (isSendSmsCode.value) {
        onCheckCode();
      }
    }
  },
  { deep: true, immediate: true },
);
</script>

<style lang="scss" scoped></style>
