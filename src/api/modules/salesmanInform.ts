import request from '@/api/request';
import { GetMarketerNoticesType, GetMarketerNoticesResponse } from './salesmanInform.data';

// 营销员告知相关接口
const API_PREFIXED = `/api/app/insure/insurance`;

// 在线投保-营销员告知查询
export const getMarketerNotices = (data: Partial<GetMarketerNoticesType>) =>
  request.post<GetMarketerNoticesType, ResponseData<GetMarketerNoticesResponse>>(
    `${API_PREFIXED}/getMarketerNotices`,
    data,
  );

// 在线投保-营销员告知详情
export const getMarketerNoticesDetail = (data: Partial<GetMarketerNoticesType>) =>
  request.post<GetMarketerNoticesType, ResponseData>(`${API_PREFIXED}/getMarketerNoticesDetail`, data);
