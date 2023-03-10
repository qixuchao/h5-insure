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
};

// 全局字典 不需要转label-value的列表
export const NoTransform = [
  DictNameEnum.NATIONAL_REGION_CODE,
  DictNameEnum.LIABILITY_TYPE,
  DictNameEnum.OCCUPATION,
  DictNameEnum.NATIONALITY,
];

export default DictNameEnum;
