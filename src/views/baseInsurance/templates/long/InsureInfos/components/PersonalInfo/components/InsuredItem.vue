<template>
  <ProRenderFormWithCard
    ref="insuredFormRef"
    class="trail-personal-info"
    :title="'被保人信息'"
    :model="state.personVO"
    :schema="state.schema"
    :config="state.config"
    :is-view="isView"
  />
  <template v-if="hasBeneficiarySchema">
    <BeneficiaryItem
      v-for="(beneficiary, index) in state.beneficiaryList"
      ref="beneficiaryFormRef"
      :key="`${beneficiary.nanoid}_${index}`"
      v-model="beneficiary.personVO"
      :schema="beneficiarySchema"
      :config="beneficiary.config"
      :is-view="isView"
    />
    <van-button type="primary" @click="onAddBeneficiary">添加受益人</van-button>
  </template>
</template>
<script lang="ts" setup name="InsuredItem">
import { withDefaults } from 'vue';
import { nanoid } from 'nanoid';
import {
  type SchemaItem,
  type PersonFormProps,
  isOnlyCert,
  validateForm,
  validateFields,
  ProRenderFormWithCard,
  colorConsole,
} from '@/components/RenderForm';
import { isNotEmptyArray } from '@/common/constants/utils';
import BeneficiaryItem from './BeneficiaryItem.vue';
import { deepCopy } from '@/utils';

interface Props {
  modelValue: any;
  holderPersonVO: object;
  schema: SchemaItem[];
  config: object;
  isView: boolean;
  isTrial: boolean;
  trialFactorCodes: string[];
  beneficiaryList: Partial<PersonFormProps>[];
  beneficiarySchema: SchemaItem[];
}

const emit = defineEmits(['update:modelValue', 'update:beneficiaryList']);
const insuredFormRef = ref(null);
const beneficiaryFormRef = ref(null);

// 初始化受益人数据
const initBeneficiaryItem = {
  schema: [],
  trialFactorCodes: [],
  config: {},
  personVO: {},
};

const props = withDefaults(defineProps<Props>(), {
  schema: () => [],
  modelValue: () => ({}),
  trialFactorCodes: () => [],
  config: () => ({}),
  initInsuredItem: () => [],
  beneficiaryList: () => [],
  beneficiarySchema: () => [],
  isView: false,
  isTrial: false,
});

interface StateInfo extends PersonFormProps {
  validated: boolean;
  beneficiaryList: Partial<PersonFormProps>[];
}

const state = reactive<Partial<StateInfo>>({
  /**
   * 是否所有表单是否验证成功
   */
  validated: false,
  /** 受益人 */
  schema: [],
  config: {},
  personVO: {},
  beneficiaryList: [deepCopy(initBeneficiaryItem)],
});

// 验证表单必填
const validate = (isTrial) => {
  return Promise.all([
    ...(beneficiaryFormRef.value?.map((item) => item.validate()) || []),
    validateForm(insuredFormRef, props.trialFactorCodes, isTrial),
  ]);
};

// 添加受益人
const onAddBeneficiary = () => {
  state.beneficiaryList.push(
    deepCopy({
      ...initBeneficiaryItem,
      nanoid: nanoid(),
      schema: props.beneficiarySchema,
    }),
  );
};

// 删除受益人
const onDeleteBeneficiary = () => {};

// 是否有受益人
const hasBeneficiarySchema = computed(() => isNotEmptyArray(props.beneficiarySchema));

/** 验证试算因子是否全部有值 */
const validateTrialFields = () => {
  /** 受益人没有试算因子，先留这个位置 */
  const flag = !hasBeneficiarySchema.value || beneficiaryFormRef.value?.every((item) => item.validateTrialFields());
  return (
    flag &&
    validateFields({
      personVO: state.personVO,
      trialFactorCodes: props.trialFactorCodes,
    })
  );
};

// 监听投保人信息
watch(
  () => props.holderPersonVO,
  (val) => {
    colorConsole('投保人信息变动了');
    // 投保人id不同步到被保人
    const { id, ...holderPersonVO } = val || {};
    // 若为本人合并投保人数据
    if (state.personVO?.relationToHolder === '1') {
      Object.assign(state.personVO, holderPersonVO);
    }
  },
  {
    deep: true,
    immediate: true,
  },
);

