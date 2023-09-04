export const NOTICE_OBJECT_ENUM = {
  HOlDER: 1, // 投保人
  INSURED: 2, // 被保人
  AGENT: 3, // 代理人
};

export const NOTICE_OBJECT_LIST = [
  {
    label: '投保人',
    value: NOTICE_OBJECT_ENUM.HOlDER,
  }, // 投保人
  { label: '被保人', value: NOTICE_OBJECT_ENUM.INSURED }, // 被保人
  { label: '代理人', vale: NOTICE_OBJECT_ENUM.AGENT }, // 代理人
];

export const QUESTION_TEXT_TYPE = 2;

export const QUESTION_IS_DONE_ENUM = 1; // 已完成
export const QUESTION_IS_NOT_DONE_ENUM = 2; // 未完成

export const AGENT_NOTICE_TYPE_ENUM = 9; // 代理人告知类型

export const HOLDER_OBJECT_TYPE_ENUM = 1; // 投保人告知类型
export const INSURER_OBJECT_TYPE_ENUM = 2; // 被保人告知类型
export const AGENT_OBJECT_TYPE_ENUM = 3; // 代理人告知类型
export const HOLDER_NOTICE_TYPE_ENUM = 4; // 被保人
export const INSURER_NOTICE_TYPE_ENUM = 5; // 被保人

// 告知类型与适用角色对应
//  告知类型：1-投保告知，2-健康告知，3-特别约定，4-投保人问卷，  5-被保人问卷，6-投保人声明，7-被保人声明，8-免责条款，9-营销员告知
// objectType: 1, // 适用角色 ：1-投保人，2-被保人，3-营销人员(代理人)
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
