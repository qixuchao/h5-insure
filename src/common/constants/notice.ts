export const NOTICE_OBJECT_ENUM = {
  1: '投保人',
  2: '被保人',
  3: '营销人员(代理人)',
};

export const QUESTION_IS_DONE_ENUM = 1; // 已完成
export const QUESTION_IS_NOT_DONE_ENUM = 2; // 未完成

export const HOLDER_OBJECT_TYPE_ENUM = 1; // 投保人
export const INSURER_OBJECT_TYPE_ENUM = 2; // 被保人
export const AGENT_OBJECT_TYPE_ENUM = 2; // 被保人

// 告知类型与适用角色对应
//  告知类型：1-投保告知，2-健康告知，3-特别约定，4-投保人问卷，  5-被保人问卷，6-投保人声明，7-被保人声明，8-免责条款，9-营销员告知
// objectType: 1, // 适用角色 ：1-投保人，2-被保人，3-营销人员(代理人)
export const NOTICE_OBJECT_TYPE = {
  HOLDER_OBJECT_TYPE_ENUM: 4,
  INSURER_OBJECT_TYPE_ENUM: 5,
  AGENT_OBJECT_TYPE_ENUM: 9,
};
