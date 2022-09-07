/*
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-06-21 19:34:02
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-07-18 14:42:22
 * @FilePath: /zat-planet-h5-cloud-insure/src/api/modules/wechat.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/* eslint-disable import/prefer-default-export */
import request from '@/api/request';

// 获取微信jstoken
export const getJssdkSignature = (data: any) => {
  return request.post(`/api/app/client/activity/getJssdkSignature`, data);
};

export default {};
