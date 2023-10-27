<template>
  <div class="page page-product-lib">
    <van-sticky>
      <van-cell class="top-bar">
        <van-search v-model="form.value" placeholder="请搜索险种名称" shape="round" @search="getData"> </van-search>
        <div><TypeFilter v-model="form.type" /></div>
      </van-cell>
    </van-sticky>
    <div>未完成</div>
    <!-- <div style="height: 3000px">{{ JSON.stringify(config) }}</div> -->
  </div>
</template>
<script lang="ts" setup name="ProductLib">
import { useRoute } from 'vue-router';
import { queryProductBoxConfig } from '@/api/modules/productLib';
import useDictData from '@/hooks/useDictData';
import TypeFilter from './components/TypeFilter.vue';

interface QueryData {
  preview: boolean;
  insurerCode: string;
  [key: string]: string | number;
}
const route = useRoute();
const { preview = false, insurerCode = 'lianlife' } = route.query as QueryData;
const form = ref({
  value: 'sdf',
  type: '全部',
});

const config = ref({
  id: '40',
  insurerCode: 'lianlife',
  showStyle: 1,
  showStyleDetails: null,
  isShowStopSellingLabel: 'Y',
  showCategoryIds: null,
  materialCategoryShowStyle: 1,
});
const getData = () => {
  queryProductBoxConfig({ insurerCode }).then((res) => {
    console.log('获取配置成功', res);
  });
};
onMounted(() => {
  if (preview) {
    window.addEventListener(
      'message',
      (e) => {
        console.log('子应用收到的数据', e.data);
        const data = JSON.parse(e.data);
        if (typeof data === 'object') {
          config.value = {
            ...config.value,
            ...JSON.parse(e.data),
          };
        }
      },
      false,
    );
  } else {
    getData();
  }
});
</script>
<style lang="scss" scoped>
// .top-bar.van-cell {
//   display: flex;
//   align-items: center;
//   :deep(.van-cell__title) {
//     flex: 2;
//     width: 20%;
//   }
//   :deep(.van-cell__value) {
//     width: 80%;
//     flex: 8;
//   }
// }
.page-product-lib {
}
:deep(.van-search__content.van-search__content--round) {
  padding-left: 160px;
}
</style>
