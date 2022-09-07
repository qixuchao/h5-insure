/*
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-14 10:28:23
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-08-23 20:06:51
 * @FilePath: /zat-planet-h5-cloud-insure/src/api/modules/createProposal.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/api/request';
import { ProposalInfo } from './createProposal.data';
// 创建计划书
export const addOrUpdateProposal = (data: ProposalInfo) =>
  request.post<ProposalInfo, ResponseData<any>>('/api/app/insure/proposal/addOrUpdateProposal', data);

// 获取计划书详情
export const queryProposalDetail = (params = {} as any) =>
  request.get<ProposalInfo, ResponseData>(`/api/app/insure/proposal/queryProposalDetail/${params.id}`, { params });

// 获取计划书详情(无token)
export const queryProposalDetailInsurer = (params = {} as any) =>
  request.get<ProposalInfo, ResponseData>(`/api/app/insure/proposal/queryProposalDetailInsurer/${params.id}`, {
    params,
  });

// 获取产品详情列表
export const queryProductDetailList = (data = {}) =>
  request.post<any, ResponseData>('/api/app/insure/product/listInsureProductDetail', data);
