<template>
  <ProRenderFormWithCard
    v-if="hasHolderSchema"
    ref="holderFormRef"
    title="投保人信息"
    class="personal-info-card"
    :model="state.holder.personVO"
    :schema="state.holder.schema"
    :config="state.holder.config"
    :is-view="isView"
    :extra-provision="{
      objectType: ATTACHMENT_OBJECT_TYPE_ENUM.HOLDER,
      objectId: state.holder.personVO.id,
    }"
  />
  <!-- 被保人 -->
  <template v-if="hasInsuredSchema">
    <InsuredItem
      v-for="(insuredItem, index) in state.insured"
      ref="insuredFormRef"
      :key="`${insuredItem.nanoid}_${index}`"
      v-model="insuredItem.personVO"
      v-model:beneficiary-list="insuredItem.beneficiaryList"
      :title="`${state.insured.length > 1 ? `被保人${index + 1}` : '被保人信息'}`"
      :holder-person-v-o="state.holder.personVO"
      :="insuredItem"
      :beneficiary-schema="state.beneficiarySchema"
      :is-view="isView"
      :multi-beneficiary-num="state.config.multiBeneficiaryMaxNum"
    >
      <span
        v-if="!isView && index + 1 > state.config.multiInsuredMinNum"
        class="delete-button"
        @click="onDeleteInsured(index)"
        ><van-icon name="delete-o"
      /></span>
    </InsuredItem>
    <van-cell v-if="!isView && addible" class="add-button-wrap">
      <template #title>
        <span class="add-button" @click="onAddInsured"><van-icon name="plus" />添加被保人</span>
      </template>
    </van-cell>
  </template>
</template>
<script lang="ts" setup name="PersonalInfo">
import { withDefaults } from 'vue';
import { Dialog, Toast } from 'vant';
import { nanoid } from 'nanoid';
import cloneDeep from 'lodash-es/cloneDeep';
import { debounce, merge } from 'lodash';
import {
  type PersonalInfoConf,
  type PersonFormProps,
  colorConsole,
  validateForm,
  validateFields,
  ProRenderFormWithCard,
  transformFactorToSchema,
  SchemaItem,
} from '@/components/RenderForm';
import { ProductFactor } from '@/api/modules/trial.data';
import { isNotEmptyArray, PERSONAL_INFO_KEY, ATTACHMENT_OBJECT_TYPE_ENUM } from '@/common/constants';
import InsuredItem from './components/InsuredItem.vue';

interface Props {
  productFactor?: ProductFactor;
  modelValue?: any;
  isTrial?: boolean;
  isView?: boolean;
  multiInsuredConfig: {
    multiInsuredNum: number;
    multiInsuredSupportFlag: number;
  };
}

const emit = defineEmits(['update:modelValue', 'trailChange', 'trailValidateFailed']);
const holderFormRef = ref(null);
const insuredFormRef = ref(null);

const props = withDefaults(defineProps<Props>(), {
  productFactor: () => ({} as ProductFactor),
  modelValue: () => ({} as any),
  isView: false,
  isTrial: false,
  multiInsuredNum: null,
});

interface InsuredFormProps extends Partial<PersonFormProps> {
  beneficiaryList: Partial<PersonFormProps>[];
  beneficiarySchema: SchemaItem[];
}

type InsuredListProps = Partial<InsuredFormProps>[];

interface StateInfo {
  config: Partial<PersonalInfoConf>;
  trialValidated: boolean;
  holder: PersonFormProps;
  beneficiarySchema: SchemaItem[];
  initInsuredIList: InsuredListProps;
  insured: InsuredListProps;
}

// const initInsuredItem: InsuredFormProps = {
//   schema: [],
//   trialFactorCodes: [],
//   config: {},
//   personVO: {},
//   beneficiaryList: [
//     {
//       config: {},
//       personVO: {},
//       trialFactorCodes: [],
//       nanoid: nanoid(),
//     },
//   ],
// };

const state = reactive<Partial<StateInfo>>({
  config: {},
  /**
   * 试算字段是否验证成功
   */
  trialValidated: false,
  /** 投保人 */
  holder: {
    personVO: {},
    schema: [],
    trialFactorCodes: [],
    config: {},
  },
  beneficiarySchema: [],
  initInsuredIList: [],
  /** 被保人 */
  insured: [],
});

