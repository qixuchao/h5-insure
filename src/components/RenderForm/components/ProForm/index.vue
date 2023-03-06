<template>
  <VanForm ref="formRef" class="com-van-form" v-bind="{ ...errorProps, ...$attrs }" @failed="onFailed">
    <template v-if="isSchema">
      <component :is="item.componentName" v-for="item in state.schema" :key="item.nanoid" v-bind="item" />
    </template>
    <slot />
  </VanForm>
</template>
<script lang="ts" setup>
import { withDefaults, reactive } from 'vue';
import type { FormInstance } from 'vant';
import { nanoid } from 'nanoid';
import { Toast } from 'vant/es';
import { VAN_PRO_FORM_KEY, COMPONENT_MAP, COMPONENT_LIST } from '../../utils';
import { isNotEmptyArray } from '@/common/constants/utils';
import * as FieldComponents from '../index';

interface Column {
  text: string;
  value: string | number;
  children: Column[];
}

type ValidateType = 'toast' | 'show-error' | 'show-error-message';

interface SchemaItem {
  componentName: string;
  type: string;
  label: string;
  name: string;
  required: boolean;
  columns: Column[];
  nanoid: string;
}

interface Props {
  validateType?: ValidateType;
  model?: object;
  isView?: boolean;
  schema?: SchemaItem[];
  config?: object;
}

const emits = defineEmits(['failed']);

const props = withDefaults(defineProps<Props>(), {
  validateType: 'show-error',
  isView: false,
  model: () => ({}),
  config: () => ({}),
  schema: () => [],
});

const state = reactive({
  config: {}, // 表单配置
  formData: {},
  schema: [],
  nameList: [], // 字段 name List
  isView: props.isView,
});

provide(VAN_PRO_FORM_KEY, {
  formState: state,
});

const formRef = ref<FormInstance>({} as FormInstance);

// 是否是 schema
const isSchema = computed(() => isNotEmptyArray(props.schema));

const getValues = (): Record<string, any> => {
  return formRef.value.getValues();
};

const errorProps = computed(() => {
  const tempMap = {
    toast: [false, false],
    'show-error': [false, true],
    'show-error-message': [true, false],
  };

  const [flag1, flag2] = tempMap[props.validateType];

  return {
    'show-error-message': flag1,
    'show-error': flag2,
  };
});

const validate = (name?: string | string[]): Promise<Record<string, any>> => {
  return new Promise((resolve, reject) => {
    formRef.value
      .validate(name)
      .then(() => {
        resolve(getValues());
      })
      .catch((err) => {
        if (Array.isArray(err) && err[0]) {
          formRef.value.scrollToField(err[0].name);
          Toast({ message: err[0].message });
        }
        reject(err);
      });
  });
};

const onFailed = ({ values, errors }) => {
  // 是否为 Toast 错误提示方式
  if (props.validateType === 'toast') {
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
  () => [props.schema, props.config],
  ([schema, config]) => {
    state.config = config;
    if (isSchema.value) {
      state.schema = (schema as SchemaItem[]).map((item) => ({
        ...item,
        nanoid: item.nanoid || nanoid(),
        componentName: FieldComponents[item.componentName] || item.componentName,
        ...config[item.name],
      }));
    }
  },
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

defineExpose({
  ...['submit', 'getValues', 'validate', 'resetValidation', 'getValidationStatus', 'scrollToField'].reduce(
    (res, key) => {
      res[key] = (...rest) => formRef.value[key](...rest);
      return res;
    },
    {},
  ),
  validate,
});
</script>
<style lang="scss" scoped>
.com-van-form {
  height: 100%;
}
</style>
