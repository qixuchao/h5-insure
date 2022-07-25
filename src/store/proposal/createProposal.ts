/*
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-20 15:48:15
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-07-25 08:58:26
 * @FilePath: /zat-planet-h5-cloud-insure/src/store/proposal/createProposal.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from 'pinia';
import { ProposalInfo } from '@/api/modules/createProposal.data';

export interface State {
  proposalInfo: Partial<ProposalInfo>;
  trialData: ProposalInfo[];
}

const useStore = defineStore<
  string,
  State,
  {},
  {
    setProposalInfo: (data: ProposalInfo) => void;
    setTrialData: (data: ProposalInfo[]) => void;
  }
>({
  // 这里的id必须为唯一ID
  id: 'createProposal',
  state: () => {
    return {
      proposalInfo: {},
      trialData: [],
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
  },
});

export default useStore;
