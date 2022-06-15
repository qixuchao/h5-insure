<template>
  <ZaPageWrap main-class="page-targetDetail">
    <div class="top">
      <Title :title="detailInfo.name" title-class="aaa">
        <template #head>
          <div class="head-div"></div>
        </template>
        <template v-if="detailInfo.goalId && detailInfo.allowUpdate === 'Y'" #tail>
          <div class="title-tail" @click="onRefreshTargetClick">
            <img :src="getIconUrl('target.refreshIcon')" alt="" />
            恢复默认目标
          </div>
        </template>
      </Title>
      <ZaTable :columns="columns" :data-source="dataSource" />
    </div>
    <Divided />
    <div class="bottom">
      <Title title="目标说明" title-class="aaa">
        <template #head>
          <div class="head-div"></div>
        </template>
      </Title>
      <div class="target-explain">{{ detailInfo.remark || '暂无目标说明' }}</div>
    </div>
    <!-- <template #footer>
      <div class="btn-out">
        <van-button
          v-if="detailInfo.allowUpdate === 'Y'"
          round
          plain
          type="primary"
          color="#EF4034"
          class="btn-left"
          @click="onSetTarget"
          >设置目标值</van-button
        >
        <van-button round type="primary" class="btn-right" @click="onSaveTarget">保存为我的目标</van-button>
      </div>
    </template> -->
  </ZaPageWrap>
  <div class="target-detail-footer">
    <div class="btn-out">
      <van-button
        v-if="detailInfo.allowUpdate === 'Y'"
        round
        plain
        type="primary"
        color="#EF4034"
        class="btn-left"
        @click="onSetTarget"
        >设置目标值</van-button
      >
      <van-button round type="primary" class="btn-right" @click="onSaveTarget">保存为我的目标</van-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Dialog, Toast } from 'vant';
import dayjs from 'dayjs';

import { searchTargetDetail, resetDefaultTarget, saveTarget } from '@/api/modules/target';
import { resetList, resetColoum, resetListToBack } from '../components/detailList';
import Storage from '@/utils/storage';
import Title from '../components/Title.vue';
import Divided from '../components/Divided.vue';
import ZaTable from '@/components/ZaTable/index.vue';

import { useThemesStore } from '@/store/themes';

const { getIconUrl } = useThemesStore();
const router = useRouter();
const route = useRoute();
const storage = new Storage({ source: 'localStorage' });

const columns: any = reactive([]);
const dataSource = ref<any>([]);
const detailInfo = ref<any>({});

const onRefreshTargetClick = () => {
  Dialog.confirm({
    theme: 'round-button',
    message: '确定要恢复目标默认值吗？',
  })
    .then(async () => {
      // on confirm
      const res2 = await resetDefaultTarget({
        agencyId: detailInfo.value.agencyId,
        tplGoalId: detailInfo.value.tplGoalId,
        goalId: detailInfo.value.goalId,
      });
      const res = await searchTargetDetail({
        goalId: route.query.goalId,
        tplGoalId: route.query.tplGoalId,
        effectiveTime: `${dayjs().format('YYYY')}-01-01 00:00:00`,
        expriyTime: `${dayjs().format('YYYY')}-12-31 23:59:59`,
      });
      detailInfo.value = res.data.data;
      const { detailList, goalPeriods } = res.data.data;
      columns.splice(0);
      columns.push({ title: '目标项', dataIndex: 'code' }, ...resetColoum(detailList));
      dataSource.value = resetList(detailList);
      Toast('恢复成功');
    })
    .catch(() => {
      // on cancel
    });
};

const onSetTarget = () => {
  router.push({
    name: 'SetTarget',
    params: { info: JSON.stringify(toRaw(dataSource.value)), name: detailInfo.value.name },
  });
};

const onSaveTarget = () => {
  saveTarget({
    // agencyId: detailInfo.value.agencyId,
    channelId: detailInfo.value.channelId,
    goalId: route.query.goalId,
    tplGoalId: detailInfo.value.tplGoalId,
    name: detailInfo.value.name,
    effectiveTime: detailInfo.value.effectiveTime,
    expriyTime: detailInfo.value.expriyTime,
    goalPeriods: detailInfo.value.goalPeriods,
    goalItems: detailInfo.value.goalItems,
    remark: detailInfo.value.remark,
    detailList: resetListToBack(dataSource.value, detailInfo.value.goalPeriods.split('，')),
    dml: route.query.setting === 'true' ? 'U' : 'I',
  }).then((res) => {
    console.log(res.data.status);
    if (res.data.status !== 200) {
      Toast('保存失败');
    } else {
      Toast('保存成功');
      router.back();
    }
  });
};

onMounted(async () => {
  const storageTableList = storage.get('targetInfoData');
  storage.remove('targetInfoData');
  const { setting } = route.query;
  const res = await searchTargetDetail({
    goalId: setting === 'true' ? route.query.goalId : '',
    tplGoalId: route.query.tplGoalId,
    effectiveTime: `${dayjs().format('YYYY')}-01-01 00:00:00`,
    expriyTime: `${dayjs().format('YYYY')}-12-31 23:59:59`,
  });
  detailInfo.value = res.data.data;
  const { detailList, goalPeriods } = res.data.data;
  columns.push({ title: '目标项', dataIndex: 'code' }, ...resetColoum(detailList));
  if (storageTableList) {
    dataSource.value = storageTableList;
  } else {
    dataSource.value = resetList(detailList);
  }
});
</script>

<style lang="scss" scoped>
.page-targetDetail {
  .head-div {
    width: 6px;
    height: 28px;
    background: $primary-color;
    border-radius: 4px;
    margin-right: 16px;
  }
  .top {
    padding: 0 30px 60px 30px;
    .title-tail {
      text-align: center;
      height: 37px;
      font-size: $zaui-font-size-md;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: $primary-color;
      line-height: 37px;
      img {
        width: 20px;
        height: 20px;
        margin-right: 5px;
      }
    }
  }
  .bottom {
    padding: 0 30px 40px 30px;
    .target-explain {
      padding: 21px 30px 30px 30px;
      background: #f6f6fa;
      border-radius: 6px 30px 30px 30px;
      font-size: $zaui-font-size-sm;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #969696;
      line-height: 38px;
    }
  }
}
.target-detail-footer {
  position: sticky;
  bottom: 0;
  .btn-out {
    width: 100%;
    height: 150px;
    background: #ffffff;
    box-shadow: 0px -2px 10px 0px #f6f6f6;
    border-radius: 2px;
    padding: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .btn-left,
  .btn-right {
    width: 100%;
  }
  .btn-left {
    margin-right: 20px;
  }
}
</style>
