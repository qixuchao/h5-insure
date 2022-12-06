import { Toast, Dialog } from 'vant';
/*
 * @Author: za-qixuchao qixuchao@zhongan.com
 * @Date: 2022-12-01 11:06:22
 * @LastEditors: zhaopu
 * @LastEditTime: 2022-12-06 17:46:16
 * @FilePath: /zat-planet-h5-cloud-insure/src/utils/nextStep.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { nextStep } from '@/api';
import router from '@/router';
import { sendPay } from '@/views/cashier/core';
import { PAGE_ACTION_TYPE_ENUM } from '@/common/constants/index';

export const nextStepOperate = async (params: any, cb?: (data: any, pageAction: string) => void) => {
  const currentParams = params;
  // 判断订单是否生成,增加订单详情的跳转连接
  const { extInfo, orderNo, tenantOrderInsuredList, tenantId } = currentParams || {};
  if (currentParams.orderNo) {
    const { iseeBizNo } = extInfo || {};
    const { productCode } = tenantOrderInsuredList?.[0]?.tenantOrderProductList?.[0] || {};
    const redirectUrl = `${`${window.location.origin}/baseInsurance/orderDetail`}?orderNo=${orderNo}&tenantId=${tenantId}&iseeBizNo=${iseeBizNo}&productCode=${productCode}`;
    currentParams.extInfo.redirectUrl = redirectUrl;
  }
  currentParams.extInfo.iseeBizNo = window.iseeBizNo;
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
      if (extInfo.templateId === '3') {
        Dialog.confirm({
          title: '提示',
          className: 'xinao-custom-dialog',
          teleport: '#xinaoDialog',
          message: `该被保人已存在一笔待支付的订单`,
          confirmButtonText: '取消',
        }).then(() => {});
      } else {
        Dialog.confirm({
          title: '提示',
          className: 'xinao-custom-dialog',
          teleport: '#xinaoDialog',
          message: `该被保人已存在一笔待支付的订单`,
          confirmButtonText: '去支付',
        }).then(() => {
          if (resData.orderNo) {
            router.push(
              `/baseInsurance/orderDetail?orderNo=${resData.orderNo}&tenantId=${params.tenantId}&iseeBizNo=${params.extInfo.iseeBizNo}&productCode=${params.productCode}`,
            );
          }
          // sendPay(resData?.paymentUrl);
        });
      }
    }
  }
};

export default {};
