
export interface SearchIconType {
  tenantId?: number;
}

export interface VisitorType {
  tenantId?: number;
  userId?: string;
}
// ScheduleType
export interface ScheduleType {
  // tenantId: number;
  // userId: string;
  day: string;
  status: string
}



interface statisticQuotaType {
  agencyId?: string;
  beginTime?: string;
  channelId?: string;
  endTime?: string;
  isDirect?: string;
  period?: string;
  tenantId?: number;
  userId?: string;
}
export interface PageGoalType {
  tenantId?: number;
  userId?: string;
}