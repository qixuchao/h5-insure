import { Dialog } from 'vant';
import { createRouter, createWebHistory, NavigationGuardNext, Router } from 'vue-router';

import { useTitle } from '@vueuse/core';
import wx from 'weixin-js-sdk';
import Storage from '@/utils/storage';
import { ORIGIN } from '@/utils';
import routes from '@/router/routes';

import useStore from '@/store/app';
import { getJssdkSignature } from '@/api/modules/wechat';
import { isWechat } from '@/utils/index';

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

router.beforeEach(async (to, from, next) => {
  next();
  if (!realAuthUrl) {
    realAuthUrl = ORIGIN + (to.redirectedFrom || to.fullPath);
  }
  const store = useStore();
  if (store.checkBack && to.hash !== '#validForm' && from.hash !== '#validForm') {
    try {
      await Dialog.confirm({ message: '当前数据未保存，是否离开？', closeOnPopstate: false });
      store.checkBack = false;
    } catch (e) {
      next(false);
      return;
    }
  }
  console.log(window.location.href, `${ORIGIN}${to.path}`, window.location.pathname);
  // set title 给App或浏览器标题栏显示
  useTitle(to.meta?.title as string); // || (VITE_TITLE as string));
  if (to.path === '/login' || to.query.flag === 'N') {
    next();
  } else {
    // 代理人登录
    const storage = new Storage({ source: 'localStorage' });
    // 已登录
    if (storage.get('token')) {
      next();
    } else {
      window.location.href = '/login';
    }
  }
});

const IS_WECHAT = isWechat();
router.beforeResolve(async (to, from) => {
  if (to.meta.requireWxJs && IS_WECHAT) {
    console.log('在微信环境，开始鉴权');
    const res = await getJssdkSignature({ url: encodeURIComponent(realAuthUrl) });
    const {
      data: { appid, timestamp, nonceStr, signature },
    } = res;
    wx.config({
      debug: false,
      appId: appid,
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
