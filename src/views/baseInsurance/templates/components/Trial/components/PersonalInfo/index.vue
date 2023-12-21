<template>
  <ProRenderFormWithCard
    v-if="hasHolderSchema && isShowHolder"
    ref="holderFormRef"
    title="投保人信息"
    class="personal-info-card"
    :model="state.holder.personVO"
    :schema="state.holder.schema"
    :config="state.holder.config"
    :is-view="isView"
    :extra-provision="{
      objectType: ATTACHMENT_OBJECT_TYPE_ENUM.HOLDER,
      objectId: state.holder?.personVO?.id,
    }"
    @ocr="updateHolderData"
  >
    <template #customer>
      <div v-if="canShowCustomerIcon" class="choose-customer" @click="chooseCustomers('holder', 1, 0)">
        <ProSvg name="customer" color="#333" />
      </div>
    </template>
  </ProRenderFormWithCard>
  <!-- 被保人 -->
  <template v-if="hasInsuredSchema && !isOnlyHolder">
    <InsuredItem
      v-for="(insuredItem, index) in state.insured"
      ref="insuredFormRef"
      :key="`${insuredItem.nanoid}_${index}`"
      v-model="insuredItem.personVO"
      v-model:beneficiary-list="insuredItem.beneficiaryList"
      v-model:guardian="insuredItem.guardian"
      :title="`${state.insured.length > 1 ? `被保人${index + 1}` : '被保人信息'}`"
      :holder-person-v-o="state.holder.personVO"
      :="insuredItem"
      :config="{ ...insuredItem.config, relationToHolder: { isDefaultSelected: true } }"
      :beneficiary-schema="state.beneficiarySchema"
      :guardian-schema="state.guardianSchema"
      :is-view="isView"
      :multi-beneficiary-num="state.config?.multiBeneficiaryMaxNum"
    >
      <template #riskList>
        <slot name="riskInfo" :insured-index="index"></slot>
      </template>
      <template #customer>
        <div
          v-if="+insuredItem.personVO.relationToHolder !== 1 && canShowCustomerIcon"
          class="choose-customer"
          @click="chooseCustomers('insured', index, 0, insuredItem.personVO.relationToHolder)"
        >
          <ProSvg name="customer" color="#333" />
        </div>
      </template>
      <template #guardianCustomer="slotProps">
        <div
          v-if="canShowCustomerIcon"
          class="choose-customer"
          @click="chooseCustomers('guardian', index, 0, insuredItem.guardian.personVO.relationToInsured)"
        >
          <ProSvg name="customer" color="#333" />
        </div>
      </template>
      <template #benefitCustomer="slotProps">
        <div
          v-if="canShowCustomerIcon"
          class="choose-customer"
          @click="
            chooseCustomers(
              'benifit',
              index,
              slotProps?.index,
              insuredItem.beneficiaryList[slotProps?.index]?.personVO.relationToInsured,
            )
          "
        >
          <ProSvg name="customer" color="#333" />
        </div>
      </template>
      <span
        v-if="!isView && index + 1 > state.config.multiInsuredMinNum"
        class="delete-button"
        @click="onDeleteInsured(index)"
      >
        <ProSvg name="delete" color="var(--van-primary-color)" />
      </span>
    </InsuredItem>
    <van-cell v-if="!isView && addible" class="add-button-wrap">
      <template #title>
        <span class="add-button" @click="onAddInsured"><van-icon name="plus" />添加被保人</span>
      </template>
    </van-cell>
  </template>
