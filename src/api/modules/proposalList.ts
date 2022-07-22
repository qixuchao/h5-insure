import request from '@/api/request';
import { QueryProposalProductListType } from './proposalList.data';

const API_PREFIXED = `/api/app/insure/proposal`;

// H5端查询计划书产品列表
export const queryProposalProductList = (data: Partial<QueryProposalProductListType>) =>
  request.post<QueryProposalProductListType, ResponseData<any>>(`${API_PREFIXED}/queryProposalProductList`, data);

export default {};
