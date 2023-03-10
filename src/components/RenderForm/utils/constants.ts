import { type Ref, type InjectionKey } from 'vue';
import type { FormInstance } from 'vant';
import { DictNameEnum } from '@/common/constants';

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
    componentName: 'ProFieldV2',
  },
  {
    code: 'textarea',
    name: '多行文本',
    value: 2,
    type: 'textarea',
    componentName: 'ProFieldV2',
  },
  {
    code: 'number',
    name: '数字输入框',
    value: 3,
    componentName: 'ProFieldV2',
  },
  {
    code: 'date',
    name: '日期',
    value: 4,
    componentName: 'ProDatePickerV2',
  },
  {
    code: 'select',
    name: '下拉框',
    value: 5,
    componentName: 'ProPickerV2',
  },
  {
    code: 'radio',
    name: '单选框',
    value: 6,
    componentName: 'ProRadioV2',
  },
  {
    code: 'checkbox',
    name: '多选框',
    value: 7,
    componentName: 'ProCheckboxV2',
  },
  {
    code: 'switch',
    name: 'switch开关',
    value: 8,
    componentName: 'ProSwitchV2',
  },
  {
    code: 'cascader',
    name: '级联选择',
    value: 9,
    componentName: 'ProCascaderV2',
  },
  {
    code: 'bank',
    name: '银行卡',
    value: 10,
    componentName: 'ProBank',
  },
  {
    code: 'address',
    name: '地址',
    value: 11,
    componentName: 'ProAddress',
  },
  {
    code: 'upload',
    name: '文件上传',
    value: 12,
    componentName: 'ProUpload',
  },
  {
    code: 'stepper',
    name: '步进器',
    value: 13,
    componentName: 'ProStepperV2',
  },
];

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

export default {};
