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
  >
    <template #customer>
      <div
        v-if="true || (!isShare && !isView && !isTrial && isApp)"
        class="choose-customer"
        @click="chooseCustomers('holder', 1, 0)"
      >
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
          v-if="true || (+insuredItem.personVO.relationToHolder !== 1 && !isShare && !isView && !isTrial && isApp)"
          class="choose-customer"
          @click="chooseCustomers('insured', index, 0)"
        >
          <ProSvg name="customer" color="#333" />
        </div>
      </template>
      <template #benefitCustomer="slotProps">
        <div
          v-if="true || (!isShare && !isView && !isTrial && isApp)"
          class="choose-customer"
          @click="chooseCustomers('benifit', index, slotProps?.index)"
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
  <!-- <CustomerList v-if="state.show" :key="state.uniqKey" :close-customer-popoup="onClickClosePopup" /> -->
  <!-- <ProPopup
    v-if="state.show"
    :round="false"
    :show="state.show"
    :closeable="false"
    @close="onClosePopup"
    @closed="onClosePopupAfterAni"
  >
    <div class="search-bar">
      <van-search
        v-model="state.keyword"
        placeholder="客户 姓名/手机号"
        class="icon-sercher"
        @search="handleSearch"
        @cancel="onCancel"
      >
        <template #left-icon>
          <img :src="SearchLeftIcon" alt="" class="search-icon-img" style="width: 22px; height: 23px" />
        </template>
      </van-search>
    </div>
    <CustomerList v-if="state.count" :data="state.list" :type="order" :disabled="false" @on-close="onClickClosePopup" />
    <div v-else class="empth">
      <p><img src="@/assets/images/baseInsurance/empth.png" class="ig" /></p>
      <p class="p1">暂时还没有客户哦～</p>
    </div>
  </ProPopup> -->
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
} from '@/components/RenderForm';
import { ProductFactor } from '@/api/modules/trial.data';
import { queryCustomerInsureList } from '@/api/modules/trial';
import { isNotEmptyArray, PERSONAL_INFO_KEY, ATTACHMENT_OBJECT_TYPE_ENUM } from '@/common/constants';
import InsuredItem from './components/InsuredItem.vue';
import CustomerList from './components/CustomerList/index.vue';
import SearchLeftIcon from '@/assets/images/baseInsurance/search.png';
import { isAppFkq } from '@/utils';
import pageJump from '@/utils/pageJump';
import { getCusomterData, convertCustomerData, transformCustomerToPerson } from './util';

interface QueryData {
  isShare: boolean;
  saleChannelId: number;
  [key: string]: any;
}

const route = useRoute();
const isApp = isAppFkq();
const { isShare, saleChannelId } = route.query as QueryData;

interface Props {
  productFactor?: ProductFactor;
  modelValue?: any;
  isTrial?: boolean;
  isView?: boolean;
  // 豁免险仅显示投保人
  isOnlyHolder?: boolean;
  multiInsuredConfig: {
    multiInsuredNum: number;
    multiInsuredSupportFlag: number;
  };
}

const emit = defineEmits(['update:modelValue', 'trailChange', 'trailValidateFailed', 'closeCustomerPopoup']);
const holderFormRef = ref(null);
const insuredFormRef = ref(null);

const props = withDefaults(defineProps<Props>(), {
  productFactor: () => ({} as ProductFactor),
  modelValue: () => ({} as any),
  isView: false,
  isTrial: false,
  multiInsuredNum: null,
  isOnlyHolder: false,
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
    config: {},
  },
  beneficiarySchema: [],
  initInsuredIList: [],
  /** 被保人 */
  insured: [],
});

// 是否显示holder
const isShowHolder = computed(() => !props.isTrial || props.isOnlyHolder);

const chooseCustomers = (type: string, index, benifitIndex) => {
  state.currentType = type;
  if (type !== 'benifit') {
    state.currentIndex = index;
  } else {
    state.currentIndex = index;
    state.currentBenifitIndex = benifitIndex;
  }
  const { selectedType, customerId, selected, ...others } = route.query; // 去掉下级页面的参数

  pageJump('customerList', { ...others, selectedType: type });
};

// 当前模块要素code集合
// eslint-disable-next-line consistent-return
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
};
// 投保人五要素
const holderName = computed(() => {
  return state?.holder?.personVO?.name;
});
const holderGender = computed(() => {
  return state?.holder?.personVO?.gender;
});
const holderBirthday = computed(() => {
  return state?.holder?.personVO?.birthday;
});
const holderCertType = computed(() => {
  return state?.holder?.personVO?.certType;
});
const holderCertNo = computed(() => {
  return state?.holder?.personVO?.certNo;
});

