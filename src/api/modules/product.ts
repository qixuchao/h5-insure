/*
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-08-10 16:45:37
 * @LastEditors: za-qixuchao qixuchao@zhongan.com
 * @LastEditTime: 2023-03-13 14:29:29
 * @FilePath: /zat-planet-h5-cloud-insure/src/api/modules/product.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/api/request';
import { ProductDetail, ProductMaterialData } from './product.data';
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

// 获取产品销售信息
export const querySalesInfo = (data = {}) =>
  request({ url: '/api/app/insure/product/salesInfo', method: 'POST', data });

// 获取资料信息
export const queryProductMaterial = (data = {}) => {
  return request<ProductMaterialData>({
    url: '/api/app/insure/product/v2/insureProductMaterial',
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
  return request<{
    insureName: string;
    tenantName: string;
    privacyAgreement: {
      title: string;
    };
  }>({
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