</template>
<script lang="ts" setup name="PersonalInfo">
import { withDefaults, onActivated } from 'vue';
import { Dialog, Toast } from 'vant';
import { nanoid } from 'nanoid';
import { useRoute } from 'vue-router';
import cloneDeep from 'lodash-es/cloneDeep';
import debounce from 'lodash-es/debounce';
import merge from 'lodash-es/merge';
import isEqual from 'lodash-es/isEqual';
import { useWindowScroll } from '@vueuse/core';
import { clone } from 'lodash';
import {
  type PersonalInfoConf,
  type PersonFormProps,
  colorConsole,
  validateForm,
  validateFields,
  ProRenderFormWithCard,
  transformFactorToSchema,
  SchemaItem,
  getCertConfig,
  getNameRules,
  setCertDefaultValue,
  getCertTypeConfig,
} from '@/components/RenderForm';
import { ProductFactor } from '@/api/modules/trial.data';
import { isNotEmptyArray, PERSONAL_INFO_KEY, ATTACHMENT_OBJECT_TYPE_ENUM } from '@/common/constants';
import InsuredItem from './components/InsuredItem.vue';
import { isAppFkq } from '@/utils';
import pageJump from '@/utils/pageJump';
import {
  getCusomterData,
  clearCustomData,
  transformCustomerToPerson,
  isSamePersonByFiveFactor,
  getPersonalPageData,
  setPersonalPageData,
  clearPersonalPageData,
} from './util';

interface QueryData {
  isShare: boolean;
  saleChannelId: number;
  selectedType: string;
  [key: string]: any;
}
const { x, y } = useWindowScroll(); // 拿到当前的滚动条，方便在通讯录回来时复原
const route = useRoute();
const isApp = isAppFkq();
const { isShare, saleChannelId } = route.query as QueryData;

interface Props {
  productFactor?: ProductFactor;
  modelValue?: any;
  isTrial?: boolean;
  isView?: boolean;
  /** 豁免险仅显示投保人 */
  isOnlyHolder?: boolean;
  // 是否为投保人豁免险
  isHolderExempt?: boolean;
  multiInsuredConfig: {
    multiInsuredNum: number;
    multiInsuredSupportFlag: number;
  };
}

const emit = defineEmits([
  'update:modelValue',
  'trailChange',
  'trailValidateFailed',
  'closeCustomerPopoup',
  'update-bank',
]);
const holderFormRef = ref(null);
const insuredFormRef = ref(null);

const props = withDefaults(defineProps<Props>(), {
  productFactor: () => ({} as ProductFactor),
  modelValue: () => ({} as any),
  isView: false,
  isTrial: false,
  multiInsuredNum: null,
  isOnlyHolder: false,
  isHolderExempt: false,
});

interface InsuredFormProps extends Partial<PersonFormProps> {
  beneficiaryList: Partial<PersonFormProps>[];
  beneficiarySchema: SchemaItem[];
  guardian?: Partial<PersonFormProps>;
}

type InsuredListProps = Partial<InsuredFormProps>[];

interface StateInfo {
  uniqKey: string;
  currentType: string;
  currentIndex: number;
  currentBenifitIndex: number;
  show: boolean;
  config: Partial<PersonalInfoConf>;
  trialValidated: boolean;
  holder: PersonFormProps;
  beneficiarySchema: SchemaItem[];
  initInsuredIList: InsuredListProps;
  guardianSchema: SchemaItem[];
  insured: InsuredListProps;
  keyword: any;
  list: any;
  slotProps: any;
  count: number;
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
  count: 0,
  slotProps: {},
  uniqKey: '',
  currentIndex: 0,
  currentBenifitIndex: 0,
  currentType: '',
  keyword: undefined,
  show: false,
  list: [],
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
    config: {
      occupationCode: { isView: true },
    },
  },
  beneficiarySchema: [],
  initInsuredIList: [],
  /** 被保人 */
  insured: [],
});
// 是否显示holder
const isShowHolder = computed(() => !props.isTrial || props.isHolderExempt);

const updateHolderData = (holderData) => {
  Object.assign(state.holder.personVO, holderData);
};