const setCustomerToPerson = (value) => {
  const keys = insureKeys();
  if (state.currentType === 'holder') {
    Object.assign(state?.holder?.personVO || {}, convertCustomerData(value, keys));
  }
  if (state.currentType === 'insured') {
    // 被保人中关系是否有本人
    const hasInsuredRelationSlef = state?.insured[state.currentIndex]?.schema.some((item) => {
      if (item.name === 'relationToHolder') {
        return item.attributeValueList.some((r) => r.code === '1');
      }
      return false;
    });

    const { name, gender, birthday, certType, certNo } = convertCustomerData(value, keys);
    // 五要素判断 相同 被保人关系置为本人
    if (
      holderName.value === name &&
      holderGender.value === gender &&
      holderBirthday.value === birthday &&
      holderCertType.value === certType &&
      holderCertNo.value === certNo
    ) {
      if (hasInsuredRelationSlef) {
        Object.assign(state?.insured[state.currentIndex]?.personVO || {}, { relationToHolder: '1' });
        return;
      }
      Toast('与投保人关系未配置本人');
      return;
    }
    Object.assign(state?.insured[state.currentIndex]?.personVO || {}, convertCustomerData(value, keys));
  }
  //  受益人
  if (state.currentType === 'benifit') {
    // 五要素判断和被保人相同 受益人信息不同步
    const { name, gender, birthday, certType, certNo } = convertCustomerData(value, keys);
    if (
      state?.insured[state.currentIndex]?.personVO.name === name &&
      state?.insured[state.currentIndex]?.personVO.gender === gender &&
      state?.insured[state.currentIndex]?.personVO.birthday === birthday &&
      state?.insured[state.currentIndex]?.personVO.certType === certType &&
      state?.insured[state.currentIndex]?.personVO.certNo === certNo
    ) {
      Toast('指定受益人不可为被保人本人');
    } else {
      Object.assign(
        state?.insured[state.currentIndex]?.beneficiaryList[state.currentBenifitIndex]?.personVO || {},
        convertCustomerData(value, keys),
      );
    }
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
  return JSON.stringify(filterData(keys, val)) !== JSON.stringify(filterData(keys, oldVal));
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
  }, 300),
);

// 验证是否试算
let isTrialChange = true;
watch(
  [
    () => ({ ...state.holder?.personVO }),
    () =>
      state.insured.map((insuredItem) => {
        const { beneficiaryList: list, guardian, personVO } = insuredItem || {};
        const beneficiaryList = isNotEmptyArray(list)
          ? list.map((beneficiaryItem) => ({
              ...beneficiaryItem.personVO,
            }))
          : [];
        return {
          ...personVO,
          guardian: guardian.personVO || {},
          beneficiaryList,
        };
      }),
  ],
  // eslint-disable-next-line consistent-return
  debounce((val, oldVal) => {
    if (JSON.stringify(val) === JSON.stringify(oldVal) && !isTrialChange) {
      return false;
    }

    isTrialChange = false;

    const [holder, insuredList] = val;
    // 试算因子的值是否变动
    // const trialDataChanged = isTrialDataChange([holder, insuredList], oldVal);

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
      .then(() => {
        state.trialValidated = true;
        // 只有试算因子数据变动才调用试算
        // 试算时投被保人分开不需要多次试算
        if (!props.isOnlyHolder) {
          emit('trailChange', result);
        }
      })
      .catch(() => {
        state.trialValidated = false;
        emit('trailValidateFailed', result);
      });
  }, 500),
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

// 受益人切换关系 清空数据
watch(
  () => state?.insured?.[state.currentIndex]?.beneficiaryList?.[state.currentBenifitIndex]?.personVO,
  (val, oldVal) => {
    if (
      state?.insured?.[state.currentIndex]?.beneficiaryList?.[state.currentBenifitIndex]?.personVO &&
      val?.relationToInsured !== oldVal?.relationToInsured
    ) {
      colorConsole('受益人关系变动了+++++');
      state.insured[state.currentIndex].beneficiaryList[state.currentBenifitIndex].personVO = {
        relationToInsured: val?.relationToInsured,
      };
      // });
    }
  },
  {
    deep: true,
    immediate: true,
  },
);

// // 监护人切换关系 清空数据
watch(
  () => state?.insured?.[state.currentIndex]?.guardian?.personVO?.relationToInsured,
  (val, oldVal) => {
    if (val !== oldVal) {
      colorConsole('监护人关系变动了+++++');
      state.insured[state.currentIndex].guardian.personVO = {
        relationToInsured: val?.relationToInsured,
      };
    }
  },
  {
    deep: true,
    immediate: true,
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
      return [holder?.config, filterFormData(holder), tempInsuredList];
    },
    () => state.config,
    () => state.initInsuredIList,
  ],
  debounce(([[holderConfig, holderFormData, insuredList]], [[oldHolderConfig, oldHolderData, oldInured]]) => {
    if (
      JSON.stringify(holderConfig) === JSON.stringify(oldHolderConfig) &&
      JSON.stringify(holderFormData) === JSON.stringify(oldHolderData) &&
      JSON.stringify(insuredList) === JSON.stringify(oldInured) &&
      canUpdateFormData.value
    ) {
      // 投保人
      return;
    }
    canUpdateFormData.value = true;
    Object.assign(state.holder.config, holderConfig);
    console.log('投保人数据===', cloneDeep(state.holder.personVO), cloneDeep(holderFormData));
    console.log('投保人数据===', cloneDeep(state.holder.personVO), cloneDeep(holderFormData));

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

    state.insured = Array.from({ length: insuredLen }).reduce((res, a, index) => {
      const { personVO, config = {}, guardian, beneficiaryList } = insuredList?.[index] || {};
      const initInsuredTempData = cloneDeep(index === 0 ? mainInsuredItem : lastInsuredItem);
      if (!res[index]) {
        res[index] = {
          ...initInsuredTempData,
          personVO,
          config,
          guardian,
          beneficiaryList,
          nanoid: nanoid(),
        };
      } else {
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
  }, 300),
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
onActivated(() => {
  const tempCust = getCusomterData();
  if (tempCust) {
    const person = transformCustomerToPerson(tempCust);
    setCustomerToPerson(tempCust);
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
