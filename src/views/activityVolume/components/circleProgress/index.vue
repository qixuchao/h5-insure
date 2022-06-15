<!-- 获客占比圆环 -->
<template>
  <div id="circleProgress" :style="{ width: '100%', height: '245px' }"></div>
</template>

<script lang="ts" setup>
import * as echarts from 'echarts';
import { withDefaults } from 'vue';

class OrderItem {
  itemCode?: string;

  itemSum?: string;

  itemTerm?: string;

  itemName?: string;
}

interface Props {
  circledata?: Array<OrderItem>;
}

const props = withDefaults(defineProps<Props>(), {
  circledata: () => [],
});
const { circledata } = toRefs(props);
const seriesData = circledata.value.map((item, index) => {
  return {
    name: `${item.itemSum}-${index}`,
    value: item.itemSum,
  };
});
console.log('seriesData', seriesData);
const initCharts = (data: any) => {
  const chartDom = document.getElementById('circleProgress');
  const pieCharts = echarts.init(chartDom);

  const option = {
    title: {
      text: '获客占比(人)',
      left: '39%',
      top: '46%',
      z: 999,
      textStyle: {
        fontSize: '13px',
        fontWeight: '400',
        color: '#616161',
        // lineHeight: '37px',
      },
    },
    color: ['#ffb31c', '#1f95fb', '#e84d17', '#1fd79f'],
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['45%', '60%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2,
        },
        label: {
          show: false,
        },
        labelLine: {
          show: false,
        },
        data,
      },
    ],
  };
  option && pieCharts.setOption(option);
};

onMounted(() => {
  initCharts(seriesData);
});
</script>

<style lang="scss" scoped></style>
