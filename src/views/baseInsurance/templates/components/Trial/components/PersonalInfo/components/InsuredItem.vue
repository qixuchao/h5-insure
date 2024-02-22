<template>
  <!----被保险人-->
  <ProRenderFormWithCard
    ref="insuredFormRef"
    class="personal-info-card insured"
    :title="hideTitle ? '' : title"
    :="$attrs"
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
    :="$attrs"
    class="personal-info-card guardian"
    title="监护人"
    :model="state.guardian.personVO"
    :schema="state.guardianSchema"
    :config="{ ...state.guardian.config, relationToInsured: { isDefaultSelected: true } }"
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
      :="$attrs"
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
        :beneficiary-list="state.beneficiaryList"
        :extra-provision="{
          objectType: ATTACHMENT_OBJECT_TYPE_ENUM.BENEFICIARY,
          objectId: beneficiary?.personVO?.id,
        }"
      >
        <template #customer>
          <slot
            v-if="!(isView || beneficiary.personVO?.isHolder === YES_NO_ENUM.YES)"
            name="benefitCustomer"
            :index="index"
          ></slot>
        </template>
        <template #header-item>
          <ProFieldV2 v-if="!isSameHolder && !isView" label="是否同投保人" input-align="right">
            <template #input>
              <van-switch
                v-model="beneficiary.personVO.isHolder"
                :active-value="1"
                :inactive-value="2"
                @click="() => holderToBeneficial(index)"
                >同投保人</van-switch
              >
            </template>
          </ProFieldV2>
        </template>
        <span v-if="index > 0 && !isView" class="delete-button" @click="onDeleteBeneficiary(index)">
          <ProSvg name="delete"></ProSvg>
        </span>
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
import { useRoute } from 'vue-router';
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
  getNameRules,
  setCertDefaultValue,
  getCertTypeConfig,
} from '@/components/RenderForm';
import { isNotEmptyArray } from '@/common/constants/utils';
import { BENEFICIARY_ENUM } from '@/common/constants/infoCollection';
import { ATTACHMENT_OBJECT_TYPE_ENUM, YES_NO_ENUM, SEX_LIMIT_ENUM } from '@/common/constants';
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

const route = useRoute();

const { orderNo } = route.query;

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
  guardian: {
    personVO: {},
    config: {},
  },
});

const isSameHolder = ref<boolean>(false);

// 被保险人同投保人关系非父母时，被保险人年龄小于18岁则需要监护人信息
const isShowGuardian = computed<boolean>(() => {
  const { age, relationToHolder } = state.personVO;
  if (relationToHolder && !['1', '4', '5'].includes(`${relationToHolder}`) && age !== null && +age < 18) {
    return true;
  }
  state.guardian = {
    personVO: {},
    config: {},
  };
  return false;
});

