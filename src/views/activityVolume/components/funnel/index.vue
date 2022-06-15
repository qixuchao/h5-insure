<!-- 漏斗图 -->
<template>
  <div id="funnel" :style="{ width: '170px', height: '150px' }"></div>
</template>

<script lang="ts" setup>
import * as echarts from 'echarts';
import { withDefaults } from 'vue';
import { useThemesStore } from '@/store/themes';

const { currentType } = useThemesStore();
class OrderItem {
  itemCode?: string;

  itemSum?: string;

  itemTerm?: string;

  itemName?: string;
}

interface Props {
  funneldata?: Array<OrderItem>;
}

const props = withDefaults(defineProps<Props>(), {
  funneldata: () => [],
});
const seriesData = reactive([]);
const colorBlue = ['#007aff', '#007affcc', '#007aff99', '#007aff66', '#007aff33'];
const colorDefault = ['#FB4202', '#FC6430', '#FD865D', '#FDA88B', '#FECAB9'];
const initCharts = (data) => {
  const chartDom = document.getElementById('funnel');
  const myChart = echarts.init(chartDom);

  const option = {
    color: currentType === 'blue' ? colorBlue : colorDefault,
    series: [
      {
        name: 'Funnel',
        type: 'funnel',
        left: '15%',
        top: 0,
        bottom: 0,
        width: '85%',
        min: 0,
        max: 100,
        // minSize: '0%',
        // maxSize: '100%',
        sort: 'descending',
        gap: 2,
        label: {
          position: 'left',
        },
        labelLine: {
          show: false,
          length: 10,
          lineStyle: {
            width: 1,
            type: 'solid',
          },
        },
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 1,
        },
        // emphasis: {
        //   label: {
        //     fontSize: 20,
        //   },
        // },
        data,
      },
    ],
  };
  option && myChart.setOption(option);
};

watch(
  () => props.funneldata,
  (newval) => {
    seriesData.splice(0);
    const data = newval.map((item) => {
      return {
        // name: item.itemSum,
        value: `${item.itemSum}`,
        // value: '1',
      };
    });
    if (data.every((e) => e.value === '0')) {
      props.funneldata.forEach((item) => {
        seriesData.push({ value: `1` });
      });
    } else {
      props.funneldata.forEach((item) => {
        seriesData.push({ value: `${item.itemSum}` });
      });
    }
    console.log('seriesData', seriesData);
    initCharts(seriesData);
  },
  {
    deep: true,
    // immediate: true,
  },
);

onMounted(() => {
  initCharts(seriesData);
});
</script>
