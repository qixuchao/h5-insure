/*
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-08-05 14:27:20
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-09-23 11:29:22
 * @FilePath: /zat-planet-h5-cloud-insure/src/api/modules/proposalList.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
export const queryProposalDetail = (id: string) => {
  return request.post(`${API_PREFIXED}/preview/${id}`);
};

// 生成计划书pdf
export const generatePdf = (params = {}) => {
  return request.get<any, ResponseData<any>>(`${API_PREFIXED}/generatePdf`, {
    params,
  });
};

export const queryPreviewProposalDetail = (id: string) => {
  return request.get(`${API_PREFIXED}/sharePreview/${id}`);
};
