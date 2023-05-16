<template>
  <ProRenderFormWithCard
    v-for="(schemaItem, index) in state.schemaList"
    ref="payInfoFormRef"
    :key="`${schemaItem.nanoid}_${index}`"
    :schema="schemaItem.schema"
    :model="schemaItem.formData"
    :config="schemaItem.config"
    :title="schemaItem.title"
    :is-view="isView"
    :extra-provision="{
      objectType: schemaItem.objectType,
      objectId: schemaItem.formData.id,
    }"
  />
</template>
<script lang="ts" setup>
import { withDefaults, ComputedRef } from 'vue';
import { nanoid } from 'nanoid';
import debounce from 'lodash-es/debounce';
import cloneDeep from 'lodash-es/cloneDeep';
import { ProRenderFormWithCard } from './components';
import { SchemaItem } from './index.data';
import { isNotEmptyArray } from '@/common/constants/utils';
import { PAYMENT_TYPE_ENUM, PAY_INFO_TYPE_ENUM, BANK_CARD_TYPE_ENUM } from '@/common/constants/bankCard';
import { BANK_INFO_KEY_LIST, colorConsole, lowerFirstLetter } from './utils';
import { ATTACHMENT_OBJECT_TYPE_ENUM } from '@/common/constants';
import { deepCopy } from '@/utils';

interface PayInfoProps {
  schema: SchemaItem[];
  config?: object[];
  modelValue: object[];
  isView: boolean;
}

interface PayInfoItem {
  title: string;
  schema: Partial<SchemaItem>[];
  payInfoType: number;
  formData: {
    [x: string]: any;
  };
  config: object;
  nanoid: string;
  objectType: number;
}

// 支付方式 银行卡/支付宝/维系
const PAY_METHOD_TYPE_ENUM = {
  BANK_PAY: '1',
  ALI_PAY: '2',
  WECHAT_PAY: '3',
};

const emit = defineEmits(['update:modelValue']);
const payInfoFormRef = ref(null);

const formRef = ref<InstanceType<typeof ProRenderFormWithCard>>();

// 隐藏银行相关的字段
const HIDDEN_KEY_LIST = ['cardType', 'bankCard', 'paymentMethod'];

const fieldInitList: Partial<PayInfoItem>[] = [
  {
    title: '首期支付',
    schema: [],
    payInfoType: PAYMENT_TYPE_ENUM.FIRST_TERM,
    formData: {
      // 首期扣款方式
      paymentType: '1',
      // 首期支付方式 默认银行卡
      paymentMethod: '1',
      /** 首期银行卡类型 默认借记卡 */
      cardType: BANK_CARD_TYPE_ENUM.DEBIT,
    },
    config: {
      cardType: {
        isView: true,
      },
    },
    objectType: ATTACHMENT_OBJECT_TYPE_ENUM.INIT_SIGN,
  },
  {
    title: '续期支付',
    schema: [],
    payInfoType: PAYMENT_TYPE_ENUM.RENEW_TERM,
    formData: {
      paymentType: '1',
      // 首期支付方式 默认银行卡
      paymentMethod: '1',
      paymentGenre: String(PAY_INFO_TYPE_ENUM.FIRST_SAME),
      // 续期银行卡类型 默认借记卡
      cardType: BANK_CARD_TYPE_ENUM.DEBIT,
    },
    config: {
      cardType: {
        isView: true,
      },
    },
    objectType: ATTACHMENT_OBJECT_TYPE_ENUM.RENEWAL_SIGN,
  },
  {
    title: '年金领取银行卡',
    schema: [],
    payInfoType: PAYMENT_TYPE_ENUM.REPRISE,
    formData: {
      paymentGenre: String(PAY_INFO_TYPE_ENUM.FIRST_SAME),
    },
    config: {},
    objectType: ATTACHMENT_OBJECT_TYPE_ENUM.ANNUAL_SIGN,
  },
].map((item) => ({
  ...item,
  nanoid: nanoid(),
}));

const fieldCodeList: string[][] = [
  // 首期支付
  ['initialPaymentMethod', 'initialCardType', 'initialBankCard', 'initialPaymentType'],
  // 续期支付
  [
    'renewalPaymentGenre',
    'renewalPaymentMethod',
    'renewalCardType',
    'renewalBankCard',
    'renewalPaymentType',
    'premiumOverdue',
  ],
  // 年金领取银行卡
  ['annuityPaymentGenre', 'annuityBankCard'],
];

