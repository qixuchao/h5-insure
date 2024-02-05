import { constantListToMap } from './utils';
// 签字状态描述
export const VERIFY_STATUS_LIST = [
  {
    label: '签名完成',
    value: 1,
  },
  {
    label: '本地签名',
    value: 2,
  },
  {
    label: '认证失败，请联系内勤人员',
    value: 3,
  },
];

export const VERIFY_STATUS_MAP = constantListToMap(VERIFY_STATUS_LIST);

// 双录状态
export const DUAL_STATUS_ENUM = {
  DUAL: 1,
  DUALING: 2,
  DUAL_FINISH: 3,
  DUAL_FAILED: 4,
};

export const DUAL_STATUS_LIST = [
  {
    label: '去双录',
    value: DUAL_STATUS_ENUM.DUAL,
  },
  {
    label: '双录中',
    value: DUAL_STATUS_ENUM.DUALING,
  },
  {
    label: '双录完成',
    value: DUAL_STATUS_ENUM.DUAL_FINISH,
  },
  {
    label: '双录失败',
    value: DUAL_STATUS_ENUM.DUAL_FAILED,
  },
];

export const DUAL_STATUS_MAP = constantListToMap(DUAL_STATUS_LIST);

export default {};
