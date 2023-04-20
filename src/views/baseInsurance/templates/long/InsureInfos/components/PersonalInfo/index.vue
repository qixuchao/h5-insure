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
  />
  <!-- 被保人 -->
  <template v-if="hasInsuredSchema">
    <InsuredItem
      v-for="(insuredItem, index) in state.insured"
      ref="insuredFormRef"
      :key="`${insuredItem.nanoid}_${index}`"
      v-model="insuredItem.personVO"
      :title="`${state.insured.length > 1 ? `被保人${index + 1}` : '被保人信息'}`"
      :="insuredItem"
      :holder-person-v-o="state.holder.personVO"
      :is-view="isView"
      :multi-beneficiary-num="state.config.multiBeneficiaryMaxNum"
      @update:beneficiary-list="updateBeneficiaryList($event, index)"
    >
      <span v-if="index + 1 > state.config.multiInsuredMinNum" @click="onDeleteInsured(index)"
        ><van-icon name="delete-o"
      /></span>
    </InsuredItem>
    <van-cell v-if="!isView || addible" class="add-button-wrap">
      <template #title>
        <span class="add-button" @click="onAddInsured"><van-icon name="plus" />添加被保人</span>
      </template>
    </van-cell>
  </template>
</template>
<script lang="ts" setup name="PersonalInfo">
import { withDefaults } from 'vue';
import { Dialog } from 'vant';
import { nanoid } from 'nanoid';
import cloneDeep from 'lodash-es/cloneDeep';
import { debounce } from 'lodash';
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
import InsuredItem from './components/InsuredItem.vue';

interface Props {
  productFactor: ProductFactor;
  modelValue: any;
  isTrial: boolean;
  isView: boolean;
  multiInsuredNum: number;
}

const emit = defineEmits(['update:modelValue', 'trailChange']);
const holderFormRef = ref(null);
const insuredFormRef = ref(null);

const props = withDefaults(defineProps<Props>(), {
  productFactor: () => ({} as ProductFactor),
  modelValue: () => ({} as any),
  isTrial: false,
  multiInsuredNum: null,
});

interface InsuredFormProps extends Partial<PersonFormProps> {
  beneficiaryList: Partial<PersonFormProps>[];
}

interface StateInfo {
  config: Partial<PersonalInfoConf>;
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
  initInsuredItem: cloneDeep(initInsuredItem),
  /** 被保人 */
  insured: [cloneDeep(initInsuredItem)],
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
    cloneDeep({
      ...cloneDeep(state.initInsuredItem),
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
  const { multiInsuredMaxNum } = state.config;

  // 最大数量不存在则可添加，存在则根据最大数量判断
  return !multiInsuredMaxNum || state.insured.length < multiInsuredMaxNum;
});

//
const updateBeneficiaryList = (data, index) => {
  state.insured[index].beneficiaryList.forEach((item, i) => {
    Object.assign(item.personVO, data[i]?.personVO);
  });
};

// 是否有投保人
const hasHolderSchema = computed(() => isNotEmptyArray(state.holder.schema));

// 是否有投保人
const hasInsuredSchema = computed(() => state.insured.some((insuredItem) => isNotEmptyArray(insuredItem.schema)));

// 验证是否试算
watch(
  [
    () => listObject(state.holder?.personVO),
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
  debounce((val) => {
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
      const { holder, insured, beneficiary, config } = transformFactorToSchema(val[0], {
        isTrial: val[1],
        multiInsuredNum: props.multiInsuredNum,
      });
      Object.assign(state.holder, holder);

      state.config = config;

      if (isNotEmptyArray(insured)) {
        const { length } = insured;
        state.insured = insured.map((insuredItem, index) => {
          const tempInsured = state.insured[index] || cloneDeep(initInsuredItem);

          // 初始投保人信息,非关系型被保人复制主被保人，关系型复制次被保人
          if (index === length - 1) {
            state.initInsuredItem = cloneDeep({
              ...initInsuredItem,
              schema: cloneDeep(insuredItem?.schema),
              trialFactorCodes: insuredItem?.trialFactorCodes,
              beneficiarySchema: cloneDeep(beneficiary?.schema || []),
            });
          }

          return {
            ...tempInsured,
            nanoid: nanoid(),
            schema: cloneDeep(insuredItem?.schema),
            trialFactorCodes: insuredItem?.trialFactorCodes,
            beneficiarySchema: cloneDeep(beneficiary?.schema || []),
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
  [() => props.modelValue, () => state.config],
  (val) => {
    const { holder, insuredVOList } = val[0] || {};
    Object.assign(state.holder.personVO, holder?.personVO);
    const { length } = insuredVOList || [];
    const originLen = state.insured.length;
    // 预览时，被保人数量多于默认数量
    const flag = length > state.insured.length;

    if (flag) {
      state.insured = insuredVOList.map((insuredItem, index) => {
        const { personVO } = state.insured[index] || {};
        return {
          ...state.initInsuredItem,
          ...insuredItem,
          // personVo: Object.assign(personVO || {}, insuredItem.personVO),
        };
      });
    } else {
      state.insured.forEach((insuredItem, index) => {
        const currentInsured = insuredVOList?.[index] || {};
        Object.assign(insuredItem.personVO, currentInsured?.personVO);
      });
    }
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
    color: #006aff;
    line-height: 45px;
    .van-icon-plus {
      font-weight: 600;
    }
  }
}
</style>
