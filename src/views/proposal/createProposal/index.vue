<template>
  <ProPageWrap class="page-create-wrapper">
    <div class="container">
      <ProRenderForm ref="formRef" class="mb20" :model="stateInfo.insuredPersonVO">
        <ProFieldV2
          v-model="stateInfo.insuredPersonVO.proposalName"
          label="计划书名称"
          name="proposalName"
          :maxlength="20"
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
              @update:model-value="changeBirthday"
            />
          </template>
        </ProFieldV2>
        <ProRadioV2 v-model="stateInfo.insuredPersonVO.gender" label="性别" name="gender" :columns="sexList" required />
      </ProRenderFormWithCard>

      <ProCard
        v-for="(productItem, index) in stateInfo.productList"
        :key="`${productItem.nanoid}_${index}_${productItem.productCode}`"
        class="product-item-card"
        :show-line="false"
        :show-divider="false"
      >
        <ProductList
          :product-risk-list="productItem.riskList"
          :product-info="productItem"
          :product-num="stateInfo.productList?.length - 1"
          :product-data="stateInfo.productCollection[productItem.productCode]"
          :error-msg="stateInfo.productErrorMap[productItem.productCode]"
          :product-index="index"
          @update-risk="updateRisk"
          @delete-risk="deleteRisk"
        ></ProductList>
      </ProCard>
      <div class="operate-bar">
        <ProCheckButton activated :round="34" @click="addProduct">添加产品</ProCheckButton>
      </div>
    </div>
    <div class="footer-bar">
      <span class="trial-result"
        >总保费<span class="result-num">{{ !submitDisable ? `￥${totalPremium?.toLocaleString()}` : '-' }}</span>
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
      :holder="proposalInfo.holder"
      :insured="proposalInfo.insuredList[0]"
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
import isEqual from 'lodash-es/isEqual';
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
// import ProductRisk from './components/ProductRisk/index.vue';
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
  holder: {},
  insuredList: [
    {
      name: '',
      gender: '',
      birthday: '',
      productList: [],
    },
  ],
  proposalName: '',
  totalPremium: 0,
  relationUserType: 2,
});

const router = useRouter();
const route = useRoute();
const store = createProposalStore();

const { productCode: productCodeInQuery, id }: { productCode?: string; id?: string } = route.query;

const trialFieldkeys = ['age', 'gender', 'birthday'];

const trialPopupRef = ref(null);

interface proposalInsuredProductItem {
  productCode: string;
  nanoid: string;
  riskList: Partial<ProposalProductRiskItem>[];
}

interface StateInfo {
  selectedProductCodeList: string[];
  currentProductCode: string;
  holder: Partial<ProposalHolder>;
  insuredPersonVO: Partial<ProposalHolder>;
  productList: ProposalInsuredProductItem[];
  productCollection: {
    [x: string]: ProductData;
  };
  productErrorMap: {
    [x: string]: string;
  };
  defaultData: {
    [x: string]: any;
  };
}

const stateInfo = reactive<StateInfo>({
  selectedProductCodeList: [],
  insuredPersonVO: {},
  currentProductCode: '',
  holder: {},
  productList: [],
  productCollection: {},
  productErrorMap: {},
  defaultData: null,
});

// 是否试算过
const trialFlag = ref(false);
const formRef = ref(null);
const insuredFormRef = ref(null);

/** 当前计划书的产品CodeList */
const currentProductCodeList = computed(() => {
  return stateInfo.productList.map((item) => item.productCode).filter((code) => Boolean(code));
});

/** 性别限制 */
const sexLimit = computed(() => {
  const { productPlanInsureVOList } = stateInfo.productCollection[productCodeInQuery] || {};
  const [{ insureProductRiskVOList = [] } = {}] = productPlanInsureVOList || [];
  const { riskInsureLimitVO } = insureProductRiskVOList?.find((riskItem) => riskItem.riskType === 1) || {};
  return riskInsureLimitVO?.sexLimit;
});

// 性别限制仅显示配置的，无限制/男/女
const sexList = computed(() => {
  if (sexLimit.value === '-1' || !sexLimit.value) return SEX_LIMIT_LIST;
  return SEX_LIMIT_LIST.filter((item) => sexLimit.value === item.value);
});

/** 当前产品详情 */
const currentProductDetail = computed(() => {
  return stateInfo.productCollection?.[stateInfo.currentProductCode] || {};
});

/** 当前计划数据 */
const currentProductPlanDetail = computed(() => {
  return currentProductDetail.value?.productPlanInsureVOList?.[0] || {};
});

/** 产品是否有错误信息 */
const submitDisable = computed(() => {
  // debugger;
  return !trialFlag.value || Boolean(Object.values(stateInfo.productErrorMap).join(''));
});

// 总保费
const totalPremium = computed(() => {
  return stateInfo.productList.reduce((total, item) => {
    const premium = item.riskList.reduce((res, riskItem) => {
      return res + (riskItem.initialPremium || 0);
    }, 0);
    return total + premium;
  }, 0);
});

