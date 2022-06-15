<template>
  <div :id="'a' + questionNum" class="issue-card">
    <div class="issue-card-top">
      <div class="issue-card-header">
        <div class="card-num">
          <div>
            <span class="active">{{ questionNum + 1 }}</span
            >/<span>{{ questionLength }}</span>
          </div>
          <div><img :src="data.icon" alt="" class="card-icon" /></div>
        </div>

        <div class="issue-card-title">
          {{ data.title }}<span class="issue-card-descTitle">{{ data.descTitle }}</span>
        </div>
      </div>
      <div class="issue-card-container">
        <template v-if="data.type?.name === 'group-list' && showEdit">
          <div class="group-container">
            <div
              v-for="(issue, key) in data.type.data"
              :key="key"
              :class="['group-item', { active: issue.itemCode === answerObj?.itemCode }]"
              @click="handleChangeItem(issue)"
            >
              {{ issue.itemName }}
            </div>
          </div>
        </template>

        <template v-else-if="data.type?.name === 'time' && showEdit">
          <DateTime v-model:dateTime="answerObj.dateTime" />
        </template>
        <template v-else-if="data.type?.name === 'location' && showEdit">
          <VisitMap v-model:address="answerObj.itemName" v-model:point="answerObj.point" />
        </template>
        <template v-else-if="data.type?.name === 'upload' && showEdit">
          <!-- <div v-for="(item, index) in fields.fileList" :key="index" class="img-content">
            <img :src="item" alt="" class="img-item-content" />
          </div> -->
          <div class="za-record-upload">
            <template v-if="fields.length > 0">
              <img src="@/assets/images/card/del.png" alt="" class="del" @click="handleDeleteFile" />
              <div class="img-content">
                <img :src="fields[0]" alt="" class="img-item-content" />
              </div>
            </template>
            <div v-else class="upload-container" @click="handleUpload">
              <div class="upload-btn">
                <img :src="getIconUrl('record.uploadIcon')" alt="" class="btn-icon" />
              </div>
            </div>
            <!-- <van-uploader
              v-model="fields.fileList"
              :show-upload="fields.fileList.length < 1"
              :after-read="afterRead"
              class="record-upload-icon"
              :max-count="1"
              :max-size="5 * 1024 * 1024"
              :deletable="false"
            >
              <template #delete>
                <div class="upload-container">
                  <div class="upload-btn">
                    <img :src="uploadIcon" alt="" class="btn-icon" />
                  </div>
                </div>
              </template>
            </van-uploader> -->
          </div>
        </template>
      </div>
    </div>
    <template v-if="data.descInfo && showEdit">
      <van-form ref="formRef">
        <div class="desc-container">
          <div v-if="data.descInfo.schedule && answerObj.itemCode === 'Y'" class="desc-schedule">
            <div class="schedule-header">
              <div class="title">{{ data.descInfo.schedule.title }}</div>
              <div class="desc">{{ data.descInfo.schedule.descTitle }}</div>
            </div>
            <div class="schedule-list">
              <div v-for="(item, index) in data.descInfo.schedule.list" :key="index" class="schedule-item">
                <div>{{ item.title }}</div>
                <div v-if="item.type === 'startTime'">
                  <DateTime v-model:dateTime="answerObj.startTime" :has-border="false" />
                </div>
                <div v-else-if="item.type === 'endTime'">
                  <DateTime v-model:dateTime="answerObj.endTime" :has-border="false" />
                </div>
                <div v-else>
                  <van-field
                    v-model="answerObj.scheduleTitle"
                    name="scheduleTitle"
                    :rules="[
                      {
                        validator: (val) => {
                          return /^[\u4e00-\u9fa5a-zA-Z0-9]+$/.test(val);
                        },
                        trigger: 'onChange',
                        message: '请输入正确内容',
                      },
                    ]"
                    :maxlength="15"
                    placeholder="请输入"
                    class="title-input"
                    @focus="handleFocus"
                  />
                </div>
              </div>
            </div>
          </div>
          <div v-if="data.descInfo.schedule ? answerObj.itemCode === 'Y' : true">
            <div class="desc-header">
              <div class="title">{{ data.descInfo.title }}</div>
              <div v-if="data.descInfo.hasSound && voiceList.length < 5" class="sound" @click="handleVoiceClick">
                <img :src="soundIcon" class="sound-icon" />
                <span class="sound-font">语音</span>
              </div>
            </div>
            <div :id="'b' + questionNum" class="desc-content">
              <van-field
                v-model="message"
                class="record-field"
                rows="3"
                autosize
                :rules="[
                  {
                    validator: (val) => {
                      return !val.match(/^\s+$/);
                    },
                    trigger: 'onChange',
                    message: '请输入正确内容',
                  },
                ]"
                type="textarea"
                v-bind="data.descInfo.textRules"
                show-word-limit
                @focus="handleFocus"
              />
            </div>
          </div>
        </div>
      </van-form>
    </template>

    <ZaVoice v-model:visible="voiceShow" :max-time="60" @record="handleRecord" />
    <div v-if="voiceList.length > 0 && showEdit" class="voice-list">
      <div v-for="(item, index) in voiceList" :key="index" class="voice-item">
        <div
          class="voice"
          :style="{ width: `${(item.voiceDuration / 60) * 100}%` }"
          @click="voiceClick(item.voiceUrl, index)"
        >
          <ZaPlay class="voice-icon" :play="playIndex === index" />
          <div class="duration">{{ item.voiceDuration }}"</div>
        </div>
        <ZaSvg name="close" class="close-icon" @click="handleDeleteVoice(index)" />
      </div>
    </div>
    <div v-if="data.hasSureBtn && showEdit" class="issue-card-bottom" @click="handleSubmit">
      <div :class="['issue-bottom-container', { disabled: disabledBtn }]">确认</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { PropType } from 'vue';
