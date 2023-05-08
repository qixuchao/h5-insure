<template>
  <div class="container">
    <div class="common-title">利益演示</div>
    <van-tabs
      :active="active"
      title-active-color="#0d6efe"
      title-inactive-color="#393D46"
      shrink
      @click-tab="changeTab"
    >
      <van-tab v-for="(item, i) in props.info?.benefitRiskResultVOList" :key="i" :name="i" :title="item.productName">
        <div v-if="i == active" class="benefit">
          <!-- <div class="benefit-title">{{ item?.riskName }}</div> -->
          <!-- <div class="line"></div> -->
          <div v-if="!showChart" class="box-title box-title-chart">
            <img src="@/assets/images/compositionProposal/box-title.png" alt="" />
            <div>
              保单年度<span>{{ benefitObj?.year?.[benefitObj?.index] }}</span
              >年度，被保人<span>{{ benefitObj?.age?.[benefitObj?.index] }}</span
              >岁时
            </div>
            <img src="@/assets/images/compositionProposal/box-title.png" alt="" />
          </div>
          <div v-if="showChart">
            <div class="box">
              <div class="box-title">
                <img src="@/assets/images/compositionProposal/box-title.png" alt="" />
                <div>
                  保单年度<span>{{ benefitObj?.year?.[benefitObj?.index] }}</span
                  >年度，被保人<span>{{ benefitObj?.age?.[benefitObj?.index] }}</span
                  >岁时
                </div>
                <img src="@/assets/images/compositionProposal/box-title.png" alt="" />
              </div>
              <div class="box-price">
                <div v-for="(val, k) in benefitObj?.result?.headers" :key="k" style="width: 33%">
                  <p class="text1">
                    {{ toLocal(Number(benefitObj?.result?.dataList?.[benefitObj?.index]?.[k])) || '--' }}
                  </p>
                  <p class="text2">{{ val }}(元）</p>
                </div>
              </div>
            </div>
          </div>

          <div v-if="!showChart" style="width: 100%, minWidth: 338px">
            <ProChart :min="ageBegin" :max="ageEnd" :current="num" :data="benefitObj?.result?.benefitRiskItemList" />
          </div>
          <div class="slider">
            <div class="add lf" @click="handleReduce">
              <img src="@/assets/images/compositionProposal/cut.png" alt="" />
            </div>
            <div style="flex: 1; margin: 0px 5px">
              <van-slider v-if="ageBegin" v-model="num" :min="ageBegin" :max="ageEnd" bar-height="8px">
                <template #button>
                  <div class="custom-button">{{ num }} 岁</div>
                </template>
              </van-slider>
            </div>
            <div class="add rg" @click="handleAdd">
              <img src="@/assets/images/compositionProposal/add.png" alt="" />
            </div>
          </div>

          <p class="slider-dec">拖动按钮查看不同年龄保障</p>
          <div class="btn-two">
            <van-button round :plain="!showChart" type="primary" class="btn" @click="handleChangeChart('1')"
              >图表展示</van-button
            >
            <van-button round :plain="showChart" type="primary" class="btn" @click="handleChangeChart('2')"
              >趋势展示</van-button
            >
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script lang="ts" setup>
import { toLocal } from '@/utils';
import ProChart from '@/components/ProChart/index.vue';

const props = defineProps({
  info: {
    type: Object,
    default: () => {},
  },
});

const active = ref(0);
const ageBegin = ref(0);
const ageEnd = ref(0);
const benefitObj = ref(); // 利益演示结构

const num = ref(0);
const showChart = ref(true);

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
  const benefit = realData?.benefitRiskResultVOList[active.value] || {};
  ageBegin.value = benefit.ageBegin + 1;
  num.value = benefit.ageBegin + 1;
  ageEnd.value = benefit.ageEnd;
};

const getData = () => {
  // 根据num 取对应数组的值
  const benefit = props.info?.benefitRiskResultVOList?.[active.value];

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

const handleAdd = () => {
  if (num.value > ageEnd.value - 1) {
    return;
  }
  num.value += 1;
  getData();
};
const handleReduce = () => {
  if (num.value > ageBegin.value) {
    num.value -= 1;
    getData();
  }
};
const changeTab = (val: { name: number }) => {
  active.value = val.name;
  setAge(props.info);
  getData();
};

const handleChangeChart = (val: string) => {
  if (val === '1') {
    showChart.value = true;
  } else {
    showChart.value = false;
  }
};

watch(
  () => props.info,
  (val) => {
    if (val) {
      setAge(val);
      getData();
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
</script>

<style lang="scss" scoped>
.page-composition-proposal {
  .line {
    margin: 0 -20px;
    padding-bottom: 30px;
    border-bottom: 1px solid $zaui-line;
  }

  .container {
    widows: 100%;
    background: #ffffff;
    border-radius: 16px;
    margin-bottom: 20px;
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
        // background: #fafafa;
        // border: 1px solid #9fb3d2;
        // padding: 40px 0;
        // border-radius: 20px;
        margin: 50px auto;
        &-title {
          padding: 0 16px;
          font-size: 32px;
          font-weight: 500;
          color: #333333;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: space-between;
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
            font-weight: 500;
            color: $zaui-price;
          }
          .text2 {
            font-size: 24px;
            font-weight: 400;
            color: #393d46;
          }
        }
      }
      .slider {
        display: flex;
        align-items: center;
        margin-top: 30px;
        .add {
          img {
            width: 48px;
            height: 48;
          }
        }
        .lf {
          margin-right: 45px;
          display: flex;
          align-items: center;
        }
        .rg {
          margin-left: 45px;
        }
        .custom-button {
          width: 104px;
          height: 46px;
          background: $zaui-brand;
          box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.1);
          border-radius: 28px;
          border: 5px solid #a2c7ff;
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
        padding: 0 70px;
        justify-content: space-between;
        .btn {
          width: 240px;
          height: 60px;
          font-size: 28px;
        }
      }
    }
  }
}
</style>
