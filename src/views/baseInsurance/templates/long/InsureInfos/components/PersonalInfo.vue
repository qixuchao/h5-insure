<template>
  <ProRenderFormWithCard
    ref="holderInfoRef"
    :title="isOnlyForm ? '' : '投保人信息'"
    class="trail-personal-info"
    :model="state.holder.personVO"
    :schema="state.holder.schema"
    :config="state.holder.config"
  />
  <!-- 被保人 -->
  <template v-for="(insuredItem, index) in state.insured" :key="index">
    <ProRenderFormWithCard
      ref="insuredFormRef"
      class="trail-personal-info"
      :title="isOnlyForm ? '' : '被保人信息'"
      :model="insuredItem.personVO"
      :schema="insuredItem.schema"
      :config="insuredItem.config"
    />
    <ProRenderFormWithCard
      v-for="(beneficiary, i) in insuredItem.beneficiaryList"
      :key="i"
      ref="beneficiaryFormRef"
      class="trail-personal-info"
      :title="isOnlyForm ? '' : '受益人'"
      :model="beneficiary.personVO"
      :schema="beneficiary.schema"
      :config="beneficiary.config"
    />
  </template>
</template>
<script lang="ts" setup>
import { withDefaults } from 'vue';
import { isNil } from 'lodash';
import { type SchemaItem, isOnlyCert, ProRenderFormWithCard, transformFactorToSchema } from '@/components/RenderForm';
import { ProductFactor } from '@/api/modules/trial.data';
import { isNotEmptyArray } from '@/common/constants/utils';
import { BENEFICIARY_ENUM } from '@/common/constants/infoCollection';

interface Props {
  productFactor: ProductFactor;
  modelValue: any;
  isTrial: boolean;
}

const emit = defineEmits(['update:modelValue', 'trailChange']);
const holderInfoRef = ref(null);
const insuredFormRef = ref(null);

const props = withDefaults(defineProps<Props>(), {
  productFactor: () => ({} as ProductFactor),
  modelValue: () => ({} as any),
  isTrial: false,
});

interface PersonFormProps {
  personVO: {
    relationToHolder?: string;
    [x: string]: any;
  };
  schema: SchemaItem[];
  trialFactorCodes: string[];
  config: {
    [x: string]: any;
  };
}

interface InsuredFormProps extends PersonFormProps {
  beneficiaryList: Partial<PersonFormProps>[];
}

interface StateInfo {
  validated: boolean;
  holder: PersonFormProps;
  insured: InsuredFormProps[];
}

const state = reactive<StateInfo>({
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
  /** 被保人 */
  insured: [
    {
      schema: [],
      trialFactorCodes: [],
      config: {},
      personVO: {},
      beneficiaryList: [
        {
          schema: [],
          config: {},
          personVO: {},
        },
      ],
    },
  ],
});

/** 验证试算因子是否全部有值 */
const validateFields = () => {
  // 是否有试算因子
  const hasHolderTrialFactor = isNotEmptyArray(state.holder.trialFactorCodes);
  let hasInsuredTrialFactor = false;

  const flag1 = hasHolderTrialFactor
    ? state.holder.trialFactorCodes.some((code) => {
        const val = state.holder.personVO[code];
        return isNil(val) || val === '';
      })
    : false;
  // 被保人试算因子校验
  const flag2 = state.insured.some(({ trialFactorCodes, personVO }) => {
    const hasTrialFactor = isNotEmptyArray(trialFactorCodes);
    if (!hasTrialFactor) {
      return false;
    }
    hasInsuredTrialFactor = true;
    return trialFactorCodes.some((code) => {
      const val = personVO[code];
      return isNil(val) || val === '' || (Array.isArray(val) && !val.length);
    });
  });

  // 没有试算因子则不进行试算，或者试算因子是否全有值
  return !(hasHolderTrialFactor || hasInsuredTrialFactor) || flag1 || flag2;
};

// 只有投保人/被保人 不显示标题
const isOnlyForm = computed(() => {
  const holderFlag = isNotEmptyArray(state.holder.schema);
  const insuredFlag = state.insured.some((insureItem) => isNotEmptyArray(insureItem.schema));
  return holderFlag !== insuredFlag;
});

const trialResult = (refValue, codes, isTrial) => {
  if (isTrial) {
    if (isNotEmptyArray(codes)) {
      return refValue?.validate(codes);
    }
    return Promise.resolve();
  }
  return refValue?.validate();
};

