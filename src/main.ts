/*
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-06-21 19:34:02
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-07-30 21:19:53
 * @FilePath: /zat-planet-h5-cloud-insure/src/main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';
import 'virtual:svg-icons-register';
import 'amfe-flexible';
import vue3PhotoPreview from 'vue3-photo-preview';
import vconsole from 'vconsole';
import dayjs from 'dayjs';
import zh from 'dayjs/locale/zh-cn';

// pinia
import VueDOMPurifyHTML from 'vue-dompurify-html';
import store from '@/store';
import router from '@/router/index';
import '@/styles/index.scss';
import App from './App.vue';
import globalComps from '@/components/index';
import clipboard from '@/common/directives/clipboard';
import resize from '@/common/directives/resize';

dayjs.locale({ ...zh, weekStart: 1 });
const app = createApp(App);
const BASE_PREFIX = import.meta.env.VITE_API_BASEURL;

app.use(VueDOMPurifyHTML);
app.use(vue3PhotoPreview);
app.use(router).use(store);
app.use(Vant);
// app.component('ZaPageWrap', ZaPageWrap);
// 加载自定义的全局组件
app.use(globalComps);
app.directive('clipboard', clipboard);
app.directive('resize', resize);
app.mount('#app');

// if (window.location.origin.indexOf('test') !== -1) {
// eslint-disable-next-line
  new vconsole();
// }
