export interface PlanInsureVO {
  planName: string;
  planCode: string;
  extInfoVOList: ExtInfoVoItem[];
  guaranteeItemVOS: GuaranteeItemVo[];
  productPremiumVOList: ProductPremiumVoItem[];
  premiumExplain: string;
  premiumExplainName: string;
  premiumExplainUri: string;
  premiumExplainViewName: string;
  tabName: string[];
  attachmentVOList: AttachmentVoItem;
  productPlanInsureConditionVO: ProductPlanInsureConditionVo;
  planPicList: any;
}

export interface ProductPlanInsureConditionVo {
  waitPeriod: string;
  waitPeriodFlag: number;
  sexLimit: string;
  sexLimitFlag: number;
  socialInsuranceLimit: string;
  socialInsuranceLimitFlag: number;
  occupationLimit: string;
  occupationLimitFlag: number;
  occupationLimitPic: string;
  holderAgeLimit: string;
  renewalGracePeriod: string;
  holderAgeLimitFlag: number;
  insurancePeriodValues: string;
  insurancePeriodValuesFlag: number;
  paymentPeriodValues: string;
  paymentPeriodValuesFlag: number;
  paymentFrequency: string;
  paymentFrequencyFlag: number;
  annuityDrawValues: string;
  annuityDrawValuesFlag: number;
  annuityDrawFrequency: string;
  annuityDrawFrequencyFlag: number;
  hesitatePeriod: string;
  hesitatePeriodFlag: string;
  paymentFrequencyList: any;
}

export interface AttachmentVoItem {
}

export interface ProductPremiumVoItem {
  paymentFrequency: string;
  paymentFrequencyValue: string;
  premiumUnit: string;
  actualPremiumUnit: string;
}

export interface GuaranteeItemVo {
  title: string;
  desc: string;
  content: string;
}

export interface ExtInfoVoItem {
  name: string;
  description: string;
}


export interface ShowConfigVO {
  /**
   * 展示类别
   */
  categoryNo: number;
  /**
   * 自定义标签1
   */
  cusLabel1: string;
  /**
   * 自定义标签2
   */
  cusLabel2: string;
  /**
   * 产品文案
   */
  desc: string;
  /**
   * 产品图片
   */
  image: string;
  /**
   * 是否首页展示
   */
  isAgentAppFirst: number;
  /**
   * 产品标签
   */
  label: string;
  /**
   * 产品价格
   */
  price: string;
  /**
   * 推广文案
   */
  promotion: string;
  /**
   * 产品特色
   */
  specialty: string[];
  /**
   * 产品标题
   */
  title: string;
}

export interface AttachmentVOList {
  /**
   * 文件分类
   */
  attachmentCategory: string;
  /**
   * 文件id
   */
  attachmentId: number;
  /**
   * 文件名称
   */
  attachmentName: string;
  /**
   * 文件备注
   */
  attachmentRemarks: string;
  /**
   * 文件类型
   */
  attachmentType: string;
  /**
   * 文件地址
   */
  attachmentUri: string;
  /**
   * 上传时间
   */
  gmtCreated: string;
  /**
   * 产品id
   */
  productId: number;
}

export interface TitleAndDescVO {
  /**
   * 内容
   */
  content: string;
  /**
   * 说明
   */
  desc: string;
  /**
   * 标题
   */
  title: string;
}

export interface GuaranteeList {
  /**
   * 保障类型
   */
  guaranteeType: string;
  /**
   * 保障详情描述
   */
  titleAndDescVOS: TitleAndDescVO[];
  [props: string]: any
}

interface BackgroundInsureVO {
  colorEnd: string,
  colorStart: string,
  type: string
}

/** 产品销售信息配置 */
export interface TenantProductInsureVO {
  /**
   * 背景颜色
   */
  backgroundInsureVO: BackgroundInsureVO,
  /**
   * 产品资料
   */
  attachmentVOList: {
    [props: string]: AttachmentVOList[]
  };
  /**
   * banner图
   */
  banner: string[];
  /**
   * banner动图
   */
  bannerMove: string[];
  planList: PlanInsureVO[];
  planInsureVO: PlanInsureVO;
  /**
   * 配置状态 1.暂存 2.完成
   */
  configStatus: number;
  /**
   * 保障详情
   */
  guaranteeList: GuaranteeList[];
  /**
   * 投保年龄限制,例：day_30,age_60（范围，以英文逗号分隔）
   */
  holderAgeLimit: string;
  /**
   * 租户产品投保详情表主键
   */
  id: number;
  /**
   * 保障期间值 固定：固定数字，枚举：英文逗号隔开，范围：最小值，最大值
      按年缴：以year开头，例如year_10
      按月保：以month开头，例如month_10
      按天保：以day开头，例如day_10
      保至多少岁：以to开头，例如to_60
      保终身：to_life
   */
  insurancePeriodValues: string;
  inscribedContent: any;
  /**
   * 职业限制 -1.无限制,1.职业等级一，2.职业等级二，3.职业等级三
4.职业等级四，5.职业等级五，6.职业等级六（以英文逗号分隔）
   */
  occupationLimit: string;
  /**
   * 缴费期间值 固定：固定数字，枚举：英文逗号隔开，范围：最小值，最大值
按年缴：以year开头，例如year_10
按月缴：以month开头，例如month_10
缴至多少岁：以to开头，例如to_60
趸缴：single
   */
  paymentPeriodValues: string;
  /**
   * 产品code
   */
  productCode: string;
  /**
   * 产品简介
   */
  productDesc: string;
  /**
   * 产品名称
   */
  productName: string;
  /**
   * 常见问题
   */
  questionList: any[];
  /**
   * 理赔流程配置
   */
  settlementProcessVO: {
    settlementProcessList?: any[];
    settlementProcessPicList?: string[];
    settlementProcessType?: string;
  };
  /**
   * 性别限制 -1.无限制,1.男 2.女 （ （以英文逗号分隔）
   */
  sexLimit: string;
  /**
   * 社保限制 -1.无限制,1.是 2.否 （以英文逗号分隔）
   */
  socialInsuranceLimit: string;
  /**
   * 产品特色
   */
  spec: string[];
  /**
   * 等待期：day_30,age_60
   */
  waitPeriod: string;
  /**
   * 单计划保障详情
   */
  titleAndDescVOS: TitleAndDescVO[]
  rateUri?: string // 费率表
}

