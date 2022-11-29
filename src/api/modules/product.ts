/*
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-08-10 16:45:37
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-09-28 11:45:20
 * @FilePath: /zat-planet-h5-cloud-insure/src/api/modules/product.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/api/request';
import { ProductDetail } from './product.data';
import { TemplatePageItem } from '../index.data';

export const productDetail = (data: any) => {
  return request<ResponseData<ProductDetail>>({
    url: '/api/app/insure/product/getProductDetail',
    method: 'POST',
    data,
  });
};

export const productList = () => {
  return request({ url: '/api/app/insure/product/listInsureProductDetail', method: 'POST' });
};

export const getTemplateInfo = () => {
  return request({ url: '/api/app/insure/insurance/getTemplateInfo', method: 'POST' });
};

export const getFactor = (data: any) => {
  return request<ResponseData<TemplatePageItem>>({
    url: '/api/app/insure/insurance/getInitFactor',
    method: 'POST',
    data,
  });
};

export const getAppUser = (data: any) => {
  return request({
    url: `/api/query/user/getAppUser`,
    method: 'POST',
    data,
  });
};
