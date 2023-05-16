<template>
  <ProRenderFormWithCard
    ref="insuredFormRef"
    class="personal-info-card"
    :title="hideTitle ? '' : title"
    :model="state.personVO"
    :schema="state.schema"
    :config="state.config"
    :is-view="isView"
    :extra-provision="{
      objectType: ATTACHMENT_OBJECT_TYPE_ENUM.INSURED,
      objectId: state.personVO.id,
    }"
  >
    <template #cardTitleExtra><slot></slot></template>
  </ProRenderFormWithCard>
  <template v-if="hasBeneficiarySchema">
    <ProRenderFormWithCard
      ref="insuredFormRef"
      class="personal-info-card"
      :title="'受益人'"
      :model="state.personVO"
      :schema="state.beneficiaryTypeSchemaList"
      :is-view="isView"
    />
    <template v-if="isSpecifyBeneficiary">
      <BeneficiaryItem
        v-for="(beneficiary, index) in state.beneficiaryList"
        ref="beneficiaryFormRef"
        :key="`${beneficiary.nanoid}_${index}`"
        v-model="beneficiary.personVO"
        :title="`受益人${index + 1}`"
        :schema="state.beneficiarySchemaList"
        :config="beneficiary.config"
        :is-view="isView"
      >
        <span v-if="index > 0 && !isView" class="delete-button" @click="onDeleteBeneficiary(index)"
          ><van-icon name="delete-o"
        /></span>
      </BeneficiaryItem>

      <span v-if="!isView && addible" class="add-button" @click="onAddBeneficiary"
        ><van-icon name="plus" />添加受益人</span
      >
    </template>
  </template>
</template>
<script lang="ts" setup name="InsuredItem">
import { withDefaults } from 'vue';
import { Dialog } from 'vant';
import { nanoid } from 'nanoid';
import cloneDeep from 'lodash-es/cloneDeep';
import merge from 'lodash-es/merge';
import {
  type SchemaItem,
  type PersonFormProps,
  isOnlyCert,
  validateForm,
  validateFields,
  ProRenderFormWithCard,
  colorConsole,
  getCertConfig,
} from '@/components/RenderForm';
import { isNotEmptyArray } from '@/common/constants/utils';
import { BENEFICIARY_ENUM } from '@/common/constants/infoCollection';
import { ATTACHMENT_OBJECT_TYPE_ENUM } from '@/common/constants';
import BeneficiaryItem from './BeneficiaryItem.vue';

interface InsuredProps {
  modelValue: any;
  title?: string;
  holderPersonVO: object;
  schema: SchemaItem[];
  config?: object;
  isView?: boolean;
  isTrial?: boolean;
  trialFactorCodes: string[];
  multiBeneficiaryMaxNum: number;
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

const props = withDefaults(defineProps<InsuredProps>(), {
  schema: () => [],
  title: '',
  modelValue: () => ({}),
  trialFactorCodes: () => [],
  config: () => ({}),
  initInsuredItem: () => [],
  beneficiaryList: () => [],
  beneficiarySchema: () => [],
  isView: false,
  isTrial: false,
  multiBeneficiaryMaxNum: null,
});

interface StateInfo extends PersonFormProps {
  validated: boolean;
  beneficiaryList: Partial<PersonFormProps>[];
  beneficiarySchemaList: SchemaItem[];
  beneficiaryTypeSchemaList: SchemaItem[];
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
  /** 受益人类型 */
  beneficiaryTypeSchemaList: [],
  /** 排除受益人类型 */
  beneficiarySchemaList: [],
  beneficiaryList: [],
});

// 验证表单必填
const validate = (isTrial) => {
  return Promise.all([
    ...(beneficiaryFormRef.value?.map((item) => item.validate(isTrial)) || []),
    validateForm(insuredFormRef, props.trialFactorCodes, isTrial),
  ]);
};

// 添加受益人
const onAddBeneficiary = () => {
  state.beneficiaryList.push(
    cloneDeep({
      ...initBeneficiaryItem,
      nanoid: nanoid(),
      schema: props.beneficiarySchema,
    }),
  );
};

// 删除受益人
const onDeleteBeneficiary = (index) => {
  Dialog.confirm({
    message: `确定要删除该受益人吗？`,
  }).then(() => {
    state.beneficiaryList.splice(index, 1);
  });
};

/** 受益人是否可添加的 */
const addible = computed(() => {
  return !props.multiBeneficiaryMaxNum || state.beneficiaryList.length < props.multiBeneficiaryMaxNum;
});

// 是否有展示title, 有效 schema
const hideTitle = computed(
  () => !state.schema.filter((item) => !(item.hidden || state.config[item.name]?.hidden)).length,
);

// 与投保人关系为本人时，仅投保人有的投保要素
const isSelfInsuredNeedCods = computed(() =>
  state.schema.filter((item) => item.isSelfInsuredNeed).map((item) => item.name),
);

// 是否有受益人
const hasBeneficiarySchema = computed(() => isNotEmptyArray(props.beneficiarySchema));

