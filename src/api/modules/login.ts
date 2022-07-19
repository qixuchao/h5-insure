import request from '../request';

// 登录
export const login = (data = {}) => request.post<any, ResponseData>('/api/app/login', data);

export const register = (data = {}) => request.get<any, ResponseData>('', data);
