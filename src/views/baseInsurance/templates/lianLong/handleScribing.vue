<template>
  <div class="handle-scribing-wrap">
    <HandleScribing :text="text" closeable has-bg @on-cancel="handleCancel" @on-submit="handleConfirm"></HandleScribing>
  </div>
</template>

<script lang="ts" setup name="handleScribingPage">
import { useRoute, useRouter } from 'vue-router';
import HandleScribing from '@/components/ProScribing/components/HandleScribingLian.vue';
import { confirmRiskTranscription, saveRiskTranscription } from '@/api/modules/scribing';
import { SCRIBING_TYPE_ENUM } from '@/common/constants';

interface RouterParams {
  orderNo: string;
  text: string;
  [propName: string]: string;
}

const router = useRouter();
const route = useRoute();
const { orderNo, text, tenantId } = route.query as RouterParams;

const handleCancel = () => {
  router.back();
};

const handleConfirm = (params) => {
  saveRiskTranscription({
    orderNo,
    tenantId,
    riskTranscriptionList: params,
  }).then(({ code, data }) => {
    if (code === '10000') {
      confirmRiskTranscription({
        content: text,
        image: '',
        orderNo,
        tenantId,
        transcriptionType: SCRIBING_TYPE_ENUM.HANDLE,
      }).then(({ code: confirmCode }) => {
        if (confirmCode === '10000') {
          router.back();
        }
      });
    }
  });
};

const iseeBizNo = ref();
onMounted(() => {
  // 调用千里眼插件获取一个iseeBiz
  setTimeout(async () => {
    iseeBizNo.value = window.getIseeBiz && (await window.getIseeBiz());
  }, 1500);
});
</script>