/** 验证试算因子是否全部有值 */
const validateTrialFields = () => {
  const flag = insuredFormRef.value ? insuredFormRef.value?.every((item) => item.validateTrialFields()) : true;
  return flag && validateFields(state.holder);
};

// 验证表单必填
const validate = (isTrial) => {
  return Promise.all([
    ...(insuredFormRef.value?.map((item) => item.validate(isTrial)) || []),
    validateForm(holderFormRef, state.holder.trialFactorCodes, isTrial),
  ]);
};

/**
 * 过滤与人相关的表单信息
 */
const filterFormData = (data) => {
  const {
    productList,
    config,
    schema,
    trialFactorCodes,
    beneficiaryList,
    personVO,
    nanoid: tempNanoid,
    ...formData
  } = data || {};
  return formData;
};

// 添加被保人
const onAddInsured = () => {
  const { length, [length - 1]: lastInsuredItem } = state.initInsuredIList;

  state.insured.push(
    cloneDeep({
      ...lastInsuredItem,
      nanoid: nanoid(),
    }),
  );
};

// 添加被保人
const onDeleteInsured = (index) => {
  Dialog.confirm({
    message: `确定要删除该被保人吗？`,
  }).then(() => {
    state.insured.splice(index, 1);
  });
};

/** 被保人是否可添加的 */
const addible = computed(() => {
  const { multiInsuredMaxNum, multiInsuredSupportFlag } = state.config;

  // 是否支持多被保人，最大数量不存在则可添加，存在则根据最大数量判断
  return multiInsuredSupportFlag && (!multiInsuredMaxNum || state.insured.length < multiInsuredMaxNum);
});

// 是否有投保人
const hasHolderSchema = computed(() => isNotEmptyArray(state.holder.schema));

// 是否有投保人
const hasInsuredSchema = computed(() => state.insured.some((insuredItem) => isNotEmptyArray(insuredItem.schema)));

const filterData = (keys, data) => {
  if (!isNotEmptyArray(keys)) {
    return {};
  }
  return keys.reduce((res, key) => {
    res[key] = data[key];
    return res;
  }, {});
};

const diffDataChange = (keys, val, oldVal) => {
  if (!isNotEmptyArray(keys)) return false;
  console.log(keys, filterData(keys, val), filterData(keys, oldVal));
  return JSON.stringify(filterData(keys, val)) !== JSON.stringify(filterData(keys, oldVal));
};

// 试算数据是否变动
const isTrialDataChange = (val, oldVal) => {
  const flag1 = diffDataChange(state.holder.trialFactorCodes, val[0], oldVal[0]);
  const flag2 = state.insured.some((insuredItem) => {
    const { trialFactorCodes, personVO } = insuredItem;
    return diffDataChange(trialFactorCodes, personVO, oldVal[1]);
  });
  return flag1 || flag2;
};

// 验证是否试算
watch(
  [
    () => state.holder?.personVO,
    () =>
      state.insured.map((insuredItem) => {
        const { beneficiaryList: list, personVO, ...others } = insuredItem || {};
        const beneficiaryList = isNotEmptyArray(list)
          ? list.map((beneficiaryItem) => ({
              ...beneficiaryItem.personVO,
            }))
          : [];
        return {
          ...personVO,
          beneficiaryList,
          ...others,
        };
      }),
  ],
  // eslint-disable-next-line consistent-return
  debounce(([holder, insuredList], oldVal) => {
    // 试算因子的值是否变动
    const trialDataChanged = isTrialDataChange([holder, insuredList], oldVal);

    colorConsole(`投被保人信息变动了---${trialDataChanged}`);

    const result = {
      holder,
      insuredList,
    };
    // 多被保人为配偶,性别不符合给提示
    if (state.config.isSpouseInsured) {
      const [gender1, gender2] = insuredList.map((item) => item.personVO?.gender);
      if (gender1 && gender2 && gender1 === gender2) {
        return Toast('被保人性别与投保要求不符');
      }
    }

    // TODO: 主要被保人变动
    const isFirstInsuredChange =
      JSON.stringify(insuredList?.[0]?.personVO) !== filterFormData(props.modelValue?.insuredList?.[0]);

    result.isFirstInsuredChange = isFirstInsuredChange;

    emit('update:modelValue', result);
    // 验证通过调用试算
    // if (!state.config.hasTrialFactorCodes) {
    //   emit('trailChange', result);
    //   return false;
    // }
    if (!validateTrialFields()) {
      state.trialValidated = false;
      return emit('trailValidateFailed', result);
    }
    validate(true)
      .then(() => {
        state.trialValidated = true;
        emit('trailChange', result);
      })
      .catch(() => {
        state.trialValidated = false;
        emit('trailValidateFailed', result);
      });
  }, 800),
  {
    deep: true,
  },
);

