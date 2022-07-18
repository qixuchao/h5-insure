export interface ProductData {
    productBasicInfoVO: ProductBasicInfoVo;
    productRelationPlanVOList: ProductRelationPlanVoItem[];
    riskDetailVOList: RiskDetailVoItem[];
}

export interface RiskDetailVoItem {
    circCategory: string;
    circCategoryDesc: string;
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
    optionalRiderRiskVOList: RiskDetailVoItem[];
    periodType: number;
    periodTypeDesc: string;
    relationDesc: string;
    requiredRiderRiskVOList: RiskDetailVoItem[];
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

export interface RiskInsureLimitVo {
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
    riskDetailVOList: RiskDetailVoItem[];
    riskNum: number;
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


export interface premiumCalcData {
    holder?: Holder;
    insuredVOList: InsuredVoItem[];
    productCode: string;
}

export interface InsuredVoItem {
    insuredCode: string;
    personVO: PersonVo;
    productPlanVOList: ProductPlanVoItem[];
}

export interface ProductPlanVoItem {
    planCode: string;
    riskVOList: RiskVoItem[];
}

export interface RiskVoItem {
    annuityDrawDate: number;
    annuityDrawType: number;
    copy: string;
    coverageYear: string;
    insuredCode: string;
    liabilityVOList: LiabilityVoItem[];
    mainRiskCode: string;
    mainRiskId: number;
    paymentFrequency: number;
    paymentYear: string;
    premium: number;
    riderRiskVOList: RiskVoItem[];
    riskCategory: number;
    riskCode: string;
    riskId: number;
    riskType: number;
    sumInsured: number;
}

export interface LiabilityVoItem {
    liabilityAttributeCode: string;
    liabilityAttributeValue: string;
    liabilityCode: string;
    liabilityId: number;
    liabilityRateType: number;
    liabilityType: number;
}

export interface PersonVo {
    birthday: string;
    gender: number;
    occupationalClass: number;
    socialSecurity: number;
}

export interface Holder {
    personVO: PersonVo;
}

export interface premiumCalcResponse{
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



