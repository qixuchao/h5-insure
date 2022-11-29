<template>
  <router-view v-slot="{ Component, route }" class="router-view">
    <template v-if="Component">
      <keep-alive v-if="route.meta.keepAlive">
        <suspense>
          <component :is="Component" :key="route.meta.usePathKey ? route.fullPath : undefined" />
          <template #fallback>
            <div v-if="route.meta && route.meta.skeleton == 'primary'"><Van-skeleton title :row="3" /></div>
            <div v-else><Van-skeleton title :row="8" /></div>
          </template>
        </suspense>
      </keep-alive>
      <suspense v-else>
        <component :is="Component" :key="route.meta.usePathKey ? route.fullPath : undefined" />

        <template #fallback>
          <div v-if="route.meta && route.meta.skeleton == 'primary'"><Van-skeleton title :row="3" /></div>
          <div v-else><Van-skeleton title :row="8" /></div>
        </template>
      </suspense>
    </template>
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

const addScript = (url: string, isAsync = true) => {
  console.log('加载脚本：', url);

  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = isAsync;
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
};
const l = ref(true);
onMounted(() => {
  console.log('ISEE:', getConfig('isee'), '\nX_FLOW:', X_FLOW);
  addScript(getConfig('isee')); // 千里眼SDK
  addScript(X_FLOW); // 埋点SDK

  // useLoading(l);
  // setTimeout(() => {
  //   l.value = false;
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
