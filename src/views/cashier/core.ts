/*
 * @Author: zhaopu
 * @Date: 2022-11-26 21:01:39
 * @LastEditors: kevin.liang
 * @LastEditTime: 2022-11-28 11:58:39
 * @Description:
 */
import { GetPayUrlParam, PayParam, PayResult } from '@/api/modules/cashier.data';
import { getPayUrl, loadPayment, pay } from '@/api/modules/cashier';

export const isWeiXin = navigator.userAgent.indexOf('MicroMessenger') > -1;

// 获取 wxCode，去调用支付接口
export const getWxAuthCode = (params: { appId: string; url: string }) => {
  return `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${params.appId}&redirect_uri=${params.url}&response_type=code&scope=snsapi_base&state=0#wechat_redirect`;
};

export const usePay = () => {
  if (isWeiXin) {
    console.log('直接调用微信支付');
  } else {
    console.log('跳转收银台页面');
  }
};
export const useSign = (data: any, callback: (result: PayResult) => void) => {
  // 微信环境
  if (isWeiXin) {
    console.log('走微信js签约');
  } else {
    console.log('走微信H5签约');
  }
  pay(data).then((res) => {
    if (res.code === '10000') {
      callback(res.data);
    }
  });
};

export const sendPay = ({ payChannel }: { payChannel: string; srcType: string }) => {
  // 微信环境
  if (isWeiXin) {
    console.log('走支付逻辑');
  } else {
    console.log('走微签约逻辑');
  }
};
