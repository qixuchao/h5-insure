<template>
  <ProPageWrap class="page-create-wrapper">
    <div class="container">
      <ProRenderForm ref="formRef" class="mb20" :model="stateInfo.insuredPersonVO">
        <ProFieldV2
          v-model="stateInfo.insuredPersonVO.proposalName"
          label="计划书名称"
          name="proposalName"
          :maxlength="20"
          required
        />
      </ProRenderForm>
      <ProRenderFormWithCard ref="insuredFormRef" title="被保人信息" :model="stateInfo.insuredPersonVO">
        <ProFieldV2 v-model="stateInfo.insuredPersonVO.name" label="姓名" name="name" :maxlength="20" required />

        <ProFieldV2
          v-model="stateInfo.insuredPersonVO.age"
          class="age-field-wrap"
          name="age"
          label="年龄"
          type="digit"
          :maxlength="3"
          required
          @change="changeAge"
        >
          <template #extra>
            <ProDatePickerV2
              v-model="stateInfo.insuredPersonVO.birthday"
              class="birthday-field-wrap"
              label="出生日期"
              name="birthday"
              required
              @change="changeBirthday"
            />
          </template>
        </ProFieldV2>
        <ProRadioV2 v-model="stateInfo.insuredPersonVO.gender" label="性别" name="gender" :columns="sexList" required />
      </ProRenderFormWithCard>

      <!-- <VanForm ref="formRef" input-align="right" error-message-align="right">
        <ProCard :show-line="false">
          <VanField
            v-model="proposalInfo.proposalName"
            class="border-radius"
            name="proposalName"
            placeholder="请输入计划书名称"
            :rules="[{ validator: (...params) => validateName('计划书名称', ...params) }]"
          >
            <template #label>
              <span class="plan-name">计划书名称</span>
            </template>
          </VanField>
        </ProCard>
        <ProCard title="被保人信息">
          <VanField
            v-model="proposalInfo.proposalInsuredList[0].name"
            name="name"
            label="姓名"
            :rules="[{ validator: (...params) => validateName('姓名', ...params) }]"
            placeholder="请输入（选填）"
          ></VanField>
          <ProDatePicker
            v-model="proposalInfo.proposalInsuredList[0].birthday"
            name="birthday"
            label="出生日期"
            type="date"
            is-link
            readonly
            placeholder="请选择"
            :rules="[{ required: true, message: '请选择' }]"
          />
          <VanField
            v-model="proposalInfo.proposalInsuredList[0].gender"
            name="gender"
            label="性别"
            class="border-radius"
            :rules="[{ required: true, message: '请选择' }]"
          >
            <template #input>
              <ProRadioButton
                v-model="proposalInfo.proposalInsuredList[0].gender"
                :options="SEX_LIMIT_LIST"
              ></ProRadioButton>
            </template>
          </VanField>
        </ProCard>
      </VanForm> -->
      <ProCard
        v-for="(productItem, index) in stateInfo.proposalInsuredProductList"
        :key="`${productItem.nanoid}_${index}_${productItem.productCode}`"
        :show-line="false"
      >
        <ProductList
          :product-risk-list="productItem.proposalProductRiskList"
          :product-info="productItem"
          :product-num="stateInfo.proposalInsuredProductList?.length - 1"
          :product-data="state.productCollection[productItem.productCode]"
          :pick-product-premium="pickProductPremium"
          :error-msg="stateInfo.productErrorMap[productItem.productCode]"
          @add-rider-risk="addRiderRisk"
          @update-risk="updateRisk"
          @delete-risk="deleteRisk"
        ></ProductList>
      </ProCard>
      <div class="operate-bar">
        <ProCheckButton activated :round="34" @click="addMainRisk">添加主险</ProCheckButton>
      </div>
    </div>
    <div class="footer-bar">
      <span class="trial-result"
        >总保费<span class="result-num">￥{{ totalPremium?.toLocaleString() }}</span>
      </span>
      <div class="trial-operate">
        <VanButton :disabled="submitDisable" type="primary" @click="saveProposalData">保存并预览</VanButton>
      </div>
    </div>
    <!-- <ProductRisk
      v-if="showProductRisk"
      :is-show="showProductRisk"
      :type="state.type"
      :rider-risk="state.riderRisk?.[state.productCode] || []"
      :product-data="state.productCollection[state.productCode]"
      :form-info="state.productInfo"
      :holder="proposalInfo.proposalHolder"
      :insured="proposalInfo.proposalInsuredList[0]"
      :current-risk="state.currentRisk"
      @close="closeProductRisk"
      @finished="onFinished"
    ></ProductRisk> -->
    <VanActionSheet
      v-model:show="showActionSheet"
      :actions="SHEET_ACTIONS"
      cancel-text="取消"
      close-on-click-action
      @cancel="toggleActionSheet(false)"
      @select="selectAction"
    />
    <TrialPopup
      ref="trialPopupRef"
      :data-source="currentProductPlanDetail"
      :product-code="stateInfo.currentProductCode"
      :default-data="stateInfo.defaultData"
      @finish="onFinished"
    />
  </ProPageWrap>
