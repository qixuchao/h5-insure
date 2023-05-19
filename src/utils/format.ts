/*
 * @Author: za-qixuchao qixuchao@zhongan.com
 * @Date: 2022-08-23 13:55:39
 * @LastEditors: za-qixuchao qixuchao@zhongan.com
 * @LastEditTime: 2022-11-14 17:19:22
 * @FilePath: /zat-planet-h5-cloud-insure/src/utils/format.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export declare interface instanceObject {
  [key: string]: string;
}

/**
 * JSON转url参数
 * @param data Json格式数据
 * */
export const formatJsonToUrlParams = (data: instanceObject) => {
  return typeof data === 'object'
    ? Object.keys(data)
        .map((key) => {
          return `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`;
        })
        .join('&')
    : '';
};

export const transformToMoney = (num?: number | string) => {
  return num ? String(num).replace(/\B(?=(\d{3})+$)/g, ',') : '';
};

// 保障期间
export const convertPeriod = (value: string): string => {
  if (typeof value !== 'string') {
    return '';
  }
  const [unit, years] = value.split('_');
  const unitMap = {
    year: '年',
    month: '月',
    day: '天',
    to: '岁',
  };
  if (value === 'to_life') {
    return '保终身';
  }
  return `${years}${unitMap[unit]}`;
};

// 交费期间
export const convertChargePeriod = (value: string): string => {
  if (typeof value !== 'string') {
    return '';
  }
  const [unit, years] = value.split('_');
  const unitMap = {
    year: '年交',
    month: '月交',
    day: '天',
    to: '岁',
  };
  if (value === 'single') {
    return '趸缴';
  }
  if (unitMap[unit] === 'to') {
    return `交至${years}岁`;
  }
  return `${years}${unitMap[unit]}`;
};

// 手机号脱敏
export const convertPhone = (phone = ''): string => {
  return phone.replace(/(\d{3})\d*(\d{4})/, '$1***$2');
};
