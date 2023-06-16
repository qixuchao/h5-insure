import { defineStore } from 'pinia';
import { ProposalInfo } from '@/api/modules/createProposal.data';

export interface State {
  proposalInfo: Partial<ProposalInfo>; // 计划书信息
  trialData: ProposalInfo[]; // 试算需要的条件信息
  excludeProduct: any[]; // 计划书中添加产品时需要排除的产品id
  insuredPersonVO: object; // 投保人信息
  selectedProduct: any[]; // 计划书选择的产品:
  selectedProductList: any[]; // 计划书选择的产品详细信息:
  proposalId: number; // 记录当前计划书id
}

const useStore = defineStore<
  string,
  State,
  {},
  {
    setProposalInfo: (data: ProposalInfo) => void;
    setTrialData: (data: ProposalInfo[]) => void;
    setExcludeProduct: (data: any[]) => void;
    setSelectedProduct: (data: any[]) => void;
    setSelectedProductList: (data: any[]) => void;
    setInsuredPersonVO: (data: any) => void;
  }
>({
  // 这里的id必须为唯一ID
  id: 'createProposal',
  state: () => {
    return {
      proposalInfo: {},
      trialData: [],
      excludeProduct: [], // 创建计划书，查询产品时，排除已选
      selectedProduct: [], // 计划书选择的产品
      selectedProductList: [],
      proposalId: 0,
      insuredPersonVO: {},
    };
  },
  // pinia 放弃了 mutations 只使用 actions
  actions: {
    // actions可以用async做成异步形式
    setProposalInfo(data) {
      this.$state.proposalInfo = data;
    },
    setTrialData(data) {
      this.$state.trialData = data;
    },
    setExcludeProduct(data) {
      this.$state.excludeProduct = data;
    },
    setSelectedProduct(data) {
      this.$state.selectedProduct = data;
    },
    setSelectedProductList(data) {
      this.$state.selectedProductList = data;
    },
    setInsuredPersonVO(data) {
      this.$state.insuredPersonVO = data;
    },
  },
});

export default useStore;