// 监听受益人信息
watch(
  () => state.beneficiaryList.map((item) => item.personVO),
  (val) => {
    emit('update:beneficiaryList', state.beneficiaryList);
  },
  {
    deep: true,
    immediate: true,
  },
);

// 监听投被保人关系
watch(
  () => state.personVO?.relationToHolder,
  (val) => {
    colorConsole('与投保人关系变动了');
    const { personVO, schema = [], config } = state || {};
    // 投保人id不同步到被保人
    const { id, ...holderPersonVO } = props.holderPersonVO || {};

    const isSelf = personVO.relationToHolder === '1';
    const isChild = personVO.relationToHolder === '3';
    const isOnlyCertFlag = isOnlyCert(schema.find((schemaItem) => schemaItem.name === 'certType') || {});

    // 若只有证件类型为身份证, 隐藏证件类型，修改title为身份证号
    if (isOnlyCertFlag) {
      if (config.certNo) {
        config.certNo.label = `身份证号${isChild ? '\n(户口簿)' : ''}`;
      } else {
        config.certNo = {
          label: `身份证号${isChild ? '\n(户口簿)' : ''}`,
        };
      }
    }

    // 若被保人为本人是否要隐藏
    schema.forEach((schemaItem) => {
      schemaItem.relationToHolder = personVO.relationToHolder;
      schemaItem.hidden = !schemaItem.isSelfInsuredNeed && isSelf;
    });

    // // 新数据
    const newPersonVo = isSelf
      ? {
          ...personVO,
          ...holderPersonVO,
        }
      : {
          ...Object.keys(personVO).reduce((res, key) => {
            // 若只有证件类型为身份证
            if (!(isOnlyCertFlag && key === 'certType')) {
              res[key] =
                {
                  Object: {},
                  Array: [],
                }[Object.prototype.toString.call(personVO[key]).slice(8, -1)] || null;
            }
            return res;
          }, {}),
          relationToHolder: personVO.relationToHolder,
        };

    // 若为本人合并投保人数据
    Object.assign(state.personVO, newPersonVo);
  },
  {
    immediate: true,
    deep: true,
  },
);

watch(
  () => props.config,
  (val) => {
    if (val) {
      Object.assign(state.config, val);
    }
  },
  {
    deep: true,
    immediate: true,
  },
);

watch(
  () => props.schema,
  (val) => {
    if (val) {
      Object.assign(state.schema, deepCopy(val));
    }
  },
  {
    deep: true,
    immediate: true,
  },
);

watch(
  () => props.modelValue,
  (val) => {
    if (val) {
      Object.assign(state.personVO, val);
      if (isNotEmptyArray(val.beneficiaryList) && isNotEmptyArray(state.beneficiaryList)) {
        // 受益人
        state.beneficiaryList.forEach((beneficiaryIem, i) => {
          Object.assign(beneficiaryIem.personVO, val.beneficiaryList[i].personVO);
        });
      }
    }
  },
  {
    deep: true,
    immediate: true,
  },
);

watch(
  () => props.beneficiaryList,
  (val) => {
    if (val) {
      if (isNotEmptyArray(val) && isNotEmptyArray(state.beneficiaryList)) {
        // 受益人
        state.beneficiaryList = state.beneficiaryList.map((beneficiaryItem, i) => {
          const currentBeneficiaryItem = val[i] || {};
          return {
            ...currentBeneficiaryItem,
            personVO: {
              ...beneficiaryItem.personVO,
              ...currentBeneficiaryItem.personVO,
            },
          };
        });
      }
    }
  },
  {
    deep: true,
    immediate: true,
  },
);

watch(
  () => state.personVO,
  (val) => {
    if (val) {
      emit('update:modelValue', val);
    }
  },
  {
    deep: true,
    immediate: true,
  },
);

defineExpose({
  validate,
  validateTrialFields,
});
</script>

<style scoped lang="scss">
.trail-personal-info {
  :deep(.com-card-wrap) .header {
    margin-left: 0;
  }
  :deep(.com-van-field) {
    &:last-child::after {
      display: block;
    }
  }
}
</style>