// 设置产品错误信息
const setProductError = (productCode, msg = '') => {
  stateInfo.productErrorMap[productCode] = msg;
};

/** 合并数据到 productList  */
// eslint-disable-next-line consistent-return
const combineToProductList = (productInfo: PlanTrialData) => {
  const currentIndex = stateInfo.productList.findIndex(
    (productItem) => productItem.productCode === productInfo.productCode,
  );

  const tempData = {
    ...productInfo.insuredProductInfo,
    nanoid: nanoid(),
  };

  if (currentIndex === -1) {
    stateInfo.productList.push(tempData);
    return false;
  }
  const currentProductItem = stateInfo.productList[currentIndex];
  const { riskList, ...rest } = tempData;

  // 合并两边的险种属性
  stateInfo.productList[currentIndex] = {
    ...tempData,
    ...rest,
    riskList: isNotEmptyArray(riskList)
      ? riskList.map((riskItem) => {
          const currentRiskItem = currentProductItem.riskList.find((item) => item.riskCode === riskItem.riskCode);
          return {
            ...currentRiskItem,
            ...riskItem,
          };
        })
      : [],
  };
};

// 添加或修改险种信息成功的回调
const onFinished = (productInfo: PlanTrialData) => {
  // 是否需要更新投被保人信息
  // 投保人
  Object.assign(stateInfo.holder, productInfo.holder);
  // 被保人
  Object.assign(stateInfo.insuredPersonVO, productInfo.insuredPersonVO);

  combineToProductList(productInfo);

  // 清除掉错误信息
  setProductError(productInfo.productCode);

  // toggleProductRisk(false);
  trialPopupRef.value?.close();
};

const addProduct = () => {
  store.setProposalInfo(proposalInfo.value);

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
  premiumCalc(params, {
    isCustomError: true,
  }).then(({ code, data, message }) => {
    if (code === SUCCESS_CODE && data) {
      if (data?.errorInfo) {
        Toast(`${data?.errorInfo}`);
      }

      if (isNotEmptyArray(data.riskPremiumDetailVOList)) {
        combineToProductList(trialPopupRef.value?.formatData(params, data));
      }
      setProductError(params.productCode);
      trialFlag.value = true;
    } else {
      setProductError(params.productCode, message);
    }
  });
};

// 生日变化要改变年龄
const changeBirthday = (val) => {
  if (val) {
    stateInfo.insuredPersonVO.age = dayjs(new Date()).diff(val, 'year');
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
          data.reduce((res, item) => {
            res[item.productCode] = item;
            return res;
          }, stateInfo.productCollection);
          console.log('stateInfo.productCollection = ', stateInfo.productCollection);
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
        const { holder, insuredList, productCode } = dataItem;
        const { productList, ...personVO } = (insuredList || [])[0] || {};
        const [{ riskList = [], ...rest } = {}] = productList || [];

        const tempData: Partial<ProposalInsuredProductItem> = {
          productCode,
          ...rest,
          riskList,
        };
        trailProduct(dataItem);

        // 初次调用
        if (flag) {
          Object.assign(stateInfo.insuredPersonVO, personVO);
          Object.assign(stateInfo.holder, holder);
        }
        const currentIndex = currentProductCodeList.value.findIndex((codeItem) => codeItem === productCode);
        if (currentIndex > -1) {
          stateInfo.productList[currentIndex] = tempData;
        } else {
          stateInfo.productList.push(tempData);
        }
        console.log('----add tempdata = ', tempData);
      });
    }
  }
  // if (result.data) transformDefaultData(result.data.find((d) => d.productCode === props.productInfo.productCode));
};

// 获取计划书详情
const queryProposalInfo = (params = {}) => {
  queryProposalDetail(params).then(({ code, data }) => {
    if (code === '10000' && data) {
      const { insuredList, holder, proposalName } = data || {};
      const [{ productList, ...insuredPersonVO }] = insuredList || [];
      stateInfo.holder = holder;
      stateInfo.insuredPersonVO = {
        ...insuredPersonVO,
        proposalName,
      };
      queryProductInfo(
        productList.map((item) => ({
          productCode: item.productCode,
        })),
      );
      console.log('----query detail ', productList);
      stateInfo.productList = productList;
    }
  });
};

/**
 * 单个产品调用险种验证
 * @param code
 */
