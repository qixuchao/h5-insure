/*
 * @Author: zhaopu
 * @Date: 2022-08-24 16:59:13
 * @LastEditors: zhaopu
 * @LastEditTime: 2022-12-14 16:55:42
 * @Description:
 */
// 跟鉴权无关的特殊路由
import { RouteRecordRaw } from 'vue-router';

const exceptionRoutes: Array<RouteRecordRaw> = [
  {
    path: '/401',
    name: '401',
    meta: {
      title: '需要登录',
    },
    component: () => import('@/views/exception/401.vue'),
  },
  {
    path: '/404',
    name: '404',
    meta: {
      title: '非常抱歉,页面走丢了',
    },
    component: () => import('@/views/exception/404.vue'),
  },
  // {
  //   path: '/:pathMatch(.*)',
  //   meta: {},
  //   redirect: '/404',
  // },
];

export default exceptionRoutes;
