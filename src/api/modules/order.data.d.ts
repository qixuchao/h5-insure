export interface Condition {
  companyName: string;
  goodsName: string;
  id: number;
  orderNo: string;
  orderStartDate: string;
  orderStatus: string;
  orderTopStatus: string;
  policyHolder: string;
  prem: number;
}

export interface OrderItem {
  agencyId: string;
  companyName: string;
  goodsCode: string;
  goodsName: string;
  id: number;
  orderNo: string;
  orderStartDate: string;
  orderStatus: string;
  orderTopStatus: string;
  pageCode: string;
  policyHolder: string;
  prem: number;
  saleUserId: string;
  templateId: number;
  tenantId: number;
  abbreviation: string;
  insurerCode: string;
  productCategory: string;
  saleChannelId?: number;
}

export interface Sort {
  asc: boolean;
  name: string;
}

export interface OrderListResponse {
  condition: Condition;
  datas: OrderItem[];
  offset: number;
  pageNum: number;
  pageSize: number;
  queryAll: boolean;
  sortCondition: string;
  sorts: Sort[];
  total: number;
}


export interface ContactInfo {
  contactAddress: string;
  contactName: string;
  contactPhoneNo: string;
}

export interface ExtraInfo { }

export interface ExtInfo {
  contactInfo: ContactInfo[];
  extraInfo: ExtraInfo;
  isReadCustomerNotice: number;
  pageCode: string;
  templateId: number;
}

export interface TenantOrderHolder {
  birthday: string;
  certEndDate: string;
  certEndType: number;
  certNo: string;
  certStartDate: string;
  certType: number;
  email: string;
  gender: number;
  holderType: number;
  id: number;
  mobile: string;
  name: string;
  orderId: number;
  tenantId: number;
}

export interface ExtInfo {
  areaCode: string;
  areaName: string;
  cityCode: string;
  cityName: string;
  educationDegree: number;
  familyAddress: string;
  familyAnnualIncome: number;
  familyAreaCode: string;
  familyCityCode: string;
  familyProvinceCode: string;
  familyZipCode: string;
  hasSocialInsurance: number;
  hasUsCard: number;
  insureAreaCode: string;
  insureCityCode: string;
  insureProvinceCode: string;
  isCert: number;
  isPartTime: number;
  marriageStatus: string;
  nationalityCode: string;
  occupationCode: string;
  personalAnnualIncome: number;
  provinceCode: string;
  provinceName: string;
  taxResident: number;
  workAddress: string;
  workAreaCode: string;
  workCityCode: string;
  workContent: string;
  workProvinceCode: string;
  workStation: string;
  workZipCode: string;
}

export interface LiabilityDetail {
  isInsurance: number;
  liabilityCode: string;
  liabilityName: string;
  premium: number;
  refundMethod: number;
  sumInsured: number;
  sumInsuredValueStr: string;
}

export interface TenantOrderRiskList {
  amountUnit: number;
  annuityDrawFrequency: number;
  annuityDrawType: number;
  currentAmount: number;
  id: number;
  initialAmount: number;
  initialPremium: number;
  insurancePeriodType: number;
  insurancePeriodValue: number;
  liabilityDetails: LiabilityDetail[];
  orderId: number;
  paymentFrequency: number;
  paymentPeriod: number;
  paymentPeriodType: number;
  productId: number;
  regularPremium: number;
  riskCode: string;
  riskName: string;
  riskType: number;
  tenantId: number;
  totalPremium: number;
}

export interface TenantOrderProductList {
  id: number;
  insuredId: number;
  orderId: number;
  premium: number;
  productCode: string;
  productName: string;
  tenantId: number;
  tenantOrderRiskList: TenantOrderRiskList[];
}

export interface TenantOrderInsuredList {
  birthday: string;
  certEndDate: string;
  certEndType: number;
  certNo: string;
  certStartDate: string;
  certType: number;
  email: string;
  extInfo: ExtInfo;
  gender: number;
  hasSocialInsurance: string;
  id: number;
  insuredBeneficiaryType: number;
  mobile: string;
  name: string;
  orderId: number;
  planCode: string;
  planName: string;
  relationToHolder: number;
  relationToMainInsured: number;
  tenantId: number;
  tenantOrderProductList: TenantOrderProductList[];
}

/**
 * 订单详情/nextStep接口入参
 * @param agencyId 士大夫身份v
 */