export interface ProductDetail {
  /**
   * 产品id
   */
  id: number;
  /**
   * 产品code
   */
  productCode: string;
  /**
   * 产品名称
   */
  productFullName: string;
  /**
   * 产品简称
   */
  productName: string;
  /**
   * 展示配置
   */
  showConfigVO: ShowConfigVO;
  /**
   * 商品中心产品详情
   */
  tenantProductInsureVO: TenantProductInsureVO;
  /**
   * 类别
   */
  categoryNo: number;
  /**
   * 保司code
   */
  insurerCode: string;
  baseProductCode?: string;
}

/**
 * 产品中心-产品详情
 * @productInsureMaterialVOList 产品资料
 * @productPlanInsureVOList 产品险种信息
 * @productQuestionnaireVOList 产品关联问卷列表
 */
export interface InsureProductData {
    productCode: string;
    productInsureMaterialVOList: ProductInsureMaterialVoItem[];
    productName: string;
    productPlanInsureVOList: ProductPlanInsureVoItem[];
    productQuestionnaireVOList: ProductQuestionnaireVoItem[];
}
export interface ProductQuestionnaireVoItem {
    planCode: string;
    productCode: string;
    productId: number;
    questionnaireDetailResponseVO: QuestionnaireDetailResponseVo;
    questionnaireId: number;
    questionnaireName: string;
}

export interface QuestionnaireDetailResponseVo {
    basicInfo: BasicInfo;
    creator: string;
    gmtCreated: string;
    gmtModified: string;
    isDeleted: string;
    modifier: string;
    questions: Question[];
}

export interface Question {
    content: string;
    creator: string;
    gmtCreated: string;
    gmtModified: string;
    id: number;
    isDeleted: string;
    modifier: string;
    options: string;
    position: number;
    questionType: number;
    questionnaireId: number;
    tenantId: number;
    textType: number;
    title: string;
}

export interface BasicInfo {
    gmtCreated: string;
    id: number;
    insurerCode: string;
    objectType: number;
    productCategory: number;
    questionnaireCode: string;
    questionnaireName: string;
    questionnaireType: number;
    tenantId: number;
    title: string;
}

export interface ProductPlanInsureVoItem {
    id: number;
    packageConfigVOList: PackageConfigVoItem[];
    packageProductVOList: PackageProductVoItem[];
    planCode: string;
    planName: string;
    productRiskVoList: ProductRiskVoItem_1[];
    riskNum: number;
}

export interface ProductRiskVoItem_1 {
    riskDetailVOList: RiskDetailVoItem[];
}

type RiskDetailVoItem = ProductRiskVoItem;

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
    annuityDrawFrequency: string;
    annuityDrawType: string;
    annuityDrawValues: string;
    creator: string;
    extInfo: string;
    gmtCreated: string;
    gmtModified: string;
    holderAgeLimit: string;
    id: number;
    insurancePeriodRule: string;
    insurancePeriodType: string;
    insurancePeriodValues: string;
    insuredNum: number;
    isDeleted: string;
    modifier: string;
    occupationLimit: string[];
    paymentFrequency: string;
    paymentPeriodRule: string;
    paymentPeriodType: string;
    paymentPeriodValues: string;
    paymentTypeRule: string;
    riskId: number;
    sexLimit: string;
    socialInsuranceLimit: string;
    toLifeAge: number;
}

export interface RiskFactorLinkAgeInfoVoItem {
    annuityDrawDate: string;
    creator: string;
    gmtCreated: string;
    gmtModified: string;
    id: number;
    insurancePeriod: string;
    isDeleted: string;
    maxHolderAge: string;
    minHolderAge: string;
    modifier: string;
    paymentPeriod: string;
    riskId: number;
}

