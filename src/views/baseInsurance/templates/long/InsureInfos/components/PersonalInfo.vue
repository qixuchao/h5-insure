<template>
  <ProRenderForm ref="personalInfoRef" :model="state.formData" :schema="state.schema" :config="state.config" />
</template>
<script lang="ts" setup>
import { withDefaults } from 'vue';
import { useRoute } from 'vue-router';
import { isNil } from 'lodash';
import { ProRenderForm, combineOccupation, transformFactorToSchema } from '@/components/RenderForm';
import { ProductFactor } from '@/api/modules/trial.data';

const { query: { insurerCode } = {} } = useRoute();

interface Props {
  productFactor: ProductFactor;
  modelValue: any;
}

const emit = defineEmits(['update:modelValue', 'trail']);
const personalInfoRef = ref(null);

const props = withDefaults(defineProps<Props>(), {
  productFactor: () => ({} as ProductFactor),
  modelValue: () => ({} as any),
});

const state = reactive({
  formData: {},
  schema: [],
  trialFactorCodes: [],
  config: {
    // 职业
    occupation: {
      dictCode: combineOccupation(insurerCode as string),
    },
  },
});

/** 验证试算因子是否全部有值 */
const validateFields = () => {
  return state.trialFactorCodes.some((code) => {
    const val = state.formData[code];
    return isNil(val) || val === '';
  });
};

watch(
  () => props.productFactor,
  () => {
    const [holder, insured] = transformFactorToSchema(props.productFactor, true);
    Object.assign(state, insured);
  },
  {
    deep: true,
    immediate: true,
  },
);

watch(
  () => state.formData,
  () => {
    emit('update:modelValue', state.formData);
    // 验证通过调用试算
    if (!validateFields()) {
      personalInfoRef.value?.validate().then(() => {
        emit('trail', state.formData);
      });
    }
  },
  {
    deep: true,
    immediate: true,
  },
);
</script>
