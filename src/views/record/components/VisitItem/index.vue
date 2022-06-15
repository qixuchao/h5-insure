<template>
  <div class="comp comp-visit-record-item">
    <div class="visit-time">
      <span class="time-left">{{ visitData.visitTime }}</span>
      <span class="time-right"> <ZaSvg name="right_arrow" class="arrow-icon" /> </span>
    </div>
    <div class="visit-content">
      <VisitCard :data="visitData" :info="info" @on-delete-success="handleDeleteSuccess"></VisitCard>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { VisitItemType } from '@/api/modules/record.d';

import VisitCard from '../VisitCard/index.vue';

defineProps({
  visitData: { type: Object as PropType<VisitItemType>, default: () => {} },
  info: {
    type: Object,
    default: () => ({
      agentCustomerId: '',
      customerType: '',
      customerName: '',
    }),
  },
});

const emit = defineEmits(['onDeleteSuccess']);

const handleDeleteSuccess = () => {
  emit('onDeleteSuccess');
};
</script>

<style lang="scss">
.comp-visit-record-item {
  .visit-time {
    display: flex;
    align-items: center;
    position: relative;
    .time-left {
      font-weight: 400;
      margin-left: 46px;
      font-size: $zaui-font-size-sm;
      color: $daily-item-title-text;
    }
    .time-right {
      color: $daily-item-title-text;
      margin-left: 20px;
      font-size: 24px;
      line-height: 22px;
    }
  }
  .visit-time::before {
    width: 14px;
    height: 14px;
    background: $primary-color;
    content: '';
    border-radius: 50%;
    position: absolute;
    left: 6px;
  }
  .visit-time::after {
    width: 26px;
    height: 26px;
    background: $primary-color;
    left: 0px;
    position: absolute;
    content: '';
    border-radius: 50%;
    opacity: 0.2;
  }
  .visit-content {
    border-left: 5px dotted #dcdcdc;
    padding: 20px;
    margin-left: 12px;
  }
}
.comp-visit-record-item:last-child {
  .visit-content {
    border-left: none;
  }
}
</style>
