import request from '../request';
import { RegisterResponse } from './consult.data';

// eslint-disable-next-line import/prefer-default-export
export const getUserInfo = (data: any) => {
  return request.post<RegisterResponse, ResponseData<RegisterResponse>>('/api/app/buriedPoint/userInfo', data);
};