export interface OrderDetail {
    /** 机构id */
    agencyId: string;
    /** 投保单号 */
    applicationNo: string;
    /** 保障生效时间 */
    commencementTime: string;
    /** 保障失效时间 */
    expiryDate: string;
    /** 第三方扩展信息（不需要） */
    ext: string;
    /** // 订单扩展信息 */
    extInfo: Partial<ExtInfo>;
    /** 团单号(不需要) */
    groupOrderNo: string;
    id: number;
    /** 订单承保时间 */
    issueTime: string;
    /** 订单操作选项，需要更新的结构 *
     */
    operateOption: Partial<OperateOption>;
    /** 订单金额 */
    orderAmount: number;
    /** 订单类型 枚举 1:新单 2:批单
     默认1
     */
    orderCategory: number;
    /** 订单来源 */
    orderDataSource: string;
    /** 下单时间 */
    orderDate: string;
    /** 订单编号 */
    orderNo: string;
    /** 订单操作类型 */
    orderOperationType: number;
    /** 订单实付金额 */
    orderRealAmount: number;
    /** 订单子状态 */
    orderStatus: string;
    /** 订单一级状态 */
    orderTopStatus: string;
    /** 订单类型 */
    orderType: number;
    /** 保单号 */
    policyNo: string;
    /** 计划书id */
    proposalId: number;
    /** 计划关联用户id类型 */
    relationUserType: number;
    /** 销售渠道id */
    saleChannelId: string;
    /** 销售人员id */
    saleUserId: string;
    /** 租户id */
    tenantId: number | string;
    /** 附件、资料、签名信息 */
    tenantOrderAttachmentList: TenantOrderAttachmentItem[];
    /** 投保人信息 */
    tenantOrderHolder: Partial<TenantOrderHolder>;
    /** 被保人信息，按照多被保人处理 */
    tenantOrderInsuredList: Array<Partial<TenantOrderInsuredItem>>;
    /** 投保人问卷告知 */
    tenantOrderNoticeList: Array<Partial<TenantOrderNoticeItem>>;
    /** 订单支付、签约信息 */
    tenantOrderPayInfoList: Array<Partial<TenantOrderPayInfoItem>>;
    /** 标的物信息 */
    tenantOrderSubjectList: Array<Partial<TenantOrderSubjectItem>>;
    /** 第三方订单号 */
    thirdOrderNo: string;
    /** 第三方订单号类型 */
    thirdOrderNoType: number;
    /** 更新的用户id */
    updateRelationUserId: string;
    /** 保司code */
    venderCode: string;
    [propName: string]: any;
}

export interface TenantOrderSubjectItem {
    extInfo: Partial<ExtInfo_5>;
    id: number;
    orderId: number;
    subjectDesc: string;
    subjectName: string;
    subjectNo: string;
    subjectObjectId: number;
    subjectObjectType: string;
    subjectType: string;
    tenantId: number | string;
}

export interface ExtInfo_5 {
    subjectRelatedFirm: string;
    subjectRelatedUserId: string;
}

export interface TenantOrderPayInfoItem {
    accountName: string;
    bankBranch: string;
    bankCardNo: string;
    bankCardType: number;
    expiryMethod: number;
    id: number;
    mobile: string;
    payBank: string;
    payInfoType: number;
    payMethod: number;
    paymentType: number;
}

export interface TenantOrderNoticeItem {
    content: string;
    contentType: number;
    id: number;
    isDone: number;
    name: string;
    objectId: string;
    objectType: number;
    type: number;
}

export interface TenantOrderInsuredItem {
    birthday: string;
    certEndDate: string;
    certEndType: number;
    certNo: string;
    certStartDate: string;
    certType: number;
    email: string;
    extInfo: Partial<ExtInfo_2>;
    gender: number;
    id: number;
    insuredBeneficiaryType: number;
    mobile: string;
    name: string;
    planCode: string;
    relationToHolder: number | string;
    relationToMainInsured: number;
    tenantOrderBeneficiaryList: Array<Partial<TenantOrderBeneficiaryItem>>;
    tenantOrderProductList: Array<Partial<TenantOrderProductItem>>;
}

export interface TenantOrderProductItem {
    id: number;
    insuredId: number;
    premium: number;
    productCode: string;
    productName: string;
    tenantOrderRiskList: Partial<TenantOrderRiskItem[]>;
}

