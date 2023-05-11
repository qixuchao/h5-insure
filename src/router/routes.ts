// 需要鉴权的业务路由
import { RouteRecordRaw } from 'vue-router';

// 长期险路由
const lifeInsuranceRoutes: Array<RouteRecordRaw> = [
  {
    name: 'healthNotice',
    path: '/baseInsurance/long/healthNotice',
    meta: { title: '健康告知书' },
    component: () => import('@/views/baseInsurance/templates/long/healthNotice.vue'),
  },
  {
    name: 'long-productDetail',
    path: '/baseInsurance/long/productDetail',
    meta: { title: '产品详情' },
    component: () => import('@/views/baseInsurance/templates/long/index.vue'),
  },
  {
    name: 'verify',
    path: '/baseInsurance/long/verify',
    meta: { title: '身份认证' },
    component: () => import('@/views/baseInsurance/templates/long/verify.vue'),
  },
  {
    name: 'phoneVerify',
    path: '/baseInsurance/long/phoneVerify',
    meta: { title: '空中签名' },
    component: () => import('@/views/baseInsurance/templates/long/phoneVerify.vue'),
  },
  {
    name: 'infoCollection',
    path: '/baseInsurance/long/infoCollection',
    meta: { title: '信息采集' },
    component: () => import('@/views/baseInsurance/templates/long/infoCollection.vue'),
  },
  {
    name: 'infoPreview',
    path: '/baseInsurance/long/infoPreview',
    meta: { title: '保单预览' },
    component: () => import('@/views/baseInsurance/templates/long/infoPreview.vue'),
  },
  {
    name: 'middlePage',
    path: '/middlePage',
    meta: { title: '投保' },
    component: () => import('@/views/middlePage/index.vue'),
  },
  {
    name: 'previewMiddlePage',
    path: '/previewMiddlePage',
    meta: { title: '预览' },
    component: () => import('@/views/middlePage/preview.vue'),
  },
];

// 计划书路由
const proposalRoutes: Array<RouteRecordRaw> = [
  {
    name: 'CreateProposal',
    path: '/proposal/createProposal',
    meta: { title: '创建计划书', cacheSource: ['ProposalList'], cacheTarget: ['ProposalListSelect'] },
    component: () => import('@/views/proposal/createProposal/index.vue'),
  },
  {
    name: 'ProposalList',
    path: '/proposalList',
    meta: { title: '计划书列表', cacheTarget: ['CreateProposal'] },
    component: () => import('@/views/proposal/proposalList/index.vue'),
  },
  {
    name: 'ProposalListSelect',
    path: '/proposalListSelect',
    meta: { title: '添加产品', cacheSource: ['CreateProposal'] },
    component: () => import('@/views/proposal/proposalListSelect/index.vue'),
  },
  {
    name: 'historyProposalList',
    path: '/historyProposalList',
    meta: { title: '历史计划书列表' },
    component: () => import('@/views/proposal/historyList/index.vue'),
  },
  {
    name: 'compositionProposal',
    path: '/compositionProposal',
    meta: { title: '组合计划书', requireWxJs: false },
    component: () => import('@/views/proposal/compositionProposal/index.vue'),
  },
  {
    name: 'proposalCover',
    path: '/proposalCover',
    meta: { title: '计划书封面', requireWxJs: false },
    component: () => import('@/views/proposal/compositionProposal/cover.vue'),
  },
];

