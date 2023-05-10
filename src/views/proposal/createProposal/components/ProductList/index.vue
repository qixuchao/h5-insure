<template>
  <div class="com-product-list-wrapper">
    <div v-for="(risk, index) in state.productRiskList" :key="risk.riskId">
      <div class="risk-item-wrapper">
        <ProTitle :risk-type="risk.riskType" :title="risk.riskName" class="no-border" />
        <div class="content">
          <div class="risk-factor">
            <div class="factor">
              <span class="factor-value">{{ risk.initialAmount?.toLocaleString() || '-' }}</span>
              <span class="factor-name"> 保额(元) </span>
            </div>
            <div class="factor">
              <span class="factor-value">{{ pickNameInList(RISK_INSURANCE_PERIOD, risk.coveragePeriod) || '-' }}</span>
              <span class="factor-name"> 保障期间 </span>
            </div>
            <div class="factor">
              <span class="factor-value">{{ pickNameInList(RISK_PAYMENT_PERIOD, risk.chargePeriod) || '-' }}</span>
              <span class="factor-name"> 交费期间 </span>
            </div>
          </div>
          <div class="operate-bar-wrap">
            <div class="risk-premium">
              保费:<span class="premium">{{
                !errorMsg && risk.initialPremium ? `￥${risk.initialPremium?.toLocaleString()}` : '-'
              }}</span>
            </div>
            <div v-if="risk.riskType !== 2" class="operate-bar">
              <ProCheckButton
                v-if="isCanDeleteRisk(risk.riskId) && index > 0"
                :round="32"
                class="border"
                @click="deleteRisk(risk)"
                >删除</ProCheckButton
              >
              <!-- <ProCheckButton
              v-if="isCanAddRiderRisk"
              activated
              :round="32"
              class="btn-rider-risk"
              @click="addRiderRisk(risk)"
            >
              <span class="btn-plus">+</span>
              附加险</ProCheckButton
            > -->
              <ProCheckButton activated :round="32" @click="updateRisk(risk)">修改</ProCheckButton>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div v-if="state.productRiskList.length > 1" class="premium-total">
      保费:
      <span class="premium">{{
        !errorMsg && state?.totalPremium ? `￥${state?.totalPremium?.toFixed(2)?.toLocaleString()}` : '-'
      }}</span>
    </div> -->
    <RiskRelationList
      v-if="showRelationList"
      v-model="state.checkedList"
      :show="showRelationList"
      :disabled="state.disabledList"
      :risk-list="riderRiskList"
      :collocation-list="collocationRiderList"
      @finished="onFinished"
      @close="toggleRelationList(false)"
    ></RiskRelationList>
    <ProductTips :error-msg="errorMsg" />
  </div>
</template>

<script lang="ts" setup name="ProductList">
import { withDefaults } from 'vue';
import { useToggle } from '@vant/use';
import { ProposalProductRiskItem, ProposalInsuredProductItem } from '@/api/modules/createProposal.data';
import { ProductData, RiskDetailVoItem } from '@/api/modules/trial.data';
import { pickNameInList } from '@/utils';
import RiskRelationList from '@/views/trial/components/RiskRelationList/index.vue';
import useDict from '@/hooks/useDicData';
import ProductTips from '@/views/proposal/proposalList/components/ProductTips.vue';

interface Props {
  productRiskList: ProposalProductRiskItem[];
  productInfo: Partial<ProposalInsuredProductItem>;
  productData: Partial<ProductData>;
  pickProductPremium: (type: any) => void;
  productNum: number;
  errorMsg: string;
}

interface State {
  checkedList: any[];
  disabledList: any[];
  riderRiskList: ProposalProductRiskItem[];
  mainRiskData: ProductData;
  totalPremium: number;
  currentRiskRecord: ProposalProductRiskItem;
  productRiskList: ProposalProductRiskItem[];
}

const props = withDefaults(defineProps<Props>(), {
  productRiskList: () => [],
  productInfo: () => ({}),
  productData: () => ({}),
  pickProductPremium: () => {},
  productNum: 0,
  errorMsg: '',
});

const emits = defineEmits(['deleteRisk', 'updateRisk', 'addRiderRisk']);
const [showRelationList, toggleRelationList] = useToggle();
const state = ref<State>({
  checkedList: [],
  disabledList: [],
  riderRiskList: [],
  mainRiskData: {} as ProductData,
  totalPremium: 0,
  currentRiskRecord: {} as ProposalProductRiskItem,
  productRiskList: [],
});
// const isCanAddRiderRisk = ref<boolean>(false);

const RISK_PAYMENT_PERIOD = useDict('RISK_PAYMENT_PERIOD');

const RISK_INSURANCE_PERIOD = useDict('RISK_INSURANCE_PERIOD');

// 可选附加险
const riderRiskList = computed(() => {
  return (
    props.productData?.productRiskVoList?.[0].riskDetailVOList.filter(
      (risk: RiskDetailVoItem) => risk.collocationType === 1,
    ) || []
  );
});

// 计算添加附加险按钮展示的逻辑
const isCanAddRiderRisk = computed(() => {
  const riskIds = props.productRiskList.map((risk) => risk.riskId);
  const currentRiderRiskList = (props.productData?.productRiskVoList?.[0].riskDetailVOList || []).filter(
    (risk: RiskDetailVoItem) => {
      return riskIds.includes(risk.id) && risk.collocationType === 1;
    },
  );
  return riderRiskList.value.length - currentRiderRiskList.length;
});

