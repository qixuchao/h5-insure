import { nanoid } from 'nanoid';
import merge from 'lodash-es/merge';
import isNil from 'lodash-es/isNil';
import { isNotEmptyArray } from '@/common/constants/utils';
import { SEX_LIMIT_ENUM, CERT_TYPE_ENUM, YES_NO_ENUM } from '@/common/constants';
import { COMPONENT_MAPPING_LIST, GLOBAL_CONFIG_MAP, MODULE_TYPE_MAP, INSURED_MODULE_TYPE_ENUM } from './constants';
import { validateIdCardNo } from './validate';
import { Column, ComponentProps, FieldConfItem, ProductFactor } from '../index.data';

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
  'visible',
];

const FIELD_SLOTS = ['label', 'input', 'left-icon', 'right-icon', 'button', 'error-message', 'extra'];

// Field 通用默认属性
const FIELD_INIT_ATTRS = {
  autocomplete: 'off',
};

export const colorConsole = (str) => console.log(`%c🔥 ${str}`, 'color:#1989fa;background:#5e4;padding:3px 5px;');

/** 验证试算因子是否全部有值 */
export const validateFields = (state) => {
  // 没有试算因子则不进行试算
  const { trialFactorCodes, personVO } = state || {};
  const hasTrialFactor = isNotEmptyArray(trialFactorCodes);
  if (!hasTrialFactor) {
    return true;
  }

  // 没有试算因子则不进行试算，或者试算因子是否全有值
  return !trialFactorCodes.some((code) => {
    const val = personVO[code];
    return isNil(val) || val === '' || (Array.isArray(val) && !val.length);
  });
};

/**
 *
 * @param formRef 表单 ref
 * @param trialFactorCodes 试算因子
 * @param isTrial 是否为试算
 * @returns
 */
