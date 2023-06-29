<template>
  <van-config-provider :theme-vars="themeVars">
    <ProPageWrap class="page-create-wrapper">
      <div class="proposal-header">
        <ProRenderForm ref="formRef" class="mb20" :model="stateInfo.insuredPersonVO">
          <ProFieldV2
            v-model="stateInfo.insuredPersonVO.proposalName"
            class="ra20"
            label="计划书名称"
            name="proposalName"
            :maxlength="20"
          />
        </ProRenderForm>
        <InsurerList
          :config="stateInfo"
          :insurer-list="stateInfo.insurerList"
          :can-change-select="true"
          @validate-tab="validateTab"
          @current-change="handleCurrentInsureChange"
          @add="handleAddInsure"
          @delete="handleDeleteInsure"
        />
      </div>
      <div v-if="stateInfo.insurerList[stateInfo.currentSelectInsure]" class="container">
        <ProCard
          title="被保人信息"
          class="com-pro-form-with-card com-card-body-no-padding insure-containe"
          :show-divider="false"
        >
          <ProRenderForm ref="insuredFormRef" :model="stateInfo.insurerList[stateInfo.currentSelectInsure]">
            <ProFieldV2
              v-model="stateInfo.insurerList[stateInfo.currentSelectInsure].personVO.name"
              label="姓名"
              name="name"
              :maxlength="20"
              required
            />
            <ProPickerV2
              v-if="stateInfo.currentSelectInsure !== 0 && stateInfo.insurerList[stateInfo.currentSelectInsure]"
              v-model="stateInfo.insurerList[stateInfo.currentSelectInsure].personVO.relationToMainInsured"
              label="与主被保人关系"
              :is-default-selected="true"
              name="relationToMainInsured"
              :columns="relationColumn()"
              required
              @confirm="changeRelationToMain"
            >
            </ProPickerV2>
            <ProFieldV2
              v-model="stateInfo.insurerList[stateInfo.currentSelectInsure].personVO.age"
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
                  v-model="stateInfo.insurerList[stateInfo.currentSelectInsure].personVO.birthday"
                  class="birthday-field-wrap"
                  label="出生日期"
                  name="birthday"
                  @update:model-value="changeBirthday"
                />
              </template>
            </ProFieldV2>
            <ProRadioV2
              v-model="stateInfo.insurerList[stateInfo.currentSelectInsure].personVO.gender"
              label="性别"
              name="gender"
              :columns="sexList"
              :disabled="
                +stateInfo.insurerList[stateInfo.currentSelectInsure].personVO.relationToMainInsured ===
                +RELATION_HOLDER_ENUM.MATE
              "
              required
              @change="changeGender"
            />
          </ProRenderForm>
          <template v-if="stateInfo.currentSelectInsure === 0">
            <div class="title-tip-icon">投保人信息</div>
            <ProRenderForm ref="holderFormRef" :model="stateInfo.holder" class="insure-container">
              <ProRadioV2
                v-model="stateInfo.insurerList[0].personVO.relationToHolder"
                label="投被保人是同一人"
                :columns="SELF_LIST"
                required
              />
              <template v-if="stateInfo.insurerList[0].personVO.relationToHolder === 2">
                <ProFieldV2 v-model="stateInfo.holder.name" name="name" label="姓名" :maxlength="20" required />
                <ProFieldV2
                  v-model="stateInfo.holder.age"
                  class="age-field-wrap"
                  name="age"
                  label="年龄"
                  type="digit"
                  :maxlength="3"
                  required
                  :rules="[
                    { required: true, message: '请输入年龄' },
                    {
                      trigger: 'onChange',
                      validator: validateAge,
                    },
                  ]"
                  @change="changeHolderAge"
                >
                  <template #extra>
                    <ProDatePickerV2
                      v-model="stateInfo.holder.birthday"
                      class="birthday-field-wrap"
                      label="出生日期"
                      name="birthday"
                      @update:model-value="changeHolderBirthday"
                    />
                  </template>
                </ProFieldV2>
                <ProRadioV2
                  v-model="stateInfo.holder.gender"
                  label="性别"
                  name="gender"
                  :columns="SEX_LIMIT_LIST"
                  required
                />
              </template>
            </ProRenderForm>
          </template>
        </ProCard>
        <ProRenderFormWithCard ref="productFormRef" title="保障计划" class="product-container">
          <template v-if="stateInfo.insurerList[stateInfo.currentSelectInsure].productList.length > 0">
            <ProCard
              v-for="(productItem, index) in stateInfo.insurerList[stateInfo.currentSelectInsure].productList"
              :key="`${productItem.nanoid}_${index}_${productItem.productCode}`"
              class="product-item-card"
              :show-line="false"
              :show-divider="false"
            >
              <ProductList
                :product-risk-list="productItem.riskList"
                :product-info="productItem"
                :product-num="stateInfo.insurerList[stateInfo.currentSelectInsure].productList?.length - 1"
                :product-data="stateInfo.productCollection[productItem.productCode]"
                :error-msg="stateInfo.productErrorMap[productItem.productCode]"
                :product-index="index"
                :current-select-insure="stateInfo.currentSelectInsure"
                @update-risk="updateRisk"
                @delete-risk="deleteRisk"
              ></ProductList>
            </ProCard>
          </template>
          <template v-else>
            <div v-if="showAddBtn" class="operate-bar">
              <ProEmpty
                v-if="stateInfo.insurerList[stateInfo.currentSelectInsure].productList?.length <= 0"
                :empty-img="emptyImg"
                title="该成员还未配置产品，去添加吧！"
                empty-class="empty-select"
              />
              <ProCheckButton activated :round="34" @click="addProduct">添加产品</ProCheckButton>
            </div>
          </template>
        </ProRenderFormWithCard>
        <div
          v-if="showAddBtn && stateInfo.insurerList[stateInfo.currentSelectInsure].productList.length > 0"
          class="operate-bar"
        >
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
  </van-config-provider>
