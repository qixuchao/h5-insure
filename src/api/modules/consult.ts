import request from '../request';
import { RegisterRequest } from './consult.data';

// eslint-disable-next-line import/prefer-default-export
export const getUserInfo = (data: RegisterRequest) => {
  return request.post<{ url: string }, ResponseData<{ url: string }>>('/api/app/buriedPoint/userInfo', data);
};