</template>

<script lang="ts" setup name="CreateProposal">
import { ActionSheetAction, Dialog, Toast } from 'vant';
import { useToggle } from '@vant/use';
import dayjs from 'dayjs';
import { nanoid } from 'nanoid';
import { useRouter, useRoute } from 'vue-router';
import debounce from 'lodash-es/debounce';
import { SUCCESS_CODE } from '@/api/code';
import { getDic } from '@/api/index';
import { DictData } from '@/api/index.data';
import createProposalStore from '@/store/proposal/createProposal';
import { ProRenderFormWithCard, ProFieldV2, ProDatePickerV2, ProRadioV2 } from '@/components/RenderForm';
import { queryProposalDetail, addOrUpdateProposal, queryProductDetailList } from '@/api/modules/createProposal';
import {
  ProposalInfo,
  ProposalProductRiskItem,
  ProposalInsuredProductItem,
  ProposalHolder,
  PlanTrialData,
} from '@/api/modules/createProposal.data';
import { queryCalcDefaultInsureFactor, queryCalcDynamicInsureFactor, premiumCalc } from '@/api/modules/trial';
import TrialPopup from '../proposalList/components/TrialPopup.vue';

import { ProductData } from '@/common/constants/trial.data';
import { SEX_LIMIT_LIST } from '@/common/constants';
import ProductList from './components/ProductList/index.vue';
import ProductRisk from './components/ProductRisk/index.vue';
import { isNotEmptyArray } from '@/common/constants/utils';

interface State {
  productCode: number;
  productCollection: ProductData;
  productInfo: ProposalInsuredProductItem;
  productPremium: any;
  riderRisk: any;
  type: 'add' | 'edit' | 'addRiderRisk';
  currentRisk: any[];
  insuredFormData: {
    proposalName: string;
    [x: string]: number | string;
  };
}

const SHEET_ACTIONS = [
  {
    name: '保存修改',
  },
  {
    name: '另存为新计划书',
  },
];

const [showProductRisk, toggleProductRisk] = useToggle();
const [showActionSheet, toggleActionSheet] = useToggle();

const proposalInfo = ref<any>({
  proposalHolder: {},
  proposalInsuredList: [
    {
      name: '',
      gender: '',
      birthday: '',
      proposalInsuredProductList: [],
    },
  ],
  proposalName: '',
  totalPremium: 0,
  relationUserType: 2,
});

const router = useRouter();
const route = useRoute();
const store = createProposalStore();

const { id, type = 'add', isCreateProposal } = route.query;

const trialFieldkeys = ['age', 'gender', 'birthday'];

const hiddenFieldKeys = ['name', ...trialFieldkeys].reduce((res, key) => {
  res[key] = {
    hidden: true,
  };
  return res;
}, {});

const trialPopupRef = ref(null);

