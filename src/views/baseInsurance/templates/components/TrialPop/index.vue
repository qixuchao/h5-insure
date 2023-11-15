<template>
  <div v-if="!hidePopupButton" :class="`trial-button ${$attrs.class}`">
    <TrialButton
      :is-share="currentShareInfo.isShare"
      :premium="state.trialResultPremium"
      :share-info="currentShareInfo"
      loading-text=""
      :plan-code="props.dataSource.planCode"
      :payment-frequency="defaultPaymentType"
      :tenant-product-detail="tenantProductDetail"
      @handle-click="open"
      >立即投保</TrialButton
    >
  </div>
  <ProPopup
    v-if="state.isAniShow || state.show"
    :class="`com-trial-wrap ${$attrs.class}`"
    :show="state.show"
    :closeable="false"
    @close="onClosePopup"
    @closed="onClosePopupAfterAni"
  >
    <div class="trial-wrap">
      <TrialBody
        ref="insureInfosRef"
        :product-collection="dataSource"
        :product-factor="[]"
        :default-data="state.defaultData"
        :product-risk-code-map="productRiskCodeMap"
        hide-benefit
        :update-risk-code="updateRiskCode"
        @trial-start="handleTrialStart"
        @trial-end="handleTrialEnd"
      >
        <template #trialHead>
          <div class="pop-header">
            <span class="header-title">{{ title }}</span>
            <van-icon name="cross" @click="state.show = false" />
          </div>
        </template>
        <template #trialBtn="scope">
          <slot name="trialBtn" v-bind="scope">
            <TrialButton
              :is-share="currentShareInfo.isShare"
              :premium="scope.riskPremium?.initialPremium"
              :share-info="currentShareInfo"
              :loading-text="state.trialMsg"
              :plan-code="props.dataSource.planCode"
              :payment-frequency="
                scope.trialData?.insuredList?.[0].productList?.[0].riskList?.[0]?.paymentFrequency + ''
              "
              :tenant-product-detail="tenantProductDetail"
              :handle-share="(cb) => onShare(cb, scope.trialData)"
              @handle-click="onNext(scope.trialData)"
              >立即投保</TrialButton
            >
          </slot>
        </template>
      </TrialBody>
    </div>
  </ProPopup>
</template>

<script lang="ts" setup name="TrialPop">
import { withDefaults, ref, defineExpose } from 'vue';
import { Toast } from 'vant/es';
import debounce from 'lodash-es/debounce';
import cloneDeep from 'lodash-es/cloneDeep';
import { useRouter, useRoute } from 'vue-router';
import { isEqual } from 'lodash-es';
import cancelIcon from '@/assets/images/baseInsurance/cancel.png';
import { PersonalInfo } from '@/views/baseInsurance/templates/long/InsureInfos/components/index';
import TrialButton from '../TrialButton.vue';
import InsureInfos from '../../long/InsureInfos/index.vue';
import ProductRiskList from '../../long/ProductRiskList/index.vue';
import Benefit from '../Benefit/index.vue';
import { PremiumCalcData, RiskVoItem } from '@/api/modules/trial.data';
import { RISK_TYPE, RISK_TYPE_ENUM } from '@/common/constants/trial';
import HeadWaring from '../HeadWarning/index.vue';
import {
  benefitCalc,
  premiumCalc,
  queryCalcDefaultInsureFactor,
  queryCalcDynamicInsureFactor,
  underWriteRule,
} from '@/api/modules/trial';
import { SUCCESS_CODE } from '@/api/code';
import { PRODUCT_KEYS_CONFIG } from '../../long/InsureInfos/components/ProductKeys/config';
import { dealExemptPeriod, getRelationText } from './utils';
import useOrder from '@/hooks/useOrder';
import { formData2Order, trialData2Order } from '../../utils';
import { ProductDetail, ProductDetail as ProductData } from '@/api/modules/newTrial.data';
import { CERT_TYPE_ENUM, PAGE_ACTION_TYPE_ENUM } from '@/common/constants';
import { transformData } from '@/views/baseInsurance/utils';
import { BUTTON_CODE_ENUMS, PAGE_CODE_ENUMS } from '../../long/constants';
import { nextStepOperate as nextStep } from '../../../nextStep';
import pageJump from '@/utils/pageJump';
import { jumpToNextPage } from '@/utils';

