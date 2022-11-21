/*
 * @Description: 支付相关的接口
 * @Autor: kevin.liang
 * @Date: 2022-11-21 12:53:01
 * @LastEditors: kevin.liang
 * @LastEditTime: 2022-11-21 13:51:00
 */

import request from '../request';
import type { GetPayUrlParam, PayParam } from './cashier.data';

// 在线投保-银行卡签约确认
export const getPayUrl = (data: GetPayUrlParam) => {
  return request<ResponseData<{ url: string }>>({ url: '/api/app/insure/insurance/getPayUrl', method: 'POST', data });
};

// 获取收银台订单信息
export const loadPayment = (data: GetPayUrlParam) => {
  return request<ResponseData<PayParam>>({ url: '/api/app/insure/insurance/loadPayment', method: 'GET', data });
};
// 根据选择的支付方式支付订单
export const pay = (data: PayParam) => {
  return request<ResponseData<GetPayUrlParam>>({ url: '/api/app/insure/insurance/pay', method: 'POST', data });
};

export default {};
