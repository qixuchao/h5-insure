/*
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-14 10:28:23
 * @LastEditors: kevin.liang
 * @LastEditTime: 2023-04-17 21:55:25
 * @FilePath: /zat-planet-h5-cloud-insure/src/api/modules/createProposal.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/api/request';
import { ProposalInfo } from './createProposal.data';
// 创建计划书
export const addOrUpdateProposal = (data: Partial<ProposalInfo>) =>
  request<ResponseData<any>>({ url: '/api/app/insure/proposal/addOrUpdateProposal', method: 'POST', data });

// 获取计划书详情
export const queryProposalDetail = (params = {} as any) =>
  request<ResponseData>({ url: `/api/app/insure/proposal/queryProposalDetail/${params.id}`, method: 'GET', params });

// 获取计划书详情(无token)
export const queryProposalDetailInsurer = (params = {} as any) =>
  request<ResponseData>({
    url: `/api/app/insure/proposal/queryProposalDetailInsurer/${params.id}`,
    params,
    method: 'GET',
  });

// 获取产品详情列表（旧版接口）
export const queryProductDetailList = (data = {}) =>
  request<any[]>({ url: '/api/app/insure/product/v2/listInsureProductDetail', method: 'POST', data });