const TrialBody = defineAsyncComponent(() => import('../Trial/index.vue'));

const RISK_SELECT = [
  { value: 1, label: '投保' },
  { value: 2, label: '不投保' },
];

interface Props {
  dataSource: any[];
  productInfo: any;
  shareInfo: any;
  tenantProductDetail: any;
  hideBenefit: boolean;
  hidePopupButton: boolean;
  title: string;
  defaultData: any;
  currentOrderDetail?: any;
  updateRiskCode?: string;
  insurerList: any[];
}

const LOADING_TEXT = '试算中...';

const insureInfosRef = ref(null);

const route = useRoute();
const router = useRouter();

const { tenantId, templateId, preview } = route.query;

const props = withDefaults(defineProps<Props>(), {
  dataSource: () => [],
  productInfo: () => {
    return { productCode: '', productName: '', insurerCode: '', tenantId: '', planList: [] };
  },
  shareInfo: () => ({}),
  tenantProductDetail: () => ({}),
  title: '算一算保费',
  /**
   * 是否隐藏利益演示
   */
  hideBenefit: false,
  /**
   * 隐藏弹窗操作按钮
   */
  hidePopupButton: false,
  defaultData: null,
  currentOrderDetail: null,
  updateRiskCode: '',
  insurerList: () => [],
});

const state = reactive({
  loading: false,
  show: false,
  select: {},
  list: [],
  userData: {} as RiskVoItem,
  riskIsInsure: {},
  submitData: {} as PremiumCalcData,
  riskVOList: [{}] as Array<Partial<RiskVoItem>>,
  mainRiskVO: {} as Partial<RiskVoItem>,
  ifPersonalInfoSuccess: false,
  trialMsg: '',
  trialResultPremium: 0,
  trialResult: {
    initialPremium: 0,
    initialAmount: 0,
  },
  isAniShow: false,
  defaultValue: null, // 是一个plan
  isAutoChange: false,
  planIndex: 0,
  isSkipFirstTrial: false, // 是否跳过默认值表单触发的第一次试算
  hadSkipFirstTrial: false,
});

const orderDetail = ref();
const defaultOrderDetail = useOrder();
const iseeBizNo = ref<string>();
const currentShareInfo = ref<any>();

const premiumMap = ref();

watch(
  () => props.defaultData,
  (val, oldVal) => {
    console.log('state.defaultData', state.defaultData);
    if (isEqual(val, oldVal)) {
      return;
    }

    state.defaultData = cloneDeep(props.defaultData) || {};
    state.defaultData.insuredList = state.defaultData?.insuredList.map((insured) => {
      return {
        ...insured,
        productList: props.insurerList?.[0]?.productList.filter(
          (product) => product.productCode === props.productInfo?.productCode,
        ),
      };
    });
  },
  {
    deep: true,
    immediate: true,
  },
);

const onNext = (trialData) => {
  insureInfosRef.value.onNext();
  // if (preview) {
  //   jumpToNextPage(PAGE_CODE_ENUMS.TRIAL_PREMIUM, route.query);
  //   return;
  // }

  // if (state.trialResult.initialPremium) {
  //   // 验证
  //   Object.assign(orderDetail.value, {
  //     extInfo: {
  //       ...orderDetail.value.extInfo,
  //       buttonCode: BUTTON_CODE_ENUMS.TRIAL_PREMIUM,
  //       pageCode: PAGE_CODE_ENUMS.TRIAL_PREMIUM,
  //       templateId,
  //     },
  //   });
  //   const currentOrderDetail = trialData2Order(trialData, state.trialResult, orderDetail.value);
  //   nextStep(currentOrderDetail, (data, pageAction) => {
  //     if (pageAction === PAGE_ACTION_TYPE_ENUM.JUMP_PAGE) {
  //       pageJump(data.nextPageCode, { ...route.query, orderNo: data.orderNo });
  //     }
  //   });
  //   console.log('---- validate success ----');

  //   state.loading = false;
  //   state.show = true;
  //   state.isAniShow = true;
  // }
};

const onClosePopup = () => {
  console.log('---close');
  state.show = false;
  state.loading = false;
};

// 利益演示数据
const benefitData = ref({
  // benefitRiskResultVOList: [],
  // showTypList: [],
});

