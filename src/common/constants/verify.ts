import { constantListToMap } from './utils';
// 签字状态描述
export const VERIFY_STATUS_LIST = [
  {
    label: '签名完成',
    value: 1,
  },
  {
    label: '去签名',
    value: 2,
  },
  {
    label: '认证失败，请联系内勤人员',
    value: 3,
  },
];

export const VERIFY_STATUS_MAP = constantListToMap(VERIFY_STATUS_LIST);

export default {};
