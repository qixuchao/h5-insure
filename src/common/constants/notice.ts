import { constantListToMap } from './utils';

export const NOTICE_OBJECT_ENUM = {
  HOlDER: 1, // 投保人
  INSURED: 2, // 被保险人
  AGENT: 3, // 销售人员
};

export const NOTICE_OBJECT_LIST = [
  {
    label: '投保人',
    value: NOTICE_OBJECT_ENUM.HOlDER,
  }, // 投保人
  { label: '被保险人', value: NOTICE_OBJECT_ENUM.INSURED }, // 被保险人
  { label: '销售人员', vale: NOTICE_OBJECT_ENUM.AGENT }, // 销售人员
];

export const NOTICE_OBJECT_MAP = constantListToMap(NOTICE_OBJECT_LIST);

export const QUESTION_TEXT_TYPE = 2;

export const QUESTION_IS_DONE_ENUM = 1; // 已完成
export const QUESTION_IS_NOT_DONE_ENUM = 2; // 未完成

export const AGENT_NOTICE_TYPE_ENUM = 9; // 销售人员告知类型

export const HOLDER_OBJECT_TYPE_ENUM = 1; // 投保人告知类型
export const INSURER_OBJECT_TYPE_ENUM = 2; // 被保险人告知类型
export const AGENT_OBJECT_TYPE_ENUM = 3; // 销售人员告知类型
export const HOLDER_NOTICE_TYPE_ENUM = 4; // 被保险人
export const INSURER_NOTICE_TYPE_ENUM = 5; // 被保险人

// 告知类型与适用角色对应
//  告知类型：1-投保告知，2-健康告知，3-特别约定，4-投保人问卷，  5-被保险人问卷，6-投保人声明，7-被保险人声明，8-免责条款，9-营销员告知
// objectType: 1, // 适用角色 ：1-投保人，2-被保险人，3-营销人员(销售人员)
export const NOTICE_OBJECT_TYPE = {
  1: 4,
  2: 5,
  3: 9,
};

// 问卷类型
export const QUESTIONNAIRE_TYPE_ENUM = {
  NEW_CONTRACT: 1, // 新契约问卷
  VISIT: 2, // 回访问卷
  RISK_NOTIFICATION: 3, // 风险告知问卷
};
