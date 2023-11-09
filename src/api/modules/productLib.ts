import request from '../request';

export interface BoxConfig {
  id: string;
  insurerCode: string;
  showStyle: number;
  showStyleDetails?: any;
  isShowStopSellingLabel: string;
  showCategoryIds?: any;
  materialCategoryShowStyle: number;
}

// 产品宝盒列表配置-基础配置详情查询
export const queryProductBoxConfig = (data = {}) => {
  return request<BoxConfig>({
    url: '/api/app/insure/product/category/queryProductBoxConfig',
    method: 'POST',
    data,
  });
};
// 产品库列表配置APP展示
export const riskAttachmentList = (data = {}) => {
  return request<any>({
    url: '/api/app/insure/product/category/riskAttachmentList',
    method: 'POST',
    data,
  });
};
