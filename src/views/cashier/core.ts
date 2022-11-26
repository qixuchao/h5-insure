import { GetPayUrlParam, PayParam, PayResult } from '@/api/modules/cashier.data';
import { getPayUrl, loadPayment, pay } from '@/api/modules/cashier';

export const isWeiXin = navigator.userAgent.indexOf('MicroMessenger') > -1;

export const useWxPay = () => {};
export const useSign = (data: any, callback: (result: PayResult) => void) => {
  pay(data).then((res) => {
    if (res.code === '10000') {
      callback(res.data);
    }
  });
};
