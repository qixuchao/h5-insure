export interface ProductData {
  productFactor: ProductFactor;
  productBasicInfoVO: ProductBasicInfoVo;
  productMaterialVOList: ProductMaterialVoItem[];
  productRelationPlanVOList: ProductRelationPlanVoItem[];
  productRiskVoList: ProductRiskVoItem[];
  packageProductVOList: PackageProductVoItem[];
  productQuestionnaireVOList: any;
  planFactor: any;
}

interface ProductFactor {
  [propName: string]: any[],
}

export interface PackageProductVoItem {
  packageCode: string;
  packageName: string;
  value?: string;
  disabled?: boolean;
  productRiskVoList: RiskDetailVoItem[]
}

export interface ProductRiskVoItem {
  riskDetailVOList: RiskDetailVoItem[];
}

export interface RiskDetailVoItem {
  circCategory: string;
  circCategoryDesc: string;
  collocationType: number;
  collocationVOList: CollocationVoItem[];
  configStatus: number;
  exemptFlag: number;
  exemptType: number;
  exemptTypeDesc: string;
  extraInfo: string;
  id: number;
  insurerCode: string;
  insuranceStartType: number;
  insuranceEndType: number;
  maxInsuranceDay: string;
  insurerName: string;
  liabilityPlanOssUrl: string;
  mainRiskCode: string;
  mainRiskId: number;
  periodType: number;
  periodTypeDesc: string;
  relationDesc: string;
  riskAttachmentVOList: RiskAttachmentVoItem[];
  riskCalcMethodInfoVO: RiskCalcMethodInfoVo;
  riskCategory: number;
  riskCategoryDesc: string;
  riskCode: string;
  riskFactorLinkAgeInfoVOList: RiskFactorLinkAgeInfoVoItem[];
  riskInsureLimitVO: RiskInsureLimitVo;
  riskLiabilityInfoVOList: RiskLiabilityInfoVoItem[];
  riskName: string;
  riskRuleInfoVOList: RiskRuleInfoVoItem[];
  riskType: number;
  riskTypeDesc: string;

}

export interface RiskRuleInfoVoItem {
  id: number;
  riskId: number;
  ruleCondition: string;
  ruleName: string;
  ruleParams: string;
  ruleTip: string;
}

export interface RiskLiabilityInfoVoItem {
  amount: number;
  amountCalculateType: number;
  amountCalculateTypeDesc: string;
  extraInfo: string;
  id: number;
  liabilityAttributeType: number;
  liabilityAttributeValueList: string[];
  liabilityCode: string;
  liabilityDesc: string;
  liabilityId: number;
  liabilityIndemnityContent: string;
  liabilityIndemnityType: number;
  liabilityName: string;
  liabilityRateType: number;
  liabilityTopType: number;
  liabilityType: number;
  optionFlag: string;
  optionalFlag: number;
  optionalFlagDesc: string;
  premium: number;
  premiumCalculateDesc: string;
  premiumCalculateType: number;
  riskId: number;
}

export interface RiskInsureLimitVo {
  annuityDrawFrequencyList: string[];
  annuityDrawType: number;
  annuityDrawValueList: string[];
  id: number;
  insurancePeriodRule: number;
  insurancePeriodType: number;
  insurancePeriodValueList: string[];
  insuredNum: number;
  maxHolderAge: string;
  minHolderAge: string;
  occupationLimitList: string[];
  paymentFrequencyList: string[];
  paymentPeriodRule: number;
  paymentPeriodType: number;
  paymentPeriodValueList: string[];
  paymentTypeRule: number;
  riskId: number;
  sexLimit: string;
  socialInsuranceLimit: string;
  toLifeAge: number;
}

export interface RiskFactorLinkAgeInfoVoItem {
  annuityDrawDate: number;
  annuityDrawDateDesc: string;
  id: number;
  insurancePeriod: string;
  maxHolderAge: string;
  minHolderAge: string;
  paymentPeriod: string;
  riskId: number;
}

export interface RiskCalcMethodInfoVo {
  calculateType: number;
  calculateTypeDesc: string;
  dataTableList: string[];
  fixedAmount: number;
  id: number;
  increaseDecreaseNum: number;
  maxCopy: number;
  minCopy: number;
  paymentMethodLimitList: PaymentMethodLimitItem[];
  riskFactorRelationList: RiskFactorRelationItem[];
  riskFormulaRelationList: RiskFormulaRelationItem[];
  riskId: number;
  saleMethod: number;
  saleMethodDesc: string;
  singeAmount: number;
  singePremium: number;
}

export interface RiskFormulaRelationItem {
  formulaCode: string;
  formulaName: string;
  formulaType: string;
  id: number;
  liabilityId: number;
  riskId: number;
}