const handleCalcDynamicInsure = (code: string) => {
  return stateInfo.productList
    .filter((item) => item.productCode === code)
    .map(({ productCode, riskList }) => {
      // 原始数据
      const { productPlanInsureVOList } = stateInfo.productCollection[productCode] || {};
      const [{ insureProductRiskVOList } = {}] = productPlanInsureVOList || [];
      return {
        productCode,
        riskEditVOList: isNotEmptyArray(riskList)
          ? riskList
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
                  const currentRiskItem = insureProductRiskVOList?.find((item) => item.riskCode === riskCode) || {};
                  return {
                    insureProductRiskVO: {
                      ...currentRiskItem,
                      productRiskInsureLimitVO: {
                        ...currentRiskItem?.productRiskInsureLimitVO,
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
  const { riskList, ...rest } = stateInfo.productList.find((item) => item.productCode === productCode) || {};

  return {
    holder: {
      ...stateInfo.holder,
    },
    insuredList: [
      {
        ...stateInfo.insuredPersonVO,
        productList: [
          {
            ...rest,
            riskList,
          },
        ],
      },
    ],
    productCode,
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
      stateInfo.productList.forEach(({ productCode: pCode, riskList }) => {
        const { productRiskDyInsureFactorVOList } = data[0] || data.find((item) => item.productCode === pCode) || {};
        riskList.forEach((riskItem) => {
          const currentRiskItem = productRiskDyInsureFactorVOList.find((item) => item.riskCode === riskItem.riskCode);
          Object.assign(riskItem, {
            ...riskItem,
            ...currentRiskItem,
          });
        });
      });

      // 试算
      trailProduct(convertProposalToTrialData(productCode));
      setProductError(productCode);
      // 成功
    } else {
      setProductError(productCode, message);
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
      stateInfo.productList = stateInfo.productList
        .filter((product: ProposalInsuredProductItem) => product.productCode !== currentProduct.productCode)
        .map((item) => ({ ...item, nanoid: nanoid() }));
    } else {
      currentProduct.riskList = currentProduct.riskList.filter((risk) => risk.riskId !== riskInfo.riskId);
    }
    setProductError(currentProduct.productCode);
  });
};

// 修改险种
const updateRisk = (riskInfo: ProposalProductRiskItem, productInfo: ProposalInsuredProductItem) => {
  stateInfo.currentProductCode = productInfo.productCode;
  stateInfo.defaultData = [convertProposalToTrialData(productInfo.productCode)];
  trialPopupRef.value?.open();
};

// 添加附加险
// const addRiderRisk = (riskIds: any[], productInfo: ProposalInsuredProductItem) => {
//   state.value.productInfo = productInfo;
//   state.value.type = 'addRiderRisk';
//   state.value.currentRisk = riskIds;
//   toggleProductRisk(true);
// };

const validateData = (arr) =>
  isNotEmptyArray(arr) ? arr.every((item) => (typeof item === 'number' ? !Number.isNaN(item) : Boolean(item))) : false;

// 创建计划书
const submitData = (proposalId) => {
  Promise.all([formRef.value?.validate(), insuredFormRef.value?.validate()]).then(() => {
    const { holder } = stateInfo;
    addOrUpdateProposal({
      holder,
      insuredList: [
        {
          ...stateInfo.insuredPersonVO,
          productList: stateInfo.productList,
        },
      ],
      proposalName: stateInfo.insuredPersonVO.proposalName,
      totalPremium: totalPremium.value,
      relationUserType: 2,
      id: proposalId,
    }).then((res) => {
      const { code, data } = res || {};
      if (code === '10000') {
        store.$reset();
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
  // 编辑
  if (id) {
    toggleActionSheet(true);
  } else {
    submitData(id);
  }
};

// 保存修改/另存为新的计划书
const selectAction = (item: ActionSheetAction, index: number) => {
  submitData(index ? undefined : id);
};

/** 被保人数据变动 */
watch(
  () => trialFieldkeys.map((key) => stateInfo.insuredPersonVO[key]),
  debounce((val, oldVal) => {
    if (!isEqual(val, oldVal)) {
      console.log('被保人条件变动');
      if (isNotEmptyArray(Object.keys(stateInfo.productCollection))) {
        currentProductCodeList.value.forEach((code) => calcDynamicInsureFactor(code));
      }
    }
  }),
  {
    deep: true,
  },
);

// 选择产品页面变动
watch(
  () => stateInfo.selectedProductCodeList,
  debounce((val) => {
    if (isNotEmptyArray(val)) {
      console.log('选择的产品变动了', val);
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

// 返回创建页面
onActivated(() => {
  const { selectedProduct, insuredPersonVO } = store.$state;

  stateInfo.selectedProductCodeList = isNotEmptyArray(selectedProduct) ? (selectedProduct as string[]) : [];
});

onBeforeMount(() => {
  if (productCodeInQuery) {
    const params = [{ productCode: productCodeInQuery as string }];
    queryProductInfo(params);
    fetchDefaultData(params, true);
  }
  if (id) {
    queryProposalInfo({ id });
  }

  // 修改标题
  const title = `${id ? '编辑' : '创建'}计划书`;
  route.meta.title = title;
  document.title = title;
});
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
  .product-item-card {
    margin-bottom: 20px;
  }
  .container {
    padding: 30px 30px 200px 30px;

    .mb20 {
      margin-bottom: 20px;
    }

    .operate-bar {
      width: 100%;
      justify-content: center;
      display: flex;
      margin-top: 40px;
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
      width: 260px;
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
