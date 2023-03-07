import { type Ref, type InjectionKey } from 'vue';
import type { FormInstance } from 'vant';

export const INPUT_MAX_LENGTH = {
  SMS_CODE: 6,
  MOBILE: 11,
  TEXTAREA: 200,
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
