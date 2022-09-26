<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-09-23 14:59:28
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-09-26 14:53:42
 * @FilePath: /zat-planet-h5-cloud-insure/src/views/proposal/compositionProposal/cover.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="cover-wrap" @click="goNextPage">
    <img :src="showConfig?.frontImage" alt="" />
  </div>
</template>

<script lang="ts" setup name="cover">
import { useRoute, useRouter } from 'vue-router';
import { ShowConfig } from '@/api/modules/compositionProposal.data';
import { queryProposalThemeHistoryDetail } from '@/api/modules/compositionProposal';

const route = useRoute();
const router = useRouter();
let timer: any = null;

const { themeId, tenantId } = route.query;
const showConfig = ref<ShowConfig>(); // 计划书历史主题

const goNextPage = () => {
  router.push({
    path: '/compositionProposal',
    query: route.query,
  });
};

const getThemeHistory = async () => {
  const { code, data } = await queryProposalThemeHistoryDetail({ id: themeId, tenantId });
  if (code === '10000') {
    showConfig.value = data.showConfig;
    timer = setTimeout(() => {
      goNextPage();
    }, 3000);
  }
};

onMounted(() => {
  if (themeId) {
    getThemeHistory();
  } else {
    goNextPage();
  }
});

onBeforeUnmount(() => {
  clearTimeout(timer);
});
</script>
