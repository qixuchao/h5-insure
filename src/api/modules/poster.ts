import request from '../request';

const api = '/activity';

// 分享
export const saveOrSharePoster = (params: any) => {
  return request.post(`${api}/v1/poster/saveOrSharePoster`, params);
};

// 海报列表
export const searchPoster = (params: any) => {
  return request.post(`${api}/v1/poster/searchPoster`, params);
};

// 类别
export const queryProductCategory = (params: any) => {
  return request.post(`${api}/queryTypeAndProductList`, params);
};

// 产品列表
export const queryProductList = (params: any) => {
  return request.post(`${api}/queryProductList`, params);
};

//
export const querySingleList = (params: any) => {
  return request.post(`${api}/v1/querySingleList`, params);
};

// 个人名片
export const findUserInfo = (params: any) => {
  return request.get(`${api}/v1/vcard/findUserInfo`, params);
};
