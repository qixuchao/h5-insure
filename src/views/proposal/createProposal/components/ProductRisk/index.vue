<template>
  <ProPopup v-model:show="showPop" class="popup-risk-select" :closeable="false">
    <div class="popup-container">
      <div class="popup-header">
        <span class="clear-all" @click="handleClear"> 清空选项 </span>
        <span class="title"> {{ title }} </span>
        <span class="close" @click="handleCancel">X</span>
      </div>
      <p class="tip">已为您筛选符合被保人年龄、性别的附加险</p>
      <div class="search">
        <ProSearch v-model="searchValue" placeholder="请输入附加险名称" @search="getRiskList"> </ProSearch>
      </div>
      <div v-if="riskList?.length" class="risk-list">
        <van-checkbox-group v-model="checked">
          <van-cell-group inset>
            <template v-for="{ riskCode, riskName } in riskList" :key="riskCode">
              <van-cell clickable :title="riskName" @click="handleClick(riskCode)">
                <template #right-icon>
                  <van-checkbox
                    :ref="(el) => (checkboxRefs[index] = el)"
                    :name="riskCode"
                    @click.stop="handleClick(riskCode)"
                  />
                </template>
              </van-cell>
              <InsureInfos
                v-if="riskValueCollection[riskCode]?.riskDetail"
                ref="insureInfosRef"
                class="insure-part"
                :origin-data="riskValueCollection[riskCode]?.riskDetail"
                :default-value="riskValueCollection[riskCode]?.defaultValue"
                @trial-change="(data, changeData) => handleTrialInfoChange(data, changeData, productCode)"
              ></InsureInfos>
              <ProductTips
                v-if="riskValueCollection[riskCode]?.errorMessage"
                :error-msg="riskValueCollection[riskCode]?.errorMessage"
              />
            </template>
          </van-cell-group>
        </van-checkbox-group>
      </div>
      <ProEmpty
        v-else
        :title="`暂无关联${type === RISK_TYPE_ENUM.MAIN_RISK ? '主' : '附加'}险、请选择其他险种`"
      ></ProEmpty>
      <div class="footer-button">
        <ProShadowButton :shadow="false" :disabled="!validateRiskList?.length" @click="handleConfirm">
          <slot>确定</slot>
        </ProShadowButton>
      </div>
    </div>
  </ProPopup>
</template>
<script setup lang="ts" name="riskSelect">
import { withDefaults } from 'vue';
import { useRoute } from 'vue-router';
import { Toast } from 'vant';
import { cloneDeep, debounce, findLastIndex, findIndex } from 'lodash-es';
import { queryProposalRiderRiskList } from '@/api/modules/createProposal';
import { RISK_TYPE_ENUM } from '@/common/constants/trial';
import InsureInfos from '@/views/baseInsurance/templates/components/Trial/InsureInfos.vue';
import { queryCalcDynamicInsureFactor, queryDefaultRiskInsureFactor } from '@/api/modules/trial';
import ProShadowButton from '@/views/baseInsurance/templates/components/ProShadowButton/index.vue';
import ProductTips from '@/views/proposal/proposalList/components/ProductTips.vue';

interface Props {
  type: 1 | 2;
  show: boolean;
  title: string;
  holder: any;
  insuredList: any[];
  mainRisk?: any;
  selectList: any[];
  currentProduct: any;
  currentRiskData: any;
}

const props = withDefaults(defineProps<Props>(), {
  type: 2,
  show: false,
  title: '添加附加险',
  insuredList: () => [],
  holder: () => ({}),
  mainRisk: () => ({}),
  selectList: () => [],
  currentProduct: () => ({}),
  currentRiskData: () => ({}),
});

const route = useRoute();

const { insurerCode = 'lianlife' } = route.query;

const emits = defineEmits(['cancel', 'confirm']);

const checked = ref<Array<string>>([]);
const riskList = ref<any[]>([]);
const riskRelationList = ref([]); // 附加险关联关系列表
const searchValue = ref<string>();
const showPop = computed(() => props.show);
const riskValueCollection = ref({}); // 附加险默认值集合
const checkboxRefs = ref([]);
const validateRiskList = ref([]);

const toggle = (index) => {
  checkboxRefs.value[index].toggle();
};

const handleCancel = () => {
  emits('cancel');
};

const handleClear = () => {
  checked.value = [];
};