export const validateForm = (formRef, trialFactorCodes, isTrial) => {
  // 如果是试算并且没有试算因子，直接通过
  if (isTrial && !isNotEmptyArray(trialFactorCodes)) {
    return Promise.resolve();
  }
  return formRef.value?.validate(isTrial ? trialFactorCodes : []);
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

/**
 * 过滤级联级别数据
 * @param arr
 * @param childrenKey
 * @param level 展示的层数 索引从 1 开始
 * @returns
 */
export const filterChildrenLevel = (arr: Column[], level = 0, childrenKey = 'children') => {
  const loop = (list: Column[], index = 1) => {
    if (isNotEmptyArray(list)) {
      return list.map(({ [`${childrenKey}`]: children, ...other }) => {
        const currentData = {} as Column;
        // 不需要过滤，或者需要过滤 并且 level > index
        const isFilter = !level || (level && level > index);
        if (isFilter && isNotEmptyArray(children)) {
          currentData.children = loop(children, index + 1);
        }
        return {
          ...other,
          ...currentData,
        };
      });
    }
    return [];
  };

  return loop(arr);
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

// 证件类型是否只有身份证
export const isOnlyCert = (item) => {
  if (item?.name !== 'certType') {
    return false;
  }
  // 若只有证件类型为身份证, 隐藏证件类型，修改title为身份证号
  const { columns, title } = item || {};
  return (
    isNotEmptyArray(columns) &&
    columns.length === 1 &&
    columns.find((columnItem) => columnItem.code === CERT_TYPE_ENUM.CERT)
  );
};

/**
 * 转换原始数据 ProForm 所需要的数据
 * @param [array] 投保人/被保人/受益人的因子数组
 * @returns [object] schema 和 trialFactorCodes(试算因子 code )
 */
export const transformToSchema = (arr: FieldConfItem[], trialFactorCodesArr: string[]): ModuleResult => {
  // 表单 schema
  let schema = [];
  // 试算 code
  const trialFactorCodes = [];

  if (isNotEmptyArray(arr)) {
    schema = arr.map((item) => {
      // 当前组件配置
      const { code, name, value, componentName, ...rest } =
        COMPONENT_MAPPING_LIST.find((component) => `${component.value}` === `${item.displayType}`) || {};

      // 是否是试算因子
      if (item.isCalculationFactor === YES_NO_ENUM.YES) {
        trialFactorCodes.push(item.code);
      }

      const extraData: Partial<FieldConfItem> = {};

      // 按 code 配置的组件属性
      const { componentName: configComponentName, ...restConfig } = GLOBAL_CONFIG_MAP[item.code] || {};

      // 组件名优先级 config(code) > schema > ProFieldV2
      const finalComponentName = configComponentName || componentName || 'ProFieldV2';

      // 被保人因子是否为非投保人共有
      if (item.moduleType === 2) {
        extraData.isSelfInsuredNeed = item.isSelfInsuredNeed;
      }

      const tempItem = {
        // ...item,
        ...rest,
        ...extraData,
        customFieldName: { text: 'value', value: 'code', children: 'children' },
        label: item.title,
        name: item.code,
        componentName: finalComponentName,
        required: item.isMustInput === 1,
        nanoid: nanoid(),
        ...restConfig,
      };

      const result = {
        ...tempItem,
        attributeValueList: item.attributeValueList,
        // 有字典 code 则从接口中获取数据
        columns: tempItem.dictCode ? [] : item.attributeValueList || [],
      };

      // 是否为只有身份证的证件类型的因子，就隐藏
      if (isOnlyCert(result)) {
        result.visible = false;
      }

      return result;
    });
  }

  trialFactorCodesArr.push(...trialFactorCodes);

  return {
    schema,
    trialFactorCodes,
  };
};

interface InsuredFactorSchema extends ModuleResult {
  beneficiaryList: ModuleResult[];
}

type ResultEnum = 'holder' | 'beneficiary' | 'payInfo' | 'signInfo';

export interface PersonalInfoConf {
  hasTrialFactorCodes?: boolean;
}

type FactorToSchemaResult = {
  config: PersonalInfoConf;
  insured: ModuleResult[];
} & {
  [x in ResultEnum]: ModuleResult;
};

/**
 * 转换原始数据 ProForm 所需要的数据
 * @param [array] 包含投保人、被保人、受益人的因子数组
 * @param [boolean] 是否过滤试算因子
 * @returns [array] {schema 和 trialFactorCodes(试算因子 code )}[]
 */
export const transformFactorToSchema = (
  factors: Partial<ProductFactor>,
  isTrial = false,
): Partial<FactorToSchemaResult> => {
  const initValue = {} as FactorToSchemaResult;

  if (!factors) {
    return initValue;
  }

  const keys = Object.keys(factors) || [];
  if (!isNotEmptyArray(keys)) {
    return initValue;
  }

  const trialFactorCodes = [];
  const config = {
    hasTrialFactorCodes: false,
  };

  // 是否过滤试算因子
  // { holder, insured, beneficiary, payInfo, sign }
  const factorsMap: ProductFactor = keys.reduce((res, key) => {
    res[MODULE_TYPE_MAP[key]] = isNotEmptyArray(factors[key])
      ? factors[key].filter((factorsItem) => {
          // 是否过滤试算
          return isTrial ? factorsItem.isCalculationFactor === 1 : true;
        })
      : [];
    return res;
  }, {});

  const holderCodes = isNotEmptyArray(factorsMap.holder) ? factorsMap.holder.map((item) => item.code) : [];

  // 被保人为本人时，不在投保人中的因子展示
  let finialInsured = [];
  // 多被保人逻辑
  if (isNotEmptyArray(factorsMap.insured)) {
    finialInsured = factorsMap.insured
      .reduce(
        (res, insuredItem) => {
          // 若为次被保人
          if (insuredItem.subModuleType === INSURED_MODULE_TYPE_ENUM.sub) {
            res[1].push(insuredItem);
          } else {
            res[0].push({
              ...insuredItem,
              isSelfInsuredNeed: !holderCodes.includes(insuredItem.code),
            });
          }
          return res;
        },
        [[], []],
      )
      .filter((item) => isNotEmptyArray(item));
  }

  const result = Object.keys(factorsMap).reduce((res, key) => {
    if (key !== 'insured') {
      res[key] = transformToSchema(factorsMap[key], trialFactorCodes);
    } else {
      res[key] = isNotEmptyArray(finialInsured)
        ? finialInsured.map((item) => transformToSchema(item, trialFactorCodes))
        : [];
    }
    return res;
  }, {} as FactorToSchemaResult);

  result.config = {
    ...config,
    hasTrialFactorCodes: isNotEmptyArray(trialFactorCodes) as boolean,
  };

  return result;
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
  const result = {
    /** 性别 */
    gender: '',
    /** 生日 */
    birthday: '',
  };
  // 身份证验证通过
  if (typeof str === 'string' && str && validateIdCardNo(str)) {
    const splitRange = {
      15: [6, 12],
      18: [6, 14],
    };

    result.birthday = str.slice(...splitRange[str.length]).replace(/(.{4})(.{2})/, '$1-$2-');

    result.gender = [SEX_LIMIT_ENUM.FEMALE, SEX_LIMIT_ENUM.MALE][Number(str.slice(-2, -1)) % 2];
  }
  return result;
};

/**
 * 字段关联字段变化引起的副作用处理，如证件类型变化引起证件号码长度验证
 */
export const relatedConfigMap = {
  certNo: {
    onChangeEffect: (val, formState) => {
      // 证件类型切换清除证件号码
      Object.assign(formState.formData, {
        certNo: '',
        gender: '',
        birthday: '',
      });
      // 证件类型选择证件号/户口本时，隐藏性别和出生日期
      nextTick(() => {
        const status = ![CERT_TYPE_ENUM.CERT, CERT_TYPE_ENUM.HOUSE_HOLD].includes(formState.formData.certType);
        merge(formState.config, {
          gender: {
            visible: status,
          },
          birthday: {
            visible: status,
          },
        });
      });
    },
  },
  // 关联证件类型的配置
  certType: {
    /** 关联的值引起组件属性变化 */
    extraAttrs: {
      4: {
        maxlength: 10,
      },
    },
    onChangeEffect: (val, formState) => {
      // 身份证号码/户口簿
      if ([CERT_TYPE_ENUM.CERT, CERT_TYPE_ENUM.HOUSE_HOLD].includes(formState.formData.certType)) {
        const data = parseCertNo(val);
        Object.assign(formState.formData, data);
      }
    },
  },
};
