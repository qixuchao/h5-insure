<template>
  <div :class="`${prefixCls}__wrapper`">
    <!-- <div :class="`${prefixCls}__header`">
      <div :class="`${prefixCls}__cancel`" @click="handleCancel">{{ cancelText }}</div>
      <div :class="`${prefixCls}__title`">{{ title }}</div>
      <div :class="`${prefixCls}__submit`" @click="handleOk">{{ okText }}</div>
    </div> -->
    <div :class="`${prefixCls}__crumbs`">
      <p>选择：{{ currentValue.map((item) => item?.[fieldNames.text]).join(labelAddon) }}</p>
      <p v-if="errorMsg" :class="`${prefixCls}__crumbs-error`">{{ errorMsg }}</p>
    </div>
    <div :class="`${prefixCls}__group`">
      <div
        v-for="(group, index) in renderGroup()"
        :key="index"
        :class="{
          [`${prefixCls}__stack-column za-stack-picker-stack-column`]: true,
          [`${prefixCls}__stack-column--active`]: currentValue,
          [`${prefixCls}__stack-column--hidden`]: !currentValue[index] || !currentValue[index][fieldNames.value],
        }"
        @click.stop="(e) => handleChange(index - 1)"
      >
        <div ref="columns" :class="`${prefixCls}__stack-column-wrapper`" @click.stop="() => {}">
          <div
            v-for="(item, i) in group"
            :key="`item${i}`"
            :class="{
              [`${prefixCls}__stack-column-item`]: true,
              [`${prefixCls}__stack-column-item--active`]:
                currentValue[index] && currentValue[index][fieldNames.value] === item[fieldNames.value],
            }"
            @click.stop="(e) => handleChange(index, item, index === renderGroup().length - 1)"
          >
            <slot name="option" :option="item">
              {{ item?.[fieldNames.text] }}
            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup name="ProStackPicker" lang="ts">
import { withDefaults } from 'vue';
import { isEqual } from 'lodash-es';
import { findParentKey } from '@/utils';

interface Props {
  prefixCls: string;
  options: Array<any>;
  commonOptions?: Array<any>;
  defaultValue: Array<any>;
  modelValue: Array<any>;
  placeholder: string;
  visible: boolean;
  disabled: boolean;
  cols: number;
  labelAddon: string;
  displayItems: number;
  itemHeight: number;
  displayRender: (any) => string;
  itemRender: (any) => string;
  validate: () => void;
  cancelText: string;
  okText: string;
  fieldNames: any;
  searchValue: string;
}

const props = withDefaults(defineProps<Props>(), {
  prefixCls: 'za-stackpicker',
  options: () => [],
  commonOptions: () => [],
  defaultValue: () => [],
  modelValue: () => [],
  title: '请选择',
  placeholder: '请选择',
  visible: false,
  disabled: false,
  cols: Infinity,
  labelAddon: ' > ',
  displayItems: 8,
  itemHeight: 50,
  displayRender: (datas) => datas.map(({ label }) => label).join(''),
  itemRender: (d) => d.label,
  validate: () => {},
  cancelText: '取消',
  okText: '确定',
  fieldNames: () => ({
    text: 'text',
    value: 'value',
    children: 'children',
  }),
  searchValue: '',
});

const obtainItem = (list, value) => {
  const valueMember = props.fieldNames.value;
  return (list || []).filter((item) => item[valueMember] === value)[0];
};

const resolveProps = ({ value, defaultValue, options, validate }) => {
  const resolveValue = [];
  const v = value || defaultValue || [];
  v.reduce((list, item) => {
    const valueItem = obtainItem(list, item);

    if (valueItem) {
      resolveValue.push(valueItem);

      return valueItem?.[props.fieldNames.children] || [];
    }

    return [];
  }, options);

  return {
    currentValue: resolveValue,
    errorMsg: validate(v),
  };
};

const getContainer = () => document.querySelector('.page-main');
const currentVisible = ref(props.visible);
const oldValue = ref(props.currentValue);
const currentValue = ref([]);
const errorMsg = ref();

const emits = defineEmits(['ok', 'update:modelValue', 'change', 'cancel', 'finish']);
const columns = ref();

const reposition = () => {
  const { options, disabled, displayItems, itemHeight, cols, currentValue: propsValue, fieldNames } = toRefs(props);
  const valueMember = fieldNames.value;

  if (disabled) return;
  (propsValue || []).reduce((data, item, index) => {
    const value = item[valueMember];
    const valIndex = data.map((dataItem) => dataItem[valueMember]).indexOf(value);

    if (index < cols && valIndex >= 0) {
      const target = columns.value?.[index];
      if (target) {
        const position = target.scrollTop;
        const viewTopIndex = valIndex - displayItems;

        if (position < (viewTopIndex + 1) * itemHeight || position > valIndex * itemHeight) {
          target.scrollTop = valIndex * itemHeight;
        }
      }
      return data[valIndex]?.[fieldNames.children] || [];
    }

    return [];
  }, options);
};

const renderGroup = () => {
  const { cols, fieldNames } = props;
  const valueMember = fieldNames.value;
  const group = [];
  let { options } = props;
  let i = 0;
  while (options) {
    group.push(options);

    const colVal = currentValue.value?.[i];
    const childrenData = ((colVal ? obtainItem(options, colVal[valueMember]) : options[0]) || {})?.[
      fieldNames.children
    ];

    if (childrenData && childrenData.length && i < cols - 1) {
      options = childrenData;
    } else {
      options = null;
    }

    i += 1;
  }

  return group;
};
const handleChange = (index, item, isLast) => {
  const { validate, fieldNames } = props;
  const valueMember = fieldNames.value;
  const value = currentValue.value.slice(0, index);
  let currentErrorMsg = null;

  if (item) {
    value[index] = item;
  }
  currentErrorMsg = validate(value);
  const selectedCodes = value.map((v) => v[valueMember]);
  currentValue.value = value;
  emits('change', selectedCodes);
  emits('update:modelValue', selectedCodes?.[selectedCodes.length - 1]);

  if (isLast) {
    emits('finish', { value: selectedCodes?.[selectedCodes.length - 1] });
  }
};
const handleOk = () => {
  const { validate, fieldNames } = props;
  const valueMember = fieldNames.value;

  const { value } = currentValue;
  let currentErrorMsg = null;
  currentErrorMsg = validate(value);
  if (!currentErrorMsg) {
    errorMsg.value = currentErrorMsg;
    oldValue.value = currentValue.value;
    emits(
      'change',
      value.map((v) => v[valueMember]),
    );
    emits('ok', value);
  } else {
    errorMsg.value = currentErrorMsg;
    emits(
      'change',
      value.map((v) => v[valueMember]),
    );
  }
};

onMounted(() => {
  reposition();
});

onUpdated(() => {
  reposition();
});

watch(
  () => props.modelValue,
  (val, oldVal) => {
    // eslint-disable-line no-unused-vars
    if (val !== oldVal && val) {
      currentValue.value = findParentKey([val], props.options)?.[val];
    }
  },
  {
    immediate: true,
  },
);
</script>

<style lang="scss" scoped>
@import './styles/stackPicker.scss';
</style>
