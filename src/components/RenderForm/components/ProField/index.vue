<template>
  <van-field
    :model-value="state.modelValue"
    class="com-van-field"
    autocomplete="off"
    v-bind="{ ...$attrs, placeholder, rules }"
    @update:model-value="updateModelValue"
  >
    <!-- 继承 slots -->
    <template v-for="slotName in Object.keys($slots)" :key="slotName" #[slotName]>
      <slot :name="slotName" />
    </template>
  </van-field>
</template>

<script lang="ts" setup name="ProFiled">
import { useAttrs, PropType, inject } from 'vue';
import type { FieldProps, FieldRule } from 'vant';
import { isNil } from 'lodash';
import { VAN_PRO_FORM_KEY, RegMap, RULE_TYPE_MSG, upperFirstLetter } from '../../utils';
import { isNotEmptyArray } from '@/common/constants/utils';

//
type RuleType = 'phone' | 'email';

const attrs = useAttrs() as FieldProps;
const emits = defineEmits(['update:model-value']);

const { formState } = inject(VAN_PRO_FORM_KEY) || {};

const props = defineProps({
  ruleType: {
    type: String,
    default: '',
  },
  modelValue: {
    type: [String, Number, Object, Array, Boolean],
    default: '',
  },
  /**
   * 是否查看模式
   */
  isView: {
    type: Boolean,
    default: false,
  },
  required: {
    type: Boolean,
    default: false,
  },
  rules: {
    type: Array as PropType<FieldRule[]>,
    default: () => [],
  },
});

const state = reactive({
  modelValue: '' as string | number,
});

const placeholder = computed((): string => {
  return attrs.placeholder || `请输入${attrs.label || ''}`;
});

const rules = computed(() => {
  if (isNotEmptyArray(props.rules)) {
    return props.rules;
  }

  if (props.ruleType) {
    const regFn = RegMap[`is${upperFirstLetter(props.ruleType)}`];
    return [
      {
        required: props.required,
        message: (val) => {
          if (isNil(val) || val === '') {
            return attrs.placeholder;
          }
          if (regFn(val)) {
            return '';
          }
          return RULE_TYPE_MSG[props.ruleType]?.[0] || '';
        },
      },
    ];
  }

  if (props.required) {
    return [
      {
        required: props.required,
        message: (val) => {
          if (isNil(val) || val === '') {
            return attrs.placeholder;
          }
          return '';
        },
      },
    ];
  }
  return [];
});

const updateModelValue = (val) => {
  if (formState.formData && attrs.name) {
    formState.formData[attrs.name] = val;
  }
  state.modelValue = val;
  emits('update:model-value', val);
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

onMounted(() => {
  if (attrs.name && formState.nameList) {
    formState.nameList.push(attrs.name);
  }
});
</script>
<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>
<style lang="scss">
.van-cell.com-van-field {
  .van-field__label--required::before {
    display: none;
  }
  .van-field__value {
    align-items: flex-start;
    .van-field__body {
      width: 100%;
    }
    .van-field__control {
      text-align: left;
    }
  }
}
</style>
