import request from './request';

export const getDic = (data = {}) => request.post('/api/gateway/system/dict/v2/queryDictInfo', data);

export default {};
