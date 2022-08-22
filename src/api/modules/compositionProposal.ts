/*
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-08-20 21:46:21
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-08-22 09:43:31
 * @FilePath: /zat-planet-h5-cloud-insure/src/api/modules/compositionProposal.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '../request';
import { InsuredProductData } from './compositionProposal.data';

// 计划书是否支持转投保
export const proposalTransInsured = (params = {}) =>
  request.get<InsuredProductData[], ResponseData<InsuredProductData[]>>(
    '/api/app/insure/proposal/proposalTransInsured',
    { params },
  );

// 校验计划书产品是否可转投被保
export const checkProposalInsurer = (params = {}) =>
  request.get<boolean, ResponseData<boolean>>('/api/app/insure/proposal/checkProposalInsurer', { params });
