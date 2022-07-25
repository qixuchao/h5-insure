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
    <ProPicker v-model="formData.payBank" name="payBank" label="开户银行" :data-source="bankList" required />
    <ProField label="银行卡照片" block label-width="100%" required name="images">
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
import { getDic } from '@/api';

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
  payBank: '',
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

const bankList = ref<Array<{ label: string; value: string }>>([]);

onMounted(() => {
  getDic({ dictCodeList: ['BANK'] }).then((res) => {
    const { code, data } = res;
    if (code === '10000') {
      const bankDict = data.find((x) => x.dictCode === 'BANK');
      if (bankDict) {
        bankList.value = bankDict.dictItemList.map((item) => ({ value: item.code, label: item.name }));
      }
    }
  });
});
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
