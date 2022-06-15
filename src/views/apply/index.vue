<template>
  <div class="apply-page-container">
    <div :class="['apply-content', { background: list.length > 0 }]">
      <van-tabs title-active-color="$primary-color" sticky :active="active" @click-tab="handleTab">
        <van-tab title="进行中" name="01">
          <ZaLoading v-if="loading" />
          <template v-else>
            <List v-if="list.length > 0" :data="list"> </List>
            <Empty v-else @on-add="handleAdd" />
          </template>
        </van-tab>
        <van-tab title="历史活动" name="02">
          <ZaLoading v-if="loading" />
          <template v-else>
            <List v-if="list.length > 0" :data="list" :is-over="true"> </List>
            <Empty v-else @on-add="handleAdd" />
          </template>
        </van-tab>
      </van-tabs>
    </div>
    <div v-if="list.length > 0" class="footer">
      <div class="btn" @click="handleAdd"><span>创建活动</span></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Dialog, Toast } from 'vant';
import ZaLoading from '@/components/ZaLoading/index.vue';
import Storage from '@/utils/storage';

import { searchList } from '@/api/modules/apply';

import { useThemesStore } from '@/store/themes';
import Empty from './components/Empty/index.vue';
import List from './components/List/index.vue';

const { getIconUrl } = useThemesStore();

const list = ref([]);
const active = ref(0);

const history = useRouter();
const route = useRoute();

const loading = ref(false);
const getData = async (status) => {
  loading.value = true;
  const res = await searchList({
    pageNum: '1',
    pageSize: '999',
    queryBean: {
      status,
    },
  });

  if (res.data.status === 200) {
    const { data } = res.data;
    list.value = data.list || [];
  }
  loading.value = false;
};

onMounted(() => {
  getData('start');
});

const handleDelete = (val: any) => {
  Dialog.confirm({
    title: '提示',
    message: '确认删除',
  })
    .then(async () => {
      // await markCustomer({
      //   agentCustomerId: val.agentCustomerId,
      //   // customerType: val.customerType,
      //   userId: val.userId,
      //   // tenantId: val.tenantId,
      //   markStatus: 'N',
      // });
      getData();
      // refFilter.value.handleReset();
    })
    .catch(() => {});
};

// 切换
const handleTab = (e: { name: number }) => {
  getData(e.name === '02' ? 'end' : 'start');
};

const handleAdd = (flag: boolean) => {
  history.push('./addApply');
};
</script>

<style lang="scss" scoped>
::v-deep {
  .van-cell__right-icon {
    line-height: 50px;
    color: #dddddd;
  }
  .van-icon {
    line-height: inherit;
  }

  .van-tab__text {
    font-size: $zaui-font-size-md2;
  }

  .van-sticky {
    border-bottom: 2px solid #f2f2f2;
  }
}
.apply-page-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
}
.apply-content {
  flex: 1;
  overflow-y: auto;
}
.background {
  background: #f6f6fa;
}

.footer {
  width: 100vw;
  height: 150px;
  background: #ffffff;
  padding: 0px 30px;
  box-shadow: 0px -2px 10px 0px #f6f6f6;
  display: flex;
  align-items: center;
  justify-content: center;

  .btn {
    height: 88px;
    width: 100%;
    background: linear-gradient(90deg, #f70800 0%, #ff5003 100%);
    border-radius: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      font-size: 32px;
      font-weight: 600;
      color: #ffffff;
      line-height: 45px;
    }
  }
}
.br {
  background: #faf4eb;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px;
  .br-left {
    display: flex;
    align-items: center;
    img {
      width: 59px;
      height: 59px;
      margin-right: 21px;
    }
    .custom-title {
      font-size: $zaui-font-size-md2;
      font-weight: 600;
      color: #343434;
    }
  }
  .br-right {
    display: flex;
    align-items: center;
    .brith-in {
      font-size: $zaui-font-size-md2;
      color: #b38e57;
      span {
        color: $primary-color;
        font-weight: 600;
        font-size: $zaui-font-size-md2;
      }
    }
    img {
      width: 16px;
      height: 28px;
      margin-left: 15px;
    }
  }
}

.search-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  padding: 12px 30px;
}
.search-bar {
  // width: 100%;
  flex: 1;
}
.btn {
  width: 96px;

  height: 56px;
  background: linear-gradient(90deg, #f70800 0%, #ff5003 100%);
  border-radius: 28px;
  white-space: nowrap;
  font-size: 24px;
  .van-button__text {
    font-weight: 600;
    font-size: $zaui-font-size-sm2;
  }
}

.star {
  display: flex;
  align-items: center;
  font-size: $zaui-font-size-md;
  font-weight: 600;
  color: #b38e57;
  .icon {
    width: 26px;
    height: 30px;
    margin-right: 6px;
  }
}
</style>
