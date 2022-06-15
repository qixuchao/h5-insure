/*
 * @Description: 用户模块
 * @Autor: kevin.liang
 * @Date: 2022-02-15 17:58:02
 * @LastEditors: kevin.liang
 * @LastEditTime: 2022-02-18 16:39:48
 */
import request from '../request';
import { LoginParamsType } from './user.d';

const loginPrefix = '/activity';
// 登录
export const accountLogin = (data: LoginParamsType) => {
  return request({
    url: `${loginPrefix}/v1/login/login`,
    method: 'POST',
    data,
  });
};
export function searchUserByToken(data = {}) {
  return request({
    url: `${loginPrefix}/v1/login/searchUserByToken`,
    method: 'POST',
    data,
  });
}
export default {};
// /**
//  * 账号密码登录
//  * @returns UseAxiosReturn
//  */
// export function loginPassword(data: AnyObject) {
//   return useAxiosApi(`${urlPrefix}/login/password`, { method: 'POST', data });
// }

// /**
//  * 获取验证码
//  * @returns UseAxiosReturn
//  */
// export function codeGet(data: AnyObject) {
//   return useAxiosApi(`${urlPrefix}/user/code/get`, { method: 'POST', data });
// }

// /**
//  * 重置密码
//  * @returns UseAxiosReturn
//  */
// export function passwordLookup(data: AnyObject) {
//   return useAxiosApi(`${urlPrefix}/user/password/lookup`, {
//     method: 'POST',
//     data,
//   });
// }

// /**
//  * 普通用户注册
//  * @returns UseAxiosReturn
//  */
// export function readerRegister(data: AnyObject) {
//   return useAxiosApi(`${urlPrefix}/user/reader/register`, {
//     method: 'POST',
//     data,
//   });
// }

// /**
//  * 首页获取作品列表
//  * @returns UseAxiosReturn
//  */
// export function homeList(params: AnyObject) {
//   return useAxiosApi(`${urlPrefix}/reader/work/home/list`, {
//     method: 'GET',
//     params,
//   });
// }

// /**
//  * 读者获取作品详情
//  * @returns UseAxiosReturn
//  */
// export function workDetail(params: AnyObject) {
//   return useAxiosApi(`${urlPrefix}/reader/work/detail`, {
//     method: 'GET',
//     params,
//   });
// }

// /**
//  * 获取合集相关作品
//  * @returns UseAxiosReturn
//  */
// export function subjectRelated(params: AnyObject) {
//   return useAxiosApi(`${urlPrefix}/reader/work/subject/related`, {
//     method: 'GET',
//     params,
//   });
// }

// /**
//  * 记录视频播放次数
//  * @returns UseAxiosReturn
//  */
// export function workPlay(data: AnyObject) {
//   return useAxiosApi(`${urlPrefix}/work/play`, { method: 'POST', data });
// }

// /**
//  * 修改用户头像
//  * @returns UseAxiosReturn
//  */
// export function avatarChange(data: AnyObject) {
//   return useAxiosApi(`${urlPrefix}/user/avatar/change`, {
//     method: 'POST',
//     data,
//   });
// }

// /**
//  * 修改用户头像背景色
//  * @returns UseAxiosReturn
//  */
// export function backcolorChange(data: AnyObject) {
//   return useAxiosApi(`${urlPrefix}/user/backcolor/change`, {
//     method: 'POST',
//     data,
//   });
// }

// /**
//  * 获取用户资料
//  * @returns UseAxiosReturn
//  */
// export function userGet(params: AnyObject) {
//   return useAxiosApi(`${urlPrefix}/user/get`, { method: 'GET', params });
// }

// /**
//  * 修改用户信息
//  * @returns UseAxiosReturn
//  */
// export function userModify(data: AnyObject) {
//   return useAxiosApi(`${urlPrefix}/user/modify`, { method: 'POST', data });
// }

// /**
//  * 修改密码
//  * @returns UseAxiosReturn
//  */
// export function passwordChange(data: AnyObject) {
//   return useAxiosApi(`${urlPrefix}/user/password/change`, {
//     method: 'POST',
//     data,
//   });
// }

// /**
//  * 用户退出登录
//  * @returns UseAxiosReturn
//  */
// export function userLogout(data: AnyObject) {
//   return useAxiosApi(`${urlPrefix}/user/logout`, { method: 'POST', data });
// }
