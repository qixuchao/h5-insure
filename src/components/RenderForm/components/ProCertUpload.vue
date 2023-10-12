<template>
  <div class="cert-image-upload">
    <!--- 身份证证件上传组件 --->
    <ProIDCard v-if="isIDCard" :="$attrs"></ProIDCard>
    <!---- 其他证件上传组件 -->
    <ProUpload v-else :="$attrs"></ProUpload>
  </div>
</template>

<script lang="ts" setup name="certImageUpload">
import { withDefaults } from 'vue';
import ProIDCard from './ProIDCardUploadV2.vue';
import ProUpload from './ProUploadV2.vue';
import { VAN_PRO_FORM_KEY } from '../utils';
import { CERT_TYPE_ENUM } from '@/common/constants';

const { formState, extraProvision } = inject(VAN_PRO_FORM_KEY) || {};

const isIDCard = computed(() => {
  const { certType } = formState.formData || {};
  return `${certType}` === CERT_TYPE_ENUM.CERT;
});
</script>
