export const MATERIAL_TYPE_ENUM = {
  INSURE: 1, // 投保资料
  SIGN: 2, // 签名资料
};

export const RELATION_HOLDER_ENUM = {
  SELF: '1',
  MATE: '2',
  CHILD: '3',
  PARENT: '4',
  OTHER: '8',
};

export const RELATION_HOLDER_LIST = [
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
  {
    label: '其他',
    value: RELATION_HOLDER_ENUM.OTHER,
  },
];

export default {};
