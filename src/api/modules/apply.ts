import request from '../request';

const api = '/activity';

export const searchList = (data = {}) => {
  return request.post(`${api}/v1/activities/search`, data);
};
export const queryFullDict = () => {
  return request.post(`${api}/queryFullDict`, {
    dictCode: 'activityTypeKA',
  });
};
export const saveApply = (data = {}) => {
  return request.post(`${api}/v1/activities/save`, data);
};

export const findDetailById = (data = {}) => {
  return request.post(`${api}/v1/activities/findDetailById`, data);
};
