/*
 * @Author: za-qixuchao qixuchao@zhongan.com
 * @Date: 2022-12-01 11:06:22
 * @LastEditors: za-qixuchao qixuchao@zhongan.com
 * @LastEditTime: 2022-12-02 12:52:53
 * @FilePath: /zat-planet-h5-cloud-insure/src/utils/nextStep.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Toast, Dialog } from 'vant';
import { nextStep } from '@/api';
import { sendPay } from '@/views/cashier/core';
import { PAGE_ACTION_TYPE_ENUM } from '@/common/constants/index';

export const nextStepOperate = async (params: any, cb?: (data: any, pageAction: string) => void) => {
  const { code, data } = await nextStep(params);
  if (code === '10000') {
    const { pageAction, message, data: resData } = data.pageAction || {};
    cb?.(resData, pageAction);
    // 接口报错了
    if (pageAction === PAGE_ACTION_TYPE_ENUM.ALERT) {
      Toast(message);
    }
    // 支付跳转
    if (pageAction === PAGE_ACTION_TYPE_ENUM.JUMP_URL) {
      sendPay(resData?.payUrl);
    }
    // 去支付待支付的订单
    if (pageAction === PAGE_ACTION_TYPE_ENUM.JUMP_ALERT) {
      Dialog.confirm({
        title: '提示',
        message: `该被保人已存在一笔待支付的订单`,
        confirmButtonText: '去支付',
      }).then(() => {
        sendPay(resData?.payUrl);
      });
    }
  }
};

export default {};
