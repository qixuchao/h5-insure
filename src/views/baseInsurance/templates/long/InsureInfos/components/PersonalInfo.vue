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
  <ProRenderFormWithCard
    v-for="(insured, index) in state.insured.insuredVOList"
    ref="insuredFormRef"
    :key="index"
    class="trail-personal-info"
    :title="isOnlyForm ? '' : '被保人信息'"
    :model="insured.personVO"
    :schema="state.insured.schema"
    :config="state.insured.config"
  />
</template>
<script lang="ts" setup>
import { withDefaults } from 'vue';
import { useRoute } from 'vue-router';
import { isNil } from 'lodash';
import { ProRenderFormWithCard, combineOccupation, transformFactorToSchema } from '@/components/RenderForm';
import { ProductFactor } from '@/api/modules/trial.data';
import { isNotEmptyArray } from '@/common/constants/utils';

const { query: { insurerCode } = {} } = useRoute();

interface Props {
  productFactor: ProductFactor;
  modelValue: any;
}

const emit = defineEmits(['update:modelValue', 'trailChange']);
const holderInfoRef = ref(null);
const insuredFormRef = ref(null);

const props = withDefaults(defineProps<Props>(), {
  productFactor: () => ({} as ProductFactor),
  modelValue: () => ({} as any),
});

const state = reactive({
  validated: false,
  holder: {
    personVO: {},
    schema: [],
    trialFactorCodes: [],
    config: {
      // 职业
      occupation: {
        dictCode: combineOccupation(insurerCode as string),
      },
    },
  },
  insured: {
    schema: [],
    trialFactorCodes: [],
    config: {
      // 职业
      occupation: {
        dictCode: combineOccupation(insurerCode as string),
      },
    },
    insuredVOList: [
      {
        personVO: {},
      },
    ],
  },
});

/** 验证试算因子是否全部有值 */
const validateFields = () => {
  const flag1 = isNotEmptyArray(state.holder.trialFactorCodes)
    ? state.holder.trialFactorCodes.some((code) => {
        const val = state.holder.personVO[code];
        return isNil(val) || val === '';
      })
    : false;
  const flag2 = isNotEmptyArray(state.insured.trialFactorCodes)
    ? state.insured.trialFactorCodes.some((code) => {
        return state.insured.insuredVOList.some((item) => {
          const val = item.personVO[code];
          return isNil(val) || val === '';
        });
      })
    : false;
  return flag1 || flag2;
};

// 只有投保人/被保人 不显示标题
const isOnlyForm = computed(() => {
  const holderFlag = isNotEmptyArray(state.holder.schema);
  const insuredFlag = isNotEmptyArray(state.insured.schema);
  return holderFlag !== insuredFlag;
});

// 验证表单
const validate = () => {
  const insuredRefs = insuredFormRef.value?.map((refItem) => refItem?.validate());
  return Promise.all([holderInfoRef.value?.validate(), ...insuredRefs]);
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

watch(
  () => props.productFactor,
  () => {
    const [holder, insured] = transformFactorToSchema(props.productFactor, true);
    Object.assign(state.holder, holder);
    Object.assign(state.insured, insured);
  },
  {
    deep: true,
    immediate: true,
  },
);

watch(
  [() => state.holder.personVO, () => state.insured.insuredVOList],
  () => {
    const result = {
      holder: listObject(state.holder.personVO),
      insuredVOList: state.insured.insuredVOList.map((insured) => {
        return { ...insured, personVO: listObject(insured.personVO) };
      }),
    };

    emit('update:modelValue', result);
    // 验证通过调用试算
    if (!validateFields()) {
      validate()
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
    const { schema } = state.holder;
    state.insured.insuredVOList.forEach((insuredItem, index) => {
      const { personVO } = insuredItem || {};
      // 若为本人合并投保人数据
      if (personVO.relationToHolder === '1') {
        Object.assign(state.insured.insuredVOList[index].personVO, state.holder.personVO);
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
  () => state.insured.insuredVOList.map((item, index) => item.personVO.relationToHolder),
  (val, val1) => {
    console.log('%c🔥 与投保人关系变动了', 'color:#1989fa;background:#5e4;padding:3px 5px;');
    state.insured.insuredVOList.forEach((insuredItem, index) => {
      const { personVO } = insuredItem || {};
      const { schema, config } = state.insured;

      const { label } = schema.find((item) => item.name === 'certNo') || {};

      const isSelf = personVO.relationToHolder === '1';
      const isChild = personVO.relationToHolder === '3';

      state.insured.config = {
        ...config,
        certNo: {
          ...config.certNo,
          label: `${label}${isChild ? '(户口簿)' : ''}`,
        },
      };

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
              res[key] = '';
              return res;
            }, {}),
            relationToHolder: personVO.relationToHolder,
          };

      // 若为本人合并投保人数据
      Object.assign(state.insured.insuredVOList[index].personVO, newPersonVo);
    });
  },
  {
    immediate: true,
    deep: true,
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