// 是否能显示选客户的icon（非分享、非查看、非试算、且是App时）
const canShowCustomerIcon = computed(() => {
  return !isShare && !props.isView && !props.isTrial && !isApp;
});
// 通过客户列表去选客户填充到 投被保人
const chooseCustomers = (type: string, index, benifitIndex, relation?: string) => {
  state.currentType = type;
  if (type !== 'benifit') {
    state.currentIndex = index;
  } else {
    state.currentIndex = index;
    state.currentBenifitIndex = benifitIndex;
  }
  const { selectedType, customerId, selected, ...others } = route.query; // 去掉下级页面的参数
  console.log('选择的关系relation:', relation);
  pageJump('customerList', { ...others, selectedType: type, relation });
};

// 当前模块要素code集合
const insureKeys = () => {
  if (state.currentType === 'holder') {
    return state.holder.schema.map((obj) => obj.name) || [];
  }
  if (state.currentType === 'insured') {
    return state.insured[state.currentIndex].schema.map((obj) => obj.name) || [];
  }
  if (state.currentType === 'benifit') {
    return state.beneficiarySchema.map((obj) => obj.name) || [];
  }
  if (state.currentType === 'guardian') {
    return state.guardianSchema.map((obj) => obj.name) || [];
  }
  return [];
};
// 将客户信息设置到对应的人
const setCustomerToPerson = (value) => {
  const keys = insureKeys();
  keys.push('certEndType', 'age', 'gender');
  const selectedCustomer = transformCustomerToPerson(value, keys);
  console.log(state.currentType, '的keys:', keys, '转换后的客户信息:', selectedCustomer);
  if (state.currentType === 'holder') {
    console.log('当前是投保人选信息state?.holder:', state?.holder);
    Object.assign(state?.holder?.personVO, selectedCustomer);
    emit('update-bank', value.bankCardInfo);
  } else if (state.currentType === 'insured') {
    // 被保人中关系是否有本人
    const hasInsuredRelationSlef = state?.insured[state.currentIndex]?.schema.some((item) => {
      if (item.name === 'relationToHolder') {
        return item.attributeValueList.some((r) => r.code === '1');
      }
      return false;
    });

    // 五要素判断 相同 被保人关系置为本人
    if (isSamePersonByFiveFactor(state?.holder?.personVO, selectedCustomer)) {
      if (hasInsuredRelationSlef) {
        // 是本人，就直接修改关系
        Object.assign(state?.insured[state.currentIndex]?.personVO || {}, { relationToHolder: '1' });
        return;
      }
      Toast('与投保人关系未配置本人');
      return;
    }
    // 不是的话，就设置到被保人
    Object.assign(state?.insured[state.currentIndex]?.personVO || {}, selectedCustomer);
  }
  //  受益人
  else if (state.currentType === 'benifit') {
    // 五要素判断和被保人相同 受益人信息不同步
    if (isSamePersonByFiveFactor(state?.insured[state.currentIndex]?.personVO, selectedCustomer)) {
      Toast('指定受益人不可为被保人本人');
    } else {
      Object.assign(
        state?.insured[state.currentIndex]?.beneficiaryList[state.currentBenifitIndex]?.personVO || {},
        selectedCustomer,
      );
    }
  }
  // 监护人
  else if (state.currentType === 'guardian') {
    console.log('selectedCustomer', selectedCustomer);
    Object.assign(state?.insured[state.currentIndex]?.guardian?.personVO || {}, selectedCustomer);
  }
};
/** 验证试算因子是否全部有值 */
const validateTrialFields = () => {
  const insuredFlag = !insuredFormRef.value || insuredFormRef.value?.every((item) => item.validateTrialFields());
  const holderFlag = !holderFormRef.value || validateFields(state.holder);
  return holderFlag && insuredFlag;
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
    guardian,
    personVO,
    nanoid: tempNanoid,
    ...formData
  } = cloneDeep(data) || {};
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

// 删除被保人
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

// 是否有被保人
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

