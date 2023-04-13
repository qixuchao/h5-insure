<template>
  <ProRenderFormWithCard
    v-for="schemaItem in state.schemaList"
    :key="schemaItem.title"
    :schema="schemaItem.schema"
    :model="schemaItem.model"
    :config="schemaItem.config"
    :title="schemaItem.title"
    :is-view="isView"
  />
</template>
<script lang="ts" setup>
import { withDefaults, ComputedRef } from 'vue';
import { ProRenderFormWithCard } from './components';
import { SchemaItem } from './index.data';
import { isNotEmptyArray } from '@/common/constants/utils';
import { PAYMENT_TYPE_ENUM, PAY_INFO_TYPE_ENUM } from '@/common/constants/bankCard';
import { BANK_INFO_KEY_LIST } from './utils';

interface PayInfoProps {
  schema: SchemaItem[];
  config: object[];
  modelValue: object[];
  isView: boolean;
}

interface PayInfoItem {
  title: string;
  schema: SchemaItem[];
  paymentType: number;
  model: object;
  config: object;
}

const emit = defineEmits(['update:modelValue']);

const fieldInitList: PayInfoItem[] = [
  {
    title: '首期支付',
    schema: [],
    paymentType: PAYMENT_TYPE_ENUM.FIRST_TERM,
    model: {
      /** 首期银行卡类型 */
      initialCardType: '1',
    },
    config: {
      initialCardType: {
        isView: true,
      },
    },
  },
  {
    title: '续期支付',
    schema: [],
    paymentType: PAYMENT_TYPE_ENUM.RENEW_TERM,
    model: {
      sameFirstIssue: PAY_INFO_TYPE_ENUM.FIRST_SAME,
      // 续期银行卡类型
      renewalCardType: '1',
    },
    config: {
      renewalCardType: {
        isView: true,
      },
    },
  },
  { title: '年金领取银行卡', schema: [], paymentType: PAYMENT_TYPE_ENUM.REPRISE, model: {}, config: {} },
];

const fieldCodeList: string[][] = [
  // 首期支付
  ['initialCardType', 'initialBankCard', 'initialPaymentType'],
  // 续期支付
  ['renewalCardType', 'renewalBankCard', 'renewalPaymentType', 'premiumOverdue'],
  // 年金领取银行卡
  ['annuityBankCard', 'paymentDrawType'],
];

interface SchemaKeyMap {
  FIRST_TERM: number;
  RENEW_TERM: number;
  REPRISE: number;
}

const slots = useSlots();

const props = withDefaults(defineProps<PayInfoProps>(), {
  config: () => [],
  schema: () => [],
  modelValue: () => [],
  isView: false,
});

const state = reactive({
  schemaList: [...fieldInitList],
});

const getSchemaIndex = (type) => {
  return state.schemaList.findIndex((item) => String(item.paymentType) === String(PAYMENT_TYPE_ENUM[type]));
};

// 首期/续期/年金 索引
const schemaIndexMap: ComputedRef<Partial<SchemaKeyMap>> = computed(() => {
  return ['FIRST_TERM', 'RENEW_TERM', 'REPRISE'].reduce((res, key) => {
    res[key] = getSchemaIndex(key);
    return res;
  }, {});
});

// 是否同首期/同续期
const isSame = (index, type) => {
  return index > -1 && state.schemaList[index]?.model?.sameFirstIssue === `${PAY_INFO_TYPE_ENUM[type]}`;
};

const filterData = (data) => {
  return BANK_INFO_KEY_LIST.reduce((res, key) => {
    res[key] = data[key];
    return res;
  }, {});
};

