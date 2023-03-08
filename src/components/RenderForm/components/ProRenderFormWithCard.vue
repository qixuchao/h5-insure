<template>
  <ProCard
    v-if="$attrs.schema?.length"
    class="com-pro-form-with-card com-card-body-no-padding"
    :show-line="false"
    :show-divider="false"
    :title="title"
  >
    <ProRenderForm v-bind="$attrs" />
  </ProCard>
</template>
<script lang="ts" setup>
import ProRenderForm from './ProRenderForm.vue';

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
});
</script>
<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>
