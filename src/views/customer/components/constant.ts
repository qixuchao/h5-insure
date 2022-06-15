export const list = [
  {
    title: '排序',
    type: 'single',
    value: 'orderBy',
    list: [
      {
        title: '姓名首字母',
        value: 'firstLetter',
        checked: true,
        size: 'md',
      },
      {
        title: '更新时间',
        value: 'createTime',
        checked: false,
        size: 'md',
      },
    ],
  },
  // {
  //   title: '客户来源',
  //   type: 'single',
  //   value: 'orderBy',
  //   list: [
  //     {
  //       title: '承保客户',
  //       value: '承保客户',
  //       checked: true,
  //       size: 'md',
  //     },
  //     {
  //       title: '更新时间',
  //       value: 'createTime',
  //       checked: false,
  //       size: 'md',
  //     },
  //   ],
  // },
  {
    title: '投保意向',
    type: 'single',
    value: 'intention',
    list: [
      {
        title: '高',
        value: '高',
        size: 'sm',
      },
      {
        title: '中',
        value: '中',
        size: 'sm',
      },
      {
        title: '低',
        value: '低',
        size: 'sm',
      },
      {
        title: '未知',
        value: '未知',
        size: 'sm',
      },
    ],
  },

  {
    title: '产品推荐（多选）',
    type: 'multi',
    value: 'productType',
    list: [
      {
        title: '人寿',
        value: '人寿',
        size: 'md',
      },
      {
        title: '重疾',
        value: '重疾',
        size: 'md',
      },
      {
        title: '医疗',
        value: '0203',
        size: 'md',
      },
      {
        title: '养老',
        value: '0204',
        size: 'md',
      },
      {
        title: '意外',
        value: '0205',
        size: 'md',
      },
      {
        title: '财产',
        value: '0206',
        size: 'md',
      },
    ],
  },

  {
    title: '家庭年收入',
    type: 'single',
    value: 'yearIncome',
    list: [
      {
        title: '10万以下',
        value: '10万以下',
        size: 'md',
      },
      {
        title: '10-30万',
        value: '10-30万',
        size: 'md',
      },
      {
        title: '30-80万',
        value: '30-80万',
        size: 'md',
      },
      {
        title: '80万以上',
        value: '80万以上',
        size: 'md',
      },
    ],
  },
  {
    title: '家庭关系',
    type: 'single',
    value: 'relation',
    list: [
      {
        title: '单身',
        value: '单身',
        size: 'md',
      },
      {
        title: '已婚未育',
        size: 'md',
        value: '已婚未育',
      },
      {
        title: '已婚有子女',
        value: '已婚有子女',
        size: 'md',
      },
    ],
  },
  {
    title: '社交爱好（多选）',
    type: 'multi',
    value: 'hobby',
    list: [
      {
        title: '养生',
        value: '养生',
        size: 'md',
      },
      {
        title: '运动',
        value: '运动',
        size: 'md',
      },
      {
        title: '旅游',
        value: '旅游',
        size: 'md',
      },
      {
        title: '餐饮',
        value: '餐饮',
        size: 'md',
      },
      {
        title: '亲子',
        value: '亲子',
        size: 'md',
      },
    ],
  },
];

export const tag = [
  {
    title: '投保意向',
    type: 'single',
    value: 'proposalPurpose',
    tagCode: '投保意向',
    list: [
      {
        title: '高',
        value: '高',
        size: 'sm',
      },
      {
        title: '中',
        value: '中',
        size: 'sm',
      },
      {
        title: '低',
        value: '低',
        size: 'sm',
      },
      {
        title: '未知',
        value: '未知',
        size: 'sm',
      },
    ],
  },

  {
    title: '产品推荐（多选）',
    type: 'multi',
    value: 'productRecommend',
    tagCode: '产品推荐',
    list: [
      {
        title: '人寿',
        value: '人寿',
        size: 'md',
      },
      {
        title: '重疾',
        value: '重疾',
        size: 'md',
      },
      {
        title: '医疗',
        value: '医疗',
        size: 'md',
      },
      {
        title: '养老',
        value: '养老',
        size: 'md',
      },
      {
        title: '意外',
        value: '意外',
        size: 'md',
      },
      {
        title: '财产',
        value: '财产',
        size: 'md',
      },
    ],
  },

  {
    title: '家庭年收入',
    type: 'single',
    value: 'familyAnnualIncome',
    tagCode: '家庭年收入',
    list: [
      {
        title: '10万以下',
        value: '10万以下',
        size: 'md',
      },
      {
        title: '10-30万',
        value: '10-30万',
        size: 'md',
      },
      {
        title: '30-80万',
        value: '30-80万',
        size: 'md',
      },
      {
        title: '80万以上',
        value: '80万以上',
        size: 'md',
      },
    ],
  },
  {
    title: '家庭关系',
    type: 'single',
    value: 'familyRelation',
    tagCode: '家庭关系',
    list: [
      {
        title: '单身',
        value: '单身',
        size: 'md',
      },
      {
        title: '已婚未育',
        size: 'md',
        value: '已婚未育',
      },
      {
        title: '已婚有子女',
        value: '已婚有子女',
        size: 'md',
      },
    ],
  },
  {
    title: '社交爱好（多选）',
    type: 'multi',
    value: 'socialHobby',
    tagCode: '社交爱好',
    list: [
      {
        title: '养生',
        value: '养生',
        size: 'md',
      },
      {
        title: '运动',
        value: '运动',
        size: 'md',
      },
      {
        title: '旅游',
        value: '旅游',
        size: 'md',
      },
      {
        title: '餐饮',
        value: '餐饮',
        size: 'md',
      },
      {
        title: '亲子',
        value: '亲子',
        size: 'md',
      },
    ],
  },
  {
    title: '自定义标签',
    type: 'custom',
    value: 'customizeTag',
    tagCode: '自定义标签',
    validate: [
      '亲子',
      '餐饮',
      '旅游',
      '运动',
      '养生',
      '已婚有子女',
      '已婚未育',
      '单身',
      '80万以上',
      '30-80万',
      '10-30万',
      '10万以下',
      '人寿',
      '重疾',
      '医疗',
      '养老',
      '意外',
      '财产',
      '高',
      '中',
      '低',
      '未知',
    ],
  },
];
