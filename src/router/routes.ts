/*
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-14 11:44:33
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-07-18 14:35:42
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
    path: '/product/detail',
    meta: { title: '产品详情' },
    component: () => import('@/views/product/detail/index.vue'),
  },
  {
    name: 'ProductList',
    path: '/productList',
    meta: { title: '产品列表' },
    component: () => import('@/views/proposal/proposalList/index.vue'),
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
    path: '/order/detail',
    meta: { title: '订单详情' },
    component: () => import('@/views/order/detail/index.vue'),
  },
  {
    name: 'compositionProposal',
    path: '/compositionProposal',
    meta: { title: '组合计划书' },
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
];

export default asyncRoutes;
