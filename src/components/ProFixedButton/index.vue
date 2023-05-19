<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-28 10:28:12
 * @LastEditors: liyang liyang003@zhongan.io
 * @LastEditTime: 2022-09-05 15:48:29
 * @FilePath: /zat-planet-h5-cloud-insure/src/components/ProFixedButton/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
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
import { Toast } from 'vant/es';
import { withDefaults } from 'vue';

interface Props {
  buttonImage?: string;
}
// 默认图片展示
const props = withDefaults(defineProps<Props>(), {
  buttonImage: '',
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
  // Toast('历史计划书');
};
onBeforeMount(() => {
  window.addEventListener('scroll', screenScroll);
});
</script>

<style scoped lang="scss">
.fixed-box {
  position: fixed;
  bottom: 427px;
  right: 21px;
  width: 122px;
}
.is-screen-fade-in {
  right: -71px;
  transition: all 0.5s;
}
.is-screen-fade-out {
  right: 21px;
  transition: all 0.5s;
}
</style>
