/*
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-26 12:30:54
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-07-27 18:08:47
 * @FilePath: /zat-planet-h5-cloud-insure/src/api/modules/order.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '../request';
import { OrderListResponse, OrderDetail } from './order.data';

export const getOrderList = (data: any) => {
  return request.post<OrderListResponse, ResponseData<OrderListResponse>>('/api/app/order/v1/pageQuery', data);
};

export const getOrderDetail = (id: string) => {
  return request.post<OrderDetail, ResponseData<OrderDetail>>('/api/app/order/v1/detail', { id });
};

export const deleteOrder = (id: number, status: string) => {
  return request.post<any, ResponseData>('/api/app/order/v1/delete', { id, status });
};
