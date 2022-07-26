export interface GetCustomerQuestionsType {
  objectType: number | string;
  productCode: number | string;
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
