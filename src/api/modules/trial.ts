/*
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-06-24 13:44:22
 * @LastEditors: za-qixuchao qixuchao@zhongan.com
 * @LastEditTime: 2022-12-03 11:32:29
 * @FilePath: /zat-planet-h5-cloud-insure/src/api/modules/trial.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/api/request';
import { ProductData, PremiumCalcData, PremiumCalcResponse } from './trial.data';
import { ProductDetail } from './newTrial.data';

// 获取产品详情
export const insureProductDetail = (data: any = {}) =>
  request<ProductDetail>(
    { url: '/api/app/insure/product/insureProductDetail', method: 'POST', data },
    { loading: true },
  );

// 保费试算
export const premiumCalc = (data: PremiumCalcData) =>
  request<ResponseData<PremiumCalcResponse>>({ url: '/api/app/insure/insurance/premiumCalc', method: 'POST', data });

export const insureProductDetailNew = (data = {}) =>
  request<ResponseData>({ url: '/api/app/insure/product/insureProductDetailNew', method: 'POST', data });

export const premiumCalcV2 = (data = {}) =>
  request<ResponseData<any>>({ url: '/api/app/insure/insurance/premiumCalcV2', method: 'POST', data });

// 订单保存
export const saveOrder = (data = {}) =>
  request<ResponseData<any>>({ url: '/api/app/insure/insurance/saveOrder', method: 'POST', data });

// 核保
export const underwrite = (data = {}) =>
  request<ResponseData<any>>({ url: '/api/app/insure/insurance/underwrite', method: 'POST', data });

// 获取支付链接
export const getPayUrl = (data = {}) =>
  request<{ type: number; paymentUrl: string }>({ url: '/api/app/insure/insurance/getPayUrl', method: 'POST', data });

// 获取订单详情
export const getTenantOrderDetail = (data = {}) =>
  request<any>({ url: '/api/app/insure/insurance/getTenantOrderDetail', method: 'POST', data }, { loading: true });

// 获取订单详情
export const getOrderDetailByCondition = (data = {}) =>
  request<ResponseData<any>>({ url: '/api/app/insure/insurance/getOrderDetailByCondition', method: 'POST', data });

// 一步出单
export const multiIssuePolicy = (data = {}) =>
  request<ResponseData<any>>({ url: '/api/app/insure/insurance/multiIssuePolicy', method: 'POST', data });

// 升级保障试算
export const endorsementPremiumCalc = (data = {}) =>
  request<ResponseData<any>>({ url: '/api/app/insure/insurance/endorsementPremiumCalc', method: 'POST', data });
// 升级保障
export const EndorsementUp = (data = {}) =>
  request<ResponseData<any>>({ url: '/api/app/insure/insurance/EndorsementUp', method: 'POST', data });

// 删除订单
export const deleteOrder = (data = {}) =>
  request<ResponseData<any>>({ url: '/api/app/insure/insurance/deleteOrder', method: 'POST', data });

// 新用户登陆注册
export const toClogin = (data = {}) =>
  request<ResponseData<any>>({ url: '/api/mall/app/v2/login/toClogin', method: 'POST', data });

// 在线投保-通用下一步
export const nextStep = (data = {}) =>
  request<ResponseData<any>>({ url: '/api/app/insure/insurance/nextStep', method: 'POST', data });

// 试算前对数据进行校验
export const underWriteRule = (data = {}) =>
  request<ResponseData<PremiumCalcResponse>>(
    {
      url: '/api/app/insure/insurance/underWriteRule',
      method: 'POST',
      data,
    },
    {
      loading: true,
    },
  );

// 获取投保链接
export const queryStandardInsurerLink = (data = {}) =>
  request<ResponseData<any>>({ url: '/api/app/insure/insurance/standardInsurerLink', method: 'POST', data });