export interface RiskFactorRelationItem {
  businessType: number;
  factorCode: string;
  factorName: string;
  factorObject: string;
  id: number;
  riskId: number;
}

export interface PaymentMethodLimitItem {
  maxAmount: number;
  maxPremium: number;
  minAmount: number;
  minPremium: number;
  paymentFrequency: number;
  perCopyAmount: number;
  perCopyPremium: number;
  riskId: number;
}

export interface RiskAttachmentVoItem {
  attachmentName: string;
  attachmentType: string;
  attachmentUrl: string;
  businessType: string;
}

export interface CollocationVoItem {
  collocationRiskCode: string;
  collocationRiskId: number;
  collocationRiskName: string;
  collocationType: number;
  collocationTypeDesc: string;
  id: number;
  riskId: number;
  riskType: number;
  riskTypeDesc: string;
}

export interface ProductRelationPlanVoItem {
  id: number;
  planCode: string;
  planName: string;
  productRiskVoList: ProductRiskVoItem[];
  riskNum: number;
}

export interface ProductMaterialVoItem {
  id: number;
  materialContent: string;
  materialSource: number;
  materialSourceDesc: string;
  materialType: number;
  materialTypeDesc: string;
  noticeObject: number;
  noticeObjectDesc: string;
  productId: number;
}

export interface UpgradeGuaranteeConfigVO {
  notificationImage: string[];
  parameterMap: any;
  productCode: string;
  productName: string;
  productImage: string[];
}

export interface ProductBasicInfoVo {
  combinationFlag: number;
  extInfo: string;
  id: number;
  insureMethod: string;
  insurerCode: string;
  insurerName: string;
  premiumCalcType: number;
  productCategory: number;
  productCode: string;
  productFullName: string;
  productName: string;
  upgradeGuaranteeConfigVO: UpgradeGuaranteeConfigVO;
}

export interface PremiumCalcData {
  holder?: Holder;
  insuredVOList: Array<Partial<InsuredVoItem>>;
  productCode: string;
  productId?: number;
  tenantId?: string;
}

export interface InsuredVoItem {
  insuredCode: string;
  personVO: PersonVo;
  productPlanVOList: Array<Partial<ProductPlanVoItem>>;
  relationToHolder?: string;
}

export interface ProductPlanVoItem {
  insurerCode: string;
  planCode: string;
  riskVOList: Array<Partial<RiskVoItem>>;
}

export interface RiskVoItem {
  amount: number; // 保额
  amountPremiumConfigVO: any;
  annuityDrawType: string;
  annuityDrawDate: number;
  annuityDrawFrequency: number;
  chargePeriod: string;
  copy: string; // 份数
  coveragePeriod: string;
  insuredCode: string;
  liabilityVOList: LiabilityVoItem[];
  mainRisk: boolean;
  mainRiskCode: string;
  mainRiskId: number;
  paymentFrequency: number;
  premium: number; // 保费
  riderRisk: boolean;
  riderRiskVOList: object[];
  riskCategory: number;
  riskCode: string;
  riskId: number;
  riskType: number;
  riskName: string;
  riskInsureLimitVO: any;
}

export interface LiabilityVoItem {
  liabilityAmount: number;
  liabilityAttributeCode: string;
  liabilityAttributeValue: string;
  liabilityCode: string;
  liabilityDesc: string;
  liabilityId: number;
  liabilityIndemnityContent: string;
  liabilityIndemnityType: number;
  liabilityName: string;
  liabilityRateType: number;
  liabilityTopType: number;
  liabilityType: number;
}

export interface PersonVo {
  birthday?: string;
  gender?: number;
  certType?: string | number;
  certNo?: string;
  occupationClass?: number;
  occupationCodeList?: string[];
  socialFlag?: string;
  mobile?: string;
  name?: string;
}

export interface Holder {
  personVO: PersonVo;
}

// 保费试算结果
export interface PremiumCalcResponse {
  amount: number;
  errorInfo: string;
  premium: number;
  riskPremiumDetailVOList: RiskPremiumDetailVoItem[];
}

export interface RiskPremiumDetailVoItem {
  amount: number;
  premium: number;
  riskCode: string;
  riskPremiumDetailVOList: RiskPremiumDetailVoItem[];
  riskType: number;
}

export interface OriginOrderIds {
  id?: number;
  holderId?: number;
  insuredId?: number;
}

export interface ErrorInfo {
  name: string;
  message: string;
}


