/*
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-14 11:44:33
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-09-05 17:34:48
 * @FilePath: /zat-planet-h5-cloud-insure/src/router/routes.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 需要鉴权的业务路由
import { RouteRecordRaw } from 'vue-router';

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
    name: 'healthNotice',
    path: '/healthNotice',
    meta: { title: '健康告知书' },
    component: () => import('@/views/healthNotice/index.vue'),
  },
  {
    name: 'questionNotification',
    path: '/questionNotification',
    meta: { title: '问卷告知' },
    component: () => import('@/views/questionNotification/index.vue'),
  },
  {
    name: 'createProposal',
    path: '/proposal/createProposal',
    meta: { title: '创建计划书' },
    component: () => import('@/views/proposal/createProposal/index.vue'),
  },
  {
    name: 'productDetail',
    path: '/productDetail',
    meta: { title: '产品详情' },
    component: () => import('@/views/product/detail/index.vue'),
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
    name: 'pay',
    path: '/pay',
    meta: { title: '支付状态' },
    component: () => import('@/views/pay/index.vue'),
  },
  {
    name: 'order',
    path: '/order',
    meta: { title: '订单列表' },
    component: () => import('@/views/order/index.vue'),
  },
  {
    name: 'orderDetail',
    path: '/orderDetail',
    meta: { title: '订单详情' },
    component: () => import('@/views/order/detail/index.vue'),
  },
  {
    name: 'compositionProposal',
    path: '/compositionProposal',
    meta: { title: '组合计划书', requireWxJs: true },
    component: () => import('@/views/proposal/compositionProposal/index.vue'),
  },
  {
    name: 'verify',
    path: '/verify',
    meta: { title: '身份认证' },
    component: () => import('@/views/verify/index.vue'),
  },
  {
    name: 'bankCard',
    path: '/bankCard',
    meta: { title: '添加银行卡' },
    component: () => import('@/views/bankCard/index.vue'),
  },
  {
    name: 'salesmanInform',
    path: '/salesmanInform',
    meta: { title: '营销员告知' },
    component: () => import('@/views/insureFlow/salesmanInform/index.vue'),
  },
  {
    name: 'infoCollection',
    path: '/infoCollection',
    meta: { title: '信息采集' },
    component: () => import('@/views/infoCollection/index.vue'),
  },
  {
    name: 'infoPreview',
    path: '/infoPreview',
    meta: { title: '保单预览' },
    component: () => import('@/views/infoPreview/index.vue'),
  },
  {
    name: 'customerNotice',
    path: '/customerNotice',
    meta: { title: '客户告知页' },
    component: () => import('@/views/customerNotice/index.vue'),
  },
  {
    name: 'middlePage',
    path: '/middlePage',
    meta: { title: '签名认证' },
    component: () => import('@/views/middlePage/index.vue'),
  },
  {
    name: 'PDF预览',
    path: '/pdfViewer',
    meta: { title: 'PDF预览' },
    component: () => import('@/views/openPdf/index.vue'),
  },
  {
    name: '手机号验证',
    path: '/phoneVerify',
    meta: { title: '手机号验证' },
    component: () => import('@/views/phoneVerify/index.vue'),
  },
  {
    name: '咨询登记',
    path: '/consult',
    meta: { title: '咨询登记' },
    component: () => import('@/views/consult/index.vue'),
  },
  {
    name: '登记成功',
    path: '/result',
    meta: { title: '登记成功' },
    component: () => import('@/views/consult/result.vue'),
  },
  {
    name: '赠险',
    path: '/activity/free',
    meta: { title: '赠险' },
    component: () => import('@/views/activity/free/index.vue'),
  },
  {
    name: '付费险',
    path: '/activity/productDetail',
    meta: { title: '付费险' },
    component: () => import('@/views/activity/product/detail/index.vue'),
  },
];

export default asyncRoutes;
