<!-- 漏斗图 -->
<template>
  <div class="com-chart">
    <p class="box-title">
      <img src="@/assets/images/compositionProposal/box-title.png" alt="" />
      保单年度<span>{{ state.sliderVal - min }}</span
      >年度，被保人<span>{{ state.sliderVal }}</span
      >岁时
      <img src="@/assets/images/compositionProposal/box-title.png" alt="" />
    </p>
    <div id="funnel" :style="{ width: '100%', height: '350px' }"></div>

    <div class="slider">
      <div class="add lf">
        <img src="@/assets/images/compositionProposal/cut.png" alt="" @click="handleChangeSliderValue('minus')" />
      </div>
      <div style="flex: 1">
        <van-slider v-if="min" v-model="state.sliderVal" :min="min" :max="max" bar-height="8px" @change="handleChange">
          <template #button>
            <div class="custom-button">{{ state.sliderVal }} 岁</div>
          </template>
        </van-slider>
      </div>
      <div class="add rg">
        <img src="@/assets/images/compositionProposal/add.png" alt="" @click="handleChangeSliderValue('add')" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { withDefaults } from 'vue';
import * as echarts from 'echarts';

interface Props {
  min: number;
  max: number;
  stepValue: number;
}
const props = defineProps({
  min: {
    type: Number,
    required: false,
    default: 0,
  },
  max: {
    type: Number,
    required: false,
    default: 100,
  },
  data: {
    type: Array,
    required: false,
    default: () => [],
  },
  stepValue: {
    type: Number,
    required: false,
    default: 1,
  },
});

const { min, max, stepValue, data } = toRefs(props);

const state = reactive({
  sliderVal: 1,
  option: {
    color: ['#0D6EFE', '#2ABE21', '#FF5840', '#0DCCFE', '#8D40FF', '#8D40FF', '#C500CF', '#FF9A26'],
    tooltip: {
      trigger: 'axis',
      color: '#393D46',
      backgroundColor: 'rgba(255,255,255,0.9)',
      position: ['25%', '-15%'],
      textStyle: {
        fontSize: 12,
      }, // 修改字体大小
    },
    legend: {
      data: <{}>[],
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [] as any,
    },
    yAxis: {},
    series: [] as any,
  },
});
let myChart: echarts.ECharts;

const handleChangeSliderValue = (type: string) => {
  if (state.sliderVal < max.value && type === 'add') {
    state.sliderVal += stepValue.value;
  } else if (state.sliderVal > min.value && type === 'minus') {
    state.sliderVal -= stepValue.value;
  }
  let index = 0;
  state.option.xAxis.data.forEach((item: number, i: number) => {
    if (item === state.sliderVal) {
      index = i;
    }
  });
  myChart.dispatchAction({
    type: 'showTip',
    seriesIndex: 2, // 显示第几个series
    dataIndex: index, // 显示第几个数据
  });
};
const handleChange = (val: number) => {
  let index = 0;
  state.option.xAxis.data.forEach((item: number, i: number) => {
    if (item === val) {
      index = i;
    }
  });
  myChart.dispatchAction({
    type: 'showTip',
    seriesIndex: 1, // 显示第几个series
    dataIndex: index, // 显示第几个数据
  });
};

onMounted(() => {
  const chartDom: any = document.getElementById('funnel');
  myChart = echarts.init(chartDom);
  let header = [];
  header = data.value.map((item: any) => item.name);
  // eslint-disable-next-line array-callback-return
  data.value.map((item: any) => {
    state.option.series.push({
      smooth: true,
      showSymbol: false,
      name: item.name,
      type: 'line',
      data: item.itemList,
    });
  });
  const arr = [];
  for (let index = min.value; index <= max.value; index++) {
    arr.push(index);
  }
  console.log('>>>>>', header);
  state.option.legend.data = header;
  state.option.xAxis.data = arr;
  state.option && myChart.setOption(state.option);

  setTimeout(() => {
    myChart.dispatchAction({
      type: 'showTip',
      seriesIndex: 2, // 显示第几个series
      dataIndex: 0, // 显示第几个数据
    });
  });
});
</script>

<style lang="scss" scoped>
.com-chart {
  .box-title {
    margin-top: 40px 0 42px 0;
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
      color: #ff5840;
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
    }
    .rg {
      margin-left: 45px;
    }
    .custom-button {
      width: 104px;
      height: 46px;
      background: #0d6efe;
      box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.1);
      border-radius: 28px;
      border: 5px solid #a2c7ff;
      font-size: 24px;
      font-weight: 600;
      color: #ffffff;
      text-align: center;
    }
  }
}
</style>
