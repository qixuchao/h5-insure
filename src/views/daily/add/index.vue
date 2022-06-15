<template>
  <ZaPageWrap :hide-header-placeholder="true" :hide-footer-placeholder="true" main-class="page-add-daily">
    <div></div>
    <van-form input-align="right">
      <DateSelect v-model="state.workDay" label="工作时间" :disabled="isView ? false : disabled" :is-view="isView" />
      <TextAndVoice
        v-model="state.data"
        name="content"
        label="工作日志"
        placeholder="请输入详细工作日志"
        :max="200"
        :disabled="disabled"
      />
      <div class="divider" />
      <div class="detail">
        <div class="detail-title-list">
          <div
            v-for="item in titleList"
            :key="item.tagName"
            :class="['detail-title-item', { active: item.active }]"
            @click="handleTitleClick(item)"
          >
            <img :src="item.active ? item.activeImage : item.image" class="image" />
            <div class="title">{{ item.tagName }}</div>
          </div>
        </div>
        <TextAndVoice v-if="titleList[0].active" v-model="titleList[0].data" label="优点" :disabled="disabled" />
        <TextAndVoice v-if="titleList[1].active" v-model="titleList[1].data" label="不足" :disabled="disabled" />
        <TextAndVoice v-if="titleList[2].active" v-model="titleList[2].data" label="心得" :disabled="disabled" />
        <TextAndVoice v-if="titleList[3].active" v-model="titleList[3].data" label="规划" :disabled="disabled" />
        <TextAndVoice v-if="titleList[4].active" v-model="titleList[4].data" label="团队规划" :disabled="disabled" />
      </div>
    </van-form>
  </ZaPageWrap>
  <div class="page-add-daily-footer">
    <div v-resize class="footer">
      <div v-if="!isView && !isCreate" class="delete-btn" @click="handleDelete">
        <ZaSvg name="delete" class="delete-icon" />
        删除
      </div>
      <van-button round class="btn ghost" @click="handleActivityDataClick">活动量数据</van-button>
      <van-button v-if="!isView" round class="btn" @click="handleSubmit">
        {{ disabled ? '编辑日志' : '保存日志' }}
      </van-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';
import { Toast, Dialog } from 'vant';
import { useRoute, useRouter } from 'vue-router';
import dayjs from 'dayjs';
import { useThemesStore } from '@/store/themes';

import useCheckBack from '@/hooks/useCheckBack';
import DateSelect from '../components/DateSelect/index.vue';
import TextAndVoice from '../components/TextAndVoice/index.vue';
import ZaVoice from '@/components/ZaVoice/index.vue';
import ZaSvg from '@/components/ZaSvg/index.vue';

import { saveDaily, queryDailyType, queryDailyDetail, deleteDaily } from '@/api/modules/daily';

const { getIconUrl } = useThemesStore();

const route = useRoute();
const router = useRouter();
const disabled = ref(false);
// 是否查看团队成员日志
const isView = ref(false);
const isCreate = ref(true);

const INPUT_TYPE = {
  TEXT: '1',
  VOICE: '2',
};

interface IData {
  content: string;
  voice: Array<{ voiceUrl: string; voiceDuration: string }>;
}

const state = reactive<{ workDay: string; data: IData }>({
  workDay: route.query.date || dayjs().format('YYYY-MM-DD'),
  data: { content: '', voice: [] },
});

const titleList = reactive<
  Array<{ tagName: string; image: string; activeImage: string; active: boolean; tagCode: string; data: IData }>
>([
  {
    tagName: '优点',
    image: getIconUrl('daily.advantageImage'),
    activeImage: getIconUrl('daily.advantageActiveImage'),
    active: false,
    tagCode: '',
    data: { content: '', voice: [] },
  },
  {
    tagName: '不足',
    image: getIconUrl('daily.insufficientImage'),
    activeImage: getIconUrl('daily.insufficientActiveImage'),
    active: false,
    tagCode: '',
    data: { content: '', voice: [] },
  },
  {
    tagName: '心得',
    image: getIconUrl('daily.experienceImage'),
    activeImage: getIconUrl('daily.experienceActiveImage'),
    active: false,
    tagCode: '',
    data: { content: '', voice: [] },
  },
  {
    tagName: '规划',
    image: getIconUrl('daily.planImage'),
    activeImage: getIconUrl('daily.planActiveImage'),
    active: false,
    tagCode: '',
    data: { content: '', voice: [] },
  },
  {
    tagName: '团队规划',
    image: getIconUrl('daily.teamPlanImage'),
    activeImage: getIconUrl('daily.teamPlanActiveImage'),
    active: false,
    tagCode: '',
    data: { content: '', voice: [] },
  },
]);

