import request from './request';

// 获取销售人员详情
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
  request<any>({
    url: '/api/app/insure/insurance/wx/js/getLoginInfo',
    method: 'POST',
    data,
  });

// 下载电子保单
export const downloadPolicyInfo = (data) =>
  request<string>({
    url: '/api/app/policy/downloadEPolicy',
    method: 'POST',
    data,
  });
export default {};