const state = ref<State>({
  productCode: 0,
  productCollection: {},
  productInfo: {} as ProposalInsuredProductItem,
  productPremium: {},
  riderRisk: {},
  type: 'add',
  currentRisk: [],
});

interface proposalInsuredProductItem {
  productCode: string;
  nanoid: string;
  proposalProductRiskList: Partial<ProposalProductRiskItem>[];
}

interface StateInfo {
  selectedProductCodeList: string[];
  currentProductCode: string;
  proposalHolder: Partial<ProposalHolder>;
  insuredPersonVO: Partial<ProposalHolder>;
  proposalInsuredProductList: proposalInsuredProductItem[];
  productCollection: {
    [x: string]: ProductData;
  };
  productErrorMap: {
    [x: string]: string;
  };
  defaultData: {
    [x: string]: any;
  };
  productCodeInQuery: string;
}

const stateInfo = reactive<StateInfo>({
  selectedProductCodeList: [],
  insuredPersonVO: {},
  currentProductCode: '',
  proposalHolder: {},
  proposalInsuredProductList: [],
  productCollection: {},
  productErrorMap: {},
  defaultData: null,
  productCodeInQuery: '',
});

const formRef = ref(null);
const insuredFormRef = ref(null);

// 原始的产品详情数据
// const selectedProduct = ref({});
// // 试算之后的产品险种列表
// const trialedProductList = ref<ProposalInsuredProductItem[]>([]);

// const dateRange = computed(() => {
//   return {
//     min: '',
//     max: '',
//   };
// });

/** 当前计划书的产品CodeList */
const currentProductCodeList = computed(() => {
  return stateInfo.proposalInsuredProductList.map((item) => item.productCode).filter((code) => Boolean(code));
});

// const formatData = ({ productCode, holder, insuredVOList } = {}) => {
//   const { personVO, productPlanVOList } = insuredVOList?.[0] || {};

//   const proposalData = {
//     proposalHolder: holder,
//     proposalInsuredList: [
//       {
//         ...personVO,
//         proposalInsuredProductList: [
//           {
//             productCode,
//             productName: state.productName,
//             proposalProductRiskList: productPlanVOList,
//           },
//         ],
//       },
//     ],
//   };
//   return proposalData;
// };

/** 性别限制 */
const sexLimit = computed(() => {
  const { productPlanInsureVOList } = stateInfo.productCollection[stateInfo.productCodeInQuery] || {};
  const [{ insureProductRiskVOList } = {}] = productPlanInsureVOList || [];
  const { riskInsureLimitVO } = insureProductRiskVOList?.find((riskItem) => riskItem.riskType === 1) || {};
  return riskInsureLimitVO?.sexLimit;
});

const sexList = computed(() => {
  if (sexLimit.value === '-1') return SEX_LIMIT_LIST;
  return SEX_LIMIT_LIST.map((item) => ({
    ...item,
    disabled: sexLimit.value !== item.value,
  }));
});

/** 当前产品详情 */
const currentProductDetail = computed(() => {
  return stateInfo.productCollection?.[stateInfo.currentProductCode] || {};
});

/** 当前计划数据 */
const currentProductPlanDetail = computed(() => {
  return currentProductDetail.value?.productPlanInsureVOList?.[0] || {};
});

const pickProductPremium = (premiumData = {}) => {
  Object.assign(state.value.productPremium, premiumData);
  proposalInfo.value.totalPremium = Object.values(state.value.productPremium).reduce((pre: any, next: any) => {
    return pre + next;
  }, 0);
};

/**  */
const submitDisable = computed(() => {
  return Boolean(Object.values(stateInfo.productErrorMap).join(''));
});

// 总保费
const totalPremium = computed(() => {
  return stateInfo.proposalInsuredProductList.reduce((total, item) => {
    const premium = item.proposalProductRiskList.reduce((res, riskItem) => {
      return res + (riskItem.premium || 0);
    }, 0);
    return total + premium;
  }, 0);
});

const queryProposalInfo = (params = {}) => {
  queryProposalDetail(params).then(({ code, data }) => {
    if (code === '10000') {
      Object.assign(proposalInfo.value, data);
    }
  });
};