export interface RiskCalcMethodInfoVo {
    bucketFlag: string;
    copiesAmount: number;
    creator: string;
    dataTableList: string[];
    displayType: string;
    displayUnit: string;
    displayValues: string[];
    gmtCreated: string;
    gmtModified: string;
    id: number;
    isDeleted: string;
    maxValue: number;
    minValue: number;
    modifier: string;
    requireCopies: string;
    riskFactorRelationList: RiskFactorRelationItem[];
    riskFormulaRelationList: RiskFormulaRelationItem[];
    riskId: number;
    saleMethod: string;
    stepValue: number;
}

export interface RiskFormulaRelationItem {
    creator: string;
    formulaCode: string;
    formulaName: string;
    formulaType: string;
    gmtCreated: string;
    gmtModified: string;
    id: number;
    isDeleted: string;
    liabilityId: number;
    modifier: string;
    riskId: number;
}

export interface RiskFactorRelationItem {
    businessType: number;
    creator: string;
    factorCode: string;
    factorName: string;
    factorObject: string;
    gmtCreated: string;
    gmtModified: string;
    id: number;
    isDeleted: string;
    modifier: string;
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

export interface AmountPremiumConfigVo {
    displayType: number;
    displayUnit: number;
    eachCopyPrice: string;
    fixedValue: string;
    maxCopiesValue: string;
    maxValue: string;
    minCopiesValue: string;
    minValue: string;
    stepValue: string;
}

export interface PackageProductVoItem {
    packageCode: string;
    packageName: string;
    productRiskVoList: ProductRiskVoItem[];
}

export interface ProductRiskVoItem {
    amountPremiumConfigVO: AmountPremiumConfigVo;
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
    insuranceEndType: number;
    insuranceStartType: number;
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

export interface PackageConfigVoItem {
    packageCode: string;
    packageConfigItemList: PackageConfigItemItem[];
    packageName: string;
}

export interface PackageConfigItemItem {
    liabilityCode: string;
    liabilityName: string;
    packageCode: string;
    packageName: string;
    planCode: string;
    riskCode: string;
    riskName: string;
}

export interface ProductInsureMaterialVoItem {
    id: number;
    planCode: string;
    productCode: string;
    productId: number;
    productMaterialVOList: ProductMaterialVoItem[];
    showOrder: number;
    tabName: string;
}

export interface ProductMaterialVoItem {
    id: number;
    materialContent: string;
    materialSource: number;
    materialSourceDesc: string;
    materialType: number;
    materialTypeDesc: string;
    mustReadFlag: number;
    noticeObject: number;
    noticeObjectDesc: string;
    popUpFlag: number;
    productId: number;
}




export interface ProductFactorItem {
  id: number;
  productId: object;
  productCode: string;
  planCode: object;
  factorId: object;
  moduleType: number;
  code: string;
  title: string;
  hasDefaultValue: number;
  defaultValue: object;
  placeholder: object;
  isHidden: number;
  isDisplay: number;
  isReadOnly: object;
  isMustInput: number;
  displayType: object;
  datasource: object;
  factorScript: object;
  attributeValues: object;
  attributeValueList: object;
  position: object;
}

/**
 * 产品中心-产品资料
 */

export interface ProductMaterialData {
    productInsureMaterialVOList: ProductInsureMaterialVoItem[];
    productQuestionnaireVOList: ProductQuestionnaireVoItem[];
}

export interface ProductQuestionnaireVoItem {
    planCode: string;
    productCode: string;
    productId: number;
    questionnaireDetailResponseVO: QuestionnaireDetailResponseVo;
    questionnaireId: number;
    questionnaireName: string;
}

export interface QuestionnaireDetailResponseVo {
    basicInfo: BasicInfo;
    creator: string;
    gmtCreated: string;
    gmtModified: string;
    isDeleted: string;
    modifier: string;
    questions: Question[];
}

export interface Question {
    content: string;
    creator: string;
    gmtCreated: string;
    gmtModified: string;
    id: number;
    isDeleted: string;
    modifier: string;
    options: string;
    position: number;
    questionType: number;
    questionnaireId: number;
    tenantId: number;
    textType: number;
    title: string;
}

export interface BasicInfo {
    gmtCreated: string;
    id: number;
    insurerCode: string;
    objectType: number;
    productCategory: number;
    questionnaireCode: string;
    questionnaireName: string;
    questionnaireType: number;
    tenantId: number;
    title: string;
}

export interface ProductInsureMaterialVoItem {
    id: number;
    planCode: string;
    productCode: string;
    productId: number;
    productMaterialVOList: ProductMaterialVoItem[];
    showOrder: number;
    tabName: string;
}

export interface ProductMaterialVoItem {
    id: number;
    materialContent: string;
    materialSource: number;
    materialSourceDesc: string;
    materialType: number;
    materialTypeDesc: string;
    mustReadFlag: number;
    noticeObject: number;
    noticeObjectDesc: string;
    popUpFlag: number;
    productId: number;
}


/**
 * 产品升级保障配置
*/
export interface ProductUpgradeConfig {
    notificationImage: string[];
    parameterMap: ParameterMap;
    productCode: string;
    productImage: string[];
    productName: string;
}

export interface ParameterMap {
}








