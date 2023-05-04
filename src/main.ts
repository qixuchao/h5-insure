/* eslint-disable no-new */
import { createApp } from 'vue';
// import Vant, { Lazyload } from 'vant';
// import 'vant/lib/index.css';
import 'virtual:svg-icons-register';
import 'amfe-flexible';
import dayjs from 'dayjs';
import zh from 'dayjs/locale/zh-cn';
import VueDOMPurifyHTML from 'vue-dompurify-html';
import vconsole from 'vconsole';

import router from '@/router/index';
import store from '@/store';
import App from './App.vue';
import globalComps from '@/components/index';
import clipboard from '@/common/directives/clipboard';
import resize from '@/common/directives/resize';
import { initNative } from '@/utils/native';
import { isTestEnv } from './utils';
import '@/styles/index.scss';

const start = async () => {
  await initNative();
  if (isTestEnv) {
    // eslint-disable-next-line new-cap
    new vconsole();
  }

  dayjs.locale({ ...zh, weekStart: 1 });
  const app = createApp(App);

  app.use(VueDOMPurifyHTML);
  app.use(router).use(store);
  // app.use(Vant);
  // app.use(Lazyload);
  // app.component('ProPageWrap', ProPageWrap);
  // 加载自定义的全局组件
  app.use(globalComps);
  app.directive('clipboard', clipboard);
  app.directive('resize', resize);
  app.mount('#app');
};

start();
