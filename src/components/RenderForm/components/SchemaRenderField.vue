<template>
  <component
    :is="item.componentName"
    v-for="(item, index) in state.schema"
    :key="`${item.nanoid}_${index}`"
    v-bind="item"
    :is-view="isView"
  >
    <!-- 继承 slots -->
    <template v-for="slotName in noDefaultSlots" :key="slotName" #[slotName]>
      <slot :name="slotName" />
    </template>
  </component>
</template>
<script lang="ts" setup>
import { withDefaults, shallowRef, useSlots } from 'vue';
import { SchemaItem } from '../index.data';
import * as FieldComponents from './index';

interface Props {
  schema?: SchemaItem[];
  model?: object;
  config?: object;
  isView: boolean;
}

const slots = useSlots();

const props = withDefaults(defineProps<Props>(), {
  schema: () => [],
  model: () => ({}),
  config: () => ({}),
});

const state = reactive({
  config: {}, // 表单配置
  formData: {},
  schema: [],
  isView: false,
});

// 非默认 slots
const noDefaultSlots = computed(() => Object.keys(slots).filter((key) => key !== 'default'));

watch(
  [() => props.schema, () => state.config, () => props.model],
  ([schema, config]) => {
    state.schema = (schema as SchemaItem[])
      .map((item) => {
        return {
          ...item,
          modelValue: props.model[item.name],
          componentName: FieldComponents[item.componentName]
            ? shallowRef(FieldComponents[item.componentName])
            : item.componentName,
          ...config[item.name],
        };
      })
      .filter((item) => !item.hidden);
  },
  {
    immediate: true,
    deep: true,
  },
);

watch(
  () => props.config,
  (val) => {
    state.config = val;
  },
  {
    immediate: true,
    deep: true,
  },
);
</script>
<style lang="scss" scoped>
// .com-van-form {
// }
</style>
