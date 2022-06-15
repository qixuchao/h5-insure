import request from '@/api/request';
import { IPageResponse, IResponse } from './common.d';

const prefix = '/activity';

export interface IDaily {
  agencyName: string;
  dailyId: string;
  teamName: string;
  tenantId?: number;
  textList: string[];
  userId?: string;
  userName: string;
  voiceDTOList: Array<{
    voiceDuration: string;
    voiceUrl: string;
  }>;
  voiceList: string[];
  workDay: string;
}

// 按人员视图
export interface IDailyPersonalView {
  agencyName: string;
  levelUs: string;
  nvm: number;
  teamName: string;
  tenantId?: number;
  userId?: string;
  userName: string;
}

// 分页查询-个人
export const getDailyList = (data: any) => {
  return request.post<IPageResponse<IDaily>>(`${prefix}/v1/daily/record/searchByPageWithPersonal`, data);
};

// 分页查询-人员视图
export const getDailyPersonalView = (data: any) => {
  return request.post<IPageResponse<IDailyPersonalView>>(`${prefix}/v1/daily/record/searchByPageWithPeopleView`, data);
};

// 分页查询-日志视图
export const getDailyDailyView = (data: any) => {
  return request.post(`${prefix}/v1/daily/record/searchByPageWithLogView`, data);
};

// 保存日志
export const saveDaily = (data: any) => {
  return request.post<IResponse<string>>(`${prefix}/v1/daily/record/saveOrUpdate`, data);
};

// 删除日志
export const deleteDaily = (id: string) => {
  return request.get<IResponse<string>>(`${prefix}/v1/daily/record/removeByDailyId?dailyId=${id}`);
};

// 查询日志详情
export const queryDailyDetail = (data: any) => {
  return request.post<
    IResponse<{
      tenantId?: number;
      userId?: string;
      userName: string;
      dailyId: string;
      workDay: string;
      detailList: Array<{
        tenantId?: number;
        userId?: string;
        userName?: any;
        detailId: string;
        dailyId: string;
        tagCode: string;
        tagName: string;
        inputType: string;
        content: string;
        contentVoice: {
          voiceUrl: string;
          voiceDuration: string;
        };
        isDeleted: string;
        creator: string;
        gmtCreated: string;
        modifier: string;
        gmtModified: string;
      }>;
    }>
  >(`${prefix}/v1/daily/record/findByCondition`, data);
};

// 查询日志类型
export const queryDailyType = () => {
  return request.post<
    IResponse<
      Array<{
        dictCode: string;
        extra: any;
        itemCode: string;
        itemList: any[];
        itemName: string;
        itemOrder: number;
        parentCode: string;
        status: string;
      }>
    >
  >(`${prefix}/v1/querySingleList`, { dictCode: 'ACTIVITY_LOG_TAG' });
};