</template>

<script lang="ts" setup name="CreateProposal">
import { ActionSheetAction, Dialog, Toast } from 'vant';
import { useToggle } from '@vant/use';
import dayjs from 'dayjs';
import { nanoid } from 'nanoid';
import { useRouter, useRoute } from 'vue-router';
import isEqual from 'lodash-es/isEqual';
import debounce from 'lodash-es/debounce';
import { cloneDeep } from 'lodash';
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
  ProductItem,
} from '@/api/modules/createProposal.data';
import { queryCalcDefaultInsureFactor, queryCalcDynamicInsureFactor, premiumCalc } from '@/api/modules/trial';
import TrialPopup from '../proposalList/components/TrialPopup.vue';
import ProEmpty from '@/components/ProEmpty/index.vue';
import emptyImg from '@/assets/images/empty.png';

import { ProductData } from '@/common/constants/trial.data';
import { SEX_LIMIT_LIST, SELF_LIST, SEX_LIMIT_ENUM } from '@/common/constants';
import ProductList from './components/ProductList/index.vue';
// import ProductRisk from './components/ProductRisk/index.vue';
import { isNotEmptyArray } from '@/common/constants/utils';
import useTheme, { setGlobalTheme } from '@/hooks/useTheme';
import InsurerList from './components/InsurerSelect/index.vue';
import { RELATION_HOLDER_LIST, RELATION_HOLDER_ENUM } from '@/common/constants/product';

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

const themeVars = useTheme();

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
const product_namelist = {};

const {
  productCode: productCodeInQuery,
  id,
  preview,
}: { productCode?: string; id?: string; preview?: string } = route.query;

const trialFieldkeys = ['age', 'gender', 'birthday', 'hasSocialInsurance', 'occupationCodeList'];

const trialPopupRef = ref(null);

interface proposalInsuredProductItem {
  productCode: string;
  nanoid: string;
  riskList: Partial<ProposalProductRiskItem>[];
}

