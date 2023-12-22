export const LIAN_STORAGE_KEY = 'lian';

export const SHARE_CONTENT = {
  sign: {
    title: '分享签名',
    desc: `尊敬的{name}邀请您进行投保单电子签名，分享签名链接20分钟有效。【利安人寿】`,
  },
  pay: {
    title: '支付信息修改',
    desc: `尊敬的{name}，请您对支付信息进行确认。【利安人寿】`,
  },
  cancel: {
    title: '撤销投保',
    desc: `尊敬的{name}，请您核实确认是否撤销本次投保，谢谢！【利安人寿】`,
  },
};

export const SHARE_IMAGE_LINK = 'https://al-s-lianapp-01-oss.oss-cn-shanghai.aliyuncs.com/lian_logo.png';

// 事件code
export const EVENT_BUTTON_CODE = {
  free: {
    underWriteAndIssue: 'EVENT_FREE_underWriteAndIssue',
    faceVerify: 'EVENT_FREE_faceAuth',
  },
  short: {
    saveOrUpdate: 'EVENT_SHORT_saveOrder',
    saveNotice: 'EVENT_SHORT_saveNotice',
    saveNoticeNextPage: 'EVENT_SHORT_saveNoticeNextPage',
    faceVerify: 'EVENT_SHORT_saveAuthStatus',
    underWrite: 'EVENT_SHORT_underWrite',
  },
};

// 长短险类型
export const RISK_PERIOD_TYPE_ENUM = {
  free: 4,
  short: 3,
  long: 1,
};

export default {};
