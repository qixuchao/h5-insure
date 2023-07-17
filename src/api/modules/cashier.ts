/*
 * @Description: 支付相关的接口
 * @Autor: kevin.liang
 * @Date: 2022-11-21 12:53:01
 * @LastEditors: kevin.liang
 * @LastEditTime: 2022-12-02 20:18:05
 */

import request from '../request';
import type { GetPayUrlParam, PayParam, OrderInfo, PayResult } from './cashier.data';

// 在线投保-银行卡签约确认
export const getPayUrl = (data: GetPayUrlParam) => {
  return request<string>({ url: '/api/app/insure/insurance/getPayUrl', method: 'POST', data });
};

// 获取收银台订单信息
export const loadPayment = (params: GetPayUrlParam) => {
  return request<OrderInfo>({ url: '/api/app/insure/insurance/loadPayment', method: 'GET', params });
};
// 根据选择的支付方式支付订单
export const pay = (data: PayParam) => {
  return request<PayResult>({ url: '/api/app/insure/insurance/pay', method: 'POST', data });
};
// 获取订单支付状态
export const getPaymentResult = (params: { orderNo: string; tenantId: string }) => {
  return request<{ status: string | number; redirectUrl: string }>({
    url: '/api/app/insure/insurance/getPaymentResult',
    method: 'GET',
    params,
    headers: { laoding: false },
  });
};

export default {};