interface StateInfo {
  selectedProductCodeList: string[];
  selectedProductList: any[]; // 当前被保人选择的产品列表
  currentProductCode: string;
  holder: Partial<ProposalHolder>;
  insuredPersonVO: Partial<ProposalHolder>;
  insurerList: ProposalHolder[]; // 被保人列表，包含被保人信息personVO和productList
  currentSelectInsure: number; // 当前选择的被保人序号
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
  selectedProductList: [],
  insuredPersonVO: {},
  insurerList: [],
  currentProductCode: '',
  holder: {},
  productList: [],
  productCollection: {},
  productErrorMap: {},
  defaultData: null,
  currentSelectInsure: 0,
});

// 是否试算过
const trialFlag = ref(false);
const formRef = ref(null);
const insuredFormRef = ref(null);
const holderFormRef = ref(null);

const validateAge = (value: string, rule: any, type: string) => {
  if (!value) {
    return '请输入投保人年龄';
  }
  if (+value < 18) {
    return `投保人年龄不得小于18周岁`;
  }
  return '';
};

/** 当前计划书的产品CodeList */
const currentProductCodeList = computed(() => {
  if (!stateInfo.insurerList[stateInfo.currentSelectInsure]?.productList) return [];
  return stateInfo.insurerList[stateInfo.currentSelectInsure].productList
    .map((item) => item.productCode)
    .filter((code) => Boolean(code));
});

const currentProductCodeListFn = () => {
  return stateInfo.insurerList[stateInfo.currentSelectInsure].productList
    .map((item) => item.productCode)
    .filter((code) => Boolean(code));
};

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

const multiInsured = computed(() => {
  return currentProductDetail.value?.productPlanInsureVOList?.[0]?.multiInsuredConfigVO;
});

/** 产品是否有错误信息 */
const submitDisable = computed(() => {
  // debugger;
  return !trialFlag.value || Boolean(Object.values(stateInfo.productErrorMap).join(''));
});

const showAddBtn = computed(() => {
  return `${preview}` !== '1';
});

// 总保费
const totalPremium = computed(() => {
  return stateInfo.insurerList.reduce((total, insure) => {
    return +(
      insure.productList.reduce((totalNum, item) => {
        const premium = item.riskList.reduce((res, riskItem) => {
          return +res + +(riskItem.initialPremium || 0);
        }, 0);
        return +totalNum + +premium;
      }, 0) + +total
    );
  }, 0);
});

const validateTab = (cb) => {
  const validates = [insuredFormRef.value?.validate()];
  if (stateInfo.currentSelectInsure === 0) {
    if (
      (stateInfo.insurerList[0].personVO.relationToHolder === 1 && stateInfo.insurerList[0].personVO.age < 18) ||
      (stateInfo.insurerList[0].personVO.relationToHolder !== 1 && stateInfo.holder.age < 18)
    ) {
      Toast('投保人年龄不得小于18周岁');
      return;
    }
    validates.push(holderFormRef.value?.validate());
  }
  Promise.all(validates)
    .then(() => {
      cb();
    })
    .catch((e) => {
      Toast('请确认信息是否录入完整!');
    });
};

const relationColumn = () => {
  const mateIndex = stateInfo.insurerList.findIndex(({ personVO }) => {
    return personVO.relationToMainInsured === +RELATION_HOLDER_ENUM.MATE;
  });
  const newMap = RELATION_HOLDER_LIST.map((conf) => {
    // 如果是本人的情况  一定是disable的，因为默认第一个被保人就是本人
    if (
      conf.value === RELATION_HOLDER_ENUM.SELF ||
      (conf.value === RELATION_HOLDER_ENUM.MATE && mateIndex >= 0 && mateIndex !== stateInfo.currentSelectInsure)
    ) {
      return {
        ...conf,
        disabled: true,
      };
    }
    return {
      ...conf,
    };
  });
  return newMap;
};

// 设置产品错误信息
const setProductError = (productCode, msg = '') => {
  stateInfo.productErrorMap[productCode] = msg;
};

