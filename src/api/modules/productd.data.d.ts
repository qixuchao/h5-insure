export interface ProductBasicInfoVO {
  /**
   * 主键ID
   */
  id: number;
  /**
   * 保司code
   */
  insurerCode: string;
  /**
   * 保司名称
   */
  insurerName: string;
  /**
   * 产品分类
   */
  productCategory: number;
  /**
   * 产品code
   */
  productCode: string;
  /**
   * 产品全称
   */
  productFullName: string;
  /**
   * 产品名称
   */
  productName: string;
}

export interface PaymentMethodLimitList {
  maxAmount: number;
  maxPremium: number;
  minAmount: number;
  minPremium: number;
  paymentFrequency: number;
  perCopyAmount: number;
  perCopyPremium: number;
  riskId: number;
}

export interface RiskFactorRelationList {
  businessType: number;
  factorCode: string;
  factorName: string;
  factorObject: string;
  id: number;
  riskId: number;
}

export interface RiskFormulaRelationList {
  formulaCode: string;
  formulaName: string;
  formulaType: string;
  id: number;
  liabilityId: number;
  riskId: number;
}

export interface RiskCalcMethodInfoVO {
  calculateType: number;
  calculateTypeDesc: string;
  dataTableList: string[];
  id: number;
  increaseDecreaseNum: number;
  maxCopy: number;
  minCopy: number;
  paymentMethodLimitList: PaymentMethodLimitList[];
  riskFactorRelationList: RiskFactorRelationList[];
  riskFormulaRelationList: RiskFormulaRelationList[];
  riskId: number;
  saleMethod: number;
  saleMethodDesc: string;
  singeAmount: number;
  singePremium: number;
}

export interface RiskFactorLinkAgeInfoVOList {
  annuityDrawDate: number;
  annuityDrawDateDesc: string;
  id: number;
  insurancePeriod: string;
  maxHolderAge: string;
  minHolderAge: string;
  paymentPeriod: string;
  riskId: number;
}

export interface RiskInsureLimitVO {
  annuityDrawFrequencyList: number[];
  annuityDrawTypeList: number[];
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

export interface RiskLiabilityInfoVOList {
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
  liabilityName: string;
  liabilityRateType: number;
  optionFlag: string;
  optionalFlag: number;
  optionalFlagDesc: string;
  premium: number;
  premiumCalculateDesc: string;
  premiumCalculateType: number;
  riskId: number;
}

export interface RiskRuleInfoVOList {
  id: number;
  riskId: number;
  ruleCondition: string;
  ruleName: string;
  ruleParams: string;
  ruleTip: string;
}

export interface CollocationVOList {
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

export interface RiskDetailVOList {
  circCategory: string;
  circCategoryDesc: string;
  collocationVOList: CollocationVOList[];
  configStatus: number;
  exemptFlag: number;
  exemptType: number;
  exemptTypeDesc: string;
  extraInfo: string;
  id: number;
  insurerCode: string;
  insurerName: string;
  liabilityPlanOssUrl: string;
  optionalRiderRiskVOList: any[];
  periodType: number;
  periodTypeDesc: string;
  relationDesc: string;
  requiredRiderRiskVOList: any[];
  riskCalcMethodInfoVO: RiskCalcMethodInfoVO;
  riskCategory: number;
  riskCategoryDesc: string;
  riskCode: string;
  riskFactorLinkAgeInfoVOList: RiskFactorLinkAgeInfoVOList[];
  riskInsureLimitVO: RiskInsureLimitVO;
  riskLiabilityInfoVOList: RiskLiabilityInfoVOList[];
  riskName: string;
  riskRuleInfoVOList: RiskRuleInfoVOList[];
  riskType: number;
  riskTypeDesc: string;
}

export interface ProductRelationPlanVOList {
  id: number;
  planCode: string;
  planName: string;
  riskDetailVOList: RiskDetailVOList[];
  riskNum: number;
}

export interface ProductDetail {
  /**
   * 产品基础信息
   */
  productBasicInfoVO: ProductBasicInfoVO;
  /**
   * 产品计划基本信息
   */
  productRelationPlanVOList: ProductRelationPlanVOList[];
  /**
   * 产品险种信息
   */
  riskDetailVOList: RiskDetailVOList[];
}
