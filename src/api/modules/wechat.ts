/*
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-06-21 19:34:02
 * @LastEditors: kevin.liang
 * @LastEditTime: 2022-11-26 19:51:36
 * @FilePath: /zat-planet-h5-cloud-insure/src/api/modules/wechat.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/* eslint-disable import/prefer-default-export */
import request from '@/api/request';

interface WxSignature {
  appid: string;
  timestamp: string;
  nonceStr: string;
  signature: string;
}
// 获取微信jstoken(借用展业的)
export const getJssdkSignature = (data = {}) =>
  request<WxSignature>({ url: `/api/app/client/activity/getJssdkSignature`, method: 'POST', data });

// 投保中的微信授权
export const getWxJsSdkSignature = (data: { url: string; tenantId?: string }) => {
  return request<WxSignature>({ url: `/api/app/insure/insurance/wx/js/getConfigParams`, method: 'POST', data });
};

export default {};
