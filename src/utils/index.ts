/*
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-28 10:28:12
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-07-30 09:55:33
 * @FilePath: /zat-planet-h5-cloud-insure/src/utils/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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

export const pickNameInList = (
  targetList: any[],
  value: number | string,
  mapping = { label: 'name', value: 'code' },
) => {
  const currentTarget = targetList.filter((target) => target[mapping.value] === value) || [];
  return currentTarget?.[0]?.[mapping.label] || '';
};

export const isApp = () => {
  console.log(window?.AppJSInterface);
  console.log(window?.webkit?.messageHandlers);
  return Boolean(window?.AppJSInterface || window?.webkit?.messageHandlers);
};

export const toLocal = (number: number) => {
  return number && number.toLocaleString();
};
