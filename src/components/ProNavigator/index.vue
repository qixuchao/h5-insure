<template>
  <div class="com-navigator">
    <img class="btn" :src="sideNavImage" @click="handleClick" />
    <van-popup v-model:show="visible" position="right" :style="{ width: '50%', height: '100%' }" safe-area-inset-top />
  </div>
</template>

<script lang="ts" setup>
import { useToggle } from '@vant/use';
import sideNavImage from '@/assets/images/component/sidenav.png';

const [visible, toggle] = useToggle(false);

const handleClick = () => {
  toggle(true);
};
</script>

<style lang="scss" scoped>
.com-navigator {
  .btn {
    position: fixed;
    width: 60px;
    height: 180px;
    right: 0;
    top: 50%;
    margin-top: -90px;
  }
}
</style>
