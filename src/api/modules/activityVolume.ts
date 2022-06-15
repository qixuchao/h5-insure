import request from '@/api/request';

// 周期查询类型
interface SearchPeriodType {
  agencyId?: string;
  hasOnlineQualification?: string;
  period?: string;
  subordinateAgencyList?: string[];
  // tenantId: number;
  // userId: string;
}

interface statisticCustomerType {
  agencyId?: string;
  beginTime?: string;
  channelId?: string;
  endTime?: string;
  isDirect?: string;
  period?: string;
  // tenantId: number;
  // userId: string;
  team: string;
  memberType: string;
  memberCode: string;
}

interface statisticQuotaType {
  agencyId?: string;
  beginTime?: string;
  channelId?: string;
  endTime?: string;
  isDirect?: string;
  period?: string;
  // tenantId?: number;
  // userId?: string;
  team: string;
  memberType: string;
  memberCode: string;
}

interface statisticWorkType {
  agencyId?: string;
  beginTime?: string;
  channelId?: string;
  endTime?: string;
  isDirect?: string;
  period?: string;
  // tenantId?: number;
  // userId?: string;
  team: string;
  memberType: string;
  memberCode: string;
}

interface nicheUsageType {
  startDate: string;
  endDate: string;
  branch?: string;
  userCode?: string;
}

// 活动量行为
// 周期查询
export const searchPeriod = (params: SearchPeriodType) => {
  return request.post(`/activity/goal/searchBaGoal`, {});
};

// 获客行为分析
export const statisticCustomer = (params: statisticCustomerType) => {
  return request.post(`/activity/statisticCustomer`, params);
};

// 个人活动量分析
export const statisticQuota = (params: statisticQuotaType) => {
  return request.post(`/activity/statisticQuota`, params);
};

// 工作数据分析
export const statisticWork = (params: statisticWorkType) => {
  return request.post(`/activity/statisticWork`, params);
};

// 获取商机使用数量
export const queryNicheUsageStatistics = (params: nicheUsageType) => {
  return request.post(`/activity/v1/niche/queryNicheUsageStatistics`, params);
};
