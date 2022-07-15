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
    gender: number;
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

