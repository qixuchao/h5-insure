/*
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-16 19:38:49
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-08-23 11:08:28
 * @FilePath: /zat-planet-h5-cloud-insure/src/api/index.data.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

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
  agencyId: string;
  applicationNo: string;
  commencementTime: string;
  expiryDate: string;
  extInfo: ExtInfo;
  groupOrderNo: string;
  id: number;
  issueTime: string;
  operateOption: OperateOption;
  orderAmount: number;
  orderDataSource: string;
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
  tenantOrderHolder: TenantOrderHolder;
  tenantOrderInsuredList: TenantOrderInsuredItem[];
  tenantOrderNoticeList: TenantOrderNoticeItem[];
  tenantOrderPayInfoList: TenantOrderPayInfoItem[];
  thirdOrderNo: string;
  thirdOrderNoType: number;
  updateRelationUserId: string;
  venderCode: string;
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
  extInfo: InsuredExtInfo;
  gender: number;
  id: number;
  insuredBeneficiaryType: number;
  mobile: string;
  name: string;
  planCode: string;
  relationToHolder: number;
  relationToMainInsured: number;
  tenantOrderBeneficiaryList: TenantOrderBeneficiaryItem[];
  tenantOrderProductList: TenantOrderProductItem[];
}

export interface TenantOrderProductItem {
  id: number;
  insuredId: number;
  premium: number;
  productCode: string;
  productName: string;
  tenantOrderRiskList: TenantOrderRiskItem[];
}

export interface TenantOrderRiskItem {
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
  extInfo: BeneficiaryExtInfo;
  gender: number;
  id: number;
  insuredId: number;
  mobile: string;
  name: string;
  relationToInsured: number;
}

export interface BeneficiaryExtInfo {
  nationalityCode: string;
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
  extInfo: HolderExtInfo;
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
  templateId: number;
  iseeBizNo?: string; // 千里眼需要的字段
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
 * 保司支持资料
 * */
export interface ProductInsureNoticeResVo {
  insureCode: string;
  materialContent: string;
  materialSource: number;
  noticeObject: number;
}







