/*
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-08-20 21:46:21
 * @LastEditors: za-qixuchao qixuchao@zhongan.com
 * @LastEditTime: 2022-11-09 13:50:15
 * @FilePath: /zat-planet-h5-cloud-insure/src/api/modules/compositionProposal.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '../request';
import { InsuredProductData, ThemeHistoryDetail, ThemeItem } from './compositionProposal.data';

// 计划书是否支持转投保
export const proposalTransInsured = (params = {}) =>
  request<ResponseData<InsuredProductData[]>>({
    url: '/api/app/insure/proposal/proposalTransInsured',
    method: 'GET',
    params,
  });

// 校验计划书产品是否可转投被保
export const checkProposalInsurer = (params = {}) =>
  request<ResponseData<boolean>>({ url: '/api/app/insure/proposal/checkProposalInsurer', method: 'GET', params });

// 查询计划书支持的主题
export const queryProposalThemeList = (data: {}) =>
  request<ResponseData<ThemeItem[]>>({ url: '/api/app/insure/proposal/queryProposalThemeList', method: 'POST', data });

// 获取主题历史详情
export const queryProposalThemeHistoryDetail = (params = {}) =>
  request<ResponseData<ThemeHistoryDetail>>({
    url: '/api/app/insure/proposal/queryProposalThemeHistoryDetail',
    method: 'GET',
    params,
  });

// 选择计划书主题
export const chooseProposalTheme = (params = {}) =>
  request<ResponseData<number>>({ url: '/api/app/insure/proposal/chooseProposalTheme', method: 'GET', params });

// 计划书预览基础配置信息
export const queryProposalTemplateSaleInfo = (data = {}) =>
  request({ url: '/api/app/insure/proposal/queryProposalTemplateSaleInfo', method: 'POST', data }, { loading: true });
