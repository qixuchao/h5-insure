<template>
  <VanForm ref="formRef" label-width="80">
    <van-cell-group>
      <van-field
        v-model="state.name"
        name="name"
        label="姓名"
        clearable
        placeholder="请输入姓名"
        :maxlength="FIELD_LENGTH.NAME"
        :rules="[{ validator: nameValidator }]"
      />
      <van-field
        v-model="state.certNo"
        name="certNo"
        label="身份证"
        clearable
        placeholder="请输入身份证号"
        :maxlength="FIELD_LENGTH.ID_CARD"
        :rules="[{ validator: validCertNo }]"
      >
      </van-field>
    </van-cell-group>
    <div :class="[{ 'check-submit': props.isCheck }, { submit: !props.isCheck }]" @click="onSubmit"></div>
  </VanForm>
</template>

<script lang="ts" setup>
import type { FormInstance } from 'vant';
import { defineProps } from 'vue';
import { validateName } from '@/utils/validator';
import { validateIdCardNo } from '@/components/ProField/utils';
import { FIELD_LENGTH } from '../../../utils';

const props = defineProps({
  isCheck: {
    type: Boolean,
    default: false,
  },
  userInfo: {
    type: Object,
    default: () => {},
  },
});

const emits = defineEmits(['on-submit']);

const formRef = ref<FormInstance>({} as FormInstance);

const state = reactive({
  name: props.userInfo.name,
  certNo: props.userInfo.certNo,
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
    emits('on-submit', state);
  });
};
</script>

<style lang="scss" scoped></style>
