<template>
  <ProRenderFormWithCard
    ref="formRef"
    class="trail-personal-info"
    :title="title"
    :model="state.personVO"
    :schema="state.schema"
    :config="state.config"
    :is-view="isView"
  >
    <template #cardTitleExtra><slot></slot></template>
  </ProRenderFormWithCard>
</template>
<script lang="ts" setup name="BeneficiaryItem">
import { withDefaults } from 'vue';
import cloneDeep from 'lodash-es/cloneDeep';
import {
  type SchemaItem,
  type PersonFormProps,
  validateForm,
  validateFields,
  ProRenderFormWithCard,
} from '@/components/RenderForm';

interface Props {
  modelValue: any;
  schema: SchemaItem[];
  config: object;
  isView: boolean;
  isTrial: boolean;
  title: string;
}

const emit = defineEmits(['update:modelValue', 'trailChange']);
const formRef = ref(null);

const props = withDefaults(defineProps<Props>(), {
  schema: () => [],
  modelValue: () => ({} as any),
  trialFactorCodes: () => [],
  config: () => ({} as any),
  isView: false,
  isTrial: false,
  title: '受益人',
});

interface StateInfo extends PersonFormProps {
  validated: boolean;
}

const state = reactive<Partial<StateInfo>>({
  /**
   * 是否所有表单是否验证成功
   */
  validated: false,
  /** 受益人 */
  schema: [],
  config: {},
  personVO: {},
});

/** 验证试算因子是否全部有值 */
const validateTrialFields = () => {
  return validateFields({
    personVO: state.personVO,
    trialFactorCodes: props.trialFactorCodes,
  });
};

// 验证表单必填
const validate = (isTrial) => {
  return validateForm(formRef, props.trialFactorCodes, isTrial);
};

// // 受益人试算
// watch(
//   () => state?.personVO?.insuredBeneficiaryType,
//   (val) => {
//     colorConsole('受益人类型关系变动了');

//     // 是否为法定
//     const isLegal = val === BENEFICIARY_ENUM.LEGAL;
//     state.schema?.forEach((schemaItem) => {
//       schemaItem.hidden = isLegal ? schemaItem.name !== 'insuredBeneficiaryType' : false;
//     });

//     // 如果是法定只保留受益人类型
//     if (isLegal) {
//       state.personVO = {
//         insuredBeneficiaryType: BENEFICIARY_ENUM.LEGAL,
//       };
//     }
//   },
//   {
//     immediate: true,
//   },
// );

watch(
  () => props.config,
  (val) => {
    if (val) {
      Object.assign(state.config, val);
    }
  },
  {
    deep: true,
    immediate: true,
  },
);

watch(
  () => props.schema,
  (val) => {
    if (val) {
      Object.assign(state.schema, cloneDeep(props.schema));
    }
  },
  {
    deep: true,
    immediate: true,
  },
);

watch(
  () => props.modelValue,
  (val) => {
    if (val) {
      Object.assign(state.personVO, val);
    }
  },
  {
    deep: true,
    immediate: true,
  },
);

watch(
  () => state.personVO,
  (val) => {
    if (val) {
      emit('update:modelValue', val);
    }
  },
  {
    deep: true,
    immediate: true,
  },
);

defineExpose({
  validate,
  validateTrialFields,
});
</script>

<style scoped lang="scss">
.trail-personal-info {
  :deep(.com-card-wrap) .header {
    margin-left: 0;
  }
  :deep(.com-van-field) {
    &:last-child::after {
      display: block;
    }
  }
}
</style>
