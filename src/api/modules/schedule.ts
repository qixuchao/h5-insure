import request from '../request';

const api = '/activity';

// 新增日程
export const saveSchedule = (params: any) => {
  return request.post(`${api}/schedule/saveSchedule`, params);
};

// 日程详情
export const searchScheduleDetail = (params: any) => {
  return request.post(`${api}/schedule/searchScheduleDetail`, params);
};

// 删除日程
export const removeSchedule = (params: any) => {
  return request.post(`${api}/schedule/removeSchedule`, params);
};

// 日程
export const searchDaySchedule = (params: any) => {
  return request.post(`${api}/schedule/searchDaySchedule`, params);
};
// 日程
export const searchMonthSchedule = (params: any) => {
  return request.post(`${api}/schedule/searchMonthSchedule`, params);
};

export const switchSchedule = (params: any) => {
  return request.post(`${api}/schedule/switchSchedule`, params);
};

// 检查日程
export const checkSaveSchedule = (params: any) => {
  return request.post(`${api}/schedule/checkSaveSchedule`, params);
};

// 上传图片

export const uploadBase64File = (params: any) => {
  return request.post(`${api}/ossService/uploadBase64File`, params);
};

// 标记
export const completeSchedule = (params: any) => {
  return request.post(`${api}/schedule/completeSchedule`, params);
};
export const getPathByKey = (params: any) => {
  return request({
    url: `${api}/ossService/getPathByKey`,
    method: 'GET',
    params,
  });
};
