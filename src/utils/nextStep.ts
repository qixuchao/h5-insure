/*
 * @Author: za-qixuchao qixuchao@zhongan.com
 * @Date: 2022-12-01 11:06:22
 * @LastEditors: za-qixuchao qixuchao@zhongan.com
 * @LastEditTime: 2022-12-01 20:06:19
 * @FilePath: /zat-planet-h5-cloud-insure/src/utils/nextStep.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Toast, Dialog } from 'vant';
import { nextStep } from '@/api';

const PAGE_ACTION_TYPE_ENUM = {
  ALERT: 'alert',
  JUMP_URL: 'jumpToUrl',
  JUMP_PAGE: 'jumpToPage',
  JUMP_ALERT: 'jumpToAlert',
};

const PAY_JUMP_TYPE_ENUM = {
  LINK: 1,
  FORM: 2,
};

export const nextStepOperate = async (params: any, cb?: (data: any) => void) => {
  const { code, data } = await nextStep(params);
  if (code === '10000') {
    cb?.(data);
    const { pageAction, message, data: resData } = data.pageAction || {};
    // 接口报错了
    if (pageAction === PAGE_ACTION_TYPE_ENUM.ALERT) {
      Toast(message);
      return;
    }
    // 支付跳转
    if (pageAction === PAGE_ACTION_TYPE_ENUM.JUMP_URL) {
      if (resData?.type === PAY_JUMP_TYPE_ENUM.LINK) {
        window.open(resData?.payUrl);
      }
    }
    // 去支付待支付的订单
    if (pageAction === PAGE_ACTION_TYPE_ENUM.JUMP_ALERT) {
      if (resData?.type === PAY_JUMP_TYPE_ENUM.LINK) {
        Dialog.confirm({
          title: '提示',
          message: `该被保人已存在一笔待支付的订单`,
          confirmButtonText: '去支付',
        }).then(() => {
          window.open(resData?.payUrl);
        });
      }
    }
  }
};

export default {};