/** 合并数据到 productList  */
// eslint-disable-next-line consistent-return
const combineToProductList = (productInfo: PlanTrialData) => {
  const currentIndex = stateInfo.insurerList[stateInfo.currentSelectInsure].productList.findIndex(
    (productItem) => productItem.productCode === productInfo.productCode,
  );
  const tempData = {
    ...productInfo.insuredProductInfo,
    nanoid: nanoid(),
    productName: product_namelist[productInfo.productCode],
  };

  if (currentIndex === -1) {
    stateInfo.insurerList[stateInfo.currentSelectInsure].productList.push(tempData);
    return false;
  }
  const currentProductItem = stateInfo.insurerList[stateInfo.currentSelectInsure].productList[currentIndex];
  const { riskList, ...rest } = tempData;

  // 合并两边的险种属性
  stateInfo.insurerList[stateInfo.currentSelectInsure].productList[currentIndex] = {
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
  if (stateInfo.currentSelectInsure === 0) {
    productInfo.insuredPersonVO.relationToHolder =
      stateInfo.insurerList[stateInfo.currentSelectInsure].personVO.relationToHolder;
  }
  // 被保人
  if (stateInfo.insurerList[stateInfo.currentSelectInsure])
    Object.assign(stateInfo.insurerList[stateInfo.currentSelectInsure].personVO, productInfo.insuredPersonVO);

  combineToProductList(productInfo);

  // 清除掉错误信息
  setProductError(productInfo.productCode);

  // 修改试算成功
  trialFlag.value = true;

  // toggleProductRisk(false);
  trialPopupRef.value?.close();
};

const addProduct = () => {
  const validates = [insuredFormRef.value?.validate()];

  Promise.all(validates)
    .then(() => {
      store.setProposalInfo(proposalInfo.value);
      store.setExcludeProduct(currentProductCodeListFn());
      store.setInsuredPersonVO(stateInfo.insurerList[stateInfo.currentSelectInsure].personVO);

      router.push({
        path: '/proposalListSelect',
        query: {
          isCreateProposal: '1',
        },
      });
    })
    .catch((e) => {
      Toast('请确认被保人信息是否录入完整!');
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
    stateInfo.insurerList[stateInfo.currentSelectInsure].personVO.age = dayjs(new Date()).diff(val, 'year');
  }
};

// 投保人生日变化要改变年龄
const changeHolderBirthday = (val) => {
  if (val) {
    stateInfo.holder.age = dayjs(new Date()).diff(val, 'year');
  }
};

const changeRelationToMain = (val) => {
  const { value } = val;
  let param = { age: 30, birthday: dayjs().subtract(30, 'year').format('YYYY-MM-DD'), gender: +SEX_LIMIT_ENUM.MALE };
  if ([RELATION_HOLDER_ENUM.MATE, RELATION_HOLDER_ENUM.CHILD].includes(value)) {
    param = {
      age: value === RELATION_HOLDER_ENUM.MATE ? stateInfo.insurerList[0].personVO.age : 0,
      birthday:
        value === RELATION_HOLDER_ENUM.MATE
          ? stateInfo.insurerList[0].personVO.birthday
          : dayjs().subtract(28, 'day').format('YYYY-MM-DD'),
      gender:
        value === RELATION_HOLDER_ENUM.MATE
          ? +stateInfo.insurerList[0].personVO.gender === 1
            ? 2
            : 1
          : +SEX_LIMIT_ENUM.MALE,
    };
  } else if (RELATION_HOLDER_ENUM.PARENT === value) {
    param = {
      age: +stateInfo.insurerList[0].personVO.age + 18,
      birthday: dayjs(stateInfo.insurerList[0].personVO.birthday).subtract(18, 'year').format('YYYY-MM-DD'),
      gender: +SEX_LIMIT_ENUM.MALE,
    };
  }
  Object.assign(stateInfo.insurerList[stateInfo.currentSelectInsure].personVO, param);
};

//  改变年龄清除出生日期
const changeAge = () => {
  stateInfo.insurerList[stateInfo.currentSelectInsure].personVO.birthday = '';
};

const changeGender = () => {
  if (stateInfo.currentSelectInsure === 0) {
    const mateIndex = stateInfo.insurerList.findIndex((insure) => {
      if (insure && insure.personVO) return +insure.personVO.relationToMainInsured === +RELATION_HOLDER_ENUM.MATE;
      return false;
    });
    if (mateIndex !== -1) {
      stateInfo.insurerList[mateIndex].personVO.gender = +stateInfo.insurerList[0].personVO.gender === 1 ? 2 : 1;
    }
  }
};

//  改变年龄清除出生日期
const changeHolderAge = () => {
  stateInfo.holder.birthday = '';
};

/** 获取产品数据列表 */
const queryProductInfo = (searchData: any) => {
  queryProductDetailList(searchData)
    .then(({ code, data }) => {
      if (code === '10000') {
        if (isNotEmptyArray(data)) {
          data.reduce((res, item) => {
            res[item.productCode] = item;
            product_namelist[item.productCode] = item.productName;
            return res;
          }, stateInfo.productCollection);
        }
      }
    })
    .finally(() => {});
};

const getHolderList = () => {
  if (+stateInfo.insurerList[0].personVO.relationToHolder === 1) {
    const { relationToHolder, relationToMainInsured, productList, ...other } = stateInfo.insurerList[0].personVO;
    if (id) {
      other.id = stateInfo.holder.id;
    }
    return other;
  }
  return stateInfo.holder;
};

const getInsurerList = (index: number) => {
  if (index === 0 && +stateInfo.insurerList[index].personVO.relationToHolder === 2) {
    return { ...stateInfo.insurerList[index].personVO, relationToHolder: null };
  }

  return stateInfo.insurerList[index].personVO;
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
      ...((stateInfo.insurerList[stateInfo.currentSelectInsure] &&
        stateInfo.insurerList[stateInfo.currentSelectInsure].personVO) ||
        {}),
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

        // 初次调用
        if (flag) {
          if (stateInfo.insurerList[stateInfo.currentSelectInsure]) {
            Object.assign(stateInfo.insurerList[stateInfo.currentSelectInsure].personVO, personVO, {
              relationToHolder: 1,
            });
          }
          Object.assign(stateInfo.holder, holder);
        }
        insuredList.forEach((insured: any, index: number) => {
          const { productList: products, ...p } = insured;
          // if (stateInfo.insurerList[stateInfo.currentSelectInsure]) {
          //   products.forEach((product) => {
          //     const hasProduct = stateInfo.insurerList[stateInfo.currentSelectInsure].productList.some(
          //       (pro) => pro.productCode === product.productCode,
          //     );
          //     if (!hasProduct) {
          //       // console.log('----push ');
          //       stateInfo.insurerList[stateInfo.currentSelectInsure].productList.push(product);
          //     }
          //   });
          // }
          if (stateInfo.insurerList.length === 0) {
            if (!p.relationToMainInsured) {
              p.relationToMainInsured = RELATION_HOLDER_ENUM.SELF;
            }
            stateInfo.insurerList.push({
              productList: products.map((pro) => {
                return { ...pro, productCode };
              }),
              personVO: p,
            });
          }
        });
        const currentIndex = currentProductCodeListFn().findIndex((codeItem) => codeItem === productCode);
        if (currentIndex > -1) {
          stateInfo.productList[currentIndex] = tempData;
        } else {
          stateInfo.productList.push(tempData);
        }
        nextTick(() => {
          trailProduct({
            ...dataItem,
            holder: { ...getHolderList() },
            insuredList: [
              {
                ...getInsurerList(stateInfo.currentSelectInsure),
                productList,
              },
            ],
          });
        });
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
      let isDown = false;
      stateInfo.insurerList = insuredList.map((insure, i) => {
        const { productList: products, ...personVO } = insure;
        if (i === 0 && !personVO.relationToHolder) {
          personVO.relationToHolder = 2;
          changeHolderBirthday(stateInfo.holder.birthday);
        }
        return {
          productList: products.filter((item: ProductItem) => {
            if (!isDown && item.shelfStatus !== 1) {
              isDown = true;
            }
            return item.shelfStatus === 1;
          }),
          personVO,
        };
      });
      if (isDown) {
        Toast('计划书中存在已下架产品，请重新生成计划书');
      }
      queryProductInfo(
        productList
          .filter((item: ProductItem) => item.shelfStatus === 1)
          .map((item) => ({
            productCode: item.productCode,
          })),
      );
      stateInfo.productList = productList;
    }
  });
};

