/*
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-26 12:30:54
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-09-28 10:46:22
 * @FilePath: /zat-planet-h5-cloud-insure/src/api/modules/order.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '../request';
import { OrderListResponse, OrderDetail } from './order.data';

export const getOrderList = (data = {}) => {
  return request<ResponseData<OrderListResponse>>({ url: '/api/app/order/v1/pageQuery', method: 'POST', data });
};

export const getOrderDetail = (id: string) => {
  return request<ResponseData<OrderDetail>>({ url: '/api/app/order/v1/detail', method: 'POST', data: { id } });
};

export const deleteOrder = (id: number, status: string) => {
  return request<ResponseData>({ url: '/api/app/order/v1/delete', method: 'POST', data: { id, status } });
};
