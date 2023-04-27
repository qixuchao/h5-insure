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

/**
 * field slots 集合
 * value-view field value 查看模式插槽
 */
const FIELD_SLOTS = ['label', 'input', 'left-icon', 'right-icon', 'button', 'error-message', 'extra', 'value-view'];

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
  return formRef.value?.validate(isTrial ? trialFactorCodes : undefined);
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

/**
 * 证件类型是否只有身份证
 * @param item schema Item
 * @returns
 */
export const isOnlyCert = (item) => {
  if (item?.name !== 'certType') {
    return false;
  }
  // 若只有证件类型为身份证, 隐藏证件类型，修改title为身份证号
  const { columns, title } = item || {};
  return (
    isNotEmptyArray(columns) &&
    columns.length === 1 &&
    columns.findIndex((columnItem) => columnItem.code === CERT_TYPE_ENUM.CERT) > -1
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
  /** 是否支持多被保人 */
  multiInsuredSupportFlag: boolean;
  /** 是否为配偶被保人 */
  isSpouseInsured: false;
  /** 被保人人最大个数 */
  multiInsuredMaxNum: number;
  /** 被保人最小个数 */
  multiInsuredMinNum: number;
  /** 受益人人个数 */
  multiBeneficiaryMaxNum: number;
}

type FactorToSchemaResult = {
  config: PersonalInfoConf;
  insured: ModuleResult[];
} & {
  [x in ResultEnum]: ModuleResult;
};

/**
 * 处理被保人 schema
 * @param factorsMap
 * @param config
 * @returns [[],[]]
 */
const handleHolderSchema = (factorsMap, config) => {
  if (!isNotEmptyArray(factorsMap.insured)) {
    return [];
  }

  // 投保人codeList
  const holderCodes = isNotEmptyArray(factorsMap.holder) ? factorsMap.holder.map((item) => item.code) : [];

  return factorsMap.insured
    .reduce(
      (res, insuredItem) => {
        const { code, subModuleType, attributeValueList } = insuredItem;
        // 若为次被保人
        if (subModuleType === INSURED_MODULE_TYPE_ENUM.sub) {
          // 若为主被保人关系因子
          if (code === 'relationToMainInsured') {
            const isSpouse =
              isNotEmptyArray(attributeValueList) &&
              attributeValueList.length === 1 &&
              attributeValueList.findIndex((attrItem) => attrItem.code === '2') > -1;
            // 若是配偶，被保人最大最小数量为2,并且不可添加
            if (isSpouse) {
              Object.assign(config, {
                multiInsuredMaxNum: 2,
                multiInsuredMinNum: 2,
                isSpouseInsured: true,
              });
            }
          }

          res[1].push({
            ...insuredItem,
            isSelfInsuredNeed: !holderCodes.includes(code),
          });
        } else {
          res[0].push({
            ...insuredItem,
            isSelfInsuredNeed: !holderCodes.includes(code),
          });
        }
        return res;
      },
      [[], []],
    )
    .filter((item) => isNotEmptyArray(item));
};

/** 配置 */
interface TransformConf {
  /** 是否过滤试算因子 */
  isTrial: boolean;
  /** 是否支持多被保人 */
  multiInsuredSupportFlag: number;
  /** 被保人个数 */
  multiInsuredNum: number;
  /** 受益人人个数 */
  multiBeneficiaryMaxNum: number;
}

/**
 * 转换原始数据 ProForm 所需要的数据
 * @param [array] 包含投保人、被保人、受益人的因子数组
 * @param [boolean] 是否过滤试算因子
 * @returns [array] {schema 和 trialFactorCodes(试算因子 code )}[]
 */
export const transformFactorToSchema = (
  factors: Partial<ProductFactor>,
  conf: Partial<TransformConf> = { isTrial: false },
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
  const config: PersonalInfoConf = {
    /** 是否有试算因子 */
    hasTrialFactorCodes: false,
    /** 是否为配偶被保人 */
    isSpouseInsured: false,
    /** 是否支持多被保人 */
    multiInsuredSupportFlag: conf.multiInsuredSupportFlag === YES_NO_ENUM.YES,
    /** 被保人最大数量 */
    multiInsuredMaxNum: conf.multiInsuredNum,
    /** 被保人最大数量 */
    multiInsuredMinNum: 1,
    /** 受益人数量, 默认 5 */
    multiBeneficiaryMaxNum: conf.multiBeneficiaryMaxNum || 5,
  };

  // 是否过滤试算因子
  // { holder, insured, beneficiary, payInfo, sign }
  const factorsMap: ProductFactor = keys.reduce((res, key) => {
    res[MODULE_TYPE_MAP[key]] = isNotEmptyArray(factors[key])
      ? factors[key].filter((factorsItem) => {
          const { subModuleType, code, attributeValueList } = factorsItem;
          if (subModuleType === INSURED_MODULE_TYPE_ENUM.sub) {
            // 若为主被保人关系因子
            if (code === 'relationToMainInsured') {
              const isSpouse =
                isNotEmptyArray(attributeValueList) &&
                attributeValueList.length === 1 &&
                attributeValueList.findIndex((attrItem) => attrItem.code === '2') > -1;
              // 若是配偶，被保人最大最小数量为2,并且不可添加
              if (isSpouse) {
                Object.assign(config, {
                  multiInsuredMaxNum: 2,
                  multiInsuredMinNum: 2,
                  isSpouseInsured: true,
                });
              }
            }
          }
          // 是否过滤试算
          return conf.isTrial ? factorsItem.isCalculationFactor === 1 : true;
        })
      : [];
    return res;
  }, {});

  // 多被保人逻辑
  const finialInsured = handleHolderSchema(factorsMap, config);

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
 * 转换首字母大小写
 * @param type
 * @returns
 */
const transfromFistLetter =
  (type = false) =>
  (str: string) => {
    if (typeof str === 'string' && str) {
      const fnName = ['toLowerCase', 'toUpperCase'][Number(type)];
      return `${str[0][fnName]()}${str.substring(1)}`;
    }
    return '';
  };

/**
 * 首字母大写
 * @param str
 * @returns
 */
export const upperFirstLetter = transfromFistLetter(true);

/**
 * 首字母小写
 * @param str
 * @returns
 */
export const lowerFirstLetter = transfromFistLetter();

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
 * 证件类型选择证件号/户口本时，隐藏性别和出生日期
 * @param val certType
 * @returns
 */
export const getCertConfig = (val) => {
  const status = ![CERT_TYPE_ENUM.CERT, CERT_TYPE_ENUM.HOUSE_HOLD].includes(String(val));
  return {
    gender: {
      visible: status,
    },
    birthday: {
      visible: status,
    },
  };
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
        merge(formState.config, getCertConfig(formState.formData.certType));
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
      if ([CERT_TYPE_ENUM.CERT, CERT_TYPE_ENUM.HOUSE_HOLD].includes(String(formState.formData.certType))) {
        const data = parseCertNo(val);
        Object.assign(formState.formData, data);
      }
    },
  },
};
