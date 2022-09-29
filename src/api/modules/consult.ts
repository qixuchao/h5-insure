/*
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-09-01 16:10:34
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-09-27 19:45:42
 * @FilePath: /zat-planet-h5-cloud-insure/src/api/modules/consult.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '../request1';
import { RegisterRequest } from './consult.data';

// 客户领取记录保存
// eslint-disable-next-line import/prefer-default-export
export const getUserInfo = (data: RegisterRequest) => {
  return request<ResponseData<{ url: string }>>({ url: '/api/app/buriedPoint/userInfo', method: 'POST', data });
};

// 线下融合短信验证码发送
export const buriedMobileVerifyCode = (data: string) => {
  return request<ResponseData>({ url: `/api/app/buriedPoint/buriedMobileVerifyCode?mobile=${data}`, method: 'POST' });
};

// 线下融合短信验证码验证
export const buriedVerifyMobileCode = (data: {}) => {
  return request<ResponseData>({ url: '/api/app/buriedPoint/buriedVerifyMobileCode', method: 'POST', data });
};
