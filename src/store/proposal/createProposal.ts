/*
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-20 15:48:15
 * @LastEditors: kevin.liang
 * @LastEditTime: 2023-04-17 22:10:28
 * @FilePath: /zat-planet-h5-cloud-insure/src/store/proposal/createProposal.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from 'pinia';
import { ProposalInfo } from '@/api/modules/createProposal.data';

export interface State {
  proposalInfo: Partial<ProposalInfo>; // 计划书信息
  trialData: ProposalInfo[]; // 试算需要的条件信息
  excludeProduct: any[]; // 计划书中添加产品时需要排除的产品id
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
  }
>({
  // 这里的id必须为唯一ID
  id: 'createProposal',
  state: () => {
    return {
      proposalInfo: {},
      trialData: [],
      excludeProduct: [], // 创建计划书，查询产品时，排除已选
      proposalId: 0,
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
  },
});

export default useStore;
