<template>
  <ProRenderFormWithCard
    ref="formRef"
    class="personal-info-card beneficiary"
    :title="title"
    :model="state.personVO"
    :schema="state.schema"
    :config="state.config"
    :is-view="isView"
    :extra-provision="{
      objectType: ATTACHMENT_OBJECT_TYPE_ENUM.BENEFICIARY,
      objectId: state.personVO.id,
    }"
  >
    <template #cardTitleExtra><slot></slot></template>
    <template #header-item>
      <slot name="header-item"></slot>
    </template>
    <template #customer>
      <slot name="customer"></slot>
    </template>
  </ProRenderFormWithCard>
</template>
<script lang="ts" setup name="BeneficiaryItem">
import { Toast } from 'vant';
import { withDefaults } from 'vue';
import merge from 'lodash-es/merge';
import isEqual from 'lodash-es/isEqual';
import cloneDeep from 'lodash-es/cloneDeep';
import { debounce } from 'lodash-es';
import { ATTACHMENT_OBJECT_TYPE_ENUM, YES_NO_ENUM, SEX_LIMIT_ENUM } from '@/common/constants';
import {
  type SchemaItem,
  type PersonFormProps,
  colorConsole,
  validateForm,
  getCertConfig,
  validateFields,
  resetObjectValues,
  ProRenderFormWithCard,
  getNameRules,
  setCertDefaultValue,
} from '@/components/RenderForm';

interface Props {
  modelValue: any;
  schema: SchemaItem[];
  config: object;
  isView: boolean;
  isTrial: boolean;
  title: string;
  holderPersonVO: any;
  beneficiaryList: any[];
}

const emit = defineEmits(['update:modelValue', 'trailChange']);
const formRef = ref(null);

const props = withDefaults(defineProps<Props>(), {
  schema: () => [],
  modelValue: () => ({} as any),
  trialFactorCodes: () => [],
  config: () => ({} as any),
  isView: false,
  isTrial: false,
  title: '受益人',
  holderPersonVO: () => ({}),
  beneficiaryList: () => [],
});

interface StateInfo extends PersonFormProps {
  validated: boolean;
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
});

/** 验证试算因子是否全部有值 */
const validateTrialFields = () => {
  return validateFields({
    personVO: state.personVO,
    trialFactorCodes: props.trialFactorCodes,
  });
};

// 验证表单必填
const validate = (isTrial) => {
  return validateForm(formRef, props.trialFactorCodes, isTrial);
};

// 如果受益人的信息与投保人的五要素有两个以上相同的信息，提示
const isSameHolder = () => {
  // 如果已经是同投保人了，则不需要再去提示
  if (`${state.personVO.isHolder}` === `${YES_NO_ENUM.YES}`) {
    return false;
  }
  const collection =
    Object.keys(state.personVO).filter((key) => {
      if (['gender', 'birthday', 'certType', 'certNo', 'name'].includes(key) && state.personVO[key]) {
        if (`${state.personVO?.[key]}` === `${props?.holderPersonVO?.[key]}`) {
          return true;
        }
      }
      return false;
    }) || [];

  return collection.length >= 2;
};

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
      setCertDefaultValue(props.schema, props.modelValue, () => {
        state.personVO.certType = '1';
      });
      Object.assign(state.schema, cloneDeep(props.schema));
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
      Object.assign(state.personVO, val);
      setCertDefaultValue(props.schema, props.modelValue, () => {
        Object.assign(state.personVO, { certType: '1' });
      });
    }
  },
  {
    deep: true,
    immediate: true,
  },
);

watch(
  () => cloneDeep(state.personVO),
  (val, oldVal) => {
    if (val) {
      if (isSameHolder()) {
        Toast('录入的受益人同投保人基本信息，请勾选“同投保人');
      }

      if (
        ['2', '3'].includes(`${val?.relationToInsured}`) &&
        val?.relationToInsured !== oldVal?.relationToInsured &&
        oldVal?.relationToInsured
      ) {
        const repeatRelation = props.beneficiaryList.find(
          (beneficiary) => `${val?.relationToInsured}` === `${beneficiary.personVO?.relationToInsured}`,
        );
        if (repeatRelation) {
          Toast('已存在配偶关系的受益人');
        }
      }

      if (
        (`${val.benefitRate}` !== `${oldVal?.benefitRate}` && oldVal?.benefitRate) ||
        val.benefitOrder !== oldVal?.benefitOrder
      ) {
        const currentRate = props.beneficiaryList.reduce((sum, benefit) => {
          if (benefit.personVO.benefitOrder === val.benefitOrder) {
            sum += +val.benefitRate;
          }
          return sum;
        }, 0);
        if (currentRate !== 100 && oldVal?.benefitRate) {
          Toast('同一顺位受益人的受益比例之和必须为100%');
        }
      }

      emit('update:modelValue', val);
    }
  },
  {
    deep: true,
    immediate: true,
  },
);

// 给未成年人设置手机号和收入来源
const setNonageValue = (holderPerson) => {
  const updateData = {};
  if (state.personVO?.age && state.personVO?.age < 18) {
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

watch(
  () => props.holderPersonVO,
  debounce((val) => {
    setNonageValue(val);
  }, 300),
  {
    deep: true,
    immediate: true,
  },
);

// 监听与被保人关系
watch(
  () => state.personVO?.relationToInsured,
  (val, oldVal) => {
    if (val === oldVal) {
      return false;
    }
    colorConsole(`受益人与被保人关系变动了`);

    const { certType } = state.personVO || {};
    // 证件类型是否只有身份证, 与被保险人关系变动
    const [isOnlyCertFlag, tempConfig] = getCertConfig(state.schema, { certType, relationToHolder: val });
    const genderConfig = {
      gender: {
        ...tempConfig.gender,
        isView: props.isView,
      },
    };
    // 受益人与被保人关系切换
    if (!props.isView && val !== oldVal && oldVal) {
      // 投被保人为丈夫或者妻子时默认被保人的性别 2: 丈夫，3:妻子

      let currentGender = null;
      if (`${val}` === '3') {
        genderConfig.gender.isView = true;

        currentGender = SEX_LIMIT_ENUM.FEMALE;
      }

      if (`${val}` === '2') {
        genderConfig.gender.isView = true;

        currentGender = SEX_LIMIT_ENUM.MALE;
      }

      // 若为本人合并投保人数据
      Object.assign(state.personVO, {
        // 若只有证件类型为身份证，不清除值
        ...resetObjectValues(state.personVO, (key) => !(isOnlyCertFlag && key === 'certType')),
        gender: currentGender,
        relationToInsured: val,
      });
    }

    merge(state.config, tempConfig, genderConfig);

    return false;
  },
  {
    immediate: true,
  },
);

// 监听投保人国籍
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
  :deep(.com-card-wrap) .title-wrapper {
    width: 100%;
  }
}
</style>
