import type { FormInstance } from 'vant';
import { Ref } from 'vue';

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
  isCalculationFactor: number;
  visible: boolean;
  subModuleType: number;
  remark?: string;
  category?: number;
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
  [key: string]: any;
  visible: boolean;
  hidden: boolean;
}

export interface FormState {
  formData: Data;
  config: Data;
  nameList: string[];
  dictCodeList: string[];
}

export interface VanFormProvied extends Data {
  formState: FormState;
  markRequired: boolean;
  formRef: Ref<FormInstance>;
  objectType: number;
}

export interface PersonFormProps {
  personVO: {
    relationToHolder?: string;
    relationToMainInsured?: string;
    [x: string]: any;
  };
  schema: SchemaItem[];
  trialFactorCodes: string[];
  config: {
    [x: string]: any;
  };
  nanoid?: string;
}

export interface InsuredFormProps extends Partial<PersonFormProps> {
  beneficiaryList: Partial<PersonFormProps>[];
}

export interface StateInfo {
  validated: boolean;
  holder: PersonFormProps;
  initInsuredItem: PersonFormProps;
  initBeneficiaryItem: PersonFormProps;
  insured: InsuredFormProps[];
}

export interface FileProps {
  category: string;
  objectType?: string;
  objectId?: string;
  name?: string;
  uri: string;
  id?: number;
}