useCheckBack(state, titleList);

let defaultTagCode = '';
let dailyId = '';

const queryDetail = (data: any) => {
  queryDailyDetail(data).then((res) => {
    if (res.data.status === 200 && res.data.data) {
      console.log(res.data.data.workDay, 33);
      // 先重置全部内容
      state.data.content = '';
      state.data.voice = [];
      titleList.forEach((item) => {
        // eslint-disable-next-line
        item.data.content = '';
        // eslint-disable-next-line
        item.data.voice = [];
        // eslint-disable-next-line
        item.active = false;
      });

      state.workDay = res.data.data.workDay;
      dailyId = res.data.data.dailyId;
      state.data.voice = [];
      titleList[0].data.voice = [];
      titleList[1].data.voice = [];
      titleList[2].data.voice = [];
      titleList[3].data.voice = [];
      titleList[4].data.voice = [];
      res.data.data.detailList.forEach((item) => {
        switch (item.tagName) {
          case '工作日志':
            if (item.inputType === INPUT_TYPE.TEXT) {
              state.data.content = item.content;
            } else if (item.inputType === INPUT_TYPE.VOICE) {
              state.data.voice.push(item.contentVoice);
            }
            break;
          case '优点':
            titleList[0].active = true;
            if (item.inputType === INPUT_TYPE.TEXT) {
              titleList[0].data.content = item.content;
            } else if (item.inputType === INPUT_TYPE.VOICE) {
              titleList[0].data.voice.push(item.contentVoice);
            }
            break;
          case '不足':
            titleList[1].active = true;
            if (item.inputType === INPUT_TYPE.TEXT) {
              titleList[1].data.content = item.content;
            } else if (item.inputType === INPUT_TYPE.VOICE) {
              titleList[1].data.voice.push(item.contentVoice);
            }
            break;
          case '心得':
            titleList[2].active = true;
            if (item.inputType === INPUT_TYPE.TEXT) {
              titleList[2].data.content = item.content;
            } else if (item.inputType === INPUT_TYPE.VOICE) {
              titleList[2].data.voice.push(item.contentVoice);
            }
            break;
          case '规划':
            titleList[3].active = true;
            if (item.inputType === INPUT_TYPE.TEXT) {
              titleList[3].data.content = item.content;
            } else if (item.inputType === INPUT_TYPE.VOICE) {
              titleList[4].data.voice.push(item.contentVoice);
            }
            break;
          case '团队规划':
            titleList[4].active = true;
            if (item.inputType === INPUT_TYPE.TEXT) {
              titleList[4].data.content = item.content;
            } else if (item.inputType === INPUT_TYPE.VOICE) {
              titleList[4].data.voice.push(item.contentVoice);
            }
            break;
          default:
            break;
        }
      });
      useCheckBack(state, titleList);
    } else {
      // 当查看日志时，接口返回null视为日志被删除了，退出该页面
      if (isView.value) {
        Toast.fail('该日志被删除');
        router.back();
      }
    }
  });
};

onMounted(() => {
  queryDailyType().then((res) => {
    titleList.forEach((item) => {
      const dict = res.data.data.find((x) => x.itemName === item.tagName);
      if (dict) {
        // eslint-disable-next-line
        item.tagCode = dict.itemCode;
      }
    });
    const defaultDict = res.data.data.find((x) => x.itemName === '工作日志');
    if (defaultDict) {
      defaultTagCode = defaultDict.itemCode;
    }
    useCheckBack(state, titleList);
  });
  if (route.query.isView) {
    isView.value = true;
  }
  if (route.query.id) {
    disabled.value = true;
    isCreate.value = false;
    queryDetail({ dailyId: route.query.id, userCode: route.query.userId });
  }
});

const handleTitleClick = (item: typeof titleList[number]) => {
  if (disabled.value) {
    return;
  }
  // eslint-disable-next-line
  item.active = !item.active;
};