// 是否为指定受益人
const isSpecifyBeneficiary = computed(
  () => String(state.personVO?.insuredBeneficiaryType) === BENEFICIARY_ENUM.SPECIFY,
);

/** 验证试算因子是否全部有值 */
const validateTrialFields = () => {
  /** 受益人没有试算因子 */
  return validateFields({
    personVO: state.personVO,
    trialFactorCodes: props.trialFactorCodes,
  });
};

// 监听投保人信息
watch(
  () => props.holderPersonVO,
  (val) => {
    colorConsole('投保人信息变动了');
    // 投保人id不同步到被保人
    const { id, ...holderPersonVO } = val || {};

    // 若为本人合并投保人数据
    if (String(state.personVO?.relationToHolder) === '1') {
      // 过滤投被保人相同要素，保留证件相关的，预防关系为本人时，仅被保人有的字段被清空,后端给了null
      const tempData = isNotEmptyArray(isSelfInsuredNeedCods.value)
        ? Object.keys(holderPersonVO).reduce((res, key: string) => {
            if (!isSelfInsuredNeedCods.value.includes(key) || ['birthday', 'age', 'gender'].includes(key)) {
              res[key] = holderPersonVO[key];
            }
            return res;
          }, {})
        : holderPersonVO;

      Object.assign(state.personVO, tempData);
    }
  },
  {
    deep: true,
    immediate: true,
  },
);

/** 筛选受益人类型 */
watch(
  () => props.beneficiarySchema,
  (val) => {
    state.beneficiarySchemaList = isNotEmptyArray(val)
      ? val.filter((item) => item.name !== 'insuredBeneficiaryType')
      : [];
    state.beneficiaryTypeSchemaList = isNotEmptyArray(val)
      ? val.filter((item) => item.name === 'insuredBeneficiaryType')
      : [];
  },
  {
    deep: true,
    immediate: true,
  },
);

// 指定受益人
watch(
  isSpecifyBeneficiary,
  (val) => {
    colorConsole('受益人类型关系变动了');

    // 如果是指定受益人
    if (val) {
      onAddBeneficiary();
    } else {
      state.beneficiaryList = [];
    }
  },
  {
    immediate: true,
  },
);

// 监听受益人信息
watch(
  () =>
    state.beneficiaryList.map((item) => ({
      personVO: item.personVO,
    })),
  (val) => {
    emit('update:beneficiaryList', val);
    // emit('update:modelValue', state.beneficiaryList);
  },
  {
    deep: true,
    immediate: true,
  },
);

// 监听投被保人关系
watch(
  () => state.personVO?.relationToHolder,
  (val, oldVal) => {
    // 若投被保人关系为空则不执行
    if (!val) {
      return;
    }
    colorConsole('与投保人关系变动了');
    const { personVO, schema = [], config } = state || {};
    // 投保人id不同步到被保人
    const { id, ...holderPersonVO } = props.holderPersonVO || {};

    const isSelf = String(personVO.relationToHolder) === '1';
    const isChild = String(personVO.relationToHolder) === '3';
    // 证件类型
    const certTypeSchema = schema.find((schemaItem) => schemaItem.name === 'certType');
    const isOnlyCertFlag = isOnlyCert(certTypeSchema || {});

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

    // 证件类型为身份证或者户口本
    if (certTypeSchema) {
      merge(config, getCertConfig(personVO.certType));
    }

    // 非查看模式处理与投保人关系变动，数据操作
    if (!props.isView && oldVal && String(val) !== String(oldVal)) {
      // 本人则本人数据覆盖
      let newPersonVo = {
        ...personVO,
        ...holderPersonVO,
      };

      // 非本人则清空数据
      if (!isSelf) {
        newPersonVo = {
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
      }

      // 若为本人合并投保人数据
      Object.assign(state.personVO, newPersonVo);
    }
  },
  {
    // immediate: true,
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
      Object.assign(state.schema, cloneDeep(val));
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
      const { beneficiaryList, ...rest } = val;
      merge(state.personVO, rest);
      if (isNotEmptyArray(beneficiaryList)) {
        // 受益人
        state.beneficiaryList = beneficiaryList;
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
      if (isNotEmptyArray(val)) {
        // 受益人
        // state.beneficiaryList = val.map((beneficiaryItem, i) => {
        //   const currentBeneficiaryItem = val[i] || {};
        //   return {
        //     ...currentBeneficiaryItem,
        //     personVO: {
        //       ...beneficiaryItem.personVO,
        //       ...currentBeneficiaryItem.personVO,
        //     },
        //   };
        // });
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
.personal-info-card {
  :deep(.com-van-field) {
    &:last-child::after {
      display: block;
    }
  }
}
.add-button {
  display: block;
  padding: 0 30px 20px;
  font-size: 26px;
  color: $zaui-primary-text;
  line-height: 37px;
  .van-icon-plus {
    font-weight: 600;
  }
}
.delete-button {
  color: $zaui-primary-text;
}
</style>