import { Dialog, Toast } from 'vant';
import dayjs from 'dayjs';
import { isEmpty } from 'lodash';

import { IssueType, AnswerObjType } from '@/api/modules/record.d';
import { uploadBase64File, getPathByKey } from '@/api/modules/businessCard';
import soundIcon from '@/assets/images/record/sound.png';
// import uploadIcon from '@/assets/images/record/upload.png';
import ZaVoice from '@/components/ZaVoice/index.vue';
import { play, voicePause, voiceStop } from '@/utils/record';
import imageSelect from '@/utils/imageSelect';
import { useThemesStore } from '@/store/themes';
import ZaPlay from '@/components/ZaVoice/play.vue';

import DateTime from '../DateTime/index.vue';
import VisitMap from '../VisitMap/index.vue';

import './index.scss';

const props = defineProps({
  questionNum: {
    type: Number,
    default: 0,
  },
  fileList: {
    type: Array as PropType<any[]>,
    default: () => [],
  },
  questionLength: {
    type: Number,
    default: 1,
  },
  data: {
    type: Object,
    default: () => Object,
  },
  hasAnswer: {
    type: Boolean,
    default: false,
  },
  showEdit: {
    type: Boolean,
    default: true,
  },
});
const playIndex = ref(-1);

const { getIconUrl } = useThemesStore();

const emit = defineEmits(['onClickItem', 'update:fileList']);

const currentDate = dayjs().format('YYYY-MM-DD HH:mm');
const currentTime = dayjs()
  .hour(dayjs().hour() + 1)
  .minute(0)
  .format('YYYY-MM-DD HH:mm');
const initAnswer = {
  itemCode: '',
  message: '',
  voiceList: [],
  itemName: '',
  scheduleTitle: '',
  dateTime: currentDate,
  startTime: currentTime,
  endTime: currentTime,
  point: {},
};

// 选中答案
const answerObj = ref<AnswerObjType>(initAnswer);
const disabledBtn = ref(props.questionNum !== 1);
const formRef = ref();
const voiceList = ref<any>([]);
const voiceShow = ref<boolean>(false);
const message = ref('');
const fields = ref(props.fileList);

const handleVoiceClick = () => {
  voiceShow.value = true;
  voiceStop();
  playIndex.value = -1;
};
onBeforeUnmount(() => {
  voiceStop();
  playIndex.value = -1;
});
const handleUpload = () => {
  imageSelect(1).then((urls) => {
    fields.value = urls || [];
    emit('update:fileList', urls || []);
  });
};
const handleFocus = (e: any) => {
  setTimeout(() => {
    if (e.target) {
      e.target.scrollIntoView();
    }
  }, 200);
};
const handleRecord = (res: { file: string; duration: string }) => {
  const { file, duration } = res;
  voiceList.value.push({ voiceUrl: file, voiceDuration: duration });
};