/**
 * 单个产品调用险种验证
 * @param code
 */
const handleCalcDynamicInsure = (code: string) => {
  return stateInfo.insurerList[stateInfo.currentSelectInsure].productList
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
              .map(({ riskCode }) => {
                // 动态值
                const currentRiskItem = insureProductRiskVOList?.find((item) => item.riskCode === riskCode) || {};
                return {
                  insureProductRiskVO: {
                    ...currentRiskItem,
                  },
                };
              })
          : [],
      };
    });
};

/**
 * 计划书数据转试算数据
 * @param productCode
 */
const convertProposalToTrialData = (productCode) => {
  const { riskList, ...rest } =
    stateInfo.insurerList[stateInfo.currentSelectInsure].productList.find((item) => item.productCode === productCode) ||
    {};

  return {
    holder: {
      ...getHolderList(),
    },
    insuredList: [
      {
        ...getInsurerList(stateInfo.currentSelectInsure),
        productList: stateInfo.insurerList[stateInfo.currentSelectInsure].productList,
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
        ...stateInfo.insurerList[stateInfo.currentSelectInsure].personVO,
      },
      {
        isCustomError: true,
      },
    );
    if (code === '10000' && isNotEmptyArray(data)) {
      stateInfo.insurerList[stateInfo.currentSelectInsure].productList.forEach(({ productCode: pCode, riskList }) => {
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
      stateInfo.insurerList[stateInfo.currentSelectInsure].productList = stateInfo.insurerList[
        stateInfo.currentSelectInsure
      ].productList
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

const validateProducts = () => {
  return !stateInfo.insurerList.some((item) => item.productList.length === 0);
};

// 创建计划书
const submitData = (proposalId) => {
  if (!validateProducts()) {
    Toast('请先添加产品');
    return;
  }
  const validates = [formRef.value?.validate(), insuredFormRef.value?.validate()];
  if (stateInfo.currentSelectInsure === 0) {
    if (
      (stateInfo.insurerList[0].personVO.relationToHolder === 1 && stateInfo.insurerList[0].personVO.age < 18) ||
      (stateInfo.insurerList[0].personVO.relationToHolder !== 1 && stateInfo.holder.age < 18)
    ) {
      Toast('投保人年龄不得小于18周岁');
      return;
    }
    validates.push(holderFormRef.value?.validate());
  }
  Promise.all(validates).then(() => {
    addOrUpdateProposal({
      holder: { ...getHolderList() },
      insuredList: stateInfo.insurerList.map((insure, i) => {
        return {
          ...getInsurerList(i),
          productList: insure.productList.map((p) => {
            return {
              ...p,
              productName: product_namelist[p.productCode],
            };
          }),
        };
      }),
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
            preview,
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

const handleCurrentInsureChange = (index: number) => {
  stateInfo.currentSelectInsure = index;
  if (stateInfo.insurerList[index]?.productList.length > 0) {
    queryProductInfo(
      stateInfo.insurerList[index].productList.map(({ productCode }) => ({
        productCode,
      })),
    );
  } else {
    stateInfo.productCollection = {};
  }
};

const handleAddInsure = (data: any, index: number) => {
  if (stateInfo.insurerList.length - 1 === index) {
    // 说明添加的就是最后一个
    const mateIndex = stateInfo.insurerList.findIndex((insure) => {
      if (insure && insure.personVO) return +insure.personVO.relationToMainInsured === +RELATION_HOLDER_ENUM.MATE;
      return false;
    });
    stateInfo.insurerList[index] = {
      ...data,
      personVO: {
        age: mateIndex < 0 ? stateInfo.insurerList[0].personVO.age : 0,
        birthday:
          mateIndex < 0 ? stateInfo.insurerList[0].personVO.birthday : dayjs().subtract(28, 'day').format('YYYY-MM-DD'),
        relationToMainInsured: mateIndex < 0 ? RELATION_HOLDER_ENUM.MATE : RELATION_HOLDER_ENUM.CHILD,
        gender: mateIndex < 0 ? (+stateInfo.insurerList[0].personVO.gender === 1 ? 2 : 1) : SEX_LIMIT_ENUM.MALE,
      },
      productList: [],
    };
  }
  stateInfo.currentSelectInsure = index;
  stateInfo.productCollection = {};
};

const handleDeleteInsure = (index: number, cb) => {
  stateInfo.insurerList.splice(index, 1);
  cb?.();
};

/** 被保人数据变动 */
watch(
  () =>
    trialFieldkeys.map((key) => {
      if (stateInfo.insurerList[stateInfo.currentSelectInsure])
        return stateInfo.insurerList[stateInfo.currentSelectInsure].personVO[key];
      return '';
    }),
  (val, oldVal) => {
    if (val.join(',') !== oldVal.join(',')) {
      console.log('被保人条件变动');
      if (isNotEmptyArray(Object.keys(stateInfo.productCollection))) {
        currentProductCodeListFn().forEach((code) => calcDynamicInsureFactor(code));
      }
    }
  },
  {
    deep: true,
  },
);

// 选择产品页面变动
watch(
  () => stateInfo.selectedProductCodeList,
  debounce((val) => {
    if (isNotEmptyArray(val)) {
      console.log('选择的产品变动了', val, cloneDeep(stateInfo.insurerList));
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
  const { selectedProduct, selectedProductList } = store.$state;
  stateInfo.selectedProductList = selectedProductList;
  stateInfo.selectedProductCodeList = isNotEmptyArray(selectedProduct) ? (selectedProduct as string[]) : [];
});

onBeforeMount(() => {
  setGlobalTheme();
  if (productCodeInQuery) {
    const params = [{ productCode: productCodeInQuery as string }];
    queryProductInfo(params);
    fetchDefaultData(params, true);
  }
  if (id) {
    queryProposalInfo({ id });
    trialFlag.value = true;
  }

  // 修改标题
  const title = `${id ? '编辑' : '创建'}计划书`;
  route.meta.title = title;
  document.title = title;
});
</script>

<style lang="scss">
.age-field-wrap .van-field__value .van-field__control {
  padding-right: 18px;
}
</style>

<style lang="scss" scoped>
.page-create-wrapper {
  background-color: $zaui-global-bg;
  :deep(.page-main) {
    background-color: $zaui-global-bg;
  }

  .title-tip-icon {
    height: 90px;
    line-height: 90px;
    display: flex;
    align-items: center;
    margin-left: $zaui-card-border;
    &:before {
      content: ' ';
      width: 6px;
      height: 30px;
      background: $primary-color;
      margin-right: 16px;
      border-radius: 0px 4px 4px 0px;
    }
  }

  .com-pro-form-with-card {
    margin-bottom: 20px;

    &.com-card-body-no-padding {
      :deep(.com-card-wrap) .header {
        padding-right: 0;
      }
    }
  }
  .proposal-header {
    width: 100%;
    :deep(.van-cell__title) {
      font-weight: 600;
    }
  }
  .border-radius {
    border-radius: $zaui-border-radius-card;
    .plan-name {
      font-weight: 600;
    }
  }
  :deep(.com-card-wrap) {
    clip-path: inset(0 0 0 0 round $zaui-border-radius-card);
    .body {
      padding: 0;
    }
  }

  .product-container {
    .operate-bar,
    .empty-select {
      margin-bottom: 40px;
    }
  }
  .product-item-card {
    margin-bottom: 20px;
    border-radius: 20px;
  }
  .container {
    padding: 30px 30px 200px 30px;
    .insure-container {
      border-radius: 20px;
      overflow: hidden;
    }
    .mb20 {
      margin-bottom: 20px;
    }

    .ra20 {
      border-radius: $zaui-border-radius-card;
    }

    .operate-bar {
      width: 100%;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      display: flex;
      margin-top: 40px;
      :deep(.com-check-btn) {
        height: 68px;
        width: 240px;
        border-radius: 34px;
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
      margin-left: 20px;
      position: relative;
      &::before {
        content: ' ';
        position: absolute;
        width: 1px;
        height: 41px;
        background-color: $zaui-line;
        margin: auto;
        top: 0;
        bottom: 0;
      }
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
