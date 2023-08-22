// 需要鉴权的业务路由
import { RouteRecordRaw } from 'vue-router';

// 长期险路由
const lifeInsuranceRoutes: Array<RouteRecordRaw> = [
  {
    name: 'long-productList',
    path: '/baseInsurance/long/productList',
    meta: { title: '产品列表' },
    component: () => import('@/views/baseInsurance/templates/lianLong/productList.vue'),
  },
  {
    name: 'long-productDetail',
    path: '/baseInsurance/long/productDetail',
    meta: { title: '产品列表' },
    component: () => import('@/views/baseInsurance/templates/lianLong/index.vue'),
  },
  {
    name: 'trial',
    path: '/baseInsurance/long/trial',
    meta: { title: '试算' },
    component: () => import('@/views/baseInsurance/templates/lianLong/trial.vue'),
  },
  {
    name: 'healthNotice',
    path: '/baseInsurance/long/healthNotice',
    meta: { title: '健康告知书' },
    component: () => import('@/views/baseInsurance/templates/lianLong/healthNotice.vue'),
  },
  {
    name: 'healthNoticeView',
    path: '/baseInsurance/long/healthNotice/:id',
    meta: { title: '健康告知书' },
    component: () => import('@/views/baseInsurance/templates/lianLong/healthNotice.vue'),
  },
  // {
  //   name: 'riskNotice',
  //   path: '/baseInsurance/long/riskNotice',
  //   meta: { title: '风险告知书' },
  //   component: () => import('@/views/baseInsurance/templates/lianLong/riskNotice.vue'),
  // },
  {
    name: 'infoCollection',
    path: '/baseInsurance/long/infoCollection',
    meta: { title: '信息采集' },
    component: () => import('@/views/baseInsurance/templates/lianLong/infoCollection.vue'),
  },

  {
    name: 'verify',
    path: '/baseInsurance/long/verify',
    meta: { title: '身份认证' },
    component: () => import('@/views/baseInsurance/templates/lianLong/verify.vue'),
  },
  // {
  //   name: 'faceVerify',
  //   path: '/baseInsurance/long/faceVerify',
  //   meta: { title: '人脸识别' },
  //   component: () => import('@/views/baseInsurance/templates/lianLong/faceVerify.vue'),
  // },
  {
    name: 'phoneVerify',
    path: '/baseInsurance/long/phoneVerify',
    meta: { title: '空中签名' },
    component: () => import('@/views/baseInsurance/templates/lianLong/phoneVerify.vue'),
  },
  {
    name: 'infoPreview',
    path: '/baseInsurance/long/infoPreview',
    meta: { title: '保单预览' },
    component: () => import('@/views/baseInsurance/templates/lianLong/infoPreview.vue'),
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
  {
    name: 'scribing',
    path: '/baseInsurance/long/scribing',
    meta: { title: '抄录' },
    component: () => import('@/views/baseInsurance/templates/lianLong/handleScribing.vue'),
  },
  {
    name: 'scribingPreview',
    path: '/baseInsurance/long/scribingPreview',
    meta: { title: '抄录' },
    component: () => import('@/views/baseInsurance/templates/lianLong/scribingPreview.vue'),
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
    component: () => import('@/views/baseInsurance/templates/short.vue'),
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
  //   component: () => import('@/views/baseInsurance/templates/lianLong/index.vue'),
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
    component: () => import('@/views/baseInsurance/templates/lianLong/trialPreview.vue'),
  },
  ...lifeInsuranceRoutes,
  // 长期险投保结果
  {
    name: 'baseInsuranceLongResult',
    path: '/baseInsurance/long/result',
    meta: { title: '', requireWxJs: false },
    component: () => import('@/views/baseInsurance/templates/lianLong/result.vue'),
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
  // {
  //   name: 'trial',
  //   path: '/trial',
  //   meta: { title: '保费试算' },
  //   component: () => import('@/views/trial/index.vue'),
  // },
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