const voiceClick = (src: string, index: number) => {
  if (playIndex.value === index) {
    voicePause();
    playIndex.value = -1;
  } else {
    play(src, () => {
      playIndex.value = -1;
    });
    playIndex.value = index;
  }
};
const handleDeleteVoice = (index: number) => {
  Dialog.confirm({
    title: '确认删除此语音吗？',
  })
    .then(() => {
      voiceList.value.splice(index, 1);
      voiceStop();
      playIndex.value = -1;
    })
    .catch((err) => {
      console.log(err);
    });
};
// 提交
const handleSubmit = () => {
  voiceStop();
  playIndex.value = -1;
  if ([2, 3, 4, 5].includes(props.questionNum) && disabledBtn.value) {
    return;
  }
  emit('onClickItem', toRaw(answerObj.value), props.questionNum);
  answerObj.value = initAnswer;
  voiceList.value = [];
  message.value = '';
  voiceShow.value = false;
};

const handleChangeItem = (issue: AnswerObjType) => {
  if (props.data.descInfo?.schedule && issue.itemCode === 'Y') {
    answerObj.value = {
      ...answerObj.value,
      ...issue,
      scheduleTitle: '',
      startTime: currentTime,
      endTime: currentTime,
      message: '',
    };
    message.value = '';
  } else {
    answerObj.value = { ...answerObj.value, ...issue };
  }
  if (!props.data.hasSureBtn) {
    handleSubmit();
  }
};

const handleDeleteFile = () => {
  fields.value = [];
  emit('update:fileList', fields.value);
};
// const afterRead = async (file: any) => {
//   // 此时可以自行将文件上传至服务器
//   const res = await uploadBase64File({ fileBase64: file.content });
//   const { status, data } = res.data;
//   const resp = await getPathByKey({ key: data });
//   const { data: dataUrl } = resp.data;
//   fields.originFields = [{ url: dataUrl.fileOriginalUrl }];
//   emit('update:fileList', fields.originFields);
// };
watch(message, () => {
  answerObj.value = {
    ...answerObj.value,
    message: message.value,
  };
});
watch(voiceList, () => {
  answerObj.value = {
    ...answerObj.value,
    voiceList: voiceList.value,
  };
});

watch(
  () => props.fileList,
  () => {
    fields.value = props.fileList || [];
  },
);
watch(
  () => props.data,
  () => {
    message.value = '';
    voiceList.value = [];
    voiceShow.value = false;
    disabledBtn.value = props.questionNum !== 1;
    if (props.hasAnswer) {
      answerObj.value = props.data.answer;
      if (props.data.answer.message) {
        message.value = props.data.answer.message;
      }
      if (props.data.answer.voiceList) {
        voiceList.value = props.data.answer.voiceList;
      }
    }
  },
  {
    deep: true,
  },
);

watch(
  () => answerObj.value,
  () => {
    // 地图
    if (props.questionNum === 2 && isEmpty(answerObj.value.point) && isEmpty(answerObj.value.message)) {
      // Toast.fail('拜访地点不能为空');
      disabledBtn.value = true;
      return;
    }
    // 4、5题目验证
    if (
      [3, 4].includes(props.questionNum) &&
      isEmpty(answerObj.value.itemCode) &&
      isEmpty(answerObj.value.message) &&
      isEmpty(answerObj.value.voiceList)
    ) {
      // Toast.fail('拜访地点不能为空');
      disabledBtn.value = true;

      return;
    }
    if (props.questionNum === 5 && isEmpty(answerObj.value.itemCode)) {
      disabledBtn.value = true;
      return;
      // Toast.fail('拜访地点不能为空');
    }
    if (
      props.questionNum === 5 &&
      answerObj.value.itemCode === 'Y' &&
      (isEmpty(answerObj.value.message) ||
        isEmpty(answerObj.value.scheduleTitle) ||
        <string>answerObj.value.startTime > <string>answerObj.value.endTime)
    ) {
      if (<string>answerObj.value.startTime > <string>answerObj.value.endTime) {
        Toast.fail('结束时间需要大于开始时间');
      }
      disabledBtn.value = true;
      return;
    }
    if (formRef.value && answerObj.value.itemCode !== 'N') {
      formRef.value
        ?.validate?.()
        .then(() => {
          disabledBtn.value = false;
        })
        .catch(() => {
          disabledBtn.value = true;
        });
    } else {
      disabledBtn.value = false;
    }
  },
  {
    deep: true,
  },
);
</script>
