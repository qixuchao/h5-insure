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
    title="请选择职业"
    closeable
    height="74"
    :model-value="cascaderModelValue"
    display-type="stackPicker"
    :search-value="searchValue"
    :common-options="commonOccupationList"
    @update:full-value="updateFullValue"
    @close="handleClose"
  >
    <template #cascader-top>
      <div class="search-bar">
        <ProCheckButton :activated="isShowCommon" label="常用职业" @click="selectCommon"></ProCheckButton>
        <ProSearch v-model="searchString" placeholder="请输入职业进行搜索" @search="searchOccupation"></ProSearch>
      </div>
    </template>
    <template #value-view>
      <span class="occupation-view"
        >{{ state.text
        }}<span v-if="state.occupationClass" class="class-tips">风险{{ state.occupationClass }}级</span></span
      >
    </template>
    <template #option="{ option = {} }">
      <span class="occupation-view option">
        <span class="option-label"> {{ option?.[customFieldName?.text] }}</span>
        <span v-if="option?.[OCCUPATION_CLASS]" class="class-tips">风险{{ option?.[OCCUPATION_CLASS] }}级</span>
        <ProSvg v-else name="arrow-right"></ProSvg>
      </span>
    </template>
  </ProCascaderV2>
</template>
<script lang="ts" setup name="ProOccupation">
/** 职业信息  */
import { useToggle } from '@vant/use';
import { storeToRefs } from 'pinia';
import { isNotEmptyArray } from '@/common/constants/utils';
import ProCascaderV2 from './ProCascaderV2.vue';
import ProFormItem from './ProFormItem/ProFormItem.vue';
import { VAN_PRO_FORM_KEY, combineDictCode } from '../utils';
import useDictData from '@/hooks/useDictData';
import useAppStore from '@/store/app';

const globalStore = useAppStore();
const { dictMap } = storeToRefs(globalStore);

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
  level: 0,
});

const searchValue = ref();
const searchString = ref();

const searchOccupation = (value) => {
  toggleCommon(false);
  searchValue.value = value;
};

const [isShowCommon, toggleCommon] = useToggle(false);
const commonOccupationList = ref([]);

const selectCommon = () => {
  toggleCommon(!isShowCommon.value);
  searchValue.value = '';
  searchString.value = '';
  if (isShowCommon.value) {
    commonOccupationList.value = dictMap.value[combineDictCode('COMMON_USE_OCCUPATION')];
  } else {
    commonOccupationList.value = [];
  }
};

const handleClose = () => {
  toggleCommon(false);
  searchValue.value = '';
  searchString.value = '';
  commonOccupationList.value = [];
};

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
      formState.formData.occupationCode = arr[arr.length - 1]?.code;
      formState.formData.occupationCodeList = val;
    }
    state.modelValue = val;
  }
};

const cascaderModelValue = computed(() => {
  if (state.modelValue?.length) {
    return isNotEmptyArray(state.modelValue) ? state.modelValue[state.modelValue.length - 1] : null;
  }
  return null;
});

watch(
  () => props.modelValue,
  (val) => {
    state.modelValue = val || [];
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

onMounted(() => {
  useDictData(combineDictCode('COMMON_USE_OCCUPATION'));
});
</script>
<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>
<style lang="scss" scoped>
.occupation-view {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 16px;
  &.option {
    justify-content: space-between;
    .option-label {
      overflow-x: hidden;
      text-overflow: ellipsis;
    }
  }
  .class-tips {
    margin-left: 20px;
    line-height: 30px;
    min-height: 40px;
    padding: 5px 12px;
    background: rgba(255, 88, 64, 0.1);
    border-radius: 8px;
    font-size: 22px;
    color: #ff5840;
    white-space: nowrap;
  }
}
.search-bar {
  padding: 15px $zaui-card-border;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > .van-button {
    min-width: 160px;
    height: 70px;
    font-size: 30px;
  }
  :deep(.search-wrap) {
    width: 500px;
    padding: 0;
  }
}
</style>
