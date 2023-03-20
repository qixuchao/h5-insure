<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-06-22 18:54:35
 * @LastEditors: zhaopu
 * @LastEditTime: 2022-11-06 14:09:15
 * @FilePath: /zat-planet-h5-cloud-insure/src/components/ProRadioButton/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="com-radio-btn-wrap">
    <div v-if="!isView" class="radio-btn">
      <div v-for="option in options" :key="option[prop.value]" class="btn-wrapper">
        <ProCheckButton
          :label="option[prop.label]"
          :disabled="disabled"
          :activated="state.currentValue == option[prop.value]"
          :icon-name="option.iconName"
          @click="!disabled && selectBtn(option[prop.value])"
        />
      </div>
    </div>
    <div v-else>{{ checkedValue }}</div>
  </div>
</template>

<script lang="ts" setup>
import { Toast } from 'vant/es';
import ProCheckButton from '../ProCheckButton/index.vue';

const formProps: { isView: boolean } | undefined = inject('formProps');

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
    required: true,
  },
  options: {
    type: Array,
    default: () => [],
    required: true,
  },
  isSimply: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  prevent: {
    type: String,
    default: '',
  },
  prop: {
    type: Object,
    default: () => ({ value: 'value', label: 'label' }),
  },
  isView: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(['update:modelValue']);

const state = reactive({
  currentValue: props.modelValue,
});
console.log('-----model ', props.modelValue, props.options);
const selectBtn = (value) => {
  if (props.prevent) {
    Toast(props.prevent);
    return;
  }
  state.currentValue = value;
  emits('update:modelValue', value);
};

const checkedValue = computed(() => {
  const currentValue: any =
    props.options.find((option: any) => `${option[props.prop.value]}` === `${props.modelValue}`) || {};
  return currentValue[props.prop.label];
});

onMounted(() => {
  if (!props.isSimply && props?.options?.length === 1) {
    const value = props?.options?.[0]?.[props?.prop?.value];
    state.currentValue = value;
    emits('update:modelValue', value);
  }
});

watch(
  () => props.modelValue,
  (newVal) => {
    console.log('------value change', newVal);
    state.currentValue = newVal;
  },
  {
    immediate: true,
  },
);
</script>

<style lang="scss" scoped>
.radio-btn {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  .btn-wrapper {
    margin: 8px 0 8px 16px;
  }
}
</style>
