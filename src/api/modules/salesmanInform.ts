/*
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-28 10:28:12
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-09-28 14:03:03
 * @FilePath: /zat-planet-h5-cloud-insure/src/api/modules/salesmanInform.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/api/request1';
import { GetMarketerNoticesType, GetMarketerNoticesResponse } from './salesmanInform.data';

// 营销员告知相关接口
const API_PREFIXED = `/api/app/insure/insurance`;

// 在线投保-营销员告知查询
export const getMarketerNotices = (data: Partial<GetMarketerNoticesType>) =>
  request<ResponseData<GetMarketerNoticesResponse>>({
    url: `${API_PREFIXED}/getMarketerNotices`,
    method: 'POST',
    data,
  });

// 在线投保-营销员告知详情
export const getMarketerNoticesDetail = (data: Partial<GetMarketerNoticesType>) =>
  request<ResponseData<any>>({ url: `${API_PREFIXED}/getMarketerNoticesDetail`, method: 'POST', data });
