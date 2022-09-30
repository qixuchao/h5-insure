/*
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-08-23 13:55:39
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-09-28 11:42:45
 * @FilePath: /zat-planet-h5-cloud-insure/src/api/modules/phoneVerify.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '../request1';

// 发送短信
export const sendCode = (mobile: string) => {
  return request<ResponseData>({
    url: '/api/app/insure/insurance/sendSmsCodeToC',
    method: 'POST',
    data: { params: { mobile } },
  });
};

export const checkCode = (mobile: string, smsCode: string) => {
  return request<ResponseData<boolean>>({
    url: '/api/app/insure/insurance/checkSmsCode',
    method: 'POST',
    data: { params: { mobile, smsCode } },
  });
};
