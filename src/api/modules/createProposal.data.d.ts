/*
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-18 11:07:52
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-08-11 07:23:00
 * @FilePath: /zat-planet-h5-cloud-insure/src/api/modules/createProposal.data.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export interface ProposalInfo {
  holder: Holder;
  id: number;
  insuredList: InsuredItem[];
  proposalName: string;
  proposalPage: string;
  proposalPdf: string;
  relationUserId: number;
  relationUserType: number;
  totalPremium: number;
}

export interface InsuredItem {
  birthday: string;
  bmi: string;
  certEndDate: string;
  certEndType: number;
  certNo: string;
  certStartDate: string;
  certType: number;
  email: string;
  gender: number;
  hasSocialInsurance: number;
  height: number;
  id: number;
  insureArea: InsureArea;
  mobile: string;
  name: string;
  occupationClass: number;
  occupationCode: string;
  occupationCodeList: string[];
  productList: ProductItem[];
  relationToHolder: number;
  smokeFlag: number;
  weight: number;
}

export interface ProductItem {
  id: number;
  occupationClass: number;
  occupationCodeList: string[];
  productCode: string;
  productId: number;
  productName: string;
  riskList: RiskItem[];
}

export interface RiskItem {
  annuityDrawDate: string;
  annuityDrawFrequency: number;
  chargePeriod: string;
  copy: string;
  coveragePeriod: string;
  id: number;
  initialAmount: number;
  initialPremium: number;
  liabilityList: LiabilityItem[];
  mainRiskCode: string;
  paymentFrequency: number;
  riskCode: string;
  riskId: number;
  riskName: string;
  riskType: number;
}

export interface LiabilityItem {
  liabilityAttributeType: number;
  liabilityCode: string;
  liabilityDesc: string;
  liabilityId: number;
  liabilityIndemnityContent: string;
  liabilityIndemnityType: number;
  liabilityName: string;
  liabilityRateType: number;
  liabilityTopType: number;
  liabilityValue: LiabilityValue;
  proposalLiabilityId: number;
  riskName: string;
}

export interface LiabilityValue {
  actualValue: string;
  displayValue: string;
  factorValue: number;
}

export interface InsureArea {
  area: string;
  city: string;
  detail: string;
  province: string;
}

export interface Holder {
  birthday: string;
  bmi: string;
  certEndDate: string;
  certEndType: number;
  certNo: string;
  certStartDate: string;
  certType: number;
  email: string;
  gender: number;
  hasSocialInsurance: number;
  height: number;
  id: number;
  insureArea: InsureArea;
  mobile: string;
  name: string;
  occupationClass: number;
  occupationCode: string;
  occupationCodeList: string[];
  smokeFlag: number;
  weight: number;
}

