/*
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-26 12:30:54
 * @LastEditors: kevin.liang
 * @LastEditTime: 2022-12-05 14:14:19
 * @FilePath: /zat-planet-h5-cloud-insure/src/api/modules/order.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '../request';
import { OrderListResponse, OrderDetail, NewOrderListResponse } from './order.data';

export const getOrderList = (data = {}) => {
  return request<OrderListResponse>({ url: '/api/app/order/v1/pageQuery', method: 'POST', data });
};

export const getOrderDetail = (id: string) => {
  return request<OrderDetail>({ url: '/api/app/order/v1/detail', method: 'POST', data: { id } });
};

export const deleteOrder = (id: number, status: string) => {
  return request<ResponseData>({ url: '/api/app/order/v1/delete', method: 'POST', data: { id, status } });
};

// 查询订单列表
export const getListOrder = (data = {}) => {
  return request<NewOrderListResponse>({ url: '/api/app/insure/insurance/listOrder', method: 'POST', data });
};

// 利安-订单列表
export const queryOrderList = (data = {}) =>
  request({
    url: '/api/app/insure/insurance/pageOrder',
    method: 'POST',
    data,
  });
