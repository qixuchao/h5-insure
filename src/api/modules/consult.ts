import request from '../request';
import { RegisterRequest } from './consult.data';

// 客户领取记录保存
// eslint-disable-next-line import/prefer-default-export
export const getUserInfo = (data: RegisterRequest) => {
  return request.post<{ url: string }, ResponseData<{ url: string }>>('/api/app/buriedPoint/userInfo', data);
};

// 线下融合短信验证码发送
export const buriedMobileVerifyCode = (data: string) => {
  return request.post<ResponseData, ResponseData>(`/api/app/buriedPoint/buriedMobileVerifyCode?mobile=${data}`);
};

// 线下融合短信验证码验证
export const buriedVerifyMobileCode = (data: {}) => {
  return request.post<ResponseData, ResponseData>('/api/app/buriedPoint/buriedVerifyMobileCode', data);
};
