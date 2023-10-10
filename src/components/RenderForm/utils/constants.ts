import { type Ref, type InjectionKey } from 'vue';
import dayjs from 'dayjs';
import type { VanFormProvied } from '../index.data';
import { DictNameEnum, CERT_TYPE_ENUM } from '@/common/constants';
import { PAY_INFO_TYPE_LIST, PAY_INFO_TYPE_ENUM } from '@/common/constants/bankCard';
import { checkCode, sendCode } from '@/api/modules/phoneVerify';

/**
 * 获取保司 code, 通用处理，此处无法使用 useRoute
 * @returns
 */
const getInsurerCodeFormUrl = () => (window.location.search.match(/&|\?insurerCode=([^&]*)&/) || [])[1] || '';

/**
 * 合并职业  dictCode
 * @param [string] insurerCode
 * @returns `${insurerCode.toUpperCase()}_OCCUPATION`
 */
export const combineDictCode = (() => {
  const insurerCode = getInsurerCodeFormUrl();
  console.log('insurerCode', insurerCode);
  return (dictCode: string) => `${insurerCode ? `${insurerCode.toUpperCase()}_` : ''}${dictCode}`;
})();

/**
 * 发送验证码
 * @param param0
 * @param callback
 */
export const sendSMSCode = async ({ mobile }, callback) => {
  const res = await sendCode(mobile);
  const { code } = res;
  if (code === '10000') {
    typeof callback === 'function' && callback();
  }
};

export const checkSMSCode = async ({ mobile, smsCode }, callback) => {
  const { code, data } = await checkCode(mobile, smsCode);

  if (code === '10000') {
    callback?.();
  }
};

/** 组件枚举 */
export const COMPONENT_ENUM = {
  /** 1:单行文本/2:多行文本/3:数字输入框 */
  ProFieldV2: 'ProFieldV2',
  /** 4:日期 */
  ProDatePickerV2: 'ProDatePickerV2',
  /** 5:下拉框 */
  ProPickerV2: 'ProPickerV2',
  /** 6:单选框 */
  ProRadioV2: 'ProRadioV2',
  /** 7:多选框 */
  ProCheckboxV2: 'ProCheckboxV2',
  /** 8:switch开关 */
  ProSwitchV2: 'ProSwitchV2',
  /** 9:级联选择 */
  ProCascaderV2: 'ProCascaderV2',
  /** 10:银行卡 */
  ProBank: 'ProBank',
  /** 11:地址 */
  ProAddress: 'ProAddress',
  /** 12:文件上传 */
  ProUploadV2: 'ProUploadV2',
  /** 13:步进器 */
  ProStepperV2: 'ProStepperV2',
  /** 验证码 */
  ProSMSCode: 'ProSMSCode',
  /** 职业信息 */
  ProOccupation: 'ProOccupation',
  /** 证件影像 */
  ProIDCardUploadV2: 'ProIDCardUploadV2',
  /** 影像上传基础组件 */
  ProBaseUpload: 'ProBaseUpload',
  /** 银行卡照片 */
  ProBankUpload: 'ProBankUpload',
  /** 证件有效期 */
  ProValidateDate: 'ProValidateDate',
};

// 输入框最大长度
export const INPUT_MAX_LENGTH = {
  /**
   * 默认长度 25
   */
  DEFAULT: 25,
  /**
   * 年龄长度 3
   */
  THREE: 3,
  /**
   * 身高/体重 最多一位小数 长度 5
   */
  FIVE: 5,
  /**
   * 验证码/邮编 长度 6
   */
  SIX: 6,
  /**
   * 出生证长度 10
   */
  TEN: 10,
  /**
   * 手机号长度 11
   */
  ELEVEN: 11,
  /**
   * 证件号长度 18
   */
  EIGHTEEN: 18,
  /**
   * 燃气户号/银行卡号长度 20
   */
  TWENTY: 20,
  /**
   * 姓名长度 40
   */
  FORTY: 40,
  /**
   * 详细地址长度/单位名称 50
   */
  FIFTY: 50,
  /**
   * 内容长度 200
   */
  TWO_HUNDRED: 200,
};

