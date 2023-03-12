import { type Ref, type InjectionKey } from 'vue';
import type { FormInstance } from 'vant';
import { DictNameEnum, CERT_TYPE_ENUM } from '@/common/constants';

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
  ProUpload: 'ProUpload',
  /** 13:步进器 */
  ProStepperV2: 'ProStepperV2',
  /** 验证码 */
  ProSMSCode: 'ProSMSCode',
};

// 输入框最大长度
export const INPUT_MAX_LENGTH = {
  /**
   * 年龄长度 3
   */
  AGE: 3,
  /**
   * 验证码长度 6
   */
  SMS_CODE: 6,
  /**
   * 邮编长度 6
   */
  ZIP_CODE: 6,
  /**
   * 手机号长度 11
   */
  MOBILE: 11,
  /**
   * 燃气户号长度 20
   */
  GAS_NUMBER: 20,
  /**
   * 详细地址长度 50
   */
  ADDRESS_DETAIL: 50,
  /**
   * 内容长度 200
   */
  CONTENT: 200,
};

export const CONFIG_RULE_MAP = {
  /**
   * 手机号 长度11位，数字
   */
  MOBILE: {
    type: 'digit',
    ruleType: 'mobile',
    maxlength: INPUT_MAX_LENGTH.MOBILE,
  },
  /**
   * 年龄 最多三位数字，不支持小数
   */
  AGE: {
    type: 'digit',
    maxlength: INPUT_MAX_LENGTH.AGE,
  },
  /**
   * 身高/体重 允许一位小数
   */
  HEIGHT_WEIGHT: {
    type: 'number',
    precision: 1,
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
    maxlength: INPUT_MAX_LENGTH.ZIP_CODE,
  },
  /**
   * 内容 最长200个汉字
   */
  CONTENT: {
    maxlength: INPUT_MAX_LENGTH.CONTENT,
  },
  /**
   * 燃气户号 长度20个字符
   */
  GAS_NUMBER: {
    maxlength: INPUT_MAX_LENGTH.GAS_NUMBER,
  },
  /**
   * 地址
   */
  ADDRESS: {
    dictCode: DictNameEnum.NATIONAL_REGION_CODE,
    customFieldName: { text: 'name', value: 'code', children: 'children' },
  },
  /**
   * 国籍
   */
  COUNTRY: {
    dictCode: DictNameEnum.NATIONALITY,
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
    componentName: COMPONENT_ENUM.ProUpload,
  },
  {
    code: 'stepper',
    name: '步进器',
    value: 13,
    componentName: COMPONENT_ENUM.ProStepperV2,
  },
];

/** ruleType 枚举 */
export const RULE_TYPE_ENUM = {
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

interface FormState {
  formData: Data;
  config: Data;
  nameList: string[];
}

interface VanFormProvied {
  formState: FormState;
  formRef: Ref<FormInstance>;
}

// pro from
export const VAN_PRO_FORM_KEY: InjectionKey<VanFormProvied> = Symbol('VAN_PRO_FORM_KEY');

export default {};
