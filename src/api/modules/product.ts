import request from '@/api/request';
import { ProductDetail } from './productd.data';

export const productDetail = (data: any) => {
  return request.post<ResponseData<ProductDetail>>('/api/app/insure/product/insureProductDetail', data);
};

export const productList = () => {
  return {};
};
