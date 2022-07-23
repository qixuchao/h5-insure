/* eslint-disable no-useless-escape */
// import md5 from 'md5';
import dayjs from 'dayjs';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';

dayjs.extend(quarterOfYear);

export const isWechat = () => {
  return /MicroMessenger/i.test(window.navigator.userAgent);
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

export const isNotEmptyArray = (arr: any) => Array.isArray(arr) && arr.length > 0;
// 是否为空值
export const isNullish = (value: any) => {
  return [undefined, null].includes(value);
};

// constant List -> Map
export function constantListToMap(arr: Array<any> = [], mapping = { label: 'label', value: 'value' }) {
  if (!isNotEmptyArray(arr)) return {};
  const { label, value } = mapping;
  const result = {};
  arr.forEach((item) => {
    const val = item[`${value}`];
    if (!isNullish(val)) {
      result[`${val}`] = item[`${label}`];
    }
  });
  return result;
}