export interface OrderDetail {
  tenantId: string;
  agencyId?: string;
  agentCode: string;
  orderCategory: number;
  saleChannelId: string;
  venderCode: string;
  productCode: string;
  insuranceStartDate: string | null;
  insuranceEndDate: string | null;
  activePlanCode: string;
  insurancePeriodValue: string;
  commencementTime: string;
  tenantOrderHolder: TenantOrderHolder;
  tenantOrderInsuredList: TenantOrderInsuredItem[];
  extInfo: OrderExtInfo;
  operateOption: OperateOption;
  paymentFrequency: string;
  premium?: number;
  orderAmount?: number;
  orderRealAmount?: number;
  expiryDate?: string;
  activePlanCode?: string;
  [prop: string]: any;
}

export interface OperateOption {
  withBeneficiaryInfo: boolean;
  withHolderInfo: boolean;
  withInsuredInfo: boolean;
  withAttachmentInfo: boolean;
  withProductInfo: boolean;
}

export interface OrderExtInfo {
  buttonCode?: string;
  successJumpUrl?: string;
  pageCode?: string;
  extraInfo: any;
  templateId: string;
  iseeBizNo: string;
}

export interface TenantOrderInsuredItem {
  dontFetchDefaultInfo?: boolean;
  relationToHolder: string;
  extInfo: any;
  insuredBeneficiaryType: string;
  tenantOrderBeneficiaryList: TenantOrderBeneficiaryItem[];
  tenantOrderProductList: TenantOrderProductItem[];
  id?: string;
  certEndType?: number;
  mobile?: string;
  certNo?: string;
  gender?: number;
  birthday?: string;
  certType?: number | string;
  name?: string;
  socialFlag?: string;
  planCode?: string;
}

export interface TenantOrderProductItem {
  tenantId?: string;
  premium: number;
  productCode: string;
  productName: string;
  planCode: string;
  tenantOrderRiskList: TenantOrderRiskItem[];
}

export interface TenantOrderRiskItem {
  tenantId: string;
  amountUnit: number;
  paymentFrequency: string;
  paymentPeriod: string;
  paymentPeriodType: number;
  insurancePeriodType: number;
  insurancePeriodValue: string;
  riskCode: string;
  riskType: number;
  extInfo: any;
  initialPremium: number;
  totalPremium: number;
  liabilityDetails: LiabilityDetail[];
  productId: number;
  currentAmount: string;
  initialAmount: number;
}

export interface LiabilityDetail {
  liabilityCode: string;
  liabilityName: string;
}

export interface TenantOrderBeneficiaryItem {
  beneficiaryId: number;
  extInfo: any;
}

export interface ExtInfo {
  hasSocialInsurance: string;
  [key: string]: any
}

export interface TenantOrderHolder {
  extInfo: ExtInfo;
  certEndType?: number;
  mobile?: string;
  certNo?: string;
  gender?: number;
  birthday?: string;
  certType?: number;
  name?: string;
  socialFlag?: string;
  verificationCode?: string;
  dontFetchDefaultInfo?: boolean
}

export interface RelationCustomer {
  customerId: object;
  customerName: string;
  type: object;
  customerNo: object;
  birthday: object;
  gender: object;
  country: object;
  occupation: object;
  occupationType: object;
  occupationDesc: object;
  occupationDuty: object;
  marriage: object;
  workPlace: object;
  salary: object;
  degree: object;
  relationCode: string;
  healthCondition: object;
  memo: object;
  hasSocialInsurance: object;
  cert: Cert[];
  addr: object;
  contact: Contact[];
  att: object;
  relation: object;
  payInfo: object;
  companyContact: object;
  customerTagDTO: object;
  customerTagRandomDTO: object;
  customerAttrDTO: object;
  customerMaterialDTO: object;
  companyType: object;
  companyExtInfoDTO: object;
}

export interface Contact {
  contactId: object;
  customerId: object;
  contactTool: object;
  contactNo: string;
  contactType: object;
  isDefault: object;
  contactRemark: object;
  createTime: object;
  tenantId: object;
}

export interface Cert {
  certId: object;
  certType: object;
  certNo: string;
  certValidity: object;
  createTime: object;
  customerType: object;
  certStart: object;
  certName: string;
}

export interface ProductInfo {
  productCode: string;
  productName: string;
  productPlanInsureVOList: Array<ProductPlanInsure>;
}

export interface ProductFactorItem {
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
}

export interface ProductFactor {
  [key: string]: ProductFactorItem[];
}

export interface ProductPlanInsure {
  planCode: string;
  planName: string;
  productFactor: ProductFactor;
  insureProductRiskVOList: Array<RiskDetailVoItem>;
  oilPackageProductVOList: Array<any>;
  oilPackageRelationVOList: Array<any>;
  productRiskRelationVOList: Array<any>;
}
