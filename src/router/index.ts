import { Dialog } from 'vant';
import { createRouter, createWebHistory, NavigationGuardNext, Router } from 'vue-router';

import { useTitle } from '@vueuse/core';
import wx from 'weixin-js-sdk';
import dayjs from 'dayjs';
import Storage from '@/utils/storage';
import { ORIGIN } from '@/utils';
import routes from '@/router/routes';
import useAppStore from '@/store/app';
import { getWxJsSdkSignature } from '@/api/modules/wechat';
import { isWechat, setPageTitle } from '@/utils/index';
import { cachePage } from '@/utils/cachePage';
import { ROUTE_EXCLUDE } from '@/views/baseInsurance/templates/lianLong/constants';

const router: Router = createRouter({
  // 新的vue-router4 使用 history路由模式 和 base前缀
  history: createWebHistory(import.meta.env.VITE_BASE),
  routes,
});

/**
 * @description: 全局路由前置守卫，在进入路由前触发，导航在所有守卫 resolve 完之前一直处于等待中。
 * @param {RouteLocationNormalized} to  即将要进入的目标
 * @param {RouteLocationNormalizedLoaded} from  当前导航正在离开的路由
 * @return {*}
 */

const handlePageResult = async (res: { status: number; data: string }, storage: Storage, next: NavigationGuardNext) => {
  if (res?.status === 200) {
    storage.set('token', res.data);
    // const { data } = await searchUserByToken();
    // storage.set('userInfo', data?.data || {});
    const url = storage.get('url');
    if (url) {
      window.location.replace(url);
    } else {
      next();
    }
  }
};
let realAuthUrl = '';

const routeExclude = [
  {
    to: '',
    from: '',
  },
];

const currentDate = dayjs().format('YYYY-MM-DD');

router.beforeEach(async (to, from, next) => {
  const { expiryDate, tenantId } = to.query;
  if (expiryDate && currentDate !== expiryDate) {
    Dialog.alert({
      message: '投保链接已过期',
      showConfirmButton: false,
    });
    return;
  }
  const excludeRoute = ROUTE_EXCLUDE.find((route) => {
    return route.to === to.path && route.from === from.path;
  });
  if (excludeRoute) {
    router.push({
      path: '/order',
      query: {
        tenantId,
        laShowNavigationBar: 1,
      },
    });
    return;
  }
  // 处理缓存页面
  await cachePage(from, to);
  next();
  if (!realAuthUrl) {
    realAuthUrl = ORIGIN + (to.redirectedFrom || to.fullPath);
  }
  const store = useAppStore();
  if (store.checkBack && to.hash !== '#validForm' && from.hash !== '#validForm') {
    try {
      await Dialog.confirm({ message: '当前数据未保存，是否离开？', closeOnPopstate: false });
      store.checkBack = false;
    } catch (e) {
      next(false);
      return;
    }
  }
  console.log(window.location.href, `${ORIGIN}${to.path}`);
  // set title 给App或浏览器标题栏显示 // || (VITE_TITLE as string));
  setPageTitle((to.meta?.title || to.query?.title) as string);

  if (to.path === '/login' || to.query.flag === 'N') {
    next();
  } else {
    // 代理人登录
    const storage = new Storage({ source: 'localStorage' });
    // 已登录
    if (storage.get('token')) {
      next();
    } else {
      next();
      // window.location.href = '/login';
    }
  }
});

router.beforeResolve(async (to, from) => {
  const IS_WECHAT = isWechat();
  const { wxDebugger = false, ticket = '' } = to.query;
  console.log('IS_WECHAT', IS_WECHAT);
  if (IS_WECHAT && to.meta.requireWxJs) {
    const tenantId = to.query?.tenantId as string;
    console.log('在微信环境，开始鉴权, tenantId:', tenantId, 'from:', from);
    const res = await getWxJsSdkSignature({ pageUrl: realAuthUrl, tenantId, ticket: `${ticket}` });
    const {
      data: { appId, timestamp, nonceStr, signature },
    } = res;
    sessionStorage.appId = appId;
    wx.config({
      debug: wxDebugger as boolean,
      appId,
      timestamp,
      nonceStr,
      signature,
      jsApiList: [
        'startRecord',
        'stopRecord',
        'playVoice',
        'checkJsApi',
        'uploadVoice',
        'updateAppMessageShareData',
        'updateTimelineShareData',
        'onMenuShareAppMessage',
        'onMenuShareTimeline',
        'chooseImage',
        'uploadImage',
        'chooseWXPay', // 微信支付
      ],
    });
    wx.ready(() => {
      console.log('wechat js sdk 注入成功');
      console.log(realAuthUrl);
    });
    wx.error((err: any) => {
      console.warn('jssdk 注入失败', err);
    });
  }
});

export default router;
