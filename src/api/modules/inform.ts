/*
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-08-22 22:25:15
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-09-28 10:35:15
 * @FilePath: /zat-planet-h5-cloud-insure/src/api/modules/inform.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/api/request';
import {
  ListCustomerQuestionsProps,
  ListCustomerQuestionsResponse,
  GetCustomerQuestionsDetailProps,
  GetCustomerQuestionsDetailResponse,
  UpdateOrderNoticeStatusProps,
  SaveMarketerNoticesProps,
} from './inform.data';

// 告知相关接口
const API_PREFIXED = `/api/app/insure/insurance`;

// 在线投保-问卷告知列表
export const listCustomerQuestions = (data: Partial<ListCustomerQuestionsProps>) =>
  request<ResponseData<ListCustomerQuestionsResponse[]>>({
    url: `${API_PREFIXED}/listCustomerQuestions`,
    method: 'POST',
    data,
  });

// 在线投保-问卷告知查询详情
export const getCustomerQuestionsDetail = (data: Partial<GetCustomerQuestionsDetailProps>) =>
  request<ResponseData<GetCustomerQuestionsDetailResponse>>({
    url: `${API_PREFIXED}/getCustomerQuestionsDetail`,
    method: 'POST',
    data,
  });

// 在线投保-更新问卷状态
export const updateOrderNoticeStatus = (data: Partial<UpdateOrderNoticeStatusProps>) =>
  request<ResponseData>({ url: `${API_PREFIXED}/updateOrderNoticeStatus`, method: 'POST', data });

// 在线投保-问卷告知查询详情
export const saveMarketerNotices = (data: Partial<SaveMarketerNoticesProps>) =>
  request<ResponseData>({ url: `${API_PREFIXED}/saveMarketerNotices`, method: 'POST', data });

export const listProductManuscripts = (data: any) => {
  return request({ url: '/api/app/insure/insurance/listProductManuscripts', method: 'POST', data });
};