const diffDataChange = (keys, val, oldVal = {}) => {
  if (!isNotEmptyArray(keys)) return false;

  return !!keys.filter((key) => {
    if (Array.isArray(val[key])) {
      return isNotEmptyArray(val[key]) && !isEqual(val[key], oldVal[key]);
    }
    return val[key] && val[key] !== oldVal[key];
  })?.length;
};

// 试算数据是否变动
const isTrialDataChange = (val, oldVal) => {
  const flag1 = diffDataChange(state.holder.trialFactorCodes, val?.[0], oldVal?.[0]);
  const flag2 = state.insured.some((insuredItem, index) => {
    const { trialFactorCodes, personVO } = insuredItem;
    return diffDataChange(trialFactorCodes, personVO, oldVal[1]?.[index]);
  });
  return flag1 || flag2;
};

// 是否可以试算
const canTrail = () => {
  return state.trialValidated;
};

// 监听投保人证件类型
watch(
  () => state.holder.personVO?.certType,
  debounce((val, oldVal) => {
    if (`${val}` === `${oldVal}`) {
      return false;
    }
    colorConsole(`投保人信息变动了====`);
    // 证件类型是否只有身份证
    const [isOnlyCertFlag, tempConfig] = getCertConfig(state.holder.schema, { certType: val });

    merge(state.holder.config, tempConfig);
    return false;
  }, 0),
);

// 监听投保人国籍
watch(
  () => state.holder.personVO?.nationalityCode,
  (val, oldVal) => {
    if (val !== oldVal) {
      merge(state.holder.config, getNameRules(state.holder.personVO));
    }
  },
  {
    immediate: true,
  },
);

// 验证是否试算
let isTrialChange = false;
watch(
  [
    () => ({ ...state.holder?.personVO }),
    () =>
      state.insured.map((insuredItem) => {
        const { beneficiaryList: list, guardian, personVO } = insuredItem || {};
        const beneficiaryList = isNotEmptyArray(list)
          ? list.map((beneficiaryItem) => ({
              ...beneficiaryItem?.personVO,
            }))
          : [];
        return {
          ...personVO,
          guardian: guardian?.personVO || {},
          beneficiaryList,
        };
      }),
  ],
  // eslint-disable-next-line consistent-return
  (val, oldVal) => {
    if (isEqual(val, oldVal)) {
      isTrialChange = true;
      return false;
    }

    isTrialChange = false;

    const [holder, insuredList] = val;

    setCertDefaultValue(state.holder.schema, holder, () => {
      holder.certType = holder.certType || '1';
    });
    // 试算因子的值是否变动
    const trialDataChanged = isTrialDataChange([holder, insuredList], oldVal);

    // colorConsole(`投被保人信息变动了---${trialDataChanged}`);
    const { insuredList: insuredListProps } = props.modelValue;

    // productList 重新赋值到modelValue
    const result = {
      holder,
      insuredList: insuredList.map((item, index) => ({
        ...(insuredListProps?.[index] || {}),
        ...item,
      })),
    };

    // 多被保人为配偶,性别不符合给提示
    if (state.config?.isSpouseInsured) {
      const [gender1, gender2] = insuredList.map((item) => item?.gender);
      if (gender1 && gender2 && String(gender1) === String(gender2)) {
        return Toast('被保人性别与投保要求不符');
      }
    }

    // TODO: 主要被保人变动 dddd
    const isFirstInsuredChange =
      JSON.stringify(insuredList?.[0]?.personVO) !== filterFormData(props.modelValue?.insuredList?.[0]);
    console.log('-------result = ', result);
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
      .then((res) => {
        console.log('trialEnd');
        // 只有试算因子数据变动才调用试算
        // 试算时投被保人分开不需要多次试算
        state.trialValidated = !props.isOnlyHolder && !!state.insured?.[0].trialFactorCodes?.length;

        if (!props.isOnlyHolder && trialDataChanged) {
          state.trialValidated = true;
          emit('trailChange', result);
        }
      })
      .catch(() => {
        state.trialValidated = false;
        emit('trailValidateFailed', result);
      });
  },
  {
    deep: true,
  },
);

