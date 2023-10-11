<template>
  <ProPopup v-model:show="show" class="popup-risk-select" :closeable="false">
    <div class="popup-container">
      <div class="popup-header">
        <span class="clear-all" @click="handleCancel"> 取消 </span>
        <span class="title"> {{ title }} </span>
        <span class="close" @click="handleConfirm">确认</span>
      </div>
      <p class="tip">已为您挑选出以下险种</p>
      <div class="search">
        <van-search
          v-model="searchValue"
          shape="round"
          placeholder="请输入产品名称进行搜索"
          clear-trigger="always"
          show-action
          clearable
          @search="getRiskList"
        ></van-search>
      </div>
      <div v-if="riskList?.length" class="risk-list">
        <van-checkbox-group v-model="checked">
          <van-checkbox
            v-for="risk in riskList"
            :key="risk.riskCode || risk.productCode"
            :name="risk.riskCode || risk.productCode"
            @click="() => handleClick(risk.riskCode)"
            >{{ risk.riskName || risk.productName }}</van-checkbox
          >
        </van-checkbox-group>
      </div>
      <ProEmpty
        v-else
        :title="`暂无关联${type === RISK_TYPE_ENUM.MAIN_RISK ? '主' : '附加'}险、请选择其他险种`"
      ></ProEmpty>
    </div>
  </ProPopup>
</template>
<script setup lang="ts" name="riskSelect">
import { withDefaults } from 'vue';
import { useRoute } from 'vue-router';
import { Toast } from 'vant';
import { queryRiderRiskList, queryListMainProduct } from '@/api/modules/trial';
import { RISK_TYPE_ENUM } from '@/common/constants/trial';

interface Props {
  type: 1 | 2;
  show: boolean;
  title: string;
  insuredList: any[];
  mainRiskCode?: string;
  selectList: any[];
  currentProductCode: string;
}

const props = withDefaults(defineProps<Props>(), {
  type: 2,
  show: false,
  insuredList: () => [],
  mainRiskCode: '',
  selectList: () => [],
  currentProductCode: '',
});

const route = useRoute();

const { insurerCode } = route.query;

const emits = defineEmits(['cancel', 'confirm']);

const checked = ref<Array<string>>([]);
const riskList = ref<any[]>([]);
const riskRelationList = ref([]); // 附加险关联关系列表
const searchValue = ref<string>();
const show = computed(() => props.show);

const handleCancel = () => {
  emits('cancel');
};
const handleConfirm = () => {
  if (!checked.value?.length) {
    Toast(`暂未添加任何${props.type === RISK_TYPE_ENUM.MAIN_RISK ? '主' : '附加'}险`);
    return;
  }

  let selectedList = [];
  if (props.type === RISK_TYPE_ENUM.RIDER_RISK) {
    selectedList = checked.value;
  } else {
    selectedList = riskList.value
      .filter((product) => checked.value.includes(product.productCode))
      .map((product) => {
        return {
          productCode: product.productCode,
          mergeRiskReqList: (product.mainRiskCollocationList || []).map((risk) => ({
            riskCode: risk.collocationRiskCode,
            riskType: risk.mainRiskCode ? 2 : 1,
            mainRiskCode: risk.mainRiskCode,
          })),
        };
      });
  }

  emits('confirm', selectedList);
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
    insuredList: props.insuredList,
    mainRiskCode: props.mainRiskCode,
    insurerCode,
    productCategory: '',
    keyword: searchValue.value,
    selectProductCodes: [],
    selectRiskCodes: [],
    filterFlag: props.selectList?.length ? 1 : 2,
  };

  params.selectProductCodes = props.selectList.map((product) => {
    if (product.productCode === props.currentProductCode) {
      params.selectRiskCodes.push(...product.mergeRiskReqList.map((risk) => risk.riskCode));
    }
    return product.productCode;
  });

  if (props.type === RISK_TYPE_ENUM.MAIN_RISK) {
    const { code, data } = await queryListMainProduct(params);
    if (code === '10000') {
      riskList.value = data;
    }
  } else {
    const { code, data } = await queryRiderRiskList(params);
    if (code === '10000') {
      riskList.value = data.riskInfoList;
      riskRelationList.value = data.collocationInfoResList;
    }
  }
};

onMounted(() => {
  getRiskList();
});

// watch(
//   () => checked.value,
//   () => {
//     if (props.type === RISK_TYPE_ENUM.RIDER_RISK) {
//       riskRelationList.value.forEach((risk) => {
//         if (checked.value.includes(risk.relatedRiskCode)) {
//           // 绑定
//           if (risk.collocationType === 2) {
//             checked.value.push(risk.relatedRiskCode);
//           }

//           // 互斥
//           if (risk.collocationType === 3) {
//             checked.value = checked.value.filter((code) => code !== risk.relatedRiskCode);
//           }
//         } else {
//           // 绑定
//           if (risk.collocationType === 2) {
//             checked.value = checked.value.filter((code) => code !== risk.relatedRiskCode);
//           }

//           // 互斥
//           // if (risk.collocationType === 3) {
//           // }
//         }
//       });
//     }
//   },
//   {
//     deep: true,
//   },
// );
</script>

<style lang="scss" scoped>
.popup-container {
  padding: 0 $zaui-card-border;
}
.tip {
  font-size: 26px;
  font-weight: 400;
  color: var(--van-primary-color);
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
    :deep(.van-checkbox-group) {
      margin: 0;
      .van-checkbox {
        padding: 0;
        min-height: 102px;
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