const handleSubmit = () => {
  if (disabled.value) {
    disabled.value = false;
    return;
  }
  const data: {
    dailyId: string;
    workDay: string;
    detailList: Array<{
      content?: string;
      contentVoice?: { voiceUrl?: string; voiceDuration: string; voiceFileKey?: string };
      inputType: string;
      tagCode: string;
      tagName: string;
    }>;
  } = {
    dailyId,
    workDay: dayjs(state.workDay).format('YYYY-MM-DD HH:mm:ss'),
    detailList: [],
  };
  if (state.data.content) {
    data.detailList.push({
      content: state.data.content,
      inputType: INPUT_TYPE.TEXT,
      tagCode: defaultTagCode,
      tagName: '工作日志',
    });
  }
  state.data.voice.forEach((item) => {
    data.detailList.push({
      contentVoice: { voiceUrl: item.voiceUrl, voiceDuration: item.voiceDuration },
      inputType: INPUT_TYPE.VOICE,
      tagCode: defaultTagCode,
      tagName: '工作日志',
    });
  });
  titleList.forEach((item) => {
    if (item.active) {
      if (item.data.content) {
        data.detailList.push({
          content: item.data.content,
          inputType: INPUT_TYPE.TEXT,
          tagCode: item.tagCode,
          tagName: item.tagName,
        });
      }
      if (item.data.voice && item.data.voice.length > 0) {
        item.data.voice.forEach((voice) => {
          data.detailList.push({
            contentVoice: { voiceUrl: voice.voiceUrl, voiceDuration: voice.voiceDuration },
            inputType: INPUT_TYPE.VOICE,
            tagCode: item.tagCode,
            tagName: item.tagName,
          });
        });
      }
    }
  });
  if (data.detailList.some((x) => x.content || x.contentVoice)) {
    saveDaily(data).then((res) => {
      if (res.data.status === 200) {
        Toast.success('保存成功');
        useCheckBack();
        router.back();
      }
    });
  } else {
    Toast.fail('请至少填写一项工作日志内容');
  }
};

const handleDelete = () => {
  Dialog.confirm({
    title: '确认删除该日志?',
  })
    .then(() => {
      deleteDaily(dailyId).then((res) => {
        if (res.data.status === 200) {
          Toast.success('删除成功');
          router.back();
        }
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

watch(
  () => state.workDay,
  (newVal, oldVal) => {
    if (!dayjs(newVal).isSame(dayjs(oldVal), 'day')) {
      queryDetail({ workDay: dayjs(newVal).format('YYYY-MM-DD HH:mm:ss'), userCode: route.query.userId });
    }
  },
);

const handleActivityDataClick = () => {
  if (route.query.isPersonal) {
    router.push(`/activityVolumeAnalysis?date=${state.workDay}`);
  } else {
    router.push(
      `/activityVolumeAnalysis?date=${state.workDay}&isTeamChecked=Y&userId=${route.query.userId}&userName=${route.query.userName}`,
    );
  }
};
</script>

<style lang="scss" scoped>
.page-container {
  display: flex;
  flex-direction: column;
}

::v-deep .page-add-daily {
  flex: 1;
  overflow-y: auto;
  .divider {
    width: 100%;
    height: 20px;
    background: #f6f6f6;
  }
  .detail {
    .detail-title-list {
      display: flex;
      padding: 30px;
      justify-content: space-between;
      .detail-title-item {
        width: calc(20% - 14px);
        height: 150px;
        border: 2px solid $daily-add-tag-border;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #c98c88;
        &.active {
          background: $daily-add-tag-background-active;
          color: $primary-color;
        }
        .image {
          width: 50px;
          height: 50px;
          transform: scale(2);
        }
        .title {
          margin-top: 10px;
          font-size: $zaui-font-size-sm;
          font-weight: 600;
          line-height: 37px;
        }
      }
    }
  }
}

.page-add-daily-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 9;
  .footer {
    height: 150px;
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    align-items: center;
    background: #fff;
    box-shadow: 0px -2px 10px 0px #f6f6f6;
    .delete-btn {
      width: 80px;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #969696;
      font-size: $zaui-font-size-sm;
      line-height: 30px;
      .delete-icon {
        font-size: $zaui-font-size-lg;
        margin-bottom: 8px;
      }
    }
    .btn {
      flex: 1;
      margin: 0 20px;
      height: 88px;
      background: $btn-background;
      border-radius: 44px;
      font-size: $zaui-font-size-lg;
      font-weight: 600;
      color: #fff;
      &.ghost {
        background: #fff;
        border: 1px solid $primary-color;
        color: $primary-color;
      }
    }
  }
}
</style>
