import request from '@/api/request';
import { ProductDetail } from './productd.data';

export const productDetail = (data: any) => {
  return request.post<ProductDetail, ResponseData<ProductDetail>>('/api/app/insure/product/getProductDetail', data);
};

export const productList = () => {
  return request.post('/api/app/insure/product/listInsureProductDetail');
};

export const getTemplateInfo = () => {
  return request.post('/api/app/insure/insurance/getTemplateInfo');
};