const handleConfirm = () => {
  if (!checked.value?.length) {
    Toast(`暂未添加任何${props.type === RISK_TYPE_ENUM.MAIN_RISK ? '主' : '附加'}险`);
    return;
  }

  const startIndex = findIndex(props.currentProduct.riskList, (risk) => risk.riskCode === props.mainRisk.riskCode);
  const endIndex = findLastIndex(
    props.currentProduct.riskList,
    (risk) => risk.mainRiskCode === props.mainRisk.riskCode,
  );

  let insertIndex = startIndex;

  if (endIndex !== -1) {
    insertIndex = endIndex;
  }

  const currentRiskList = [
    ...props.currentProduct.riskList.slice(0, insertIndex + 1),
    ...validateRiskList.value,
    ...props.currentProduct.riskList.slice(insertIndex + 1),
  ];

  const trialParams = {
    holder: props.holder,
    insuredList: props.insuredList.map((insured) => {
      insured.productList = [{ ...props.currentProduct, riskList: currentRiskList }];
      return insured;
    }),
  };

  emits('confirm', trialParams);
};

// 获取已选择险种的默认值
const getRiskDefaultValue = async (riskCodeList: string[]) => {
  const { code, data } = await queryDefaultRiskInsureFactor(
    {
      holder: props.holder,
      insuredList: props.insuredList,
      calcRiskDefaultFactorVO: {
        mainRiskInfo: props.mainRisk,
        riskCodeList,
      },
    },
    { loading: true },
  );

  if (code === '10000') {
    data.reduce((riskMap, { insureProductRiskVO, errorMessage, ...riskInfo }) => {
      riskMap[riskInfo.riskCode] = {
        defaultValue: riskInfo,
        riskDetail: insureProductRiskVO,
        errorMessage,
      };
      return riskMap;
    }, riskValueCollection.value);
  }
};

const DYNAMIC_FACTOR_PARAMS = ['annuityDrawDate', 'coveragePeriod', 'chargePeriod', 'paymentFrequency'];

const handleTrialInfoChange = async (data, changeData, productCode) => {
  if (changeData) {
    const DyData = cloneDeep(data);
    delete DyData.insurancePeriodValueList;
    delete DyData.paymentFrequencyList;
    delete DyData.paymentPeriodValueList;
    const hasDyChange =
      DYNAMIC_FACTOR_PARAMS.indexOf(changeData.key) >= 0 && `${changeData.oldValue}` !== `${changeData.newValue}`;
    // 需要请求dy接口
    if (hasDyChange) {
      const changeVO = {};
      switch (changeData.key) {
        case 'annuityDrawDate': {
          changeVO.changeType = 3;
          break;
        }
        case 'coveragePeriod': {
          changeVO.changeType = 2;
          break;
        }
        case 'chargePeriod': {
          changeVO.changeType = 1;
          break;
        }
        case 'paymentFrequency': {
          changeVO.changeType = 4;
          break;
        }
        default: {
          break;
        }
      }

      const riskInfoList = [];
      const riskEditVOList = [
        {
          insureProductRiskVO: props.currentRiskData,
          insureRiskEditReqVO: props.mainRisk,
        },
        {
          insureProductRiskVO: riskValueCollection.value[data.riskCode]?.riskDetail,
          insureRiskEditReqVO: {
            riskId: data.riskId,
            riskCode: data.riskCode,
            ...DyData,
            ...changeVO,
          },
        },
      ];

      const insuredList = props.insuredList.filter((insured) => insured.birthday) || [];
      if (!insuredList.length) {
        return false;
      }
      const dyResult = await queryCalcDynamicInsureFactor({
        calcProductFactorList: [
          {
            planCode: '',
            productCode,
            riskEditVOList,
          },
        ],
        insuredVOList: insuredList,
        holderVO: props.holder,
      });
    }
  }
  return true;
};

