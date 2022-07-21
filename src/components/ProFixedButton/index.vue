<!--
 * new page
 * @author: liyang
 * @since: 2022-07-14
 * index.vue
-->
<template>
  <div class="com-fixed-button">
    <van-image
      :class="['fixed-box', isScreenScroll ? 'is-screen-fade-in' : 'is-screen-fade-out']"
      :src="buttonImage"
      @click="handleClickFixedButton"
    />
  </div>
</template>
<script setup lang="ts">
import { Toast } from 'vant';
import { withDefaults } from 'vue';
import fixedImage from '@/assets/images/customer/customer.png';

interface Props {
  buttonImage?: string;
}
// 默认图片展示
const props = withDefaults(defineProps<Props>(), {
  buttonImage: fixedImage,
});

const { buttonImage } = toRefs(props);

const isScreenScroll = ref(false);
const timer = ref<any>(null);
const t1 = ref(0);
const t2 = ref(0);

const isScrollEnd = () => {
  t2.value = document.documentElement.scrollTop || document.body.scrollTop;
  if (t2.value === t1.value) {
    isScreenScroll.value = false;
  }
};

const screenScroll = () => {
  document.onscroll = () => {
    clearTimeout(timer.value);
    timer.value = setTimeout(isScrollEnd, 800);
    t1.value = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    isScreenScroll.value = true;
  };
};
const handleClickFixedButton = () => {
  Toast('历史计划书');
};
onBeforeMount(() => {
  window.addEventListener('scroll', screenScroll);
});
</script>

<style scoped lang="scss">
.fixed-box {
  position: fixed;
  top: 50%;
  right: 0;
}
.is-screen-fade-in {
  right: -13%;
  transition: all 1s;
}
.is-screen-fade-out {
  right: 0;
  transition: all 1s;
}
</style>
