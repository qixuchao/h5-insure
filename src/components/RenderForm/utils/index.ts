import { InjectionKey } from 'vue';
import { isNotEmptyArray } from '@/common/constants/utils';

export * from './validate';

interface FormState {
  formData: object;
  config: object;
  nameList: string[];
}

interface VanFormProvied {
  formState: FormState;
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
  isDisplay: boolean;
  isMustInput: boolean;
  hasDefaultValue: boolean;
  default: string;
  attributeValueList: Column[];
  isReadonly: boolean;
  sort: number;
  isExtend: boolean;
  isHidden: boolean;
  placeholder: string;
  regular: RegExp;
  unit: string;
}

// 转换原始数据 ProForm 所需要的数据
export const transformToSchema = (arr: FieldConfItem[]) => {
  if (isNotEmptyArray(arr)) {
    return arr.map((item) => {
      // 当前组件名
      const componentName = COMPONENT_LIST.find((key) => {
        return COMPONENT_MAP[key].includes(item.displayType);
      });

      return {
        ...item,
        label: item.title,
        name: item.code,
        columns: item.attributeValueList || [],
        componentName: componentName || 'ProField',
      };
    });
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
