<template>
  <router-view v-slot="{ Component, route }" class="router-view">
    <keep-alive>
      <component :is="Component" v-if="route.meta.keepAlive" :key="route.path"></component>
    </keep-alive>
    <component :is="Component" v-if="!route.meta.keepAlive" :key="route.path"></component>
  </router-view>
</template>
<script lang="ts" setup>
import { injectGlobal } from '@emotion/css';

import { getConfig } from './utils/config';
import themes from './themes';
import { useThemesStore } from './store/themes';
import useLoading from '@/hooks/useLoading';

const styleMap = {
  default: () => import('@/styles/themes/default.scss'),
  blue: () => import('@/styles/themes/blue.scss'),
};
onBeforeMount(async () => {
  const type = 'default';
  const style = (await styleMap[type]()).default;
  useThemesStore().setThemes(themes, type);
  injectGlobal(style);
});

const X_FLOW = `https://xflowcloud.zhongan.io/sdk/dist/js/v0.0.1/ilog.js?id=${getConfig('xflow')}&history=true`;
const loadXFlow = () => {
  ((para) => {
    const w = window;
    const d = document;
    const s = 'script';
    const a = para.sdkUrl;
    if (typeof window.XFlowAnalysisSetting !== 'undefined') {
      return false;
    }
    w.XFlowAnalysisSetting = para;
    const x = d.createElement(s);
    const y = d.getElementsByTagName(s)[0];
    x.src = a;
    x.async = true;
    if (y.parentNode) {
      y.parentNode.insertBefore(x, y);
    }
    return '';
  })({
    sdkUrl: X_FLOW, // 例如：https://xflowcloud.zhongan.io/sdk/dist/js/v0.0.1/ilog.js
    siteId: getConfig('xflow'), // 站点id
    name: '_XFLOW_', // new XFlow实例化后，暴露在window的变量名称. 主要供自定义事件使用
    debug: false, // 默认为 false，true 则会在控制台打印上报日志
    history: true, // 是否是单页面应用
    serverUrl: getConfig('xflowServerUrl'), // 例如：https://xflowcloud.zhongan.io/nginx/cloud_web_sdk.gif
  });
};
const addScript = (url: string, isAsync = true) => {
  console.log('加载脚本：', url);

  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = isAsync;
  script.src = url;
  script.onload = () => {
    if (url.includes('ilog')) {
      loadXFlow();
    }
  };
  document.getElementsByTagName('head')[0].appendChild(script);
};
// const ld = ref(true);
onMounted(() => {
  console.log('ISEE:', getConfig('isee'), '\nX_FLOW:', X_FLOW);
  addScript(getConfig('isee')); // 千里眼SDK
  addScript(X_FLOW); // 埋点SDK

  // useLoading(l);
  // setTimeout(() => {
  //   ld.value = false;
  // }, 4000);
});
</script>
<style lang="scss">
.router-view {
  width: 100%;
  height: 100vh;
  // top: 0;
  // bottom: 0;
  margin: 0 auto;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  display: flex;
  flex-direction: column;
}
.page {
  background-color: #fff;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}

.slide-right-enter {
  opacity: 1;
  transform: translate3d(-100%, 0, 0);
}

.slide-right-leave-active {
  opacity: 1;
  transform: translate3d(100%, 0, 0);
}

.slide-left-enter {
  opacity: 1;
  transform: translate3d(100%, 0, 0);
}

.slide-left-leave-active {
  opacity: 1;
  transform: translate3d(-100%, 0, 0);
}
</style>
