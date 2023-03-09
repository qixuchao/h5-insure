import { isNotEmptyArray } from '@/common/constants/utils';
import { COMPONENT_MAPPING_LIST } from './constants';

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
  'visibile',
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

// 临时组件名
const tempMap = {
  name: 'ProFieldV2',
  sex: 'ProRadioV2',
  birthDate: 'ProDatePickerV2',
  certExpiry: 'ProDatePickerV2',
  certImage: 'ProUpload',
  certType: 'ProPickerV2',
  certNo: 'ProFieldV2',
  mobile: 'ProFieldV2',
  verificationCode: 'ProSMSCode',
  relationToHolder: 'ProRadioV2',
  social: 'ProRadioV2',
  isSmoke: 'ProRadioV2',
  insureArea: 'ProAddress',
  degree: 'ProRadioV2',
  occupation: 'ProCascaderV2',
  marritalStatus: 'ProRadioV2',
  residence: 'ProAddress',
  homeAddress: 'ProAddress',
  homeAddressDetail: 'ProFieldV2',
  workAddress: 'ProAddress',
  country: 'ProPickerV2',
};

interface Column {
  text: string;
  value: string | number;
  children: Column[];
}

interface FieldConfItem {
  code: string;
  title: string;
  displayType: number;
  isDisplay: number;
  isMustInput: number;
  hasDefaultValue: number;
  default: string;
  attributeValueList: Column[];
  isReadOnly: boolean;
  sort: number;
  moduleType: number;
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

// 模块类型
const moduleTypeMap = {
  1: 'holder',
  2: 'insured',
  3: 'beneficiary',
};

const configMap = {
  mobile: {},
  age: {},
  height: {},
  weight: {},
  contactNo: {},
  email: {},
  personalAnnualIncome: {},
  familyAnnualIncome: {},
  residence: {},
  homePostalCode: {},
  workPostalCode: {},
  workContent: {},
};

// 转换原始数据 ProForm 所需要的数据
export const transformToSchema = (arr: FieldConfItem[]) => {
  // 表单 schema
  let schema = [];
  // 试算 code
  const trialFactorCodes = [];

  if (isNotEmptyArray(arr)) {
    schema = arr.map((item) => {
      // 当前组件配置
      const { code, name, value, componentName, ...rest } =
        COMPONENT_MAPPING_LIST.find((component) => `${component.value}` === `${item.displayType}`) || {};

      // TODO: 是否是试算因子
      if (item.code === 'name') {
        trialFactorCodes.push(item.code);
      }

      const extraData: Partial<FieldConfItem> = {};

      // 被保人因子是否为非投保人共有
      if (item.moduleType === 2) {
        extraData.isSelfInsuredNeed = item.isSelfInsuredNeed;
      }

      return {
        // ...item,
        ...rest,
        ...extraData,
        label: item.title,
        name: item.code,
        required: item.isMustInput === 1,
        columns: item.attributeValueList || [],
        customFieldName: { text: 'value', value: 'code', children: 'children' },
        componentName: componentName || 'ProFieldV2',
      };
    });
  }

  return {
    schema,
    trialFactorCodes,
  };
};

export const transformFactorToSchema = (factors: ProductFactor) => {
  if (factors && Object.keys(factors).length) {
    const keys = Object.keys(factors);
    const { holder, insured, beneficiary }: ProductFactor = keys.reduce((res, key) => {
      // res[moduleTypeMap[key]] = factors[key].filter((item) => item.isDisplay === 1);
      res[moduleTypeMap[key]] = factors[key];
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

    console.log('origin factors', holder, insured, beneficiary);

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

// 处理 slots  attrs slots {'nameTips': 'extra'}
export const handleSlots = (slots, slotsMap = {}) => {
  return Object.keys(slots).reduce((res, key) => {
    const slotName = slotsMap[key];
    res[slotName || key] = key;
    return res;
  }, {});
};