interface SchemaKeyMap {
  FIRST_TERM: number;
  RENEW_TERM: number;
  REPRISE: number;
}

const props = withDefaults(defineProps<PayInfoProps>(), {
  config: () => [],
  schema: () => [],
  modelValue: () => [],
  isView: false,
});

const state = reactive<{
  schemaList: Partial<PayInfoItem>[];
}>({
  schemaList: deepCopy(fieldInitList),
});

// 获取支付模块索引
const getSchemaIndex = (type) => {
  return state.schemaList.findIndex((item) => String(item.payInfoType) === String(PAYMENT_TYPE_ENUM[type]));
};

// 首期/续期/年金 索引
const schemaIndexMap: ComputedRef<Partial<SchemaKeyMap>> = computed(() => {
  return ['FIRST_TERM', 'RENEW_TERM', 'REPRISE'].reduce((res, key) => {
    const index = getSchemaIndex(key);
    index > -1 && (res[key] = index);
    return res;
  }, {});
});

// 是否同首期/同续期
const isSame = (index, type) => {
  return index > -1 && state.schemaList[index]?.formData?.paymentGenre === `${PAY_INFO_TYPE_ENUM[type]}`;
};

// 过滤同步的银行卡信息字段 和 支付类型字段
// const filterData = (data, keyMap) => {
//   let extInfo = {};
//   // 额外需要处理的数据
//   if (keyMap) {
//     const keys = Object.keys(keyMap);
//     extInfo = keys.map((key) => ({
//       [key]: data[keyMap[key]],
//     }));
//   }
//   return BANK_INFO_KEY_LIST.reduce((res, key) => {
//     res[key] = data[key];
//     return res;
//   }, extInfo);
// };

/** 转换支付字段name,去除模块标识符  */
const transformSchemaName = (name) => {
  if (!(typeof name === 'string' && name)) {
    return '';
  }
  const [a, b] = name.match(/^(?:initial|renewal|annuity)(.*)$/) || [];
  return b ? lowerFirstLetter(b) : name;
};

/** 合并不同模块 formData */
const combineFormData = (targetIndex, originIndex) => {
  const { formData } = state.schemaList[originIndex] || {};
  const { paymentGenre, id, ...rest } = formData || {};

  // 合并影像注意类型
  const tempData = {
    ...rest,
    bankCardImage: isNotEmptyArray(rest.bankCardImage)
      ? rest.bankCardImage.map((item) => ({
          ...item,
          objectType: fieldInitList[targetIndex].objectType,
        }))
      : rest.bankCardImage,
  };
  Object.assign(state.schemaList[targetIndex]?.formData, tempData);
};

// 验证表单必填
const validate = (isTrial) => {
  return Promise.all(payInfoFormRef.value?.map((item) => item.validate()));
};

// 是否为银行卡信息
const isBankField = (name) => name && HIDDEN_KEY_LIST.includes(name);

// 支付方式变动 银行卡/支付宝/微信
watch(
  () => state.schemaList.map((item) => item?.formData?.paymentMethod),
  () => {
    colorConsole('支付方式变动');
    state.schemaList.forEach((schemaItem, index) => {
      const { formData, schema } = schemaItem || {};
      // 非银行卡支付
      const isNotBankPay = [PAY_METHOD_TYPE_ENUM.ALI_PAY, PAY_METHOD_TYPE_ENUM.WECHAT_PAY].includes(
        String(formData?.paymentMethod),
      );

      const isSameFirst = formData?.paymentGenre === String(PAY_INFO_TYPE_ENUM.FIRST_SAME);

      schema.forEach((item) => {
        item.hidden = (isSameFirst || isNotBankPay) && isBankField(item.name);
      });
      schemaItem.nanoid = nanoid();
    });
  },
  {
    deep: true,
    immediate: true,
  },
);

