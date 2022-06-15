import request from '@/api/request';
import { GetArticleListParamsType } from './article.d';

const cardPrefix = '/activity';

// 首页查询目标
export const getTarget = (data: any) => {
  return request({
    url: `${cardPrefix}/goal/home`,
    method: 'POST',
    data,
  });
};

// 恢复默认目标
export const resetDefaultTarget = (data: any) => {
  return request({
    url: `${cardPrefix}/goal/resetGoal`,
    method: 'POST',
    data,
  });
};

// 保存目标设置
export const saveTarget = (data: any) => {
  return request({
    url: `${cardPrefix}/goal/saveGoal`,
    method: 'POST',
    data,
  });
};

// 查询目标详情
export const searchTargetDetail = (data: any) => {
  return request({
    url: `${cardPrefix}/goal/searchGoalDetail`,
    method: 'POST',
    data,
  });
};

// 团队目标汇总
export const getTeamTarget = (data: any) => {
  return request({
    url: `${cardPrefix}/goal/teamGoal`,
    method: 'POST',
    data,
  });
};

// 查询成员
export const searchMember = (data: any) => {
  return request({
    url: `${cardPrefix}/goal/searchMember`,
    method: 'POST',
    data,
  });
};