// 添加或修改险种信息成功的回调
const onFinished = (productInfo: PlanTrialData) => {
  const currentIndex = stateInfo.proposalInsuredProductList.findIndex(
    (productItem) => productItem.productCode === productInfo.productCode,
  );
  // 投保人
  Object.assign(stateInfo.proposalHolder, productInfo.proposalHolder);
  // 被保人
  Object.assign(stateInfo.insuredPersonVO, productInfo.insuredPersonVO);
  const tempData = {
    ...productInfo.insuredProductInfo,
    nanoid: nanoid(),
  };

  if (currentIndex > -1) {
    const currentProductItem = stateInfo.proposalInsuredProductList[currentIndex];
    const { proposalProductRiskList } = tempData;

    // 合并两边的险种属性
    stateInfo.proposalInsuredProductList[currentIndex] = {
      ...tempData,
      proposalProductRiskList: isNotEmptyArray(proposalProductRiskList)
        ? proposalProductRiskList.map((riskItem) => {
            const currentRiskItem = currentProductItem.proposalProductRiskList.find(
              (item) => item.riskCode === riskItem.riskCode,
            );
            return {
              ...currentRiskItem,
              ...riskItem,
            };
          })
        : [],
    };
  } else {
    stateInfo.proposalInsuredProductList.push(tempData);
  }

  // toggleProductRisk(false);
  trialPopupRef.value?.close();
};

const addMainRisk = () => {
  store.setProposalInfo(proposalInfo.value);
  store.setTrialData([]);

  store.setExcludeProduct(currentProductCodeList.value);
  store.setInsuredPersonVO(stateInfo.insuredPersonVO);

  router.push({
    path: '/proposalListSelect',
    query: {
      isCreateProposal: '1',
    },
  });
};

const trailProduct = (params) => {
  premiumCalc(params).then(({ code, data }) => {
    if (code === SUCCESS_CODE && data) {
      if (data?.errorInfo) {
        Toast(`${data?.errorInfo}`);
      }

      const riskPremiumMap = {};
      if (isNotEmptyArray(data.riskPremiumDetailVOList)) {
        data.riskPremiumDetailVOList.forEach((riskDetail: any) => {
          riskPremiumMap[riskDetail.riskCode] = {
            premium: riskDetail.premium,
            amount: riskDetail.amount,
          };
        });

        onFinished(trialPopupRef.value?.formatData(params, riskPremiumMap));
      }
    }
  });
};

// const closeProductRisk = () => {
//   toggleProductRisk(false);
// };

// 生日变化要改变年龄
const changeBirthday = (val) => {
  if (val) {
    stateInfo.insuredPersonVO.age = dayjs(val).diff(new Date(), 'year');
  }
};

//  改变年龄清除出生日期
const changeAge = () => {
  stateInfo.insuredPersonVO.birthday = '';
};

/** 获取产品数据列表 */
const queryProductInfo = (searchData: any) => {
  queryProductDetailList(searchData)
    .then(({ code, data }) => {
      if (code === '10000') {
        if (isNotEmptyArray(data)) {
          Object.assign(
            stateInfo.productCollection,
            data.reduce((res, item) => {
              res[item.productCode] = item;
              return res;
            }, {}),
          );
        }
      }
    })
    .finally(() => {});
};

