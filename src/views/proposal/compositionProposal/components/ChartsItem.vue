<template>
  <div v-if="dataSource?.benefitRiskResultVOList" :id="`${props.dataSourceIndex}-chartImg`" class="benefit-container">
    <div
      v-for="(item, i) in props.dataSource?.benefitRiskResultVOList"
      :id="`${item.productName}${i}${props.dataSourceIndex}-chartImg`"
      :key="i"
      :name="i"
      :title="item.productName"
    >
      <div class="benefit-chart-title">{{ item.productName }}</div>
      <ProChart
        v-if="
          item.productName &&
          props.dataSource &&
          props.dataSource?.benefitRiskResultVOList?.[0]?.benefitRiskTableResultVOList
        "
        :id-name="`${item.productName}${i}${props.dataSourceIndex}`"
        :min="ageBegin"
        :max="ageEnd"
        :current="num"
        :data="benefitObj?.result?.benefitRiskItemList"
      />
    </div>
  </div>
</template>
<script lang="ts" setup name="Benefit">
import { withDefaults } from 'vue';
import html2canvas from 'html2canvas';
import ProChart from '@/components/ProChart/index.vue';
import { fileUploadBase64 } from '@/api/modules/file';

const props = withDefaults(
  defineProps<{
    dataSource: {};
    productInfo: any;
    dataSourceIndex: string;
    showTypeList: string[];
  }>(),
  {
    dataSource: () => ({
      showTypeList: ['1'],
    }),
    dataSourceIndex: () => '',
    productInfo: () => null,
    showTypeList: () => [],
  },
);
const SHOW_TYPE_ENUM = {
  LIST: '1',
  CHART: '2',
  TABLE: '3',
};
const active = ref(0);
const ageBegin = ref(0);
const ageEnd = ref(0);
const benefitObj = ref(); // 利益演示结构
const showTablePopup = ref(true); // 利益演示结构
const num = ref(0);
const emits = defineEmits(['onUploadedCharts']);
// 展示类型
const showType = ref(props.showTypeList?.[0]);
const tableData = ref();
// 生成echarts图表
const handleCharts = () => {
  setTimeout(() => {
    const node = <HTMLElement>document.getElementById(`${props.dataSourceIndex}-chartImg`);
    html2canvas(node, {
      useCORS: true,
      dpi: 400,
      height: document.getElementById(`${props.dataSourceIndex}-chartImg`).clientHeight - 2,
      // canvas高度与所截图高度相同或者更小，解决底部白边问题
      width: document.getElementById(`${props.dataSourceIndex}-chartImg`).clientWidth - 2,
    }).then(async (res) => {
      const chartsImg = res.toDataURL('image/jpeg', 0.5);

      const res2 = await fileUploadBase64({ fileBase64: chartsImg, uploadType: '99' });
      const { url } = res2.data;

      emits('onUploadedCharts', { index: props.dataSourceIndex, imgUrl: url });
    });
  }, 500);
};

const renderArray = (start: number, end: number) => {
  const a = [];
  const year = [];
  for (let i = start, j = 0; i <= end; i++, j++) {
    a.push(i.toString());
    year.push(j + 1);
  }
  return { a, year };
};

const setAge = (realData: any) => {
  if (!realData?.benefitRiskResultVOList) return;
  const benefit = realData?.benefitRiskResultVOList[active.value];
  ageBegin.value = benefit.ageBegin + 1;
  num.value = benefit.ageBegin + 1;
  ageEnd.value = benefit.ageEnd;
};

const getData = () => {
  // 根据num 取对应数组的值
  const benefit = props.dataSource?.benefitRiskResultVOList?.[active.value];
  tableData.value = props.dataSource?.benefitRiskResultVOList?.[active.value].benefitRiskTableResultVOList?.[0];
  // a 年龄数组
  const { a, year } = renderArray(ageBegin.value, ageEnd.value);
  const obj = {
    index: a.indexOf(num.value.toString()),
    age: a,
    year,
    result: benefit?.benefitRiskItemResultVOList?.[0],
  };

  benefitObj.value = obj;
};

watch(
  () => props.dataSource,
  (val) => {
    if (val) {
      setAge(val);
      getData();
      showType.value = val.showTypeList?.[0];
    }
  },
  {
    deep: true,
    immediate: true,
  },
);

watch(num, () => {
  getData();
});
watch(showType, (val) => {
  showTablePopup.value = val === SHOW_TYPE_ENUM.TABLE;
});
onMounted(() => {
  handleCharts();
});
</script>

<style lang="scss" scoped>
.benefit-chart-title {
  font-size: 24px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #203e72;
  padding: 26px 0 26px 0;
}
.benefit-container {
  widows: 100%;
  background: #ffffff;
  border-radius: 16px;
  margin-bottom: 30px;
  padding: 0 20px 30px 20px;
  .common-title {
    padding-top: 34px;
    margin-bottom: 30px;
    font-weight: 500;
    color: #333333;
  }
  .benefit {
    border-top: 1px solid $zaui-line;
    &-title {
      margin-top: 36px;
      font-size: 28px;
      font-weight: 600;
      color: #393d46;
    }
    .box {
      width: 630px;
      margin: 0 auto;
      background: #fafafa;
      border: 1px solid #9fb3d2;
      padding: 40px 0;
      border-radius: 20px;
      margin-top: 40px;
      &-title {
        padding: 0 16px;
        font-size: 32px;
        font-weight: 500;
        color: #333333;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 41px;
          height: 29px;
        }
        span {
          color: $zaui-price;
        }
        &.box-title-chart {
          margin: 40px 0;
        }
      }
      &-price {
        margin-top: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        flex-wrap: wrap;
        .text1 {
          font-size: 28px;
          line-height: 38px;
          font-weight: 500;
          color: $zaui-price;
          font-family: Arial-BoldMT, Arial;
        }
        .text2 {
          font-size: 24px;
          font-weight: 400;
          color: #393d46;
        }
      }
    }
    .tl {
      margin-right: 10px;
    }
    .tr {
      margin-left: 10px;
    }
    .transform-z180 {
      transform: rotateZ(180deg);
    }
    .slider {
      display: flex;
      align-items: center;
      margin-top: 30px;
      .opt {
        color: $primary-color;
        font-size: 40px;
      }
      .lf {
        margin-right: 50px;
        display: flex;
        align-items: center;
      }
      .rg {
        margin-left: 50px;
      }
      .custom-button {
        width: 104px;
        height: 46px;
        background: $zaui-brand;
        box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.1);
        border-radius: 28px;
        border: 5px solid var(--van-primary-color-light05);
        font-size: 24px;
        font-weight: 600;
        color: #ffffff;
        text-align: center;
      }
    }
    .slider-dec {
      font-size: 24px;
      font-weight: 400;
      color: #99a9c0;
      text-align: center;
      margin: 20px 0 40px 0;
    }

    .btn-two {
      display: flex;
      padding: 20px 0;
      justify-content: center;
      .btn {
        // width: 560px;
        max-width: 560px;
        height: 60px;
        margin-right: 10px;
        :deep(.van-button__text) {
          font-size: 22px;
        }
      }
    }
  }
}
.empty-box {
  height: 680px;
  display: flex;
  justify-content: center;
  align-items: center;
}
:deep(.van-popup) {
  z-index: 999999999 !important; // 弹窗提高层级不展示底部按钮
  .van-popup__close-icon {
    top: 0;
  }
}
</style>
