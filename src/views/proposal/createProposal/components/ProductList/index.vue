<!--
 * @Author: za-qixuchao qixuchao@zhongan.io
 * @Date: 2022-07-14 16:43:35
 * @LastEditors: za-qixuchao qixuchao@zhongan.io
 * @LastEditTime: 2022-07-31 21:57:05
 * @FilePath: /zat-planet-h5-cloud-insure/src/views/proposal/createProposal/components/ProductList/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="com-product-list-wrapper">
    <div v-for="risk in productRiskList" :key="risk.riskId">
      <div class="risk-item-wrapper">
        <ProTitle :risk-type="risk.riskType" :title="risk.riskName" />
        <div class="content">
          <div class="risk-premium">
            保费:<span class="premium">￥{{ risk.premium.toLocaleString() }}</span>
          </div>
          <div class="risk-factor">
            <div class="factor">
              <span class="factor-value">{{ risk.amount.toLocaleString() }}</span>
              <span class="factor-name"> 保额(元) </span>
            </div>
            <div class="factor">
              <span class="factor-value">{{ pickNameInList(RISK_INSURANCE_PERIOD, risk.coveragePeriod) }}</span>
              <span class="factor-name"> 保障期间 </span>
            </div>
            <div class="factor">
              <span class="factor-value">{{ pickNameInList(RISK_PAYMENT_PERIOD, risk.chargePeriod) }}</span>
              <span class="factor-name"> 缴费期间 </span>
            </div>
          </div>
          <div class="operate-bar">
            <ProCheckButton v-if="productNum" :round="32" class="border" @click="deleteRisk(risk)">删除</ProCheckButton>
            <ProCheckButton
              v-if="productData?.riskDetailVOList?.[0]?.optionalRiderRiskVOList?.length"
              activated
              :round="32"
              @click="addRisk(risk)"
              >+ 附加险</ProCheckButton
            >
            <ProCheckButton activated :round="32" @click="updateRisk(risk)">修改</ProCheckButton>
          </div>
        </div>
      </div>
      <div v-for="riderRisk in risk.riderRiskVOList" :key="riderRisk.riskCode" class="risk-item-wrapper">
        <ProTitle :risk-type="riderRisk.riskType" :title="riderRisk.riskName" />
        <div class="content">
          <div class="risk-premium">
            保费:<span class="premium">￥{{ riderRisk.premium.toLocaleString() }}</span>
          </div>
          <div class="risk-factor">
            <div class="factor">
              <span class="factor-value">{{ risk.amount.toLocaleString() }}</span>
              <span class="factor-name"> 保额(元) </span>
            </div>
            <div class="factor">
              <span class="factor-value">{{ pickNameInList(RISK_INSURANCE_PERIOD, riderRisk.coveragePeriod) }}</span>
              <span class="factor-name"> 保障期间 </span>
            </div>
            <div class="factor">
              <span class="factor-value">{{ pickNameInList(RISK_PAYMENT_PERIOD, riderRisk.chargePeriod) }}</span>
              <span class="factor-name"> 缴费期间 </span>
            </div>
          </div>
          <div class="operate-bar">
            <ProCheckButton :round="32" class="border" @click="deleteRisk(riderRisk)">删除</ProCheckButton>
            <ProCheckButton
              v-if="productData?.riskDetailVOList?.[0]?.optionalRiderRiskVOList?.length"
              activated
              :round="32"
              @click="addRisk(riderRisk)"
              >+ 附加险</ProCheckButton
            >
            <ProCheckButton activated :round="32" @click="updateRisk(riderRisk)">修改</ProCheckButton>
          </div>
        </div>
      </div>
      <div class="premium-total">
        保费: <span class="premium">￥{{ state.totalPremium.toLocaleString() }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { withDefaults } from 'vue';
import { useToggle } from '@vant/use';
import { ProposalProductRiskItem, ProposalInsuredProductItem } from '@/api/modules/createProposal.data';
import { ProductData } from '@/api/modules/trial.data';
import { pickNameInList } from '@/utils';
import RiskRelationList from '../RiskRelationList/index.vue';
import useDict from '@/hooks/useDicData';

interface Props {
  productRiskList: ProposalProductRiskItem[];
  productInfo: Partial<ProposalInsuredProductItem>;
  productData: Partial<ProductData>;
  pickProductPremium: (type: any) => void;
  productNum: number;
}

interface State {
  checkedList: any[];
  disabledList: any[];
  riderRiskList: ProposalProductRiskItem[];
  mainRiskData: ProductData;
  totalPremium: number;
  currentRiskRecord: ProposalProductRiskItem;
}

const props = withDefaults(defineProps<Props>(), {
  productRiskList: () => [],
  productInfo: () => ({}),
  productData: () => ({}),
  pickProductPremium: () => {},
  productNum: 0,
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
});

const RISK_PAYMENT_PERIOD = useDict('RISK_PAYMENT_PERIOD');

const RISK_INSURANCE_PERIOD = useDict('RISK_INSURANCE_PERIOD');

const riderRiskList = computed(() => {
  return props.productData?.riskDetailVOList?.[0].optionalRiderRiskVOList || [];
});

const collocationRiderList = computed(() => {
  return props.productData?.riskDetailVOList?.[0].collocationVOList || [];
});

const deleteRisk = (riskRecord: ProposalProductRiskItem) => {
  emits('deleteRisk', riskRecord, props.productInfo);
};

const updateRisk = (riskRecord: ProposalProductRiskItem) => {
  emits('updateRisk', riskRecord, props.productInfo);
};

const addRisk = (riskRecord: ProposalProductRiskItem) => {
  state.value.currentRiskRecord = riskRecord;
  emits('addRiderRisk', props.productInfo);
};

watch(
  () => props.productInfo,
  (newVal) => {
    let productPremium = 0;
    const calcProduct = (riskList: ProposalProductRiskItem[]) => {
      riskList.forEach((risk: ProposalProductRiskItem) => {
        productPremium += risk.premium;
        if (risk.riderRiskVOList?.length) {
          calcProduct(risk.riderRiskVOList);
        }
      });
    };
    calcProduct(newVal.proposalProductRiskList || []);
    props?.pickProductPremium?.({ [`${newVal.productId}`]: productPremium });
    state.value.totalPremium = productPremium;
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
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #333333;
    margin: 20px 0 30px;
    .premium {
      color: #ff5840;
      font-weight: 600;
    }
  }
  .risk-item-wrapper {
    margin: $zaui-card-border;
    background-color: #f6f6fa;
    border-radius: 20px;
    :deep(.card-title) {
      .van-cell {
        background-color: #f6f6fa;
        padding-bottom: 0;
        border-radius: 20px;
      }
    }
    .premium {
      color: $zaui-price;
    }
    .risk-premium {
      color: #333333;
      font-weight: 400;
      font-size: 26px;
    }
    .risk-factor {
      display: flex;
      justify-content: space-between;

      .factor {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 28px 0 41px 0;
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
    .operate-bar {
      display: flex;
      align-content: center;
      justify-content: flex-end;
      padding-bottom: 20px;
      .border {
        border: 2px solid #e6e6eb;
      }
      :deep(.com-check-btn) {
        margin-left: 16px;
      }
    }
  }
}
</style>