const DYNAMIC_FACTOR_PARAMS = ['annuityDrawDate', 'coveragePeriod', 'chargePeriod'];

const onClosePopupAfterAni = () => {
  state.isAniShow = false;
};

const handleRestState = () => {
  state.select = {};
  state.list = [];
  state.userData = {} as RiskVoItem;
  state.riskIsInsure = {};
  state.submitData = {} as PremiumCalcData;
  state.riskVOList = [{}] as Array<Partial<RiskVoItem>>;
  state.mainRiskVO = {} as Partial<RiskVoItem>;
  state.ifPersonalInfoSuccess = false;
  state.trialMsg = '';
  state.trialResultPremium = 0;
};

const handleTrialStart = () => {
  state.trialMsg = LOADING_TEXT;
  state.trialResultPremium = 0;
  state.loading = true;
};

const handleTrialEnd = (result: any) => {
  state.trialMsg = '';
  state.trialResultPremium = result.initialPremium;
  state.trialResult = result;
  state.loading = false;
};

onMounted(() => {
  state.loading = true;
});

watch(
  () => props.currentOrderDetail,
  (value) => {
    orderDetail.value = value || defaultOrderDetail.value;
  },
  {
    deep: true,
    immediate: true,
  },
);

// 默认的交费方式
const defaultPaymentType = ref<string>();

watch(
  () => props.tenantProductDetail,
  () => {
    const currentPremiumData =
      (props?.tenantProductDetail?.PREMIUM || []).find((plan) => {
        return !plan.planCode || plan.planCode === props?.dataSource?.planCode;
      }) || {};

    defaultPaymentType.value = (currentPremiumData.data || []).sort(
      (v1, v2) => +v2.paymentFrequency - +v1.paymentFrequency,
    )?.[0]?.paymentFrequency;
  },
  {
    deep: true,
    immediate: true,
  },
);

watch(
  () => state.show,
  (v) => {
    if (v) {
      // 每个附加险的投保不投保状态重置
      handleRestState();
    }
  },
);

const open = () => {
  state.show = true;
  state.isAniShow = true;
  state.isSkipFirstTrial = true;
  state.hadSkipFirstTrial = false;
};

defineExpose({
  open,
  close: onClosePopup,
  getTrialSuccessFlag: () => {
    return state.trialResultPremium > 0;
  },
});

watch(
  () => props.shareInfo,
  () => {
    currentShareInfo.value = props.shareInfo;
  },
  {
    deep: true,
    immediate: true,
  },
);
</script>

<style scope lang="scss">
.trial-button {
  padding: 30px;
  text-align: right;
  background-color: #fff;
  .van-button {
    width: 270px;
  }
  .price {
    text-align: left;
  }
}

.trial-wrap {
  height: 100%;
  overflow-y: scroll;
}
.com-body {
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  border-radius: 40px 40px 0 0;
  .pop-header {
    padding: 0 30px;
    display: flex;
    justify-content: space-between;
    border-radius: 20px 20px 0 0;
    height: 110px;
    font-size: 36px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #333;
    line-height: 40px;
    align-items: center;
    border-bottom: 1px solid #eeeeee;
    i {
      font-size: 40px;
    }
    span {
      width: 600px;
      text-align: left;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .trial-body {
    overflow-y: scroll;
    flex: 1;
  }
  .container {
    padding: 0 30px;
    // overflow-y: scroll;
    flex: 1;
    .empty {
      width: 100%;
      height: 180px;
    }
    &::-webkit-scrollbar {
      display: none;
    }
    :deep(.risk-select-field) {
      display: inline-flex;
      padding: 0;
      align-items: center;
      :deep(.van-field__label) {
        color: black;
      }
    }

    .risk2-field {
    }

    :deep(.com-pro-form-with-card) {
      .header {
        margin-left: 0;
      }
    }

    :deep(.add-button-wrap) {
      margin-top: -20px;
      padding-left: 0;
      &::after {
        width: 100%;
        left: 0;
      }
    }

    // 表单样式
    :deep(.com-pro-field),
    :deep(.com-van-field) {
      padding-left: 0;
      padding-right: 0;
      &::after {
        left: 0;
        right: 0;
      }
    }
  }
}
</style>
