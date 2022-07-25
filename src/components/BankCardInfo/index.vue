<template>
  <div class="com-bank-card-info">
    <ProPicker
      v-model="formData.bankCardType"
      label="卡片类型"
      name="bankCardType"
      :data-source="BANK_CARD_TYPE_LIST"
      is-view
    />
    <ProField v-model="formData.bankCardNo" label="银行卡号" name="bankCardNo" type="number" required />
    <ProField v-model="formData.accountName" label="持卡人" name="accountName" is-view />
    <ProPicker v-model="formData.bankBranch" name="bankBranch" label="开户银行" :data-source="bank" required />
    <ProField label="银行卡照片" block label-width="100%" required>
      <template #label>
        <span class="field-title">银行卡照片 <span class="sub-title">(需上传正反两面)</span></span>
      </template>
      <template #input>
        <ProImageUpload v-model="formData.images" :max-count="2" :upload-type="UPLOAD_TYPE_ENUM.BANK_CARD" />
      </template>
    </ProField>
    <ProField v-model="formData.mobile" label="预留手机号" type="number" required name="mobile" />
  </div>
</template>

<script lang="ts" setup>
import ProField from '@/components/ProField/index.vue';
import ProImageUpload from '@/components/ProImageUpload/index.vue';
import ProPicker from '@/components/ProPicker/index.vue';
import { BANK_CARD_TYPE_LIST, BANK_CARD_TYPE_ENUM } from '@/common/constants/bankCard';
import { UPLOAD_TYPE_ENUM } from '@/common/constants';

const emits = defineEmits(['update:modelValue']);
const props = defineProps({
  modelVale: {
    type: Object,
    default: () => {},
  },
});

let formData = reactive({
  bankCardType: BANK_CARD_TYPE_ENUM.DEBIT,
  bankCardNo: '',
  accountName: '',
  bankBranch: '',
  mobile: '',
  images: [],
});

watch(
  () => props.modelVale,
  (val) => {
    formData = val;
  },
);

watch(formData, (val) => {
  emits('update:modelValue', val);
});

const bank = [
  {
    label: '工商银行',
    value: 1,
  },
  {
    label: 'aa银行',
    value: 2,
  },
  {
    label: 'bb银行',
    value: 3,
  },
  {
    label: 'cc银行',
    value: 4,
  },
  {
    label: 'dd银行',
    value: 5,
  },
  {
    label: 'ee银行',
    value: 6,
  },
  {
    label: '工商银行',
    value: 7,
  },
];
</script>

<style lang="scss" scoped>
.com-bank-card-info {
  .field-title {
    .sub-title {
      font-size: 26px;
      color: #99a9c0;
    }
  }
}
</style>