const mergeHolderBenefic = () => {
  const mergeData = {
    relationToInsured: state.personVO.relationToHolder,
  };
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
const holderToBeneficial = (index?: number) => {
  const currentItem = state.beneficiaryList?.[index];
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
        const beneficiaryPersonVO = { ...beneficiaryItem?.personVO, ...mergeHolderBenefic() };
        if (beneficiaryPersonVO?.certImage?.length) {
          beneficiaryPersonVO.certImage = beneficiaryPersonVO?.certImage.map((image) => {
            delete image.id;
            return {
              ...image,
              objectId: beneficiaryPersonVO.id,
              objectType: ATTACHMENT_OBJECT_TYPE_ENUM.BENEFICIARY,
            };
          });
        }
        return {
          ...beneficiaryItem,
          personVO: beneficiaryPersonVO,
          config: {
            ...beneficiaryItem.config,
            benefitRate: {
              isView: false,
            },
            benefitOrder: {
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
const isInit = ref(true);
// 给未成年人设置手机号和收入来源
const setNonageValue = (holderPerson, personVO) => {
  if (!isInit.value) {
    return;
  }
  const updateData = {};
  if (personVO?.age && (+personVO.age || 0) < 18) {
    if (state.schema.find((schema) => schema.name === 'mobile')) {
      updateData.mobile = holderPerson?.mobile || '';
    }
    if (state.schema.find((schema) => schema.name === 'personalAnnualIncome')) {
      state.personVO.personalAnnualIncome = '0';
    }
    if (state.schema.find((schema) => schema.name === 'annuallyComeList')) {
      updateData.annuallyComeList = ['7'];
      updateData.annuallyComeDesc = '无';
    }
  }
  isInit.value = false;
  Object.assign(state.personVO, updateData);
};

// 监听投保人信息
watch(
  () => props.holderPersonVO,
  debounce((val) => {
    colorConsole('------投保人信息变动了-----');
    // 投保人id不同步到被保险人
    const { id, ...holderPersonVO } = val || {};

    // 若为本人合并投保人数据
    if (String(state.personVO?.relationToHolder) === '1') {
      // 过滤投被保险人相同要素，保留证件相关的，预防关系为本人时，仅被保险人有的字段被清空,后端给了null
      isSameHolder.value = true;

      state.beneficiaryList = state.beneficiaryList.map((beneficiaryItem, ind) => {
        if (`${beneficiaryItem.personVO.isHolder}` === `${YES_NO_ENUM.YES}`) {
          return {
            ...beneficiaryItem,
            personVO: { ...disHolderData(state.beneficiaryList?.[ind]?.personVO), isHolder: 2 },
          };
        }
        return beneficiaryItem;
      });

      const tempData = isNotEmptyArray(isSelfInsuredNeedCods.value)
        ? Object.keys(holderPersonVO).reduce((res, key: string) => {
            if (![...isSelfInsuredNeedCods.value].includes(key) || ['birthday', 'age', 'gender'].includes(key)) {
              res[key] = holderPersonVO[key];
            }
            return res;
          }, {})
        : holderPersonVO;

      const certImage = (holderPersonVO.certImage || []).map((image) => {
        delete image.id;
        return {
          ...image,
          objectId: state.personVO.id,
          objectType: OBJECT_TYPE_ENUM.INSURED,
        };
      });

      Object.assign(state.personVO, tempData, { certImage });
    } else {
      setNonageValue(val, state.personVO);
      isSameHolder.value = false;
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
      (holderIncome !== oldHolder && oldHolder && (+holderIncome).toFixed().length > 5) ||
      (insuredIncome !== oldInsured && oldInsured && (+insuredIncome).toFixed().length > 5)
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
      personVO: item?.personVO,
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

watch(
  () => state.guardian,
  (value) => {
    emit('update:guardian', value);
  },
  {
    deep: true,
    immediate: true,
  },
);
let relationToHolderChanged = false;
// 监听投被保险人关系
watch(
  () => state.personVO?.relationToHolder,
  (val, oldVal) => {
    // 若投被保险人关系为空则不执行
    if (!val) {
      return;
    }
    colorConsole('与投保人关系变动了');
    const { personVO, schema = [], config } = state || {};
    // 投保人id不同步到被保险人
    const { id, ...holderPersonVO } = props.holderPersonVO || {};

    const isSelf = String(personVO.relationToHolder) === '1';

    isSameHolder.value = isSelf;

    // 若被保险人为本人是否要隐藏
    schema.forEach((schemaItem) => {
      schemaItem.relationToHolder = personVO.relationToHolder;
      schemaItem.hidden = !schemaItem.isSelfInsuredNeed && isSelf;
    });
    if (`${val}` === '1' && state.personVO?.id) {
      relationToHolderChanged = true;
    } else if (`${val}` !== '1' && state.personVO?.id) {
      relationToHolderChanged = relationToHolderChanged || false;
    }
    // 处理特殊逻辑
    if (!orderNo) {
      relationToHolderChanged = true;
    }
    // 非查看模式处理与投保人关系变动，数据操作
    if (!props.isView && oldVal && String(val) !== String(oldVal)) {
      // 本人则本人数据覆盖
      let newPersonVo = {
        ...personVO,
        ...holderPersonVO,
      };
      const [isOnlyCertFlag, tempConfig] = getCertConfig(schema, personVO);
      // 非本人则清空数据
      if (!isSelf) {
        if (relationToHolderChanged) {
          newPersonVo = {
            // 若只有证件类型为身份证，不清除值
            ...resetObjectValues(personVO, (key) => !(isOnlyCertFlag && key === 'certType')),
            relationToHolder: personVO.relationToHolder,
          };
        } else {
          newPersonVo = personVO;
        }
      }

      // 投被保险人为丈夫或者妻子时默认被保险人的性别 2: 丈夫，3:妻子
      const genderConfig = {
        gender: {
          ...config.gender,
          isView: props.isView,
        },
      };
      if (`${personVO.relationToHolder}` === '2') {
        genderConfig.gender.isView = true;

        newPersonVo.gender = SEX_LIMIT_ENUM.FEMALE;
      }

      if (`${personVO.relationToHolder}` === '3') {
        genderConfig.gender.isView = true;

        newPersonVo.gender = SEX_LIMIT_ENUM.MALE;
      }

      merge(config, genderConfig);

      // 若为本人合并投保人数据
      nextTick(() => {
        Object.assign(state.personVO, newPersonVo);
      });

      relationToHolderChanged = true;
    }

    // 证件类型是否只有身份证
    const [isOnlyCertFlag, tempConfig] = getCertConfig(schema, personVO);
    merge(config, tempConfig);
  },
  {
    // immediate: true,
    // deep: true,
  },
);

// 监听被保险人国籍
watch(
  () => state.personVO?.nationalityCode,
  (val, oldVal) => {
    if (val !== oldVal) {
      merge(state.config, getNameRules(state.personVO));
    }
  },
  {
    immediate: true,
  },
);

// 监听监护人国籍
watch(
  () => state.guardian.personVO?.nationalityCode,
  (val, oldVal) => {
    if (val !== oldVal) {
      merge(state.guardian.config, getNameRules(state.guardian?.personVO));
    }
  },
  {
    immediate: true,
  },
);

// 监听被保险人与监护人关系
watch(
  () => state.guardian?.personVO?.relationToInsured,
  (val, oldVal) => {
    if (val === oldVal) {
      return;
    }
    colorConsole(`监护人与被保险人关系变动了`);
    const { certType } = state.guardian.personVO || {};
    // 证件类型是否只有身份证, 与被保险人关系变动
    const [isOnlyCertFlag, tempConfig] = getCertConfig(state.guardianSchema, { certType, relationToInsured: val });
    const genderConfig = {
      gender: {
        ...tempConfig.gender,
        isView: props.isView,
      },
    };
    // 受益人与被保险人关系切换
    if (!props.isView && val !== oldVal) {
      // 投被保险人为丈夫或者妻子时默认被保险人的性别 2: 丈夫，3:妻子
      let currentGender = null;
      if (`${val}` === '2') {
        genderConfig.gender.isView = true;
        currentGender = SEX_LIMIT_ENUM.FEMALE;
      }
      if (`${val}` === '3') {
        genderConfig.gender.isView = true;
        currentGender = SEX_LIMIT_ENUM.MALE;
      }

      if (oldVal) {
        Object.assign(state.guardian.personVO, {
          // 若只有证件类型为身份证，不清除值
          ...resetObjectValues(state.guardian.personVO, (key) => !(isOnlyCertFlag && key === 'certType')),
          gender: currentGender,
          relationToInsured: val,
        });
      }
    }
    merge(state.guardian.config, tempConfig, genderConfig);
  },
  {
    immediate: true,
  },
);

// 监听与主被保险人关系变动
watch(
  () => state.personVO?.relationToMainInsured,
  (val, oldVal) => {
    // 若投被保险人关系为空则不执行
    if (!val) {
      return;
    }
    colorConsole('次被保险人与主被保险人关系变动了');
    const { personVO, schema = [], config } = state || {};
    const { certType } = personVO || {};

    // 证件类型是否只有身份证
    const [isOnlyCertFlag, tempConfig] = getCertConfig(schema, { certType, relationToHolder: val });

    merge(config, tempConfig);

    // 非查看模式处理与主被保险人关系变动，数据清空操作
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
          setCertDefaultValue(props.schema, props.modelValue, () => {
            state.personVO.certType = state.personVO.certType || '1';
          });
          Object.assign(state.config, getCertTypeConfig(state.personVO.certType, val));
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
  () => cloneDeep(props.modelValue),
  (val, oldVal) => {
    if (JSON.stringify(val) !== JSON.stringify(oldVal)) {
      const { beneficiaryList, ...rest } = val;

      if (val.age !== oldVal?.age && val.age) {
        isInit.value = true;
      }
      merge(state.personVO, rest);
      setCertDefaultValue(props.schema, props.modelValue, () => {
        state.personVO.certType = state.personVO.certType || '1';
      });
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
  () => props.guardian?.personVO,
  (value, oldValue) => {
    if (JSON.stringify(value) !== JSON.stringify(oldValue)) {
      Object.assign(state.guardian.personVO, value);
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
