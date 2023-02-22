<!-- 漏斗图 -->
<template>
  <div id="com-chart" :style="{ width: '100%' }">
    <div id="funnel" :style="{ height: '350px' }"></div>
  </div>
</template>

<script lang="ts" setup>
import echarts from './useEcharts';

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
  current: {
    type: Number,
    required: false,
    default: 0,
  },
  data: {
    type: Array,
    required: false,
    default: () => [],
  },
});

const { min, max, current, data } = toRefs(props);

const state = reactive({
  sliderVal: 1,
  option: {
    color: ['#0d6efe', '#2ABE21', '#FF5840', '#0DCCFE', '#8D40FF', '#8D40FF', '#C500CF', '#FF9A26'],
    tooltip: {
      trigger: 'axis',
      color: '#393D46',
      backgroundColor: 'rgba(255,255,255,0.9)',
      position: ['25%', '7%'],
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
      top: '35%',
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

const handleChange = (val: number) => {
  let index = 0;
  state.option.xAxis.data.forEach((item: number, i: number) => {
    if (item === val) {
      index = i;
    }
  });
  myChart.dispatchAction({
    type: 'showTip',
    seriesIndex: 0, // 显示第几个series
    dataIndex: index, // 显示第几个数据
  });
};

const initChart = () => {
  const chartWapper = document.getElementById('com-chart');
  const chartDom: any = document.getElementById('funnel');
  chartDom.style.width = `${chartWapper?.offsetWidth}px`;
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
  state.option.legend.data = header;
  state.option.xAxis.data = arr;
  state.option && myChart.setOption(state.option);

  setTimeout(() => {
    handleChange(props.current);
  });
};

onMounted(() => {
  setTimeout(() => {
    initChart();
  }, 0);
});

onUnmounted(() => {
  myChart.dispose();
});

watch(current, (val) => {
  handleChange(val);
});
</script>
