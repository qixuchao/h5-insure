export interface ListCustomerQuestionsProps {
  insurerCode: string;
  noticeType: number;
  objectId: string;
  objectType: number;
  orderNo: string;
  productCategory: number;
  tenantId: number;
}

export interface ListCustomerQuestionsResponse {
  gmtCreated: string;
  id: number;
  insurerCode: string;
  isDone: number;
  objectType: number;
  productCategory: number;
  questionnaireCode: string;
  questionnaireName: string;
  questionnaireType: number;
  tenantId: number;
  title: string;
}

export interface GetProductManuscriptsProps {
  id: number;
  tenantId: number;
  questionnaireCode: string;
  questionnaireName: string;
  questionnaireType: number;
  insurerCode: string;
  title: string;
  productCategory: number;
  objectType: number;
  gmtCreated: string;
  isDone: number;
}

export interface GetCustomerQuestionsDetailProps {
  insurerCode: string;
  noticeType: number;
  objectId: string;
  objectType: number;
  orderNo: string;
  productCategory: number;
  tenantId: number;
}
export interface GetCustomerQuestionsDetailResponse {
  content: string;
  options: string;
  position: number;
  questionType: number;
  questionnaireId: number;
  textType: number;
  title: string;
}

export interface UpdateOrderNoticeStatusProps {
  isDone: number;
  noticeType: number;
  objectId: string;
  objectType: number;
  orderId: number | string;
  tenantId: number | string;
}
