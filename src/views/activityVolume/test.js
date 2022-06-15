export const periodMock = {
  status: 200,
  message: '请求成功',
  data: {
    tenantId: 2,
    userId: 'dafa',
    period: ['年', '日', '月', '周', '半年', '季度'],
  },
};

export const statisticCustomerMock = {
  status: 200,
  message: '请求成功',
  data: {
    toBeFollowedUp: {
      itemCode: '12',
      itemName: '待跟进',
      itemTerm: '人',
      itemSum: 2,
    },
    phoneInvitation: {
      itemCode: '13',
      itemName: '电话邀约',
      itemTerm: '人',
      itemSum: 4,
    },
    interview: {
      itemCode: '14',
      itemName: '接触面谈',
      itemTerm: '人',
      itemSum: 3,
    },
    requirementAnalysis: {
      itemCode: '15',
      itemName: '需求分析',
      itemTerm: '人',
      itemSum: 1,
    },
    presentation: {
      itemCode: '16',
      itemName: '呈现促成',
      itemTerm: '人',
      itemSum: 6,
    },
    article: {
      itemCode: '01',
      itemName: '文章',
      itemTerm: '次',
      itemSum: 5,
    },
    poster: {
      itemCode: '02',
      itemName: '海报',
      itemTerm: '次',
      itemSum: 8,
    },
    wechatMoments: {
      itemCode: '03',
      itemName: '朋友圈',
      itemTerm: '次',
      itemSum: 23,
    },
    externalPush: {
      itemCode: '17',
      itemName: '外部推送',
      itemTerm: '次',
      itemSum: 15,
    },
    forwardArticleCustomer: {
      itemCode: '01',
      itemName: '文章',
      itemTerm: '人',
      itemSum: 1.0,
    },
    forwardPosterCustomer: {
      itemCode: '02',
      itemName: '海报',
      itemTerm: '人',
      itemSum: 1.0,
    },
    forwardWechatMomentsCustomer: {
      itemCode: '03',
      itemName: '朋友圈',
      itemTerm: '人',
      itemSum: 1.0,
    },
    otherActivityCustomer: {
      itemCode: '17',
      itemName: '外部推送',
      itemTerm: '人',
      itemSum: 4.0,
    },
  },
};

export const statisticQuotaMock = {
  status: 200,
  message: '请求成功',
  data: {
    totalItemRate: '8.0%',
    customerAcquisition: {
      itemCode: '101',
      itemName: '客户获取',
      itemTerm: '人',
      itemSum: 4.0,
      targetSum: 10,
      itemRate: '40.0%',
    },
    phoneInvitation: {
      itemCode: '102',
      itemName: '电话邀约',
      itemTerm: '次',
      itemSum: 0,
      targetSum: 10,
      itemRate: '0.0%',
    },
    interview: {
      itemCode: '103',
      itemName: '接触面谈',
      itemTerm: '次',
      itemSum: 0,
      targetSum: 10,
      itemRate: '0.0%',
    },
    requirementAnalysis: {
      itemCode: '104',
      itemName: '需求分析',
      itemTerm: '次',
      itemSum: 0,
      targetSum: 10,
      itemRate: '0.0%',
    },
    presentation: {
      itemCode: '105',
      itemName: '呈现促成',
      itemTerm: '次',
      itemSum: 0,
      targetSum: 10,
      itemRate: '0.0%',
    },
    sfyp: {
      itemCode: '106',
      itemName: 'SFYP',
      itemTerm: '元',
      itemSum: 0,
      targetSum: 10,
      itemRate: '0.0%',
    },
    fyc: {
      itemCode: '107',
      itemName: 'FYC',
      itemTerm: '元',
      itemSum: 0,
      targetSum: 10,
      itemRate: '0.0%',
    },
    insurancePolicySvc: {
      itemCode: '108',
      itemName: '保单服务',
      itemTerm: '次',
      itemSum: 0,
    },
    transferIntroduction: {
      itemCode: '109',
      itemName: '转介绍',
      itemTerm: '次',
      itemSum: 0,
    },
  },
};

export const statisticWorkMock = {
  status: 200,
  message: '请求成功',
  data: {
    schedule: {
      itemCode: '302',
      itemName: '日程',
      itemSum: 2.0,
      targetSum: 4.0,
    },
    log: {
      itemCode: '301',
      itemName: '日志',
      itemSum: 2.0,
      targetSum: 4,
    },
  },
};
