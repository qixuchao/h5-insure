<template>
  <!----被保人-->
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
    <template #customer>
      <slot name="customer"></slot>
    </template>
  </ProRenderFormWithCard>
  <!---- 监护人----->
  <ProRenderFormWithCard
    v-if="isShowGuardian"
    ref="guardianFormRef"
    class="personal-info-card"
    title="监护人"
    :model="state.guardian.personVO"
    :schema="state.guardianSchema"
    :config="state.config"
    :is-view="isView"
    :extra-provision="{
      objectType: ATTACHMENT_OBJECT_TYPE_ENUM.GUARDIAN,
      objectId: state.guardian?.personVO?.id,
    }"
  >
    <template #cardTitleExtra><slot></slot></template>
    <template #customer>
      <slot name="guardianCustomer"></slot>
    </template>
  </ProRenderFormWithCard>

  <template v-if="hasBeneficiarySchema">
    <ProRenderFormWithCard
      ref="beneficiaryTypeFormRef"
      class="personal-info-card"
      :title="'受益人'"
      :model="state.personVO"
      :schema="state.beneficiaryTypeSchemaList"
      :is-view="isView"
    >
    </ProRenderFormWithCard>

    <template v-if="isSpecifyBeneficiary">
      <BeneficiaryItem
        v-for="(beneficiary, index) in state.beneficiaryList"
        ref="beneficiaryFormRef"
        :key="`${beneficiary.nanoid}_${index}`"
        v-model="beneficiary.personVO"
        :title="`受益人${index + 1}`"
        :schema="state.beneficiarySchemaList"
        :config="beneficiary.config"
        :holder-person-v-o="holderPersonVO"
        :is-view="isView || beneficiary.personVO?.isHolder === YES_NO_ENUM.YES"
      >
        <template #customer>
          <slot name="benefitCustomer" :index="index"></slot>
        </template>
        <div class="operate-wrap">
          <van-switch
            v-model="beneficiary.personVO.isHolder"
            :active-value="1"
            :inactive-value="2"
            @click="() => holderToBeneficial(index)"
            >同投保人</van-switch
          >
          <span v-if="index > 0 && !isView" class="delete-button" @click="onDeleteBeneficiary(index)">
            <ProSvg name="delete"></ProSvg>
          </span>
        </div>
      </BeneficiaryItem>

      <span v-if="!isView && addible" class="add-button" @click="onAddBeneficiary"
        ><van-icon name="plus" />添加受益人</span
      >
    </template>
  </template>
  <slot name="riskList"></slot>
</template>
<script lang="ts" setup name="InsuredItem">
import { withDefaults } from 'vue';
import { Dialog, Toast } from 'vant';
import { nanoid } from 'nanoid';
import cloneDeep from 'lodash-es/cloneDeep';
import merge from 'lodash-es/merge';
import { clone, debounce } from 'lodash';
import {
  type SchemaItem,
  type PersonFormProps,
  isOnlyCert,
  validateForm,
  validateFields,
  ProRenderFormWithCard,
  colorConsole,
  getCertConfig,
  resetObjectValues,
} from '@/components/RenderForm';
import { isNotEmptyArray } from '@/common/constants/utils';
import { BENEFICIARY_ENUM } from '@/common/constants/infoCollection';
import { ATTACHMENT_OBJECT_TYPE_ENUM, YES_NO_ENUM } from '@/common/constants';
import BeneficiaryItem from './BeneficiaryItem.vue';
import { OBJECT_TYPE_ENUM } from '@/common/constants/questionnaire';

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
  guardian: Partial<PersonFormProps>;
  guardianSchema: SchemaItem[];
}

const emit = defineEmits(['update:modelValue', 'update:beneficiaryList', 'update:guardian']);
const insuredFormRef = ref(null);
const beneficiaryTypeFormRef = ref(null);
const beneficiaryFormRef = ref(null);
const guardianFormRef = ref(null);

// 初始化受益人数据
const initBeneficiaryItem = {
  schema: [],
  trialFactorCodes: [],
  config: {
    occupationCode: { isView: true },
  },
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
  guardian: () => ({}),
  guardianSchema: () => [],
  isView: false,
  isTrial: false,
  multiBeneficiaryMaxNum: null,
  holderPersonVO: () => ({}),
});

interface StateInfo extends PersonFormProps {
  validated: boolean;
  beneficiaryList: Partial<PersonFormProps>[];
  beneficiarySchemaList: SchemaItem[];
  beneficiaryTypeSchemaList: SchemaItem[];
  guardianSchema: SchemaItem[];
  guardian: Partial<PersonFormProps>;
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
  /** 监护人 */
  guardianSchema: [],
  guardian: {},
});

