import { Toast, Dialog } from 'vant';
/*
 * @Author: za-qixuchao qixuchao@zhongan.com
 * @Date: 2022-12-01 11:06:22
 * @LastEditors: kevin.liang
 * @LastEditTime: 2023-02-22 17:44:55
 * @FilePath: /zat-planet-h5-cloud-insure/src/utils/nextStep.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useRoute, useRouter } from 'vue-router';
import { nextStep } from '@/api';
import { getQueryObject } from '@/utils/index';
import { sendPay } from '@/views/cashier/core';
import { ALERT_TYPE_ENUM, PAGE_ACTION_TYPE_ENUM } from '@/common/constants/index';
import { TEMPLATE_TYPE_ENUM } from './constant';
import { PAGE_ROUTE_ENUMS } from './templates/lianLong/constants';

const { VITE_BASE } = import.meta.env;
const router = useRouter();
const route = useRoute();

export const nextStepOperate = async (params: any, cb?: (data: any, pageAction: string) => void) => {
  const currentParams = params;
  // 判断订单是否生成,增加订单详情的跳转连接
  const { extInfo, orderNo, tenantOrderInsuredList, tenantId } = currentParams || {};
  const { iseeBizNo, templateId } = extInfo || {};
  if (orderNo) {
    const { productCode } = tenantOrderInsuredList?.[0]?.tenantOrderProductList?.[0] || {};
    let redirectUrl = `${`${window.location.origin}${VITE_BASE}baseInsurance/orderDetail`}?orderNo=${orderNo}&tenantId=${tenantId}&ISEE_BIZ=${iseeBizNo}&productCode=${productCode}`;
    if (templateId > 200) {
      redirectUrl = `${`${window.location.origin}${VITE_BASE}baseInsurance/long/result`}?orderNo=${orderNo}&templateId=${templateId}&tenantId=${tenantId}&ISEE_BIZ=${iseeBizNo}&productCode=${productCode}`;
    }

    currentParams.extInfo.redirectUrl = redirectUrl;
  }
  const queryObj = getQueryObject();
  //  从链接上取三方扩展字段,带到订单中
  if (queryObj.ext) {
    try {
      currentParams.ext = queryObj.ext;
    } catch (err) {
      console.error('ext 参数格式错误', queryObj.ext, err);
    }
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
      if (resData.alertType === ALERT_TYPE_ENUM.PAY_AUTH) {
        Dialog.confirm({
          title: '投保提示',
          message:
            '根据央行发布《关于规范支付创新业务的通知》，明确代收服务机构应当要求收款人事先与付款人签订收款协议，取得持卡人授权，并在代收交易处理中验证协议关系，银行与持卡人的直接授权。',
          confirmButtonText: '去鉴权',
        }).then(() => {
          router.push({
            path: PAGE_ROUTE_ENUMS.payAuth,
            query: route.query,
          });
        });
        // 核保不通过走人核
      } else if (resData.alertType === ALERT_TYPE_ENUM.SIGN_FAIL) {
        router.push({
          path: PAGE_ROUTE_ENUMS.underWriteResult,
          query: {
            ...route.query,
            underwriteStatus: ALERT_TYPE_ENUM.SIGN_FAIL,
          },
        });
      } else if (resData.alertType === ALERT_TYPE_ENUM.PAY_FAIL) {
        router.push({
          path: PAGE_ROUTE_ENUMS.updateBankInfo,
          query: route.query,
        });
      } else if (resData.alertType === ALERT_TYPE_ENUM.QUESTIONNAIRE) {
        Dialog.confirm({
          confirmButtonText: '返回修改',
          message: '当前投被保人年龄、性别不符合健康告知规则，请修改健康告知',
        }).then(() => {
          router.push({
            path: PAGE_ROUTE_ENUMS.premiumTrial,
            query: route.query,
          });
        });
      } else if (resData.alertType === ALERT_TYPE_ENUM.UNDER_WRITE_FAIL) {
        router.push({
          path: PAGE_ROUTE_ENUMS.underWriteResult,
          query: {
            ...route.query,
            underwriteStatus: ALERT_TYPE_ENUM.UNDER_WRITE_FAIL,
          },
        });
      }
    }
  }
};

export default {};
