import { Toast, Dialog } from 'vant';
import { nextStep } from '@/api';
import { getQueryObject } from '@/utils/index';
import { sendPay } from '@/views/cashier/core';
import { ALERT_TYPE_ENUM, PAGE_ACTION_TYPE_ENUM } from '@/common/constants/index';
import { PAGE_ROUTE_ENUMS } from './templates/lianLong/constants';
import router from '@/router';
import { localStore } from '@/hooks/useStorage';
import { LIAN_STORAGE_KEY } from '@/common/constants/lian';

const { VITE_BASE } = import.meta.env;

export const nextStepOperate = async (
  params: any,
  cb?: (data: any, pageAction: string, msg?: string) => void,
  route?: any,
  loading?: boolean,
) => {
  const currentParams = params;
  // 判断订单是否生成,增加订单详情的跳转连接
  const { extInfo, orderNo, insuredList, tenantId } = currentParams || {};
  const { iseeBizNo, templateId } = extInfo || {};
  if (orderNo) {
    const { productCode } = insuredList?.[0]?.productList?.[0] || {};
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

  return nextStep(currentParams, loading).then(({ code, data }) => {
    if (code === '10000') {
      const { pageAction, message, data: resData } = data.pageAction || {};
      cb?.(resData, pageAction, message);
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
          localStore.set(`${LIAN_STORAGE_KEY}_underwriteResult`, { [ALERT_TYPE_ENUM.SIGN_FAIL]: message });
          router.push({
            path: PAGE_ROUTE_ENUMS.signUnderWriteResult,
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
        } else if (
          [ALERT_TYPE_ENUM.LONG_HOLDER_QUESTIONNAIRE, ALERT_TYPE_ENUM.LONG_INSURED_QUESTIONNAIRE].includes(
            resData.alertType,
          )
        ) {
          Dialog.confirm({
            confirmButtonText: '返回修改',
            message,
          }).then(() => {
            if (ALERT_TYPE_ENUM.LONG_INSURED_QUESTIONNAIRE === resData.alertType) {
              delete route.query.questionnaireId;
              router.push({
                path: PAGE_ROUTE_ENUMS.questionNotice,
                query: route.query,
              });
            } else {
              router.push({
                path: `${PAGE_ROUTE_ENUMS.questionNotice}/${route.query.questionnaireId}`,
                query: route.query,
              });
            }
          });
        } else if (resData.alertType === ALERT_TYPE_ENUM.UNDER_WRITE_FAIL) {
          localStore.set(`${LIAN_STORAGE_KEY}_underwriteResult`, { [ALERT_TYPE_ENUM.UNDER_WRITE_FAIL]: message });
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
  });
};

export default {};