// 投保因子变动
watch(
  [() => props.productFactor, () => props.isTrial],
  debounce((val, oldVal) => {
    if (isEqual(val, oldVal) || !val?.[0]) {
      return false;
    }

    colorConsole(`投被保人要素变动了`);
    const { insuredFactorCodes, holderFactorCodes } = inject(PERSONAL_INFO_KEY) || {};
    const { holder, insured, beneficiary, guardian, config } = transformFactorToSchema(val[0], {
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
          guardian: {},
          beneficiaryList: [],
        };
      });
    }

    state.beneficiarySchema = cloneDeep(beneficiary?.schema || []);
    state.guardianSchema = cloneDeep(guardian?.schema || []);

    return false;
  }, 300),
  {
    deep: true,
    immediate: true,
  },
);

// // 监护人切换关系 清空数据
watch(
  () => state?.insured?.[state.currentIndex]?.guardian?.personVO?.relationToInsured,
  (val, oldVal) => {
    if (val !== oldVal && oldVal) {
      colorConsole('监护人关系变动了+++++');
      Object.assign(state.insured[state.currentIndex], {
        guardian: {
          personVO: {
            relationToInsured: val,
          },
        },
      });
    }
  },
);

const canUpdateFormData = ref<boolean>(false);

// 表单数据变动
watch(
  [
    () => {
      const { holder, insuredList = [] } = props.modelValue;
      const tempInsuredList = isNotEmptyArray(insuredList)
        ? insuredList.map((item) => {
            return {
              config: item.config,
              personVO: filterFormData(item),
              guardian: { personVO: item.guardian || {} },
              beneficiaryList: isNotEmptyArray(item.beneficiaryList)
                ? item.beneficiaryList.map(({ config, ...rest }) => ({
                    config,
                    personVO: filterFormData(rest),
                  }))
                : [],
            };
          })
        : [];
      return [holder?.config || {}, filterFormData(holder), tempInsuredList];
    },
    () => state.config,
    () => state.initInsuredIList,
  ],
  ([[holderConfig, holderFormData, insuredList], newConfig, newInitInsured], [oldVal, oldConfig, oldInitInsured]) => {
    const [oldHolderConfig, oldHolderData, oldInured] = oldVal || [];
    if (
      isEqual(holderConfig, oldHolderConfig) &&
      isEqual(holderFormData, oldHolderData) &&
      isEqual(newInitInsured, oldInitInsured)
    ) {
      // 投保人
      return;
    }

    canUpdateFormData.value = true;
    console.log('投保人数据===', cloneDeep(state.holder.personVO), cloneDeep(holderFormData));
    console.log('投保人数据===', cloneDeep(state.holder.personVO), cloneDeep(holderFormData));
    console.log('holderFormData', holderFormData);
    setCertDefaultValue(state.holder.schema, holderFormData, () => {
      const config = getCertTypeConfig(holderFormData.certType, state.holder.schema);
      Object.assign(state.holder.config, holderConfig, config);

      holderFormData.certType = holderFormData.certType || '1';
    });

    Object.assign(state.holder.personVO, holderFormData);

    // 处理被保人数据
    const { length: propsInsuredLen } = insuredList || [];
    const { length: stateInsuredLen } = state.insured;

    // 预览时，被保人数量多于默认数量
    const { length, 0: mainInsuredItem = {}, [length - 1]: lastInsuredItem } = state.initInsuredIList;
    const { multiInsuredMaxNum = 1, multiInsuredMinNum = 1, multiInsuredSupportFlag } = state?.config || {};
    // const insuredLen = !multiInsuredSupportFlag
    //   ? 1
    //   : props.isView || propsInsuredLen > stateInsuredLen
    //   ? propsInsuredLen
    //   : stateInsuredLen || multiInsuredMinNum;
    // 查看模式，或者编辑模式并且数据大于默认被保人数，则显示数据的长度与最大被保人数两者的最小值，否则显示最小值
    const insuredLen =
      props.isView || propsInsuredLen > stateInsuredLen
        ? Math.min(propsInsuredLen, multiInsuredMaxNum)
        : stateInsuredLen || multiInsuredMinNum;

    const currentInsuredList = cloneDeep(insuredList);

    state.insured = Array.from({ length: insuredLen }).reduce((res, a, index) => {
      const { personVO, config = {}, guardian, beneficiaryList } = currentInsuredList?.[index] || {};
      const initInsuredTempData = cloneDeep(index === 0 ? mainInsuredItem : lastInsuredItem);
      if (!res[index]) {
        res[index] = {
          ...cloneDeep(initInsuredTempData),
          personVO,
          config,
          guardian,
          beneficiaryList,
          nanoid: nanoid(),
        };
      } else {
        res[index].schema = initInsuredTempData.schema;
        merge(res[index], {
          ...cloneDeep(initInsuredTempData),
          personVO,
          config,
          guardian,
          beneficiaryList,
          // nanoid: nanoid(),
        });
      }
      return res;
    }, state.insured) as InsuredListProps;
  },
  {
    deep: true,
    immediate: true,
  },
);