// 被保人同投保人关系非父母时，被保人年龄小于18岁则需要监护人信息
const isShowGuardian = computed<boolean>(() => {
  const { age, relationToHolder } = state.personVO;
  if (!['1', '4', '5'].includes(relationToHolder) && age !== null && +age < 18) {
    return true;
  }
  state.guardian = {};
  return false;
});

const mergeHolderBenefic = () => {
  const mergeData = {};
  state.beneficiarySchemaList.reduce((da, schema) => {
    if (props.holderPersonVO?.[schema.name]) {
      da[schema.name] = props.holderPersonVO?.[schema.name];
    }
    return da;
  }, mergeData);

  return mergeData;
};

const disHolderData = (personVO = {}) => {
  const mergeData = personVO;
  state.beneficiarySchemaList.reduce((da, schema) => {
    if (props.holderPersonVO?.[schema.name]) {
      da[schema.name] = null;
    }
    return da;
  }, mergeData);
  return mergeData;
};

// 投保人数据同步到受益人
const holderToBeneficial = (index: number) => {
  if (`${state.beneficiaryList?.[index]?.personVO?.isHolder}` !== `${YES_NO_ENUM.YES}`) {
    state.beneficiaryList = state.beneficiaryList.map((beneficiaryItem, ind) => {
      if (index === ind) {
        return {
          ...beneficiaryItem,
          personVO: { ...disHolderData(state.beneficiaryList?.[index]?.personVO) },
        };
      }
      return beneficiaryItem;
    });
    return;
  }
  if (props.holderPersonVO) {
    state.beneficiaryList = state.beneficiaryList.map((beneficiaryItem, ind) => {
      if (index === ind) {
        return {
          ...beneficiaryItem,
          personVO: { ...beneficiaryItem.personVO, ...mergeHolderBenefic() },
          config: {
            ...beneficiaryItem.config,
            benefitRate: {
              isView: false,
            },
            benefitOrder: {
              isView: false,
            },
            relationToInsured: {
              isView: false,
            },
            beneficiaryType: {
              isView: false,
            },
          },
        };
      }
      return beneficiaryItem;
    });
  }
};