// 根据 paymentType 处理，原因是 首期/续期/年金某一个可能不配置，不能拿索引
// 首期 数据变动，若续期/年金同首期
watch(
  () => state.schemaList[schemaIndexMap.value.FIRST_TERM]?.model,
  (val) => {
    const renewalIndex = schemaIndexMap.value.RENEW_TERM;
    const repriseIndex = schemaIndexMap.value.REPRISE;

    // 续期同首期
    if (isSame(renewalIndex, 'FIRST_SAME')) {
      Object.assign(state.schemaList[renewalIndex].model, filterData(val));
    }

    // 年金同首期
    if (isSame(repriseIndex, 'FIRST_SAME')) {
      Object.assign(state.schemaList[repriseIndex].model, filterData(state.schemaList[renewalIndex].model));
    }
  },
  {
    deep: true,
  },
);

// 续期 数据变动，若年金同续期
watch(
  () => state.schemaList[schemaIndexMap.value.RENEW_TERM]?.model,
  (val) => {
    const repriseIndex = schemaIndexMap.value.REPRISE;

    // 年金同续期
    if (isSame(repriseIndex, 'RENEW_SAME')) {
      Object.assign(state.schemaList[repriseIndex].model, filterData(val));
    }
  },
  {
    deep: true,
  },
);

// 续期里的 同首期 按钮变动，复制首期值
watch(
  () => state.schemaList[schemaIndexMap.value.RENEW_TERM]?.model?.sameFirstIssue,
  (val) => {
    const firstTermIndex = schemaIndexMap.value.FIRST_TERM;
    const renewalIndex = schemaIndexMap.value.RENEW_TERM;

    // 续期同首期
    if (val === PAY_INFO_TYPE_ENUM.FIRST_SAME) {
      Object.assign(state.schemaList[renewalIndex]?.model, filterData(state.schemaList[firstTermIndex].model));
    } else {
      state.schemaList[renewalIndex].model = {
        sameFirstIssue: val,
      };
    }
  },
  {
    immediate: true,
  },
);

// 年金领取 同首期/同续期 数据变动，复制 同首期/同续期 数据
watch(
  () => state.schemaList[schemaIndexMap.value.REPRISE]?.model?.sameFirstIssue,
  (val) => {
    const firstTermIndex = schemaIndexMap.value.FIRST_TERM;
    const renewalIndex = schemaIndexMap.value.RENEW_TERM;
    const repriseIndex = schemaIndexMap.value.REPRISE;

    // 同首期/同续期
    if ([PAY_INFO_TYPE_ENUM.FIRST_SAME, PAY_INFO_TYPE_ENUM.RENEW_SAME].includes(Number(val))) {
      const currentData = state.schemaList[val === PAY_INFO_TYPE_ENUM.FIRST_SAME ? firstTermIndex : renewalIndex].model;

      Object.assign(state.schemaList[repriseIndex].model, filterData(currentData));
    } else {
      state.schemaList[repriseIndex].model = {
        sameFirstIssue: val,
      };
    }
  },
  {
    immediate: true,
  },
);

watch(
  [() => props.schema, () => props.config, () => props.modelValue],
  () => {
    state.schemaList = isNotEmptyArray(props.schema)
      ? props.schema.reduce((res, item) => {
          const index = fieldCodeList.findIndex((codeListItem) => {
            return codeListItem.includes(item.name);
          });
          if (index > -1) {
            res[index].schema.push({
              ...item,
              paymentType: fieldInitList[index].paymentType,
            });
          }
          return res;
        }, fieldInitList)
      : // .map((item, index) => {
        //   return {
        //     ...item,
        //     config: {
        //       ...item.config,
        //       ...(props.config[index] || {}),
        //     },
        //     model: {
        //       ...item.model,
        //       ...props.modelValue[index],
        //     },
        //   };
        // })
        fieldInitList;
  },
  {
    deep: true,
    immediate: true,
  },
);

watch(
  () => state.schemaList,
  (val) => {
    if (isNotEmptyArray(val)) {
      emit(
        'update:modelValue',
        val.map((item) => ({
          ...item.model,
          paymentType: item.paymentType,
        })),
      );
    }
  },
  {
    deep: true,
    immediate: true,
  },
);
</script>
