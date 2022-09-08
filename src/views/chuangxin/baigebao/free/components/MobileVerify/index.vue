<template>
  <VanForm ref="formRef">
    <van-cell-group>
      <van-field
        v-model="state.mobile"
        name="mobile"
        label="手机号"
        clearable
        placeholder="请输入手机号"
        :rules="[{ pattern: mobileReg, message: '请输入正确的手机号' }]"
      />
      <van-field
        v-model="state.smsCode"
        name="smsCode"
        label="验证码"
        clearable
        placeholder="请输入验证码"
        :rules="[{ pattern: smsCodeReg, message: '请输入正确的验证码' }]"
      >
        <template #button>
          <div :class="['sms-code', { 'count-down': countDownTimer > 0 }]" @click="onCaptha">{{ smsText }}</div>
        </template>
      </van-field>
    </van-cell-group>
    <div class="submit" @click="onSubmit"></div>
    <div class="agree">
      <van-checkbox v-model="state.agree" name="agree" shape="square"> </van-checkbox>
      <div>
        我已阅读并同意
        <ProPDFviewer
          v-for="(item, index) in props.info?.attachmentList || []"
          :key="index"
          class="file-name"
          :title="`《${item.attachmentName}》`"
          :content="item.attachmentUrl"
          type="pdf"
        >
        </ProPDFviewer>
      </div>
    </div>
  </VanForm>
</template>

<script lang="ts" setup>
import { FormInstance, Toast } from 'vant';
import { defineProps } from 'vue';
import { sendCode, checkCode } from '@/api/modules/phoneVerify';

const props = defineProps({
  info: {
    type: Object,
    default: () => {},
  },
});

const emits = defineEmits(['on-verify']);

const formRef = ref<FormInstance>({} as FormInstance);

const maxCountDown = 30;
const countDownTimer = ref<number>(0);
const smsText = ref<string>('获取验证码');

const mobileReg = /\d{9}/;
const smsCodeReg = /^\d{6}$/;

const state = reactive({
  mobile: props.info?.userInfo?.mobile,
  smsCode: '',
  agree: '',
});

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
    // if (!state.agree) {
    //   Toast('请勾选协议');
    // }
    onCheckCode();
  });
};

watch(
  () => state,
  () => {
    if (mobileReg.test(state.mobile) && smsCodeReg.test(state.smsCode)) {
      onCheckCode();
    }
  },
  { deep: true, immediate: true },
);
</script>

<style lang="scss" scoped></style>
