<!--
 * @Author: zhaopu
 * @Date: 2022-12-29 17:34:36
 * @LastEditors: kevin.liang
 * @LastEditTime: 2023-02-13 14:33:49
 * @Description:
-->
<template>
  <Fragment ref="target">
    <slot v-if="show" />
  </Fragment>
</template>

<script lang="ts" setup name="ProLazyComponent">
import { useIntersectionObserver } from '@vueuse/core';

const show = ref(false);
const target = ref(null);

onMounted(() => {
  setTimeout(() => {
    useIntersectionObserver(target, ([{ isIntersecting }]) => {
      if (isIntersecting && !show.value) {
        show.value = true;
      }
    });
  }, 300);
});
</script>
