<template>
  <ProRenderFormWithCard
    v-for="schemaItem in state.schemaList"
    :key="schemaItem.nanoid"
    :schema="schemaItem.schema"
    :model="schemaItem.formData"
    :config="schemaItem.config"
    :title="schemaItem.title"
    :is-view="isView"
  />
</template>
<script lang="ts" setup>
import { withDefaults, ComputedRef } from 'vue';
import { nanoid } from 'nanoid';
import { ProRenderFormWithCard } from './components';
import { SchemaItem } from './index.data';
import { isNotEmptyArray } from '@/common/constants/utils';
import { PAYMENT_TYPE_ENUM, PAY_INFO_TYPE_ENUM, BANK_CARD_TYPE_ENUM } from '@/common/constants/bankCard';
import { BANK_INFO_KEY_LIST } from './utils';
import { deepCopy } from '@/utils';

interface PayInfoProps {
  schema: SchemaItem[];
  config: object[];
  modelValue: object[];
  isView: boolean;
}

interface PayInfoItem {
  title: string;
  schema: Partial<SchemaItem>[];
  paymentType: number;
  formData: {
    sameFirstIssue?: string;
    [x: string]: any;
  };
  config: object;
  nanoid: string;
  /** 支付类型Key */
  paymentMethodKey: string;
  // 非银行卡需要隐藏的key
  hiddenKeyList: string[];
}

// 支付方式 银行卡/支付宝/维系
const PAY_METHOD_TYPE_ENUM = {
  BANK_PAY: '1',
  ALI_PAY: '2',
  WECHAT_PAY: '3',
};

const emit = defineEmits(['update:modelValue']);

const fieldInitList: Partial<PayInfoItem>[] = [
  {
    title: '首期支付',
    schema: [],
    paymentType: PAYMENT_TYPE_ENUM.FIRST_TERM,
    formData: {
      /** 首期银行卡类型 默认借记卡 */
      initialCardType: BANK_CARD_TYPE_ENUM.DEBIT,
    },
    config: {
      initialCardType: {
        isView: true,
      },
    },
    nanoid: nanoid(),
    paymentMethodKey: 'paymentMethod',
    hiddenKeyList: ['initialCardType', 'initialBankCard', 'initialPaymentType'],
  },
  {
    title: '续期支付',
    schema: [],
    paymentType: PAYMENT_TYPE_ENUM.RENEW_TERM,
    formData: {
      sameFirstIssue: String(PAY_INFO_TYPE_ENUM.FIRST_SAME),
      // 续期银行卡类型 默认借记卡
      renewalCardType: BANK_CARD_TYPE_ENUM.DEBIT,
    },
    config: {
      renewalCardType: {
        isView: true,
      },
    },
    nanoid: nanoid(),
    hiddenKeyList: ['renewalCardType', 'renewalBankCard', 'renewalPaymentType'],
    paymentMethodKey: 'renewalPaymentMethod',
  },
  {
    title: '年金领取银行卡',
    schema: [],
    paymentType: PAYMENT_TYPE_ENUM.REPRISE,
    formData: {},
    config: {},
    nanoid: nanoid(),
    paymentMethodKey: 'annuityPaymentMethod',
    hiddenKeyList: ['annuityBankCard'],
  },
];

