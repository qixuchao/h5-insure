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
        <van-search shape="round" placeholder="请输入产品名称进行搜索"></van-search>
      </div>
      <div v-if="riskList.length" class="risk-list">
        <van-radio-group v-model="checked">
          <van-cell-group inset>
            <van-cell
              v-for="risk in riskList"
              :key="risk.riskCode || risk.productCode"
              :title="risk.riskName || risk.productName"
              clickable
              @click="checked = risk.riskCode || risk.productCode"
            >
              <template #icon>
                <van-radio :name="risk.riskCode || risk.productCode" />
              </template>
            </van-cell>
          </van-cell-group>
        </van-radio-group>
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
}

const props = withDefaults(defineProps<Props>(), {
  type: 2,
  show: false,
  insuredList: () => [],
  mainRiskCode: '',
  selectList: () => [],
});

const route = useRoute();

const { insurerCode } = route.query;

const emits = defineEmits(['cancel', 'confirm']);

const checked = ref();
const riskList = ref<any[]>([]);

const show = computed(() => props.show);

const handleCancel = () => {
  emits('cancel');
};
const handleConfirm = () => {
  if (!checked.value) {
    Toast(`暂未添加任何${props.type === RISK_TYPE_ENUM.MAIN_RISK ? '主' : '附加'}险`);
    return;
  }
  emits('confirm', checked.value);
};

const getRiskList = async () => {
  const params = {
    insuredList: props.insuredList,
    mainRiskCode: props.mainRiskCode,
    insurerCode,
    productCategory: '',
    selectProductCodes: [],
    selectRiskCodes: [],
  };

  params.selectProductCodes = props.selectList.map((product) => {
    params.selectRiskCodes.push(...product.mergeRiskReqList.map((risk) => risk.riskCode));
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
      riskList.value = data;
    }
  }
};

onMounted(() => {
  getRiskList();
});
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
  }
  .risk-list {
    :deep(.van-cell-group--inset) {
      margin: 0;
      .van-cell {
        padding: 0;
        line-height: 102px;
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
