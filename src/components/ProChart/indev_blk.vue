<!-- 漏斗图 -->
<template>
  <div id="funnel" :style="{ width: '1005', height: '450px' }"></div>
</template>

<script lang="ts" setup>
import * as echarts from 'echarts';

const initCharts = () => {
  const chartDom: any = document.getElementById('funnel');
  const myChart = echarts.init(chartDom);

  let base = +new Date(2016, 9, 3);
  const oneDay = 24 * 3600 * 1000;
  let valueBase = Math.random() * 300;
  let valueBase2 = Math.random() * 50;
  const data = [];
  const data2 = [];
  for (let i = 1; i < 10; i++) {
    const now = new Date((base += oneDay));
    const dayStr = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-');
    valueBase = Math.round((Math.random() - 0.5) * 20 + valueBase);
    valueBase <= 0 && (valueBase = Math.random() * 300);
    data.push([dayStr, valueBase]);
    valueBase2 = Math.round((Math.random() - 0.5) * 20 + valueBase2);
    valueBase2 <= 0 && (valueBase2 = Math.random() * 50);
    data2.push([dayStr, valueBase2]);
  }

  const option = {
    title: {
      left: 'center',
      text: 'Tootip and dataZoom on Mobile Device',
    },
    legend: {
      top: 'bottom',
      data: ['Intention'],
    },
    tooltip: {
      triggerOn: 'none',
      position(pt) {
        return [pt[0], 130];
      },
    },
    xAxis: {
      type: 'time',
      axisPointer: {
        value: '2016-10-7',
        snap: true,
        lineStyle: {
          color: '#7581BD',
          width: 2,
        },
        label: {
          show: true,
          formatter(params: any) {
            return echarts.format.formatTime('yyyy-MM-dd', params.value);
          },
          backgroundColor: '#7581BD',
        },
        handle: {
          show: true,
          color: '#7581BD',
        },
      },
      splitLine: {
        show: false,
      },
    },
    yAxis: {
      type: 'value',
      axisTick: {
        inside: true,
      },
      splitLine: {
        show: false,
      },
      axisLabel: {
        inside: true,
        formatter: '{value}\n',
      },
      z: 10,
    },
    grid: {
      top: 110,
      left: 15,
      right: 15,
      height: 160,
    },
    dataZoom: [
      {
        type: 'inside',
        throttle: 50,
      },
    ],
    series: [
      {
        name: 'Fake Data',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        sampling: 'average',
        itemStyle: {
          color: '#0770FF',
        },
        stack: 'a',
        data,
      },
      {
        name: 'Fake Data',
        type: 'line',
        smooth: true,
        stack: 'a',
        symbol: 'circle',
        symbolSize: 5,
        sampling: 'average',
        itemStyle: {
          color: '#F2597F',
        },
        data: data2,
      },
    ],
  };

  option && myChart.setOption(option);
};

onMounted(() => {
  initCharts();
});
</script>
