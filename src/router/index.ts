import { Dialog } from 'vant';
import {
  createRouter,
  createWebHistory,
  NavigationGuardNext,
  RouteLocationNormalized,
  Router,
  RouteRecordRaw,
} from 'vue-router';

import NProgress from 'nprogress';
import { useTitle } from '@vueuse/core';
import wx from 'weixin-js-sdk';
import Storage from '@/utils/storage';
import { REDIRECT_URI, ORIGIN } from '@/utils';
import routes from '@/router/routes';

// import { accountLogin, searchUserByToken } from '@/api/modules/user';
import useStore from '@/store/app';
import { getJssdkSignature } from '@/api/modules/wechat';
import { isWechat } from '@/utils/index';

const router: Router = createRouter({
  // 新的vue-router4 使用 history路由模式 和 base前缀
  history: createWebHistory(import.meta.env.VITE_BASE),
  routes,
});
// authList
const authList: Array<string> = ['My', 'MsgList', 'FollowList', 'Profile', 'ModifyPwd', 'MyResetPwd'];
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
    // const code = to.query.code;
    if (to.query.bizSrc) {
      storage.set('systemChannel', to.query.bizSrc);
    }
    if (to.query?.code) {
      // 登录获取token
      // const { data } = await accountLogin({
      //   clientId: 'ZA',
      //   code: to.query.code,
      //   source: 'app',
      //   // eslint-disable-next-line no-restricted-globals
      //   redirectUri: `${location.origin}${location.pathname}`,
      // });
      // await handlePageResult({}, storage, next);
    } else {
      // 绕过登录
      if (to.path === '/mock') {
        storage.set(
          'token',
          'eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjoie1wiYWdlbmN5XCI6e1wiYWdlbmN5SWRcIjpcIjE5MVwiLFwiYWdlbmN5TmFtZVwiOlwi5bm_5bee56ys5LiA6JCl6ZSA5pyN5Yqh6YOoXCJ9LFwiYWdlbmN5TGlzdFwiOltcIjE5MVwiXSxcImNoYW5uZWxcIjp7XCJjaGFubmVsSWRcIjpcIktBXCIsXCJjaGFubmVsTmFtZVwiOlwi5Liq5Lq66JCl6ZSA5rig6YGTXCJ9LFwiY2hhbm5lbExpc3RcIjpbe1wiY2hhbm5lbElkXCI6XCJLQVwiLFwiY2hhbm5lbE5hbWVcIjpcIuS4quS6uuiQpemUgOa4oOmBk1wifV0sXCJoYXNPbmxpbmVRdWFsaWZpY2F0aW9uXCI6XCJZXCIsXCJqdXJpc2RpY3Rpb25CcmFuY2hJZExpc3RcIjpbXSxcImxldmVsQ25cIjpcIkFNLeaAu-ebkVwiLFwibGV2ZWxVc1wiOlwiQU1cIixcIm5hdHVyZVwiOlwiT1wiLFwicGFyZW50QnJhbmNoSW5mb1wiOntcImhhc0NoaWxkXCI6MSxcIm1lbWJlckNvZGVcIjpcIjRcIixcIm1lbWJlck5hbWVcIjpcIuW5v-W3nuacrOmDqFwiLFwibWVtYmVyVHlwZVwiOlwiQlwifSxcInBhcmVudEZhbWlseUluZm9cIjp7XCJoYXNDaGlsZFwiOjEsXCJtZW1iZXJDb2RlXCI6XCI4MDAwMzM4OFwiLFwibWVtYmVyTmFtZVwiOlwi6buO5bCR546y5a625pePXCIsXCJtZW1iZXJUeXBlXCI6XCJVXCJ9LFwicXVhbGlmaWNhdGlvbkRUT1wiOnt9LFwidXNlcklkXCI6XCI4MDAwMzM4OFwiLFwidXNlck5hbWVcIjpcIum7juWwkeeOslwiLFwidXNlclR5cGVcIjpcIk9cIn0ifQ.OCQfmIu3mPCbGH0DvfpIDvUZDLzRiooN76jwQ97MIah8uYypDrzunlJ3wMIUjDmhy-5zgD3wBn-THiq9xvPIZg',
        );
        next('/');
      }
      // 已登录
      if (storage.get('token')) {
        next();
      } else {
        storage.set('url', window.location.href);
        // window.location.href = REDIRECT_URI;
      }
    }
  }
});

const IS_WECHAT = isWechat();
router.beforeResolve(async (to, from) => {
  if (to.meta.requireWxJs && IS_WECHAT) {
    const res = await getJssdkSignature({ url: encodeURIComponent(realAuthUrl), systemCode: 'ZAXY_OFFICIAL' });
    wx.config({
      debug: false,
      appId: res.data.data.appid,
      timestamp: res.data.data.timestamp,
      nonceStr: res.data.data.nonceStr,
      signature: res.data.data.signature,
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
