/*
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-08-10 16:45:37
 * @LastEditors: za-qixuchao qixuchao@zhongan.com
 * @LastEditTime: 2022-12-03 19:27:09
 * @FilePath: /zat-planet-h5-cloud-insure/src/api/modules/product.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/api/request';
import { ProductDetail } from './product.data';
import { TemplatePageItem } from '../index.data';

export const productDetail = (data: any) => {
  return request<ProductDetail>(
    {
      url: '/api/app/insure/product/getProductDetail',
      method: 'POST',
      data,
    },
    { loading: true },
  );
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
  return request(
    {
      url: `/api/query/user/getAppUser`,
      method: 'POST',
      data,
    },
    { loading: true },
  );
};

// 获取投保流程弹窗配置信息
export const queryInsurePopupConfig = (data: any) => {
  return request({
    url: `/api/app/insure/product/queryInsurePopupConfig`,
    method: 'POST',
    data,
  });
};

// 查询传入客户关联的其他客户
export const queryListRelationCustomer = (data: any) => {
  return request({
    url: `/api/query/customer/listRelationCustomer`,
    method: 'POST',
    data,
  });
};