// 投保因子变动
watch(
  [() => props.productFactor, () => props.isTrial],
  (val) => {
    if (val[0]) {
      const { insuredFactorCodes, holderFactorCodes } = inject(PERSONAL_INFO_KEY) || {};
      const { holder, insured, beneficiary, config } = transformFactorToSchema(val[0], {
        isTrial: val[1],
        ...props.multiInsuredConfig,
        insuredFactorCodes,
        holderFactorCodes,
      });
      Object.assign(state.holder, holder);

      state.config = config;

      if (isNotEmptyArray(insured)) {
        state.initInsuredIList = insured.map((insuredItem) => {
          return {
            ...insuredItem,
            beneficiaryList: [],
          };
        });
      }

      state.beneficiarySchema = cloneDeep(beneficiary?.schema || []);
    }
  },
  {
    deep: true,
    immediate: true,
  },
);

// 表单数据变动
watch(
  [
    () => {
      const { holder, insuredList } = props.modelValue;
      const tempInsuredList = isNotEmptyArray(insuredList)
        ? insuredList.map((item) => {
            return {
              config: item.config,
              productList: item.productList,
              personVO: filterFormData(item),
              beneficiaryList: isNotEmptyArray(item.beneficiaryList)
                ? item.beneficiaryList.map(({ config, ...rest }) => ({
                    config,
                    personVO: filterFormData(rest),
                  }))
                : [],
            };
          })
        : [];
      return [holder?.config, filterFormData(holder), tempInsuredList];
    },
    () => state.config,
  ],
  ([[holderConfig, holderFormData, insuredList]]) => {
    // 投保人
    Object.assign(state.holder.config, holderConfig);
    Object.assign(state.holder.personVO, holderFormData);

    // 处理被保人数据
    const { length: propsInsuredLen } = insuredList || [];
    const { length: stateInsuredLen } = state.insured;

    // 预览时，被保人数量多于默认数量
    const { length, 0: mainInsuredItem = {}, [length - 1]: lastInsuredItem } = state.initInsuredIList;
    const insuredLen =
      props.isView || propsInsuredLen > stateInsuredLen
        ? propsInsuredLen
        : stateInsuredLen || state.config.multiInsuredMinNum;
    state.insured = Array.from({ length: insuredLen }).reduce((res, a, index) => {
      const { personVO, config = {}, ...others } = insuredList?.[index] || {};
      const initInsuredTempData = cloneDeep(index === 0 ? mainInsuredItem : lastInsuredItem);

      if (!res[index]) {
        res[index] = {
          ...initInsuredTempData,
          personVO,
          config,
          nanoid: nanoid(),
          ...others,
        };
      } else {
        merge(res[index], {
          personVO,
          config,
          ...others,
        });
        // if (res[index]?.personVO) {
        //   Object.assign(res[index]?.personVO, personVO);
        // } else {
        //   res[index].personVO = personVO;
        // }
        // if (res[index]?.config) {
        //   Object.assign(res[index]?.config, config);
        // } else {
        //   res[index].config = config;
        // }
      }
      return res;
    }, state.insured) as InsuredListProps;
  },
  {
    deep: true,
    immediate: true,
  },
);

defineExpose({
  validate,
  validateTrialFields,
  validateHolder: (...rest) => {
    return holderFormRef.value?.validate(...rest);
  },
});
</script>

<style scoped lang="scss">
.personal-info-card {
  margin-bottom: 20px;
  :deep(.com-van-field) {
    &:last-child::after {
      display: block;
    }
  }
}
.add-button-wrap {
  margin-bottom: 20px;
  padding: 25px 30px;
  .add-button {
    font-size: 32px;
    color: $zaui-primary-text;
    line-height: 45px;
    .van-icon-plus {
      font-weight: 600;
    }
  }
}
.delete-button {
  color: $zaui-primary-text;
}
</style>
