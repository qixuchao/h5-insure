export interface Column {
  text: string;
  value: string | number;
  children?: Column[];
  [key: string]: any;
}

export interface FieldConfItem {
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

export interface ProductFactor {
  [key: string]: FieldConfItem[];
}

export interface CustomFieldName {
  text: string;
  value: string;
  children: string;
}

export interface ComponentProps {
  label: string;
  name: string;
  required: boolean;
  columns: any[];
  customFieldName: CustomFieldName;
  componentName: string;
}

export interface SchemaItem {
  componentName: string;
  type: string;
  label: string;
  name: string;
  required: boolean;
  columns: Column[];
  nanoid: string;
}
