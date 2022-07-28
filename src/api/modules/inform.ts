import request from '@/api/request';
import { GetCustomerQuestionsType, GetCustomerQuestionsResponse } from './inform.data';

// 告知相关接口
const API_PREFIXED = `/api/app/insure/insurance`;

// 在线投保 - 问卷告知详情;
export const getCustomerQuestions = (params: Partial<GetCustomerQuestionsType>) =>
  request.get<GetCustomerQuestionsType, ResponseData<GetCustomerQuestionsResponse[]>>(
    `${API_PREFIXED}/getCustomerQuestions`,
    { params },
  );

export default {};