/** ruleType 枚举 */
export const RULE_TYPE_ENUM = {
  /** 姓名 */
  NAME: 'name',
  /** 链接 */
  EXTERNAL: 'external',
  /** 邮箱 */
  EMAIL: 'email',
  /** 邮编 */
  ZIP_CODE: 'zipCode',
  /** 电话号码 */
  TEL: 'tel',
  /** 手机号 */
  MOBILE: 'mobile',
  /** 中文字符 */
  ZH_CN: 'zhCN',
  /** 非中文字符 */
  NOT_ZH_CN: 'notZhCN',
  /** 只允许输入中文、数字、英文字母 */
  NORMAL_CHAR: 'normalChar',
  /** 字母、数字 */
  ALPHABET_NUMBER: 'alphabetNumber',
  /** 身份证 */
  CERT: 'cert',
  /** 户口本 */
  HOUSE_HOLD: 'houseHold',
  /** 出生证 */
  BIRTH: 'birth',
  /** 护照 */
  PASSPORT: 'passport',
  /** 其他证件 */
  OTHER_CERT: 'otherCert',
  /** 军官证 */
  MILITARY_CARD: 'militaryCard',
  /** 士兵证 */
  SOLIDER: 'solider',
  /** 大陆居民往来港澳通行证 */
  HONGKONG_MACAO: 'hongkongMacao',
  /** 大陆居民往来台湾通行证 */
  TAIWAN_TRAVEL: 'taiwanTravel',
  /** 外国人永久居留证 */
  FOREIGN_PERMANENT: 'foreignPermanent',
  /** 港澳居民居住证 */
  HK_MACAO_RESIDENCE_PERMIT: 'HKMacaoResidencePermit',
  /** 台湾居民居住证 */
  TAIWAN_RESIDENCE_PERMIT: 'taiwanResidencePermit',
  /** 社会信用代码 */
  SOCIAL_CREDIT_CODE: 'socialCreditCode',
  /** 组织机构代码 */
  OCC: 'OCC',
  /** 营业执照号码 */
  BUSINESS_LICENSE: 'businessLicense',
  /** 银行卡号 */
  BAND_CARD: 'bandCard',
};

/** 规则配置 */
export const RULE_CONFIG_MAP = {
  /**
   * 姓名 长度最大 25
   */
  NAME: {
    maxlength: INPUT_MAX_LENGTH.FORTY,
    ruleType: RULE_TYPE_ENUM.NAME,
  },
  /**
   * 手机号 长度11位，数字
   */
  MOBILE: {
    type: 'digit',
    ruleType: RULE_TYPE_ENUM.MOBILE,
    maxlength: INPUT_MAX_LENGTH.ELEVEN,
  },
  /**
   * 年龄 最多三位数字，不支持小数
   */
  AGE: {
    type: 'digit',
    maxlength: INPUT_MAX_LENGTH.THREE,
  },
  /**
   * 身高/体重 允许一位小数
   */
  HEIGHT_WEIGHT: {
    type: 'number',
    precision: 1,
    maxlength: INPUT_MAX_LENGTH.FIVE,
  },
  /**
   * 收入 允许2位小数，无小数位默认补全【.00】 单位: 万元
   */
  INCOME: {
    type: 'number',
    precision: 2,
    unit: '万元',
    isPrecisionCompleted: true,
  },
  /**
   * 邮编/验证码 数字6位，不支持小数
   */
  ZIP_CODE: {
    type: 'digit',
    ruleType: RULE_TYPE_ENUM.ZIP_CODE,
    maxlength: INPUT_MAX_LENGTH.SIX,
  },
  /**
   * 内容 最长200个汉字
   */
  CONTENT: {
    maxlength: INPUT_MAX_LENGTH.TWO_HUNDRED,
  },
  /**
   * 燃气户号 长度20个字符
   */
  GAS_NUMBER: {
    maxlength: INPUT_MAX_LENGTH.TWENTY,
  },
  /**
   * 燃气户号 长度20个字符
   */
  BANK: {
    type: 'digit',
    maxlength: INPUT_MAX_LENGTH.TWENTY,
  },
  /**
   * 地址
   */
  ADDRESS: {
    dictCode: combineDictCode(DictNameEnum.NATIONAL_REGION_CODE),
    customFieldName: { text: 'name', value: 'code', children: 'children' },
  },
  /**
   * 国籍
   */
  COUNTRY: {
    dictCode: combineDictCode(DictNameEnum.NATIONALITY),
    customFieldName: { text: 'name', value: 'code', children: 'children' },
  },
};

