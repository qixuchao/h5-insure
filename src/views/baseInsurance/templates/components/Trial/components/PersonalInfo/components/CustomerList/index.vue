<template>
  <!-- <ProPopup
    :class="`com-trial-wrap ${$attrs.class}`"
    :show="isShow"
    :closeable="false"
    @close="onClosePopup"
    @closed="onClosePopupAfterAni"
  > -->
  <div class="page page-customer-list">
    <div class="search-bar">
      <ProSearch v-model="state.keyword" placeholder="客户 姓名/手机号" @search="handleSearch"> </ProSearch>
    </div>
    <List :data="state.list" type="firstLetter" :disabled="false" />
    <div v-if="!state.list?.length" style="padding-top: 50px">
      <!-- <p><img src="@/assets/images/baseInsurance/empth.png" class="ig" /></p> -->
      <ProEmpty :title="loading ? '加载中...' : '暂无客户'" />
    </div>
  </div>
  <!-- </ProPopup> -->
</template>
<script lang="ts" setup name="CustomerList">
import { withDefaults, ref, defineExpose } from 'vue';
import { Toast } from 'vant';
import { useRoute } from 'vue-router';
import { getCustomerList } from '@/api/modules/third';
import SearchLeftIcon from '@/assets/images/baseInsurance/search.png';
import List from './List.vue';
import { OBJECT_TYPE_ENUM } from '@/common/constants/questionnaire';

const route = useRoute();
const { selectedType, relation } = route.query;
const emit = defineEmits(['closeCustomerPopoup']);
interface StateInfo {
  show: boolean;
  keyword: any;
  list: any;
}
interface Props {
  isShow: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  isShow: true,
});

const state = reactive<Partial<StateInfo>>({
  keyword: undefined,
  show: false,
  list: [],
});
const loading = ref(false);
const getData = async (params: { [key: string]: string }) => {
  if (loading.value) return;
  loading.value = true;
  Toast.loading('加载中...');
  const reqs = {
    pageNum: 1,
    pageSize: 999,
    accessKey: 'ToDo', // TODO @za-qixuchao
    keyword: state.keyword || '',
    relation,
    customerType: OBJECT_TYPE_ENUM[selectedType.toLocaleUpperCase()] || 3,
    ...params,
  };
  getCustomerList(reqs)
    .then((res) => {
      const temp: { label: string; children: any }[] = [];

      Object.keys(res.data?.customersMap || {}).forEach((item) => {
        temp.push({
          label: item,
          children: res.data.customersMap[item],
        });
      });
      state.list = temp;
    })
    .finally(() => {
      loading.value = false;
      Toast.clear();
    });
};

onBeforeMount(() => {
  getData({ keyword: '' });
});
onMounted(() => {});
// 搜索
const handleSearch = () => {
  getData({ keyword: state.keyword });
};
</script>
<style lang="scss">
.page-customer-list {
  position: relative;
  padding-top: 116px;
  .search-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 112px;
    z-index: 1;
  }
}
</style>
