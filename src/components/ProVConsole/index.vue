<template>
  <div></div>
</template>

<script lang="ts" setup name="ProVConsole">
import { isTestEnv } from '@/utils/index';

const vconsole = defineAsyncComponent(() => import('vconsole'));

onMounted(() => {
  if (isTestEnv || window.location.href.indexOf('is_debugger') > -1) {
    // eslint-disable-next-line new-cap, no-new
    new vconsole();
  }
});
</script>
