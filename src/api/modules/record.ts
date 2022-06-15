import request from '../request';
import { IssueInfoParamsType, RequestParamsType, RequestVisitItemType } from './record.d';

const cardPrefix = '/activity';

export const getIssueInfo = (data: IssueInfoParamsType | undefined) => {
  return request({
    url: `${cardPrefix}/v1/querySingleList`,
    method: 'POST',
    data,
  });
};
export const searchVisitWithPage = (data: RequestParamsType) => {
  return request({
    url: `${cardPrefix}/visit/searchVisitWithPage`,
    method: 'POST',
    data,
  });
};
export const removeVisitRecord = (data: { visitId: string }) => {
  return request({
    url: `${cardPrefix}/visit/removeVisitRecord`,
    method: 'POST',
    data,
  });
};
export const searchVisitDetail = (data: { visitId: string }) => {
  return request({
    url: `${cardPrefix}/visit/searchVisitDetail`,
    method: 'POST',
    data,
  });
};
export const saveOrUpdateVisitRecord = (data: any) => {
  return request({
    url: `${cardPrefix}/visit/saveOrUpdateVisitRecord`,
    method: 'POST',
    data,
  });
};
