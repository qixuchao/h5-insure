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
  const currentData = value;
  const [unit, years] = currentData.split('_');
  const unitMap = {
    year: '年',
    month: '月',
    day: '天',
    to: '岁',
  };
  if (currentData === 'to_life') {
    return '保终生';
  }
  return `${years}${unitMap[unit]}`;
};

// 缴费期间
export const convertChargePeriod = (value: string): string => {
  const currentData = value;
  const [unit, years] = currentData.split('_');
  const unitMap = {
    year: '年交',
    month: '月交',
    day: '天',
    to: '岁',
  };
  if (currentData === 'single') {
    return '趸缴';
  }
  if (unitMap[unit] === 'to') {
    return `交至${years}岁`;
  }
  return `${years}${unitMap[unit]}`;
};

// 手机号脱敏
export const convertPhone = (phone: string): string => {
  return phone.replace(/(\d{3})\d*(\d{4})/, '$1***$2');
};
