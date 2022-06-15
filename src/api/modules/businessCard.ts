/*
 * @Description: 个人名片
 * @Autor: kevin.liang
 * @Date: 2022-02-15 17:58:02
 * @LastEditors: kevin.liang
 * @LastEditTime: 2022-02-18 10:31:12
 */
import request from '@/api/request';
import { GetUserInfoParamsType } from './businessCard.d';

const cardPrefix = '/activity';
const HOST = ''; // 'http://59816-aquarius-commander.test.za-tech.net';

// 查看个人名片信息
export const getUserInfo = (params: any) => {
  return request({
    url: `${cardPrefix}/v1/vcard/findUserInfo`,
    method: 'GET',
    params,
  });
};

// 更新个人名片信息
export const modifyPersonal = (params: any) => {
  return request.post(`${cardPrefix}/v1/vcard/vcardEdit`, params);
};

// 电子名片查询
export const queryUserVcard = (params: any) => {
  return request({
    url: `${cardPrefix}/v1/vcard/queryUserVcard`,
    method: 'POST',
    params,
  });
};

// 分享电子名片查询
export const queryShareUserVcard = (params: any) => {
  return request.post(`${cardPrefix}/v1/vcard/queryShareUserVcard`, params);
};

// 擅长领域更新
export const savePersonalExpertise = (params: any) => {
  return request.post(`${cardPrefix}/v1/vcard/savePersonalExpertise`, params);
};

// 查询用户擅长领域预置
export const querySingleList = (params: any) => {
  return request.post(`${cardPrefix}/v1/querySingleList`, params);
};
// 个人风采更新
export const savePersonalProfile = (params: any) => {
  return request.post(`${cardPrefix}/v1/vcard/savePersonalProfile`, params);
};
// 获取访客列表
export const searchVisitorByPage = (params: any) => {
  return request.post(`${cardPrefix}/v1/vcard/searchVisitorByPage`, params);
};
// 电子名片点赞
export const thumbsVcardIcon = (params: any) => {
  return request.post(`${cardPrefix}/v1/vcard/thumbsVcardIcon`, params);
};
// 电子名片分享
export const vcardShare = (params: any) => {
  return request.post(`${cardPrefix}/v1/vcard/vcardShare`, params);
};

// 查看个人名片设置
export const findConfig = (params: any) => {
  return request.get(`${cardPrefix}/v1/vcard/findConfig`, params);
};

// 保存个人名片设置
export const saveConfig = (params: any) => {
  return request.post(`${cardPrefix}/v1/vcard/saveConfig`, params);
};

// 上传接口
export const uploadBase64File = (params: any) => {
  return request.post(`${cardPrefix}/ossService/uploadBase64File`, params);
};

// 拿到key请求oss 拿到资源路径
export function getPathByKey(params: any) {
  return request({
    url: `${cardPrefix}/ossService/getPathByKey`,
    method: 'GET',
    params,
  });
}