// 获取试算默认值
const fetchDefaultData = async (calcProductFactorList: { prodcutCode: string }[], flag = false) => {
  if (!isNotEmptyArray(calcProductFactorList)) {
    return;
  }
  // TODO 加loading
  const { code, data } = await queryCalcDefaultInsureFactor(
    {
      calcProductFactorList,
      ...stateInfo.insuredPersonVO,
    },
    {
      // 第一次弹窗提示错误信息
      isCustomError: !flag,
    },
  );
  if (code === '10000' && data) {
    if (isNotEmptyArray(data)) {
      data.forEach((dataItem) => {
        const { holder, insuredVOList, productCode } = dataItem;
        const { personVO, productPlanVOList } = (insuredVOList || [])[0] || {};
        const [{ riskVOList } = {}] = productPlanVOList || [];
        const tempData: proposalInsuredProductItem = {
          productCode,
          proposalProductRiskList: riskVOList,
        };
        trailProduct(dataItem);

        // 初次调用
        if (flag) {
          Object.assign(stateInfo.insuredPersonVO, personVO);
          Object.assign(stateInfo.proposalHolder, holder?.persionVo);

          stateInfo.proposalInsuredProductList = [tempData];
        } else {
          const currentIndex = currentProductCodeList.value.findIndex((codeItem) => codeItem === productCode);
          stateInfo.proposalInsuredProductList[currentIndex] = tempData;
        }
      });
    }
  }
  // if (result.data) transformDefaultData(result.data.find((d) => d.productCode === props.productInfo.productCode));
};

/**
 * 单个产品调用险种验证
 * @param code
 */
const handleCalcDynamicInsure = (code: string) => {
  return stateInfo.proposalInsuredProductList
    .filter((item) => item.productCode === code)
    .map(({ productCode, proposalProductRiskList }) => {
      // 原始数据
      const { productPlanInsureVOList } = stateInfo.productCollection[productCode] || {};
      const [{ insureProductRiskVOList }] = productPlanInsureVOList || [];
      return {
        productCode,
        riskEditVOList: isNotEmptyArray(proposalProductRiskList)
          ? proposalProductRiskList
              // 主险种
              .filter((item) => item.riskType === 1)
              .map(
                ({
                  riskCode,
                  riskType,
                  annuityDrawValueList,
                  paymentPeriodValueList,
                  insurancePeriodValueList,
                  ...rest
                }) => {
                  // 动态值
                  const currentRiskItem = insureProductRiskVOList.find((item) => item.riskCode === riskCode) || {};
                  return {
                    insureProductRiskVO: {
                      ...currentRiskItem,
                      productRiskInsureLimitVO: {
                        ...currentRiskItem.productRiskInsureLimitVO,
                        annuityDrawValueList,
                        paymentPeriodValueList,
                        insurancePeriodValueList,
                      },
                    },
                  };
                },
              )
          : [],
      };
    });
};

/**
 * 计划书数据转试算数据
 * @param productCode
 */
const convertProposalToTrialData = (productCode) => {
  const currentProductItem = stateInfo.proposalInsuredProductList.find((item) => item.productCode === productCode);

  return {
    holder: {
      personVO: stateInfo.proposalHolder,
    },
    insuredVOList: [
      {
        personVO: stateInfo.insuredPersonVO,
        config: hiddenFieldKeys,
        productPlanVOList: [
          {
            riskVOList: currentProductItem.proposalProductRiskList,
          },
        ],
      },
    ],
    productCode: currentProductItem.productCode,
  };
};

/**
 * 被保人数据变动再次计算默认值
 */
const calcDynamicInsureFactor = async (productCode) => {
  try {
    const { code, data, message } = await queryCalcDynamicInsureFactor(
      {
        calcProductFactorList: handleCalcDynamicInsure(productCode),
        ...stateInfo.insuredPersonVO,
      },
      {
        isCustomError: true,
      },
    );
    if (code === '10000' && isNotEmptyArray(data)) {
      stateInfo.proposalInsuredProductList.forEach(({ productCode: pCode, proposalProductRiskList }) => {
        const { productRiskDyInsureFactorVOList } = data[0] || data.find((item) => item.productCode === pCode) || {};
        proposalProductRiskList.forEach((riskItem) => {
          const currentRiskItem = productRiskDyInsureFactorVOList.find((item) => item.riskCode === riskItem.riskCode);
          Object.assign(riskItem, {
            ...riskItem,
            ...currentRiskItem,
          });
        });
      });

      // 试算
      trailProduct(convertProposalToTrialData(productCode));
      stateInfo.productErrorMap[productCode] = '';
      // 成功
    } else {
      stateInfo.productErrorMap[productCode] = message;
    }
  } catch (e) {
    console.log('Error', e);
  }
};

