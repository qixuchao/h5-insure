<template>
  <van-config-provider :theme-vars="themeVars">
    <!-- <ProPageWrap main-class="page-order-list"> -->
    <div class="page-order">
      <ProTab v-model:active="active" :list="tabList" class="tab" title-active-color="#c41e21" />
      <div v-if="list.length" class="order-head">
        共 <span class="order-head-num">{{ totalNum }}</span> 张保单
        <span style="margin-left: 27px" class="order-head-num">{{ validNum }}</span> 张有效
        <span style="margin-left: 36px" class="order-head-num">{{ invalidNum }}</span> 张失效
      </div>
      <van-list v-if="list.length" class="body" :loading="loading" :finished="finished" @load="handleLoad">
        <Item
          v-for="(item, index) in list"
          :key="index"
          :detail="item"
          @click="handleClick(item)"
          @after-delete="handleAfterDelete"
        />
      </van-list>
      <div v-else class="empty-box">
        <!-- <ProEmpty title="试算前请完善投保信息" empty-class="empty-select" /> -->
        <ProEmpty title="暂无投保单" empty-class="empty-select" />
      </div>
      <div class="footer">
        <img src="@/assets/images/component/logo.png" alt="" style="width: 100%; height: 128px" />
      </div>
    </div>
    <!-- </ProPageWrap> -->
  </van-config-provider>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { Toast } from 'vant/es';
import ProTab from '@/components/ProTab/index.vue';
import Item from './components/item.vue';
import { getOrderList, getListOrder } from '@/api/modules/order';
import { OrderItem } from '@/api/modules/order.data';
import pageJump from '@/utils/pageJump';
import useTheme from '@/hooks/useTheme';

interface QueryData {
  type: number;
  [key: string]: string | number;
}

const themeVars = useTheme();
const router = useRouter();
const route = useRoute();
const query = route.query as QueryData;
// 兼容参数传状态
const typeToActive = {
  '-1': 1,
  '0': 2,
  '1': 3,
  '2': 4,
};

const active = ref(typeToActive[query.type] || 0);

const pageNum = ref(1);
const loading = ref(false);
const finished = ref(false);
const list = ref<Array<OrderItem>>([]);
const invalidNum = ref(0);
const totalNum = ref(0);
const validNum = ref(0);
const tabList = [
  {
    title: '全部',
    status: '',
  },
  {
    title: '待处理',
    status: '-1',
  },
  {
    title: '待支付',
    status: '0',
  },
  {
    title: '已完成',
    status: '1',
  },
  {
    title: '已失效',
    status: '2',
  },
];

const currentStatus = computed(() => {
  list.value = [];
  return tabList[active.value].status;
});

const handleClick = (item: OrderItem) => {
  const { orderNo, saleUserId: agentCode, tenantId, abbreviation, productCategory, applicationNo } = item;
  pageJump('orderDetail', { orderNo, agentCode, tenantId, abbreviation, productCategory, applicationNo });
};

const getData = () => {
  Toast.loading({
    message: '加载中...',
    forbidClick: true,
  });
  loading.value = true;
  getListOrder({
    condition: { orderTopStatus: currentStatus.value },
    pageSize: 10,
    pageNum: pageNum.value,
  })
    .then((res) => {
      loading.value = false;
      const { code, data } = res;
      if (code === '10000' && data) {
        if (pageNum.value === 1) {
          list.value = data.datas[0].applicationResList || [];
          invalidNum.value = data.datas[0].invalidNum;
          totalNum.value = data.datas[0].totalNum;
          validNum.value = data.datas[0].validNum;
        } else {
          list.value = [...list.value, ...(data.datas[0]?.applicationResList || [])];
        }
      }
      finished.value = !data || list.value.length >= data?.total;
    })
    .then(() => {
      Toast.clear();
    });
};

const handleLoad = () => {
  pageNum.value += 1;
  getData();
};

const handleAfterDelete = () => {
  pageNum.value = 1;
  getData();
};

watch(currentStatus, () => {
  pageNum.value = 1;
  getData();
});

onMounted(() => {
  getData();
});
</script>

<style lang="scss">
.page-order-list {
  height: 0;
}
</style>

<style lang="scss" scoped>
.page-order {
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f4f5f9;
  .body {
    flex: 1;
    height: 0;
    overflow-y: auto;
    background: $zaui-global-bg;
    padding: 30px;
    margin-bottom: 400px;
  }
  .order-head {
    font-size: 26px;
    font-weight: 400;
    color: #343434;
    line-height: 37px;
    margin-left: 30px;
    margin-top: 20px;
  }
  .order-head-num {
    color: #c41e21;
  }
  .footer {
    position: fixed;
    width: 100%;
    bottom: 0;
    margin-top: 62px;
    margin-bottom: 104px;
  }
  .empty-box {
    height: 680px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
