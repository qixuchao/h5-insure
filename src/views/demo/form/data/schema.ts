export default [
  // input
  {
    componentName: 'ProField',
    label: '姓名',
    name: 'name',
    required: true,
  },
  // textarea
  {
    componentName: 'ProField',
    type: 'textarea',
    label: '备注',
    name: 'textarea',
    maxlength: 100,
    required: true,
  },
  {
    componentName: 'ProPicker',
    label: '证件类型',
    name: 'certType',
    required: true,
    columns: [
      { label: '中国', value: 'cn' },
      { label: '美国', value: 'us' },
    ],
  },
  {
    componentName: 'ProDatePicker',
    label: '出生日期',
    name: 'birthday',
  },
  // 日历选择
  {
    componentName: 'ProCalendar',
    type: 'range',
    label: '酒店入住日期',
    name: 'orderDate',
  },
  {
    componentName: 'ProRadio',
    label: '性别',
  },
  {
    componentName: 'ProCheckbox',
    label: '出行人',
  },
  {
    componentName: 'ProDatePickerV2',
    label: '出生日期',
  },
  {
    componentName: 'ProAddress',
    label: '地址',
  },
  {
    componentName: 'ProBank',
    label: '银行卡',
  },
  {
    label: '证件有效期',
    name: 'certExpiry',
    required: false,
    columns: [],
    customFieldName: {
      children: 'children',
      text: 'value',
      value: 'code',
    },
    componentName: 'ProDatePickerV2',
  },
];