// 渲染组件映射
export const COMPONENT_MAPPING_LIST = [
  {
    code: 'input',
    name: '单行文本',
    value: 1,
    componentName: COMPONENT_ENUM.ProFieldV2,
  },
  {
    code: 'textarea',
    name: '多行文本',
    value: 2,
    type: 'textarea',
    componentName: COMPONENT_ENUM.ProFieldV2,
  },
  {
    code: 'number',
    name: '数字输入框',
    value: 3,
    componentName: COMPONENT_ENUM.ProFieldV2,
  },
  {
    code: 'date',
    name: '日期',
    value: 4,
    componentName: COMPONENT_ENUM.ProDatePickerV2,
  },
  {
    code: 'date',
    name: '长日期',
    value: 14,
    componentName: COMPONENT_ENUM.ProValidateDate,
  },
  {
    code: 'select',
    name: '下拉框',
    value: 5,
    componentName: COMPONENT_ENUM.ProPickerV2,
  },
  {
    code: 'radio',
    name: '单选框',
    value: 6,
    componentName: COMPONENT_ENUM.ProRadioV2,
  },
  {
    code: 'checkbox',
    name: '多选框',
    value: 7,
    componentName: COMPONENT_ENUM.ProCheckboxV2,
  },
  {
    code: 'switch',
    name: 'switch开关',
    value: 8,
    componentName: COMPONENT_ENUM.ProSwitchV2,
  },
  {
    code: 'cascader',
    name: '级联选择',
    value: 9,
    componentName: COMPONENT_ENUM.ProCascaderV2,
  },
  {
    code: 'bank',
    name: '银行卡',
    value: 10,
    componentName: COMPONENT_ENUM.ProBank,
  },
  {
    code: 'address',
    name: '地址',
    value: 11,
    componentName: COMPONENT_ENUM.ProAddress,
  },
  {
    code: 'upload',
    name: '文件上传',
    value: 12,
    componentName: COMPONENT_ENUM.ProUploadV2,
  },
  {
    code: 'stepper',
    name: '步进器',
    value: 13,
    componentName: COMPONENT_ENUM.ProStepperV2,
  },
];

// ProBank 银行卡信息字段枚举
export const BANK_INFO_KEY_ENUM = {
  BANK_CARD_NO: 'bankCardNo',
  ACCOUNT_NAME: 'accountName',
  PAY_BANK: 'payBank',
  BANK_CARD_IMAGE: 'bankCardImage',
  MOBILE: 'mobile',
  VERIFICATION_CODE: 'verificationCode',
};

// ProBank 银行卡信息字段枚举列表
export const BANK_INFO_KEY_LIST = Object.values(BANK_INFO_KEY_ENUM);

