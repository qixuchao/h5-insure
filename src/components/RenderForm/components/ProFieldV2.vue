<template>
  <van-field
    :model-value="state.modelValue"
    class="com-van-field"
    autocomplete="off"
    :formatter="formatter"
    v-bind="{ ...$attrs, placeholder, rules }"
    @blur="onblur"
    @update:model-value="updateModelValue"
  >
    <!-- 继承 slots -->
    <template v-for="slotName in Object.keys(slotskeyMap)" :key="slotName" #[slotName]>
      <slot :name="slotskeyMap[slotName]" />
    </template>
    <template v-if="unit" #extra>{{ unit }}</template>
  </van-field>
</template>

<script lang="ts" setup name="ProFiled">
import { useAttrs, useSlots, PropType, inject } from 'vue';
import type { FieldProps, FieldRule } from 'vant';
import { isNil } from 'lodash';
import { VAN_PRO_FORM_KEY, RegMap, RULE_TYPE_MSG, upperFirstLetter, handleSlots } from '../utils';
import { isNotEmptyArray } from '@/common/constants/utils';

//
type RuleType = 'phone' | 'email';

const attrs = useAttrs() as FieldProps;
const slots = useSlots();
const emit = defineEmits(['update:model-value', 'blur']);

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
  // number 类型 精度
  precision: {
    type: Number,
    default: 0,
  },
  // 是否自动补全精度
  isPrecisionCompleted: {
    type: Boolean,
    default: false,
  },
  unit: {
    type: String,
    default: '',
  },
});

const state = reactive({
  modelValue: '' as string | number,
});

// form schema 插槽
const slotskeyMap = computed(() => {
  const slotKeys = handleSlots(slots, attrs.slots);
  const { extra, ...rest } = slotKeys;

  return props.unit ? rest : slotKeys;
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

const isNeedPrecision = computed(() => {
  return attrs.type === 'number' && props.precision;
});

const formatter = (value) => {
  // 数字类型且精度存在
  if (isNeedPrecision.value && value) {
    return value.replace(/^(0)\d+$/g, '$1').replace(new RegExp(`^(\\d+\\.\\d{${props.precision}})\\d+$`, 'g'), '$1');
  }
  return value;
};

const updateModelValue = (val) => {
  if (formState.formData && attrs.name) {
    formState.formData[attrs.name] = val;
  }
  state.modelValue = val;
  emit('update:model-value', val);
};

const onblur = (event) => {
  let val = state.modelValue;
  // 数字类型且精度存在
  if (isNeedPrecision.value && val && props.isPrecisionCompleted) {
    val = Number(val).toFixed(props.precision);
    updateModelValue(val);
  }
  emit('blur', event);
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
