<template>
  <div class="com-contact-info">
    <ProCard title="保单通讯信息" :show-line="false">
      <div class="selected-contact"></div>
      <div class="add-contact-info">
        <van-button>选择保单通讯信息</van-button>
      </div>
    </ProCard>
    <SelectAddress></SelectAddress>
  </div>
</template>

<script lang="ts" setup name="contactInfo">
import { withDefaults } from 'vue';
import SelectAddress from './SelectAddress.vue';

interface Props {
  modelValue: any;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: {},
});

const currentContact = ref<any>();

const contactList = computed(() => {
  const { tenantOrderHolder, tenantOrderInsuredList } = props.modelValue;
});
</script>

<style lang="scss" scope>
.com-contact-info {
  .add-contact-info {
  }
}
</style>
