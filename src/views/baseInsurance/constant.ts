/** 投保相关常量提取 */

/**
 * @name 模板ID常量
 * 短险 SHORT: '1',
 * 赠险 FREE: '2',
 * 网电销 NETSALE: '3'
 * 魔方升级 UPGRADE: '4'
 * 长期险(基础版) BASELONG: '51'
 */
export const TEMPLATE_TYPE_ENUM = {
  // 短险
  SHORT: '1',
  // 赠险
  FREE: '2',
  // 网电销
  NETSALE: '3',
  // 魔方升级
  UPGRADE: '4',
  // 长期险
  BASELONG: '51',
};
/**
 * 模板code映射路由
 */
export const TEMPLATE_TYPE_MAP = {
  // 赠险
  [TEMPLATE_TYPE_ENUM.FREE]: 'free',
  // 短险
  [TEMPLATE_TYPE_ENUM.SHORT]: 'short',
  // 网电销
  [TEMPLATE_TYPE_ENUM.NETSALE]: 'netsale',
  // 魔方升级
  [TEMPLATE_TYPE_ENUM.UPGRADE]: 'short',
  // 长期险-基础模板(多款长期险模板，列多个)
  [TEMPLATE_TYPE_ENUM.BASELONG]: 'baseLong',
};
