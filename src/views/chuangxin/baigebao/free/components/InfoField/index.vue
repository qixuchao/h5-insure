<template>
  <VanForm ref="formRef" label-width="60">
    <van-cell-group>
      <van-field
        v-model="state.name"
        name="name"
        label="姓名"
        clearable
        placeholder="请输入姓名"
        maxlength="10"
        :rules="[{ validator: nameValidator }]"
      />
      <van-field
        v-model="state.certNo"
        name="certNo"
        label="身份证"
        clearable
        placeholder="请输入身份证号"
        maxlength="20"
        :rules="[{ validator: validCertNo }]"
      >
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
import type { FormInstance } from 'vant';
import { defineProps } from 'vue';
import { Toast } from 'vant/es';
import { validateName } from '@/utils/validator';
import { validateIdCardNo } from '@/components/ProField/utils';

const props = defineProps({
  info: {
    type: Object,
    default: () => {},
  },
});

const emits = defineEmits(['on-submit']);

const formRef = ref<FormInstance>({} as FormInstance);

const nameReg = /\W/;
const smsCodeReg = /^\d{6}$/;

const state = reactive({
  name: props.info.userInfo.name,
  certNo: props.info.userInfo.certNo,
  agree: '',
});

const validCertNo = (images: Array<string>) => {
  if (validateIdCardNo(state.certNo)) {
    return true;
  }
  return '请填写正确的证件号';
};

const nameValidator = (name: string) => {
  if (validateName(name)) {
    return true;
  }
  return '请输入正确的姓名';
};

const onSubmit = () => {
  formRef?.value.validate().then(async (a) => {
    if (!state.agree) {
      Toast('请勾选协议');
      return;
    }
    emits('on-submit', state);
  });
};
</script>

<style lang="scss" scoped></style>
