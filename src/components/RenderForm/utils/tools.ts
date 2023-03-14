import dayjs from 'dayjs';
import { isNotEmptyArray } from '@/common/constants/utils';
import { SEX_LIMIT_ENUM, CERT_TYPE_ENUM, YES_NO_ENUM } from '@/common/constants';
import { COMPONENT_MAPPING_LIST, CONFIG_RULE_MAP, COMPONENT_ENUM } from './constants';
import { validateIdCardNo } from './validate';
import { Column, ComponentProps, FieldConfItem, ProductFactor } from '../index.data';

/**
 * 合并职业  dictCode
 * @param [string] insurerCode
 * @returns `${insurerCode.toUpperCase()}_OCCUPATION`
 */
export const combineOccupation = (insurerCode: string) =>
  `${insurerCode ? `${insurerCode.toUpperCase()}_` : ''}OCCUPATION`;

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

/**
 *  删除多级数据中空的 children
 * @param arr
 * @returns arr
 */
export const deleteEmptyChildren = (arr: Column[], childrenKey = 'children') => {
  if (isNotEmptyArray(arr)) {
    return arr.map(({ [`${childrenKey}`]: children, ...other }) => {
      const currentData = {} as Column;
      if (isNotEmptyArray(children)) {
        currentData.children = deleteEmptyChildren(children);
      }
      return {
        ...other,
        ...currentData,
      };
    });
  }
  return [];
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

interface ModuleResult {
  schema: ComponentProps[];
  trialFactorCodes: string[];
}

// 模块类型
const moduleTypeMap = {
  1: 'holder',
  2: 'insured',
  3: 'beneficiary',
};

/**
 * 因子配置
 */
const configMap = {
  certNo: {
    relatedName: 'certType',
  },
  mobile: CONFIG_RULE_MAP.MOBILE,
  age: CONFIG_RULE_MAP.AGE,
  height: {
    ...CONFIG_RULE_MAP.HEIGHT_WEIGHT,
    unit: 'cm',
  },
  weight: {
    ...CONFIG_RULE_MAP.HEIGHT_WEIGHT,
    unit: 'kg',
  },
  contactNo: {},
  email: {
    ruleType: 'email',
  },
  personalAnnualIncome: CONFIG_RULE_MAP.INCOME,
  familyAnnualIncome: CONFIG_RULE_MAP.INCOME,
  familyZipCode: CONFIG_RULE_MAP.ZIP_CODE,
  residence: {},
  homePostalCode: CONFIG_RULE_MAP.ZIP_CODE,
  workPostalCode: CONFIG_RULE_MAP.ZIP_CODE,
  // 内容
  workContent: CONFIG_RULE_MAP.CONTENT,
  // 燃气户号
  gasNumberCollection: {
    ...CONFIG_RULE_MAP.GAS_NUMBER,
    ruleType: 'noZH',
  },
  verificationCode: {
    componentName: COMPONENT_ENUM.ProSMSCode,
    ...CONFIG_RULE_MAP.ZIP_CODE,
  },
  insureArea: {
    ...CONFIG_RULE_MAP.ADDRESS,
  },
  occupation: {},
  country: {
    ...CONFIG_RULE_MAP.COUNTRY,
  },
  certExpiry: {
    minDate: new Date(),
    maxDate: dayjs().add(100, 'year').toDate(),
  },
};

/**
 * 转换原始数据 ProForm 所需要的数据
 * @param [array] 投保人/被保人/受益人的因子数组
 * @returns [object] schema 和 trialFactorCodes(试算因子 code )
 */
export const transformToSchema = (arr: FieldConfItem[]): ModuleResult => {
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
      if (item.isCalculationFactor === YES_NO_ENUM.YES) {
        trialFactorCodes.push(item.code);
      }

      const extraData: Partial<FieldConfItem> = {};

      // 按 code 配置的组件属性
      const { componentName: configComponentName, ...restConfig } = configMap[item.code] || {};

      // 组件名优先级 config(code) > schema > ProFieldV2
      const finalComponentName = configComponentName || componentName || 'ProFieldV2';

      // 被保人因子是否为非投保人共有
      if (item.moduleType === 2) {
        extraData.isSelfInsuredNeed = item.isSelfInsuredNeed;
      }

      return {
        // ...item,
        ...rest,
        ...extraData,
        customFieldName: { text: 'value', value: 'code', children: 'children' },
        label: item.title,
        name: item.code,
        componentName: finalComponentName,
        required: item.isMustInput === 1,
        columns: item.attributeValueList || [],
        ...restConfig,
      };
    });
  }

  return {
    schema,
    trialFactorCodes,
  };
};

/**
 * 转换原始数据 ProForm 所需要的数据
 * @param [array] 包含投保人、被保人、受益人的因子数组
 * @returns [array] {schema 和 trialFactorCodes(试算因子 code )}[]
 */
export const transformFactorToSchema = (
  factors: ProductFactor,
): Array<{
  schema: ComponentProps[];
  trialFactorCodes: string[];
}> => {
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

/**
 * 首字母大写
 * @param str
 * @returns
 */
export const upperFirstLetter = (str: string): string => {
  if (typeof str === 'string' && str) {
    return `${str[0].toUpperCase()}${str.substring(1)}`;
  }
  return '';
};

/**
 * 处理 slots  attrs slots {'nameTips': 'extra'}
 * @param slots
 * @param slotsMap
 * @returns
 */
export const handleSlots = (slots, slotsMap = {}) => {
  return Object.keys(slots).reduce((res, key) => {
    const slotName = slotsMap[key];
    res[slotName || key] = key;
    return res;
  }, {});
};

/**
 * 解析身份证号码
 * @param str
 * @returns
 */
export const parseCertNo = (str: string) => {
  // 身份证验证通过
  if (typeof str === 'string' && str && validateIdCardNo(str)) {
    const splitRange = {
      15: [6, 12],
      18: [6, 14],
    };
    const birthday = str.slice(...splitRange[str.length]).replace(/(.{4})(.{2})/, '$1-$2-');

    const gender = [SEX_LIMIT_ENUM.FEMALE, SEX_LIMIT_ENUM.MALE][Number(str.slice(-2, -1)) % 2];

    return {
      /** 性别 */
      gender,
      /** 生日 */
      birthday,
    };
  }
  return {};
};

/**
 * 字段关联副作用处理
 */
export const relatedConfigMap = {
  certType: {
    onBlurEffect: (val, formData) => {
      // 身份证号码
      if (formData.certType === CERT_TYPE_ENUM.CERT) {
        const data = parseCertNo(val);
        Object.assign(formData, data);
      }
    },
  },
};
