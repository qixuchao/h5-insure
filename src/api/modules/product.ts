import request from '@/api/request';
import { ProductDetail } from './productd.data';

export const productDetail = (data: any) => {
  return request.post<ResponseData<ProductDetail>>('/api/app/insure/product/getProductDetail', data);
};

export const productList = () => {
  return request.post('/api/app/insure/product/listInsureProductDetail');
};
