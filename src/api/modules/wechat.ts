import request from '@/api/request';

const prefix = '/activity';

// 获取微信jstoken
export const getJssdkSignature = (data: any) => {
  return request.post(`${prefix}/getJssdkSignature`, data);
};
