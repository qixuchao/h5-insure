<!--
 * new page
 * @author: liyang
 * @since: 2022-07-20
 * index.vue
-->
<template>
  <ZaPageWrap class="page-history-proposal">
    <van-search
      v-model="searchValue"
      placeholder="请输入关键词"
      shape="round"
      class="search"
      @click-input="handleSearchClick"
    />
    <div class="proposal-content">
      <div class="proposal-item">
        <div class="title">陈先生的计划书这里是是是标题20个字占位</div>
        <p class="premium">保费：<span>¥1,289.00</span></p>
        <ProTable :columns="columns" class="table" :data-source="dataSource" />
        <div class="operate-btn">
          <van-button plain round type="primary" class="del-btn">删除</van-button>
          <van-button plain round type="primary">编辑</van-button>
          <van-button plain round type="primary">预览</van-button>
        </div>
      </div>
      <div class="proposal-item">
        <div class="title">陈先生的计划书这里是是是标题20个字占位</div>
        <p class="premium">保费：<span>¥1,289.00</span></p>
        <ProTable :columns="columns" class="table" :data-source="dataSource" />
        <div class="operate-btn">
          <van-button plain round type="primary" class="del-btn">删除</van-button>
          <van-button plain round type="primary">编辑</van-button>
          <van-button plain round type="primary">预览</van-button>
        </div>
      </div>
      <div class="proposal-item">
        <div class="title">陈先生的计划书这里是是是标题20个字占位</div>
        <p class="premium">保费：<span>¥1,289.00</span></p>
        <ProTable :columns="columns" class="table" :data-source="dataSource" />
        <div class="operate-btn">
          <van-button plain round type="primary" class="del-btn">删除</van-button>
          <van-button plain round type="primary">编辑</van-button>
          <van-button plain round type="primary">预览</van-button>
        </div>
      </div>
      <div class="proposal-item">
        <div class="title">陈先生的计划书这里是是是标题20个字占位</div>
        <p class="premium">保费：<span>¥1,289.00</span></p>
        <ProTable :columns="columns" class="table" :data-source="dataSource" />
        <div class="operate-btn">
          <van-button plain round type="primary" class="del-btn">删除</van-button>
          <van-button plain round type="primary">编辑</van-button>
          <van-button plain round type="primary">预览</van-button>
        </div>
      </div>
    </div>
  </ZaPageWrap>
</template>

<script setup lang="ts">
import ProTable from '@/components/ProTable/index.vue';

const searchValue = ref<string>('');

const columns = [
  {
    title: '险种名称',
    dataIndex: 'key1',
    width: 180,
  },
  {
    title: '保障期间',
    dataIndex: 'key2',
  },
  {
    title: '缴费期间',
    dataIndex: 'key4',
    width: 110,
  },
  {
    title: '保费',
    dataIndex: 'key5',
    width: 120,
  },
];
const dataSource = [
  {
    key1: '众安家庭共享',
    key2: '50万',
    key4: '一次交清',
    key5: '988.00',
  },
  {
    key1: '众安家庭共享',
    key2: '50万',
    key4: '一次交清',
    key5: '988.00',
  },
  {
    key1: '众安家庭共享',
    key2: '50万',
    key4: '一次交清',
    key5: '988.00',
  },
];

const handleSearchClick = () => {};
</script>

<style scoped lang="scss">
.page-history-proposal {
  :deep(.van-search) {
    margin: 30px 0;
  }
  :deep(.search) {
    width: 100%;
    min-height: 56px;
    line-height: 56px;
    .van-search__content {
      border-radius: 8px;
      .van-cell {
        padding: 0;
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
          color: #ff5840;
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
          width: 128px;
          height: 60px;
          font-size: 28px;
          border-radius: 32px;
          border: 1px solid #0d6efe;
          &:not(:first-child) {
            margin-left: 16px;
          }
        }
        .del-btn {
          color: #393d46;
          border: 1px solid #e6e6eb;
        }
      }
    }
  }
}
</style>
