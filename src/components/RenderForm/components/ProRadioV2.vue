<template>
  <ProFieldV2
    class="com-van-radio-wrap"
    :name="name"
    v-bind="filedAttrs"
    :model-value="state.modelValue"
    :disabled="disabled"
    :required="required"
    :rules="finalRules"
  >
    <template #input>
      <ValueView v-if="isView" :value="fieldValueView" />
      <template v-else>
        <template v-if="isButtonType">
          <ProCheckButton
            v-for="column in state.columns"
            :key="column.value"
            :label="column.text"
            :disabled="column.disabled || disabled"
            :activated="state.modelValue == column.value"
            :icon-name="column.iconName"
            @click="onClick(column)"
          />
        </template>
        <van-radio-group v-else v-model="state.modelValue" v-bind="attrs" :disabled="disabled">
          <van-radio
            v-for="column in state.columns"
            :key="column.value"
            :name="column.value"
            v-bind="column"
            :disabled="disabled"
            >{{ column.label }}</van-radio
          >
        </van-radio-group>
      </template>
    </template>
    <!-- <template v-if="name === 'policyReceiveType'" #label>
      <slot name="label">
        <span>{{ filedAttrs.label }}</span>
        <van-popover v-model:show="visible" trigger="click" placement="top-start" theme="dark">
          <div class="tip-content">
            *电子保单与纸质保单具有同等法律效力，为了节能环保，如投保人选择”电子保单“或者”电子保单+保险权益提示函“，不需要利安人寿提供纸质保单，利安人寿将奖励投保人“利安人寿“APP的孚利豆。在保险合同犹豫期结束后，您可以登陆“利安人寿“APP领取相应奖励。如您在犹豫期内申请提供纸质保单，利安人寿将不再奖励孚利豆。如您在领取孚利豆后申请提供纸质保单，利安人寿将收取您申请纸质保单的工本费。
          </div>
          <template #reference> <van-icon name="question" /> </template>
        </van-popover>
      </slot>
    </template> -->
    <template v-if="name === 'selfInsuranceItemFlag'" #label>
      <slot name="label">
        <span>{{ filedAttrs.label }}</span>
        <van-popover v-model:show="visible" trigger="click" placement="top-start" theme="dark">
          <div class="tip-content">
            投保人、被保险人、受益人是否为本单销售人员（含本单销售人员所在公司其他销售人员)及其直系亲属（直系血亲和直系姻亲，如配偶、父母、子女、祖父母、外祖父母、孙子女、外孙子女）
          </div>
          <template #reference> <van-icon name="question" /> </template>
        </van-popover>
      </slot>
    </template>
  </ProFieldV2>
  <div v-if="name === 'policyReceiveType'" class="error-message">
    *电子保单与纸质保单具有同等法律效力，为了节能环保，如投保人选择”电子保单“或者”电子保单+保险权益提示函“，不需要利安人寿提供纸质保单，利安人寿将奖励投保人“利安人寿“APP的孚利豆。在保险合同犹豫期结束后，您可以登陆“利安人寿“APP领取相应奖励。如您在犹豫期内申请提供纸质保单，利安人寿将不再奖励孚利豆。如您在领取孚利豆后申请提供纸质保单，利安人寿将收取您申请纸质保单的工本费。
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue';
import { type RadioGroupProps, FieldProps, FieldRule } from 'vant';
import isNil from 'lodash-es/isNil';
import { useToggle } from '@vueuse/core';
import { isNotEmptyArray } from '@/common/constants/utils';
import { useAttrsAndSlots } from '../hooks';
import { VAN_PRO_FORM_KEY } from '../utils';
import ValueView from './ProFormItem/ValueView.vue';
import ProFieldV2 from './ProFieldV2.vue';

interface RadioAttrs extends RadioGroupProps {
  title: string | number;
}

const { filedAttrs, attrs } = toRefs(useAttrsAndSlots());

interface Column {
  label: string;
  value: string | number;
  disabled?: boolean;
}

const props = defineProps({
  /**
   * radio 类型
   */
  type: {
    type: String as PropType<'button' | 'normal'>,
    default: 'button',
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },
  /**
   * 数据
   */
  columns: {
    type: Array as () => Array<Column>,
    default: () => [],
  },
  /**
   * 是否默认选中第一项
   */
  isDefaultSelected: {
    type: Boolean,
    default: true,
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
   * 枚举映射
   */
  customFieldName: {
    type: Object,
    default: () => ({ text: 'label', value: 'value', children: 'children' }),
  },
  /**
   * 是否可用
   */
  disabled: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['update:modelValue', 'change']);
const [visible, toggleType] = useToggle();

const { formState } = inject(VAN_PRO_FORM_KEY) || {};

const state = reactive({
  modelValue: '' as string | number,
  columns: [],
});

// 是否为 button 类型
const isButtonType = computed(() => props.type === 'button');

// 查看模式值
const fieldValueView = computed(() => {
  return (state.columns.find((column) => String(column.value) === String(state.modelValue)) || {}).text || '';
});

const isFalseValue = (val) => isNil(val) || val === '';

const finalRules = computed(() => {
  if (isNotEmptyArray(props.rules)) {
    return props.rules;
  }

  return [
    {
      required: props.required,
      validator: (val) => {
        // 数值为空
        if (props.required && isFalseValue(val)) {
          return filedAttrs.value.placeholder;
        }
        return '';
      },
      message: filedAttrs.value.placeholder,
    },
  ];
});

const handleSelect = (value) => {
  // if (formState?.formData && filedAttrs.value.name) {
  //   formState.formData[filedAttrs.value.name] = value;
  // }
  state.modelValue = value;
  emit('update:modelValue', value);
  emit('change', value);
};

const onClick = ({ disabled: dis, value }: Column) => {
  if (!((attrs.value as RadioAttrs).disabled || dis || props.disabled)) {
    handleSelect(value);
  }
};

watch(
  () => props.modelValue,
  (val) => {
    state.modelValue = val;
  },
  {
    immediate: true,
  },
);

watch(
  () => formState.formData?.[filedAttrs.value.name],
  (val) => {
    if (val === undefined && state.modelValue !== undefined) return;
    state.modelValue = val as string | number;
  },
  {
    immediate: true,
    deep: true,
  },
);

watch(
  () => props.columns,
  (val = []) => {
    if (isNotEmptyArray(val)) {
      state.columns = val.map((item) => ({
        ...item,
        text: item[props.customFieldName.text],
        value: item[props.customFieldName.value],
      }));

      const [{ disabled, value }] = state.columns;
      // 默认选中第一项（是否可选）
      if (props.isDefaultSelected && !disabled && (isNil(props.modelValue) || props.modelValue === '')) {
        handleSelect(value);
      }
    }
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

<style lang="scss">
.tip-content {
  font-size: 24px;
  width: 400px;
  padding: 10px;
}
</style>
<style lang="scss" scoped>
.com-van-radio-wrap {
  :deep(.van-field__control--custom) {
    flex-flow: wrap;
    justify-content: flex-end;
  }
  .com-check-btn {
    margin: 8px 16px 8px 0;
  }
  .value-view-wrap {
    margin: 14px 0;
    text-align: right;
  }

  :deep(.van-field__control--error) {
    .com-check-btn {
      color: var(--van-primary-color) !important;
    }
  }
}

.error-message {
  color: var(--van-primary-color);
  padding: 30px;
  font-size: 28px;
}
</style>
