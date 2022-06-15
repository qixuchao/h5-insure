/* eslint-disable no-useless-escape */
// import md5 from 'md5';
import dayjs from 'dayjs';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';

dayjs.extend(quarterOfYear);
/**
 * md5加密
 */
export function md5Encryption(message: string | Buffer | number[] | Uint8Array) {
  // const KEY = md5('LULU Derivation');
  return message; // md5(KEY + md5(message));
}

/**
 * 类型检查
 */

export function typeCheck(param: any) {
  return Object.prototype.toString.call(param);
}

export function useToken(tokenKey: string) {
  return localStorage.getItem(tokenKey) || sessionStorage.getItem(tokenKey);
}

export const isWechat = () => {
  return /MicroMessenger/i.test(window.navigator.userAgent);
};

export const isApp = () => {
  return navigator.userAgent.toLowerCase().includes('agentapp');
};

export const formatDate = (date: Date) => {
  return dayjs(date).format('YYYY-MM-DD');
};
// 获取阶段开始时间
export const formatStartDateTime = (date: any, type: any) => {
  return dayjs(date).startOf(type).format('YYYY-MM-DD HH:mm:ss');
};
// 获取阶段结束时间
export const formatEndDateTime = (date: any, type: any) => {
  return dayjs(date).endOf(type).format('YYYY-MM-DD HH:mm:ss');
};

export const urlDelP = (url: string, name: any) => {
  const urlArr = url.split('?');
  if (urlArr.length > 1 && urlArr[1].indexOf(name) > -1) {
    const query = urlArr[1];
    const obj = {} as any;
    const arr = query.split('&') as any;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].split('=');
      obj[arr[i][0] as any] = arr[i][1] as any;
    }
    delete obj[name];
    let urlte;
    if (Object.keys(obj).length === 0) {
      urlte = urlArr[0] as any;
    } else {
      urlte = `${urlArr[0]}?${JSON.stringify(obj)
        .replace(/[\"\{\}]/g, '')
        .replace(/\:/g, '=')
        .replace(/\,/g, '&')}`;
    }
    return urlte;
  }
  return url;
};

const BASE_PREFIX = import.meta.env.VITE_API_BASEURL;
export const REDIRECT_URI =
  BASE_PREFIX.indexOf('/acvmtest') > -1
    ? 'https://www.gconline.cn/oauthServerTest/oauth/authorize?client_id=ZA&response_type=code&response_type=code&scope=user_info&redirect_uri=https://www.gconline.cn/acvmtest/'
    : 'https://www.gconline.cn/oauthServerTest/oauth/authorize?client_id=ZA&response_type=code&response_type=code&scope=user_info&redirect_uri=https://rainbow-web-test.zhongan.io/';

export const ORIGIN =
  BASE_PREFIX.indexOf('/acvmtest') > -1 ? `${window.location.origin}/acvmtest` : window.location.origin;

export const WX_ENV =
  BASE_PREFIX.indexOf('/acvmtest') > -1 ? ORIGIN : 'http://demo-aquarius-h5-test.zhongan.io/aquarius-activity';
