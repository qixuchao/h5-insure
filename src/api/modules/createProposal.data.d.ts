/*
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-18 11:07:52
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-08-11 07:23:00
 * @FilePath: /zat-planet-h5-cloud-insure/src/api/modules/createProposal.data.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export interface ProposalInfo {
  id: string;
  holder: Partial<ProposalHolder>;
  insuredList: Partial<ProposalInsuredItem>[];
  proposalName: string;
  proposalPage: string;
  proposalPdf: string;
  relationUserId: number;
  relationUserType: number;
  totalPremium: number;
}
/**  */
export interface ProposalInsuredItem {
  birthday: string;
  gender: number;
  id: number;
  name: string;
  occupationClass: number;
  occupationCode: string;
  occupationName: string;
  proposalId: number;
  productList: Partial<ProposalInsuredProductItem>[];
  relation: number;
  hasSocialInsurance: number;
}

export interface ProposalInsuredProductItem {
  id: number;
  productId: number;
  productName: string;
  productCode: string;
  riskList: ProposalProductRiskItem[];
}

export interface ProposalProductRiskItem {
  amount: number;
  initialAmount: number;
  chargePeriod: string;
  copy: number;
  coveragePeriod: string;
  id: number;
  liabilityVOList: LiabilityVoItem[];
  mainRiskId: number;
  paymentFrequency: number;
  premium: number;
  initialPremium: number;
  proposalProductId: number;
  riderRiskVOList: ProposalProductRiskItem[];
  riskCode: string;
  riskId: number;
  riskName: string;
  riskType: number;
}

export interface LiabilityVoItem {
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

export interface ProposalHolder {
  birthday: string;
  extraInfo: string;
  gender: number;
  id: number;
  name: string;
  age: Number;
  occupationClass: number;
  occupationCode: string;
  occupationName: string;
  proposalId: number;
  proposalName: string;
  hasSocialInsurance: number;
}


export interface PlanTrialData {
  productCode: string;
  holder: Partial<ProposalHolder>;
  insuredPersonVO: Partial<ProposalHolder>;
  insuredProductInfo: {
    productCode: string;
    productName: string;
    occupationCodeList: string[],
    riskList: ProposalProductRiskItem[];
  };
}