// ProBank 字段配置
export const PRO_BANK_FIELD_MAP = {
  // 银行卡号
  bankCardNo: {
    ...RULE_CONFIG_MAP.BANK,
    name: BANK_INFO_KEY_ENUM.BANK_CARD_NO,
    componentName: COMPONENT_ENUM.ProFieldV2,
  },
  // 持卡人
  accountName: {
    ...RULE_CONFIG_MAP.NAME,
    name: BANK_INFO_KEY_ENUM.ACCOUNT_NAME,
    componentName: COMPONENT_ENUM.ProFieldV2,
  },
  // 开户银行
  payBank: {
    name: BANK_INFO_KEY_ENUM.PAY_BANK,
    dictCode: combineDictCode(DictNameEnum.BANK),
    componentName: COMPONENT_ENUM.ProPickerV2,
  },
  // 银行卡照片
  bankCardImage: {
    maxCount: 2,
    subLabel: '（需上传正反两面）',
    name: BANK_INFO_KEY_ENUM.BANK_CARD_IMAGE,
    componentName: COMPONENT_ENUM.ProBankUpload,
  },
  // 预留手机号
  mobile: {
    ...RULE_CONFIG_MAP.MOBILE,
    name: BANK_INFO_KEY_ENUM.MOBILE,
    componentName: COMPONENT_ENUM.ProFieldV2,
  },
  // 验证码
  verificationCode: {
    ...RULE_CONFIG_MAP.ZIP_CODE,
    sendSMSCode,
    checkSMSCode,
    name: BANK_INFO_KEY_ENUM.VERIFICATION_CODE,
    relatedName: BANK_INFO_KEY_ENUM.MOBILE,
    componentName: COMPONENT_ENUM.ProSMSCode,
  },
};

/**
 * 关联的 filed ruleType 映射
 */
export const RELATED_RULE_TYPE_MAP = {
  certType: {
    [CERT_TYPE_ENUM.CERT]: [RULE_TYPE_ENUM.CERT],
    [CERT_TYPE_ENUM.HOUSE_HOLD]: [RULE_TYPE_ENUM.HOUSE_HOLD],
    [CERT_TYPE_ENUM.MILITARY_CARD]: [RULE_TYPE_ENUM.MILITARY_CARD],
    [CERT_TYPE_ENUM.PASSPORT]: [RULE_TYPE_ENUM.PASSPORT],
    [CERT_TYPE_ENUM.HONGKONG_MACAO]: [RULE_TYPE_ENUM.HONGKONG_MACAO],
    [CERT_TYPE_ENUM.OTHER]: [RULE_TYPE_ENUM.OTHER_CERT],
    [CERT_TYPE_ENUM.SOLIDER]: [RULE_TYPE_ENUM.SOLIDER],
    [CERT_TYPE_ENUM.BIRTH]: [RULE_TYPE_ENUM.BIRTH],
    [CERT_TYPE_ENUM.TAIWAN_TRAVEL]: [RULE_TYPE_ENUM.TAIWAN_TRAVEL],
    [CERT_TYPE_ENUM.FOREIGN_PERMANENT]: [RULE_TYPE_ENUM.FOREIGN_PERMANENT],
    [CERT_TYPE_ENUM.HK_MACAO_RESIDENCE_PERMIT]: [RULE_TYPE_ENUM.HK_MACAO_RESIDENCE_PERMIT],
    [CERT_TYPE_ENUM.TAIWAN_RESIDENCE_PERMIT]: [RULE_TYPE_ENUM.TAIWAN_RESIDENCE_PERMIT],
    [CERT_TYPE_ENUM.SOCIAL_CREDIT_CODE]: [RULE_TYPE_ENUM.SOCIAL_CREDIT_CODE],
  },
};

/**
 * 地址因子枚举
 */
export const ADDRESS_FACTOR_ENUM = {
  INSURE_AREA: 'insureArea',
  RESIDENCE: 'residence',
  LONG_AREA: 'longArea',
  WORK_ADDRESS: 'workAddress',
};

/**
 * 地址因子code list
 */
export const ADDRESS_FACTOR_CODE_LIST = Object.values(ADDRESS_FACTOR_ENUM);

/**
 * 地址因子配置
 */
