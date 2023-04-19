<template>
  <ProRenderFormWithCard
    v-if="hasHolderSchema"
    ref="holderFormRef"
    title="投保人信息"
    class="trail-personal-info"
    :model="state.holder.personVO"
    :schema="state.holder.schema"
    :config="state.holder.config"
    :is-view="isView"
  />
  <!-- 被保人 -->
  <template v-if="hasInsuredSchema">
    <InsuredItem
      v-for="(insuredItem, index) in state.insured"
      ref="insuredFormRef"
      :key="`${insuredItem.nanoid}_${index}`"
      v-model="insuredItem.personVO"
      :="insuredItem"
      :holder-person-v-o="state.holder.personVO"
      :is-view="isView"
      @update:beneficiary-list="updateBeneficiaryList($event, index)"
    />
    <van-button type="primary" @click="onAddInsured">添加被保人</van-button>
  </template>
</template>
<script lang="ts" setup name="PersonalInfo">
import { withDefaults } from 'vue';
import { nanoid } from 'nanoid';
import {
  type PersonalInfoConf,
  type PersonFormProps,
  colorConsole,
  validateForm,
  validateFields,
  ProRenderFormWithCard,
  transformFactorToSchema,
} from '@/components/RenderForm';
import { ProductFactor } from '@/api/modules/trial.data';
import { isNotEmptyArray } from '@/common/constants/utils';
import { deepCopy } from '@/utils';
import InsuredItem from './components/InsuredItem.vue';

interface Props {
  productFactor: ProductFactor;
  modelValue: any;
  isTrial: boolean;
  isView: boolean;
}

const emit = defineEmits(['update:modelValue', 'trailChange']);
const holderFormRef = ref(null);
const insuredFormRef = ref(null);

const props = withDefaults(defineProps<Props>(), {
  productFactor: () => ({} as ProductFactor),
  modelValue: () => ({} as any),
  isTrial: false,
});

interface InsuredFormProps extends Partial<PersonFormProps> {
  beneficiaryList: Partial<PersonFormProps>[];
}

interface StateInfo {
  config: PersonalInfoConf;
  validated: boolean;
  holder: PersonFormProps;
  initInsuredItem: InsuredFormProps;
  insured: InsuredFormProps[];
}

const initInsuredItem: InsuredFormProps = {
  schema: [],
  trialFactorCodes: [],
  config: {},
  personVO: {},
  beneficiaryList: [
    {
      config: {},
      personVO: {},
      trialFactorCodes: [],
      nanoid: nanoid(),
    },
  ],
};

const state = reactive<StateInfo>({
  config: {},
  /**
   * 是否所有表单是否验证成功
   */
  validated: false,
  /** 投保人 */
  holder: {
    personVO: {},
    schema: [],
    trialFactorCodes: [],
    config: {},
  },
  initInsuredItem: deepCopy(initInsuredItem),
  /** 被保人 */
  insured: [deepCopy(initInsuredItem)],
});

/** 验证试算因子是否全部有值 */
const validateTrialFields = () => {
  const flag = insuredFormRef.value?.every((item) => item.validateTrialFields());
  return flag && validateFields(state.holder);
};

// 验证表单必填
const validate = (isTrial) => {
  return Promise.all([
    ...(insuredFormRef.value?.map((item) => item.validate()) || []),
    validateForm(holderFormRef, state.holder.trialFactorCodes, isTrial),
  ]);
};

const listObject = (personInfo: any) => {
  const keyWords = ['insureArea', 'residence', 'longArea', 'workAddress'];
  const newInfo = {};
  Object.keys(personInfo).forEach((key) => {
    if (keyWords.indexOf(key) >= 0 && personInfo[key] instanceof Object) {
      // 平铺
      Object.keys(personInfo[key]).forEach((ckey) => {
        newInfo[ckey] = personInfo[key][ckey];
      });
    } else {
      newInfo[key] = personInfo[key];
    }
  });
  return newInfo;
};

