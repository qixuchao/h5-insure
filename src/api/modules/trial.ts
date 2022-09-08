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
  request.post<ProductData, ResponseData<ProductData>>('/api/app/insure/product/insureProductDetail', params);

// 保费试算
export const premiumCalc = (params: PremiumCalcData) =>
  request.post<premiumCalcResponse, ResponseData<premiumCalcResponse>>('/api/app/insure/insurance/premiumCalc', params);

export const insureProductDetailNew = (data = {}) =>
  request.post<ProductDetail, ResponseData>('/api/app/insure/product/insureProductDetailNew', data);

export const premiumCalcV2 = (data = {}) =>
  request.post<any, ResponseData>('/api/app/insure/insurance/premiumCalcV2', data);
