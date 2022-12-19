import { constantListToMap } from '@/utils';

// eslint-disable-next-line no-shadow
export enum RELATIONENUM {
  SELF = '1', // "本人"
  SPOUSE = '2', // "配偶"
  SONS_DAUGHTERS = '3', // "子女"
  PARENTS = '4', // "父母"
  OTHER = '8', // "其他"
}

export const RISK_CATEGORY = [
  {
    label: '意外',
    value: 1,
  },
  {
    label: '重疾',
    value: 2,
  },
  {
    label: '医疗',
    value: 3,
  },
  {
    label: '年金',
    value: 4,
  },
  {
    label: '寿险',
    value: 5,
  },
  {
    label: '万能',
    value: 6,
  },
];

// 主附险类型
export const RISK_TYPE = [
  {
    label: '主险',
    value: 1,
  },
  {
    label: '附加险',
    value: 2,
  },
];

// 长短险类型
export const PERIOD_TYPE = [
  {
    label: '长期',
    value: 1,
  },
  {
    label: '一年期',
    value: 2,
  },
  {
    label: '短期',
    value: 3,
  },
];

export const CONFIG_STATUS = [
  {
    label: '暂存',
    value: 1,
  },
  {
    label: '完成',
    value: 2,
  },
];

export const UNIT = [
  {
    label: '天',
    value: 'day',
  },
  {
    label: '周岁',
    value: 'age',
  },
];

export const EXEMPT_TYPE = [
  {
    value: 1,
    label: '投保人豁免险',
  },
  {
    value: 2,
    label: '被保人豁免险',
  },
];

export const SOCIAL_INSURANCE_LIMIT = [
  {
    label: '有',
    value: '1',
  },
  {
    label: '无',
    value: '2',
  },
];

export const INSURANCE_PERIOD_TYPE = [
  {
    label: '固定',
    value: '1',
  },
  {
    label: '枚举',
    value: '2',
  },
  {
    label: '范围',
    value: '3',
  },
];

export const OCCUPATION_LIMIT = [
  {
    label: '无限制',
    value: '-1',
  },
  {
    label: '职业等级一',
    value: '1',
  },
  {
    label: '职业等级二',
    value: '2',
  },
  {
    label: '职业等级三',
    value: '3',
  },
  {
    label: '职业等级四',
    value: '4',
  },
  {
    label: '职业等级五',
    value: '5',
  },
  {
    label: '职业等级六',
    value: '6',
  },
];

export const HOLDER_AGE_UNIT = [
  {
    value: 'day',
    label: '天',
  },
  {
    value: 'year',
    label: '周岁',
  },
];

export const INSURANCE_PERIOD = [
  {
    value: 'to',
    label: '岁',
  },
  {
    value: 'year',
    label: '年',
  },
];

// 年金领取时间
export const ANNUITY_DRAW_DATE = [
  {
    value: 1,
    label: '第5个保单周年日',
  },
  {
    value: 2,
    label: '起始领取年龄55周岁',
  },
  {
    value: 3,
    label: '起始领取年龄60周岁',
  },
  {
    value: 4,
    label: '起始领取年龄65周岁',
  },
  {
    value: 5,
    label: '起始领取年龄70周岁',
  },
  {
    value: 6,
    label: '起始领取年龄75周岁',
  },
];

// 年金领取方式
export const ANNUITY_DRAW_TYPE = [
  {
    value: 1,
    label: '年领',
  },
  {
    value: 2,
    label: '月领',
  },
];

// 交费方式
export const PAYMENT_FREQUENCY = [
  {
    label: '趸交',
    value: '1',
  },
  {
    label: '年交',
    value: '2',
  },
  {
    label: '半年交',
    value: '3',
  },
  {
    label: '季交',
    value: '4',
  },
  {
    label: '月交',
    value: '5',
  },
  // {
  //   label: '日交',
  //   value: '6',
  // },
];
export const PAYMENT_FREQUENCY_MAP = constantListToMap(PAYMENT_FREQUENCY);

export const INSURANCE_PERIOD_ENUM = {
  YEAR_1: 'year_1', // 一年期
};

