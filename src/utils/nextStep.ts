/*
 * @Author: za-qixuchao qixuchao@zhongan.com
 * @Date: 2022-12-01 11:06:22
 * @LastEditors: za-qixuchao qixuchao@zhongan.com
 * @LastEditTime: 2022-12-01 13:02:21
 * @FilePath: /zat-planet-h5-cloud-insure/src/utils/nextStep.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Toast } from 'vant';
import { nextStep } from '@/api';

const PAGE_ACTION_TYPE_ENUM = {
  ALERT: 'alert',
  JUMP_URL: 'jumpToUrl',
  JUMP_PAGE: 'jumpToPage',
};

const PAY_JUMP_TYPE_ENUM = {
  LINK: 1,
  FORM: 2,
};

export const nextStepOperate = async (params: any) => {
  const { code, data } = await nextStep(params);
  if (code === '10000') {
    // const { pageAction, message, data: resData } = data.pageAction || {};
    // // 接口报错了
    // if (pageAction === PAGE_ACTION_TYPE_ENUM.ALERT) {
    //   Toast(message);
    //   return;
    // }
    // // 支付跳转
    // if (pageAction === PAGE_ACTION_TYPE_ENUM.JUMP_URL) {
    //   if (resData.type === PAY_JUMP_TYPE_ENUM.LINK) {
    //     window.open(resData.payUrl);
    //   }
    // }
  }
};

export default {};