// 验证表单必填
const validate = (isTrial) => {
  return Promise.all([
    validateForm(insuredFormRef, props.trialFactorCodes, isTrial),
    validateForm(guardianFormRef, [], isTrial),
    validateForm(beneficiaryTypeFormRef, [], isTrial),
    ...(beneficiaryFormRef.value?.map((item) => item.validate(isTrial)) || []),
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

// 给未成年人设置手机号和收入来源
const setNonageValue = (holderPerson) => {
  const updateData = {};
  if (state.personVO?.age < 18) {
    if (state.schema.find((schema) => schema.name === 'mobile')) {
      updateData.mobile = holderPerson?.mobile || '';
    }
    if (state.schema.find((schema) => schema.name === 'annuallyComeList')) {
      updateData.annuallyComeList = ['7'];
      updateData.annuallyComeDesc = '无';
    }
  }

  Object.assign(state.personVO, updateData);
};

// 监听投保人信息
watch(
  () => props.holderPersonVO,
  debounce((val) => {
    colorConsole('------投保人信息变动了-----');
    // 投保人id不同步到被保人
    const { id, ...holderPersonVO } = val || {};

    // 若为本人合并投保人数据
    if (String(state.personVO?.relationToHolder) === '1') {
      // 过滤投被保人相同要素，保留证件相关的，预防关系为本人时，仅被保人有的字段被清空,后端给了null
      const tempData = isNotEmptyArray(isSelfInsuredNeedCods.value)
        ? Object.keys(holderPersonVO).reduce((res, key: string) => {
            if (
              ![...isSelfInsuredNeedCods.value, 'occupationClass'].includes(key) ||
              ['birthday', 'age', 'gender'].includes(key)
            ) {
              res[key] = holderPersonVO[key];
            }
            return res;
          }, {})
        : holderPersonVO;

      const certImage = (holderPersonVO.certImage || []).map((image) => ({
        ...image,
        objectId: state.personVO.id,
        objectType: OBJECT_TYPE_ENUM.INSURED,
      }));

      Object.assign(state.personVO, tempData, { certImage });
    } else {
      setNonageValue(val);
    }
  }, 300),
  {
    deep: true,
    immediate: true,
  },
);

watch(
  [() => props.holderPersonVO?.familyAnnualIncome, () => state.personVO?.familyAnnualIncome],
  debounce(([holderIncome, insuredIncome], [oldHolder, oldInsured]) => {
    if (
      (holderIncome !== oldHolder && (+holderIncome).toFixed().length > 5) ||
      (insuredIncome !== oldInsured && (+insuredIncome).toFixed().length > 5)
    ) {
      Toast('请核实年收入是否准确');
    }
  }, 300),
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

/** 更新监护人投保要素 */
watch(
  () => props.guardianSchema,
  (value) => {
    state.guardianSchema = value;
  },
  {
    deep: true,
    immediate: true,
  },
);
// 指定受益人
watch(
  isSpecifyBeneficiary,
  (val, oldVal) => {
    if (String(val) !== String(oldVal)) {
      colorConsole('受益人类型关系变动了', val);
      // 如果是指定受益人
      if (val) {
        state.beneficiaryList = isNotEmptyArray(props.beneficiaryList)
          ? props.beneficiaryList.map((item) => ({
              ...item,
              nanoid: item.nanoid || nanoid(),
            }))
          : [];
        !isNotEmptyArray(state.beneficiaryList) && onAddBeneficiary();
      } else {
        state.beneficiaryList = [];
      }
    }
  },
  {
    immediate: true,
  },
);

// 监听受益人信息
watch(
  () =>
    cloneDeep(state.beneficiaryList).map((item) => ({
      personVO: item.personVO,
      nanoid: item.nanoid,
    })),
  (val, oldValue) => {
    if (JSON.stringify(val) !== JSON.stringify(oldValue)) {
      emit('update:beneficiaryList', val);
    }
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

    // 证件类型是否只有身份证
    const [isOnlyCertFlag, tempConfig] = getCertConfig(schema, personVO);

    merge(config, tempConfig);

    // 若被保人为本人是否要隐藏
    schema.forEach((schemaItem) => {
      schemaItem.relationToHolder = personVO.relationToHolder;
      schemaItem.hidden = !schemaItem.isSelfInsuredNeed && isSelf;
    });

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
          // 若只有证件类型为身份证，不清除值
          ...resetObjectValues(personVO, (key) => !(isOnlyCertFlag && key === 'certType')),
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

// 监听与主被保人关系变动
watch(
  () => state.personVO?.relationToMainInsured,
  (val, oldVal) => {
    // 若投被保人关系为空则不执行
    if (!val) {
      return;
    }
    colorConsole('次被保人与主被保人关系变动了');
    const { personVO, schema = [], config } = state || {};
    const { certType } = personVO || {};

    // 证件类型是否只有身份证
    const [isOnlyCertFlag, tempConfig] = getCertConfig(schema, { certType, relationToHolder: val });

    merge(config, tempConfig);

    // 非查看模式处理与主被保人关系变动，数据清空操作
    if (!props.isView && oldVal && String(val) !== String(oldVal)) {
      Object.assign(state.personVO, {
        // 若只有证件类型为身份证，不清除值
        ...resetObjectValues(personVO, (key) => !(isOnlyCertFlag && key === 'certType')),
        relationToMainInsured: personVO.relationToMainInsured,
      });
    }
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
  (val, oldVal) => {
    if (val) {
      if (JSON.stringify(val) !== JSON.stringify(state.schema)) {
        const isSelf = String(props.modelValue?.relationToHolder) === '1';
        state.schema = cloneDeep(val).map((item) => {
          item.relationToHolder = props.modelValue?.relationToHolder;
          item.hidden = !item.isSelfInsuredNeed && isSelf;
          return item;
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
  () => props.modelValue,
  (val, oldVal) => {
    if (JSON.stringify(val) !== JSON.stringify(oldVal)) {
      const { beneficiaryList, ...rest } = val;
      merge(state.personVO, rest);
    }
  },
  {
    deep: true,
    immediate: true,
  },
);

watch(
  () => cloneDeep(props.beneficiaryList),
  debounce((val, oldValue) => {
    if (JSON.stringify(val) !== JSON.stringify(oldValue)) {
      state.beneficiaryList = isNotEmptyArray(val)
        ? val.map((item) => ({
            ...item,
            nanoid: item.nanoid || nanoid(),
          }))
        : [];
    }
  }, 500),
  {
    deep: true,
    immediate: true,
  },
);

// 监听监护人数据更新
watch(
  () => props.guardian,
  debounce((value, oldValue) => {
    if (JSON.stringify(value) !== JSON.stringify(oldValue)) {
      state.guardian = value;
    }
  }, 300),
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
    .van-field__body {
      display: flex !important;
    }
    &:last-child::after {
      display: block;
    }
  }
  :deep(.com-card-wrap) .title-wrapper {
    width: 100%;
  }
  .delete-button {
    width: auto;
    margin-top: 4px;
    color: var(--van-primary-color);
  }
}
.add-button {
  display: block;
  padding: 0 30px 20px 0;
  font-size: 26px;
  color: var(--van-primary-color);
  line-height: 37px;
  .van-icon-plus {
    font-weight: 600;
  }
}
</style>
