import request from '@/api/request';
import { IPageResponse, IResponse } from './common.d';

const prefix = '/activity';

export interface IAgency {
  agencyId?: string;
  agencyLevel?: string;
  agencyName?: string;
  memberNumber?: number;
  memberCode: string;
  hasChild?: boolean;
  hasSubordinate?: boolean;
  memberType: string;
  unionCode?: string;
}

export interface IAgencyUser {
  agency: {
    agencyId: string;
    agencyLevel: string;
    agencyName: string;
    hasSubordinate: boolean;
    memberNumber: number;
  };
  agencyList: string[];
  channel: {
    channelId: string;
    channelName: string;
  };
  hasOnlineQualification: string;
  levelCn: string;
  levelUs: string;
  nature: string;
  openId: string;
  teamName: string;
  tenantId: number;
  userId: string;
  userName: string;
  userRole: string;
}

export const queryAgency = (params = {}) => {
  const url = `${prefix}/agency/queryJurisdictionAgency`;
  return request.post<IResponse<IAgency[]>>(url, params);
};

export const queryAgencyUser = (params = {}) => {
  const url = `${prefix}/user/queryAgencyUser`;
  return request.post<IPageResponse<IAgencyUser>>(url, params);
};

export const queryAgencyUserCount = (params = {}) => {
  const url = `${prefix}/agency/queryMemberSize`;
  return request.post<IPageResponse<any>>(url, params);
};
