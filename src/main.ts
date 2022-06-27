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
import store from '@/store';
import router from '@/router/index';
import ZaPageWrap from '@/components/ZaPageWrap';
import '@/styles/index.scss';
import App from './App.vue';
import globalComps from '@/components/index';
import clipboard from '@/common/directives/clipboard';
import resize from '@/common/directives/resize';

dayjs.locale({ ...zh, weekStart: 1 });
const app = createApp(App);
const BASE_PREFIX = import.meta.env.VITE_API_BASEURL;

app.use(vue3PhotoPreview);
app.use(router).use(store);
app.use(Vant);
// app.component('ZaPageWrap', ZaPageWrap);
// 加载自定义的全局组件
app.use(globalComps);
app.directive('clipboard', clipboard);
app.directive('resize', resize);
app.mount('#app');

if (BASE_PREFIX.indexOf('/acvmtest') === -1) {
  // eslint-disable-next-line
  // new vconsole();
}
