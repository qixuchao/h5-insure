export interface GetCustomerQuestionsType {
  insurerCode: string;
  noticeType: number;
  objectId: string;
  objectType: number;
  orderId: number;
  productCategory: number;
}

export interface GetCustomerQuestionsResponse {
  content: string;
  options: string;
  position: number;
  questionType: number;
  questionnaireId: number;
  textType: number;
  title: string;
}
