<template>
  <van-field
    :model-value="state.modelValue"
    class="com-van-field"
    autocomplete="off"
    :formatter="formatter"
    v-bind="{ ...$attrs, placeholder, rules }"
    @blur="onBlur"
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
import dayjs from 'dayjs';
import type { FieldProps, FieldRule } from 'vant';
import { isNil } from 'lodash';
import { CERT_TYPE_ENUM } from '@/common/constants';
import { isNotEmptyArray } from '@/common/constants/utils';
import {
  VAN_PRO_FORM_KEY,
  RELATED_RULE_TYPE_MAP,
  relatedConfigMap,
  handleSlots,
  validatorMap,
  parseCertNo,
} from '../utils';

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
  /**
   * ruleType 关联的 name (证件号验证)
   */
  relatedName: {
    type: String,
    default: '',
  },
  /**
   * number 类型 精度
   */
  precision: {
    type: Number,
    default: 0,
  },
  /**
   * 是否自动补全精度
   */
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

const ruleType = computed(() => {
  if (props.ruleType) {
    return props.ruleType;
  }

  // 关联字段的类型存在
  if (props.relatedName) {
    // 并且关联字段有值
    const relatedNameValue = formState.formData[props.relatedName];
    if (relatedNameValue) {
      return RELATED_RULE_TYPE_MAP[props.relatedName]?.[relatedNameValue];
    }
  }
  return '';
});

const rules = computed(() => {
  if (isNotEmptyArray(props.rules)) {
    return props.rules;
  }

  return [
    {
      required: props.required,
      message: (val) => {
        if (props.required && (isNil(val) || val === '')) {
          return attrs.placeholder;
        }
        if (ruleType.value) {
          const [regFn] = validatorMap[ruleType.value] || [];
          if (typeof regFn !== 'function') {
            console.warn(`%c 字段 ${attrs.label} 的规则 ${ruleType} 校验函数不存在，请先确认～`, 'color: #3e7;');
            return '';
          }
          if (regFn(val)) {
            return `请输入正确的${attrs.label}`;
          }
        }
        return '';
      },
    },
  ];
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
  if (props.relatedName) {
    const { onChangeEffect } = relatedConfigMap[props.relatedName] || {};
    if (typeof onChangeEffect === 'function') {
      onChangeEffect(val, formState.formData);
    }
  }
  if (formState.formData && attrs.name) {
    formState.formData[attrs.name] = val;
  }
  state.modelValue = val;
  emit('update:model-value', val);
};

const onBlur = (event) => {
  let val = state.modelValue;
  // 数字类型且精度存在
  if (isNeedPrecision.value && val && props.isPrecisionCompleted) {
    val = Number(val).toFixed(props.precision);
    updateModelValue(val);
  }

  if (props.relatedName) {
    //  blur 副作用
    const { onBlurEffect } = relatedConfigMap[props.relatedName] || {};
    if (typeof onBlurEffect === 'function') {
      onBlurEffect(val, formState.formData);
    }
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

watch(
  () => formState.formData[attrs.name],
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
