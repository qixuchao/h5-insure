import request from './request';

// 获取代理人详情
export const queryAgentInfo = (data) =>
  request({
    url: '/api/app/policy/agent/query',
    method: 'POST',
    data,
  });

// 获取保单详情
export const queryPolicyInfo = (data) =>
  request({
    url: '/api/app/policy/history/query',
    method: 'POST',
    data,
  });

export const queryLoginInfo = (data) =>
  request({
    url: '/api/app/insure/insurance/wx/js/getLoginInfo',
    method: 'POST',
    data,
  });

export default {};
