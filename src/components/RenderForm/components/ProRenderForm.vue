<template>
  <VanForm ref="formRef" class="com-van-form" v-bind="{ ...errorProps, ...$attrs }" @failed="onFailed">
    <template v-if="isSchema">
      <component
        :is="item.componentName"
        v-for="(item, index) in state.schema"
        :key="`${item.nanoid}_${index}`"
        v-bind="item"
        v-model="state.formData[item.name]"
        :is-view="isView"
      >
        <!-- 继承 slots -->
        <template v-for="slotName in noDefaultSlots" :key="slotName" #[slotName]="slotParams">
          <slot :name="slotName" v-bind="slotParams || {}" />
        </template>
      </component>
    </template>
    <!-- <SchemaRenderField v-if="isSchema" :schema="state.schema" /> -->
    <slot name="default" />
  </VanForm>
</template>
<script lang="ts" setup>
import { withDefaults, reactive, shallowRef, useSlots } from 'vue';
import type { FormInstance } from 'vant';
import { nanoid } from 'nanoid';
import { Toast } from 'vant/es';
import debounce from 'lodash-es/debounce';
import { isNotEmptyArray } from '@/common/constants/utils';
import { VAN_PRO_FORM_KEY } from '../utils';
import useDictData from '@/hooks/useDictData';
import * as FieldComponents from './index';
import { SchemaItem } from '../index.data';

/**
 * 验证方式 toast - 弹窗，show-error - 仅标红， show-error-message - 字段下方红色文案
 */
type ValidateMethod = 'toast' | 'show-error' | 'show-error-message';

interface Props {
  validateMethod?: ValidateMethod;
  model?: object;
  isView?: boolean;
  schema?: SchemaItem[];
  config?: object;
  markRequired?: boolean;
  /** 额外Provide  */
  extraProvision: object;
}

const emits = defineEmits(['failed']);

const slots = useSlots();

const props = withDefaults(defineProps<Props>(), {
  validateMethod: 'show-error',
  isView: false,
  markRequired: true,
  model: () => ({}),
  config: () => ({}),
  schema: () => [],
});

const state = reactive({
  config: {}, // 表单配置
  formData: {},
  schema: [],
  nameList: [], // 字段 name List
  dictCodeList: [], // 字典枚举
});

const formRef = ref<FormInstance>({} as FormInstance);

provide(VAN_PRO_FORM_KEY, {
  formState: state,
  formRef,
  markRequired: props.markRequired,
  ...props.extraProvision,
});

// 非默认 slots
const noDefaultSlots = computed(() => Object.keys(slots).filter((key) => key !== 'default'));

// 是否是 schema
const isSchema = computed(() => isNotEmptyArray(props.schema));

// 表单验证错误提示方式
const errorProps = computed(() => {
  const tempMap = {
    toast: [false, false],
    'show-error': [false, true],
    'show-error-message': [true, false],
  };

  const [flag1, flag2] = tempMap[props.validateMethod];

  return {
    'show-error-message': flag1,
    'show-error': flag2,
  };
});

const onFailed = ({ values, errors }) => {
  // 是否为 Toast 错误提示方式
  if (props.validateMethod === 'toast') {
    const errorsMap = errors.reduce((res, error) => {
      res[error.name] = error;
      return res;
    }, {});
    const errorsKeys = Object.keys(errorsMap);

    if (errorsKeys.length) {
      // 原始顺序提示
      const sortedErrorKeys = state.nameList.reduce((res, key) => {
        if (errorsKeys.includes(key)) {
          res.push(key);
        }
        return res;
      }, []);

      const { message } = errorsMap[sortedErrorKeys[0]] || {};

      Toast({ message });
    }
  }

  console.log('failed errors', errors);
  emits('failed', { values, errors });
};

watch(
  [() => props.schema, () => state.config],
  ([schema, config]) => {
    if (isSchema.value) {
      state.schema = (schema as SchemaItem[])
        .map((item) => ({
          ...item,
          // modelValue: props.model[item.name],
          componentName: FieldComponents[item.componentName]
            ? shallowRef(FieldComponents[item.componentName])
            : item.componentName,
          ...config[item.name],
          nanoid: nanoid(),
        }))
        .filter((item) => !item.hidden);
    }
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

watch(
  () => state.dictCodeList,
  debounce((val) => {
    if (val) {
      useDictData(val as string[]);
    }
  }, 500),
  {
    immediate: true,
    deep: true,
  },
);

watch(
  () => props.model,
  (val) => {
    if (val) {
      state.formData = val;
    }
  },
  {
    immediate: true,
    deep: true,
  },
);

watch(
  () => state.schema,
  (val) => {
    // 处理需要请求的字典并去重
    state.dictCodeList = [
      ...new Set([
        ...state.dictCodeList,
        ...state.schema.reduce((res, item) => {
          if (item.dictCode) {
            res.push(item.dictCode);
          }
          return res;
        }, []),
      ]),
    ];
  },
  {
    immediate: true,
    deep: true,
  },
);

defineExpose({
  ...['submit', 'getValues', 'validate', 'resetValidation', 'getValidationStatus', 'scrollToField'].reduce(
    (res, key) => {
      res[key] = (...rest) => formRef.value?.[key](...rest);
      return res;
    },
    {},
  ),
});
</script>
<style lang="scss" scoped>
.com-van-form {
  div.van-cell:last-child::after {
    display: none;
  }
}
</style>
