import request from './request';

export const getDic = (data = {}) => request.post('/api/app/queryDictInfo', data);

export default {};
