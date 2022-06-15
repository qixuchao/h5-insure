import request from '@/api/request';

const cardPrefix = '/activity';

// 分页查询商机
export const getBussinessList = (data: any) => {
  return request({
    url: `${cardPrefix}/v1/niche/pageList`,
    method: 'POST',
    data,
  });
};

// 商机标记反馈（有用无用）
export const updateFeedback = (data: any) => {
  return request({
    url: `${cardPrefix}/v1/niche/updateFeedback`,
    method: 'POST',
    data,
  });
};

// 使用商机记录（使用方式）
export const updateUseType = (data: any) => {
  return request({
    url: `${cardPrefix}/v1/niche/updateUseType`,
    method: 'POST',
    data,
  });
};

// 查询电话
export const queryCustomerPhone = (data: any) => {
  return request({
    url: `${cardPrefix}/customer/dialCustomerPhone`,
    method: 'POST',
    data,
  });
};
