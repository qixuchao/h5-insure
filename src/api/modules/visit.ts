import request from '@/api/request';

const cardPrefix = '/activity';

// 查询访客列表
export const getVisitorList = (data: any) => {
  return request({
    url: `${cardPrefix}/searchWithPage`,
    method: 'POST',
    data,
  });
};

// 查询访客详情
export const getVisitorDetail = (data: any) => {
  return request({
    url: `${cardPrefix}/searchVisitorDetail`,
    method: 'POST',
    data,
  });
};

// 新增关联
export const addRelatedCustomer = (data: any) => {
  return request({
    url: `${cardPrefix}/addRelatedCustomer`,
    method: 'POST',
    data,
  });
};

// 变更关联
export const updateRelatedCustomer = (data: any) => {
  return request({
    url: `${cardPrefix}/updateRelatedCustomer`,
    method: 'POST',
    data,
  });
};

// 分析访客(首页头部数据)
export const analysisVisitor = (data: any) => {
  return request({
    url: `${cardPrefix}/analysisVisitor`,
    method: 'POST',
    data,
  });
};

// 关联客户列表
export const queryCustomerList = (data: any) => {
  return request({
    url: `${cardPrefix}/customer/searchCustomerList`,
    method: 'POST',
    data,
  });
};