// 验证表单
const validate = (isTrial) => {
  const insuredRefs = insuredFormRef.value?.map((refItem, index) => {
    const { trialFactorCodes } = state.insured[index];
    return trialResult(refItem.value, trialFactorCodes, isTrial);
  });
  console.log(333333, trialResult(holderInfoRef.value, state.holder.trialFactorCodes, isTrial));
  return Promise.all([trialResult(holderInfoRef.value, state.holder.trialFactorCodes, isTrial), ...insuredRefs]);
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

const colorConsole = (str) => console.log(`%c🔥 ${str}`, 'color:#1989fa;background:#5e4;padding:3px 5px;');

watch(
  [() => props.productFactor, () => props.isTrial],
  (val) => {
    if (isNotEmptyArray(val)) {
      const [holder, insured, beneficiary] = transformFactorToSchema(props.productFactor, props.isTrial);
      Object.assign(state.holder, holder);
      state.insured.forEach((insuredItem) => {
        Object.assign(insuredItem, {
          schema: insured?.schema,
          trialFactorCodes: insured?.trialFactorCodes,
          beneficiaryList: insuredItem.beneficiaryList.map((beneficiaryItem) => ({
            ...beneficiaryItem,
            schema: beneficiary?.schema,
          })),
        });
      });
      // Object.assign(state.insured, insured);
    }
  },
  {
    deep: true,
    immediate: true,
  },
);

// 验证是否试算
watch(
  [() => state.holder?.personVO, () => state.insured.map((insuredItem) => insuredItem?.personVO)],
  () => {
    colorConsole('投被保人信息变动了');
    const result = {
      holder: listObject(state.holder.personVO),
      insuredVOList: state.insured.map((insured) => {
        return { personVO: listObject(insured.personVO) };
      }),
    };
    emit('update:modelValue', result);
    // 验证通过调用试算
    if (insuredFormRef.value && !validateFields()) {
      validate(true)
        .then(() => {
          state.validated = true;
          emit('trailChange', result);
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

// 监听投保人信息
watch(
  () => state.holder.personVO,
  (...rest) => {
    colorConsole('投保人信息变动了');
    state.insured.forEach((insuredItem, index) => {
      const { personVO } = insuredItem || {};
      // 若为本人合并投保人数据
      if (personVO.relationToHolder === '1') {
        Object.assign(state.insured[index].personVO, state.holder.personVO);
      }
    });
  },
  {
    deep: true,
    immediate: true,
  },
);

// 监听投被保人关系
watch(
  () => state.insured.map((insuredItem, index) => insuredItem.personVO.relationToHolder),
  (val, val1) => {
    colorConsole('与投保人关系变动了');
    state.insured.forEach((insuredItem, index) => {
      const { personVO, schema = [], config } = insuredItem || {};

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

      schema.forEach((schemaItem) => {
        schemaItem.relationToHolder = personVO.relationToHolder;
        schemaItem.hidden = !schemaItem.isSelfInsuredNeed && isSelf;
      });

      // // 新数据
      const newPersonVo = isSelf
        ? {
            ...personVO,
            ...state.holder.personVO,
          }
        : {
            ...Object.keys(personVO).reduce((res, key) => {
              // 若只有证件类型为身份证
              if (!(isOnlyCertFlag && key === 'certType')) {
                res[key] =
                  {
                    Object: {},
                    Array: [],
                  }[Object.prototype.toString.call(insuredItem.personVO[key]).slice(8, -1)] || '';
              }
              res[key] = '';
              return res;
            }, {}),
            relationToHolder: personVO.relationToHolder,
          };

      // 若为本人合并投保人数据
      Object.assign(state.insured[index].personVO, newPersonVo);
    });
  },
  {
    immediate: true,
    deep: true,
  },
);

// 受益人试算
watch(
  () =>
    state.insured.map((insuredItem, index) =>
      insuredItem.beneficiaryList?.map((beneficiaryItem) => beneficiaryItem?.personVO?.insuredBeneficiaryType),
    ),
  (val, val1) => {
    colorConsole('受益人类型关系变动了');
    state.insured.forEach((insuredItem, index) => {
      insuredItem.beneficiaryList?.forEach((beneficiaryItem) => {
        // 是否为法定
        const isLegal = beneficiaryItem?.personVO?.insuredBeneficiaryType === BENEFICIARY_ENUM.LEGAL;
        beneficiaryItem.schema?.forEach((schemaItem) => {
          schemaItem.hidden = isLegal ? schemaItem.name !== 'insuredBeneficiaryType' : false;
        });
        // 如果是法定只保留受益人类型
        if (isLegal) {
          beneficiaryItem.personVO = {
            insuredBeneficiaryType: BENEFICIARY_ENUM.LEGAL,
          };
        }
      });
    });
  },
  {
    immediate: true,
    deep: true,
  },
);

watch(
  () => props.modelValue,
  (val) => {
    const { holder, insuredVOList } = val || {};
    if (holder) {
      Object.assign(state.holder.personVO, holder?.personVO);
    }
    if (insuredVOList) {
      state.insured.forEach((insuredItem, index) => {
        insuredItem.personVO = Object.assign(insuredItem.personVO, insuredVOList?.[index]?.personVO);
      });
    }
    console.log(state.insured);
  },
  {
    deep: true,
    immediate: true,
  },
);

defineExpose({
  validate,
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