export interface TenantOrderRiskItem {
    amountUnit: number;
    annuityDrawFrequency: number;
    annuityDrawType: number;
    currentAmount: number;
    extInfo: ExtInfo_4;
    id: number;
    initialAmount: number;
    initialPremium: number;
    insurancePeriodType: number;
    insurancePeriodValue: number;
    liabilityDetails: LiabilityDetail[];
    paymentFrequency: number;
    paymentPeriod: number;
    paymentPeriodType: number;
    productId: string;
    regularPremium: number;
    riskCode: string;
    riskName: string;
    riskType: number;
    totalPremium: number;
}

export interface LiabilityDetail {
    isInsurance: number;
    liabilityCode: string;
    liabilityName: string;
    premium: number;
    refundMethod: number;
    sumInsured: number;
    sumInsuredValueStr: string;
}

export interface ExtInfo_4 {
    copy: number;
    riskId: number;
}

export interface TenantOrderBeneficiaryItem {
    beneficiaryType: number;
    benefitDistributeMode: number;
    benefitOrder: number;
    benefitRate: number;
    birthday: string;
    certEndDate: string;
    certEndType: number;
    certNo: string;
    certStartDate: string;
    certType: number;
    email: string;
    extInfo: Partial<ExtInfo_3>;
    gender: number;
    id: number;
    insuredId: number;
    mobile: string;
    name: string;
    relationToInsured: number;
}

export interface ExtInfo_3 {
    nationalityCode: string;
}

export interface ExtInfo_2 {
    areaCode: string;
    areaName: string;
    cityCode: string;
    cityName: string;
    educationDegree: number;
    familyAddress: string;
    familyAnnualIncome: number;
    familyAreaCode: string;
    familyCityCode: string;
    familyProvinceCode: string;
    familyZipCode: string;
    hasSocialInsurance: number;
    hasUsCard: number;
    insureAreaCode: string;
    insureCityCode: string;
    insureProvinceCode: string;
    isCert: number;
    isPartTime: number;
    isSmoke: number;
    marriageStatus: string;
    nationalityCode: string;
    occupationCode: string;
    occupationCodeList: string[];
    personalAnnualIncome: number;
    provinceCode: string;
    provinceName: string;
    taxResident: number;
    workAddress: string;
    workAreaCode: string;
    workCityCode: string;
    workContent: string;
    workProvinceCode: string;
    workStation: string;
    workZipCode: string;
}

export interface TenantOrderHolder {
    birthday: string;
    certEndDate: string;
    certEndType: number;
    certNo: string;
    certStartDate: string;
    certType: number;
    email: string;
    extInfo: Partial<ExtInfo_1>;
    gender: number;
    holderType: number;
    id: number;
    mobile: string;
    name: string;
}

export interface ExtInfo_1 {
    areaCode: string;
    areaName: string;
    cityCode: string;
    cityName: string;
    educationDegree: number;
    familyAddress: string;
    familyAnnualIncome: number;
    familyAreaCode: string;
    familyCityCode: string;
    familyProvinceCode: string;
    familyZipCode: string;
    hasSocialInsurance: number;
    hasUsCard: number;
    isCert: number;
    isPartTime: number;
    marriageStatus: string;
    nationalityCode: string;
    occupationCode: string;
    occupationCodeList: string[];
    personalAnnualIncome: number;
    provinceCode: string;
    provinceName: string;
    taxResident: number;
    workAddress: string;
    workAreaCode: string;
    workCityCode: string;
    workContent: string;
    workProvinceCode: string;
    workStation: string;
    workZipCode: string;
}

export interface TenantOrderAttachmentItem {
    category: number;
    desc: string;
    id: number;
    name: string;
    objectId: string;
    objectType: number;
    size: number;
    type: string;
    uri: string;
    uriKey: string;
}

export interface OperateOption {
    withAttachmentInfo: boolean;
    withBeneficiaryInfo: boolean;
    withHolderInfo: boolean;
    withHolderNoticeInfo: boolean;
    withInsuredInfo: boolean;
    withInsuredNoticeInfo: boolean;
    withPayInfo: boolean;
    withProductInfo: boolean;
    withSalesNoticeInfo: boolean;
    withSignInfo: boolean;
}

export interface ExtInfo {
    buttonCode: string;
    contactInfo: ContactInfo[];
    ext: string;
    extraInfo: ExtraInfo;
    isReadCustomerNotice: number;
    iseeBizNo: string;
    pageCode: string;
    redirectUrl: string;
    shareFlag: string;
    templateId: number;
}

export interface ExtraInfo {
}

export interface ContactInfo {
    contactAddress: string;
    contactName: string;
    contactPhoneNo: string;
}



