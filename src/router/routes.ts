/*
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-14 11:44:33
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-07-14 13:56:03
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
    name: 'createProposal',
    path: '/proposal/createProposal',
    meta: { title: '创建计划书' },
    component: () => import('@/views/proposal/createProposal/index.vue'),
  },
];

export default asyncRoutes;
