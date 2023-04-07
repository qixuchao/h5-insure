<template>
  <ProPageWrap main-class="page-home">
    <VanButton type="primary" @click="changeTheme">变化主题</VanButton>
    <VanGrid :column-num="3">
      <VanGridItem v-for="route in routes" :key="route.path" link-type="navigateTo">
        <RouterLink :to="route.path">
          <VanButton size="mini" type="primary">{{ route?.meta.title || route.name }}</VanButton>
        </RouterLink>
      </VanGridItem>
    </VanGrid>
  </ProPageWrap>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import useTheme from '@/hooks/useTheme';
import routes from '@/router/routes';
import { useThemesStore } from '@/store/themes';

function randomNum(minNum, maxNum) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * minNum + 1, 10);
    case 2:
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
    default:
      return 0;
  }
}
const themesStore = useThemesStore();
const { themeVars } = storeToRefs(themesStore);
const colors = ['#ff00ff', '#ff0000', '#0edd05', '#FF6600', '#0d6efe'];
const changeTheme = () => {
  const color = colors[randomNum(0, colors.length - 1)];
  console.log('color', color);
  themeVars.value = useTheme(color);
};
</script>

<style lang="scss">
.page-home {
  color: $primary-color;
}
</style>
