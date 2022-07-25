<!-- 漏斗图 -->
<template>
  <div class="com-chart">
    <div id="funnel" :style="{ width: '100%', height: '350px' }"></div>

    <div class="slider">
      <div class="add lf">
        <img src="@/assets/images/compositionProposal/cut.png" alt="" @click="handleChangeSliderValue('minus')" />
      </div>
      <div style="flex: 1">
        <van-slider v-model="state.sliderVal" :min="1" :max="100" bar-height="8px">
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

const props = withDefaults(defineProps<Props>(), {
  min: 0,
  max: 100,
  stepValue: 10,
});

const { min, max, stepValue } = toRefs(props);

const state = reactive({
  sliderVal: 10,
  currentScale: 0,
});
let myChart: echarts.ECharts;
const option = {
  color: ['#0D6EFE', '#2ABE21', '#FF5840', '#0DCCFE', '#8D40FF', '#8D40FF', '#C500CF', '#FF9A26'],
  tooltip: {
    trigger: 'axis',
    color: '#393D46',
    backgroundColor: 'rgba(255,255,255,0.9)',
    position: ['25%', '-45%'],
    textStyle: {
      fontSize: 12,
    }, // 修改字体大小
  },
  legend: {
    data: ['累计总保费', '身故或全残保险金', '保单年度末现金价值2', '身故或全残保险金', '保单年度末现金价值'],
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
    data: ['0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      smooth: true,
      showSymbol: false,
      name: '累计总保费',
      type: 'line',
      stack: 'Total',
      data: [10, 132, 101, 134, 90, 230, 210, 82, 191, 234, 343],
    },
    {
      smooth: true,
      showSymbol: false,
      name: '身故或全残保险金',
      type: 'line',
      stack: 'Total',
      data: [20, 182, 191, 234, 290, 330, 310, 330, 320, 154, 76],
    },
    {
      smooth: true,
      showSymbol: false,
      name: '保单年度末现金价值2',
      type: 'line',
      stack: 'Total',
      data: [150, 232, 201, 154, 190, 330, 410, 301, 334, 390, 542],
    },
    {
      smooth: true,
      showSymbol: false,
      name: '身故或全残保险金',
      type: 'line',
      stack: 'Total',
      data: [3, 332, 301, 334, 390, 330, 320, 154, 190, 330, 328],
    },
    {
      smooth: true,
      showSymbol: false,
      name: '保单年度末现金价值',
      type: 'line',
      stack: 'Total',
      data: [820, 932, 901, 934, 1290, 1330, 1320, 330, 320, 154, 97],
    },
  ],
};

const handleChangeSliderValue = (type: string) => {
  if (state.sliderVal < max.value && type === 'add') {
    state.sliderVal += stepValue.value;
  } else if (state.sliderVal > min.value && type === 'minus') {
    state.sliderVal -= stepValue.value;
  }
  myChart.dispatchAction({
    type: 'showTip',
    seriesIndex: 2, // 显示第几个series
    dataIndex: type === 'add' ? (state.currentScale += 1) : (state.currentScale -= 1), // 显示第几个数据
  });
};

watch(
  () => state.sliderVal,
  (newVal) => {
    console.log(newVal);
    myChart.dispatchAction({
      type: 'showTip',
      seriesIndex: 2, // 显示第几个series
      dataIndex: newVal ? newVal / 10 : 0, // 显示第几个数据
    });
  },
  {
    deep: true,
    immediate: false,
  },
);

onMounted(() => {
  const chartDom: any = document.getElementById('funnel');
  myChart = echarts.init(chartDom);

  option && myChart.setOption(option);

  setTimeout(() => {
    myChart.dispatchAction({
      type: 'showTip',
      seriesIndex: 2, // 显示第几个series
      dataIndex: state.currentScale, // 显示第几个数据
    });
  });
});
</script>

<style lang="scss" scoped>
.com-chart {
  margin: 100px 0 0 0;
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
