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
    name: 'question',
    path: '/question',
    meta: { title: '问卷' },
    component: () => import('@/views/question/index.vue'),
  },
  {
    name: 'ProductList',
    path: '/product-list',
    meta: { title: '产品列表' },
    component: () => import('@/views/proposal/proposalList/index.vue'),
  },
];

export default asyncRoutes;
