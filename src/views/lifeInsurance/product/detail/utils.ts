/**
 * 格式化年龄
 * @param age day_30
 * @returns 年龄
 */
const formatAge = (age: string) => {
  const arr = age.split('_');
  if (arr[0] === 'day') {
    return `满${arr[1]}天`;
  }
  return `${arr[1]}周岁`;
};

/**
 * 格式化投保年龄限制
 * @param age 投保年龄限制,例：day_30,age_60（范围，以英文逗号分隔）
 * @returns 投保年龄限制
 */
export const formatHolderAgeLimit = (age?: string) => {
  if (!age) {
    return '';
  }
  const arr = age.split(',');
  if (arr.length === 1) {
    return formatAge(arr[0]);
  }
  return `${formatAge(arr[0])} ~ ${formatAge(arr[1])}`;
};

const formatPaymentPeriod = (payment: string) => {
  if (!payment) {
    return '';
  }
  if (payment === 'single') {
    return '趸缴';
  }
  const arr = payment.split('_');
  if (arr[0] === 'year') {
    return `${arr[1]}年`;
  }
  if (arr[0] === 'month') {
    return `${arr[1]}月`;
  }
  if (arr[0] === 'to') {
    if (arr[1] === 'life') {
      return '保终身';
    }
    return `至${arr[1]}岁`;
  }
  return '';
};

export const formatPaymentPeriodLimit = (payment?: string) => {
  /**
   * 缴费期间值 固定：固定数字，枚举：英文逗号隔开，范围：最小值，最大值
   * 按年缴：以year开头，例如year_10
   * 按月缴：以month开头，例如month_10
   * 缴至多少岁：以to开头，例如to_60
   * 趸缴：single
   */
  if (!payment) {
    return '';
  }
  return payment
    .split(',')
    .map((item) => formatPaymentPeriod(item))
    .join('/');
};

export const formatSexLimit = (sex?: string) => {
  if (!sex) {
    return '';
  }
  switch (sex) {
    case '-1':
      return '无限制';
    case '1':
      return '男';
    case '2':
      return '女';
    default:
      return '';
  }
};

const formatOccupation = (occupation: string) => {
  const temp = {
    '1': '职业等级一',
    '2': '职业等级二',
    '3': '职业等级三',
    '4': '职业等级四',
    '5': '职业等级五',
    '6': '职业等级六',
    '7': '职业等级七',
    '8': '职业等级八',
    '9': '职业等级九',
  };
  return temp[occupation] || '';
};

export const formatOccupationLimit = (occupation?: string) => {
  if (!occupation) {
    return '';
  }
  if (occupation === '-1') {
    return '无限制';
  }
  const arr = occupation.split(',');
  return arr.map((item) => formatOccupation(item)).join('、');
};

export const formatSocialInsuranceLimit = (social?: string) => {
  if (!social) {
    return '';
  }
  switch (social) {
    case '-1':
      return '无限制';
    case '1':
      return '有';
    case '2':
      return '无';
    default:
      return '';
  }
};
