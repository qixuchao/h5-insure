export interface GetMarketerNoticesType {
  insureCode: string;
  noticeType: string;
  objectId: string;
  objectType: string;
  orderNo: string;
  tenantId: number;
}

export interface GetMarketerNoticesResponse {
  insureCode: string;
  isDone: number;
  materialSource: string;
  noticeObject: string;
}
