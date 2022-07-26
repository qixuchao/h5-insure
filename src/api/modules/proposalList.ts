import request from '@/api/request';
import {
  QueryProposalProductListType,
  HistoryProposalListResponse,
  HistoryProposalListParams,
} from './proposalList.data';

const API_PREFIXED = `/api/app/insure/proposal`;

// H5端查询计划书产品列表
export const queryProposalProductList = (data: Partial<QueryProposalProductListType>) =>
  request.post<QueryProposalProductListType, ResponseData<any>>(`${API_PREFIXED}/queryProposalProductList`, data);

// H5端查询计历史划书列表
export const historyProposalList = (data: Partial<HistoryProposalListParams>) =>
  request.post<HistoryProposalListParams, ResponseData<HistoryProposalListResponse>>(
    `${API_PREFIXED}/historyProposalList`,
    data,
  );

// H5端查询计历史划书删除
export const deleteProposal = (id: number) => request.post<any, ResponseData>(`${API_PREFIXED}/deleteProposal/${id}`);

// 计划书详情
export const queryProposalDetail = (id: number) => {
  return request.post(`${API_PREFIXED}/preview/${id}`);
};

// 生成计划书pdf
export const generatePdf = (id: string) => {
  return request.post(`${API_PREFIXED}/generatePdf/${id}`);
};
