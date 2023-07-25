<template>
  <div class="handle-scribing-wrap">
    <HandleScribing :text="text" closeable has-bg @on-cancel="handleCancel" @on-submit="handleConfirm"></HandleScribing>
  </div>
</template>

<script lang="ts" setup name="handleScribingPage">
import { useRoute, useRouter } from 'vue-router';
import HandleScribing from '@/components/ProScribing/components/HandleScribing.vue';
import { saveRiskTranscription } from '@/api/modules/scribing';

interface RouterParams {
  orderNo: string;
  orderCode: string;
  text: string;
  [propName: string]: string;
}

const router = useRouter();
const route = useRoute();
const { orderNo, text, tenantId, orderCode } = route.query as RouterParams;

const handleCancel = () => {
  router.back();
};

const handleConfirm = (params) => {
  saveRiskTranscription({
    orderNo: orderCode,
    tenantId,
    riskTranscriptionList: params,
  }).then(({ code, data }) => {
    if (code === '10000') {
      router.replace({
        path: 'scribingPreview',
        query: route.query,
      });
    }
  });
};
</script>
