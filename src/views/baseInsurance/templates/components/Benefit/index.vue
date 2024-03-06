<template>
  <div v-if="dataSource?.benefitRiskResultVOList" class="benefit-container">
    <!-- title-active-color="#0d6efe" -->
    <van-tabs :active="active" @click-tab="changeTab">
      <van-tab v-for="(item, i) in props.dataSource?.benefitRiskResultVOList" :key="i" :name="i" :title="item.riskName">
        <div v-if="i == active" class="benefit">
          <!-- <div class="benefit-title">{{ item?.riskName }}</div> -->
          <div class="line"></div>
          <div v-if="item.benefitRiskItemResultVOList.length > 1" class="btn-wrapper">
            <van-button
              v-for="(risk, key) in item.benefitRiskItemResultVOList"
              :key="key"
              round
              plain
              :type="activeType === key ? 'primary' : 'default'"
              class="btn"
              @click="changeActiveType(key)"
              >{{ risk.tableTitle }}</van-button
            >
          </div>
          <p v-show="showType === SHOW_TYPE_ENUM.CHART" class="box-title box-title-chart">
            <img class="tl" src="@/assets/images/compositionProposal/box-title.png" alt="" />
            保单年度<span>{{ benefitObj?.year?.[benefitObj?.index] }}</span
            >年度，被保险人<span>{{ benefitObj?.age?.[benefitObj?.index] }}</span
            >岁时
            <img class="transform-z180 tr" src="@/assets/images/compositionProposal/box-title.png" alt="" />
          </p>
          <div v-if="showType === SHOW_TYPE_ENUM.LIST">
            <div class="box">
              <p class="box-title">
                <img class="tl" src="@/assets/images/compositionProposal/box-title.png" alt="" />
                保单年度<span>{{ benefitObj?.year?.[benefitObj?.index] }}</span
                >年度，被保险人<span>{{ benefitObj?.age?.[benefitObj?.index] }}</span
                >岁时
                <img class="transform-z180 tr" src="@/assets/images/compositionProposal/box-title.png" alt="" />
              </p>
              <div class="box-price">
                <div v-for="(val, k) in benefitObj?.result?.headers" :key="k" style="width: 33%">
                  <p class="text1">
                    {{
                      (benefitObj?.result?.dataList?.[benefitObj?.index]?.[k] == '0'
                        ? '0'
                        : toLocal(Number(benefitObj?.result?.dataList?.[benefitObj?.index]?.[k]))) || '0'
                    }}
                  </p>
                  <p class="text2">{{ val }}(元）</p>
                </div>
              </div>
            </div>
          </div>
          <div v-if="showType === SHOW_TYPE_ENUM.TABLE">
            <van-popup
              closeable
              :show="showTablePopup"
              position="bottom"
              :style="{ height: '100%' }"
              @click-close-icon="handleClose"
            >
              <BenefitTable :data-source="tableData" />
            </van-popup>
            <!-- <BenefitTable :data-source="tableData" /> -->
          </div>

          <div v-if="showType == SHOW_TYPE_ENUM.CHART" style="width: 100%, minWidth: 338px">
            <ProChart :min="ageBegin" :max="ageEnd" :current="num" :data="benefitObj?.result?.benefitRiskItemList" />
          </div>

          <template v-if="showType != SHOW_TYPE_ENUM.TABLE">
            <div class="slider">
              <div class="opt lf" @click="handleReduce">
                <ProSvg name="minus" />
              </div>
              <div style="flex: 1; margin: 0px 5px">
                <van-slider v-if="ageBegin" v-model="num" :min="ageBegin" :max="ageEnd" bar-height="8px">
                  <template #button>
                    <div class="custom-button">{{ num }} 岁</div>
                  </template>
                </van-slider>
              </div>
              <div class="opt rg" @click="handleAdd">
                <ProSvg name="plus" />
                <!-- <img src="@/assets/images/compositionProposal/add.png" alt="" /> -->
              </div>
            </div>
            <p class="slider-dec">拖动按钮查看不同年龄保障</p>
          </template>

          <div class="btn-two">
            <van-button
              v-if="props.showTypeList.includes(SHOW_TYPE_ENUM.LIST)"
              round
              :plain="showType !== SHOW_TYPE_ENUM.LIST"
              type="primary"
              class="btn"
              @click="showType = SHOW_TYPE_ENUM.LIST"
              >图表展示</van-button
            >
            <van-button
              v-if="props.showTypeList.includes(SHOW_TYPE_ENUM.CHART)"
              round
              :plain="showType !== SHOW_TYPE_ENUM.CHART"
              type="primary"
              class="btn"
              @click="handleCharts"
              >趋势展示</van-button
            >
            <van-button
              v-if="props.showTypeList.includes(SHOW_TYPE_ENUM.TABLE)"
              round
              :plain="showType !== SHOW_TYPE_ENUM.TABLE"
              type="primary"
              class="btn"
              @click="showType = SHOW_TYPE_ENUM.TABLE"
              >查看利益演示</van-button
            >
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
  <div v-else class="benefit-container">
    <div v-if="props.productInfo">
      <van-tabs :active="active" @click-tab="changeTab">
        <van-tab :key="1" :name="1" :title="productInfo.insureProductRiskVOList[0].riskName">
          <div class="benefit">
            <!-- <div class="benefit-title">{{ item?.riskName }}</div> -->
            <div class="line"></div>
            <div>
              <div class="box">
                <p class="box-title">
                  <img class="tl" src="@/assets/images/compositionProposal/box-title.png" alt="" />
                  保单年度<span>-</span>年度，被保险人<span>-</span>岁时
                  <img class="transform-z180 tr" src="@/assets/images/compositionProposal/box-title.png" alt="" />
                </p>
                <div class="box-price"></div>
              </div>
            </div>
            <div class="slider">
              <div class="opt lf">
                <ProSvg name="minus" />
              </div>
              <div style="flex: 1; margin: 0px 5px">
                <van-slider v-model="num" :min="0" :max="80" bar-height="8px" disabled>
                  <template #button>
                    <div class="custom-button">0 岁</div>
                  </template>
                </van-slider>
              </div>
              <div class="opt rg">
                <ProSvg name="plus" />
                <!-- <img src="@/assets/images/compositionProposal/add.png" alt="" /> -->
              </div>
            </div>
            <p class="slider-dec">拖动按钮查看不同年龄保障</p>

            <div class="btn-two">
              <van-button round :plain="true" type="primary" class="btn" disabled>图表展示</van-button>
              <van-button round :plain="false" type="primary" class="btn" disabled>趋势展示</van-button>
              <van-button round :plain="false" type="primary" class="btn" disabled>表格展示</van-button>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <div v-else class="empty-box">
      <!-- <ProEmpty title="试算前请完善投保信息" empty-class="empty-select" /> -->
      <ProEmpty title="试算结果正在计算中..." empty-class="empty-select" />
    </div>
  </div>

  <div v-for="(item, index) in props.dataSource?.benefitRiskResultVOList" :key="index">
    <ProChart
      id="chartImg"
      :min="ageBegin"
      :max="ageEnd"
      :current="num"
      :data="item?.benefitRiskItemResultVOList?.[activeType].benefitRiskItemList"
      class="chart-img"
      style="display: none"
    />
  </div>
</template>
<script lang="ts" setup name="Benefit">
import { withDefaults } from 'vue';
import html2canvas from 'html2canvas';
import { toLocal } from '@/utils';
import ProChart from '@/components/ProChart/index.vue';
import BenefitTable from './BenefitTable.vue';

const props = withDefaults(
  defineProps<{
    dataSource: {};
    productInfo: any;
    showTypeList: string[];
  }>(),
  {
    dataSource: () => ({
      showTypeList: ['1'],
    }),
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

// 展示类型
const showType = ref('1');
const tableData = ref();
const activeType = ref(0);

// 利益演示表格
// const showTablePopup = computed(() => {
//   // eslint-disable-next-line no-return-assign
//   return showType === SHOW_TYPE_ENUM.TABLE;
// });
const handleCharts = () => {
  showType.value = SHOW_TYPE_ENUM.CHART;
  setTimeout(() => {
    const node = <HTMLElement>document.getElementById('chartImg');
    html2canvas(node, {
      useCORS: true,
      dpi: 400,
      height: document.getElementById('chartImg').clientHeight - 2,
      // canvas高度与所截图高度相同或者更小，解决底部白边问题
      width: document.getElementById('chartImg').clientWidth - 2,
    }).then((res) => {
      const chartsImg = res.toDataURL('image/png', 0.8);
      console.log('chartsImg', chartsImg);
    });
  }, 2000);
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
  tableData.value =
    props.dataSource?.benefitRiskResultVOList?.[active.value].benefitRiskTableResultVOList?.[activeType.value];
  // a 年龄数组
  const { a, year } = renderArray(ageBegin.value, ageEnd.value);
  const obj = {
    index: a.indexOf(num.value.toString()),
    age: a,
    year,
    result: benefit?.benefitRiskItemResultVOList?.[activeType.value],
  };

  benefitObj.value = obj;
  console.log(benefitObj.value);
};

const changeActiveType = (key) => {
  activeType.value = key;
  showType.value = '1';
  getData();
};

const handleAdd = () => {
  if (num.value > ageEnd.value - 1) {
    return;
  }
  num.value += 1;
  getData();
};
const handleClose = () => {
  console.log('1111');
  showTablePopup.value = false;
  showType.value = '2';
};
const handleReduce = () => {
  if (num.value > ageBegin.value) {
    num.value -= 1;
    getData();
  }
};
const changeTab = (val: { name: number }) => {
  active.value = val.name;
  setAge(props.dataSource);
  getData();
};

watch(
  () => props.dataSource,
  (val) => {
    if (val) {
      setAge(val);
      getData();
      showType.value = val.showTypeList?.[0] || '1';
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
</script>

<style lang="scss" scoped>
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
      margin-top: 20px;
      &-title {
        padding: 0 10px;
        font-size: 30px;
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
    .btn-wrapper {
      // display: flex;
      padding: 30px 0 10px 0;
      width: 100%;
      // flex-wrap: nowrap;
      white-space: nowrap;
      overflow-x: auto;
      .btn {
        max-width: 560px;
        height: 60px;
        display: inline-block;
        margin-right: 10px;
        :deep(.van-button__text) {
          font-size: 22px;
        }
      }
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
