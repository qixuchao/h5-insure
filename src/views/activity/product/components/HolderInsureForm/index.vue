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
        :is-view="props.disabled"
      />
      <ProField
        v-model="state.formInfo.holder.certNo"
        label="证件号码"
        name="certNo"
        required
        placeholder="请输入身份证号"
        :is-view="props.disabled"
        :validate-type="[VALIDATE_TYPE_ENUM.ID_CARD]"
      />
      <ProField
        v-model="state.formInfo.holder.mobile"
        label="手机号"
        name="mobile"
        :is-view="props.disabled"
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
      <ProField
        v-model="state.formInfo.insured.name"
        label="姓名"
        name="name"
        required
        :is-view="state.insureDisable"
      />
      <ProField
        v-model="state.formInfo.insured.certNo"
        label="证件号码"
        name="certNo"
        required
        placeholder="请输入身份证号"
        :validate-type="[VALIDATE_TYPE_ENUM.ID_CARD]"
        :is-view="state.insureDisable"
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
      <ProField v-model="state.formInfo.premium" label="每月保费" :is-view="true">
        <template #input> {{ state.formInfo.premium }} /月 共12期</template>
      </ProField>
      <ProPicker
        v-model="state.formInfo.paymentMethod"
        name="paymentMethod"
        label="支付方式"
        placeholder="请选择"
        :data-source="ACTIVITY_PAY_METHOD_LIST"
        required
      />
      <ProField label="开通下一年自主重新投保" name="renewalDK" placeholder="请选择">
        <template #input>
          <van-checkbox v-model="state.formInfo.renewalDK">免费开通</van-checkbox>
        </template>
      </ProField>
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
import {
  PAY_METHOD_LIST,
  PAY_METHOD_ENUM,
  ACTIVITY_PAY_METHOD_LIST,
  PAYMENT_TYPE_ENUM,
  PAY_INFO_TYPE_ENUM,
  PAY_INFO_TYPE_LIST,
  EXPIRY_METHOD_LIST,
  EXPIRY_METHOD_ENUM,
  BANK_CARD_TYPE_ENUM,
} from '@/common/constants/bankCard';

import ProDivider from '@/components/ProDivider/index.vue';
import { VALIDATE_TYPE_ENUM } from '@/common/constants';

const formRef = ref<FormInstance>({} as FormInstance);

interface Props {
  disabled: boolean;
  formInfo: {
    paymentMethod: number;
    premium: number;
    renewalDK: string;
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

const options = [
  {
    label: '男',
    value: '1',
  },
];

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  formInfo: () => ({}),
});

const state = reactive({
  disabled: props.disabled, // 投保人不可修改
  insureDisable: true, // 被保人不可修改
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

// 监听为投保，如果是本人，投保人信息填充被保人，并且信息不可修改
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
        // 被保人信息不可修改
        state.insureDisable = true;
      } else {
        // 其他
        state.formInfo.insured = {
          certNo: '',
          name: '',
          socialFlag: 1,
          relationToHolder: newVal,
        };
        // 被保人信息可以修改
        state.insureDisable = false;
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

:deep(.van-cell) {
  padding: 20px 25px;
}
:deep(.van-cell .van-field__label) {
  margin: 0;
}
:deep(.relation-to-Holder.van-cell .van-field__value) {
  align-items: flex-start;
}
:deep(.relation-to-Holder.van-cell .van-field__value .van-field__body) {
  width: 100%;
}
:deep(.relation-to-Holder.van-cell .van-field__control--right) {
  justify-content: flex-start;
  text-align: left;
}
:deep(.van-cell .van-field__label) {
  white-space: nowrap;
}

.pay {
  padding: 0 30px;
}
</style>
