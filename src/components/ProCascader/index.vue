<template>
  <ProField
    :model-value="modelValue"
    :="$attrs"
    :is-link="isLink"
    :label="label"
    :is-view="isView"
    :required="required"
    @click="handleClick"
  >
    <template #input>
      <span v-if="displayValue" class="displayValue">{{ displayValue }}</span>
      <span v-else class="placeholder">{{ placeholder }}</span>
    </template>
  </ProField>
  <ProPopup v-model:show="show" :height="60" :closeable="false" class="com-cascader-popup">
    <van-cascader
      :title="title || label"
      :options="dataSource"
      :field-names="fieldNames"
      :model-value="modelValue"
      @close="handleClose"
      @finish="handleFinish"
    />
  </ProPopup>
</template>

<script lang="ts" setup>
import { useToggle } from '@vant/use';
import ProField from '@/components/ProField/index.vue';
import ProPopup from '@/components/ProPopup/index.vue';

const emits = defineEmits([
  'update:modelValue',
  'onChange',
  'update:field0',
  'update:field1',
  'update:field2',
  'update:field3',
  'onChange',
]);
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  field0: {
    type: [String, Number],
    default: '',
  },
  field1: {
    type: [String, Number],
    default: '',
  },
  field2: {
    type: [String, Number],
    default: '',
  },
  field3: {
    type: [String, Number],
    default: '',
  },
  dataSource: {
    type: Array as () => Array<{ label: string; value: number | string }>,
    default: () => [],
  },
  title: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  isLink: {
    type: Boolean,
    default: true,
  },
  placeholder: {
    type: String,
    default: '请选择',
  },
  isView: {
    type: Boolean,
    default: false,
  },
  required: {
    type: Boolean,
    default: false,
  },
  mapping: {
    type: Object,
    default: () => ({
      label: 'label',
      value: 'value',
      children: 'children',
    }),
  },
  showFullValue: {
    type: Boolean,
    default: false,
  },
  needKey: {
    type: String,
    default: '',
  },
});

const [show, toggle] = useToggle(false);
let tempValue: string[] = [];

const handleClick = () => {
  toggle(true);
};

const handleClose = () => {
  toggle(false);
};

const deleteEmptyChildren = (item: any) => {
  if (item.children) {
    if (item.children.length === 0) {
      // eslint-disable-next-line
      delete item.children;
    } else {
      item.children.forEach((child: any) => {
        deleteEmptyChildren(child);
      });
    }
  }
};

const flat = (list: any[]) => {
  let arr: any[] = [];
  list.forEach((item) => {
    arr.push(item);
    if (item.children && item.children.length > 0) {
      arr = [...arr, ...flat(item.children)];
    }
  });
  return arr;
};

watch(
  () => props.dataSource,
  () => {
    props.dataSource.forEach((item) => {
      deleteEmptyChildren(item);
    });
  },
);

const fieldNames = computed(() => {
  const { label = 'label', value = 'value', children = 'children' } = props.mapping;
  return {
    text: label,
    value,
    children,
  };
});

const flatList = computed(() => {
  return flat(props.dataSource);
});

const findLabel = (value: any) => {
  const find = flatList.value.find((x) => x[props.mapping.value] === value);
  return find ? find[props.mapping.label] : value;
};

const displayValue = computed(() => {
  if (props.showFullValue) {
    return (
      tempValue
        .filter((x) => !!x)
        .map((x) => findLabel(x))
        .join('/') || findLabel(props.modelValue)
    );
  }
  return (
    [props.field0, props.field1, props.field2, props.field3]
      .filter((x) => !!x)
      .map((x) => findLabel(x))
      .join('/') || findLabel(props.modelValue)
  );
});

const handleFinish = (selected: { value: number | string; selectedOptions: any[] }) => {
  if (props.needKey) {
    emits('update:modelValue', flatList.value.find((x) => x[props.mapping.value] === selected.value)?.[props.needKey]);
  } else {
    emits('update:modelValue', selected.value);
  }
  emits(
    'onChange',
    flatList.value.find((x) => x[props.mapping.value] === selected.value),
  );
  selected.selectedOptions.forEach((item, index) => {
    emits(`update:field${index}`, item[props.mapping.value]);
  });
  tempValue = selected.selectedOptions.map((item) => item[props.mapping.value]);
  toggle(false);
};
</script>

<style lang="scss">
.displayValue {
  display: flex;
  align-items: center;
  line-height: 1.4;
}
.placeholder {
  color: $zaui-aide-text;
}
.com-cascader-popup {
  .van-cascader {
    height: 100%;
    display: flex;
    flex-direction: column;

    .van-tabs {
      flex: 1;
      height: 0;
      display: flex;
      flex-direction: column;
      .van-tabs__content {
        flex: 1;
        height: 0;
        .van-tab__panel {
          height: 100%;
          .van-cascader__options {
            height: 100%;
          }
        }
      }
    }
  }
}
</style>
