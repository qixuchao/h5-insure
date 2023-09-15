/**
 * 三方对接需要的接口
 * 比如： 客户列表等
 */
import request from '../request';
import { Customer, DetailParams, CustomerDetail } from './third.data';

export const getCustomerList = (data: { accessKey: string; keyword: string }) => {
  return request<Customer[]>({ url: '/api/app/insure/insurance/customerList', method: 'POST', data });
};
export const getCustomerDetail = (data: DetailParams) => {
  return request<CustomerDetail>({
    url: '/api/app/insure/insurance/customerDetail',
    method: 'POST',
    data,
  });
};

export default {};
