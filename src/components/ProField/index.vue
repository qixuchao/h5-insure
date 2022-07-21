<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-12 15:06:48
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-07-14 11:26:05
 * @FilePath: /zat-planet-h5-cloud-insure/src/components/ProField/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <VanField
    v-model="tempModelValue"
    :name="name"
    :label="label"
    :="$attrs"
    input-align="right"
    :placeholder="placeholder"
    :class="['com-pro-field', { block }]"
    @click="handleClick"
  >
    <template v-if="slot.label" #label>
      <slot name="label">{{ label }}</slot>
    </template>
    <template v-if="slot.input || type === 'picker'" #input>
      <slot v-if="slot.input" name="input"></slot>
      <span v-if="type === 'picker' && displayPickValue">{{ displayPickValue }}</span>
      <span v-if="type === 'picker' && !displayPickValue" class="placeholder">{{ placeholder }}</span>
    </template>
    <template v-if="slot.leftIcon" #left-icon></template>
    <template v-if="slot.rightIcon" #right-icon></template>
    <template v-if="slot.button" #button></template>
    <template v-if="slot.extra" #extra></template>
    <template v-if="slot['error-message']" #error-message></template>
  </VanField>
  <ProPicker
    v-if="type === 'picker'"
    v-model:show="showPicker"
    v-model="tempModelValue"
    :columns="dataSource"
    :title="title || label"
  />
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, useSlots } from 'vue';
import { FieldType } from 'vant';
import { useToggle } from '@vant/use';
import ProPicker from '@/components/ProPicker/index.vue';

const slot = useSlots();
const emits = defineEmits(['click', 'update:modelValue']);

const props = defineProps({
  modelValue: {
    type: [String, Number, Array],
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
  type: {
    type: String as () => FieldType | 'picker',
    default: 'text',
  },
  dataSource: {
    type: Array as () => Array<{ label: string; value: number | string }>,
    default: () => [],
  },
  title: {
    type: String,
    default: '',
  },
  block: {
    type: Boolean,
    default: false,
  },
});

const [showPicker, toggle] = useToggle(false);
const tempModelValue = ref(props.modelValue);

const handleClick = () => {
  if (props.type !== 'picker') {
    emits('click');
  } else {
    toggle();
  }
};

const displayPickValue = computed(() => {
  if (props.type !== 'picker') {
    return '';
  }
  const find = props.dataSource.find((x) => x.value === props.modelValue);
  if (find) {
    return find.label;
  }
  return props.modelValue || '';
});

watch(
  () => props.modelValue,
  (val) => {
    tempModelValue.value = val;
  },
);

watch(tempModelValue, (val) => {
  emits('update:modelValue', val);
});
</script>

<style lang="scss" scoped>
.com-pro-field {
  &.block {
    display: block;
    :deep(.van-field__control--custom) {
      justify-content: flex-start;
    }
  }
  .placeholder {
    color: var(--van-field-placeholder-text-color);
  }
}
</style>
