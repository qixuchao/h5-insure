<template>
  <template v-if="planList.length > 0">
    <ProField v-model="currentPlanCode" label="保障计划" name="planCode" class="risk-select-field">
      <template #input>
        <div class="pro-radio-wrap">
          <ProRadioButton v-model="currentPlanCode" :options="formatOptions()"></ProRadioButton>
        </div>
      </template>
    </ProField>
  </template>
</template>
<script lang="ts" setup name="PlanSelect">
import { ref, watch, withDefaults } from 'vue';
import { RiskVoItem, RiskAmountPremiumConfig } from '@/api/modules/trial.data';
import { PREMIUM_UNIT_TYPE_ENUM } from '@/common/constants/infoCollection';

// 参看CollapseItem组件
interface Props {
  planList: Array<any>;
  defaultPlan: any;
}

const emit = defineEmits(['planChange']);

const props = withDefaults(defineProps<Props>(), {
  planList: () => [],
  defaultPlan: () => {},
});

const currentPlanCode = ref('');
let isMountChange = false;

const formatOptions = () => {
  return props.planList.map((plan) => {
    return {
      label: plan.planName,
      value: plan.planCode,
    };
  });
};

onMounted(() => {
  if (props.defaultPlan) {
    isMountChange = true;
    currentPlanCode.value = props.defaultPlan.planCode;
  }
});

watch(
  () => currentPlanCode,
  (v) => {
    if (!isMountChange) {
      emit('planChange', currentPlanCode.value);
    }
    if (isMountChange) isMountChange = false;
  },
  {
    deep: true,
    immediate: true,
  },
);
</script>
<style lang="scss" scoped></style>
