<template>
  <ProFormItem :model-value="state.fieldValue" v-bind="filedAttrs" :field-value-view="fieldValueView" @click="onclick">
    <!-- 继承 slots -->
    <template v-for="slotName in Object.keys(filedSlots)" :key="slotName" #[slotName]>
      <slot :name="slotName" />
    </template>
  </ProFormItem>
  <ProPopup v-model:show="show" :height="60" :closeable="false" class="com-cascader-popup">
    <van-cascader
      :options="columns"
      :field-names="customFieldName"
      :model-value="state.modelValue"
      v-bind="attrs"
      @close="onClose"
      @finish="onFinish"
    />
  </ProPopup>
</template>

<script lang="ts" setup name="ProCascader">
import type { PropType } from 'vue';
import { storeToRefs } from 'pinia';
import { useToggle } from '@vant/use';
import type { CascaderOption } from 'vant';
import useAppStore from '@/store/app';
import ProFormItem from './ProFormItem/ProFormItem.vue';
import { isNotEmptyArray } from '@/common/constants/utils';
import { useAttrsAndSlots } from '../hooks';
import { filterChildrenLevel } from '../utils';

const globalStore = useAppStore();
const { dictMap } = storeToRefs(globalStore);

const emits = defineEmits(['update:modelValue', 'update:fullValue']);

interface Column {
  [key: string]: any;
  children?: Column[];
}

const props = defineProps({
  /**
   * 是否展示所有父节点的值
   */
  showFullValue: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: [String, Number, Object],
    default: '',
  },
  /**
   * 数据
   */
  columns: {
    type: Array as PropType<Array<Column>>,
    default: () => [],
  },
  /**
   * 数据字典 code
   */
  dictCode: {
    type: String,
    default: '',
  },
  /**
   * 枚举映射
   */
  customFieldName: {
    type: Object,
    default: () => ({ text: 'name', value: 'code', children: 'children' }),
  },
  /**
   * 展示几级数据
   */
  level: {
    type: Number,
    default: 0,
  },
});

const { filedAttrs, filedSlots, attrs, slots } = useAttrsAndSlots();

const [show, toggle] = useToggle(false);

const state = reactive({
  columns: [],
  modelValue: '' as string | number,
  fieldValue: '' as string | number | object,
});

const onclick = () => {
  toggle(true);
};

const onClose = () => {
  toggle(false);
};

// 获取选中的节点以及所有的父节点 [{name: "一级"},{name: "二级"},{name: "三级"}]
const findCheckedList = (arr: Column[], checkedValue) => {
  const tempList = [] as Column[];
  const { value, children } = props.customFieldName;

  const loop = (list: Column[], level = 0) => {
    if (!isNotEmptyArray(list)) {
      return false;
    }
    return list.some((item, index) => {
      // 去除选中节点的子节点
      const { [children]: childList, ...rest } = item;
      tempList[level] = rest;

      // 是否匹配选中的节点
      if (item[value] === checkedValue) {
        return true;
      }

      if (isNotEmptyArray(childList)) {
        return loop(childList, level + 1);
      }

      return false;
    });
  };

  if (isNotEmptyArray(arr)) {
    // 没有匹配的返回空
    if (!loop(arr)) {
      return [];
    }
  }
  return tempList;
};

// 数据源：1. 属性 columns 2. 全局字典数据
const columns = computed(() => {
  let tempColumns = [];
  if (isNotEmptyArray(props.columns)) {
    tempColumns = props.columns;
  }

  // 全局字典数据
  const singleDictData = dictMap.value[props.dictCode];
  if (props.dictCode && isNotEmptyArray(singleDictData)) {
    tempColumns = singleDictData;
  }
  return filterChildrenLevel(tempColumns, props.level);
});

// 选中的所有层级数据
const fullValue = computed(() => findCheckedList(columns.value, state.modelValue));

// field 显示的值
const fieldValueView = computed(() => {
  if (isNotEmptyArray(fullValue.value)) {
    const textList = fullValue.value.map((item) => item[props.customFieldName.text]);

    if (props.showFullValue) {
      return textList.join('/');
    }
    return textList[textList.length - 1];
  }
  return '';
});

const onFinish = ({
  value,
  selectedOptions,
}: {
  value: string | number;
  selectedOptions: CascaderOption[];
  tabIndex: number;
}) => {
  state.modelValue = value;
  state.fieldValue = value;
  emits('update:modelValue', value);
  onClose();
};

watch(
  () => props.modelValue,
  (val) => {
    state.modelValue = val;
  },
  {
    immediate: true,
    deep: true,
  },
);

watch(
  () => fullValue.value,
  (val) => {
    emits('update:fullValue', val);
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
<style lang="scss" scope>
.displayValue {
  display: flex;
  align-items: center;
  // line-height: 1.4;
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
