import request from '../request';
import { ScheduleType, SearchIconType, VisitorType, statisticQuotaType, PageGoalType } from './activity.d';

const api = '/activity';

// 查询首页icon
export const searchIcon = (data: SearchIconType) => {
  return request.get(`${api}/icon/searchIcon/${data.tenantId}`);
};

// 首页访客
export const queryVisitor = (data: VisitorType) => {
  return request.post(`${api}/homePageVisitorDynamics`, data);
};

// 首页日程安排
export const querySchedule = (data: ScheduleType) => {
  return request.post(`${api}/schedule/homePageSchedule`, data);
};

// 首页个人活动量分析
export const queryAnalysis = (params: statisticQuotaType) => {
  return request.post(`/activity/personalActivityAnalysis`, params);
};

// 活动量行为
// 周期查询
export const searchHomeGoal = (params: PageGoalType) => {
  return request.post(`/activity/goal/homePageGoal`, params);
};
