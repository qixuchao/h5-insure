
export interface DictData {
  dictCode: string;
  dictItemList: DictItemItem[];
}

export interface DictItemItem {
  children: DictItemItem[];
  code: string;
  extra: string;
  name: string;
  value: string;
}

// 页面初始化因子
export interface FactorData {
  clientType: number;
  flowType: number;
  id: number;
  productCategory: number;
  remark: string;
  status: number;
  templateName: string;
  templatePageList: TemplatePageItem[];
  venderCode: string;
}

export interface TemplatePageItem {
  jumpRule: string;
  nextPageCode: string;
  pageCode: string;
  pageName: string;
  pageType: string;
  position: number;
  productInsureFactorList: ProductInsureFactorItem[];
  templateId: number;
}

export interface ProductInsureFactorItem {
  code: string;
  dataSource: number;
  defaultValue: number;
  displayType: string;
  factorScript: number;
  hasDefaultValue: string;
  isDisplay: string;
  isMustInput: string;
  isReadOnly: string;
  moduleType: string;
  pageCode: string;
  placeholder: number;
  position: number;
  templateId: number;
  title: string;
}

// 下一步接口的入参
export interface NextStepRequestData {
  agencyId: string | undefined;
  applicationNo: string;
  abbreviation: string;
  agentCode: string;
  commencementTime: string;
  expiryDate: string;
  extInfo: Partial<ExtInfo>;
  groupOrderNo: string;
  id: number;
  issueTime: string;
  operateOption: Partial<OperateOption>;
  orderAmount: string;
  orderDataSource: string;
  orderCategory: number;
  orderDate: string;
  gmtCreated: string;
  orderNo: string;
  orderRealAmount: number;
  orderStatus: string;
  orderTopStatus: string;
  orderType: number;
  policyNo: string;
  proposalId: number;
  relationUserType: number;
  saleChannelId: string;
  saleUserId: string;
  tenantId: number;
  tenantOrderAttachmentList: TenantOrderAttachmentItem[];
  tenantOrderHolder: Partial<TenantOrderHolder>;
  tenantOrderInsuredList: Array<Partial<TenantOrderInsuredItem>>;
  tenantOrderNoticeList: TenantOrderNoticeItem[];
  tenantOrderPayInfoList: TenantOrderPayInfoItem[];
  tenantOrderPaymentInfoList: { payTime: string; paymentMethod: string; paymentResultDesc: string }[];
  tenantOrderSubjectList: Array<Partial<TenantOrderSubjectItem>>
  thirdOrderNo: string;
  thirdOrderNoType: number;
  updateRelationUserId: string;
  venderCode: string;
  realAmount: string;
  riskList:Array<Record<string, any>>,
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
  certType: number | string;
  email: string;
  extInfo: Partial<InsuredExtInfo>;
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

export interface TenantOrderSubjectItem {
    extInfo: Partial<SubjectItemExtInfo>;
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

export interface SubjectItemExtInfo {
    subjectRelatedFirm: string;
    subjectRelatedUserId: string;
}



export interface TenantOrderProductItem {
  id: number;
  insuredId: number;
  premium: number;
  productCode: string;
  productName: string;
  tenantOrderRiskList: Array<Partial<TenantOrderRiskItem>>;
}

export interface TenantOrderRiskItem {
  amountUnit: number;
  annuityDrawFrequency: number;
  annuityDrawDate: number;
  currentAmount: number;
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
  extInfo: any;
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

export interface TenantOrderBeneficiaryItem {
  beneficiaryType: number;
  benefitDistributeMode: number;
  benefitOrder: number;
  benefitRate: number;
  beneficiaryId: number;
  birthday: string;
  certEndDate: string;
  certEndType: number;
  certNo: string;
  certStartDate: string;
  certType: number | string;
  email: string;
  extInfo: Partial<BeneficiaryExtInfo>;
  gender: number;
  id: number;
  insuredId: number;
  mobile: string;
  name: string;
  relationToInsured: number;
}

export interface BeneficiaryExtInfo {
  nationalityCode: string;
  occupationCodeList: string[]
}

export interface InsuredExtInfo {
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
  certType: number | string;
  email: string;
  extInfo: Partial<HolderExtInfo>;
  gender: number;
  holderType: number;
  id: number;
  mobile: string;
  name: string;
}

export interface HolderExtInfo {
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
  fileBase64: string;
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
  contactInfo: ContactInfo[];
  isReadCustomerNotice: number;
  pageCode: string;
  templateId: number | string;
  buttonCode: string;
  iseeBizNo: string; // 千里眼需要的字段
  extraInfo: { [key: string]: string };
}

export interface ContactInfo {
  contactAddress: string;
  contactName: string;
  contactPhoneNo: string;
}


// 获取模板response

export interface TemplateInfo {
  clientType: string;
  flowType: string;
  id: number;
  productCategory: number;
  remark: string;
  status: string;
  templateName: string;
  templatePageList: TemplatePageItem[];
  venderCode: string;
}

export interface TemplatePageItem {
  jumpRule: string;
  nextPageCode: string;
  pageCode: string;
  pageName: string;
  pageType: string;
  position: number;
  productInsureFactorList: ProductInsureFactorItem[];
  templateId: number;
}

export interface ProductInsureFactorItem {
  code: string;
  dataSource: number;
  defaultValue: string;
  displayType: string;
  factorScript: string;
  hasDefaultValue: string;
  isDisplay: string;
  isMustInput: string;
  isReadOnly: string;
  moduleType: string;
  pageCode: string;
  placeholder: string;
  position: number;
  templateId: number;
  title: string;
}

/**
 * 下一步接口的response
 */

export interface NextStepResponseData {
    pageAction: PageAction;
    success: boolean;
}

export interface PageAction {
    data: any;
    message: string;
    pageAction: string;
}

/**
 * 保司支持资料
 * */
export interface ProductInsureNoticeResVo {
  insureCode: string;
  materialContent: string;
  materialSource: number;
  noticeObject: number;
}

export interface Trajectory {
  name: string;
  status: string;
  time: string;
  step: string
}

// 利安登录人信息
export interface LianUserData {
    accountId: number;
    accountType: string;
    agentCode: string;
    agentGroup: string;
    agentKind: string;
    agentState: string;
    birthday: string;
    branchType: string;
    certNo: string;
    certStatus: string;
    certType: string;
    clientVersion: string;
    deviceId: string;
    gender: string;
    headImg: string;
    imUserName: string;
    manageCom: string;
    name: string;
    nickName: string;
    openid: string;
    osDevice: string;
    osVersion: string;
    password: string;
    phone: string;
    quafNo: string;
    smsCode: string;
}









