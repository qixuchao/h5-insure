/*
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-28 10:28:12
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-09-02 14:01:57
 * @FilePath: /zat-planet-h5-cloud-insure/src/utils/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// import md5 from 'md5';
import dayjs from 'dayjs';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';
import { INotice } from '@/api/modules/verify.data';
import { FILE_TYPE_ENUM } from '@/common/constants';

dayjs.extend(quarterOfYear);

export const isWechat = () => {
  return /MicroMessenger/i.test(window.navigator.userAgent);
};

const BASE_PREFIX = import.meta.env.VITE_API_BASEURL;

export const ORIGIN = window.location.origin;

export const pickNameInList = (
  targetList: any[],
  value: number | string,
  mapping = { label: 'name', value: 'code' },
) => {
  const currentTarget = targetList.filter((target) => target[mapping.value] === value) || [];
  return currentTarget?.[0]?.[mapping.label] || '';
};

export const isApp = () => {
  return Boolean(window?.AppJSInterface || window?.webkit?.messageHandlers);
};

export const toLocal = (number: number) => {
  return number && number.toLocaleString();
};

// 是否为空值
export function isNullish(value: any) {
  return [undefined, null].includes(value);
}

// constant List -> Map
export const constantListToMap = (arr: ConstantList): object => {
  if (!(Array.isArray(arr) && arr.length)) return {};
  return arr.reduce((result, { value, label }) => {
    if (!isNullish(value)) {
      // eslint-disable-next-line no-param-reassign
      result[value] = label;
    }
    return result;
  }, {});
};

export const getFileType = (content: string, materialType: string) => {
  let currentFileType = '1';
  if (+materialType === 1) {
    if (content.indexOf('.pdf') !== -1) {
      currentFileType = '1';
    } else {
      currentFileType = '4';
    }
  } else {
    currentFileType = materialType;
  }
  return FILE_TYPE_ENUM[currentFileType];
};

export const isDevEnv = ORIGIN.includes('localhost');

export const isTestEnv = ORIGIN.includes('test');

export const isPreEnv = ORIGIN.includes('pre');

export const isPrdEnv = !(isDevEnv || isTestEnv || isPreEnv);
