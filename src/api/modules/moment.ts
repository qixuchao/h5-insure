import request from '../request';

const api = '/activity';

// 朋友圈角色列表查询
export const getRoleList = (params: any) => {
  return request.post(`${api}/v1/wechat/moments/getRoleList`, params);
};

// 朋友圈素材列表查询
export const getWechatMomentsList = (params: any) => {
  return request.post(`${api}/v1/wechat/moments/getWechatMomentsList`, params);
};

// 朋友圈素材详情查询;
export const getWechatMomentsDetail = (params: any) => {
  return request.post(`${api}/v1/wechat/moments/getWechatMomentsDetail`, params);
};

// 朋友圈分类;
export const querySingleList = (params: any) => {
  return request.post(`${api}/v1/querySingleList`, params);
};

// 分享
export const saveOrShareWechatMoments = (params: any) => {
  return request.post(`${api}/v1/wechat/moments/saveOrShareWechatMoments`, params);
};