const fieldCodeList: string[][] = [
  // 首期支付
  ['paymentMethod', 'initialPaymentMethod', 'initialCardType', 'initialBankCard', 'initialPaymentType'],
  // 续期支付
  ['renewalPaymentMethod', 'renewalCardType', 'renewalBankCard', 'renewalPaymentType', 'premiumOverdue'],
  // 年金领取银行卡
  ['annuityPaymentMethod', 'annuityBankCard'],
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

const state = reactive<{
  schemaList: PayInfoItem[];
}>({
  schemaList: deepCopy(fieldInitList),
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
  return index > -1 && state.schemaList[index]?.formData?.sameFirstIssue === `${PAY_INFO_TYPE_ENUM[type]}`;
};

// 过滤同步的银行卡信息字段 和 支付类型字段
const filterData = (data, keyMap) => {
  let extInfo = {};
  // 额外需要处理的数据
  if (keyMap) {
    const keys = Object.keys(keyMap);
    extInfo = keys.map((key) => ({
      [key]: data[keyMap[key]],
    }));
  }
  return BANK_INFO_KEY_LIST.reduce((res, key) => {
    res[key] = data[key];
    return res;
  }, extInfo);
};

/** 合并不同模块 formData */
const combineFormData = (targetIndex, originIndex) => {
  // 支付类型字段不同
  const targetKey = state.schemaList[targetIndex].paymentMethodKey;
  const originKey = state.schemaList[originIndex].paymentMethodKey;
  Object.assign(
    state.schemaList[targetIndex].formData,
    filterData(state.schemaList[originIndex].formData, {
      [targetKey]: originKey,
    }),
  );
};

// 支付方式类型变动 银行卡/支付宝/微信
watch(
  () => state.schemaList.map((item) => item.formData?.[item.paymentMethodKey]),
  () => {
    state.schemaList.forEach((schemaItem, index) => {
      const { formData, schema, hiddenKeyList } = schemaItem || {};
      // 非银行卡支付
      const isNotBankPay = [PAY_METHOD_TYPE_ENUM.ALI_PAY, PAY_METHOD_TYPE_ENUM.WECHAT_PAY].includes(
        formData?.[schemaItem.paymentMethodKey],
      );

      schema.forEach((item) => {
        item.hidden = isNotBankPay && hiddenKeyList.includes(item.name);
      });
      schemaItem.nanoid = nanoid();
    });
  },
  {
    deep: true,
    immediate: true,
  },
);

// 根据 paymentType 处理，原因是 首期/续期/年金某一个可能不配置，不能拿索引
// 首期 数据变动，若续期/年金同首期
watch(
  () => state.schemaList[schemaIndexMap.value.FIRST_TERM]?.formData,
  (val) => {
    const renewalIndex = schemaIndexMap.value.RENEW_TERM;
    const repriseIndex = schemaIndexMap.value.REPRISE;

    // 续期同首期
    if (isSame(renewalIndex, 'FIRST_SAME')) {
      combineFormData(renewalIndex, schemaIndexMap.value.FIRST_TERM);
    }

    // 年金同首期
    if (isSame(repriseIndex, 'FIRST_SAME')) {
      combineFormData(repriseIndex, renewalIndex);
    }
  },
  {
    deep: true,
  },
);

// 续期 数据变动，若年金同续期
watch(
  () => state.schemaList[schemaIndexMap.value.RENEW_TERM]?.formData,
  (val) => {
    const repriseIndex = schemaIndexMap.value.REPRISE;

    // 年金同续期
    if (isSame(repriseIndex, 'RENEW_SAME')) {
      combineFormData(repriseIndex, schemaIndexMap.value.RENEW_TERM);
    }
  },
  {
    deep: true,
  },
);

// 续期里的 同首期 按钮变动，复制首期值
watch(
  () => state.schemaList[schemaIndexMap.value.RENEW_TERM]?.formData?.sameFirstIssue,
  (val) => {
    const firstTermIndex = schemaIndexMap.value.FIRST_TERM;
    const renewalIndex = schemaIndexMap.value.RENEW_TERM;

    // 续期同首期
    if (val === String(PAY_INFO_TYPE_ENUM.FIRST_SAME)) {
      combineFormData(renewalIndex, firstTermIndex);
    } else {
      state.schemaList[renewalIndex].formData = {
        ...fieldInitList[renewalIndex].formData,
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
  () => state.schemaList[schemaIndexMap.value.REPRISE]?.formData?.sameFirstIssue,
  (val) => {
    const firstTermIndex = schemaIndexMap.value.FIRST_TERM;
    const renewalIndex = schemaIndexMap.value.RENEW_TERM;
    const repriseIndex = schemaIndexMap.value.REPRISE;

    // 同首期/同续期
    if ([PAY_INFO_TYPE_ENUM.FIRST_SAME, PAY_INFO_TYPE_ENUM.RENEW_SAME].includes(Number(val))) {
      const currentIndex = val === String(PAY_INFO_TYPE_ENUM.FIRST_SAME) ? firstTermIndex : renewalIndex;
      combineFormData(repriseIndex, currentIndex);
    } else {
      state.schemaList[repriseIndex].formData = {
        ...fieldInitList[repriseIndex].formData,
        sameFirstIssue: val,
      };
    }
  },
  {
    immediate: true,
  },
);

watch(
  [() => props.schema, () => props.config],
  () => {
    // 交费/领取类型 决定有哪些模块
    let paymentDrawTypeList = [];

    if (isNotEmptyArray(props.schema)) {
      state.schemaList = deepCopy(fieldInitList);
    }

    state.schemaList = props.schema
      .reduce((res, item) => {
        const index = fieldCodeList.findIndex((codeListItem) => {
          return codeListItem.includes(item.name);
        });

        // 交费/领取类型 决定有哪些模块
        if (item.name === 'paymentDrawType') {
          paymentDrawTypeList = item.columns.map((columnItem) => columnItem.code);
        }

        if (index > -1) {
          res[index].schema.push({
            ...item,
            paymentType: fieldInitList[index].paymentType,
          });
        }
        return res;
      }, deepCopy(fieldInitList))
      .map((item, index) => {
        return {
          ...item,
          config: {
            ...item.config,
            ...(props.config[index] || {}),
          },
          nanoid: nanoid(),
        };
      })
      // 筛选掉不展示的支付信息模块
      .filter(({ schema, ...rest }) => {
        const hidden = !paymentDrawTypeList.includes(`${rest.paymentType}`);
        if (hidden) {
          return rest;
        }
        return {
          schema,
          ...rest,
        };
      });
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
          ...item.formData,
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
