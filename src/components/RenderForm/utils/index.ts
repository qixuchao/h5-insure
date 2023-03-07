import { type Ref, type InjectionKey } from 'vue';
import type { FormInstance } from 'vant';
import { isNotEmptyArray } from '@/common/constants/utils';

export * from './validate';

export * from './constants';

interface FormState {
  formData: object;
  config: object;
  nameList: string[];
}

interface VanFormProvied {
  formState: FormState;
  formRef: Ref<FormInstance>;
}

// pro from
export const VAN_PRO_FORM_KEY: InjectionKey<VanFormProvied> = Symbol('VAN_PRO_FORM_KEY');

// van-filed Props
const FIELD_PROPS = [
  'v-model',
  'label',
  'name',
  'id',
  'type',
  'size',
  'maxlength',
  'placeholder',
  'border',
  'disabled',
  'readonly',
  'colon',
  'required',
  'center',
  'clearable',
  'clear-icon',
  'clear-trigger',
  'clickable',
  'is-link',
  'autofocus',
  'show-word-limit',
  'error',
  'error-message',
  'error-message-align',
  'formatter',
  'format-trigger',
  'arrow-direction',
  'label-class',
  'label-width',
  'label-align',
  'input-align',
  'autosize',
  'left-icon',
  'right-icon',
  'icon-prefix',
  'rules',
  'autocomplete',
  'enterkeyhint',
];

const FIELD_SLOTS = ['label', 'input', 'left-icon', 'right-icon', 'button', 'error-message', 'extra'];

// Field 通用默认属性
const FIELD_INIT_ATTRS = {
  autocomplete: 'off',
};

// 过滤数据
const filterData = (data, keys, initData = {}) => {
  const dataKeys = Object.keys(data);
  if (!isNotEmptyArray(dataKeys)) {
    return [{ ...initData }, {}];
  }

  // [fieldSlots[], otherSlots[]]
  return dataKeys.reduce(
    (res, key) => {
      const isExist = keys.includes(key);

      res[Number(!isExist)][key] = data[key];
      return res;
    },
    [{ ...initData }, {}],
  );
};

// 分离 van-field / other props
export const filterAttrs = (attrs) => {
  return filterData(attrs, FIELD_PROPS, FIELD_INIT_ATTRS);
};

// 分离 van-field / other slots
export const filterSlots = (slots) => {
  return filterData(slots, FIELD_SLOTS);
};

// 组件与要素映射
export const COMPONENT_MAP = {
  ProField: ['input', 'textarea'],
  ProPicker: ['enum'],
  ProCalendar: ['calendar'],
  ProDatePicker: ['date'],
  ProRadio: ['radio'],
  ProCheckbox: ['checkbox'],
  ProAddress: ['address'],
  ProBank: ['bank'],
  ProSMSCode: ['smsCode'],
};

const tempMap = {
  name: 'ProField',
  certType: 'ProPicker',
  certNo: 'ProField',
  mobile: 'ProField',
  verificationCode: 'ProSMSCode',
  relationToHolder: 'ProRadio',
  social: 'ProRadio',
};

// 组件名称列表
export const COMPONENT_LIST = Object.keys(COMPONENT_MAP);

interface Column {
  text: string;
  value: string | number;
  children: Column[];
}

interface FieldConfItem {
  code: string;
  title: string;
  displayType: string;
  isDisplay: number;
  isMustInput: number;
  hasDefaultValue: number;
  default: string;
  attributeValueList: Column[];
  isReadOnly: boolean;
  sort: number;
  isExtend: boolean;
  isHidden: boolean;
  placeholder: string;
  regular: RegExp;
  unit: string;
  isSelfInsuredNeed: boolean;
}

interface ProductFactor {
  [key: string]: FieldConfItem[];
}

// 转换原始数据 ProForm 所需要的数据
export const transformToSchema = (arr: FieldConfItem[]) => {
  // 表单 schema
  let schema = [];
  // 试算 code
  const trialFactorCodes = [];

  if (isNotEmptyArray(arr)) {
    schema = arr.map((item) => {
      // 当前组件名
      const componentName = COMPONENT_LIST.find((key) => {
        return COMPONENT_MAP[key].includes(item.displayType);
      });

      // TODO: 是否是试算因子
      if (item.code === 'name') {
        trialFactorCodes.push(item.code);
      }

      return {
        // ...item,
        label: item.title,
        name: item.code,
        required: item.isMustInput === 1,
        columns: item.attributeValueList || [],
        isSelfInsuredNeed: item.isSelfInsuredNeed,
        customFieldName: { text: 'value', value: 'code', children: 'children' },
        componentName: tempMap[item.code] || componentName || 'ProField',
      };
    });
  }

  return {
    schema,
    trialFactorCodes,
  };
};

const moduleTypeMap = {
  1: 'holder',
  2: 'insured',
  3: 'beneficiary',
};

export const transformFactorToSchema = (factors: ProductFactor) => {
  if (factors && Object.keys(factors).length) {
    const keys = Object.keys(factors);
    const { holder, insured, beneficiary }: ProductFactor = keys.reduce((res, key) => {
      res[moduleTypeMap[key]] = factors[key].filter((item) => item.isDisplay === 1);
      return res;
    }, {});

    const holderCodes = holder.map((item) => item.code);

    // 被保人为本人时，不在投保人中的因子展示
    const finialInsured = insured.map((item) => {
      return {
        ...item,
        isSelfInsuredNeed: !holderCodes.includes(item.code),
      };
    });

    console.log(33333, holder, insured, beneficiary);

    return [holder, finialInsured, beneficiary].map((item) => transformToSchema(item));
  }
  return [];
};

// first letter upper
export const upperFirstLetter = (str: string): string => {
  if (typeof str === 'string' && str) {
    return `${str[0].toUpperCase()}${str.substring(1)}`;
  }
  return '';
};

export default {};
