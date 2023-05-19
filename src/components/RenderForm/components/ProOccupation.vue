<template>
  <ProFormItem
    v-model="state.modelValue"
    class="com-van-field--hidden"
    :name="name"
    :rules="$attrs.rules"
    :required="$attrs.required"
  />
  <ProCascaderV2
    :custom-field-name="customFieldName"
    v-bind="$attrs"
    :model-value="cascaderModelValue"
    @update:full-value="updateFullValue"
  >
    <template #value-view>
      <span class="occupation-view"
        >{{ state.text
        }}<span v-if="state.occupationClass" class="class-tips">{{ state.occupationClass }}类</span></span
      >
    </template>
    <template #option="{ option = {} }">
      <span class="occupation-view"
        >{{ option?.[customFieldName?.text]
        }}<span v-if="option?.[OCCUPATION_CLASS]" class="class-tips">{{ option?.[OCCUPATION_CLASS] }}类</span></span
      >
    </template>
  </ProCascaderV2>
</template>
<script lang="ts" setup name="ProOccupation">
/** 职业信息  */
import { isNotEmptyArray } from '@/common/constants/utils';
import ProCascaderV2 from './ProCascaderV2.vue';
import ProFormItem from './ProFormItem/ProFormItem.vue';
import { VAN_PRO_FORM_KEY } from '../utils';

const { formState } = inject(VAN_PRO_FORM_KEY) || {};

const OCCUPATION_CLASS = 'name';

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
  name: {
    type: String,
    default: '',
  },
  /**
   * 枚举映射
   */
  customFieldName: {
    type: Object,
    default: () => ({ text: 'value', value: 'code', children: 'children' }),
  },
  modelValue: {
    type: Array,
    default: () => [],
  },
});

const state = reactive({
  modelValue: [],
  text: '',
  occupationClass: '',
});

const updateFullValue = (arr = []) => {
  let val = [];
  if (isNotEmptyArray(arr)) {
    val = arr.map((item) => item[props.customFieldName.value]);
    const { [props?.customFieldName?.text]: text, [OCCUPATION_CLASS]: occupationClass } = arr[arr.length - 1];

    state.text = text;
    // 职业信息大类
    state.occupationClass = occupationClass;

    if (formState?.formData) {
      formState.formData.occupationClass = occupationClass;
    }
  }
  state.modelValue = val;
};

const cascaderModelValue = computed(() => {
  return isNotEmptyArray(state.modelValue) ? state.modelValue[state.modelValue.length - 1] : null;
});

watch(
  () => props.modelValue,
  (val) => {
    state.modelValue = val;
  },
  {
    deep: true,
    immediate: true,
  },
);

watch(
  () => state.modelValue,
  (val) => {
    emit('update:modelValue', val);
  },
  {
    deep: true,
    immediate: true,
  },
);
</script>
<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>
<style lang="scss" scoped>
.occupation-view {
  .class-tips {
    margin-left: 20px;
    line-height: 30px;
    padding: 5px 12px;
    background: rgba(255, 88, 64, 0.1);
    border-radius: 8px;
    font-size: 22px;
    color: #ff5840;
  }
}
</style>
