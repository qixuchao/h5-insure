<template>
  <ProRenderForm ref="personalInfoRef" :model="state.formData" :schema="state.schema" :config="state.config" />
</template>
<script lang="ts" setup>
import { withDefaults } from 'vue';
import { useRoute } from 'vue-router';
import { ProRenderForm, combineOccupation, transformFactorToSchema } from '@/components/RenderForm';
import { ProductFactor } from '@/api/modules/trial.data';

const { query: { insurerCode } = {} } = useRoute();

interface Props {
  productFactor: ProductFactor;
  modelValue: any;
}

const emit = defineEmits(['update:modelValue']);
const personalInfoRef = ref(null);

const props = withDefaults(defineProps<Props>(), {
  productFactor: () => ({} as ProductFactor),
  modelValue: () => ({} as any),
});

const state = reactive({
  formData: {},
  schema: [],
  config: {
    // 职业
    occupation: {
      dictCode: combineOccupation(insurerCode as string),
    },
  },
});

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
    personalInfoRef.value?.validate().then(() => {
      emit('update:modelValue', state.formData);
    });
  },
  {
    deep: true,
    immediate: true,
  },
);
</script>