const deleteRisk = (riskInfo: ProposalProductRiskItem, productInfo: ProposalInsuredProductItem) => {
  const currentProduct = productInfo;
  Dialog.confirm({ message: '确认删除该险种？' }).then(() => {
    // 删除主险等同于删除整个产品信息
    if (riskInfo.riskType === 1) {
      stateInfo.proposalInsuredProductList = stateInfo.proposalInsuredProductList
        .filter((product: ProposalInsuredProductItem) => product.productCode !== currentProduct.productCode)
        .map((item) => ({ ...item, nanoid: nanoid() }));
      pickProductPremium({ [currentProduct.productCode]: 0 });
    } else {
      currentProduct.proposalProductRiskList = currentProduct.proposalProductRiskList.filter(
        (risk) => risk.riskId !== riskInfo.riskId,
      );
    }
  });
};

// 修改险种
const updateRisk = (riskInfo: ProposalProductRiskItem, productInfo: ProposalInsuredProductItem) => {
  state.value.productCode = productInfo.productCode;
  state.value.productInfo = productInfo;
  state.value.type = 'edit';
  state.value.currentRisk = [riskInfo.riskId];
  // toggleProductRisk(true);
  stateInfo.currentProductCode = productInfo.productCode;
  stateInfo.defaultData = [convertProposalToTrialData(productInfo.productCode)];
  nextTick(() => {
    trialPopupRef.value?.open();
  });
};

// 添加附加险
const addRiderRisk = (riskIds: any[], productInfo: ProposalInsuredProductItem) => {
  state.value.productCode = productInfo.productCode;
  state.value.productInfo = productInfo;
  state.value.type = 'addRiderRisk';
  state.value.currentRisk = riskIds;
  toggleProductRisk(true);
};

onBeforeMount(() => {
  // const currentProposalInfo = store.$state.trialData;
  // const preProposalInfo: any = store.$state.proposalInfo;
  // const currentProposalId = store.$state.proposalId;
  // // 初始编辑计划书
  // if ((id && !isCreateProposal) || currentProposalId) {
  //   queryProposalInfo({ id: id || currentProposalId });
  //   store.$reset();
  // } else if (!Object.keys(preProposalInfo).length && currentProposalInfo.length) {
  //   Object.assign(proposalInfo.value, currentProposalInfo[0]);
  // } else if (Object.keys(preProposalInfo).length && currentProposalInfo.length) {
  //   preProposalInfo.proposalInsuredList[0].proposalInsuredProductList.push(
  //     ...currentProposalInfo[0].proposalInsuredList[0].proposalInsuredProductList,
  //   );
  //   proposalInfo.value = preProposalInfo;
  // } else if (Object.keys(preProposalInfo).length && !currentProposalInfo.length) {
  //   proposalInfo.value = preProposalInfo;
  // }
  // store.setTrialData([]);
  // if (productCodeInQuery) {
  //   queryProductInfo([{ productCode: productCodeInQuery }]);
  //   fetchDefaultData([{ productCode: productCodeInQuery }], true);
  // }
});

const validateData = (arr) => (isNotEmptyArray(arr) ? arr.every((item) => Boolean(item)) : false);

// 创建计划书
const submitData = () => {
  Promise.all([formRef.value?.validate(), insuredFormRef.value?.validate()]).then(() => {
    const { proposalHolder } = stateInfo;
    addOrUpdateProposal({
      proposalHolder,
      proposalInsuredList: [
        {
          ...stateInfo.insuredPersonVO,
          socialFlag: stateInfo.insuredPersonVO?.hasSocialInsurance,
          proposalInsuredProductList: stateInfo.proposalInsuredProductList,
        },
      ],
      proposalName: stateInfo.insuredPersonVO.proposalName,
      totalPremium: totalPremium.value,
      relationUserType: 2,
    }).then((res) => {
      const { code, data } = res || {};
      if (code === '10000') {
        store.$reset();
        store.proposalId = data;
        router.push({
          path: '/compositionProposal',
          query: {
            id: data,
          },
        });
      }
    });
  });
};

