import wxPay from './images/wxPay.png';
import aliPay from './images/aliPay.jpeg';
/**  支付方式(只需要处理前面四种) */
export const PAY_WAY_ENUM = {
  ALIPAY: 'alipay', // "调用支付宝H5页面支付"
  WXPAY: 'wxpay', //  "微信支付"
  WX_SIGN: 'wxSign', //  "微信签约"
  ALI_SIGN: 'aliSign', //  "支付宝签约"

  ALIPAY_APP: 'alipay_app', //  "唤起支付宝APP支付"
  UNIONPAY: 'unionpay', //  "银联个人支付"
  WXPAY_SIGN: 'wxpaySign', //  "微信支付中签约"
  ALIPAY_SIGN: 'alipaySign', //  "支付宝支付中签约"
  WXPAY_DK: 'wxpayDk', //  "微信代扣"
};
export const PAY_WAY_LIST = [
  { name: PAY_WAY_ENUM.WXPAY, title: '微信支付', img: wxPay },
  { name: PAY_WAY_ENUM.WXPAY_SIGN, title: '微信App签约', img: wxPay },
  { name: PAY_WAY_ENUM.WX_SIGN, title: '微信H5签约', img: wxPay },
  { name: PAY_WAY_ENUM.ALIPAY, title: '支付宝', img: aliPay },
];
export const getPayWayList = (canPayWayStr = '') => {
  const showList = canPayWayStr.split(',');
  return PAY_WAY_LIST.filter((i) => {
    return showList.includes(i.name);
  });
};
/** 支付环境 */
export const SRC_TYPE = {
  H5: 'H5', // H5签约
  JS: 'JS', // 公众号签约
  PC: 'PC', //
  API: 'API',
  APP: 'APP',
  MP: 'MP',
};
export default {};
