/*
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-08-10 16:45:37
 * @LastEditors: kevin.liang
 * @LastEditTime: 2023-03-20 19:14:36
 * @FilePath: /zat-planet-h5-cloud-insure/src/api/modules/product.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/api/request';
import {
  ProductDetail,
  ProductMaterialData,
  ProductQuestionnaireRes,
  ProductSaleInfo,
  ProductUpgradeConfig,
  ProductItem,
} from './product.data';
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
  request<ProductSaleInfo>({ url: '/api/app/insure/product/v2/salesInfo', method: 'POST', data });

// 获取产品升级保障配置
export const queryUpgradeConfig = (data = {}) =>
  request<ProductUpgradeConfig>({ url: '/api/app/insure/product/v2/insureProductUpgrade', method: 'POST', data });

// 获取资料信息
export const queryProductMaterial = (data = {}) => {
  return request<ProductMaterialData>({
    url: '/api/app/insure/product/v2/insureProductMaterial',
    method: 'POST',
    data,
  });
};

// 获取问卷信息[只传问卷id时]
export const listProductQuestionnaire = (data = {}) => {
  return request<{ productQuestionnaireVOList: ProductQuestionnaireRes[] }>({
    url: '/api/app/insure/product/v2/listProductQuestionnaire',
    method: 'POST',
    data,
  });
};
// 获取多产品资料信息
export const queryListProductMaterial = (data = {}) => {
  return request<ProductMaterialData>({
    url: '/api/app/insure/product/v2/listProductMaterial',
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
    url: `/api/app/insure/product/v2/queryInsurePopupConfigV2`,
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

// 产品列表查询
export const queryProductList = (data, config) => {
  return request<Array<ProductItem>>(
    {
      url: '/api/app/insure/product/v2/listProduct',
      method: 'POST',
      data,
    },
    config,
  );
};
