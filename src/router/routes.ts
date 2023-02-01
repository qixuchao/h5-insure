/*
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-14 11:44:33
 * @LastEditors: kevin.liang
 * @LastEditTime: 2023-01-30 10:41:14
 * @FilePath: /zat-planet-h5-cloud-insure/src/router/routes.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 需要鉴权的业务路由
import { RouteRecordRaw } from 'vue-router';

// 人身险路由
const lifeInsuranceRoutes: Array<RouteRecordRaw> = [
  {
    name: 'healthNotice',
    path: '/healthNotice',
    meta: { title: '健康告知书' },
    component: () => import('@/views/lifeInsurance/healthNotice/index.vue'),
  },
  {
    name: 'questionNotification',
    path: '/questionNotification',
    meta: { title: '问卷告知' },
    component: () => import('@/views/lifeInsurance/questionNotification/index.vue'),
  },
  {
    name: 'productDetail',
    path: '/productDetail',
    meta: { title: '产品详情' },
    component: () => import('@/views/lifeInsurance/product/detail/index.vue'),
  },
  {
    name: 'pay',
    path: '/pay',
    meta: { title: '支付状态' },
    component: () => import('@/views/lifeInsurance/pay/index.vue'),
  },
  {
    name: 'verify',
    path: '/verify',
    meta: { title: '身份认证' },
    component: () => import('@/views/lifeInsurance/verify/index.vue'),
  },
  {
    name: 'bankCard',
    path: '/bankCard',
    meta: { title: '添加银行卡' },
    component: () => import('@/views/lifeInsurance/bankCard/index.vue'),
  },
  {
    name: 'salesmanInform',
    path: '/salesmanInform',
    meta: { title: '营销员告知' },
    component: () => import('@/views/lifeInsurance/salesmanInform/index.vue'),
  },
  {
    name: 'infoCollection',
    path: '/infoCollection',
    meta: { title: '信息采集' },
    component: () => import('@/views/lifeInsurance/infoCollection/index.vue'),
  },
  {
    name: 'infoPreview',
    path: '/infoPreview',
    meta: { title: '保单预览' },
    component: () => import('@/views/lifeInsurance/infoPreview/index.vue'),
  },
  {
    name: 'customerNotice',
    path: '/customerNotice',
    meta: { title: '客户告知页' },
    component: () => import('@/views/lifeInsurance/customerNotice/index.vue'),
  },
  {
    name: 'middlePage',
    path: '/middlePage',
    meta: { title: ' ' },
    component: () => import('@/views/middlePage/index.vue'),
  },
  {
    name: 'previewMiddlePage',
    path: '/previewMiddlePage',
    meta: { title: '预览' },
    component: () => import('@/views/previewMiddlePage/index.vue'),
  },
  {
    name: '手机号验证',
    path: '/phoneVerify',
    meta: { title: '手机号验证' },
    component: () => import('@/views/lifeInsurance/phoneVerify/index.vue'),
  },
];

// 计划书路由
const proposalRoutes: Array<RouteRecordRaw> = [
  {
    name: 'createProposal',
    path: '/proposal/createProposal',
    meta: { title: '创建计划书' },
    component: () => import('@/views/proposal/createProposal/index.vue'),
  },
  {
    name: 'proposalList',
    path: '/proposalList',
    meta: { title: '计划书列表' },
    component: () => import('@/views/proposal/proposalList/index.vue'),
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

// 创新-白鸽宝路由
const baigebaoRoutes = [
  {
    name: 'baigebaoCheck',
    path: '/chuangxin/baigebao/check',
    meta: { title: '审核' },
    component: () => import('@/views/chuangxin/baigebao/check/index.vue'),
  },
  {
    name: 'baigebaoFree',
    path: '/chuangxin/baigebao/free',
    meta: { title: '赠险' },
    component: () => import('@/views/chuangxin/baigebao/free/index.vue'),
  },
  {
    name: 'baigebaoProductDetail',
    path: '/chuangxin/baigebao/productDetail',
    meta: { title: '付费险' },
    component: () => import('@/views/chuangxin/baigebao/product/detail/index.vue'),
  },
  {
    name: 'baigebaoGuaranteeUpgrade',
    path: '/chuangxin/baigebao/guaranteeUpgrade',
    meta: { title: '保障升级' },
    component: () => import('@/views/chuangxin/baigebao/upgrade/index.vue'),
  },
  {
    name: 'baigebaoPayFail',
    path: '/chuangxin/baigebao/payFail',
    meta: { title: '支付失败' },
    component: () => import('@/views/chuangxin/baigebao/payFail/index.vue'),
  },
  {
    name: 'baigebaoOrderDetail',
    path: '/chuangxin/baigebao/orderDetail',
    meta: { title: '投保成功页' },
    component: () => import('@/views/chuangxin/baigebao/orderDetail/index.vue'),
  },
];

// 互联网在线投保
const internetRoutes = [
  {
    name: 'internetProductDetail',
    path: '/internet/productDetail',
    meta: { title: '付费险' },
    component: () => import('@/views/internet/product/detail/index.vue'),
  },
  {
    name: 'productDetailPackage',
    path: '/internet/productDetail/package',
    meta: { title: '付费险' },
    component: () => import('@/views/internet/product/detail/packageProcess.vue'),
  },
  {
    name: 'internetGuaranteeUpgrade',
    path: '/internet/guaranteeUpgrade',
    meta: { title: '保障升级' },
    component: () => import('@/views/internet/upgrade/index.vue'),
  },
  {
    name: 'internetOrderDetail',
    path: '/internet/orderDetail',
    meta: { title: '投保成功页' },
    component: () => import('@/views/internet/orderDetail/index.vue'),
  },
  {
    name: 'internetPayFail',
    path: '/internet/payFail',
    meta: { title: '支付失败' },
    component: () => import('@/views/internet/payFail/index.vue'),
  },
];

// 基线在线投保模板
const baseInsurance = [
  {
    name: 'base赠险',
    path: '/baseInsurance/free',
    meta: { title: '', keepAlive: true },
    component: () => import('@/views/baseInsurance/templates/free.vue'),
  },
  {
    name: 'base一年期',
    path: '/baseInsurance/short',
    meta: { title: '', keepAlive: true, requireWxJs: false },
    component: () => import('@/views/baseInsurance/templates/short.vue'),
  },
  {
    name: 'base网电销',
    path: '/baseInsurance/netsale',
    meta: { title: '', keepAlive: true },
    component: () => import('@/views/baseInsurance/templates/netSale/index.vue'),
  },
  {
    name: 'base网电销详情',
    path: '/baseInsurance/netDetail',
    meta: { title: '', keepAlive: true, requireWxJs: false },
    component: () => import('@/views/baseInsurance/templates/netSale/detail.vue'),
  },
  {
    name: 'baseInsurance-orderDetail',
    path: '/baseInsurance/orderDetail',
    meta: { title: '', requireWxJs: false },
    component: () => import('@/views/baseInsurance/orderDetail/index.vue'),
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
  ...lifeInsuranceRoutes,
  ...internetRoutes,
  ...baseInsurance,
];

export default asyncRoutes;
