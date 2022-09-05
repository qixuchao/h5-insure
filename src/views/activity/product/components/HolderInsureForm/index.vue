<template>
  <ProForm ref="formRef">
    <div>
      <div class="title">投保人</div>
      <ProField
        v-model="state.formInfo.holder.name"
        label="姓名"
        name="name"
        required
        placeholder="请输入姓名"
        :disabled="props.disabled"
      />
      <ProField
        v-model="state.formInfo.holder.certNo"
        label="证件号码"
        name="certNo"
        required
        placeholder="请输入身份证号"
        :disabled="props.disabled"
        :validate-type="[VALIDATE_TYPE_ENUM.ID_CARD]"
      />
      <ProField
        v-model="state.formInfo.holder.mobile"
        label="手机号"
        name="mobile"
        :disabled="props.disabled"
        required
        placeholder="请输入手机号"
      />
      <ProField
        v-model="state.formInfo.holder.socialFlag"
        label="有无社保"
        name="socialFlag"
        required
        placeholder="请选择"
      >
        <template #input>
          <ProRadioButton v-model="state.formInfo.holder.socialFlag" :options="SOCIAL_SECURITY"></ProRadioButton>
        </template>
      </ProField>
    </div>
    <ProDivider />
    <div>
      <div class="title">为谁投保</div>
      <ProField
        v-model="state.formInfo.insured.relationToHolder"
        class="relation-to-Holder"
        label=""
        name="relationToHolder"
        placeholder="请选择"
      >
        <template #input>
          <ProRadioButton
            v-model="state.formInfo.insured.relationToHolder"
            :options="RELATION_HOLDER_LIST"
          ></ProRadioButton>
        </template>
      </ProField>
      <ProField v-model="state.formInfo.insured.name" label="姓名" name="name" required />
      <ProField
        v-model="state.formInfo.insured.certNo"
        label="证件号码"
        name="certNo"
        required
        placeholder="请输入身份证号"
        :validate-type="[VALIDATE_TYPE_ENUM.ID_CARD]"
      />
      <ProField v-model="state.formInfo.insured.socialFlag" label="有无社保" name="name" required placeholder="请选择">
        <template #input>
          <ProRadioButton v-model="state.formInfo.insured.socialFlag" :options="SOCIAL_SECURITY"></ProRadioButton>
        </template>
      </ProField>
    </div>
    <ProDivider />
    <div>
      <div class="title">保费支付</div>
      <ProCell class="pay" title="每月保费" content="10" :border="false" />
      <ProCell class="pay" title="支付方式" content="10" :border="false" />
    </div>
    <ProDivider />
  </ProForm>
</template>
<script lang="ts" setup>
import { withDefaults } from 'vue';
import type { FormInstance } from 'vant';
import {
  RELATION_HOLDER_ENUM,
  RELATION_HOLDER_LIST, // 投被保人关系
  SOCIAL_SECURITY, // 有无社保
} from '@/common/constants/infoCollection';

import ProDivider from '@/components/ProDivider/index.vue';
import { VALIDATE_TYPE_ENUM } from '@/common/constants';

const formRef = ref<FormInstance>({} as FormInstance);

interface Props {
  disabled: boolean;
  formInfo: {
    holder: {
      certNo: string;
      mobile: string;
      name: string;
      socialFlag: number;
    };
    insured: {
      certNo: string;
      name: string;
      socialFlag: number;
      relationToHolder: number;
    };
  };
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  formInfo: () => ({}),
});

const state = reactive({
  disabled: props.disabled,
  formInfo: props.formInfo,
});

const validateForm = () => {
  return new Promise((resolve, reject) => {
    formRef?.value.validate().then(
      () => {
        resolve('');
      },
      () => {
        reject();
      },
    );
  });
};

watch(
  () => state.formInfo.insured.relationToHolder,
  (newVal, oldVal) => {
    if (newVal !== oldVal) {
      if (newVal.toString() === RELATION_HOLDER_ENUM.SELF) {
        // 我自己
        state.formInfo.insured = {
          certNo: state.formInfo.holder.certNo,
          name: state.formInfo.holder.name,
          socialFlag: state.formInfo.holder.socialFlag,
          relationToHolder: newVal,
        };
      } else {
        // 其他
        state.formInfo.insured = {
          certNo: '',
          name: '',
          socialFlag: 1,
          relationToHolder: newVal,
        };
      }
    }
  },
);

defineExpose({
  validateForm,
});
</script>

<style lang="scss" scoped>
.title {
  font-size: 32px;
  font-weight: 500;
  color: #333333;
  line-height: 30px;
  padding: 30px 25px;
}
.relation-to-Holder {
  :deep(.van-field__control--right) {
    justify-content: space-between;
  }
}
.pay {
  padding: 0 30px;
}
</style>
