import request from '@/api/request';
import { QueryProposalProductListType } from './product.data';

const API_PREFIXED = `/api/proposal`;

// H5端查询计划书产品列表
export const queryProposalProductList = (data: QueryProposalProductListType) =>
  request.post<QueryProposalProductListType, ResponseData<any>>(`${API_PREFIXED}/queryProposalProductList`, data);

export default {};