// 计算删除险种按钮展示的逻辑
const isCanDeleteRisk = computed(() => (riskId: number) => {
  const currentRisk =
    props.productData?.productRiskVoList?.[0].riskDetailVOList.find((risk: RiskDetailVoItem) => risk.id !== riskId) ||
    {};
  let deleteFlag = false;
  if (props.productNum) {
    deleteFlag = true;
  } else {
    if (currentRisk.riskType === 2 && currentRisk.collocationType === 1) {
      deleteFlag = true;
    } else {
      deleteFlag = false;
    }
  }
  return deleteFlag;
});

const mainRiskData = computed(() => {
  const mainRisk =
    props.productData?.productRiskVoList?.[0].riskDetailVOList.find((risk: RiskDetailVoItem) => risk.riskType === 1) ||
    {};
  return mainRisk;
});

const collocationRiderList = computed(() => {
  return mainRiskData.value.collocationVOList || [];
});

const deleteRisk = (riskRecord: ProposalProductRiskItem) => {
  emits('deleteRisk', riskRecord, props.productInfo);
};

const updateRisk = (riskRecord: ProposalProductRiskItem) => {
  emits('updateRisk', riskRecord, props.productInfo);
};

const addRiderRisk = (riskRecord: ProposalProductRiskItem) => {
  toggleRelationList(true);
  state.value.currentRiskRecord = riskRecord;
};

// 添加附加险信息
const onFinished = (riskList: any[], disabled: any[]) => {
  // state.currentRiskList = state.currentRiskList.concat(risk);
  const riskIds = riskList.map((risk) => risk.id).filter((id: number) => !state.value.disabledList.includes(id));

  // state.value.disabledList = disabled;
  emits('addRiderRisk', riskIds, props.productInfo);
};

watch(
  () => props.productInfo,
  (newVal) => {
    let productPremium = 0;
    (newVal.riskList || []).forEach((risk: ProposalProductRiskItem) => {
      productPremium += risk.initialPremium;
    });

    // props.pickProductPremium?.({ [`${newVal.productCode}`]: productPremium });
    state.value.totalPremium = productPremium;
  },
  {
    deep: true,
    immediate: true,
  },
);

watch(
  () => props.productRiskList,
  (newVal) => {
    const newProductRiskList: ProposalProductRiskItem[] = [];
    const disabledList: any[] = [];
    const checkedList = [];
    const riderList = [];
    (newVal || []).forEach((risk: ProposalProductRiskItem) => {
      if (risk.riskType === 1) {
        newProductRiskList.unshift(risk);
      } else {
        disabledList.push(risk.riskId);
        riderList.push(risk);
        checkedList.push(risk.riskId);
        newProductRiskList.push(risk);
      }
    });

    state.value.disabledList = disabledList;
    state.value.checkedList = checkedList;
    state.value.productRiskList = newProductRiskList;
  },
  {
    deep: true,
    immediate: true,
  },
);
</script>

<style lang="scss" scoped>
.com-product-list-wrapper {
  .content {
    padding: 0 $zaui-card-border;
  }

  .premium-total {
    padding: 0 $zaui-card-border;
    font-size: 26px;
    font-weight: 400;
    color: #333333;
    margin: 20px 0 30px;
    .premium {
      color: $zaui-price;
      font-weight: 600;
    }
  }
  .risk-item-wrapper {
    margin: $zaui-card-border;
    padding-bottom: 20px;
    background-color: #f6f6fa;
    border-radius: 20px;
    :deep(.card-title) {
      .van-cell {
        background-color: #f6f6fa;
        padding-bottom: 0;
        border-radius: 20px;
      }
      &::after {
        display: none;
      }
    }
    .premium {
      color: $zaui-price;
      font-weight: 600;
    }
    .risk-premium {
      display: inline-flex;
      align-items: center;
      color: #333333;
      font-weight: 400;
      font-size: 26px;
    }
    .risk-factor {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
      border-bottom: 1px dashed $zaui-line;

      .factor {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 28px 0 20px 0;
        .factor-value {
          width: 100%;
          text-align: center;
          font-size: 28px;
          font-family: Arial-BoldMT, Arial, self;
          font-weight: normal;
          color: #393d46;
          line-height: 32px;
          margin-bottom: 8px;
        }
        .factor-name {
          width: 100%;
          font-size: 24px;
          font-family: PingFangSC-Regular, PingFang SC, serif;
          font-weight: 400;
          color: #99a9c0;
          line-height: 33px;
        }
      }
    }
    .operate-bar-wrap {
      display: flex;
      align-content: center;
      justify-content: space-between;
      height: 60px;
      .operate-bar {
        display: flex;
      }
      .border {
        border: 2px solid #e6e6eb;
      }
      :deep(.com-check-btn) {
        margin-left: 16px;
        background-color: #ffffff;
      }
      .btn-rider-risk {
        display: flex;
        align-items: center;
        .btn-plus {
          font-size: 36px;
          margin: 0 10px 10px;
        }
      }
    }
  }
}
</style>