// 实现附加险与附加险之间的绑定和互斥交互
const handleClick = (riskCode) => {
  if (props.type === RISK_TYPE_ENUM.RIDER_RISK) {
    (riskRelationList.value || []).forEach((risk) => {
      if (!checked.value.includes(riskCode)) {
        if (riskCode === risk.relatedRiskCode) {
          // 绑定
          if (risk.collocationType === 2) {
            checked.value = checked.value.filter((code) => code !== risk.collocationRiskCode);
          }
          // 互斥
          if (risk.collocationType === 3) {
            checked.value.push(riskCode);
            checked.value = checked.value.filter((code) => code !== risk.collocationRiskCode);
          }
        } else if (riskCode === risk.collocationRiskCode) {
          // 绑定
          if (risk.collocationType === 2) {
            checked.value = checked.value.filter((code) => code !== risk.relatedRiskCode);
          }
          // 互斥
          if (risk.collocationType === 3) {
            checked.value = checked.value.filter((code) => code !== risk.relatedRiskCode);
          }
        }
      } else {
        if (riskCode === risk.relatedRiskCode) {
          // 绑定
          if (risk.collocationType === 2) {
            checked.value.push(risk.collocationRiskCode);
          }
          // 互斥
          if (risk.collocationType === 3) {
            checked.value.push(riskCode);
            checked.value = checked.value.filter((code) => code !== risk.collocationRiskCode);
          }
        } else if (riskCode === risk.collocationRiskCode) {
          // 绑定
          if (risk.collocationType === 2) {
            checked.value.push(risk.relatedRiskCode);
          }
          // 互斥
          if (risk.collocationType === 3) {
            checked.value = checked.value.filter((code) => code !== risk.relatedRiskCode);
          }
        }
      }
    });
  }
  checked.value = [...new Set(checked.value)];
};

const getRiskList = async () => {
  const params = {
    insuredList: [] || props.insuredList,
    holder: {} || props.holder || {},
    mainRiskCode: props.mainRisk.riskCode,
    insureCode: insurerCode,
    productCategory: '',
    keyword: searchValue.value,
    selectRiskCodes: props.selectList,
  };

  const { code, data } = await queryProposalRiderRiskList(params);
  if (code === '10000') {
    riskList.value = data.riskInfoList;
    riskRelationList.value = data.collocationInfoResList;
  }
};

watch(
  () => checked.value,
  debounce((val) => {
    const currentRiskCollection = {};
    Object.keys(riskValueCollection.value).reduce((coll, riskCode) => {
      if ((val || []).includes(riskCode)) {
        coll[riskCode] = riskValueCollection.value[riskCode];
      }
      return coll;
    }, currentRiskCollection);
    riskValueCollection.value = currentRiskCollection;

    const currentCheckedList = (val || []).filter((code) => !Object.keys(riskValueCollection.value).includes(code));

    if (currentCheckedList?.length) {
      getRiskDefaultValue(currentCheckedList);
    }
  }, 1000),
  {
    immediate: true,
    deep: true,
  },
);
watch(
  () => riskValueCollection.value,
  (val) => {
    validateRiskList.value = Object.keys(riskValueCollection.value || {}).reduce((coll, riskCode) => {
      if (!riskValueCollection.value[riskCode]?.errorMessage) {
        coll.push(riskValueCollection.value[riskCode].defaultValue);
      }
      return coll;
    }, []);
  },
  {
    immediate: true,
    deep: true,
  },
);

onMounted(() => {
  getRiskList();
});
</script>

<style lang="scss" scoped>
.popup-container {
  padding: 0 $zaui-card-border;
  height: 100%;
  :deep(.search-wrap) {
    padding: 0;
  }

  :deep(.van-cell-group--inset) {
    margin: 0;
    .van-cell {
      padding: 15px 0;
      height: 106px;
      display: flex;
      align-items: center;
      &:after {
        width: 100%;
        left: 0;
        right: 0;
      }
    }
  }
  .insure-part {
    background-color: rgba(244, 245, 249, 0.5);
    border-radius: 20px;
  }
}
.tip {
  font-size: 26px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);
  line-height: 37px;
  margin-top: 20px;
}
.com-za-empty {
  margin-top: 120px;
}
.popup-risk-select {
  .popup-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 32px;
    font-weight: 600;
    color: #333333;
    line-height: 100px;
    .clear-all {
      font-size: 32px;
      font-weight: 400;
      color: #999999;
      line-height: 45px;
    }
    .close {
      font-size: 32px;
      font-weight: 400;
      color: var(--van-primary-color);
      line-height: 45px;
    }
  }
  .search {
    :deep(.van-search) {
      padding: 16px 0;
    }
    :deep(.van-search__field) {
      .van-field__value {
        .van-field__body {
          width: 100%;
        }
      }
    }
  }
  .risk-list {
    height: calc(100% - 390px);
    overflow-y: auto;
    padding-bottom: 60px;
    :deep(.van-checkbox-group) {
      margin: 0;
      .van-checkbox {
        padding: 0;
        display: flex;
        align-items: center;
        position: relative;
        &:before {
          content: '';
          position: absolute;
          width: 100%;
          height: 1px;
          background-color: $zaui-line;
          transform: scaleY(0.5);
          bottom: 0;
        }
        .van-cell__title {
          margin-left: $zaui-card-border;
        }
      }
    }
  }
}
</style>
