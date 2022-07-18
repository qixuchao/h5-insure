/*
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-06-24 13:44:22
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-07-16 19:29:46
 * @FilePath: /zat-planet-h5-cloud-insure/src/api/modules/trial.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/api/request';
import { ProductData, premiumCalcData, premiumCalcResponse } from './trial.data';

// 获取产品详情
export const insureProductDetail = (params: any = {}) =>
  request.get<ProductData, ResponseData<ProductData>>(`/api/product/insureProductDetail/${params?.productId}`, params);

// 保费试算
export const premiumCalc = (params: premiumCalcData) =>
  request.post<premiumCalcResponse, ResponseData<premiumCalcResponse>>('/api/insurance/premiumCalc', params);
