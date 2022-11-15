<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-12 15:06:48
 * @LastEditors: zhaopu
 * @LastEditTime: 2022-11-15 17:41:50
 * @FilePath: /zat-planet-h5-cloud-insure/src/components/ProField/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <VanField
    :="$attrs"
    :label="label"
    input-align="right"
    :is-link="showLink"
    :placeholder="placeholder"
    :rules="currentRules"
    :class="['com-pro-field', { block }, customClass]"
    :readonly="formProps.isView || isView"
    :formatter="formatter"
    @click="handleClick"
  >
    <template v-if="slot.label" #label>
      <slot name="label">{{ label }}</slot>
    </template>
    <template v-if="slot.input" #input>
      <slot name="input" />
    </template>
    <template #extra>
      <slot name="extra" />
    </template>
  </VanField>
</template>

<script lang="ts" setup>
import { withDefaults } from 'vue';
import { formatRule } from './utils';

interface Props {
  placeholder?: string;
  label: string;
  title?: string;
  block?: boolean;
  isLink?: boolean;
  rules?: any[];
  required?: boolean;
  isView?: boolean;
  validateType?: Array<string>;
  formatter?: (val: string) => string;
  customClass?: string;
}

const slot = useSlots();
const emits = defineEmits(['click']);
const props = withDefaults(defineProps<Props>(), {
  placeholder: '请输入',
  label: '',
  title: '',
  block: false,
  isLink: false,
  rules: () => [],
  required: false,
  isView: false,
  validateType: () => [],
  formatter: (val) => val,
  customClass: '',
});

const formProps: any = inject('formProps') || {};

const dealData = () => {};

const currentRules = computed(() => {
  let rules: any[] = [];
  if (props.rules && props.rules.length > 0) {
    rules = [...props.rules];
  }
  if (props.required) {
    rules = [...rules, { required: true, message: `${props.isLink ? '请选择' : '请输入'}${props.label}` }];
  }
  if (props.validateType && props.validateType.length > 0) {
    rules = [...rules, ...props.validateType.map((type) => formatRule(type, props.label))];
  }
  return rules;
});

const handleClick = () => {
  if (!props.isView && !formProps.isView) {
    emits('click');
  }
};

const showLink = computed(() => {
  if (props.isView || formProps.isView) {
    return false;
  }
  return props.isLink;
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
