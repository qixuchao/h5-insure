import { nanoid } from 'nanoid';
import merge from 'lodash-es/merge';
import isNil from 'lodash-es/isNil';
import { formatDate } from '../../../utils/date';
import { isNotEmptyArray } from '@/common/constants/utils';
import { SEX_LIMIT_ENUM, CERT_TYPE_ENUM, YES_NO_ENUM, ATTACHMENT_CATEGORY_ENUM } from '@/common/constants';
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

/**
 * 搜索树最底层的数据
 * @param searchValue
 * @param tree
 * @returns
 */
export const searchTreeData = (searchValue, tree) => {
  const resultList = [];
  const getChildrenList = (nodeList) => {
    nodeList.forEach((node) => {
      if (node.children?.length) {
        getChildrenList(node.children);
      } else {
        if (node.value.indexOf(searchValue) !== -1) {
          resultList.push(node);
        }
      }
    });
  };
  getChildrenList(tree);

  return resultList;
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

// 是否有出生日期
const hasBirthday = (arr) => isNotEmptyArray(arr) && arr.some((item) => (item.code || item.name) === 'birthday');

// 设置职业代码为只读
const setOccupationReadOnly = (item) => {
  if (item.name === 'occupationCode') {
    item.isView = true;
  }
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
    // 是否有出生日期
    const isBirthdayExisted = hasBirthday(arr);

    schema = arr.map((item) => {
      // 如果是长日期类型
      if (item.displayType === 4 && item.attributeValueList?.[0].code === '2') {
        item.displayType = 14;
      }

      if (item.code === 'relationshipProof') {
        item.category = ATTACHMENT_CATEGORY_ENUM.GUARDIAN_MATERIAL;
      }
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

      // 有出生日期则隐藏年龄
      if (item.code === 'age') {
        extraData.visible = !isBirthdayExisted;
      }

      const tempItem = {
        // ...item,
        ...rest,
        ...extraData,
        customFieldName: { text: 'value', value: 'code', children: 'children' },
        label: item.title,
        name: item.code,
        category: item.category,
        remark: item.remark,
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

type ResultEnum = 'holder' | 'beneficiary' | 'payInfo' | 'signInfo' | 'guardian';

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
} & { [x in ResultEnum]: ModuleResult };

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
  /** 被保人仅显示的要素，仅用于计划书 */
  insuredFactorCodes: string[];
  /** 被保人仅显示的要素，仅用于计划书 */
  holderFactorCodes: string[];
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
  // 是否支持多被保人
  const multiInsuredSupportFlag = conf.multiInsuredSupportFlag === YES_NO_ENUM.YES;
  // 配置
  const config: PersonalInfoConf = {
    /** 是否有试算因子 */
    hasTrialFactorCodes: false,
    /** 是否为配偶被保人 */
    isSpouseInsured: false,
    /** 是否支持多被保人 */
    multiInsuredSupportFlag,
    /** 被保人最大数量，
     * 若支持多被保人，则为被保人数量（被保人数量未配置则为无限大）
     * 不支持多被保人，则最大数量为1
     * */
    multiInsuredMaxNum: multiInsuredSupportFlag ? conf.multiInsuredNum || Number.MAX_SAFE_INTEGER : 1,
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
      const schemaList = factorsMap[key];
      const isHolder = key === 'holder';
      // 计划书投保信息中试算因子做展示（仅限于出生日期、性别、社保、职业）
      res[key] = transformToSchema(
        isHolder && isNotEmptyArray(conf.holderFactorCodes)
          ? schemaList.filter((item) => {
              // 计划书被保人只展示职业/有无社保
              return conf.holderFactorCodes.includes(item.code);
            })
          : schemaList,
        trialFactorCodes,
      );
    } else {
      // 被保人
      res[key] = isNotEmptyArray(finialInsured)
        ? finialInsured.map((insuredSchemaListItem) =>
            transformToSchema(
              isNotEmptyArray(conf.insuredFactorCodes)
                ? insuredSchemaListItem.filter((item) => {
                    // 计划书被保人只展示职业/有无社保
                    return conf.insuredFactorCodes.includes(item.code);
                  })
                : insuredSchemaListItem,
              trialFactorCodes,
            ),
          )
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

export const calculateAge = (birthdate) => {
  const today = new Date();
  const birthDate = new Date(birthdate);
  let age = today.getFullYear() - birthDate.getFullYear();
  const month = today.getMonth() - birthDate.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age -= 1;
  }
  return age;
};

/**
 * 解析身份证号码
 * @param str
 * @returns
 */
export const parseCertNo = (str: string) => {
  const result = {
    /** 性别 */
    gender: null,
    /** 生日 */
    birthday: null,
    /** 年龄 */
    age: null,
  };
  // 身份证验证通过
  if (typeof str === 'string' && str && validateIdCardNo(str)) {
    const splitRange = {
      15: [6, 12],
      18: [6, 14],
    };

    result.birthday = str.slice(...splitRange[str.length]).replace(/(.{4})(.{2})/, '$1-$2-');

    result.gender = [SEX_LIMIT_ENUM.FEMALE, SEX_LIMIT_ENUM.MALE][Number(str.slice(-2, -1)) % 2];

    result.age = result.birthday && `${calculateAge(result.birthday)}`;
  }
  return result;
};

/**
 * 重置对对象中的值
 * @param data 数据源
 * @param filterFn 过滤不需要清除的key函数
 * @returns 返回一个新对象
 */
export const resetObjectValues = (data, filterFn = (key: string) => true) => {
  if (!data) {
    return {};
  }
  const keys = Object.keys(data);
  return keys
    .filter((key) => (typeof filterFn === 'function' ? filterFn(key) : true))
    .reduce((res, key) => {
      res[key] =
        {
          Object: {},
          Array: [],
        }[Object.prototype.toString.call(data[key]).slice(8, -1)] || null;

      return res;
    }, {});
};

/**
 * 证件类型选择证件号/户口本时，隐藏性别和出生日期和年龄
 * @param val certType
 * @returns
 */
export const getCertTypeConfig = (val, schema) => {
  const status = ![CERT_TYPE_ENUM.CERT, CERT_TYPE_ENUM.HOUSE_HOLD].includes(String(val));

  // 是否有出生日期, 如果有则隐藏年龄
  const isBirthdayExisted = hasBirthday(schema);
  const extraResult = isBirthdayExisted
    ? {
        age: {
          visible: false,
        },
      }
    : {};

  const result = ['gender', 'birthday', 'age'].reduce((res, key) => {
    res[key] = {
      visible: status,
    };
    return res;
  }, {});

  return {
    ...result,
    ...extraResult,
  };
};

/**
 * 证件类型是否只有身份证，则证件号码显示为身份证号，子女为户口簿
 */
export const getCertConfig = (schema, personVO) => {
  const config: {
    [x: string]: any;
  } = {};
  const { relationToHolder, certType } = personVO || {};
  const isChild = ['6', '7'].includes(`${relationToHolder}`);
  // 证件类型
  const certTypeSchema = schema?.find((schemaItem) => schemaItem.name === 'certType');
  const isOnlyCertFlag = isOnlyCert(certTypeSchema || {});

  // 若只有证件类型为身份证, 隐藏证件类型，修改title为身份证号
  if (isOnlyCertFlag) {
    config.certNo = {
      label: `身份证号${isChild ? '\n(户口簿)' : ''}`,
    };
  }
  // 证件类型为身份证或者户口本
  if (certTypeSchema) {
    merge(config, getCertTypeConfig(certType, schema));
  }
  return [isOnlyCertFlag, config];
};

export const setCertDefaultValue = (schema, personVO, cb) => {
  schema.forEach((item) => {
    if (item.name === 'certType') {
      const hasIdCard = item.columns.find((i) => i.code === '1');

      if (hasIdCard) {
        cb?.();
      }
    }
  });
};

export const getNameRules = (personVO) => {
  const { nationalityCode } = personVO;
  let reg = /^[\u4E00-\u9FFF]·?[\u4E00-\u9FFF]{1,40}$/;
  if (nationalityCode && nationalityCode !== 'CHN') {
    reg = /^([\u4E00-\u9FFF]·?[\u4E00-\u9FFF]{1,40}$|[a-zA-Z]{4,40})$/;
  }
  return {
    name: {
      rules: [
        {
          validator: (val) => {
            return reg.test(val);
          },
          message: `请输入正确姓名`,
        },
      ],
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
        certNo: null,
        gender: null,
        birthday: null,
        age: null,
      });
      // 证件类型选择证件号/户口本时，隐藏性别和出生日期
      nextTick(() => {
        merge(formState.config, getCertTypeConfig(formState.formData.certType, formState.schema));
        Object.assign(formState.formData, { certImage: [] });
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
  // 出生日期变动引起的年龄变化
  age: {
    onChangeEffect: (val, formState) => {
      // 若不为身份证号码/户口簿
      if (![CERT_TYPE_ENUM.CERT, CERT_TYPE_ENUM.HOUSE_HOLD].includes(String(formState.formData.certType))) {
        const age = val ? calculateAge(val) : null;
        Object.assign(formState.formData, {
          age,
        });
      }
    },
  },
  certEndType: {
    onChangeEffect: (val, formState) => {
      if (val === '9999-12-31') {
        Object.assign(formState.formData, {
          certEndType: 1,
        });
      }
    },
  },
  annuallyComeDesc: {
    onChangeEffect: (val, formState) => {
      if (val?.length && val.includes('7')) {
        Object.assign(formState.config, {
          annuallyComeDesc: {
            visible: true,
          },
        });
      } else {
        Object.assign(formState.config, {
          annuallyComeDesc: {
            visible: false,
            required: false,
          },
        });
        Object.assign(formState.formData, {
          annuallyComeDesc: '',
        });
      }
    },
  },
};
