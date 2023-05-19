<template>
  <ProFieldV2 class="com-van-switch-wrap" v-bind="filedAttrs" :model-value="state.modelValue">
    <template #input>
      <ValueView v-if="isView" :value="viewValue" />
      <van-switch v-else :model-value="state.modelValue" :="attrs" @change="onChange" />
    </template>
  </ProFieldV2>
</template>

<script lang="ts" setup>
import { useAttrsAndSlots } from '../hooks';
import { VAN_PRO_FORM_KEY } from '../utils';
import ProFieldV2 from './ProFieldV2.vue';
import ValueView from './ProFormItem/ValueView.vue';

const { filedAttrs, attrs } = toRefs(useAttrsAndSlots());

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  /**
   * 是否查看模式
   */
  isView: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue']);

const { formState } = inject(VAN_PRO_FORM_KEY) || {};

const state = reactive({
  modelValue: null,
});

watch(
  () => props.modelValue,
  (val) => {
    state.modelValue = val;
  },
  {
    immediate: true,
  },
);

const onChange = (val) => {
  // if (formState?.formData && filedAttrs.value.name) {
  //   formState.formData[filedAttrs.value.name] = val;
  // }
  emit('update:modelValue', val);
};

const viewValue = computed(() => {
  return ['否', '是'][Number(state.modelValue === attrs['active-value'])];
});

// watch(
//   () => state.modelValue,
//   (val) => {
//     emit('update:modelValue', val);
//     // if (formState?.formData && filedAttrs.value.name) {
//     //   formState.formData[filedAttrs.value.name] = val;
//     // }
//   },
//   {
//     immediate: true,
//   },
// );

watch(
  () => formState.formData?.[filedAttrs.value.name],
  (val) => {
    state.modelValue = val as string | number;
  },
  {
    immediate: true,
    deep: true,
  },
);
</script>
<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>
<style lang="scss" scoped>
.com-van-switch-wrap {
  --van-switch-size: 48px;
  :deep(.van-field__control--custom) {
    flex-flow: wrap;
    justify-content: flex-end;
    .van-switch {
      margin: 16px 0 8px;
    }
  }
}
</style>
