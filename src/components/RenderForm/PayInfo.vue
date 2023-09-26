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
import merge from 'lodash-es/merge';
import cloneDeep from 'lodash-es/cloneDeep';
import isEqual from 'lodash-es/isEqual';
import { ProRenderFormWithCard } from './components';
import { SchemaItem } from './index.data';
import { isNotEmptyArray } from '@/common/constants/utils';
import { PAYMENT_TYPE_ENUM, PAY_INFO_TYPE_ENUM, BANK_CARD_TYPE_ENUM } from '@/common/constants/bankCard';
import { colorConsole, lowerFirstLetter } from './utils';
import { resetObjectValues, BANK_INFO_KEY_LIST } from '@/components/RenderForm';
import { ATTACHMENT_OBJECT_TYPE_ENUM } from '@/common/constants';
import { deepCopy } from '@/utils';

interface UserData {
  holder: {
    name: string;
  };
  insuredList: {
    name: string;
  }[];
}

interface PayInfoProps {
  schema: SchemaItem[];
  config?: object[];
  modelValue: object[];
  isView: boolean;
  userData: UserData;
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

// 隐藏银行相关的字段
const HIDDEN_KEY_LIST = ['cardType', 'bankCard'];

// 清除时需要保留的字段
const RESERVE_FIELD_NAMES = ['orderId', 'tenantId', 'id'];

// 通用默认值
const defaultFormData = {
  // 扣款方式
  paymentType: '1',
  // 支付方式 默认银行卡
  paymentMethod: '1',
  // 保费逾期未支付 默认自动垫付
  expiryMethod: '1',
  // 银行卡类型 默认借记卡
  cardType: BANK_CARD_TYPE_ENUM.DEBIT,
  // 保费逾期未支付 默认自动垫付
};

// 有默认值的 key, paymentGenre 的默认值不一样
const defaultFormDataKeys = [...Object.keys(defaultFormData), 'paymentGenre'];

const fieldInitList: Partial<PayInfoItem>[] = [
  {
    title: '首期支付',
    schema: [],
    payInfoType: PAYMENT_TYPE_ENUM.FIRST_TERM,
    formData: {},
    config: {
      cardType: {
        isView: true,
      },
      bankCard: {
        accountName: {
          isView: true,
        },
      },
    },
    objectType: ATTACHMENT_OBJECT_TYPE_ENUM.INIT_SIGN,
  },
  {
    title: '续期支付',
    schema: [],
    payInfoType: PAYMENT_TYPE_ENUM.RENEW_TERM,
    formData: {
      // 同首期/其他
      paymentGenre: String(PAY_INFO_TYPE_ENUM.FIRST_SAME),
    },
    config: {
      cardType: {
        isView: true,
      },
      bankCard: {
        accountName: {
          isView: true,
        },
      },
    },
    objectType: ATTACHMENT_OBJECT_TYPE_ENUM.RENEWAL_SIGN,
  },
  {
    title: '年金领取银行卡',
    schema: [],
    payInfoType: PAYMENT_TYPE_ENUM.REPRISE,
    formData: {
      paymentMethod: '1',
      // 同首期/同续期/其他
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
    'expiryMethod',
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
  isView: false,
  config: () => [],
  schema: () => [],
  modelValue: () => [],
  userData: () => ({} as UserData),
});

const state = reactive<{
  schemaList: Partial<PayInfoItem>[];
}>({
  schemaList: [],
});

// 主被保人名字
const mainInsuredName = computed(() => props.userData.insuredList?.[0]?.name || null);

const holderName = computed(() => props.userData?.holder?.name || null);

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

/** 转换支付字段name,去除模块标识符  */
const transformSchemaName = (name) => {
  if (!(typeof name === 'string' && name)) {
    return '';
  }
  const [a, b] = name.match(/^(?:initial|renewal|annuity)(.*)$/) || [];
  return b ? lowerFirstLetter(b) : name;
};

/** 最终初始值 */
const finalFieldList = computed(() => {
  const payInfoTypeList = state.schemaList.map((item) => `${item.payInfoType}`);
  return fieldInitList.filter((item) => payInfoTypeList.includes(String(item.payInfoType)));
});

/** 合并不同模块 formData */
const combineFormData = (targetIndex, originIndex) => {
  const { formData } = state.schemaList[originIndex] || {};
  const { paymentGenre, id, ...rest } = formData || {};

  // 合并影像注意类型
  const tempData = {
    // ...resetObjectValues(state.schemaList[targetIndex].formData, (key) => !RESERVE_FIELD_NAMES.includes(key)),
    // ...finalFieldList.value?.[targetIndex]?.formData,
    ...rest,
    bankCardImage: isNotEmptyArray(rest.bankCardImage)
      ? rest.bankCardImage.map((item) => ({
          ...item,
          objectType: finalFieldList.value?.[targetIndex]?.objectType,
        }))
      : [],
  };
  Object.assign(state.schemaList[targetIndex]?.formData, tempData);
};

// 验证表单必填
const validate = (isTrial) => {
  return Promise.all(payInfoFormRef.value ? payInfoFormRef.value?.map((item) => item?.validate()) : []);
};

// 是否为银行卡信息
const isBankField = (name, hidePaymentMethod = false) => {
  if (name) {
    const list = [...HIDDEN_KEY_LIST];
    if (hidePaymentMethod) {
      list.push('paymentMethod');
    }
    return list.includes(name);
  }
  return false;
};

/**
 * 验证字段是否需要默认值
 */
const needDefaultValue = ({ name, columns }, data) => {
  if (isNotEmptyArray(columns)) {
    const tempData = {
      ...data,
      ...defaultFormData,
    };
    const flag = isNotEmptyArray(columns) && columns.find((item) => `${item.code}` === `${tempData[name]}`);
    // 若存在对应项,则使用默认值
    return {
      [name]: flag ? tempData[name] : null,
    };
  }
  return {};
};

// 支付方式变动 银行卡/支付宝/微信
watch(
  () => state.schemaList.map((item) => [item?.formData?.paymentMethod, item?.formData?.paymentGenre]),
  // eslint-disable-next-line consistent-return
  (val, oldVal) => {
    colorConsole('支付方式/支付类型变动');
    state.schemaList.forEach((schemaItem, index) => {
      const { formData, schema } = schemaItem || {};
      // 非银行卡支付
      const isBankPay = PAY_METHOD_TYPE_ENUM.BANK_PAY === String(formData?.paymentMethod);

      const isSameFirstOrRenew = [PAY_INFO_TYPE_ENUM.FIRST_SAME, PAY_INFO_TYPE_ENUM.RENEW_SAME].includes(
        Number(formData?.paymentGenre),
      );

      // 同首期/同续期 才隐藏支付方式/银行卡相关的字段，支付宝/微信只隐藏银行卡
      schema.forEach((item) => {
        item.hidden = (isSameFirstOrRenew || !isBankPay) && isBankField(item.name, isSameFirstOrRenew);
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
  () => ({ ...state.schemaList[schemaIndexMap.value.FIRST_TERM]?.formData }),
  // eslint-disable-next-line consistent-return
  (val, oldVal) => {
    if (props.isView || isEqual(val, oldVal)) {
      return false;
    }
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
  },
  {
    deep: true,
  },
);

// 续期 数据变动，若年金同续期
watch(
  () => state.schemaList[schemaIndexMap.value.RENEW_TERM]?.formData,
  // eslint-disable-next-line consistent-return
  (val, oldVal) => {
    if (props.isView || isEqual(val, oldVal)) {
      return false;
    }
    colorConsole('续期数据变动');
    const { REPRISE, RENEW_TERM } = schemaIndexMap.value;

    // 年金同续期
    if (isSame(REPRISE, 'RENEW_SAME')) {
      combineFormData(REPRISE, RENEW_TERM);
    }
  },
  {
    deep: true,
  },
);

// 监听非续期支付方式变动
watch(
  () => state.schemaList.map((item) => item?.formData?.paymentMethod),
  (val, oldVal) => {
    if (JSON.stringify(val) !== JSON.stringify(oldVal)) {
      state.schemaList.forEach((schemaItem, index) => {
        const newPaymentMethod = val[index];
        const oldPaymentMethod = oldVal[index];
        const isChange = newPaymentMethod && oldPaymentMethod && String(newPaymentMethod) !== String(oldPaymentMethod);
        if (schemaItem.payInfoType !== PAYMENT_TYPE_ENUM.REPRISE && isChange) {
          // 非银行则需要清除银行数据
          if (String(newPaymentMethod) !== '1') {
            merge(schemaItem.formData, {
              ...resetObjectValues(schemaItem.formData, (key) => BANK_INFO_KEY_LIST.includes(key)),
              bankCardImage: null,
            });
          }
        }
      });
    }
  },
  {
    deep: true,
  },
);

// 续期里的 同首期 按钮变动，复制首期值
watch(
  () => state.schemaList[schemaIndexMap.value.RENEW_TERM]?.formData?.paymentGenre,
  // eslint-disable-next-line consistent-return
  (val) => {
    if (props.isView) {
      return false;
    }
    colorConsole('续期支付类型变动');
    const { FIRST_TERM, RENEW_TERM } = schemaIndexMap.value;

    const isSameFirst = String(val) === String(PAY_INFO_TYPE_ENUM.FIRST_SAME);

    // 续期同首期
    if (isSameFirst) {
      combineFormData(RENEW_TERM, FIRST_TERM);
    } else if (state.schemaList[RENEW_TERM]) {
      merge(state.schemaList[RENEW_TERM].formData, {
        ...resetObjectValues(state.schemaList[RENEW_TERM].formData, (key) => !RESERVE_FIELD_NAMES.includes(key)),
        ...finalFieldList.value?.[RENEW_TERM]?.formData,
        accountName: holderName.value,
        paymentGenre: val,
      });
      state.schemaList[RENEW_TERM].nanoid = nanoid();
    }
  },
);

// 年金领取 同首期/同续期 数据变动，复制 同首期/同续期 数据
watch(
  () => state.schemaList[schemaIndexMap.value.REPRISE]?.formData?.paymentGenre,
  // eslint-disable-next-line consistent-return
  (val, oldVal) => {
    if (props.isView || !(val && oldVal && val !== oldVal)) {
      return false;
    }
    const { FIRST_TERM, RENEW_TERM, REPRISE } = schemaIndexMap.value;
    const isSameFirstOrRenew = [PAY_INFO_TYPE_ENUM.FIRST_SAME, PAY_INFO_TYPE_ENUM.RENEW_SAME].includes(Number(val));

    colorConsole('年金支付类型变动');

    // 同首期/同续期
    if (isSameFirstOrRenew) {
      const currentIndex = String(val) === String(PAY_INFO_TYPE_ENUM.FIRST_SAME) ? FIRST_TERM : RENEW_TERM;
      combineFormData(REPRISE, currentIndex);
    } else if (state.schemaList[REPRISE]) {
      merge(state.schemaList[REPRISE].formData, {
        ...resetObjectValues(state.schemaList[REPRISE].formData, (key) => !RESERVE_FIELD_NAMES.includes(key)),
        ...finalFieldList.value?.[REPRISE]?.formData,
        accountName: mainInsuredName.value,
        paymentGenre: val,
      });
      state.schemaList[REPRISE].nanoid = nanoid();
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
          const name = transformSchemaName(item.name);
          // 支付方式是否需要默认银行卡

          if (defaultFormDataKeys.includes(name)) {
            const formData = needDefaultValue(
              {
                name,
                columns: item.columns,
              },
              fieldInitList[index].formData,
            );
            merge(res[index].formData, formData);
            merge(fieldInitList[index].formData, formData);
          }
          res[index].schema.push({
            ...item,
            name,
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
        merge(schemaItem.formData, val[index]);
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

// 监听投被保人姓名变动, 多被保人默认主被保人/第一主被保人
watch(
  () => [holderName.value, mainInsuredName.value],
  ([name1, name2]) => {
    if (name1 || name2) {
      state.schemaList.forEach((schemaItem) => {
        // 是否为年金领取,若为年金领取则为被保人姓名
        const isReprise = schemaItem.payInfoType === PAYMENT_TYPE_ENUM.REPRISE;
        if (isReprise) {
          schemaItem.formData.accountName = name2;
        } else {
          schemaItem.formData.accountName = name1;
        }
      });
    }
  },
  {
    deep: true,
  },
);

defineExpose({
  validate,
});
</script>