watch(
  () => state.list,
  (val, oldVal) => {
    if (val) {
      state.list = val;
    }
  },
);

defineExpose({
  validate,
  validateTrialFields,
  validateHolder: (...rest) => {
    return holderFormRef.value?.validate(...rest);
  },
  canTrail,
});
onDeactivated(() => {
  setPersonalPageData({
    currentIndex: state.currentIndex,
    currentBenifitIndex: state.currentBenifitIndex,
    scrollTop: y.value,
  });
});
onActivated(() => {
  const tempCust = getCusomterData();
  const tempPersonal = getPersonalPageData();
  state.currentType = (route.query.selectedType as string) || state.currentType;
  console.log('onActivated:', tempPersonal);
  if (tempPersonal) {
    state.currentIndex = tempPersonal.currentIndex;
    state.currentBenifitIndex = tempPersonal.currentBenifitIndex;
    document.documentElement.scrollTo(0, tempPersonal.scrollTop);
    document.body.scrollTop = tempPersonal.scrollTop; // 兼容微信滚动
    clearPersonalPageData();
  }
  if (tempCust) {
    setCustomerToPerson(tempCust);
    clearCustomData();
  }
});
</script>

<style scoped lang="scss">
.personal-info-card {
  margin-bottom: 0px !important;

  :deep(.com-van-field) {
    .van-field__body {
      display: flex !important;
    }
    &:last-child::after {
      display: block;
    }
  }

  .choose-customer {
    display: flex;
    align-items: center;
    font-size: 30px;
    font-weight: 400;
    color: #0d6efe;
    line-height: 42px;
    img {
      width: 23px;
      height: 21px;
      margin-right: 10px;
    }
  }

  .delete-button {
    width: auto;
    margin-top: 4px;
    color: var(--van-primary-color);
  }
}
.add-button-wrap {
  padding: 25px 30px;
  .add-button {
    font-size: 32px;
    color: var(--van-primary-color);
    line-height: 45px;
    .van-icon-plus {
      font-weight: 600;
    }
  }
}
:deep(.search-bar) {
  .van-field__control {
    font-weight: 400;
    color: #99a9c0;
  }
}
.empth {
  text-align: center;
  .p1 {
    font-size: 30px;
    color: #99a9c0;
  }
  .ig {
    width: 200px;
    height: 200px;
    margin-top: 236px;
    margin-bottom: 47px;
  }
}
</style>

<style lang="scss">
.icon-sercher {
  .van-field__body {
    width: 100%;
    .van-field__control {
      color: #393d46 !important;
    }
  }
}
</style>