export const ADDRESS_FACTOR_CONF = [
  {
    /** 投保地区 */
    key: ADDRESS_FACTOR_ENUM.INSURE_AREA,
  },
  {
    /** 户籍所在地 */
    key: ADDRESS_FACTOR_ENUM.RESIDENCE,
  },
  {
    /** 长期居住地 */
    key: ADDRESS_FACTOR_ENUM.LONG_AREA,
  },
  {
    /** 工作所在地 */
    key: ADDRESS_FACTOR_ENUM.WORK_ADDRESS,
  },
].reduce((res, { key }) => {
  res[key] = RULE_CONFIG_MAP.ADDRESS;
  return res;
}, {});

/**
 * 因子通用配置
 */
export const GLOBAL_CONFIG_MAP = {
  name: {
    ...RULE_CONFIG_MAP.NAME,
    relatedName: 'nationalityCode',
  },
  certNo: {
    relatedName: 'certType',
    maxlength: INPUT_MAX_LENGTH.EIGHTEEN,
  },
  certType: {
    relatedName: 'certNo',
  },
  birthday: {
    relatedName: 'age',
  },
  mobile: RULE_CONFIG_MAP.MOBILE,
  age: RULE_CONFIG_MAP.AGE,
  height: {
    ...RULE_CONFIG_MAP.HEIGHT_WEIGHT,
    unit: 'cm',
  },
  weight: {
    ...RULE_CONFIG_MAP.HEIGHT_WEIGHT,
    unit: 'kg',
  },
  email: {
    ruleType: RULE_TYPE_ENUM.EMAIL,
  },
  personalAnnualIncome: RULE_CONFIG_MAP.INCOME,
  familyAnnualIncome: RULE_CONFIG_MAP.INCOME,
  workZipCode: RULE_CONFIG_MAP.ZIP_CODE,
  homePostalCode: RULE_CONFIG_MAP.ZIP_CODE,
  // 内容
  workContent: RULE_CONFIG_MAP.CONTENT,
  // 燃气户号
  gasNumberCollection: {
    ...RULE_CONFIG_MAP.GAS_NUMBER,
    ruleType: RULE_TYPE_ENUM.NOT_ZH_CN,
  },
  verificationCode: {
    sendSMSCode,
    checkSMSCode,
    componentName: COMPONENT_ENUM.ProSMSCode,
    ...RULE_CONFIG_MAP.ZIP_CODE,
  },
  ...ADDRESS_FACTOR_CONF,
  nationalityCode: {
    ...RULE_CONFIG_MAP.COUNTRY,
  },
  certEndDate: {
    minDate: new Date(),
    maxDate: dayjs().add(100, 'year').toDate(),
  },
  companyName: {
    maxlength: INPUT_MAX_LENGTH.FIFTY,
  },
  /** 职业 */
  occupationCodeList: {
    componentName: COMPONENT_ENUM.ProOccupation,
    dictCode: combineDictCode('OCCUPATION'),
  },
  /** 证件影像 */
  certImage: {
    componentName: COMPONENT_ENUM.ProIDCardUploadV2,
  },
  /** 受益比例 */
  benefitRate: {
    ...RULE_CONFIG_MAP.AGE,
    unit: '%',
  },
};

/** 被保人类型 主被保人/次被保人 */
export const INSURED_MODULE_TYPE_ENUM = {
  main: 1,
  sub: 2,
};

/** 因子类型 1. 投保人 2. 被保人 3. 受益人 4. 支付信息 5. 签字信息 */
export const MODULE_TYPE_MAP = {
  /** 投保人 */
  1: 'holder',
  /** 被保人 */
  2: 'insured',
  /** 受益人 */
  3: 'beneficiary',
  /** 支付信息 */
  4: 'payInfo',
  /** 签字信息 */
  5: 'signInfo',
  /** 其他信息 */
  7: 'other',
  /** 监护人 */
  8: 'guardian',
};

// pro from
export const VAN_PRO_FORM_KEY: InjectionKey<Partial<VanFormProvied>> = Symbol('VAN_PRO_FORM_KEY');

export default {};
