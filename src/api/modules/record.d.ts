export interface VisitItemType{
  clockInImages: string;
  customerId: string;
  customerType: string;
  dataSource: string;
  feedback: string;
  feedbackInputText: string;
  feedbackInputVoice: any;
  hasNext:string;
  latitude: string;
  longitude: string;
  result: string;
  resultInputText:string;
  resultInputVoice: any;
  scheduleContentDTO: any;
  userId: string;
  visitAddress: string;
  visitId: string;
  visitTime: string;
  visitType: string;
  visitAddressDetail: string;
}
export interface ScheduleContentAddReq {
  channelId: string;
  contentId: string;
  crossDayFlag: string;
  endTime: string;
  images: string;
  isAllDay: string;
  isDeleted: string;
  mold: string;
  otherType: string;
  remark: string;
  startTime: string;
  tenantId?: number;
  title: string;
  type: string;
  userId?: string;
  visitId: string;
}

export interface RequestVisitItemType {
  clockInImages?: string;
  feedback: string;
  feedbackInputType: string;
  feedbackRemark: string[];
  hasNext: string;
  latitude?: string;
  longitude?: string;
  result: string;
  resultInputType: string;
  resultRemark: string[];
  scheduleContentAddReq: ScheduleContentAddReq;
  visitAddress: string;
  visitTime: string;
  visitType: string;
}

export interface RequestParamsType{
  pageNum: number;
  pageSize: number;
  queryBean:any
}
export interface IssueInfoParamsType {
  parentCode: number;
  dictCode: string;
}
export interface ResponseData<T> {
  code: string;
  status: number;
  message: string;
  token?: string;
  data: T;
}
export interface IssueType {
  itemCode: string;
  itemName: string;
}

export interface AnswerObjType {
  itemCode?: string;
  message?: string;
  itemName?: string;
  dateTime?: string;
  startTime?: string;
  endTime?: string;
  fileList?:any;
  recordList?:any;
  point?:any;
  scheduleTitle?:string;
  voiceList?:any;
}

export interface QuestionType {
  icon: string;
  key: number;
  title: string;
  type: {
    name: string;
    params?: {
      dictCode: string;
      parentCode: number;
    };
  };
  answer: AnswerObjType;
  showEdit: boolean;
  groupInfo?: IssueType[];
}
