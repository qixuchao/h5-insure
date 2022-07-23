<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-12 15:06:48
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-07-22 17:01:41
 * @FilePath: /zat-planet-h5-cloud-insure/src/components/ProField/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <VanField
    v-model="tempModelValue"
    :="$attrs"
    :name="name"
    :label="label"
    input-align="right"
    :is-link="formProps.isView ? false : isLink"
    :placeholder="currentPlaceholder"
    :rules="currentRules"
    :class="['com-pro-field', { block }]"
    @click="handleClick"
  >
    <template v-if="slot.label" #label>
      <slot name="label">{{ label }}</slot>
    </template>
    <template v-if="slot.input || type === 'picker'" #input>
      <div v-if="formProps.isView">
        {{ modelValue || '  123' }}
      </div>
      <div v-else>
        <slot v-if="slot.input" name="input"> </slot>
        <span v-if="type === 'picker' && displayPickValue">{{ displayPickValue }}</span>
        <span v-if="type === 'picker' && !displayPickValue" class="placeholder">{{ currentPlaceholder }}</span>
      </div>
    </template>
    <template v-if="slot.leftIcon" #left-icon></template>
    <template v-if="slot.rightIcon" #right-icon></template>
    <template v-if="slot.button" #button></template>
    <template v-if="slot.extra" #extra></template>
    <template v-if="slot['error-message']" #error-message></template>
  </VanField>
</template>

<script lang="ts" setup>
import { withDefaults } from 'vue';
import { FieldType } from 'vant';
import { useToggle } from '@vant/use';
import ProPicker from '@/components/ProPicker/index.vue';

interface Props {
  modelValue: string | number;
  placeholder: string;
  label: string;
  name: string;
  type: FieldType | 'picker';
  dataSource: Array<{ label: string; value: number | string }>;
  title?: string;
  block: boolean;
  isLink: boolean;
  rules?: any[];
  required?: boolean;
}

const slot = useSlots();
const emits = defineEmits(['click', 'update:modelValue']);
const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  placeholder: '',
  label: '',
  name: '',
  type: 'text',
  dataSource: () => [],
  title: '',
  block: false,
  isLink: false,
  rules: () => [],
  required: false,
});

const [showPicker, toggle] = useToggle(false);
const tempModelValue = ref(props.modelValue);
const formProps: any = inject('formProps') || {};

const dealData = () => {};

const currentPlaceholder = computed(() => {
  return props.placeholder || props.isLink ? '请选择' : '请输入';
});

const currentRules = computed(() => {
  return props.rules || props.required
    ? [{ required: true, message: `${props.isLink ? '请选择' : '请输入'}${props.title}` }]
    : undefined;
});

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
}
</style>