// 根据 payInfoType 处理，原因是 首期/续期/年金某一个可能不配置，不能拿索引
// 首期 数据变动，若续期/年金同首期
watch(
  () => state.schemaList[schemaIndexMap.value.FIRST_TERM]?.formData,
  debounce((val) => {
    const { REPRISE, RENEW_TERM } = schemaIndexMap.value;
    colorConsole('首期数据变动');
    // 续期同首期
    if (isSame(RENEW_TERM, 'FIRST_SAME')) {
      combineFormData(RENEW_TERM, schemaIndexMap.value.FIRST_TERM);
    }

    // 年金同首期
    if (isSame(REPRISE, 'FIRST_SAME')) {
      combineFormData(REPRISE, RENEW_TERM);
    }
  }, 500),
  {
    deep: true,
  },
);

// 续期 数据变动，若年金同续期
watch(
  () => state.schemaList[schemaIndexMap.value.RENEW_TERM]?.formData,
  debounce((val) => {
    colorConsole('续期数据变动');
    const { REPRISE, RENEW_TERM } = schemaIndexMap.value;

    // 年金同续期
    if (isSame(REPRISE, 'RENEW_SAME')) {
      combineFormData(REPRISE, RENEW_TERM);
    }
  }, 500),
  {
    deep: true,
  },
);

// 续期里的 同首期 按钮变动，复制首期值
watch(
  () => state.schemaList[schemaIndexMap.value.RENEW_TERM]?.formData?.paymentGenre,
  (val) => {
    colorConsole('续期支付类型变动');
    const { FIRST_TERM, RENEW_TERM } = schemaIndexMap.value;

    const isSameFirst = val === String(PAY_INFO_TYPE_ENUM.FIRST_SAME);
    const { schema } = state.schemaList[RENEW_TERM] || {};

    // 续期同首期
    if (isSameFirst) {
      combineFormData(RENEW_TERM, FIRST_TERM);
    } else if (state.schemaList[RENEW_TERM]) {
      state.schemaList[RENEW_TERM].formData = {
        ...fieldInitList[RENEW_TERM].formData,
        paymentGenre: val,
      };
    }

    if (isNotEmptyArray(schema)) {
      schema.forEach((item) => {
        item.hidden = isSameFirst && isBankField(item.name);
      });
    }
  },
);

// 年金领取 同首期/同续期 数据变动，复制 同首期/同续期 数据
watch(
  () => state.schemaList[schemaIndexMap.value.REPRISE]?.formData?.paymentGenre,
  // eslint-disable-next-line consistent-return
  (val, oldVal) => {
    if (val === oldVal) {
      return false;
    }
    const { FIRST_TERM, RENEW_TERM, REPRISE } = schemaIndexMap.value;
    const { schema } = state.schemaList[REPRISE] || {};

    colorConsole('年金支付类型变动');
    // 同首期/同续期
    if ([PAY_INFO_TYPE_ENUM.FIRST_SAME, PAY_INFO_TYPE_ENUM.RENEW_SAME].includes(Number(val))) {
      const currentIndex = String(val) === String(PAY_INFO_TYPE_ENUM.FIRST_SAME) ? FIRST_TERM : RENEW_TERM;
      combineFormData(REPRISE, currentIndex);
    } else if (state.schemaList[REPRISE]) {
      state.schemaList[REPRISE].formData = {
        ...cloneDeep(fieldInitList[REPRISE].formData),
        paymentGenre: val,
      };
    }

    if (isNotEmptyArray(schema)) {
      schema.forEach((item) => {
        item.hidden = isBankField(item.name);
      });
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
            name: transformSchemaName(item.name),
            // 默认首期隐藏银行卡信息
            payInfoType: fieldInitList[index].payInfoType,
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
        return paymentDrawTypeList.includes(`${rest.payInfoType}`) && isNotEmptyArray(schema);
      });
  },
  {
    deep: true,
    immediate: true,
  },
);

watch(
  () => props.modelValue,
  (val) => {
    if (isNotEmptyArray(val)) {
      state.schemaList.forEach((schemaItem, index) => {
        Object.assign(schemaItem.formData, val[index]);
      });
    }
  },
  {
    deep: true,
    immediate: true,
  },
);

watch(
  () => state.schemaList?.map((item) => item.formData),
  (val) => {
    if (isNotEmptyArray(val)) {
      emit(
        'update:modelValue',
        val.map((item, index) => {
          const { payInfoType } = state.schemaList[index];
          return {
            ...item,
            payInfoType,
          };
        }),
      );
    }
  },
  {
    deep: true,
    immediate: true,
  },
);

defineExpose({
  validate,
});
</script>
