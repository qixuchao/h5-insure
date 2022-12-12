export interface ProductData {
    productFactor:ProductFactor;
    productBasicInfoVO: ProductBasicInfoVo;
    productMaterialVOList: ProductMaterialVoItem[];
    productRelationPlanVOList: ProductRelationPlanVoItem[];
    productRiskVoList: ProductRiskVoItem[];
    packageProductVOList: PackageProductVoItem[];
    productQuestionnaireVOList: any;
    planFactor: any;
}

interface ProductFactor {
  1:[],
  2:[],
  3:[]
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
  notificationImage:string[];
  parameterMap:any;
  productCode:string;
  productName:string;
  productImage:string[];
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
    upgradeGuaranteeConfigVO:UpgradeGuaranteeConfigVO;
}

export interface PremiumCalcData {
    holder?: Holder;
    insuredVOList: InsuredVoItem[];
    productCode: string;
    tenantId?: string;
}

export interface InsuredVoItem {
    insuredCode: string;
    personVO: PersonVo;
    productPlanVOList: ProductPlanVoItem[];
    relationToHolder?: string;
}

export interface ProductPlanVoItem {
    insurerCode: string;
    planCode: string;
    riskVOList: RiskVoItem[];
}

export interface RiskVoItem {
    amount: number;
    amountPremiumConfigVO:any;
    annuityDrawType: string;
    annuityDrawDate: number;
    annuityDrawFrequency: number;
    chargePeriod: string;
    copy: string;
    coveragePeriod: string;
    insuredCode: string;
    liabilityVOList: LiabilityVoItem[];
    mainRisk: boolean;
    mainRiskCode: string;
    mainRiskId: number;
    paymentFrequency: number;
    premium: number;
    riderRisk: boolean;
    riderRiskVOList: object[];
    riskCategory: number;
    riskCode: string;
    riskId: number;
    riskType: number;
    riskName:string;
    riskInsureLimitVO:any;
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
    certType?: string;
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
export interface PremiumCalcResponse{
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
