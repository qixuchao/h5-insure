<template>
  <SchemaRenderField :schema="schema" :model="formState.formData" :is-view="isView" />
</template>
<script lang="ts" setup name="ProAddress">
import { inject } from 'vue';
import { isNotEmptyArray } from '@/common/constants/utils';
import SchemaRenderField from './SchemaRenderField.vue';
import { PRO_BANK_FIELD_MAP, COMPONENT_ENUM, VAN_PRO_FORM_KEY, BANK_INFO_KEY_ENUM } from '../utils';
import { PAYMENT_TYPE_ENUM, PAY_INFO_TYPE_ENUM } from '@/common/constants/bankCard';

const { formState, markRequired } = inject(VAN_PRO_FORM_KEY) || {};

const props = defineProps({
  required: {
    type: Boolean,
    default: false,
  },
  /**
   * 控制级联组件筛选和是否展示详细地址
   */
  attributeValueList: {
    type: Array,
    default: () => [],
  },
  /**
   * 支付信息类型，首期/续期/年金
   */
  paymentType: {
    type: Number,
    default: null,
  },
  /**
   * 是否查看模式
   */
  isView: {
    type: Boolean,
    default: false,
  },
});

const state = reactive({
  address: {
    detail: '',
  },
});

// 是否为续期
const isRenewal = computed(() => String(props.paymentType) === String(PAYMENT_TYPE_ENUM.RENEW_TERM));

// 不是首期
const isNotFistTerm = computed(() => String(props.paymentType) !== String(PAYMENT_TYPE_ENUM.FIRST_TERM));

const schema = computed(() => {
  if (isNotEmptyArray(props.attributeValueList)) {
    return props.attributeValueList.map((item: { code: string; value: string }) => {
      return {
        ...PRO_BANK_FIELD_MAP[item.code],
        isView: props.isView,
        required: props.required,
        label: item.value,
      };
    });
  }
  return [];
});
</script>
<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>
<style lang="scss" scoped></style>
