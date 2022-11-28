/*
 * @Author: zhaopu
 * @Date: 2022-11-26 21:01:39
 * @LastEditors: kevin.liang
 * @LastEditTime: 2022-11-28 17:18:44
 * @Description:
 */
import wx from 'weixin-js-sdk';
import qs from 'qs';
import router from '@/router/index';
import { GetPayUrlParam, PayParam, PayResult } from '@/api/modules/cashier.data';
import { getPayUrl, loadPayment, pay } from '@/api/modules/cashier';

export const isWeiXin = navigator.userAgent.indexOf('MicroMessenger') > -1;

// 获取 wxCode，去调用支付接口
export const getWxAuthCode = (params: { appId: string; url: string }) => {
  return `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${params.appId}&redirect_uri=${params.url}&response_type=code&scope=snsapi_base&state=0#wechat_redirect`;
};

/**
 * 判断当前支付方式是签约还是直接支付
 * @param payWay 支付方式 'wxSign' | 'aliSign' | 'wxpay' | 'alipay'
 */
const isSignWay = (payWay: string) => {
  return payWay.toLocaleLowerCase().indexOf('sign') > 0;
};

export const usePay = (payParam: PayParam) => {
  pay({
    ...payParam,
    extraInfo: JSON.stringify({
      wxCode: payParam.code,
    }),
  }).then((res) => {
    const { code, message, data } = res;
    if (code === '10000') {
      const { timeStamp, nonceStr, prepayId, sign_type: signType, sign } = data;
      if (isWeiXin) {
        console.log('直接调用微信支付');
        wx.chooseWXPay({
          timestamp: timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
          nonceStr, // 支付签名随机串，不长于 32 位
          package: prepayId, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
          signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
          paySign: sign, // 支付签名
          success(wxRes) {
            console.log('微信公众支付结果----', wxRes);
            window.location.href = payParam.redirectUrl;
            // 支付成功后的回调函数
          },
          cancel() {
            router.push(`/cashier/payOrder?orderNo=${payParam.orderNo}&ISEE_BIZ=${payParam.ISEE_BIZ}`);
          },
        });
      } else {
        console.log('H5支付结果----', res.data);
        window.location.replace(res.data.mweb_url);

        // window.location.href = `/cashier/pay?orderNo=${payParam.orderNo}&ISEE_BIZ=${payParam.ISEE_BIZ}`;
        // console.log('跳转收银台页面');
      }
    }
  });
};
/**
 * 处理签约，微信就直接签约，H5则先调signPay页面，手动调接口
 * @param payParam 支付参数
 * @param callback 回调
 */
export const useSign = (payParam: PayParam, callback?: (result: PayResult) => void) => {
  pay({
    ...payParam,
    extraInfo: JSON.stringify({
      wxCode: payParam.code,
    }),
  }).then((res) => {
    const { redirect_url: redirectUrl } = res.data;
    console.log('签约里面调用pay返回=====', res.data);
    window.location.href = redirectUrl;
  });
};

/**
 * 发起支付(所有要发起支付的地方都调这个，由这里分发处理)
 * @param payParam 支付参数
 */
export const sendPay = (payParam: PayParam) => {
  // 微信环境
  if (isSignWay(payParam.payWay)) {
    console.log('走微签约逻辑');
    window.location.href = `/cashier/signPay?${qs.stringify(payParam)}`;
  } else {
    usePay(payParam);
    console.log('走支付逻辑');
  }
};
