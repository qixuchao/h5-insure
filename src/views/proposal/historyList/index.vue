<!--
 * @author: liyang
 * @since: 2022-07-20
 * index.vue
-->
<template>
  <ProPageWrap class="page-history-proposal">
    <van-search
      v-model="searchValue"
      placeholder="请输入被保人姓名/计划书名称"
      shape="round"
      class="search"
      @search="onSearch"
    />
    <div class="proposal-content">
      <van-list
        v-model:loading="loading"
        :finished="finished"
        :finished-text="hasProduct ? '- 没有更多了 -' : ''"
        @load="onloadClick"
      >
        <div v-for="i of historyList" :key="i.id" class="proposal-item">
          <div class="title">{{ i.proposalName }}</div>
          <p class="premium">
            保费：<span>¥{{ toLocal(i.totalPremium) }}</span>
          </p>
          <ProTable :columns="columns" class="table" :data-source="i.proposalProductRiskVOList" />
          <div class="operate-btn">
            <van-button plain round type="primary" class="del-btn" @click="delRisk(i.id)">删除</van-button>
            <van-button plain round type="primary" @click="editProposal(i.id)">编辑</van-button>
            <van-button plain round type="primary" @click="previewProposal(i.id)">预览</van-button>
          </div>
        </div>
      </van-list>
    </div>
    <ProEmpty v-if="!hasProduct" :empty-img="emptyImg" title="暂无历史计划书" empty-class="empty-select" />
  </ProPageWrap>
</template>

<script setup lang="ts">
import { Dialog, Toast } from 'vant';
import { useRouter } from 'vue-router';
import { toLocal } from '@/utils';
import ProEmpty from '@/components/ProEmpty/index.vue';
import emptyImg from '@/assets/images/empty.png';
import ProTable from '@/components/ProTable/index.vue';
import { historyProposalList, deleteProposal } from '@/api/modules/proposalList';
import { HistoryProposalListType } from '@/api/modules/proposalList.data';
import { convertPeriod, convertChargePeriod, transformToMoney } from '@/utils/format';

const columns = [
  {
    title: '险种名称',
    dataIndex: 'riskName',
    width: 180,
  },
  {
    title: '保障期间',
    dataIndex: 'coveragePeriod',
    render: (row: any) => {
      return convertPeriod(row?.coveragePeriod);
    },
  },
  {
    title: '交费期间',
    dataIndex: 'chargePeriod',
    width: 110,
    render: (row: any) => {
      return convertChargePeriod(row?.chargePeriod);
    },
  },
  {
    title: '保费',
    dataIndex: 'premium',
    width: 120,
    render: (row: any) => {
      return transformToMoney(row?.initialPremium);
    },
  },
];

interface StatueProps {
  historyList: Array<HistoryProposalListType>;
  searchValue: string;
}

const state = reactive<StatueProps>({
  historyList: [],
  searchValue: '',
});
const loading = ref(false);
const finished = ref(false);
const pageNum = ref(1);

const { historyList, searchValue } = toRefs(state);
const router = useRouter();

const getHistoryList = () => {
  historyProposalList({
    name: searchValue.value,
    pageNum: pageNum.value,
    pageSize: 20,
    relationUserType: 2,
  }).then((res: any) => {
    const { code, data } = res;
    if (code === '10000') {
      if (pageNum.value === 1) {
        historyList.value = data.datas || [];
      } else {
        historyList.value = historyList.value.concat(data.datas);
      }

      pageNum.value += 1;
      loading.value = false;
      finished.value = historyList.value.length >= data.total;
    }
  });
};

const onloadClick = () => {
  getHistoryList();
};

const hasProduct = computed(() => {
  return historyList.value.length > 0;
});

const onSearch = (val: string) => {
  searchValue.value = val;
  pageNum.value = 1;
  getHistoryList();
};

const delRisk = (id: number) => {
  Dialog.confirm({
    message: '是否确定删除计划书？',
  })
    .then(() => {
      deleteProposal(id).then((res) => {
        const { code } = res;
        if (code === '10000') {
          Toast.success('删除成功');
          pageNum.value = 1;
          getHistoryList();
        }
      });
    })
    .catch(() => {});
};

const previewProposal = (id: number) => {
  router.push({
    path: 'compositionProposal',
    query: {
      id,
    },
  });
};

const editProposal = (id: number) => {
  router.push({
    path: '/proposal/createProposal',
    query: {
      id,
    },
  });
};
</script>

<style scoped lang="scss">
.page-history-proposal {
  :deep(.van-search) {
    margin: 30px 0;
    .van-field__body {
      width: 100%;
      .van-field__control {
        width: 100%;
        margin: 0;
        padding: 8px 0;
      }
    }
  }
  :deep(.search) {
    width: 100%;
    min-height: 56px;
    line-height: 56px;
    .van-search__content {
      border-radius: 8px;
      background: #f4f5f7;
      .van-cell {
        padding: 0;
        .van-field__left-icon {
          font-size: 18px;
          font-weight: bold;
        }
      }
    }
  }
  .proposal-content {
    padding: 0 30px;
    .proposal-item {
      background: #fafafa;
      border-radius: 20px;
      padding: 30px 20px 0 20px;
      &:not(:first-child) {
        margin-top: 20px;
      }
      .title {
        font-size: 28px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #393d46;
        line-height: 40px;
      }
      .premium {
        font-size: 26px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #333333;
        line-height: 37px;
        margin: 6px 0 14px;
        & > span {
          color: $zaui-price;
          font-weight: bold;
        }
      }
      :deep(.table-header) {
        .table-cell {
          background: #f2f2f2;
          font-size: 24px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #393d46;
          line-height: 33px;
        }
      }
      .operate-btn {
        padding: 30px 0;
        display: flex;
        justify-content: flex-end;

        .van-button {
          // width: 128px;
          height: 60px;
          font-size: 28px;
          border-radius: 32px;
          padding: 10px 36px;
          border: 1px solid $zaui-brand;
          &:not(:first-child) {
            margin-left: 16px;
          }
        }
        .del-btn {
          color: #393d46;
          border: 2px solid #e6e6eb;
        }
      }
    }
  }
}

:deep .van-list__finished-text {
  margin-bottom: 30px;
}
</style>