// 添加被保人
const onAddInsured = () => {
  state.insured.push(
    deepCopy({
      ...state.initInsuredItem,
      nanoid: nanoid(),
    }),
  );
};

// 添加被保人
const onDeleteInsured = () => {};

//
const updateBeneficiaryList = (data, index) => {
  state.insured[index].beneficiaryList.forEach((item, i) => {
    Object.assign(item.personVO, data[i].personVO);
  });
};

// 是否有投保人
const hasHolderSchema = computed(() => isNotEmptyArray(state.holder.schema));

// 是否有投保人
const hasInsuredSchema = computed(() => state.insured.some((insuredItem) => isNotEmptyArray(insuredItem.schema)));

// 验证是否试算
watch(
  [
    () => state.holder?.personVO,
    () =>
      state.insured.map((insuredItem) => {
        const { beneficiaryList: list, personVO } = insuredItem || {};
        const beneficiaryList = isNotEmptyArray(list)
          ? list.map((beneficiaryItem) => ({
              personVO: listObject(beneficiaryItem.personVO),
            }))
          : [];
        return {
          personVO: listObject(personVO),
          beneficiaryList,
        };
      }),
  ],
  (val) => {
    colorConsole('投被保人信息变动了');
    const result = {
      holder: {
        personVO: val[0],
      },
      insuredVOList: val[1],
    };
    const isFirstInsuredChange =
      JSON.stringify(result?.insuredVOList?.[0]?.personVO) !== props.modelValue?.insuredVOList?.[0]?.personVO;
    result.isFirstInsuredChange = isFirstInsuredChange;
    emit('update:modelValue', result);
    console.log('---is first change= ', result);
    // 验证通过调用试算
    if (state.config.hasTrialFactorCodes && validateTrialFields()) {
      validate(true)
        .then(() => {
          state.validated = true;
          emit('trailChange', result);
          console.log('----emit trial');
        })
        .catch(() => {
          state.validated = false;
        });
    }
  },
  {
    deep: true,
  },
);

// 投保因子变动
watch(
  [() => props.productFactor, () => props.isTrial],
  (val) => {
    if (val[0]) {
      console.log('123', val);
      const { holder, insured, beneficiary, config } = transformFactorToSchema(...val);
      Object.assign(state.holder, holder);

      state.config = config;

      if (isNotEmptyArray(insured)) {
        const { length } = insured;
        state.insured = insured.map((insuredItem, index) => {
          const tempInsured = state.insured[index] || deepCopy(initInsuredItem);

          // 初始投保人信息,非关系型被保人复制主被保人，关系型复制次被保人
          if (index === length - 1) {
            state.initInsuredItem = deepCopy({
              ...initInsuredItem,
              schema: deepCopy(insuredItem?.schema),
              trialFactorCodes: insuredItem?.trialFactorCodes,
              beneficiarySchema: deepCopy(beneficiary?.schema || []),
            });
          }

          return {
            ...tempInsured,
            nanoid: nanoid(),
            schema: deepCopy(insuredItem?.schema),
            trialFactorCodes: insuredItem?.trialFactorCodes,
            beneficiarySchema: deepCopy(beneficiary?.schema || []),
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

// 表单数据变动
watch(
  () => props.modelValue,
  (val) => {
    const { holder, insuredVOList } = val || {};
    Object.assign(state.holder.personVO, holder?.personVO);
    const { length } = insuredVOList || [];
    // TODO:预览时，被保人数量多于默认数量
    const flag = length > state.insured.length;
    const currentList = length > state.insured.length ? insuredVOList : state.insured;

    state.insured.forEach((insuredItem, index) => {
      const currentInsured = insuredVOList?.[index] || {};
      Object.assign(insuredItem.personVO, currentInsured?.personVO);
    });
  },
  {
    deep: true,
    immediate: true,
  },
);

defineExpose({
  validate,
  validateHolder: (...rest) => {
    holderFormRef.value?.validate(...rest);
  },
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
