
export interface ProductDetail {
    productBasicInfoVO: ProductBasicInfoVo;
    productMaterialVOList: ProductMaterialVoItem[];
    productRelationPlanVOList: ProductRelationPlanVoItem[];
    productRiskVoList: ProductRiskVoItem[];
    riskDetailVOList: RiskDetailVoItem[];
    packageProductVOList?: PackageConfigItemVo[];
    [prop: string]: any;
}

export interface PackageRiskVo {
  liabilityCode: string;
  liabilityName: string;
  riskCode: string;
  riskName: string;
  liabilityCodeList?: string[];
  liabilityList?: any[]
}

export interface PackageConfigItemVo {
  packageCode: string;
  productRiskVoList: PackageRiskVo[]
  packageName: string;
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
    insurerName: string;
    liabilityPlanOssUrl: string;
    mainRiskCode: string;
    mainRiskId: number;
    optionalRiderRiskVOList: object[];
    periodType: number;
    periodTypeDesc: string;
    relationDesc: string;
    requiredRiderRiskVOList: object[];
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

export interface ProductRiskVoItem {
    riskDetailVOList: RiskDetailVoItem[];
}

export interface ProductRelationPlanVoItem {
    id: number;
    planCode: string;
    planName: string;
    productRiskVoList: ProductRiskVoItem[];
    riskDetailVOList: RiskDetailVoItem[];
    riskNum: number;
    packageProductVOList: PackageConfigItemVo[]
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

export interface ProductBasicInfoVo {
    id: number;
    insurerCode: string;
    insurerName: string;
    productCategory: number;
    productCode: string;
    productFullName: string;
    productName: string;
}