// 缴费期间值
export const PAYMENT_PERIOD_VALUE = [
  {
    label: '趸交',
    value: 'single',
  },
  {
    label: '1年交',
    value: 'year_1',
  },
  {
    label: '5年交',
    value: 'year_5',
  },
  {
    label: '10年交',
    value: 'year_10',
  },
  {
    label: '15年交',
    value: 'year_15',
  },
  {
    label: '20年交',
    value: 'year_20',
  },
  {
    label: '25年交',
    value: 'year_25',
  },
  {
    label: '30年交',
    value: 'year_30',
  },
  {
    label: '35年交',
    value: 'year_35',
  },
];
// 保障期间值
export const INSURANCE_PERIOD_VALUE = [
  {
    label: '7天',
    value: 'day_7',
  },
  {
    label: '14天',
    value: 'day_14',
  },
  {
    label: '30天',
    value: 'day_30',
  },
  {
    label: '1年',
    value: 'year_1',
  },
  {
    label: '3年',
    value: 'year_3',
  },
  {
    label: '5年',
    value: 'year_5',
  },
  {
    label: '10年',
    value: 'year_10',
  },
  {
    label: '15年',
    value: 'year_15',
  },
  {
    label: '20年',
    value: 'year_20',
  },
  {
    label: '25年',
    value: 'year_25',
  },
  {
    label: '30年',
    value: 'year_30',
  },
  {
    label: '35年',
    value: 'year_35',
  },
  {
    label: '终身',
    value: 'to_life',
  },
];

// 销售方式
export const SALE_METHOD = [
  {
    label: '保额算保费',
    value: '1',
  },
  {
    label: '保费算保额',
    value: '2',
  },
  {
    label: '按份数',
    value: '3',
  },
  {
    label: '固定保费',
    value: '4',
  },
];

// 关联险种之间的关系
export const COLLOCATION_TYPE = [
  {
    label: '可选',
    value: 1,
  },
  {
    label: '绑定',
    value: 2,
  },
  {
    label: '互斥',
    value: 3,
  },
];

// 主附险之间的关系
export const RISK_COLLOCATION_TYPE = [
  {
    label: '可选',
    value: 1,
  },
  {
    label: '必选',
    value: 2,
  },
];

// 责任的可选关系
export const OPTIONAL_FLAG = [
  {
    label: '必选',
    value: 1,
  },
  {
    label: '可选',
    value: 2,
  },
];

// 保监险种类
export const CIRC_CATEGORY = [
  {
    label: '人寿保险',
    value: 1,
  },
  {
    label: '意外伤害保险',
    value: 2,
  },
  {
    label: '健康保险',
    value: 3,
  },
  {
    label: '年金保险',
    value: 4,
  },
  {
    label: '责任保险',
    value: 5,
  },
  {
    label: '机动车辆保险',
    value: 6,
  },
  {
    label: '企业财产保险',
    value: 7,
  },
  {
    label: '家庭财产保险',
    value: 8,
  },
  {
    label: '健康委托管理产品',
    value: 9,
  },
  {
    label: '养老委托管理产品',
    value: 10,
  },
  {
    label: '其他保险',
    value: 11,
  },
];

export const RULE_ENUM = {
  MAIN_RISK_SAME: 1,
  NO_LIMIT: 2,
  MAIN_RISK_1: 3,
  ONE_YEAR: 4,
};

export const PAYMENT_PERIOD_RULE = [
  {
    label: '同主险',
    value: '1',
  },
  {
    label: '无限制',
    value: '2',
  },
  {
    label: '主险保障期间减1',
    value: '3',
  },
];

export const RULE_RISK_PAYMENT = [
  {
    label: '同主险',
    value: '1',
  },
  {
    label: '无限制',
    value: '2',
  },
];
export const RULE_RISK_INSURANCE = [
  {
    label: '同主险',
    value: '1',
  },
  {
    label: '无限制',
    value: '2',
  },
];
export const RULE_INSURANCE = [
  {
    name: '同主险交费期间减1',
    value: '3',
  },
  {
    name: '无限制',
    value: '2',
  },
];

export const RULE_PAYMENT = [
  {
    name: '同主险期间减1',
    value: '3',
  },
  {
    name: '无限制',
    value: '2',
  },
];

export const LIABILITY_ATTRIBUTE_VALUE = [
  {
    label: '返保额',
    value: '1',
  },
  {
    label: '返保费',
    value: '2',
  },
];

export const INSURE_FLAG = [
  {
    label: '投保',
    value: '0',
  },
  {
    label: '不投保',
    value: '-1',
  },
];

export const INSURANCE_PERIOD_ENUMS = {
  1: 'day',
  2: 'month',
  3: 'year',
  4: 'to',
  5: 'to_life',
};

export const INSURANCE_PERIOD_TYPE_ENUMS = {
  1: '天',
  2: '月',
  3: '年',
  4: '至$岁',
  5: '至终身',
  day: 1,
  month: 2,
  year: 3,
  to: 4,
  to_life: 5,
};

export const PAYMENT_PERIOD_ENUMS = {
  1: 'single',
  2: 'year',
  3: 'to',
};

export const PAYMENT_PERIOD_TYPE_ENUMS = {
  1: '趸交',
  2: '$年交',
  3: '至$岁',
  single: 1,
  year: 2,
  to: 3,
};

export const RISK_TYPE_ENUM = {
  MAIN_RISK: 1, // 主险
  RIDER_RISK: 2, // 附加险
};
