/* eslint-disable prettier/prettier */
<template>
  <!-- <router-view v-slot="{ Component }"
    ><transition :name="transitionName"><component :is="Component" /></transition
  ></router-view> -->
  <!-- <ConfigProvider :theme-vars="themeVars"> -->
  <!-- <Profile /> -->
  <router-view v-slot="{ Component, route }" class="router-view">
    <template v-if="Component">
      <keep-alive v-if="route.meta.keepAlive">
        <suspense>
          <component :is="Component" :key="route.meta.usePathKey ? route.fullPath : undefined" />
          <template #fallback>
            <div v-if="route.meta && route.meta.skeleton == 'primary'"><Van-skeleton title :row="3" /></div>
            <div v-else><Van-skeleton title :row="8" /></div>
            <!-- <div v-if="route.meta && route.meta.skeleton === 2"><Van-skeleton title avatar :row="8" /></div> -->
          </template>
        </suspense>
      </keep-alive>
      <suspense v-else>
        <component :is="Component" :key="route.meta.usePathKey ? route.fullPath : undefined" />

        <template #fallback>
          <div v-if="route.meta && route.meta.skeleton == 'primary'"><Van-skeleton title :row="3" /></div>
          <div v-else><Van-skeleton title :row="8" /></div>
          <!-- <div v-if="route.meta && route.meta.skeleton === 2"><Van-skeleton title avatar :row="8" /></div> -->
        </template>
      </suspense>
    </template>
  </router-view>
  <!-- </ConfigProvider> -->
</template>
<script lang="ts" setup>
import { ConfigProvider } from 'vant';

import { injectGlobal } from '@emotion/css';
import Profile from './views/businessCard/Profile.vue';
import router from './router';
import themes from './themes';
import { useThemesStore } from './store/themes';

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

/* -- 过渡动画 start -- */
// const transitionName = ref('slide-left');

// const routeSet = ref<Set<string>>(new Set());
// router.beforeEach((to, from, next) => {
//   // 没有则前进
//   if (!routeSet.value.has(to.path)) {
//     routeSet.value.add(to.path);
//     transitionName.value = 'slide-left';
//   } else {
//     // 已有的路由，则回退（删除当前的路由）
//     transitionName.value = 'slide-right';
//     routeSet.value.delete(from.path);
//   }
//   routeSet.value.forEach((value) => {
//     console.log(value);
//   });
//   next();
// });

// const routeDeep = ref<string[]>([]);
// router.beforeEach((to, from, next) => {
//   const toDepth = routeDeep.value.indexOf(to.path);
//   // 目标路由不包含
//   if (toDepth !== -1) {
//     if (toDepth === routeDeep.value.length) {
//       // 最后一个页面，(返回上一页)
//       routeDeep.value.pop();
//     } else {
//       // 删除
//       routeDeep.value.splice(toDepth);
//       routeDeep.value.push(to.path);
//     }
//   } else {
//     routeDeep.value.push(to.path);
//   }
//   console.log('路由列表:', routeDeep.value);
//   const fromDepth = routeDeep.value.indexOf(from.path);
//   transitionName.value = toDepth > fromDepth ? 'slide-right' : 'slide-left';
//   console.log(transitionName.value);
//   next();
// });
// /* -- 过渡动画 end -- */

// const themeVars = reactive({
//   navBarArrowSize: '1.4rem',
//   // primaryColor: 'green',
// });

const X_FLOW = 'https://xflowcloud.zhongan.io/sdk/dist/js/v0.0.1/ilog.js?id=qmkd17hfzorg55op&history=true';
const I_SEE = 'https://staticdaily.zhongan.com/website/isee-poc/eye.js'; // 'https://static.zhongan.com/website/isee/zainfo/eye.js';

const addScript = (url: string, isAsync = true) => {
  console.log('加载脚本：', url);

  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = isAsync;
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
};

onMounted(() => {
  addScript(I_SEE); // 千里眼SDK
  addScript(X_FLOW); // 埋点SDK
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
