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
  request.post<ListCustomerQuestionsProps, ResponseData<ListCustomerQuestionsResponse[]>>(
    `${API_PREFIXED}/listCustomerQuestions`,
    data,
  );

// 在线投保-问卷告知查询详情
export const getCustomerQuestionsDetail = (data: Partial<GetCustomerQuestionsDetailProps>) =>
  request.post<GetCustomerQuestionsDetailProps, ResponseData<GetCustomerQuestionsDetailResponse>>(
    `${API_PREFIXED}/getCustomerQuestionsDetail`,
    data,
  );

// 在线投保-更新问卷状态
export const updateOrderNoticeStatus = (data: Partial<UpdateOrderNoticeStatusProps>) =>
  request.post<UpdateOrderNoticeStatusProps, ResponseData>(`${API_PREFIXED}/updateOrderNoticeStatus`, data);

// 在线投保-问卷告知查询详情
export const saveMarketerNotices = (data: Partial<SaveMarketerNoticesProps>) =>
  request.post<SaveMarketerNoticesProps, ResponseData>(`${API_PREFIXED}/saveMarketerNotices`, data);