const saveProposalData = () => {
  // if (!id && store.proposalId) {
  //   toggleActionSheet(true);
  // } else {
  submitData();
  // }
};

const selectAction = (item: ActionSheetAction, index: number) => {
  if (index) {
    proposalInfo.value.id = null;
  }
  submitData();
};

watch(
  () => trialFieldkeys.map((key) => stateInfo.insuredPersonVO[key]),
  (val, oldVal) => {
    if (validateData(val) && validateData(oldVal) && val.join(',') !== oldVal.join(',')) {
      console.log('被保人条件变动');
      currentProductCodeList.value.forEach((code) => calcDynamicInsureFactor(code));
    }
  },
  {
    deep: true,
  },
);

watch(
  () => stateInfo.selectedProductCodeList,
  debounce((val) => {
    if (isNotEmptyArray(val)) {
      console.log('选择的产品变动了', val);
      const tempList = val.map((code) => ({
        productCode: code,
        proposalProductRiskList: [],
      }));
      stateInfo.proposalInsuredProductList.push(...tempList);
      fetchDefaultData(val.map((productCode) => ({ productCode })));

      // 获取产品详情
      const codeList = Object.keys(stateInfo.productCollection);
      const tempCodeList = val?.filter((code) => !codeList.includes(code));
      if (isNotEmptyArray(tempCodeList)) {
        queryProductInfo(
          tempCodeList?.map((code) => ({
            productCode: code,
          })),
        );
      }
    }
  }),
  {
    deep: true,
  },
);

onActivated(() => {
  const {
    query: { productCode: productCodeInQuery },
  } = useRoute();
  const { selectedProduct, insuredPersonVO } = store.$state;
  stateInfo.productCodeInQuery = productCodeInQuery;
  stateInfo.proposalInsuredProductList = [];

  if (!insuredPersonVO || !Object.keys(insuredPersonVO).length) {
    stateInfo.insuredPersonVO = {};
  }

  stateInfo.productErrorMap = {};

  if (productCodeInQuery) {
    const params = [{ productCode: productCodeInQuery as string }];
    queryProductInfo(params);
    fetchDefaultData(params, true);
  }

  stateInfo.selectedProductCodeList = isNotEmptyArray(selectedProduct) ? (selectedProduct as string[]) : [];
});

onDeactivated(() => {});
</script>

<style lang="scss" scoped>
.page-create-wrapper {
  background-color: $zaui-global-bg;
  .border-radius {
    border-radius: $zaui-border-radius-card;
    .plan-name {
      font-weight: 600;
    }
  }
  :deep(.com-card-wrap) {
    border-radius: $zaui-border-radius-card;
    .body {
      padding: 0;
    }
  }
  .container {
    padding: 30px 30px 180px 30px;

    .mb20 {
      margin-bottom: 20px;
    }

    .operate-bar {
      width: 100%;
      justify-content: center;
      display: flex;
      margin-top: 20px;
      :deep(.com-check-btn) {
        height: 68px;
        width: 240px;
      }
    }
  }
  .footer-bar {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    background-color: #ffffff;
    height: 150px;
    padding: $zaui-card-border;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid $zaui-line;

    .trial-result {
      width: 440px;
      font-size: 34px;
      font-weight: 400;
      .result-num {
        margin-left: 16px;
        color: $zaui-price;
        font-weight: 600;
      }
    }
    .trial-operate {
      button {
        width: 280px;
      }
    }
  }

  .age-field-wrap {
    :deep(.com-form-item.birthday-field-wrap) {
      min-height: 78px;
      padding: 0;
      width: 240px;
      margin-left: 30px;
      .van-field__label {
        display: none;
      }

      &::after {
        left: 10px;
        top: 50%;
        width: 2px;
        height: 40px;
        border-left: 1px solid var(--van-cell-border-color);
        transform: translateY(-50%);
      }
    }
  }
}
</style>
