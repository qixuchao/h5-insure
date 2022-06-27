import request from '@/api/request';

// 获取产品详情
export const insureProductDetail = (params: any = {}) =>
  request.get(`/api/product/insureProductDetail/${params?.productId}`, params);

// 保费试算
export const premiumCalc = (params = {}) => request.post('/api/insurance/premiumCalc', params);
