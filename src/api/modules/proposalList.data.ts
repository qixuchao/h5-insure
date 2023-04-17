/* eslint-disable no-use-before-define */
export interface Sort {
  asc: boolean;
  name: string;
}

export interface ProductCategoryItem {
  id: number;
  categoryName: string;
  categoryNo: number;
}

export interface ProductInfoVoItem {
  fileName: string;
  fileType: string;
  fileUrl: string;
  id: number;
  tags: string[];
  text: string;
  title: number;
  insurerName: string;
}

export interface ProposalItem {
  id: number;
  insurerCode: string;
  insurerName: string;
  productCategory: number;
  productCode: string;
  productId: number;
  productName: string;
  showCategory: number;
  showConfig: ShowConfig;
}

export interface ShowConfig {
  fileName: string;
  fileType: string;
  fileUrl: string;
  tags: string[];
  text: string;
  title: string;
}

export interface QueryProposalProductListType {
  condition: ProductInfoVoItem;
  datas: Data[];
  offset: number;
  pageNum: number;
  pageSize: number;
  queryAll: boolean;
  sortCondition: string;
  sorts: Sort[];
  total: number;
  title: string;
  insurerCodeList: Array<string>;
  showCategory: string | number;
  excludeProductCodeList: Array<string | number>;
}

export interface HistoryProposalListParams {
  name: string;
  pageNum: number;
  pageSize: number;
  relationUserType: string | number;
}

export interface LiabilityDetailVoItem {
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

export interface ProposalProductRiskVoItem {
  amount: number;
  chargePeriod: string;
  copy: number;
  coveragePeriod: string;
  id: number;
  liabilityDetailVOList: LiabilityDetailVoItem[];
  mainRiskId: number;
  paymentFrequency: number;
  premium: number;
  proposalProductId: number;
  proposalProductRiskVOList: object[];
  riskCode: string;
  riskId: number;
  riskName: string;
  riskType: number;
}

export interface HistoryProposalListType {
  id: number;
  proposalName: string;
  proposalProductRiskVOList: ProposalProductRiskVoItem[];
  totalPremium: number;
}
export interface HistoryProposalListResponse {
  datas: HistoryProposalListType[];
}
