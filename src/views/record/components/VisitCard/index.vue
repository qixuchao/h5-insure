<template>
  <div class="comp comp-visit-card">
    <div v-if="showRemoveIcon" class="visit-card-header" @click="handleRemove">
      <img class="delete-icon" :src="deleteIcon" />
    </div>
    <div class="visit-card-container" @click="toDetail">
      <h3>{{ data.visitType }}</h3>
      <dl v-if="data.feedback || data.feedbackInputText || data?.feedbackInputVoice?.length > 0" class="card-dl">
        <dt v-if="data.feedback" class="card-dt">{{ data.feedback }}</dt>
        <dd v-if="data.feedbackInputText" class="card-dd">{{ data.feedbackInputText }}</dd>
        <dd v-if="data?.feedbackInputVoice?.length > 0" class="voice-list">
          <div v-for="(item, index) in data.feedbackInputVoice" :key="index" class="voice-item">
            <div
              class="voice"
              :style="{ width: `${(item.voiceDuration / 60) * 100}%` }"
              @click.stop="voiceClick(item.voiceUrl, index)"
            >
              <ZaPlay class="voice-icon" :play="playIndex === index" />
              <div class="duration">{{ item.voiceDuration }}"</div>
            </div>
          </div>
        </dd>
      </dl>
      <dl v-if="data.result || data.resultInputText || data?.resultInputVoice?.length > 0" class="card-dl">
        <dt v-if="data.result" class="card-dt">{{ data.result }}</dt>
        <dd v-if="data.resultInputText" class="card-dd">{{ data.resultInputText }}</dd>
        <dd v-if="data?.resultInputVoice?.length > 0" class="voice-list">
          <div v-for="(item, index) in data.resultInputVoice" :key="index" class="voice-item">
            <div
              class="voice"
              :style="{ width: `${(item.voiceDuration / 60) * 100}%` }"
              @click.stop="voiceClick(item.voiceUrl, index + 10)"
            >
              <ZaPlay class="voice-icon" :play="playIndex === index + 10" />
              <div class="duration">{{ item.voiceDuration }}"</div>
            </div>
          </div>
        </dd>
      </dl>
    </div>
  </div>
  <div v-if="visitAddress?.trim()" class="visit-address">
    <img :src="host" class="bg-host-class" /><span class="bg-span">{{ visitAddress }}</span>
  </div>
</template>

<script lang="ts" setup>
import { Dialog } from 'vant';
import { PropType } from 'vue';
import { useRouter } from 'vue-router';
import { play, voicePause, voiceStop } from '@/utils/record';

import { VisitItemType } from '@/api/modules/record.d';
import { removeVisitRecord } from '@/api/modules/record';
import deleteIcon from '@/assets/images/record/deleteIcon.png';
import host from '@/assets/images/record/host1.png';
import ZaPlay from '@/components/ZaVoice/play.vue';

const history = useRouter();
const route = useRoute();
const playIndex = ref(-1);
const { agentCustomerId, customerType, customerName } = route.query;
const props = defineProps({
  data: { type: Object as PropType<VisitItemType>, default: () => {} },
  info: {
    type: Object,
    default: () => ({
      agentCustomerId: '',
      customerType: '',
      customerName: '',
    }),
  },
});

const showRemoveIcon = computed(() => props.data.dataSource !== 'push');

const visitAddress = computed(() => {
  return `${props.data.visitAddress ? props.data.visitAddress.replace(/#/g, '') : ''} ${
    props.data.visitAddressDetail ? props.data.visitAddressDetail.replace(/#/g, '') : ''
  }`;
});
const emit = defineEmits(['onDeleteSuccess']);

const handleRemove = () => {
  Dialog.confirm({
    title: '确认删除该记录吗？',
  }).then(() => {
    removeVisitRecord({
      visitId: props.data.visitId,
      // userId: 'userid02071600',
      // tenantId: '0',
    })
      .then(() => {
        emit('onDeleteSuccess');
      })
      .catch((err) => {
        console.log(err);
      });
  });
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
onBeforeUnmount(() => {
  voiceStop();
});

const toDetail = () => {
  if (showRemoveIcon.value) {
    history.push(
      `/record/${props.data.visitId}?agentCustomerId=${agentCustomerId}&customerType=${customerType}&customerName=${customerName}`,
    );
  }
};
</script>

<style lang="scss" scoped>
.bg-host-class {
  width: 25px;
  margin-right: 5px;
}
.bg-span {
  vertical-align: top;
}
.comp-visit-card {
  position: relative;
  overflow: hidden;
  // background: linear-gradient(180deg, #fff7f8 0%, #ffffff 100%);
  // box-shadow: 0px 4px 10px 0px rgba(229, 229, 232, 0.47);
  border-radius: 20px;
  border: 1px solid #f8e3e3;
  padding: 30px;
  h3 {
    font-size: 30px;
    font-weight: 500;
    color: #343434;
  }
  .card-dl {
    padding: 20px 0px;
    border-bottom: 2px solid #ececec;
    .card-dt {
      font-size: 28px;
      font-weight: 400;
      color: #c98c88;
      margin-bottom: 6px;
    }
    .card-dd {
      font-size: 28px;
      font-weight: 400;
      color: #343434;
    }
  }
  .card-dl:last-child {
    border-bottom: none;
    margin-bottom: 0px;
    padding-bottom: 0px;
  }
  .voice-list {
    .voice-item {
      display: flex;
      align-items: center;
      margin-top: 20px;
      .voice {
        display: flex;
        height: 76px;
        line-height: 76px;
        background: $voice-background;
        border-radius: 20px;
        font-size: $zaui-font-size-md;
        font-weight: 400;
        color: $voice-color;
        min-width: 130px;
        .voice-icon {
          margin-left: 25px;
          margin-right: 10px;
        }
        .duration {
          line-height: 76px;
        }
      }

      .close-icon {
        font-size: 38px;
        margin-left: 26px;
        color: #e0e0e0;
      }
    }
    .voice-item:first-child {
      margin-top: 6px;
    }
  }
}
.visit-card-header {
  position: absolute;
  right: 0px;
  top: 0px;
  .delete-icon {
    width: 39px;
    height: 39px;
  }
}
.visit-address {
  font-size: 24px;
  font-weight: 400;
  color: #b38e57;
  margin-top: 14px;
}
</style>