// 基线在线投保模板
const baseInsurance = [
  // 赠险模板
  {
    name: 'baseInsuranceFree',
    path: '/baseInsurance/free',
    meta: { title: '', keepAlive: true },
    component: () => import('@/views/baseInsurance/templates/free.vue'),
  },
  // 短险模板
  {
    name: 'InsuranceShort',
    path: '/baseInsurance/short',
    meta: { title: '', keepAlive: true, requireWxJs: false },
    component: () => import('@/views/baseInsurance/templates/short3.vue'),
  },
  {
    name: 'baseInsuranceShort3',
    path: '/baseInsurance/short3',
    meta: { title: '', keepAlive: true, requireWxJs: false },
    component: () => import('@/views/baseInsurance/templates/short3.vue'),
  },
  // 短险-升级款（魔方）
  {
    name: 'baseInsuranceUpgrade',
    path: '/baseInsurance/upgrade',
    meta: { title: '', keepAlive: true, requireWxJs: false },
    component: () => import('@/views/baseInsurance/templates/upgrade.vue'),
  },
  // 长期险+年金
  // {
  //   name: 'baseInsuranceLong',
  //   path: '/baseInsurance/long',
  //   meta: { title: '', keepAlive: true, requireWxJs: false },
  //   component: () => import('@/views/baseInsurance/templates/long/index.vue'),
  // },
  // 网电销-坐下下单
  {
    name: 'baseInsuranceNetsale',
    path: '/baseInsurance/netsale',
    meta: { title: '', keepAlive: true },
    component: () => import('@/views/baseInsurance/templates/netSale/index.vue'),
  },
  // 网电销-客户确认订单
  {
    name: 'baseInsuranceNetDetail',
    path: '/baseInsurance/netDetail',
    meta: { title: '', keepAlive: true, requireWxJs: false },
    component: () => import('@/views/baseInsurance/templates/netSale/detail.vue'),
  },
  // 投保流程-订单详情
  {
    name: 'baseInsuranceOrderDetail',
    path: '/baseInsurance/orderDetail',
    meta: { title: '', requireWxJs: false },
    component: () => import('@/views/baseInsurance/orderDetail/index.vue'),
  },
  // 长期险试算
  {
    name: 'baseInsuranceTrialPreview',
    path: '/baseInsurance/trialPreview',
    meta: { title: '', requireWxJs: false },
    component: () => import('@/views/baseInsurance/templates/long/trialPreview.vue'),
  },
  ...lifeInsuranceRoutes,
  // 长期险投保结果
  {
    name: 'baseInsuranceLongResult',
    path: '/baseInsurance/long/result',
    meta: { title: '', requireWxJs: false },
    component: () => import('@/views/baseInsurance/templates/long/Result/index.vue'),
  },
];

const asyncRoutes: Array<RouteRecordRaw> = [
  {
    name: 'Home',
    path: '/',
    component: () => import('@/views/home/index.vue'),
    meta: {
      title: '主页',
    },
  },
  {
    name: 'Menu',
    path: '/menu',
    component: () => import('@/views/home/menu.vue'),
    meta: {
      title: '导航',
    },
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录',
    },
  },
  {
    name: 'trial',
    path: '/trial',
    meta: { title: '保费试算' },
    component: () => import('@/views/trial/index.vue'),
  },
  {
    name: 'demo',
    path: '/demo',
    meta: { title: 'demo' },
    component: () => import('@/views/demo/index.vue'),
  },
  {
    name: 'FormDemo',
    path: '/base/form',
    meta: { title: '表单 Demo' },
    component: () => import('@/views/demo/form/index.vue'),
  },
  {
    name: 'schemaFormDemo',
    path: '/base/form/schema',
    meta: { title: '表单 Schema Demo' },
    component: () => import('@/views/demo/form/schema.vue'),
  },
  {
    name: 'table',
    path: '/tableDemo',
    meta: { title: '表格' },
    component: () => import('@/views/demo/table.vue'),
  },

  {
    name: 'order',
    path: '/order',
    meta: { title: '投保单列表' },
    component: () => import('@/views/order/index.vue'),
  },
  {
    name: 'orderDetail',
    path: '/orderDetail',
    meta: { title: '投保单详情' },
    component: () => import('@/views/order/detail/index.vue'),
  },
  {
    name: 'pdfViewer',
    path: '/pdfViewer',
    meta: { title: 'PDF预览' },
    component: () => import('@/views/openPdf/index.vue'),
  },

  {
    name: 'consult',
    path: '/consult',
    meta: { title: '咨询登记' },
    component: () => import('@/views/consult/index.vue'),
  },
  {
    name: 'result',
    path: '/result',
    meta: { title: '登记成功' },
    component: () => import('@/views/consult/result.vue'),
  },
  {
    name: '收银台',
    path: '/cashier/pay',
    meta: { title: '收银台', requireWxJs: false },
    component: () => import('@/views/cashier/index.vue'),
  },
  {
    name: '支付',
    path: '/cashier/signPay',
    meta: { title: '支付签约' },
    component: () => import('@/views/cashier/signPay.vue'),
  },
  {
    name: '微信签约',
    path: '/cashier/payCheck',
    meta: { title: '支付签约中转', requireWxJs: false },
    component: () => import('@/views/cashier/payCheck.vue'),
  },
  {
    name: '文件预览',
    path: '/template/filePreview',
    meta: { title: '文件预览' },
    component: () => import('@/views/baseInsurance/filePreview/index.vue'),
  },
  ...proposalRoutes,
  ...baseInsurance,
];

export default asyncRoutes;
