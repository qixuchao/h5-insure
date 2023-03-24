export default [
  {
    displayType: 1,
    label: '姓名',
    name: 'name',
    required: true,
  },
  {
    displayType: 2,
    type: 'textarea',
    label: '备注',
    name: 'textarea',
    maxlength: 100,
    required: true,
  },
  {
    displayType: 6,
    label: '证件类型',
    name: 'certType',
    required: true,
    columns: [
      { label: '中国', value: 'cn' },
      { label: '美国', value: 'us' },
    ],
  },
  {
    displayType: 4,
    label: '出生日期',
    name: 'birthday',
  },
  // 日历选择
  {
    displayType: 4,
    type: 'range',
    label: '酒店入住日期',
    name: 'orderDate',
  },
  {
    displayType: 6,
    label: '性别',
  },
  {
    displayType: 7,
    label: '出行人',
  },
  {
    displayType: 4,
    label: '出生日期',
  },
  {
    displayType: 11,
    label: '地址',
  },
  {
    label: '证件有效期',
    displayType: 4,
    name: 'certExpiry',
    required: false,
    columns: [],
    customFieldName: {
      children: 'children',
      text: 'value',
      value: 'code',
    },
  },
];
