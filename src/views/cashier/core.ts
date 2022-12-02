/*
 * @Author: zhaopu
 * @Date: 2022-11-26 21:01:39
 * @LastEditors: kevin.liang
 * @LastEditTime: 2022-12-02 20:18:23
 * @Description:
 */
import wx from 'weixin-js-sdk';
import qs from 'qs';
import { onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { GetPayUrlParam, PayParam, PayResult } from '@/api/modules/cashier.data';
import { getPayUrl, loadPayment, pay } from '@/api/modules/cashier';
import { SRC_TYPE, ORDER_DETAIL_ROUTE } from './constant';
import useLoading from '@/hooks/useLoading';

export const isWeiXin = navigator.userAgent.indexOf('MicroMessenger') > -1;

export const getSrcType = () => (isWeiXin ? SRC_TYPE.JS : SRC_TYPE.H5);
// 获取 wxCode，去调用支付接口
export const getWxAuthCode = (params: { appId: string; url: string }) => {
  console.log('微信oauth2授权---appId:', params.appId);
  return `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${params.appId}&redirect_uri=${params.url}&response_type=code&scope=snsapi_base&state=0#wechat_redirect`;
};
/**
 * 调用本函数后，可以获取到微信授权
 */
export const useWXCode = () => {
  onMounted(() => {
    const route = useRoute();
    const query = route.query as { code: string; [key: string]: string };
    const url = `${window.location.href}`;
    if (isWeiXin && !query.code) {
      console.log('微信授权');
      window.location.href = getWxAuthCode({ appId: sessionStorage.appId, url: encodeURIComponent(url) });
    }
    if (query.code) {
      sessionStorage.wxCode = query.code;
    }
  });
};

let WeixinJSBridge: { invoke: (c: string, opt: any, cb: (r: { err_msg: string }) => void) => {} };
/**
 * 判断当前支付方式是签约还是直接支付
 * @param payWay 支付方式 'wxSign' | 'aliSign' | 'wxpay' | 'alipay'
 */
const isSignWay = (payWay: string) => {
  return payWay.toLocaleLowerCase().indexOf('sign') > 0;
};
const onBridgeReady = (params: {
  timeStamp: string;
  nonceStr: string;
  prepayId: string;
  signType: string;
  sign: string;
  appId: string;
  redirectUrl: string;
}) => {
  WeixinJSBridge &&
    WeixinJSBridge.invoke(
      'getBrandWCPayRequest',
      {
        appId: params.appId,
        timeStamp: params.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
        nonceStr: params.nonceStr, // 支付签名随机串，不长于 32 位
        package: params.prepayId, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
        signType: params.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
        paySign: params.sign, // 支付签名
      },
      (res: { err_msg: string }) => {
        console.log('WeixinJSBridge支付结果----', res);
        if (res.err_msg === 'get_brand_wcpay_request:ok') {
          window.location.href = params.redirectUrl;
          // 使用以上方式判断前端返回,微信团队郑重提示：
          // res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
        }
      },
    );
};

/**
 * 直接调起微信支付或H5支付
 * @param payParam 支付参数
 */
export const usePay = (payParam: PayParam) => {
  const loading = ref(true);
  useLoading(loading);
  pay({
    ...payParam,
    srcType: getSrcType(),
    extraInfo: JSON.stringify({
      wxCode: payParam.code || sessionStorage.wxCode,
    }),
  })
    .then((res) => {
      const { code, message, data } = res;
      if (code === '10000') {
        const { timeStamp, nonceStr, prepayId, sign_type: signType, sign, appId, redirectUrl } = data;
        if (isWeiXin) {
          console.log('直接调用微信支付-参数', data);
          // onBridgeReady({ timeStamp, nonceStr, prepayId, signType, sign, appId });
          wx.chooseWXPay({
            timestamp: timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
            nonceStr, // 支付签名随机串，不长于 32 位
            package: prepayId, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
            signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
            paySign: sign, // 支付签名
            success(wxRes) {
              console.log('微信公众支付结果----', wxRes);
              window.location.href = redirectUrl;
              // 支付成功后的回调函数
            },
            fail(err) {
              console.log('微信公众支付失败结果----', err);
              // 支付成功后的回调函数
            },
            cancel() {
              window.location.href = redirectUrl;
            },
          });
        } else {
          console.log('H5支付结果----', res.data);
          window.location.href = res.data.mweb_url;
          // const url = window.URL.createObjectURL(res.data.mweb_url);
          // const a = document.createElement('a');
          // a.href = url;
          // a.click();
          // a.remove();
          // window.location.href = `/cashier/pay?orderNo=${payParam.orderNo}&iseeBizNo=${payParam.iseeBizNo}`;
          // console.log('跳转收银台页面');
        }
      }
    })
    .finally(() => {
      loading.value = false;
    });
};

/**
 * form表单支付html模板
 */
export const useFormPay = (html: string) => {
  const div = document.createElement('div');
  div.id = 'wozijideid';
  div.style.visibility = 'hidden';
  div.innerHTML = html;
  document.body.prepend(div);
  const form = document.querySelector('#wozijideid form') as HTMLFormElement;
  if (form) {
    form.submit();
  } else {
    console.error('支付表单错误，请检查');
  }
};
window.useFormPay = useFormPay;
/**
 * 处理签约，微信就直接签约，H5则先调signPay页面，手动调接口
 * @param payParam 支付参数
 * @param callback 回调
 */
export const useSign = (payParam: PayParam) => {
  const loading = ref(false);
  useLoading(loading);
  pay({
    ...payParam,
    srcType: getSrcType(),
    extraInfo: JSON.stringify({
      wxCode: payParam.code,
    }),
  })
    .then((res) => {
      console.log('签约里面调用pay返回=====', res.data);
      window.location.href = res.data.redirect_url || res.data.redirectUrl;
    })
    .finally(() => {
      loading.value = false;
    });
};

export const wxBrandWCPayRequest = (payParam: PayParam) => {
  pay({
    ...payParam,
    srcType: getSrcType(),
    extraInfo: JSON.stringify({
      wxCode: payParam.code,
    }),
  }).then((res) => {
    const { code, message, data } = res;
    if (code === '10000') {
      const { timeStamp, nonceStr, prepayId, sign_type: signType, sign, appId, redirectUrl } = data;
      if (isWeiXin) {
        console.log('直接调用微信支付-参数', data);
        onBridgeReady({ timeStamp, nonceStr, prepayId, signType, sign, appId, redirectUrl });
      } else {
        console.log('H5支付结果----', res.data);
        window.location.href = res.data.mweb_url;
      }
    }
  });
};

/**
 * 发起支付(所有要发起支付的地方都调这个，由这里分发处理)
 * @param {object} payParam 支付参数
 *  {
 *   orderNo: 支付订单
 *   businessTradeNo: 业务订单号
 *   tenantId: 租户id
 *   payWay: 支付方式(wxSign|wxPay|aliSign|aliPay)
 * }
 */
// function sendPay(payParam: string): void;
function sendPay(payParam: PayParam | string) {
  let params: PayParam | string = '';
  // payUrl过来的
  if (typeof payParam === 'string') {
    if (/https?:.*/.test(payParam)) {
      console.warn('支付参数错误');
    }
    // payUrl返回form表单的html
    if (payParam.indexOf('<html>') > -1) {
      useFormPay(payParam);
      return;
    }
    // 否则就是支付链接，取得参数
    const search = payParam.split('?')[1];
    params = qs.parse(search) as PayParam;
  } else {
    params = { ...payParam };
  }
  if (isSignWay(params.payWay)) {
    console.log('走微签约逻辑');
    window.location.href = `/cashier/signPay?${qs.stringify(params)}`;
  } else {
    usePay(params);
    console.log('走支付逻辑');
  }
}
export { sendPay };
