/*
 * @Author: za-qixuchao qixuchao@zhongan.com
 * @Date: 2022-12-01 11:06:22
 * @LastEditors: kevin.liang
 * @LastEditTime: 2022-12-02 18:41:58
 * @FilePath: /zat-planet-h5-cloud-insure/src/utils/nextStep.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Toast, Dialog } from 'vant';
import { nextStep } from '@/api';
import { sendPay } from '@/views/cashier/core';
import { PAGE_ACTION_TYPE_ENUM } from '@/common/constants/index';

export const nextStepOperate = async (params: any, cb?: (data: any, pageAction: string) => void) => {
  const currentParams = params;
  // 判断订单是否生成,增加订单详情的跳转连接
  if (currentParams.orderNo) {
    const { extInfo, orderNo, tenantOrderInsuredList, tenantId } = currentParams || {};
    const { iseeBizNo } = extInfo || {};
    const { productCode } = tenantOrderInsuredList?.[0]?.tenantOrderProductList?.[0] || {};
    const redirectUrl = `${
      window.location.origin + window.location.pathname
    }?orderNo=${orderNo}&tenantId=${tenantId}&iseeBizNo=${iseeBizNo}&productCode=${productCode}`;
    currentParams.extInfo.redirectUrl = redirectUrl;
  }
  const { code, data } = await nextStep(currentParams);
  if (code === '10000') {
    const { pageAction, message, data: resData } = data.pageAction || {};
    cb?.(resData, pageAction);
    // 接口报错了
    if (pageAction === PAGE_ACTION_TYPE_ENUM.ALERT) {
      Toast(message);
    }
    // 支付跳转
    if (pageAction === PAGE_ACTION_TYPE_ENUM.JUMP_URL) {
      sendPay(resData?.paymentUrl);
    }
    // 去支付待支付的订单
    if (pageAction === PAGE_ACTION_TYPE_ENUM.JUMP_ALERT) {
      Dialog.confirm({
        title: '提示',
        message: `该被保人已存在一笔待支付的订单`,
        confirmButtonText: '去支付',
      }).then(() => {
        sendPay(resData?.paymentUrl);
      });
    }
  }
};

export default {};
