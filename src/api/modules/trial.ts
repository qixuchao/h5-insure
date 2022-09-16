/*
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-06-24 13:44:22
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-09-08 00:02:36
 * @FilePath: /zat-planet-h5-cloud-insure/src/api/modules/trial.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/api/request';
import { ProductData, PremiumCalcData, premiumCalcResponse } from './trial.data';
import { ProductDetail } from './newTrial.data';

// 获取产品详情
export const insureProductDetail = (params: any = {}) =>
  request.post<ProductData, ResponseData<ProductDetail>>('/api/app/insure/product/insureProductDetail', params);

// 保费试算
export const premiumCalc = (params: PremiumCalcData) =>
  request.post<premiumCalcResponse, ResponseData<premiumCalcResponse>>('/api/app/insure/insurance/premiumCalc', params);

export const insureProductDetailNew = (data = {}) =>
  request.post<ProductDetail, ResponseData>('/api/app/insure/product/insureProductDetailNew', data);

export const premiumCalcV2 = (data = {}) =>
  request.post<any, ResponseData>('/api/app/insure/insurance/premiumCalcV2', data);

// 订单保存
export const saveOrder = (data = {}) => request.post<any, ResponseData>('/api/app/insure/insurance/saveOrder', data);

// 核保
export const underwrite = (data = {}) => request.post<any, ResponseData>('/api/app/insure/insurance/underwrite', data);

// 获取支付链接
export const getPayUrl = (data = {}) => request.post<any, ResponseData>('/api/app/insure/insurance/getPayUrl', data);

// 获取订单详情
export const getTenantOrderDetail = (data = {}) =>
  request.post<any, ResponseData>('/api/app/insure/insurance/getTenantOrderDetail', data);

// 获取订单详情
export const getOrderDetailByCondition = (data = {}) =>
  request.post<any, ResponseData>('/api/app/insure/insurance/getOrderDetailByCondition', data);

// 一步出单
export const multiIssuePolicy = (data = {}) =>
  request.post<any, ResponseData>('/api/app/insure/insurance/multiIssuePolicy', data);

// 升级保障试算
export const endorsementPremiumCalc = (data = {}) =>
  request.post<any, ResponseData>('/api/app/insure/insurance/endorsementPremiumCalc', data);
// 升级保障
export const EndorsementUp = (data = {}) =>
  request.post<any, ResponseData>('/api/app/insure/insurance/EndorsementUp', data);
