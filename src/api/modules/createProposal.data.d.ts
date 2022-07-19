/*
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-18 11:07:52
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-07-18 19:48:41
 * @FilePath: /zat-planet-h5-cloud-insure/src/api/modules/createProposal.data.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export interface ProposalInfo {
    id?: number;
    proposalHolderVO: ProposalHolderVo;
    proposalInsuredVOList: ProposalInsuredVoItem[];
    proposalName: string;
    relationUserId: number;
    relationUserType: number;
    totalPremium: number;
}

type ProposalInsuredVoItem = ProposalHolderVo;

export interface ProposalInsuredProductVoItem {
    id?: number;
    planCode: string;
    productCode: string;
    productMame: string;
    proposalId: number;
    proposalInsuredId: number;
    proposalProductRiskVOList: ProposalProductRiskVoItem[];
}

export interface ProposalProductRiskVoItem {
    amount: number;
    chargePeriod: string;
    coveragePeriod: string;
    id?: number;
    liabilityVO: LiabilityVo;
    mainRiskCode: number;
    paymentFrequency: number;
    premium: number;
    proposalProductId: number;
    proposalProductRiskVOList: ProposalProductRiskVoItem[];
    riskCode: string;
    riskName: string;
    riskType: number;
}

export interface LiabilityVo {
    liabilityAttributeCode: string;
    liabilityAttributeValue: string;
    liabilityCode: string;
    liabilityId: number;
    liabilityRateType: number;
    liabilityType: number;
}

export interface ProposalHolderVo {
    avatar: string;
    birthday: string;
    gender: number | string;
    id?: number;
    name: string;
    occupationClass: string;
    occupationCode: string;
    occupationName: string;
    proposalId: number;
    proposalInsuredProductVOList: ProposalInsuredProductVoItem[];
    relation: number;
    socialFlag: number;
}



