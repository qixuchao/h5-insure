import { ORDER_STATUS_ENUM } from "@/common/constants/order";

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

export interface OrderDetail {
  agencyId: string;
  agencyName: string;
  applicationNo: string;
  commencementTime: string;
  creator: string;
  expiryDate: string;
  extInfo: ExtInfo;
  gmtCreated: string;
  gmtModified: string;
  groupOrderNo: string;
  id: number;
  issueTime: string;
  modifier: string;
  orderAmount: number;
  orderDataSource: string;
  orderDate: string;
  orderNo: string;
  orderRealAmount: number;
  orderStatus: string;
  orderTopStatus: string;
  orderType: number;
  policyNo: string;
  proposalId: number;
  relationUserId: string;
  relationUserType: number;
  saleChannelId: string;
  saleUserId: string;
  tenantId: number;
  tenantOrderHolder: TenantOrderHolder;
  tenantOrderInsuredList: TenantOrderInsuredList[];
  thirdOrderNo: string;
  thirdOrderNoType: number;
  venderCode: string;
  venderName: string;
}
