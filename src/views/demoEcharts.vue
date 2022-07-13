<!-- 漏斗图 -->
<template>
  <div id="funnel" :style="{ width: '1005', height: '450px' }"></div>
</template>

<script lang="ts" setup>
import * as echarts from 'echarts';

const option = {
  color: ['#0D6EFE', '#2ABE21', '#0D6EFE', '#FF8A62', '#FF9E7C'],
  tooltip: {
    trigger: 'axis',
  },
  legend: {
    data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
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
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      smooth: true,
      name: 'Email',
      type: 'line',
      stack: 'Total',
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      smooth: true,
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      smooth: true,
      name: 'Video Ads',
      type: 'line',
      stack: 'Total',
      data: [150, 232, 201, 154, 190, 330, 410],
    },
    {
      smooth: true,
      name: 'Direct',
      type: 'line',
      stack: 'Total',
      data: [320, 332, 301, 334, 390, 330, 320],
    },
    {
      smooth: true,
      name: 'Search Engine',
      type: 'line',
      stack: 'Total',
      data: [820, 932, 901, 934, 1290, 1330, 1320],
    },
  ],
};

onMounted(() => {
  const chartDom = document.getElementById('funnel');
  const myChart = echarts.init(chartDom);

  option && myChart.setOption(option);

  setTimeout(() => {
    myChart.dispatchAction({
      type: 'showTip',
      seriesIndex: 2, // 显示第几个series
      dataIndex: 2, // 显示第几个数据
    });
  });
});
</script>
