/**
 * 字典项名称常 量配置
 */
export const DictNameEnum = {
  /** 省市区 */ // 不需要转换label-value
  NATIONAL_REGION_CODE: 'NATIONAL_REGION_CODE',
  /** 险种类型 */
  CATEGORY_OF_RISK: 'CATEGORY_OF_RISK',
  /** 责任类型字典 */
  LIABILITY_TYPE: 'LIABILITY_TYPE',
  /** 责任类型属性字典 */
  LIABILITY_ATTRIBUTE_TYPE: 'LIABILITY_ATTRIBUTE_TYPE',
  /**
   * 职业信息 后缀 OCCUPATION
   */
  OCCUPATION: 'OCCUPATION',
  /**
   * 国籍信息
   */
  NATIONALITY: 'NATIONALITY',
  /** 银行卡 */
  BANK: 'BANK',
};

// 全局字典 不需要转label-value的列表
export const NoTransform = [
  DictNameEnum.NATIONAL_REGION_CODE,
  DictNameEnum.LIABILITY_TYPE,
  DictNameEnum.OCCUPATION,
  DictNameEnum.NATIONALITY,
];

/** 比较两个基础数据类型的相等，主要用于 number 和 string 来比较值 不要滥用，todo 待完善 */
export const enumEqual = (val: any, other: any) => {
  if (typeof val === typeof other) {
    return val === other;
  }
  return `${val}` === `${other}`;
};

export default DictNameEnum;
