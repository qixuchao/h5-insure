<template>
  <!-- <van-config-provider :theme-vars="themeVars"> -->
  <!-- <ProPageWrap main-class="page-order-list"> -->
  <div id="page-order" class="page-order">
    <ProSearch
      v-model="searchValue"
      placeholder="请输入订单号/投保单号/投保人姓名"
      @cancel="handleAfterDelete"
      @search="handleAfterDelete"
    />
    <ProTab v-model:active="active" :list="tabList" class="tab" title-active-color="#c41e21" />

    <div ref="refreshRef" class="list-wrap">
      <van-list v-if="list.length" v-model:loading="loading" class="body" :finished="finished" @load="handleLoad">
        <Item
          v-for="(item, index) in list"
          :key="index"
          :detail="item"
          @click="handleClick(item)"
          @after-delete="handleAfterDelete"
        />
        <!-- <div class="footer">
        <img src="@/assets/images/component/logo.png" alt="" style="width: 100%; height: 128px" />
      </div> -->
      </van-list>
    </div>
    <!-- <div v-else class="empty-box">
        <ProEmpty title="暂无投保单" empty-class="empty-select" />
      </div> -->
  </div>
  <!-- </ProPageWrap> -->
  <!-- </van-config-provider> -->
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router';
import { Toast } from 'vant/es';
import ProTab from '@/components/ProTab/index.vue';
import Item from './components/item.vue';
import { queryOrderList } from '@/api/modules/order';
import { OrderItem } from '@/api/modules/order.data';
import pageJump from '@/utils/pageJump';
import useTheme from '@/hooks/useTheme';

interface QueryData {
  type: number;
  tenantId: string;
  agentCode: string;
  [key: string]: string | number;
}

const themeVars = useTheme();
const router = useRouter();
const route = useRoute();
const { type, tenantId, agentCode } = route.query as QueryData;
// 兼容参数传状态
const typeToActive = {
  '-1': 1,
  '0': 2,
  '1': 3,
  '2': 4,
};

const active = ref(typeToActive[type] || 0);

const pageNum = ref(1);
const loading = ref(false);
const freshLoading = ref(false);
const finished = ref(false);
const list = ref<Array<OrderItem>>([]);
const searchValue = ref<string>('');
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
    status: '3',
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
  const { orderNo, insurerCode, templateId } = item;
  pageJump('orderDetail', { orderNo, agentCode, tenantId, templateId });
};

const getData = () => {
  Toast.loading({
    message: '加载中...',
    forbidClick: true,
  });
  loading.value = true;
  queryOrderList({
    condition: { orderTopStatus: currentStatus.value, tenantId, agentCode, keyword: searchValue.value },
    pageSize: 10,
    pageNum: pageNum.value,
  })
    .then((res) => {
      const { code, data } = res;
      if (code === '10000' && data) {
        loading.value = false;
        freshLoading.value = false;

        if (pageNum.value === 1) {
          list.value = data.datas || [];
        } else {
          list.value = list.value.concat(data.datas || []);
        }

        if (data.datas.length < 10) {
          finished.value = true;
        }
      }
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

const refreshRef = ref();
const refreshData = ref({});
const refreshDisabled = ref(false);

watch(
  () => refreshData.value.scrollTop,
  (val) => {
    if (val <= 0) {
      refreshDisabled.value = false;
    } else {
      refreshDisabled.value = true;
    }
  },
);

onMounted(() => {
  document
    .querySelector('#page-order')
    .querySelector('.list-wrap')
    ?.addEventListener?.('scroll', () => {
      refreshData.value = refreshRef.value.scrollTop; // data中定义scrollTop为0
    });
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
  display: flex;
  flex-direction: column;
  background: #f4f5f9;
  :deep(.van-search) {
    .van-field__body {
      width: 100%;
    }
  }
  .list-wrap {
    flex: 1;
    height: 100%;
    overflow-y: auto;
    background: $zaui-global-bg;
    padding: 30px;
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
    // position: fixed;
    // width: 100%;
    // bottom: 0;
    // margin-top: 62px;
    // margin-bottom: 104px;
  }
  .empty-box {
    height: 680px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
