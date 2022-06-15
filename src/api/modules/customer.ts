/*
 * @Description: 客户模块
 * @Autor: kevin.liang
 * @Date: 2022-02-15 17:58:02
 * @LastEditors: kevin.liang
 * @LastEditTime: 2022-02-18 16:42:42
 */
import request from '../request';
import { IResponse } from './common';

const api = '/activity';

// 客户列表
export const searchCustomerList = (params: any) => {
  return request.post(`${api}/customer/searchCustomerList`, params);
};
// 客户列表
export const queryFullDict = (params: any) => {
  return request.post(`${api}/queryFullDict`, params);
};

// 客户详情
export const searchCustomerDetail = (params: any) => {
  return request.post(`${api}/customer/searchCustomerDetail`, params);
};

// 生日列表
export const searchCustomerBirthdayList = (params: any) => {
  return request.post(`${api}/customer/searchCustomerBirthdayList`, params);
};

// 客户动态
export const searchCustomerActivity = (params: any) => {
  return request.post(`${api}/customer/searchCustomerActivity`, params);
};

// 新增编辑客户
export const saveCustomer = (params: any) => {
  return request.post(`${api}/customer/saveCustomer`, params);
};

// 删除客户
export const removeCustomer = (params: any) => {
  return request.post(`${api}/customer/removeCustomer`, params);
};

// 保存家庭成员
export const saveFamilyMember = (params: any) => {
  return request.post(`${api}/customer/saveFamilyMember`, params);
};

// 删除家庭成员
export const removeFamilyMember = (params: any) => {
  return request.post(`${api}/customer/removeFamilyMember`, params);
};

// 保存补充信息
export const saveExtendField = (params: any) => {
  return request.post(`${api}/customer/saveExtendField`, params);
};

// 保存证件信息
export const saveCertificate = (params: any) => {
  return request.post(`${api}/customer/saveCertificate`, params);
};

// 删除证件
export const removeCertificate = (params: any) => {
  return request.post(`${api}/customer/removeCertificate`, params);
};

// 标记
export const markCustomer = (params: any) => {
  return request.post(`${api}/customer/markCustomer`, params);
};

export const querySingleList = (params: any) => {
  return request.post(`${api}/v1/querySingleList`, params);
};

export const searchUserByToken = () => {
  return request.post(`${api}/v1/login/searchUserByToken`);
};

export interface IRecommendCustomer {
  customerId: string;
  customerName: string;
  customerType: string;
  visitType: string;
  sex: 'F' | 'M';
}
// 推荐待跟进客户
export const recommendFollow = (params: any) => {
  return request.post<IResponse<IRecommendCustomer[]>>(`${api}/customer/recommendFollow`, params);
};

// 推荐待跟进客户标记为待跟进客户
export const batchMarkCustomer = (params: any) => {
  return request.post(`${api}/customer/batchMarkCustomer`, params);
};

// 拨打电话标记
export const dialPhone = (params: any) => {
  return request.post(`${api}/v1/phone/dialPhone`, params);
};

export const saveCustomerTag = (data: any) => {
  return request.post(`${api}/customer/saveCustomerTag`, data);
};
