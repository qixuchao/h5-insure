import { Toast, Dialog } from 'vant';
/*
 * @Author: za-qixuchao qixuchao@zhongan.com
 * @Date: 2022-12-01 11:06:22
 * @LastEditors: kevin.liang
 * @LastEditTime: 2023-02-13 15:42:58
 * @FilePath: /zat-planet-h5-cloud-insure/src/utils/nextStep.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { nextStep } from '@/api';
import { getQueryObject } from '@/utils/index';
import { sendPay } from '@/views/cashier/core';
import { PAGE_ACTION_TYPE_ENUM } from '@/common/constants/index';

const { VITE_BASE } = import.meta.env;

export const nextStepOperate = async (params: any, cb?: (data: any, pageAction: string) => void) => {
  const currentParams = params;
  // 判断订单是否生成,增加订单详情的跳转连接
  const { extInfo, orderNo, tenantOrderInsuredList, tenantId } = currentParams || {};
  const { iseeBizNo } = extInfo || {};
  if (orderNo) {
    const { productCode } = tenantOrderInsuredList?.[0]?.tenantOrderProductList?.[0] || {};
    const redirectUrl = `${`${window.location.origin}${VITE_BASE}baseInsurance/orderDetail`}?orderNo=${orderNo}&tenantId=${tenantId}&ISEE_BIZ=${iseeBizNo}&productCode=${productCode}`;
    currentParams.extInfo.redirectUrl = redirectUrl;
  }
  // const queryObj = getQueryObject();
  // //  从链接上取三方扩展字段,带到订单中
  // if (queryObj.thirdExtInfo) {
  //   try {
  //     currentParams.thirdExtInfo = JSON.parse(decodeURIComponent(queryObj.thirdExtInfo));
  //   } catch (err) {
  //     console.error('thirdExtInfo 参数格式错误', queryObj.thirdExtInfo, err);
  //   }
  // }

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
        Dialog.alert({
          title: '提示',
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
            // router.push({ // 在keep-alive时跳转有点问题，改用 href
            //   path: '/baseInsurance/orderDetail',
            //   query: {
            //     // orderNo: resData.orderNo,
            //     // tenantId: params.tenantId,
            //     // ISEE_BIZ: params.extInfo.iseeBizNo,
            //     // productCode: params.productCode,
            //   },
            // });
            window.location.href = `${`${window.location.origin}${VITE_BASE}baseInsurance/orderDetail`}?orderNo=${
              resData.orderNo
            }&tenantId=${params.tenantId}&ISEE_BIZ=${params.extInfo.iseeBizNo}&productCode=${params.productCode}`;
          }
          // sendPay(resData?.paymentUrl);
        });
      }
    }
  }
};

export default {};
