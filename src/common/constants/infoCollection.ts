/*
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-28 10:28:12
 * @LastEditors: zhaopu
 * @LastEditTime: 2022-12-07 21:15:31
 * @FilePath: /zat-planet-h5-cloud-insure/src/common/constants/infoCollection.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { constantListToMap } from './utils';

export const RELATION_HOLDER_ENUM = {
  SELF: '1',
  MATE: '2',
  CHILD: '3',
  PARENT: '4',
};

export const RELATION_HOLDER_LIST = [
  {
    label: '本人',
    value: RELATION_HOLDER_ENUM.SELF,
  },
  {
    label: '配偶',
    value: RELATION_HOLDER_ENUM.MATE,
  },
  {
    label: '子女',
    value: RELATION_HOLDER_ENUM.CHILD,
  },
  {
    label: '父母',
    value: RELATION_HOLDER_ENUM.PARENT,
  },
];

export const BENEFICIARY_ENUM = {
  LEGAL: '1',
  SPECIFY: '2',
};

export const BENEFICIARY_LIST = [
  {
    label: '法定',
    value: BENEFICIARY_ENUM.LEGAL,
  },
  {
    label: '指定',
    value: BENEFICIARY_ENUM.SPECIFY,
  },
];

export const MARRIED_STATUS_LIST = [
  {
    label: '已婚',
    value: '1',
  },
  {
    label: '未婚',
    value: '2',
  },
];

export const RELATION_INSURED_ENUM = {
  SELF: '1',
  SPOUSE: '2',
  CHILD: '3',
  PARENT: '4',
};

export const RELATION_INSURED_LIST = [
  {
    label: '本人',
    value: RELATION_INSURED_ENUM.SELF,
  },
  {
    label: '配偶',
    value: RELATION_INSURED_ENUM.SPOUSE,
  },
  {
    label: '子女',
    value: RELATION_INSURED_ENUM.CHILD,
  },
  {
    label: '父母',
    value: RELATION_INSURED_ENUM.PARENT,
  },
];
export const TAX_RESIDENT = [
  {
    label: '仅为中国税收居民',
    value: '1',
  },
  {
    label: '仅为非中国税收居民',
    value: '2',
  },
  {
    label: '既是中国税收居民又是其他国家（地区）税收居民',
    value: '3',
  },
];

export const BENEFICIARY_ORDER = [
  {
    label: '第一顺位',
    value: '1',
  },
  {
    label: '第二顺位',
    value: '2',
  },
  {
    label: '第三顺位',
    value: '3',
  },
  {
    label: '其他',
    value: '4',
  },
];

// 是否有社保
export const SOCIAL_SECURITY_ENUM = {
  HAS: '1',
  NO: '2',
};

export const SOCIAL_SECURITY = [
  {
    label: '有(含新农合)',
    value: '1',
  },
  {
    label: '无社保',
    value: '2',
  },
];

export const PAGE_CODE_ENUM = {
  // 白鸽宝
  FREE: 'free',
  // 魔方
  COMMON: 'common',
  // 魔方
  UPGRADE: 'upgrade',
  // 尊享e生 包含加油包产品
  PACKAGE: 'package',
};

export const TEMPLATE_TYPE_ENUM = {
  // 短险
  SHORT: '1',
  // 赠险
  FREE: '2',
  // 网电销
  NETSALE: '3',
};

export const TEMPLATE_TYPE_MAP = {
  // 赠险
  [TEMPLATE_TYPE_ENUM.FREE]: 'free',
  // 短险
  [TEMPLATE_TYPE_ENUM.SHORT]: 'short',
  // 网电销
  [TEMPLATE_TYPE_ENUM.NETSALE]: 'netsale',
};

export const PAGE_CODE_LIST = [
  {
    label: 'free',
    value: PAGE_CODE_ENUM.FREE,
  },
  {
    label: 'common',
    value: PAGE_CODE_ENUM.COMMON,
  },
  {
    label: 'package',
    value: PAGE_CODE_ENUM.PACKAGE,
  },
];

export const PAGE_CODE_MAP = constantListToMap(PAGE_CODE_LIST);

export const INSURE_TYPE_ENUM = {
  INSURE: '1',
  UN_INSURE: '2',
};

export const INSURE_TYPE_LIST = [
  {
    label: '投保',
    value: INSURE_TYPE_ENUM.INSURE,
  },
  {
    label: '不投保',
    value: INSURE_TYPE_ENUM.UN_INSURE,
  },
];

export const INSURE_TYPE_MAP = constantListToMap(INSURE_TYPE_LIST);

// 缴费方式
// YEAR(2, "年缴"),
// MONTH(5, "月缴"),
export const PAYMENT_FREQUENCY_ENUM = {
  SINGLE: 1,
  YEAR: 2,
  MONTH: 5,
};

export const PAYMENT_FREQUENCYE_LIST = [
  {
    label: '一次交清',
    value: PAYMENT_FREQUENCY_ENUM.YEAR,
  },
  {
    label: '按月交费（12期）',
    value: PAYMENT_FREQUENCY_ENUM.MONTH,
  },
];

export const PAYMENT_FREQUENCY_MAP = constantListToMap(PAYMENT_FREQUENCYE_LIST);

// 理赔流程类型
export const CLAIM_TYPE_ENUM = {
  WORD: '1', // 文字
  IMAGE: '2', // 图片
};

export const CLAIM_TYPE_LIST = [
  { value: CLAIM_TYPE_ENUM.WORD, label: '文字' },
  { value: CLAIM_TYPE_ENUM.IMAGE, label: '图片' },
];

export const CLAIM_TYPE_MAP = constantListToMap(CLAIM_TYPE_LIST);

export const PAYMENT_COMMON_FREQUENCY_ENUM = {
  SINGLE: '1',
  YEAR: '2',
  HALF_YEAR: '3',
  QUARTER: '4',
  MONTH: '5',
};

// 交费方式
export const PAYMENT_COMMON_FREQUENCY = [
  {
    label: '趸交',
    value: PAYMENT_COMMON_FREQUENCY_ENUM.SINGLE,
  },
  {
    label: '年交',
    value: PAYMENT_COMMON_FREQUENCY_ENUM.YEAR,
  },
  {
    label: '半年交',
    value: PAYMENT_COMMON_FREQUENCY_ENUM.HALF_YEAR,
  },
  {
    label: '季交',
    value: PAYMENT_COMMON_FREQUENCY_ENUM.QUARTER,
  },
  {
    label: '月交',
    value: PAYMENT_COMMON_FREQUENCY_ENUM.MONTH,
  },
];

export const PAYMENT_COMMON_FREQUENCY_MAP = constantListToMap(PAYMENT_COMMON_FREQUENCY);

// 保障生效时间
export const INSURANCE_START_TYPE_ENUM = {
  CURRENT_DAY: '1',
  NEXT_DAY: '2',
  CUSTOM_DAY: '3',
};

export const INSURANCE_START_TYPE_LIST = [
  {
    label: '当日生效',
    value: INSURANCE_START_TYPE_ENUM.CURRENT_DAY,
  },
  {
    label: '次日生效',
    value: INSURANCE_START_TYPE_ENUM.NEXT_DAY,
  },
  {
    label: '指定日期生效',
    value: INSURANCE_START_TYPE_ENUM.CUSTOM_DAY,
  },
];

// 保障失效时间
export const INSURANCE_END_TYPE_ENUM = {
  CURRENT_DAY: '1',
  NEXT_DAY: '2',
};

export const ORDER_DETAIL_KEY = 'ORDER_DETAIL_KEY';

// 保额类型
export const PREMIUM_DISPLAY_TYPE_ENUM = {
  INPUT: '1', // 录入值
  STEP: '2', // 步进值
  FIXED: '3', // 固定值
  COPY: '4', // 份数
};

// 保障单位
export const PREMIUM_UNIT_TYPE_ENUM = {
  YUAN: '1', // 元
  COPY: '2', // 份数
  MONTH_SALARY: '3', // 倍月薪
  MILLION: '4', // 万元
};
