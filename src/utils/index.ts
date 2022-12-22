/*
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-28 10:28:12
 * @LastEditors: kevin.liang
 * @LastEditTime: 2022-12-22 17:32:52
 * @FilePath: /zat-planet-h5-cloud-insure/src/utils/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// import md5 from 'md5';
import dayjs from 'dayjs';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';
import { INotice } from '@/api/modules/verify.data';
import { FILE_TYPE_ENUM } from '@/common/constants';

dayjs.extend(quarterOfYear);

// 微信浏览器，且非企业微信
export const isWechat = () => {
  const ua = window.navigator.userAgent;
  return /MicroMessenger/i.test(ua) && !ua.includes('wxwork');
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

export const toLocal = (number: number | null | undefined) => {
  if (!number) return null;
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

/**
 * 深拷贝 （不能处理有函数等特殊对象的值）
 * @param {*} source 被拷贝对象
 * @returns 返回新的对象
 */
export const deepCopy = (source: any) => JSON.parse(JSON.stringify(source));

export function downLoadFile(url: string) {
  const a = document.createElement('a');
  a.href = url;
  a.click();
  return a;
}

export function isEmpty(value: any) {
  if (value === null || value === undefined || value === '') return true;
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === 'string') return value.length === 0;
  return Object.keys(value).length === 0;
}

/**
 * 隐藏姓名 手机号 身份证 银行卡 等中间字符信息
 * @param str
 * @returns {*}
 */
export function star(value: string) {
  const str = value.toString();
  if (str.length > 0 && str.length < 3) {
    return `*${str.substring(1)}`;
  }
  if (str.length > 5 && str.length < 12) {
    return `${str.substr(0, 3)}****${str.substr(-4)}`;
  }
  if (str.length > 14) {
    return `${str.substr(0, 6)}***********${str.substr(-4)}`;
  }
  return str;
}
